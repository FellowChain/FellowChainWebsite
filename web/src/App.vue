<template>
  <div id="app" v-loading.fullscreen.lock="isLoading">
    <div class="global-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <router-link to="/" class="navbar-brand" title="Main page">
                <img src="/static/symbol.png" width="70">
              </router-link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#/prod">{{ $t('menu.products')}}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#/learn">{{ $t('menu.industry')}}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#/join">{{ $t('menu.joinus')}}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#/gov">{{ $t('menu.governance')}}</a>
                  </li>
                </ul>
                <ul class="navbar-nav mr-auto pull-right navbar-right">
                  <li>
                    <a href="https://prototype.fellowchain.network">
                      <i class="fa fa-external-link"></i>
                      {{ $t('menu.open')}}
                    </a>
                  </li>
                  <li>
                    <div>
                      <notAuthorised></notAuthorised>
                    </div>
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
                <div class="col-lg-1 col-md-1 col-sm-12 offset-lg-0 offset-md-0 logo">
                  <img src="/static/icon-small.jpg" width="50">
                </div>
                <div class="col-lg-2 col-md-2 col-sm-12 desc">
                  All rights reserved by <a href="#">Fellows.network</a>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-12 menu">
                  <ul>
                    <li><a href="#">{{ $t('menu.society')}}</a></li>
                    <li><a href="#/learn">{{ $t('menu.industry')}}</a></li>
                    <li><a href="#/join">{{ $t('menu.joinus')}}</a></li>
                    <li><a href="#/gov">{{ $t('menu.governance')}}</a></li>
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
  components: {notAuthorised},
  computed: {
    isLoading () {
      return this.$store.getters['loading/isLocked'];
    }
  },
  i18n: i18n
}

</script>
