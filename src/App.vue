<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/" class="nav-link">Skills</router-link>
      <router-link to="/car" class="nav-link">Car</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Skills from './components/Skills'

export default {
  name: 'App',
  components: {
    Skills
  }
}
</script>

<style>
#app {
  width: 50%;
  margin-left: 25%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  justify-content: flex-end;
}

.nav-link:hover {
  color: deepskyblue}

.router-link-exact-active {
  color: yellowgreen;
}

</style>
