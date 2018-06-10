
<template>
  <div class="about">
    <h1>About {{web3info.currentAddress}} {{web3info.networkId}}  {{web3info.latestBlock}}</h1>
    <p>FellowChain Project is open source (available on github) community based project which aims to build
    DAO (Decentralized Autonomus Organisation), allowing person without technical knowledge to create own
  community based insurance cooperative. It aims to implement all necessary logic on blockchain to minimalise bureaucratic
overhead needed to run such organisation. Use of blockchain will also minimalise trust needed to run such organisation and maximise
it's transparency and fraud resistance</p>
<p>
  FellowChain Project aims to be as blockchain agnostic as possible. Starting its support from Ethereum Ropsten,POA Sokol Network
  during development and POA Core or LOOM in early adoption stage.
  When project will achieve betatests maturity we will introduce 2nd layer solution based on Ethereum technology.
</p>
<p>
  If You like the idea, You can partiicipate on github, or join us on facebook or telegram (see footer below).
  See "Join Us", to find out, how You can participate.
</p>
<p>
  <span v-for="t in test">{{t}}</span>
</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: ['web3info'],
  data () {
    return {}
  },
  computed:{
    test:function(){
      return this.$store.state.test;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
