var ethMutations = {
  setAccount:function(state,acc){
    state.currentAddress = acc;
  },
  setBlockNumber:function(state,num){
    state.latestBlock = num;
  },
  setNetwork:function(state,netId){
    state.networkId = netId ;
    state.isEnabled = false ;
    if(netId === 99){
      state.explorerUrl = "https://sokol-explorer.poa.network/account/";
      state.contracts.NameRegistry = "";
      state.isEnabled = true ;
    }
    if(netId === 77){
      state.explorerUrl = "https://poaexplorer.com/address/";
      state.contracts.NameRegistry = "0x6e59dce4cf352bb1112c9dbf76c66a8e1edf141a";
      state.isEnabled = true ;
    }
    if(netId === 3){//ropsten
      state.explorerUrl = "https://ropsten.etherscan.io/address/";
      state.contracts.NameRegistry = "0xfc4c43cc2a1182360397a3a7569c25e537e56466";
      state.isEnabled = true ;
    }
    if(netId === 4){//rinkeby
      state.explorerUrl = "https://rinkeby.etherscan.io/address/";
      state.contracts.NameRegistry = "0x23ec2e773a0d1f08c6bf73cdaed52e8d135944a1";
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
    state.pendingTx.push(trans);
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
