<template>

  <span>

  <el-form ref="fundRequestForm"  label-position="left" :model="form" label-width="25rem">
    <el-form-item>
      <el-button type="primary" @click="logIn()">Sign In</el-button>
    </el-form-item>
  </el-form>
  </span>
</template>
<script>
export default {
  name : 'NotAuthorised',
    data () {
      return {
        form:{}
      }
    },
    computed: {
      signedMessage(){
        return this.$store.getters.basicData.signedMessage;
      },
      firebaseToken(){
        var uAuthData = this.$store.getters["firebase/userAuthData"];
        return ((uAuthData===undefined)?"":uAuthData.token);
      }
    },
    watch:{
      firebaseToken(oldV,newV){
        if(newV!==undefined && newV!==null && newV.toString().length>0){
          firebase.auth().signInWithCustomToken(newV).then(function(usrCredentials){
              console.log(JSON.stringify(usrCredentials));
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

              /*
              TODO: Error handling
              */
          });
        }
      },
      signedMessage(oldV,newV){
        var myAddress = this.$store.getters.basicData.userAccount;
        if(newV!==undefined && newV!==null && newV.toString().length>0){
          this.$http.get("/api/verifySignature?address="+myAddress+"&signature="+newV.toString(),function(resp){
            if(resp.status===true){
              that.$store.dispatch('firebase/setToken',{
                token:resp.value
              });
            }else{
              /*
              TODO: Error handling
              */
            }
          })
        }
      }
    },
    methods: {
      logIn(){
        var that = this;
        var myAddress = this.$store.getters.basicData.userAccount;
        this.$http.get("/api/getVerificationKey?address="+myAddress,function(apiKey){
          var textToSign = "Sign me in, SessionID:";
          if(apiKey.status===true){
            textToSign=textToSign + apiKey.value;
            that.$store.dispatch('getSignature',{
              msg:textToSign
            })
          }
          else{
            /*
            TODO: Error handling
            */
          }
        });
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
