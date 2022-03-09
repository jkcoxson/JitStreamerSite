<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            For assistance on setting up your device, please visit the
            <a
                href="https://discord.gg/WsT2hcwRVy"
                target="_blank"
                rel="noopener"
                >official Discord server</a
            >.
        </p>
        <br />
        <h3>1. Upload your mobile pairing file to recieve a key</h3>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <input type="file" @change="uploadFile" multiple />
            </div>
            <div class="form-group">
                <button class="btn btn-success btn-block btn-lg">Upload</button>
            </div>
        </form>
        <!-- This is hideous -->
        <h3>
            2. Install
            <a
                href="https://apps.apple.com/us/app/wireguard/id1441195209"
                target="_blank"
                rel="nooper"
            >
                WireGuard</a
            >
            from the App Store
        </h3>
        <p>
            Download the app and import the config file that uploading your
            pairing file returns to you. You can then toggle the switch to
            connect to the server.
        </p>
        <h3>3. Install the JIT shortcut</h3>
        <!-- todo make this not a rickroll -->
        <p>
            You must create your own shortcut in the shortcuts app first, but
            then you can use
            <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="nooper"
                >the JIT Launcher Shortcut</a
            >.
        </p>
        <h3>4. Profit</h3>
        <br /><br />
        <footer>
            Copyright © 2022 Jackson Coxson. All rights reserved. Learn more
            about this website at JitStreamer's Discord server.
        </footer>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    // Post the file and UDID to the server
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            const formData = new FormData();
            formData.append('file', this.file);
            console.log(formData);
            axios
                .post('/upload/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then(function (response) {
                    // Download the response as a file
                    console.log(response);
                    const url = window.URL.createObjectURL(
                        new Blob([response.data])
                    );
                    const link = document.createElement('a');
                    link.href = url;
                })
                .catch(function (error) {
                    console.log(error);
                    alert('Crap went wrong while uploading your file');
                });
        },
        uploadFile(e) {
            this.file = e.target.files[0];
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
