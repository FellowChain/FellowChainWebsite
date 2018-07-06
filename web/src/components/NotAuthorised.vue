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
      },
      firebaseAuth(){
        return this.$store.getters["firebase/isAnonymous"];
        return hasAuth;
      }
    },
    watch:{
      firebaseToken(newV,oldV){
        var that = this;
        if(newV!==undefined && newV!==null && newV.toString().length>0){
          firebase.auth().signInWithCustomToken(newV).then(function(usrCredentials){
              var claimData = JSON.parse(atob(newV.split('.')[1])).claims;
              that.$store.dispatch('firebase/setAuthData',claimData);
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
      signedMessage(newV,oldV){
        var that = this;
        var myAddress = this.$store.getters.basicData.userAccount;
        if(newV!==undefined && newV!==null && newV.toString().length>0){
          this.$http.get("/api/verifySignature?address="+myAddress+"&signature="+newV.toString()).then(function(resp){
            if(resp.body.status===true){
              that.$store.dispatch('firebase/setToken',{
                token:resp.body.value
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
        this.$http.get("/api/getVerificationKey?address="+myAddress).then(function(apiKey){
          var textToSign = "Sign me in, SessionID:";
          if(apiKey.body.status===true){
            textToSign=textToSign + apiKey.body.value;
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
    },
    created(){
      var that = this;
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            if(that.$store.getters['firebase/isAnonymous']===false){
                that.$store.dispatch('setAuth');
            }
          } else {
          }
        });
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
