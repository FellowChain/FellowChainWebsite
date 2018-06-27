
var voteWorker = function(store,voteAdr,from,decimals){

if(decimals==undefined){
  decimals = 100000000;
}
var mainVoterAbi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "callIndex",
        "type": "uint256"
      },
      {
        "name": "isFor",
        "type": "bool"
      }
    ],
    "name": "vote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "calls",
    "outputs": [
      {
        "name": "data",
        "type": "bytes"
      },
      {
        "name": "adr",
        "type": "address"
      },
      {
        "name": "val",
        "type": "uint256"
      },
      {
        "name": "method",
        "type": "string"
      },
      {
        "name": "hash",
        "type": "bytes32"
      },
      {
        "name": "isExecuted",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "idx",
        "type": "uint256"
      }
    ],
    "name": "execute",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
var votingContractAbi = [{
  "constant": true,
  "inputs": [],
  "name": "votesForSum",
  "outputs": [
    {
      "name": "",
      "type": "uint64"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "endTime",
  "outputs": [
    {
      "name": "",
      "type": "uint64"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "parent",
  "outputs": [
    {
      "name": "",
      "type": "address"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "votesAgainstSum",
  "outputs": [
    {
      "name": "",
      "type": "uint64"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "name": "_time",
      "type": "uint64"
    }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "votesFor",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "votesAgainst",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "voter",
      "type": "address"
    },
    {
      "indexed": false,
      "name": "voterVotesCount",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "voteDirection",
      "type": "bool"
    }
  ],
  "name": "VoteCasted",
  "type": "event"
},
{
  "constant": true,
  "inputs": [],
  "name": "getEndTime",
  "outputs": [
    {
      "name": "",
      "type": "uint64"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "voter",
      "type": "address"
    },
    {
      "name": "voteCount",
      "type": "uint64"
    },
    {
      "name": "votedFor",
      "type": "bool"
    }
  ],
  "name": "vote",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}
];
var contract = web3.eth.contract([
{
      "anonymous": false,
      "inputs":  [
        {
          "indexed": false,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_data",
          "type": "bytes"
        },
        {
          "indexed": true,
          "name": "callIdx",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "time",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "votingContract",
          "type": "address"
        }
      ],
      "name": "VotingRegistered",
      "type": "event"
    }]).at(voteAdr);

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
      var mainVotingC = web3.eth.contract(mainVoterAbi).at(voteAdr);
      var proposalVotingC = web3.eth.contract(votingContractAbi).at(proposalVotingCntAddr);
      mainVotingC.calls(idx,function(e,val){
        el.fullName = val[3];
        el.hash = val[4];
        el.isExecuted = val[5];
        el.isExecuted = el.isExecuted.toString();
      });
      proposalVotingC.votesForSum(function(e,val){
        el.votesFor = val.toNumber()/decimals;
      });
      proposalVotingC.votesAgainstSum(function(e,val){
        el.votesAgainst = val.toNumber()/decimals;
      });
      proposalVotingC.endTime(function(e,val){
        el.endTime = val.toNumber();
          el.time = el.time.toNumber();
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
