
import abi from './../abi'
  var canWithdraw = function(lockerAddr,userAddr){
      var token = web3.eth.contract(abi.Locker);
      var instance  = token.at(lockerAddr);
      return new Promise ((res,rej)=>{
        instance.isWithdrawPossible(userAddr,function(e,v){
          if(e==null || e==undefined){
             res(v);
          }
          else {
            rej(e);
          }
        });
      });
  }
  var getAddress = function(key,regAdr){
    var nameReg = web3.eth.contract(abi.NameRegistry);
    var instance  = nameReg.at(regAdr);
    return new Promise ((res,rej)=>{

      instance.getAddress(key,function(e,v){
        if(e==null || e==undefined){
      	   res(v);
        }
        else {
          rej(e);
        }
      });
    });
  }
  var balanceOf = function(queriedAddress,tokAddr){
    var token = web3.eth.contract(abi.Token);
    var instance  = token.at(tokAddr);
    return new Promise ((res,rej)=>{
      instance.decimals(function(e,dec){
        instance.balanceOf(queriedAddress,function(e,v){
          var divider = (new web3.BigNumber("10")).pow(dec.toString());
          var value = new web3.BigNumber(v.toString());

          if(e==null || e==undefined){
             res((value.div(divider)));
          }
          else {
            rej(e);
          }
        });
      });
    });
  }

  var allowenceOf = function(queriedAddress,allowedAddress,tokAddr){
    var token = web3.eth.contract(abi.Token);
    var instance  = token.at(tokAddr);
    return new Promise ((res,rej)=>{
      instance.decimals(function(e,dec){
        instance.allowance(queriedAddress,allowedAddress,function(e,v){
          var divider = (new web3.BigNumber("10")).pow(dec.toString());
          var value = new web3.BigNumber(v.toString());

          if(e==null || e==undefined){
             res((value.div(divider)));
          }
          else {
            rej(e);
          }
        });
      });
    });
  }

  var totalSupply = function(tokAddr){
    var token = web3.eth.contract(abi.Token);
    var instance  = token.at(tokAddr);
    return new Promise ((res,rej)=>{

      instance.decimals(function(e,dec){
        instance.totalSupply(function(e,v){
          if(e==null || e==undefined){
             res(v);
          }
          else {
            rej(e);
          }
        });
      });
    });
  }

  var lockEndTime = function(queriedAddress,lockerAdr){
    var lockerCntrct = web3.eth.contract(abi.Locker);
    var instance  = lockerCntrct.at(lockerAdr);

    return new Promise ((res,rej)=>{

        instance.endTime(queriedAddress,function(e,v){
          if(e==null || e==undefined){
             res(v);
          }
          else {
            rej(e);
          }
        });
      });
  }
  var amountLocked = function(queriedAddress,lockerAdr,tokenAdr){
    var lockerCntrct = web3.eth.contract(abi.Locker);
    var instance  = lockerCntrct.at(lockerAdr);
      var tokenCntrct = web3.eth.contract(abi.Token);
      var instanceT  = tokenCntrct.at(tokenAdr);
    return new Promise ((res,rej)=>{
      instanceT.decimals(function(e,dec){
        dec = (new web3.BigNumber(10)).pow(dec);
        instance.getLockedAmount(queriedAddress,function(e,v){
          if(e==null || e==undefined){
             res(v.div(dec));
          }
          else {
            rej(e);
          }
        });
      });
    });
  }
  var getPrice = function(devAddr){
    var nameReg = web3.eth.contract(abi.DevFund);
    var instance  = nameReg.at(devAddr);
    return new Promise ((res,rej)=>{

      instance.price(function(e,v){
        if(e==null || e==undefined){
           res(v);
        }
        else {
          rej(e);
        }
      });
    });
  }

  var web3i = {
    isEnabled:false,
    pendingTx:[],
    contracts:{
      getRegistryAddress:getAddress,
      tokenBalanceOf:balanceOf,
      tokenTotalSupply:totalSupply,
      amountLocked:amountLocked,
      lockEndTime:lockEndTime,
      allowenceOf:allowenceOf,
      getPrice:getPrice,
      canWithdraw:canWithdraw,
      NameRegistry:"0xaa56e210aed90e4bce528e20f48a6b3f6a96018d"
    },
    inProcess:false,
    prevBlock:2,
    latestBlock:2,
    explorerUrl:"https://sokol-explorer.poa.network/account/",
    currentAddress:"0x94da43c587c515ad30ea86a208603a7586d2c25f",
    tokensBalance:new web3.BigNumber("0"),
    exitPrice:new web3.BigNumber("0"),
    votingPower:new web3.BigNumber("0"),
    totalToBuy:new web3.BigNumber("0"),
    price:new web3.BigNumber("0"),
    devAllowence:new web3.BigNumber("0"),
    lockEndTime:new web3.BigNumber("0"),
    pendingGovernanceVoting:[{
      votedAddress:"0x56947ac048452f75a64e2411ca140336cf939f7d",
      votedMethod:"transfer(address,uint256)",
      msgData:"0xa9059cbb0000000000000000000000002f2b7e3c46174d6934564f31d49dac025b9028b0000000000000000000000000000000000000000000000000000000009731971f",
      votesFor:5438,
      votesAgainst:1234,
      votingEnds:1528625532
    },
    {
      amount:234.00,
      currency:'POA',
      to:'0x56947ac048452f75a64e2411ca140336cf939f7d',
      msgHash:'5cc65c8468d19bdf0698582dd34c4d1f2d320d4cbdcfe590b3c110dec9f7dfee',
      votesFor:5438,
      votesAgainst:1234,
      votingEnds:1528625532
    }]
  }

  export default web3i;
