
<template>
  <div class="Governance">
    This will be changed to form requesting platform proposals
    <el-form ref="fundRequestForm" :rules="rules" label-position="left" :model="form" label-width="25rem">
      <el-form-item label="Beneficiary address" prop="address">
        <el-input v-model="form.address"  auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Link to github issue discussing the work" prop="link">
        <el-input v-model="form.link" placeholder="https://github.com/FellowChain/Administration/issues/......"  auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Sum You want to claim for your contribution"  prop="sum"  auto-complete="off">
        <el-input type="sum" v-model="form.sum"></el-input>
      </el-form-item>
      <el-form-item label="Currency"  auto-complete="off"  prop="currency" >
         <el-radio-group v-model="form.currency">
           <el-radio label="POA"></el-radio>
           <el-radio label="FCT"></el-radio>
         </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity type"  auto-complete="off"   prop="type">
        <el-select v-model="form.type" placeholder="please select type of activity">
          <el-option label="Marketing" value="1"></el-option>
          <el-option label="Documentation" value="2"></el-option>
          <el-option label="Implementation" value="3"></el-option>
          <el-option label="Analysis" value="4"></el-option>
          <el-option label="Community Management" value="5"></el-option>
          <el-option label="Costs Return" value="6"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Activity description" auto-complete="off"  prop="desc">
         <el-input type="textarea" v-model="form.desc"></el-input>
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
