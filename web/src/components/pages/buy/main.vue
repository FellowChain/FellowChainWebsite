<template>
  <span>
    <div class="metamask buy" v-if="this.$store.getters.basicData.isEnabled" style="margin-top: -250px;">
      <div id="circle">
        <form :rules="rules" :model="form" >
          <div class="input">
            <label>Your ETH wallet</label>
            <input v-model="form.address" placeholder="Your ETH address" class="control on-bg full">
          </div>
          <div class="input">
            <label>Amount</label>
            <input v-model="form.amount" placeholder="How many tokens do you want buy?" class="control on-bg full">
          </div>
          <div class="actions">
            <span class="filled" @click="submitForm('fundRequestForm')">Submit</span>
          </div>
        </form>
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
        </div>
      </div>
    </div>
    <metamask-widget-off v-else-if="!this.$store.getters.basicData.isEnabled"></metamask-widget-off>
  </span>
</template>

<script>
  import MetamaskWidgetOn from "../../global/metamaskWidgetOn";
  import MetamaskWidgetOff from "../../global/metamaskWidgetOff";

  export default {
    components: {
      MetamaskWidgetOn,
      MetamaskWidgetOff
    },
    name: 'buyMain',
    data () {
      let addr = '';
      if(this.$store.getters.basicData!=undefined){
        addr = this.$store.getters.basicData.userAccount;
      }

      let validateNumber = function(numStart,numEnds){
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
        loading:false,
        form :
          {
            address:addr,
            amount:''
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
    watch: {
      usrAddr (newVal, oldVal) {
        // Our fancy notification (2).
        console.log('Value change from' + oldVal +' to '+newVal);
        this.$data.form.address = newVal;
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
      },
    },
    methods: {
      submitForm(formName) {
        let that = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let sum = new web3.BigNumber(that.$data.form.sum);
            let mul = (new web3.BigNumber(10)).pow(18);
            sum = sum*mul;
            that.$store.dispatch('loading/lock');
            that.$store.dispatch('buyTokens',sum).then(function(){
              that.$store.dispatch('loading/unlock');
            }).catch(function(){
              that.$store.dispatch('loading/unlock');
            });
          } else {
            return false;
          }
        });
      }
    }
  }
</script>
