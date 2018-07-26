
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="introduce margin" v-if="this.$store.getters.basicData.isEnabled">
          <h1>
            {{$t('buy.logon.title')}}
          </h1>
          <h2>
            {{availableToBuy}}
          </h2>
        </div>
        <div class="introduce margin" v-else-if="!this.$store.getters.basicData.isEnabled">
          <h1>
            {{$t('buy.logoff.title')}}
          </h1>
          <h2>
            {{$t('buy.logoff.description')}}
            <span class="label">
              {{$t('buy.logoff.label')}}
            </span>
          </h2>
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
