
<template>
  <div class="ApprovalVoting">

    <p>
      You currently have {{tokAmount}} FCT including {{votingPower}} Locked for voting till {{lockEndTime}}.
      <div v-if="allowenceSet===false">Set Allowence for TokenLocker

          <el-button type="primary" @click="setAllowence()">Submit</el-button>
      </div>
      <div v-if="availableForLock && allowenceSet">Lock all tokens for voting
        <el-button type="primary" @click="lockForVoting()">Submit</el-button>
      </div>
      <div v-if="availableForUnLock && canWithdraw">Withdraw all tokens
        <el-button type="primary" @click="unlockFromVoting()">Submit</el-button>
      </div>
    </p>


  </div>
</template>

<script>
export default {
  name: 'GovernanceDonationList',
  data () {
    var retVal = {
    }

    return retVal;
  },
  computed:{
    tokAmount(){
      var stats = this.$store.getters.tokenInfo;
      if(stats!=undefined)
        return stats.tokenUsersAmount;
      else{
        return '';
      }
    },
    votingPower(){
      var stats = this.$store.getters.tokenInfo;
      if(stats!=undefined)
        return stats.usersVotingPower;
      else{
        return '';
      }
    },
    availableForLock(){
      var stats = this.$store.getters.tokenInfo;
      if(stats!=undefined){
        return (new web3.BigNumber(stats.usersVotingPower)).sub(new web3.BigNumber(stats.tokenUsersAmount)).isNegative();}
      else{
        return false;
      }
    },
    availableForUnLock(){
      var stats = this.$store.getters.tokenInfo;
      if(stats!=undefined){
        return (new web3.BigNumber(stats.usersVotingPower.toString())).greaterThan(0)===true;}
      else{
        return false;
      }
    },
    canWithdraw(){
      var stats = this.$store.getters.tokenInfo;
      if(stats!=undefined){
        return stats.canWithdraw;}
      else{
        return false;
      }
    },
    lockEndTime(){

        var stats = this.$store.getters.tokenInfo;
        if(stats!=undefined){
          var date = new Date(parseInt(stats.lockEndTime+"000"));
          if(stats.lockEndTime!=="0"){
              return ' '+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
          }
          else {
              return ' - ';
          }
        }
        else{
          return false;
        }
    },
    allowenceSet(){

        var stats = this.$store.getters.tokenInfo;
        if(stats!=undefined){
          return (stats.devAllowence==="0")===false;
        }
    }
  },
  methods: {
    setAllowence:function(){
      var that = this;
      that.$emit('lock-ui');
      this.$store.dispatch('setVoteAllowence').then(function(){
          that.$emit('unlock-ui');
      }).catch(function(err){
          that.$emit('unlock-ui');
          console.error(err);
      });
    },
    lockForVoting:function(){
      var that = this;
      that.$emit('lock-ui');
      this.$store.dispatch('lockAllForVoting',0).then(function(){
          that.$emit('unlock-ui');
      }).catch(function(err){
          that.$emit('unlock-ui');
          console.error(err);
      });
    },
    unlockFromVoting:function(){
      var that = this;
      that.$emit('lock-ui');
      this.$store.dispatch('withdraw').then(function(){
          that.$emit('unlock-ui');
      }).catch(function(err){
          that.$emit('unlock-ui');
          console.error(err);
      });
    }
  },
  components:{}
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
