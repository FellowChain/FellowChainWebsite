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
                    <a class="nav-link" href="#">{{ $t('menu.prices')}}</a>
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
            <div class="">
              <div class="row">

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
                <div class="row">
                  <div class="col-lg-4">
                    a
                  </div>
                  <div class="col-lg-4">
                    b
                  </div>
                  <div class="col-lg-4">
                    c
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
                          <a href="/">{{ $t('community.github.href') }}</a>
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
                          <a href="/">{{ $t('community.telegram.href') }}</a>
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
                          <a href="/">{{ $t('community.facebook.href') }}</a>
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
                          <a href="/">{{ $t('community.youtube.href') }}</a>
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
                          <a href="/">{{ $t('community.wiki.href') }}</a>
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
                    Faqs list
                  </div>
                  <div class="col-lg-4">
                    <div class="window">
                      <div class="row">
                        <div class="col-lg-3">
                          <i class="fa fa-envelope-o fa-4x"></i>
                        </div>
                        <div class="col-lg-9">
                          <h4>E-mail contact</h4>
                          <p>Our mail address is mail@mail.com</p>
                          <div>
                            <a href="/">Write to us</a>
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
                <div class="col-lg-5 menu">
                  menu?
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

<style lang="sass">
  #app
    font-family: 'Hind', Arial, sans-serif

  .navbar-right
    margin-right: 0 !important
    li
      a
        letter-spacing: 2px
        margin-right: 20px
        border-radius: 30px
        padding: 15px 25px
        font-size: 12px
        color: #fff
        background-color: #e294cc
        font-weight: bold
        -webkit-box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.2)
        box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.2)

  .metamask
    position: absolute
    width: 100%
    margin-top: -170px
    #circle
      display: table
      margin: 0 auto
      background-color: #fff
      border-radius: 10px
      padding: 20px 50px
      -webkit-box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.2)
      box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.2)
      text-align: center
      width: 350px
      .success
        color: #e294cc
    p
      font-size: 12px
      text-align: center
      letter-spacing: 1px
      color: #ccc

  .global-wrapper
    height: 700px
    background-image: linear-gradient(to right top, #e6a1c4, #e294cc, #d78ad9, #c483e9, #a480fa)
    clip-path: polygon(0 0, 100% 0, 100% 87%, 0 100%)

  .nav-item
    margin-right: 20px

  .nav-item
    >a
      color: #fff
      text-transform: uppercase
      font-size: 11px
      letter-spacing: 2px

  .navbar-brand
    margin-right: 30px


  .actions
    text-align: center
    p
      text-align: center
      color: #fff
      font-weight: normal
      letter-spacing: 2px
    a
      letter-spacing: 2px
      margin-right: 20px
      border-radius: 10px
      border: 1px solid #fff
      padding: 15px 25px
      font-size: 12px
      color: #fff
      &.filled
        background-color: #e294cc
        border: none
        font-weight: bold
        -webkit-box-shadow: 2px 2px 12px 0px rgba(0,0,0,0.2)
        -moz-box-shadow: 2px 2px 12px 0px rgba(0,0,0,0.2)
        box-shadow: 2px 2px 12px 0px rgba(0,0,0,0.2)

  .platform-introduce
    height: 700px
    background-image: linear-gradient(to right top, #e6a1c4, #e294cc, #d78ad9, #c483e9, #a480fa)
    clip-path: polygon(0 10%, 100% 0, 100% 87%, 0 100%)

  .centered-title
    text-align: center
    margin: 100px 0 40px 0
    text-transform: uppercase
    h1
      font-weight: bold
    span
      font-size: 12px
      margin-left: 5px
      position: absolute
      color: #fff
      background-color: #a480fa
      padding: 5px 10px
      border-radius: 30px
      text-transform: none

  .introduce
    text-align: center
    color: #fff
    padding: 80px 30% 50px 30%
    > h1
      font-size: 25px
      font-weight: normal
      letter-spacing: 2px
    > h2
      font-size: 60px
      font-weight: bold
      position: relative
      text-transform: uppercase
      text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1)
      > span
        font-size: 12px
        top: 0
        position: absolute
        color: #fff
        background-color: #a480fa
        padding: 5px 10px
        border-radius: 30px
        text-transform: none


  .switch
    position: relative
    display: inline-block
    width: 30px
    height: 17px


  .switch input
    display: none

  .slider
    position: absolute
    cursor: pointer
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: #ccc
    -webkit-transition: .4s
    transition: .4s
    border-radius: 34px


  .slider:before
    position: absolute
    content: ""
    height: 10px
    width: 10px
    left: 4px
    bottom: 4px
    background-color: white
    -webkit-transition: .4s
    transition: .4s
    border-radius: 50%


  input:checked + .slider
    background-color: #e294cc


  input:focus + .slider
    box-shadow: 0 0 1px #e294cc


  input:checked + .slider:before
    -webkit-transform: translateX(13px)
    -ms-transform: translateX(13px)
    transform: translateX(13px)

  .body
    margin-top: 100px
    .desc
      letter-spacing: 1px
      font-size: 14px
      color: #333
    .title
      margin-bottom: 30px
      h1
        font-weight: bold
        font-size: 40px
        background-image: linear-gradient(to right top, #e6a1c4, #e294cc, #d78ad9, #c483e9, #a480fa)
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent
      span
        display: inline-block
        font-size: 15px
        background-image: linear-gradient(to right top, #e6a1c4, #e294cc, #d78ad9, #c483e9, #a480fa)
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent
        i
          color: #a480fa
          display: inline

  footer
    padding: 40px 0
    .footer
      padding-top: 30px
      border-top: 1px solid #ddd
      .logo
        img
          border-radius: 50%
      .desc
        letter-spacing: 1px
        font-size: 14px
        color: #333
        a
          font-weight: bold
          background-image: -webkit-gradient(linear, left bottom, right top, from(#e6a1c4), color-stop(#e294cc), color-stop(#d78ad9), color-stop(#c483e9), to(#a480fa))
          background-image: linear-gradient(to right top, #e6a1c4, #e294cc, #d78ad9, #c483e9, #a480fa)
          -webkit-background-clip: text
          -webkit-text-fill-color: transparent

  .mission
    letter-spacing: 1px
    font-size: 14px
    color: #333
    h2
      font-weight: bold
    .problem
      border-right: 1px solid #ddd
      padding-right: 60px
      text-align: right
      &:before, &:after
        content: "\f09c"
        font-family: FontAwesome
        font-style: normal
        font-weight: normal
        text-decoration: inherit
        color: #ddd
        font-size: 66px
        padding-right: 0.5em
        position: absolute
        top: 50px
        right: -70px
        background-color: #fff
    p
      text-align: right
    .solution
      padding-left: 65px
      p
        text-align: left
      h2
        background-image: -webkit-gradient(linear, left bottom, right top, from(#e6a1c4), color-stop(#e294cc), color-stop(#d78ad9), color-stop(#c483e9), to(#a480fa))
        background-image: linear-gradient(to right top, #e6a1c4, #e294cc, #d78ad9, #c483e9, #a480fa)
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent


  .window
    vertical-align: top
    border: 1px solid #e4e8ef
    border-radius: 5px
    padding: 40px 30px 60px
    min-height: 180px
    margin-bottom: 30px
    h4
      color: #333
      font-size: 24px
      font-weight: bold
    p
      font-size: 14px
      letter-spacing: 1px
      color: #ccc
      text-align: left
    a
      letter-spacing: 2px
      margin-right: 20px
      border-radius: 10px
      padding: 10px 20px
      font-size: 11px
      color: #fff
      background-color: #e294cc
      font-weight: bold
      -webkit-box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.2)
      box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.2)
</style>
