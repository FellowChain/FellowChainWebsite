<template>
  <div id="app">

<el-container>
  <el-header>
      <siteMenu v-if="this.$store.getters.basicData.isEnabled"></siteMenu>
      <noMetamask v-if="this.$store.getters.basicData.isEnabled===false"></noMetamask>
  </el-header>
  <el-main><router-view/></el-main>
  <el-footer><siteFooter/></el-footer>
</el-container>


  </div>
</template>

<script>
import siteMenu from '@/components/Menu'
import siteFooter from '@/components/Footer'
import noMetamask from '@/components/NoMetamask'
export default {
  name: 'App',
  components: {siteMenu,siteFooter,noMetamask}
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
