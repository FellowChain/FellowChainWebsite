
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="introduce" v-if="this.$store.getters.basicData.isEnabled">
          <h1>Available to buy:</h1>
          <h2>{{availableToBuy}} <span class="label">tokens</span></h2>
        </div>
        <div class="introduce" v-else-if="!this.$store.getters.basicData.isEnabled">
          <h1>Buy your first</h1>
          <h2>Fellows <span class="label">tokens</span></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'buyHeader',
    computed: {
      availableToBuy(){
        let stats = this.$store.getters.tokenInfo;
        if(stats!=undefined)
          return stats.totalToBuy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        else{
          return '';
        }
      }
    }
  }
</script>
