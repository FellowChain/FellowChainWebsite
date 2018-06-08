
<template>
  <div class="Governance">

    <p>
     This will allow You to vote on funds requests.
    </p>
<donationsList></donationsList>

  </div>
</template>

<script>
import donationsList from '@/components/gov/donation/GovernanceDonationList'
export default {
  name: 'Governance',
  data () {

    return {

    }
  },
  methods: {
  },
  components:{donationsList}
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
