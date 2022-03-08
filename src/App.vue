<template>
  <img alt="AltStream Logo" src="./assets/logo.png" width="200" />
  <HelloWorld msg="Welcome to the Public AltServer portal!" />
  <!-- idk why this is an error, but it works so -->
</template>

<script>
// That moment when you literally have 3 different comment syntaxes...
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
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
</style>
