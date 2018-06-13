<template>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="about">About</el-menu-item>
  <el-menu-item index="why">Why</el-menu-item>
  <el-submenu index="3">
    <template slot="title">Resources</template>
    <el-menu-item index="github">Github</el-menu-item>
    <el-menu-item index="spec">Specification</el-menu-item>
  </el-submenu>
  <el-menu-item index="join">Join Us</el-menu-item>

  <el-submenu  index="gov" >
    <template slot="title">Governance</template>
    <el-menu-item index="gov">Governance</el-menu-item>
    <el-menu-item index="vote">Vote on Requests</el-menu-item>
    <el-menu-item index="votePlatform">Govern Platform</el-menu-item>
    <el-menu-item index="funding">Request Funding</el-menu-item>
    <el-menu-item index="buy">Buy Tokens</el-menu-item>
  </el-submenu>
  <el-menu-item index="prototype">Prototype</el-menu-item>
</el-menu>
</template>
<script>
export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        if (key === 'about') {
          this.$router.push('/About')
        }
        if (key === 'why') {
            this.$router.push('/Why')
        }
        if (key === 'join') {
              this.$router.push('/Join')
        }
        if (keyPath[1] === 'gov') {
              this.$router.push('/Gov')
        }
        if(keyPath[1] === 'funding'){
              this.$router.push('/Funding')
        }
        if(keyPath[1] === 'votePlatform'){
              this.$router.push('/VotePlatform')
        }
        if(keyPath[1] === 'vote'){
              this.$router.push('/Vote')
        }
        if(keyPath[1] === 'buy'){
              this.$router.push('/Buy')
        }
        if(keyPath[1] === 'github'){
          window.open('https://github.com/fellowchain', '_blank')
        }
        if(keyPath[1] === 'spec'){
          window.open('https://github.com/FellowChain/Documentation/tree/master/Analysis', '_blank')
        }
        if(key === 'prototype'){
          window.open('https://prototype.fellowchain.network', '_blank')
        }
        console.log(key, keyPath)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
