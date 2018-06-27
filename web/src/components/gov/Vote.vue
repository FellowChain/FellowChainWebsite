
<template>
  <div class="Governance"   v-loading.fullscreen.lock="loading">

        <p>
         This page is responsible for voting on organisation decisions
        </p>
<votesManagement  v-on:lock-ui="lockUI"  v-on:unlock-ui="unlockUI"></votesManagement>

<proposalsList v-on:lock-ui="lockUI"  v-on:unlock-ui="unlockUI"></proposalsList>

  </div>
</template>

<script>
import votesManagement from '@/components/gov/platform/VotingEnabled'
import proposalsList from '@/components/gov/platform/PlatformProposalsList'
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
  components:{proposalsList,votesManagement}
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
