
<template>
  <div class="container">
    <div class="summary">
      <div class="row">
        <div class="col-lg-12 tip">
          <span>
            <i class="fa fa-question-circle" aria-hidden="true"></i>
            Your FLS tokens summary.
            This summary is from your metamask which is currently active.
          </span>
        </div>
        <div class="col-lg-6">
          <h1>{{userTotalBalance}}</h1>
          <span>
            Tokens balance
          </span>
        </div>
        <div class="col-lg-6">
          <h1>{{userLockedBalance}}</h1>
          <span>
            Tokens locked for voting
          </span>
        </div>
      </div>
      <div class="row" v-if="isVisible">

        <div class="actions margin">
          <p></p>
          <a class="filled" @click="lockForVoting($event)" v-if="userLockedBalance==0">
            {{ $t('gov.manageTokens.lock')}}
          </a>
          <a class="filled" @click="unlockFromVoting($event)" v-if="userLockedBalance>0">
              {{ $t('gov.manageTokens.unlock')}}
          </a>
          <a class="filled" @click="setAllowence($event)">
              {{ $t('gov.manageTokens.approve')}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tokensAmount',
    props: ['isAllowVisible'],
    methods:{

        setAllowence:function(ev){
          var that = this;
          ev.preventDefault();
        //  that.$emit('lock-ui');
          that.$store.dispatch('loading/lock');
          that.$store.dispatch('setVoteAllowence').then(function(){
              that.$store.dispatch('loading/unlock');
            //  that.$emit('unlock-ui');
          }).catch(function(err){
              that.$store.dispatch('loading/unlock');
              //that.$emit('unlock-ui');
              console.error(err);
          });
        },
        lockForVoting:function(ev){
          var that = this;
          ev.preventDefault();
          that.$store.dispatch('loading/lock');
          //that.$emit('lock-ui');
          that.$store.dispatch('lockAllForVoting',0).then(function(){
              that.$store.dispatch('loading/unlock');
            //  that.$emit('unlock-ui');
          }).catch(function(err){
              that.$store.dispatch('loading/unlock');
          //    that.$emit('unlock-ui');
              console.error(err);
          });
        },
        unlockFromVoting:function(ev){
          var that = this;
          ev.preventDefault();
          that.$store.dispatch('loading/lock');
      //    that.$emit('lock-ui');
          that.$store.dispatch('withdraw').then(function(){
              that.$store.dispatch('loading/unlock');
            //  that.$emit('unlock-ui');
          }).catch(function(err){
              that.$store.dispatch('loading/unlock');
            //  that.$emit('unlock-ui');
              console.error(err);
          });
        }
    },
    computed: {
      isVisible(){
        console.log('isAllowVisible='+this.isAllowVisible);
        console.log('isAllowVisible Type='+typeof(this.isAllowVisible)+' '+(this.isAllowVisible==="true").toString());
        return this.isAllowVisible==="true";
      },

      userLockedBalance() {
        let stats = this.$store.getters.tokenInfo;
        if(stats!=undefined)
          return stats.usersVotingPower;
        else{
          return '';
        }
      },
      userTotalBalance() {
        let stats = this.$store.getters.tokenInfo;
        if(stats!=undefined)
          return stats.tokenUsersAmount;
        else{
          return '';
        }
      }
    }
  }
</script>
