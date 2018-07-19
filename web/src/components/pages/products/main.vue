<template>
  <div class="body">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="title menu">
            <h1>
              Learn what Fellows are about to build!
            </h1>
            <div>
              <router-link to="/prod">
                Products
                <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
              </router-link>
            </div>
            <div>
              <router-link to="/prod/organization">
                Organisation Management
                <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
              </router-link>
            </div>
            <div>
              <router-link to="/prod/riskManagement">
                Risk transfer features
                <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
              </router-link>
            </div>
            <div>
              <router-link to="/prod/stabilityFeatures">
                Stability features
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
