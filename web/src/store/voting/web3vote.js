
var voteWorker = function(store,voteAdr,from,abi,decimals){

if(decimals===undefined){
  decimals = 100000000;
}

var contract = web3.eth.contract(abi.Voting).at(voteAdr);

    var watchers = {

    }


    store.assignWatcher = function(txhash,callback){
      if(watchers[txhash]==undefined){
        watchers[txhash] = [];
      }
      watchers[txhash].push(callback);
    }

    var buildDetails = function(el){
      var idx = el.callIdx.toNumber();
      var proposalVotingCntAddr = el.votingContract;
      var fullName = "";
      var votesFor = 0;
      var votesAgainst = 0;
      var mainVotingC = web3.eth.contract(abi.Voting).at(voteAdr);
      var proposalVotingC = web3.eth.contract(abi.Voting).at(proposalVotingCntAddr);
      mainVotingC.calls(idx,function(e,val){
        el.fullName = val[3];
        el.hash = val[4];
        el.isExecuted = val[5];
        el.isExecuted = el.isExecuted.toString();
      });
      mainVotingC.votingResults(idx,function(e,val){
        el.votesFor = val[0];
        el.votesAgainst = val[1];
        el.endTime = val[2];
        el.time = el.endTime.toNumber();
      });
      el.executeCall = (function(callback){
        mainVotingC.execute(this.callIdx.toNumber(),function(e,v){

          if(callback!=undefined){
            callback(e,v);
          }

        });
      }).bind(el);
      el.voteFor = (function(callback){
        console.log("Vote for "+this.callIdx.toNumber());
          console.log("Vote for addr "+mainVotingC.address);
        mainVotingC.vote(this.callIdx.toNumber(),true,function(e,v){

          if(callback!=undefined){
            callback(e,v);
          }

        });
      }).bind(el);
      el.voteAgainst = (function(callback){
        console.log("Vote against "+this.callIdx.toNumber());
          console.log("Vote against addr "+mainVotingC.address);
        mainVotingC.vote(this.callIdx.toNumber(),false,function(e,v){

          if(callback!=undefined){
            callback(e,v);
          }

        });
      }).bind(el);


    }

    return new Promise((res,rej)=>{

        var myEvent = contract.VotingRegistered({},{fromBlock: from, toBlock: 'latest'});
        myEvent.watch(function(error, result){
          var el = Object.assign({blockNumber:result.blockNumber,txhash:result.transactionHash},
  result.args);
            store.votings.push(el);
            buildDetails(el);
            for(var i=0;i<store.votings.length;i++){
              if(watchers[store.votings[i].txhash]!=undefined){
                var tmp = watchers[store.votings[i].txhash];
                for(var j=0;j<tmp.length;j++){
                  tmp[j](store.votings[i]);
                }
                watchers[store.votings[i].txhash] =[];
              }
            }
        });
    });

  };


  export default voteWorker;
