import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Join from '@/components/Join'
import Why from '@/components/Why'
import Gov from '@/components/Governance'
import Vote from '@/components/gov/Vote'
import Buy from '@/components/gov/Buy'
import Funding from '@/components/gov/RequestDonation'
import VotePlatform from '@/components/gov/VotePlatform'
import Footer from '@/components/Footer'

Vue.use(Router);
var data = {web3info:{
  isEnabled:false,
  networkId:99,
  inProcess:false,
  latestBlock:0,
  explorerUrl:"https://sokol-explorer.poa.network/account/",
  currentAddress:"0x94da43c587c515ad30ea86a208603a7586d2c25f",
  tokensBalance:123.000,
  votingPower:456.000,
  totalToBuy:9874567.000,
  price:1.00,
  pendingFundingRequests:[{
    amount:123.00,
    currency:'FCT',
    to:'0xaf97e87375d97f45b1c5f4ea4cc87650f640581f',
    msgHash:'e555d75b8540cdf23abbeb7ae9ab5a15a6562f23aca7c52919a507fc817e3c42',
    votesFor:5438,
    votesAgainst:1234,
    votingEnds:1528625532
  },{
    amount:234.00,
    currency:'POA',
    to:'0x56947ac048452f75a64e2411ca140336cf939f7d',
    msgHash:'5cc65c8468d19bdf0698582dd34c4d1f2d320d4cbdcfe590b3c110dec9f7dfee',
    votingEnds:1528629532
  }],
  pendingGovernanceVoting:[{
    votedAddress:"0x56947ac048452f75a64e2411ca140336cf939f7d",
    votedMethod:"transfer(address,uint256)",
    msgData:"0xa9059cbb0000000000000000000000002f2b7e3c46174d6934564f31d49dac025b9028b0000000000000000000000000000000000000000000000000000000009731971f"
  }]
}};

var scanWeb3 = function(w3,dest,oldBlock){
  var counter ={
    val:0,
    expected:1,
    inc:function(){
      this.val = this.val+1;
      if(this.val==this.expected){
        this.callback();
      }
    }
  }
  return new Promise((res,rej)=>{
    counter.callback = function(){
      res(true);
    };
    counter.inc();
  })
}
var scanBlockNum = function(w3,out){


  return new Promise((res,rej)=>{


    if(w3.eth != undefined){
      if(web3.eth.accounts!= undefined){
        out.currentAddress = web3.eth.accounts[0];
        out.isEnabled = true;
        out.networkId = web3.version.network;
        web3.eth.getBlockNumber(function(err,val){
          out.latestBlock = val;
          res(true);
        });
      }
    }
  });
}
setInterval(function(){
  if(data.web3info.inProcess==false){
    data.web3info.inProcess=true;
    if(web3!=null && web3!=undefined){
      var oldBlock = data.web3info.latestBlock;
      scanBlockNum(web3,data.web3info).then(function(){
        if(data.web3info.latestBlock!=oldBlock){
          scanWeb3(web3,data.web3info,oldBlock).then(
            function(){
              data.web3info.inProcess=false;
            }
          );
        }else{
          data.web3info.inProcess=false;
        }

      });
    }else{
      data.web3info.inProcess=false;
    }
  }
  else{
  }
},1000);

export default new Router({
  routes: [
      {
        path: '/About',
        name: 'About',
        component: About,
        props:data
      },
        {
          path: '/Funding',
          name: 'Funding',
          component: Funding
        },
          {
            path: '/Vote',
            name: 'Vote',
            component: Vote
          },
            {
              path: '/Buy',
              name: 'Buy',
              component: Buy
            },
            {
              path: '/VotePlatform',
              name: 'VotePlatform',
              component: VotePlatform
            },
        {
          path: '/Why',
          name: 'Why',
          component: Why,
          props:data
        },
        {
          path: '/Join',
          name: 'Join',
          component: Join
        },
        {
          path: '/Gov',
          name: 'Gov',
          component: Gov
        }

  ]
})
