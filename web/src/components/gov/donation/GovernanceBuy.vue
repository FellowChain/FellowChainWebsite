
<template>
  <div class="Governance">
    <el-form ref="fundRequestForm" :rules="rules" label-position="left" :model="form" label-width="25rem">
      <el-form-item label="Beneficiary address" prop="address">
        <el-input v-model="form.address"  auto-complete="off"></el-input>
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
        address:'',
        link:''
      },
      rules:{
        address:[
          { required: true, message: 'Please place address here', trigger: 'blur' },
          { min: 42, max: 42, message: 'valid ethereum address is 42 characters starting 0x', trigger: 'blur' }
        ],
        sum:[
          { required: true, message: 'specify amount', trigger: 'blur' },
          { validator: validateNumber(1,1000000000), trigger:'blur'}
        ]
      }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit! '+JSON.stringify(this.$data.form));
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
