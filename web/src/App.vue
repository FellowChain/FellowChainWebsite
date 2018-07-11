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
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
              <div class="introduce">
                <h1>{{ $t('introduction.title')}}</h1>
                <h2>Fellows <span>.network</span></h2>
              </div>
              <div class="actions">
                <p>{{ $t('introduction.description')}}</p>
                <a href="/" class="filled">{{ $t('introduction.links.create')}}</a>
                <a href="/" class="filled">{{ $t('introduction.links.buy')}}</a>
                <a href="/">{{ $t('introduction.links.more')}}</a>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="metamask">
      <div id="circle">
        <div id="mask"></div>
        <p v-if="!this.$store.getters.basicData.isEnabled">
          <i class="fa fa-times"></i>
          {{ $t('metamask.status.off')}}
        </p>
        <p v-else-if="this.$store.getters.basicData.isEnabled" class="success">
          <i class="fa fa-check"></i>
          {{ $t('metamask.status.on')}}
        </p>
        <div>
          <label class="switch">
            <input type="checkbox" :checked="this.$store.getters.basicData.isEnabled" disabled="disabled">
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="title">
              <h1>
                {{ $t('tips.mission.text')}}
              </h1>
              <span>
                  {{ $t('tips.mission.href')}}
                  <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
              </span>
            </div>
            <div class="title">
              <h1>
                {{ $t('tips.finance.text')}}
              </h1>
              <span>
                  {{ $t('tips.finance.href')}}
                  <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-2">
            <div class="desc">
              <p>{{ $t('description.paragraph1').join('\n')}}</p>
              <p>
                {{ $t('description.paragraph2').join('\n')}}
              </p>
              <p>
                {{ $t('description.paragraph3').join('\n')}}
              </p>

              <b>{{ $t('description.tip')}}</b>

            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="centered-title">
              <h1>
                {{ $t('mission.title') }}
              </h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="mission">
              <div class="row">
                <div class="col-lg-6 problem">
                  <h2>{{ $t('mission.problem.title') }}</h2>
                  <p>
                    {{ $t('mission.problem.description').join('\n')}}
                  </p>
                </div>
                <div class="col-lg-6 solution">
                  <h2>{{ $t('mission.solution.title') }}</h2>
                  <p>
                    {{ $t('mission.solution.description').join('\n')}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="centered-title">
              <h1>
                {{ $t('tokenDetails.title') }}
              </h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="details">
              <div class="row">
                <div class="col-lg-4 offset-lg-2">
                  <div class="row row-eq-height">
                    <div class="col-lg-2">
                      <div class="icon">
                        <img src="/static/icon-small.jpg" class="logo" width="50">
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="wrapper">
                        <img src="/static/all.png" width="100%">
                      </div>
                    </div>
                    <div class="col-lg-7 token">
                  <span>
                    <strong>Name</strong> Fellows
                  </span>
                      <span>
                    <strong>Symbol</strong> FEL
                  </span>
                      <span>
                    <strong>Supply</strong> 10 000 000 FEL
                  </span>
                      <span>
                    <strong>Price</strong> ≈ 0.2$ (1 POA)
                  </span>
                      <span>
                    <strong>Platform</strong> POA Network (Ethereum)
                  </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="window">
                    <div class="row">
                      <div class="col-lg-3">
                        <i class="fa fa-book fa-4x"></i>
                      </div>
                      <div class="col-lg-9">
                        <h4>Whitepaper</h4>
                        <p>Read our whitepaper!</p>
                        <div>
                          <a href="/">Read whitepaper</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="centered-title">
              <h1>
                {{ $t('finances.title') }}
              </h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="">
              <div class="row">
                {{ $t('finances.description').join('\n') }}
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="">
              <div class="row">
                <div class="centered-title">
                {{ $t('finances.voting.title') }}
                </div>
              </div>
              <div class="row">
                {{ $t('finances.voting.content').join('\n') }}
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="">
              <div class="row">
                <div class="centered-title">
                {{ $t('finances.use.title') }}
                </div>
              </div>
              <div class="row">
                {{ $t('finances.use.content').join('\n') }}
                <ul>
                  <li>
                {{ $t('finances.use.list').join("\n") }}
                  </li>
                </ul>

                  {{ $t('finances.use.content2').join('\n') }}
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="centered-title">
                <h1>
                  {{ $t('productReady.title') }}
                  <span>
                    {{ $t('productReady.label') }}
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="platform-introduce">
                <div class="row height100">
                  <div class="col-lg-12 height100">
                    <div class="about height100">
                      <h1>
                        Coming soon!
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="centered-title">
              <h1>
                {{ $t('community.title') }}
              </h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="">
              <div class="row">
                <div class="col-lg-4">
                  <div class="window">
                    <div class="row">
                      <div class="col-lg-3">
                        <i class="fa fa-github fa-4x"></i>
                      </div>
                      <div class="col-lg-9">
                        <h4>{{ $t('community.github.title') }}</h4>
                        <p>{{ $t('community.github.description') }}</p>
                        <div>
                          <a href="https://github.com/fellowchain">{{ $t('community.github.href') }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="window">
                    <div class="row">
                      <div class="col-lg-3">
                        <i class="fa fa-telegram fa-4x"></i>
                      </div>
                      <div class="col-lg-9">
                        <h4>{{ $t('community.telegram.title') }}</h4>
                        <p>{{ $t('community.telegram.description') }}</p>
                        <div>
                          <a href="https://t.me/FellowChain">{{ $t('community.telegram.href') }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="window">
                    <div class="row">
                      <div class="col-lg-3">
                        <i class="fa fa-facebook fa-4x"></i>
                      </div>
                      <div class="col-lg-9">
                        <h4>{{ $t('community.facebook.title') }}</h4>
                        <p>{{ $t('community.facebook.description') }}</p>
                        <div>
                          <a href="https://www.facebook.com/groups/felllowchain/">{{ $t('community.facebook.href') }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 offset-lg-2">
                  <div class="window">
                    <div class="row">
                      <div class="col-lg-3">
                        <i class="fa fa-youtube fa-4x"></i>
                      </div>
                      <div class="col-lg-9">
                        <h4>{{ $t('community.youtube.title') }}</h4>
                        <p>{{ $t('community.youtube.description') }}</p>
                        <div>
                          <a href="https://www.youtube.com/watch?v=VBNKPqlkkoY&list=PLcqxiC8OYZSUhgtk3CdIg3YyUkyN6SUSp">{{ $t('community.youtube.href') }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="window">
                    <div class="row">
                      <div class="col-lg-3">
                        <i class="fa fa-support fa-4x"></i>
                      </div>
                      <div class="col-lg-9">
                        <h4>{{ $t('community.wiki.title') }}</h4>
                        <p>{{ $t('community.wiki.description') }}</p>
                        <div>
                          <a href="http://fellowchain.wikidot.com/">{{ $t('community.wiki.href') }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="centered-title">
                <h1>
                  {{ $t('help.title') }}
                </h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="faqs">
                      <ul>
                        <li class="open">
                          <span>
                            Lorem ipsum?
                          </span>
                          <div>
                            Lorem ipsum!
                          </div>
                        </li>
                        <li class="">
                          <span>
                            Lorem ipsum?
                          </span>
                          <div>
                            Lorem ipsum!
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="window filled email-to-team">
                      <div class="row">
                        <div class="col-lg-3">
                          <i class="fa fa-envelope-o fa-4x"></i>
                        </div>
                        <div class="col-lg-9">
                          <h4>More questions?</h4>
                          <p>Write to us!</p>
                          <div class="input">
                            <input class="control on-bg full" placeholder="Your e-mail">
                          </div>
                          <div class="input">
                            <textarea class="control on-bg full" placeholder="Your message">

                            </textarea>
                          </div>
                          <div>
                            <a href="/">Send</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
                    <li><a href="#">Society</a></li>
                    <li><a href="#">Insurance industry</a></li>
                    <li><a href="#">Prices</a></li>
                    <li><a href="#">About fellows</a></li>
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
import siteMenu from '@/components/Menu'
import siteFooter from '@/components/Footer'
import noMetamask from '@/components/NoMetamask'
import notAuthorised from '@/components/NotAuthorised'
import i18next from 'i18next'
import VueI18n from 'vue-i18n'
import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.css";
import '@/styles/main.scss';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: require('@/langs/en.json')
  }
});

export default {
  name: 'App',
  components: {siteMenu,siteFooter,noMetamask, notAuthorised},
  computed: {
    isLoading () {
      return this.$store.getters['loading/isLocked'];
    }
  },
  i18n: i18n,
  mounted () {
    var ModelViewer = require('metamask-logo')
    var viewer = ModelViewer({
      pxNotRatio: true,
      width: 100,
      height: 60,
      followMouse: false,
      slowDrift: false,

    })

    var container = document.getElementById('mask')
    container.appendChild(viewer.container)

    viewer.lookAt({
      x: 50,
      y: 50,
    })
    viewer.setFollowMouse(true)
    viewer.stopAnimation()
  }
}

</script>
