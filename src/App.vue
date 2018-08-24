<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="components">
      <ul>
        <li><router-link to="/countup">countup</router-link></li>
        <!-- <li><router-link to="/grid">grid</router-link></li> -->
        <li><router-link to="/mquery1">mQuery1</router-link></li>
        <li><router-link to="/mtoolbar1">mToolbar1</router-link></li>
        <li><router-link to="/dragTree">drag-tree</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style sc>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

.components ul li{
  list-style-type:none;
  display: inline;
}
</style>
