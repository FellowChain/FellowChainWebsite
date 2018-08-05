<template>
  <div class="content-box">
    <div class="desc">
      <h5>What is FLS and how it will help build the platform</h5>
      <p>FLS is a token with total supply of 20 000 000 units, with initial price of 1 POA per token.
         FLS token gives privilege of voting on further platform development and funds distribution.
         FLS tokens can be also gained by contribution to the development of a platform (see Join Us tab).
        <BR/>To buy FLS token and gain part of control over the project see Governance -> Buy Tokens.
        <BR/><B>All POA aquired during token sale goes to Development Fund Smart Contract.</B> </p>
      <p> Initial distribution of Tokens is as follows</p>
      <ul>
        <li>200 000 tokens (1%) is in hands of platform creator</li>
        <li>9 800 000 (49,0%) is in hands of Development Fund smart contract </li>
        <li>10 000 000 (50%) is in company operation smart contract</li>

      </ul>
      <p>
        funds in company operation smart contract will be used to pay for currency stabilisation services
        and for mutuals liquidity and capital providers mechanism (see more in <a href="#/prod">FUTURE PRODUCTS</a>)
      </p>
      <p>
        To request money (POA or FLS) from Development Fund Smart Contract go to "<a href="#/gov/funding">Governance>Funding</a>".It is highly adviced to start discussion about your reward <a href="https://github.com/FellowChain/Administration" >here</a> first
      </p>
      <p>
      <TokensAmounts isAllowVisible="true"></TokensAmounts>
      </p>
    </div>
  </div>
</template>
<script>
  import TokensAmounts from "../../../global/tokensAmounts";
  export default {
    components:{
      TokensAmounts
    },
    name: 'govWelcome',
  }
</script>
