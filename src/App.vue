<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 v-if="this.$router.currentRoute.path == '/'">
      Radwords
    </h1>
    <router-view></router-view>
    <p v-if="this.$router.currentRoute.path != '/word'">
      <router-link link to="/word">Get Word</router-link>
    </p>
    <p v-if="this.$router.currentRoute.path != '/text'">
      <router-link link to="/text">Submit Text</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'app'
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
