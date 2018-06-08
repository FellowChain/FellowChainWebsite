
<template>
  <div class="Governance">

    <p>
      To request money (POA or FCT) from Development Fund Smart Contract use form below.It is highly adviced to start discussion about your reward <a href="https://github.com/FellowChain/Administration" >here</a> first.
      <br/> Be aware that, to prevent spamming, there is 1 POA bond attached with every request. This bond might not be return in case of request rejection.
    </p>
    <donate></donate>


  </div>
</template>

<script>
import donate from '@/components/gov/donation/GovernanceDonate'
export default {
  name: 'GovernanceDonateRequest',
  data () {

    return {

    }
  },
  methods: {
  },
  components:{donate}
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
