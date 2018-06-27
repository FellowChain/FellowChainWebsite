
<template>
  <div class="Governance">

    <p>
     This page allow you to buy FCT. This tokens will give you power to vote on further platform development and in case
     platfogm gain any productional value, this tokens will be used to pay for services of a platform.

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
    lockUI(){
      this.$data.loading=true;
    },
    unlockUI(){
      this.$data.loading=false;
    }
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
