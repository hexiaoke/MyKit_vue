<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import login from './components/login/login'
import register from './components//register/register'

export default {
  name: 'app',
  components: {
    login,
    register
  }
}
</script>

<style lang="stylus">
@import './components/styles/common.styl'

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;;
  width: 100%;
  height: 1000px;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
