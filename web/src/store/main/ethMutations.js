var ethMutations = {
  setAccount:function(state,acc){
    state.currentAddress = acc;
  },
  setAuthValue:function(state,data){
      state.isAuthorised = true;
      if(data!=undefined){
        state.userData = data;
      }
    },
  setBlockNumber:function(state,num){
    state.latestBlock = num;
  },
  setSignature:function(state,signature){
    state.signedMessage = signature;
  },
  setNetwork:function(state,netId){
    state.networkId = parseInt(netId) ;
    state.isEnabled = false ;
    if(state.networkId === 1533484773416){
        state.explorerUrl = "https://poaexplorer.com/address/";
        state.contracts.NameRegistry = "0xd649c72656fa919135a1915281c40b24961e47bc";
        state.isEnabled = true ;
    }
    if(state.networkId  === 77){
      state.explorerUrl = "https://sokol-explorer.poa.network/account/";
      state.contracts.NameRegistry = "";
      state.isEnabled = true ;
    }
    if(state.networkId  === 99){
      state.explorerUrl = "https://poaexplorer.com/address/";
      state.contracts.NameRegistry = "0x29db16e486f2dd58261c1a82057d672aa7593a1b";
      state.isEnabled = true ;
    } 
    if(state.networkId  === 3){//ropsten
      state.explorerUrl = "https://ropsten.etherscan.io/address/";
      state.contracts.NameRegistry = "0xe74b435173995927d2086f9763831d227a03ac10";
      state.isEnabled = true ;
    }
    if(state.networkId  === 4){//rinkeby
      state.explorerUrl = "https://rinkeby.etherscan.io/address/";
      state.contracts.NameRegistry = "0x863167949fd5b6217610cd54e1ca87d1df2afcbd";
      state.isEnabled = true ;
    }
  },
  setTokenBalanceDetails:function(state,details){
    state.tokensBalance=new web3.BigNumber(details.userFree.toString());
    state.votingPower=new web3.BigNumber(details.userLocked.toString());
    state.totalToBuy=new web3.BigNumber(details.remains.toString());
    state.price=new web3.BigNumber(details.price.toString());
    state.devAllowence = new web3.BigNumber(details.devAllowence.toString());
    state.lockEndTime = new web3.BigNumber(details.lockEndTime.toString());
  },
  setWithdraw:function(state,val){
    state.canWithdraw=val;
  },
  addPendingTransaction:function(state,trans){
    state.pendingTx[trans] = true;
  },
  remPendingTransaction:function(state,trans){
    delete state.pendingTx[trans];
  },
  setContractsInfo:function(state,data){
    state.contracts = Object.assign({},state.contracts);
    state.contracts.Voting =data.v;
    state.contracts.Token =data.t;
      state.contracts.Locker =data.l;
      state.contracts.DevFund =data.d;
  }
};
export default ethMutations;
