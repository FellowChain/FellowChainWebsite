<template>
  <div class="content-box">
    <el-form ref="fundRequestForm" :rules="rules" label-position="left" :model="form" label-width="25rem">

      <el-form-item label="Link to github issue discussing the work" prop="link">
        <el-input v-model="form.link" placeholder="https://github.com/FellowChain/Administration/issues/......"  auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="Activity description" auto-complete="off"  prop="desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>


      <el-form-item label="Contract"  auto-complete="off"   prop="contract">
        <el-select v-model="form.contract" placeholder="select contract You want to invoke">
          <el-option v-for="v in contractsList" :key="v.label" :label="v.label" :value="v.address"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Method" auto-complete="off" >
        <el-select v-model="form.selMethod" >
          <el-option v-for="v in methodsList"  :label="v.fullName" :key="v.fullName" :value="v.fullName" ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        v-for="att in parametersList"
        :label="att.name"
        :key="att.name"
        :prop="att.name"
      >
        <el-input v-model="form.attVal[att.id]"></el-input>
      </el-form-item>
      <el-form-item>

        <el-form-item>
          <div class="actions">
            <el-button type="primary"  class="filled" @click="submitForm('fundRequestForm')">Submit</el-button>
          </div>
        </el-form-item>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import abi from './../../../../store/abi'
  export default {
    name: 'govVotePlatform',
    data () {

      var addr = '';
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
            attVal:{}
          },
        rules:{

          link:[
            { required: true, message: 'Provide link to discussion', trigger: 'blur' },
          ],
          desc:[
            { required: true, message: 'Describe reason of proposal', trigger: 'blur' },
          ],
          contract:[
            { required: true, message: 'Choose contract', trigger: 'blur' },
          ],
          method:[
            { required: true, message: 'Choose method', trigger: 'blur' },
          ]
          /*
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
           */
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
      methodsList(){
        if(this.$data.form.contract!==undefined){
          var functions =[];
          var abiMethods = abi[this.$data.form.contract];
          for(var i=0;i<abiMethods.length;i++){
            if(abiMethods[i].constant===false
              && abiMethods[i].type ==="function"){
              functions.push({
                name : abiMethods[i].name,
                fullName :  abiMethods[i].name + "("+Array.from(abiMethods[i].inputs,x => x.type).join(',')+")",
                attr: Array.from(abiMethods[i].inputs,x => {

                  return {type:x.type,name:x.name} ;})
              });
            }
          }
          return functions;
        }
        else {
          return [];
        }
      },
      parametersList(){
        if(this.$data.form.selMethod == undefined ){
          return [];
        }
        else {
          var arr = this.methodsList.filter(x => x.fullName === this.$data.form.selMethod )
            .map(x=>x.attr);
          return  [].concat(...arr).map((x,idx)=> { return {name:x.name,id:idx};});
        }
      },
      contractsList(){
        return [{
          label:'Development Fund',
          address:"DevFund"
        },{
          label:'Name Registry',
          address:"NameRegistry"
        },{
          label:'Fellow Chain Token',
          address:"Token"
        },{
          label:'Voting Locker Contract',
          address:"Locker"
        },{
          label:'Voting Management Contract',
          address:"Voting"
        }];
      },
      usrAddr () {
        if(this.$store.getters.basicData!=undefined)
          return this.$store.getters.basicData.userAccount;
        else{
          return '';
        }
        // Or return basket.getters.fruitsCount
        // (depends on your design decisions).
      }
    },
    methods: {
      submitForm(formName) {
        var removeBrackets = function(str){
          return str.substr(0,str.indexOf("("));
        }
        var that = this;
        that.$refs[formName].validate((valid) => {
          if (valid) {

            that.$data.form.time = Date.now();
            var hash = web3.sha3( JSON.stringify(this.$data.form));
            var argsToAdd = []
            for(var i=0;that.$data.form.attVal[i]!=undefined;i++){
              argsToAdd.push(that.$data.form.attVal[i]);
            }
            that.$data.form.attVal[i];
            var payload = {
              address:that.$data.form.contract,
              abiName:that.$data.form.contract,
              hash:hash,
              methodName:removeBrackets(that.$data.form.selMethod),
              methodFullName:that.$data.form.selMethod,
              args:argsToAdd
            };

            that.$store.dispatch('loading/lock');
            //that.$emit('lock-ui');
            Promise.all([that.$store.dispatch('firebase/saveContent',{
              key:hash,
              value: that.$data.form,
              httpLib: that.$http
            }),
              that.$store.dispatch('runProxyMethod',payload)]).then(function(){
              that.$store.dispatch('loading/unlock');
              //    that.$emit('unlock-ui');
              that.$router.push('/Vote');
            }).catch(function(err){
              console.error(err);
              that.$store.dispatch('loading/unlock');
              //that.$emit('unlock-ui');
            });


          } else {
            return false;
          }
        });
      }
    }
  }
</script>
