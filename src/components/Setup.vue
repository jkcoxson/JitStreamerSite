<template>
    <div class="main">
        <img alt="AltStream Logo" src="../assets/logo.png" width="300" />
        <br />
        <h1>Welcome to JitStreamer!</h1>
        <p>To get connected to the network, you must follow these steps</p>
        <br />
        <h3>1. Connect to the VLAN</h3>
        <p>
            Install
            <a
                href="https://apps.apple.com/us/app/zerotier-one/id1084101492"
                target="_blank"
                rel="nooper"
            >
                ZeroTier One</a
            >
            from the App Store
        </p>
        <p>Open ZeroTier and enter 017c0c264be7ec5b to join the VLAN.</p>
        <h3>2. Download the shortcut</h3>
        <p>
            Note: if you haven't ever created one of your own shortcuts, you
            won't be able to import this one.
        </p>
        <p>
            Download the shortcut from
            <a
                href="https://www.icloud.com/shortcuts/708e9151c0d548c0b5c79f5cddf58caf"
                target="_blank"
                rel="nooper"
            >
                here</a
            >.
        </p>
        <h3>3. Generate your pairing file</h3>
        <p>Note: you'll only need to generate this file once.</p>
        <p>
            Grab a computer and download
            <a
                href="https://github.com/osy/Jitterbug/releases/"
                target="_blank"
                rel="nooper"
            >
                Jitterbug Pair</a
            >
            for your computer's OS. Give it a run and follow the onscreen
            instructions.
        </p>
        <p>
            Transfer your pairing file to your iDevice and be prepared to select
            it with the shortcut
        </p>
        <h3>4. Profit!</h3>
        <p>
            Once connected to the VLAN, run the shortcut you downloaded. It will
            ask for your pairing file. Need help? Join the Discord server.
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
export default {
    name: 'IpError',
    props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
a {
    color: #42b983;
}
</style>
