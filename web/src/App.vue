<template>
  <div id="app">

<el-container>
  <el-header>
    <noMetamask v-if="this.$store.getters.basicData.isEnabled===false"></noMetamask>
    <notAuthorised v-if="this.$store.getters.basicData.isEnabled===true && this.$store.getters.basicData.isAuthorised===false"></notAuthorised>
    <siteMenu></siteMenu>
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
import notAuthorised from '@/components/NotAuthorised'
export default {
  name: 'App',
  components: {siteMenu,siteFooter,noMetamask,notAuthorised}
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
