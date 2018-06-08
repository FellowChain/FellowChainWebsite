
<template>
  <div class="Governance">
    <h1>Governance </h1>
    <h5>What is FCT and how it will help build the platform</h5>
    <p>FCT is a token with total supply of 10 000 000 units, with initial price of 1 POA per token.
      FCT token gives privilege of voting on further platform development and funds distribution.
      FCT tokens can be also gained by contribution to the development of a platform (see Join Us tab).
      <BR/>To buy FCT token and gain part of control over the project see Governance -> Buy Tokens.
     <BR/><B>All POA aquired during token sale goes to Development Fund Smart Contract.</B> </p>
    <p> Initial distribution of Tokens is as follows</p>
    <ul>
      <li>10 000 tokens (0,1%) is in hands of platform creator</li>
      <li>9 990 000 (99,9%) is in hands of Development Fund smart contract </li>

    </ul>
    <p>
      To request money (POA or FCT) from Development Fund Smart Contract go to "Governance>Request Funding".It is highly adviced to start discussion about your reward <a href="https://github.com/FellowChain/Administration" >here</a> first
    </p>


  </div>
</template>

<script>
export default {
  name: 'Governance',
  data () {

    return {

    }
  },
  methods: {
  },
  components:{}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Governance{
  text-align: left;
}
h1, h2 {
  font-weight: normal;
}
ul {
    text-align: left;
}
li {
  padding: 10px;
    list-style-type: circle;
}
a {
  color: #42b983;
}
</style>
