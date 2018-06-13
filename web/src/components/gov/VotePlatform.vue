
<template>
  <div class="Governance">

        <p>
         This will allow You to register contract execution for voting
        </p>
<newProposal></newProposal>
  </div>
</template>

<script>
import newProposal from '@/components/gov/platform/NewPlatformProposal'
export default {
  name: 'Governance',
  data () {

    return {

    }
  },
  methods: {
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
