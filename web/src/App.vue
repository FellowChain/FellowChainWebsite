<template>
  <div id="app">

<el-container>
  <el-header> <siteMenu></siteMenu></el-header>
  <el-main><router-view/></el-main>
  <el-footer><siteFooter/></el-footer>
</el-container>


  </div>
</template>

<script>
import siteMenu from '@/components/Menu'
import siteFooter from '@/components/Footer'
export default {
  name: 'App',
  components: {siteMenu,siteFooter}
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
.el-main{
  min-height: 25rem;
}
</style>
