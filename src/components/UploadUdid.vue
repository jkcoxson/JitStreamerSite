<template>
    <div class="main">
        <h1>Device Registration</h1>
        <h3>Upload your mobile pairing file to register your device</h3>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <input type="file" @change="uploadFile" multiple />
            </div>
            <div class="form-group">
                <button class="btn btn-success btn-block btn-lg">Upload</button>
            </div>
        </form>
        <h3>Instructions</h3>
        <p>
            To register your device, you must first upload a pairing file. To
            get this pairing file, you will need to use JitterBugPair. You can
            find more information on JitterBug's GitHub readme, or the
            JitStreamer Discord server.
        </p>

        <footer>
            Copyright © 2022 Jackson Coxson
            <a
                href="https://discord.gg/WsT2hcwRVy"
                target="_blank"
                rel="nooper"
            >
                Discord Server</a
            >
        </footer>
    </div>
</template>

<script>
let NetStack = require('../netstack.js');
export default {
    name: 'UploadUdid',
    props: {},
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            NetStack.submitPairingFile(this);
        },
        uploadFile(e) {
            this.pairingFile = e.target.files[0];
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    margin: 40px 0 0;
}
h3 {
    margin: 40px 0 0;
}
a {
    color: #42b983;
}
</style>
