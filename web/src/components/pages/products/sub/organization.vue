<template>
  <div class="content-box">
    <div class="desc">
      <h3>Organization Management Products</h3>
      <p>Fellows Network has unique governance model. Every participant can deposit his FST and participate
        In project governance. Every method with onlyOwner modifier in contracts owned by VotingContract
        can be executed only as a result of voting of FST owners. Every owner has number of votes equal to
        number of tokens locked for voting<p>
      <p>
        With governance model You can do plenty of things:
        <ol>
          <li> ask for funds (both in POA and FST) for Your contribution</li>
          <li> propose funding for smart contract You have wrote</li>
          <li> propose change in token price (as project progress it should become more valuable)</li>
          <li> propose funding for smart contract You have wrote</li>
          <li> propose change in wotings parameters (timespan, majority factor etc.)</li>
          <li> even propose new governance by set of changeOwnership votings</li>
        </ol>
      </p>
      <p>At any time You can propose new Contract to be added to Fellows Gevernance ecosystem
        (by putting registerProxy execution under a voting). If that all sounds strange to You,
        visit our <a href="http://fellowchain.wikidot.com/wiki:governance">wiki</a> to learn more</p>
        You can easily access governance module by <a href="#/gov">clicking here</a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'joinDiagram'
  }
</script>
