<template>
  <div class="body">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="title menu">
            <h1>
              Learn More about Fellows!
            </h1>
            <div>
              <router-link to="/learn">
                Home
                <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
              </router-link>
            </div>
            <div>
              <router-link to="/learn/governance">
                Governance
                <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
              </router-link>
            </div>
            <div>
              <router-link to="/learn/tokenModel">
                Token Model
                <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
              </router-link>
            </div>
            <div>
              <router-link to="/learn/industryNeeds">
                Why mutuals needs blockchain?
                <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <router-view name="panel"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import MetamaskWidgetOn from "../../global/metamaskWidgetOn";
  import MetamaskWidgetOff from "../../global/metamaskWidgetOff";
  import VeeValidate from 'vee-validate';

  Vue.use(VeeValidate);

  export default {
    components: {
      MetamaskWidgetOn,
      MetamaskWidgetOff
    },
    name: 'govMain',
    data() {
      return {}
    },
    watch: {
    },
    methods: {
    }
  }
</script>
