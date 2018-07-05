var ethGetters = {
  basicData: state=>{
    return {
      networkId : state.networkId,
      isEnabled : state.isEnabled,
      inProcess : state.inProcess,
      blockNumber : state.latestBlock,
      explorerUrl : state.explorerUrl,
      userAccount : state.currentAddress,
      signedMessage :state.signedMessage,
      isAuthorised:((state.isAuthorised===undefined)?false:state.isAuthorised),
      userData: state.userData
    }
  },
  tokenInfo: state =>{
    return {
      tokenAddress : state.contracts.Token,
      tokenUsersAmount : (state.tokensBalance.add(state.votingPower)).toString(),
      usersVotingPower : state.votingPower.toString(),
      totalToBuy : state.totalToBuy.toString(),
      tokenPrice : state.price.toString(),
      exitPrice : state.exitPrice.toString(),
      devAllowence : state.devAllowence.toString(),
      canWithdraw : state.canWithdraw,
      lockEndTime : state.lockEndTime.toString()
    }
  },
  contractsInfo: state=>{
    return {
      voting : state.contracts.Voting ,
      token:state.contracts.Token,
      locker:state.contracts.Locker,
      dev:state.contracts.DevFund,
      nameReg:state.contracts.NameRegistry,
      isNotReady : state.contracts.Voting == undefined ||
        state.contracts.Token == undefined ||
        state.contracts.Locker == undefined ||
        state.contracts.DevFund == undefined
    }
  }
};

export default ethGetters;
