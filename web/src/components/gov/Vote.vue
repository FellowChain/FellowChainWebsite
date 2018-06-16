
<template>
  <div class="Governance">

        <p>
         This page is responsible for voting on organisation decisions
        </p>
<votesManagement></votesManagement>

<proposalsList></proposalsList>

  </div>
</template>

<script>
import votesManagement from '@/components/gov/platform/VotingEnabled'
import proposalsList from '@/components/gov/platform/PlatformProposalsList'
export default {
  name: 'Governance',
  data () {

    return {

    }
  },
  methods: {
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
