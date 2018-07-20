<template>
  <div class="content-box">
    <div class="desc">
      <h3>Stability Features</h3>

      <p>
      Stability of FLS (and discovery of a market price) will be achieved by insurance auction.
      </p>
      <p>
        Fellows Project will for each period of 2 months put on blockchain series of smart contracts which will
        be bided by external party Each contract is characterised by :
        <ol>
          <li>Target FLS price</li>
          <li>Max bidder exposure</li>
        </ol>
        each of that contract will be independly bidded by external investors with price X. Biding
        price X means, that bidder agree for amount of X FLS tokens to defend selected <b>Target FLS price</b> (in range +/- 5%)
        and deposit sum of <b>Max bidder exposure</b> both in POA and FLS in case of failure.
        Fellows Project will vote on all bids and choose most suitable one. Most probably the cheapest because that is most likely
        the safest and closest to fair price. Fellows Project might choose more expensive one if that will significantly lower risks on
        Mutuals insurers. As mentioned choice will be subject to voting of FLS holders.

      </p>
      <p>
        Once offer is chosen Fellows will deposit amount of X (Bid price) FLS Tokens and bidder will deposit
        <b>Max bidder exposure</b> in both POA and FLS. For a period of 2 months everyone will be allowed to buy
        any amount of FLS (up to deposit) for 105% of price in POA and sell any amount for 95% of target price
        in POA therefore if bidder fails to stabilize the price of FLS in selected range he will be severely punnished
        by loosing part of his deposit. This way Fellows Project can expect FLS exchange rate will be stabilized by proffesionals
        looking for interests of their POA capital at a cost of lowest risk.
      </p>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'joinDiagram'
  }
</script>
