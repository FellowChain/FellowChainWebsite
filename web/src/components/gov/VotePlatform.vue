
<template>
  <div class="Governance"  v-loading.fullscreen.lock="loading">

<newProposal  v-on:lock-ui="lockUI"  v-on:unlock-ui="unlockUI"></newProposal>
  </div>
</template>

<script>
import newProposal from '@/components/gov/platform/NewPlatformProposal'
export default {
  name: 'Governance',
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
  components:{newProposal}
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
