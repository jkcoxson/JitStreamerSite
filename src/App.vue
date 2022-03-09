<template>
    <div v-if="!this.connected"><LoadingScreen /></div>
    <div v-else-if="!this.validIp"><IpError /></div>
    <div v-else-if="!this.validUdid"><UploadUdid /></div>
    <div v-else><JitStore /></div>
</template>

<script>
// That moment when you literally have 3 different comment syntaxes...
import IpError from './components/IpError.vue';
import LoadingScreen from './components/LoadingScreen.vue';
import JitStore from './components/JitStore.vue';
import UploadUdid from './components/UploadUdid.vue';

let NetStack = require('./netstack.js');
// const axios = require('axios');

export default {
    name: 'App',
    components: {
        IpError,
        LoadingScreen,
        JitStore,
        UploadUdid,
    },
    beforeCreate() {
        console.log('Starting JitStreamer...');
        console.log('Connecting to websocket...');
        this.connected = false;
        this.validIp = false;
        this.validUdid = false;
        NetStack.getSomething();
        // Send a post request to the server to check the status of the IP
        // axios
        //     .post('/status/')
        //     .then(function (response) {
        //         console.log(response);
        //         if (response.data.status === 'success') {
        //             console.log('Connected to websocket!');
        //             this.connected = true;
        //         } else {
        //             console.log('Not connected to websocket!');
        //             this.connected = false;
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        setTimeout(() => {
            this.connected = true;
        }, 3000);
    },
    data() {
        return {
            connected: false,
            validIp: false,
            validUdid: false,
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
img {
    /* make square circle */
    border-radius: 200px;
}
footer {
    margin: 10px 0;
    text-align: center;
    font-size: 12px;
    color: darkblue;
}
</style>
