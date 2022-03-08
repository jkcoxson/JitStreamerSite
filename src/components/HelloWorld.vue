<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide on how to set up your device, please visit the
      <a href="https://discord.gg/WsT2hcwRVy" target="_blank" rel="noopener"
        >official Discord server</a
      >.
    </p>
    <h3>Enter your UDID in the box below</h3>
    <input
      type="text"
      v-model="udid"
      placeholder="UDID"
      @keyup.enter="connect"
    />
    <h3>Upload your mobile pairing file</h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <input type="file" @change="uploadFile" multiple />
      </div>
      <div class="form-group">
        <button class="btn btn-success btn-block btn-lg">Upload</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  // Post the file and UDID to the server
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("udid", this.udid);
      console.log(formData);
      axios
        .post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          // Download the response as a file
          console.log(response);
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
        })
        .catch(function (error) {
          console.log(error);
          alert("Crap went wrong when uploading your stuff");
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
