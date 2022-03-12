<template>
    <div class="main">
        <img
            alt="AltStream Logo"
            src="../assets/danger_triangle.png"
            width="300"
        />
        <br />
        <h1>Not Connected</h1>
        <p>
            You must run this site from your iDevice connected to the VLAN so
            your data can be loaded from the server.
        </p>
        <p>
            If you think this is a mistake, please go to https://69.69.0.1/
            instead.
        </p>
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
        <p>Open ZeroTier and enter af415e486fab772d to join the VLAN.</p>
        <h3>2. (Optional) Modify the DNS</h3>
        <p>Change the DNS settings in ZeroTier to 69.69.0.1</p>
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
