<template>
    <div class="main">
        <img alt="AltStream Logo" src="../assets/loading.gif" width="300" />
        <br />
    </div>
</template>

<script>
export default {
    name: 'LoadingScreen',
    props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
