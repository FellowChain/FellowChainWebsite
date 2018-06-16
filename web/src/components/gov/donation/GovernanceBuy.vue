
<template>
  <div class="Governance">

      <p>
        You currently have {{usrTotalBalance}} FCT, including {{usrLockedBalance}} locked for voting.
      </p>
      <p>
        There is additional {{availableToBuy}} FCT available to buy.
      </p>
    <el-form ref="fundRequestForm" :rules="rules" label-position="left" :model="form" label-width="25rem">
      <el-form-item label="Beneficiary address" prop="address">
        <el-input v-model="form.address"   auto-complete="off"  :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="Sum (in POA) for which You want to buy"  prop="sum"  auto-complete="off">
        <el-input type="sum" v-model="form.sum"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('fundRequestForm')">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'DonateForm',
  data () {
    var addr = '';
    if(this.$store.getters.basicData!=undefined){
      addr = this.$store.getters.basicData.userAccount;
    }

    var validateNumber = function(numStart,numEnds){
      return function(rule, value, callback){
        if(parseInt(value)>=numStart && parseInt(value)<=numEnds){
          callback();
        }
        else{
          callback( new Error("value need to be Integer in range <"+numStart+","+numEnds+">"));
        }
      }
    }
    return {
      form :
      {
        address:addr,
        sum:''
      },
      rules:{
        address:[
          { required: true, message: 'You need to have Metamask provider enabled and be on POA network', trigger: 'blur' },
          { min: 42, max: 42, message: 'valid ethereum address is 42 characters starting 0x', trigger: 'blur' }
        ],
        sum:[
          { required: true, message: 'specify amount', trigger: 'blur' },
          { validator: validateNumber(1,1000000000), trigger:'blur'}
        ]
      }
    }
  },
  computed: {
    usrAddr () {
      if(this.$store.getters.basicData!=undefined)
        return this.$store.getters.basicData.userAccount;
      else{
        return '';
      }
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    },
    usrLockedBalance() {
      var stats = this.$store.getters.tokenInfo;
        if(stats!=undefined)
          return stats.usersVotingPower;
        else{
          return '';
        }
    },
    usrTotalBalance() {

        var stats = this.$store.getters.tokenInfo;
          if(stats!=undefined)
            return stats.tokenUsersAmount;
          else{
            return '';
          }
    },
    availableToBuy(){

        var stats = this.$store.getters.tokenInfo;
          if(stats!=undefined)
            return stats.totalToBuy;
          else{
            return '';
          }
    }
  },
  watch: {
    usrAddr (newVal, oldVal) {
      // Our fancy notification (2).
      console.log('Value change from' + oldVal +' to '+newVal);
      this.$data.form.address = newVal;
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var sum = new web3.BigNumber(this.$data.form.sum);
            var mul = (new web3.BigNumber(10)).pow(18);
            sum = sum*mul;
            this.$store.dispatch('buyTokens',sum);
          } else {
            return false;
          }
        });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Governance{
  text-align: left;
}

</style>
