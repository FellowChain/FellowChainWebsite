
<template>
  <div class="Governance"   v-loading.fullscreen.lock="loading">

    <p>
      To request money (POA or FCT) from Development Fund Smart Contract use form below.It is highly adviced to start discussion about your reward <a href="https://github.com/FellowChain/Administration" >here</a> first.
    </p>
    <donate  v-on:lock-ui="lockUI"  v-on:unlock-ui="unlockUI"></donate>


  </div>
</template>

<script>
import donate from '@/components/gov/donation/GovernanceDonate'
export default {
  name: 'GovernanceDonateRequest',
  data () {

    return {
      loading:false
    }
  },

  methods: {
    lockUI(){
      this.$data.loading=true;
    },
    unlockUI(){
      this.$data.loading=false;
    }
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
