<template>
  <div id="app" v-loading.fullscreen.lock="isLoading">
    <div class="global-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="#">
                <img src="/static/symbol.png" width="70">
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#">{{ $t('menu.society')}}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">{{ $t('menu.industry')}}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">{{ $t('menu.joinus')}}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">{{ $t('menu.about')}}</a>
                  </li>
                </ul>
                <ul class="navbar-nav mr-auto pull-right navbar-right">
                  <li>
                    <a href="platform.fellows.network">
                      <i class="fa fa-external-link"></i>
                      {{ $t('menu.open')}}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <router-view name="header"></router-view>
    </div>
    <router-view name="main"></router-view>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="footer">
              <div class="row">
                <div class="col-lg-1 logo">
                  <img src="/static/icon-small.jpg" width="50">
                </div>
                <div class="col-lg-2 desc">
                  All rights reserved by <a href="#">Fellows.network</a>
                </div>
                <div class="col-lg-9 menu">
                  <ul>
                    <li><a href="#">{{ $t('menu.society')}}</a></li>
                    <li><a href="#">{{ $t('menu.industry')}}</a></li>
                    <li><a href="#">{{ $t('menu.prices')}}</a></li>
                    <li><a href="#">{{ $t('menu.about')}}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import siteFooter from '@/components/Footer'
import noMetamask from '@/components/NoMetamask'
import notAuthorised from '@/components/NotAuthorised'

import i18next from 'i18next'
import VueI18n from 'vue-i18n'
import Vue from 'vue'
import Tooltip from 'vue-directive-tooltip';

import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.css";
import '@/styles/main.scss';
import "vue-directive-tooltip/css/index.css";

Vue.use(Tooltip);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: require('@/langs/en.json')
  }
});

export default {
  name: 'App',
  components: {},
  computed: {
    isLoading () {
      return this.$store.getters['loading/isLocked'];
    }
  },
  i18n: i18n
}

</script>
