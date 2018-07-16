<template>
  <span>
    <div class="metamask buy" v-if="this.$store.getters.basicData.isEnabled" style="margin-top: -250px;">
      <div class="circle" v-if="afterSubmit">
        <div class="summary without-border">
          <div class="row">
            <div class="col-lg-12">
             <div class="checkmark">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 161.2 161.2" enable-background="new 0 0 161.2 161.2" xml:space="preserve">
                  <path class="path" fill="none" stroke="#e294cc" stroke-miterlimit="10" d="M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4
                    c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5
                    c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z"/>
                  <circle class="path" fill="none" stroke="#e294cc" stroke-width="4" stroke-miterlimit="10" cx="80.6" cy="80.6" r="62.1"/>
                  <polyline class="path" fill="none" stroke="#e294cc" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="113,52.8
                    74.1,108.4 48.2,86.4 "/>

                  <circle class="spin" fill="none" stroke="#e294cc" stroke-width="4" stroke-miterlimit="10"
                          stroke-dasharray="12.2175,12.2175" cx="80.6" cy="80.6" r="73.9"/>
              </svg>
               <form @submit.prevent="goBack()">
               <h5 class="success-text">
                 Success!
               </h5>
               <p class="success-text">
                 Your tokens appears on your metamask wallet in a moment
               </p>
               <div class="actions">
                 <button type="submit" class="filled">Back</button>
               </div>
              </form>
            </div>

            </div>
          </div>
        </div>
      </div>
      <div class="circle" v-else-if="!afterSubmit">
        <form @submit.prevent="submitForm()">
          <div class="input">
            <label>Your ETH wallet</label>
            <input
              v-model="form.address"
              v-validate="{ required: true, length: 42 }"
              placeholder="Your ETH address"
              name="address"
              disabled="disabled"
              class="control on-bg full">
            <span v-show="errors.has('address')" class="error">{{ errors.first('address') }}</span>
          </div>
          <div class="input">
            <label>Amount</label>
            <input
              v-model="form.amount"
              v-validate="{ required: true, min: 1 }"
              placeholder="How many tokens do you want buy?"
              name="amount"
              class="control on-bg full">
            <span v-show="errors.has('amount')" class="error">{{ errors.first('amount') }}</span>
          </div>
          <div class="actions">
            <button type="submit" class="filled">Submit</button>
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
  import Vue from 'vue';
  import MetamaskWidgetOn from "../../global/metamaskWidgetOn";
  import MetamaskWidgetOff from "../../global/metamaskWidgetOff";
  import VeeValidate from 'vee-validate';

  Vue.use(VeeValidate);

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
        afterSubmit: false,
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
      goBack:function(){
        this.$data.afterSubmit = false;
        this.$data.form.amount = '';
      },
      submitForm: function() {
        var that = this;
        that.$validator.validateAll()
          .then((response) => {
            if(response) {
              let sum = new web3.BigNumber(that.$data.form.amount);
              let mul = (new web3.BigNumber(10)).pow(18);
              that.$store.dispatch('loading/lock');
              that.$store.dispatch('buyTokens',sum*mul).then(() => {
                that.$store.dispatch('loading/unlock').then(() => {
                  that.$data.afterSubmit = true;
                }).catch(function(){

                });
              }).catch(function(){

                that.$store.dispatch('loading/unlock');
              });
            }
          })
          .catch(function(e) {
            alert(e);
          })
      }
    }
  }
</script>
