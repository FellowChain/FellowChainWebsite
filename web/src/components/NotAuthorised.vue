<template>
  <a href="#" class="clear" @click="logIn()">
    <i class="fa fa-plus"></i>
    Sign In
  </a>
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
        let uAuthData = this.$store.getters["firebase/userAuthData"];
        return ((uAuthData===undefined)?"":uAuthData.token);
      },
      firebaseAuth(){
        return this.$store.getters["firebase/isAnonymous"];
      }
    },
    watch:{
      firebaseToken(newV,oldV){
        if(newV!==undefined && newV!==null && newV.toString().length>0)
        {
          firebase.auth().signInWithCustomToken(newV).then((usrCredentials) => {
              let claimData = JSON.parse(atob(newV.split('.')[1])).claims;
              this.$store.dispatch('firebase/setAuthData',claimData);
          }).catch(function(error) {
            // error.code && error.message
          });
        }
      },
      signedMessage(newV){
        if(newV!==undefined && newV!==null && newV.toString().length>0)
        {
          let myAddress = this.$store.getters.basicData.userAccount;
          this.$http.get("/api/verifySignature?address="+myAddress+"&signature="+newV.toString())
            .then((resp) => {
            if(resp.body.status===true){
              this.$store.dispatch('firebase/setToken',{
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
        let myAddress = this.$store.getters.basicData.userAccount;
        this.$http.get("/api/getVerificationKey?address="+myAddress)
          .then((apiKey) => {
            let textToSign = "Sign me in, SessionID:";
            if(apiKey.body.status===true){
              textToSign=textToSign + apiKey.body.value;
              this.$store.dispatch('getSignature',{
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
      firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            if(this.$store.getters['firebase/isAnonymous']===false){
              this.$store.dispatch('setAuth');
            }
          } else {
          }
        });
    }
  }
</script>
