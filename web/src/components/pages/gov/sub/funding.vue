<template>
  <div class="content-box">
    <el-form ref="fundRequestForm" :rules="rules" label-position="left" :model="form" label-width="25rem">
      <el-form-item :label="$t('gov.sub.funding.form.address.title')" prop="address">
        <el-input v-model="form.address"  auto-complete="off"  :disabled="true"></el-input>
      </el-form-item>
      <el-form-item :label="$t('gov.sub.funding.form.url.title')" prop="link">
        <el-input v-model="form.link" placeholder="https://github.com/FellowChain/Administration/issues/......"  auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item :label="$t('gov.sub.funding.form.sum.title')"  prop="sum"  auto-complete="off">
        <el-input type="sum" v-model="form.sum"></el-input>
      </el-form-item>
      <el-form-item :label="$t('gov.sub.funding.form.currency.title')"  auto-complete="off"  prop="currency" >
        <el-radio-group v-model="form.currency">
          <el-radio label="POA" value="POA"></el-radio>
          <el-radio label="FCT" value="FCT"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="$t('gov.sub.funding.form.activityType.title')"  auto-complete="off"   prop="type">
        <el-select v-model="form.type" placeholder="please select type of activity">
          <el-option
            :label="$t('gov.sub.funding.form.activityType.list.marketing')"
            :value="$t('gov.sub.funding.form.activityType.list.marketing')">
          </el-option>
          <el-option
            :label="$t('gov.sub.funding.form.activityType.list.documentation')"
            :value="$t('gov.sub.funding.form.activityType.list.documentation')">
          </el-option>
          <el-option
            :label="$t('gov.sub.funding.form.activityType.list.implementation')"
            :value="$t('gov.sub.funding.form.activityType.list.implementation')">
          </el-option>
          <el-option
            :label="$t('gov.sub.funding.form.activityType.list.analysis')"
            :value="$t('gov.sub.funding.form.activityType.list.analysis')">
          </el-option>
          <el-option
            :label="$t('gov.sub.funding.form.activityType.list.community')"
            :value="$t('gov.sub.funding.form.activityType.list.community')">
          </el-option>
          <el-option
            :label="$t('gov.sub.funding.form.activityType.list.costs')"
            :value="$t('gov.sub.funding.form.activityType.list.costs')">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Activity description" auto-complete="off"  prop="desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="actions">
          <el-button type="primary"  class="filled" @click="submitForm('fundRequestForm')">
            {{$t('gov.sub.funding.form.submit')}}
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: 'govFunding',
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
        loading:false,
        form :
          {
            address:addr,
            link:''
          },
        rules:{
          address:[
            { required: true, message: 'Please place address here', trigger: 'blur' },
            { min: 42, max: 42, message: 'valid ethereum address is 42 characters starting 0x', trigger: 'blur' }
          ],
          link:[
            { required: true, message: 'Please place gthub issue link here', trigger: 'blur' }
          ],
          sum:[
            { required: true, message: 'specify amount', trigger: 'blur' },
            { validator: validateNumber(1,1000000000), trigger:'blur'}
          ],
          currency:[
            { required: true, message: 'Choose currency', trigger: 'blur' }
          ],
          type:[
            { required: true, message: 'What is type of activity', trigger: 'blur' }
          ],
          desc:[
            { required: true, message: 'Please fill in the description', trigger: 'blur' },
            { min: 10, max: 500, message: 'description should be 10-500 characters long', trigger: 'blur' }
          ],

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
      devFundMethod(){
        if(this.$data.form.currency==='POA'){
          return "payForWorkInEth";
        }
        else{
          return "payForWorkInToken";
        }
      },
      devFundMethodFullName(){
        if(this.$data.form.currency==='POA'){
          return "payForWorkInEth(address,uint256)";
        }
        else{
          return "payForWorkInToken(address,uint256)";
        }
      },
      sumToPay(){
        if(this.$data.form.currency==='POA'){
          var amount =new web3.BigNumber(this.$data.form.sum);
          var multiplayer = (new web3.BigNumber("10")).pow(18);
          amount=(amount.mul(multiplayer)).toString();
          return amount;
        }else{

          var amount =new web3.BigNumber(this.$data.form.sum);
          var multiplayer = (new web3.BigNumber("10")).pow(8); /*todo: change into decimels*/
          amount=(amount.mul(multiplayer)).toString();
          return amount;
        }
      }

    },
    methods: {
      submitForm(formName) {
        var that = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$data.form.time = Date.now();
            var hash = web3.sha3( JSON.stringify(this.$data.form));
            var payload = {
              address:'DevFund',
              abiName:'DevFund',
              hash:hash,
              methodName:that.devFundMethod,
              methodFullName:that.devFundMethodFullName,
              args:[that.usrAddr,that.sumToPay]
            };
            this.$store.dispatch('loading/lock');
            //  that.$emit('lock-ui');
            Promise.all([this.$store.dispatch('firebase/saveContent',{
              key:hash,
              value: this.$data.form,
              httpLib: this.$http
            }),
              this.$store.dispatch('runProxyMethod',payload)]).then(function(){
              this.$store.dispatch('loading/unlock');
              //  that.$emit('unlock-ui');
              that.$router.push('/Vote');
            }).catch(function(err){
              console.error(err);
              this.$store.dispatch('loading/unlock');
              //  that.$emit('unlock-ui');
            });
          } else {
            return false;
          }
        });
      }
    }
  }
</script>
