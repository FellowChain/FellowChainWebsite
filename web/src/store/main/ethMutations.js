var ethMutations = {
  setAccount:function(state,acc){
    state.currentAddress = acc;
  },
  setBlockNumber:function(state,num){
    state.latestBlock = num;
  },
  setNetwork:function(state,netId){
    state.networkId = netId ;
    state.isEnabled = true ;
    if(netId === 99){
      state.explorerUrl = "https://sokol-explorer.poa.network/account/";
    }
    if(netId === 77){
      state.explorerUrl = "https://poaexplorer.com/address/";
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
