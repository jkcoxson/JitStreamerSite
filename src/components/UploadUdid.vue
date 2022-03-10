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

        <footer>Copyright © 2022 Jackson Coxson</footer>
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
