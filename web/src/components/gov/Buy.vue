
<template>
  <div class="Governance">

    <p>
     This will allow You to buy tokens
    </p>
<buy></buy>

  </div>
</template>

<script>
import buy from '@/components/gov/donation/GovernanceBuy'
export default {
  name: 'BuyTokens',
  data () {

    return {

    }
  },
  methods: {
  },
  components:{buy}
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
