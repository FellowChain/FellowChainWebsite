<template>
  <span>
    <metamask-widget-on v-if="this.$store.getters.basicData.isEnabled"></metamask-widget-on>
    <metamask-widget-off v-else-if="!this.$store.getters.basicData.isEnabled"></metamask-widget-off>
    <div class="body">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="title">
              <h1>
                {{ $t('tips.mission.text')}}
              </h1>
              <a href="#mission">
                  {{ $t('tips.mission.href')}}
                  <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
              </a>
            </div>
            <div class="title">
              <h1>
                {{ $t('tips.finance.text')}}
              </h1>
              <a href="#finance">
                  {{ $t('tips.finance.href')}}
                  <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
              </a>
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
          <div class="col-lg-12" id="mission">
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
                <div class="col-lg-4 offset-lg-2 data">
                  <div class="row row-eq-height">
                    <div class="col-lg-2 col-md-2 col-sm-2 offset-lg-0 offset-md-2 offset-sm-2 d-none d-sm-block">
                      <div class="icon">
                        <img src="/static/icon-small.jpg" class="logo" width="50">
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-2 col-sm-2 d-none d-sm-block">
                      <div class="wrapper">
                        <img src="/static/all.png" width="100%">
                      </div>
                    </div>
                    <div class="col-lg-7 col-md-4 col-sm-4 token">
                      <span>
                        <strong>Name</strong> Fellows
                      </span>
                          <span>
                        <strong>Symbol</strong> FEL
                      </span>
                          <span>
                        <strong>Supply</strong> 20 000 000 FLS
                      </span>
                          <span>
                        <strong>Price</strong> ≈ 0.2$ (1 POE)
                      </span>
                          <span>
                        <strong>Platform</strong> Ethereum
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-8 offset-lg-0 offset-md-2">
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
          <div class="col-lg-12" id="finance">
            <div class="centered-title">
              <h1>
                {{ $t('finances.title') }}
              </h1>
            </div>
          </div>
        </div>
        <div class="finance">
          <div class="row">
            <div class="col-lg-4 offset-lg-1">
                {{ $t('finances.description').join('\n') }}
            </div>
            <div class="col-lg-5 offset-lg-1">
                <img src="/static/images.png" width="100%">
            </div>
          </div>
          <div class="row paragraphs">
            <div class="col-lg-5 offset-lg-1">
              <h2>
                <span>
                  \\1
                </span> {{ $t('finances.use.title') }}
              </h2>
              <p>
                {{ $t('finances.use.content').join('\n') }}
              </p>
              <ol>
                <li v-for="item in $t('finances.use.list')">{{item}}</li>
              </ol>
              <p>
                {{ $t('finances.use.content2').join('\n') }}
              </p>
            </div>
            <div class="col-lg-5">
              <h2>
                <span>
                  \\2
                </span> {{ $t('finances.voting.title') }}
              </h2>
              <p>
                {{ $t('finances.voting.content').join('\n') }}
              </p>
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
                          <a href="https://github.com/fellowchain" target="_blank"
                             :title="$t('community.github.href')">{{ $t('community.github.href') }}</a>
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
                          <a href="https://t.me/FellowChain" target="_blank"
                             :title="$t('community.telegram.href')">
                            {{ $t('community.telegram.href') }}</a>
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
                          <a href="https://www.facebook.com/groups/felllowchain/" target="_blank"
                             :title="$t('community.facebook.href')">
                            {{ $t('community.facebook.href')}}
                          </a>
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
                          <a href="https://www.youtube.com/channel/UCVtF8JUnH_y63FXglGhpyLQ" target="_blank"
                             :title="$t('community.youtube.href')">
                            {{ $t('community.youtube.href') }}
                          </a>
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
                          <a href="http://fellowchain.wikidot.com/" target="_blank"
                             :title="$t('community.wiki.href')">
                            {{ $t('community.wiki.href') }}
                          </a>
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
                        <li
                          v-for="item in faqs"
                          :class="[(item.open ? 'open': '')]"
                          @click="(item.open ? item.open = false : item.open = true)">
                          <span>
                            {{item.label}}
                          </span>
                          <div>
                            {{item.description}}
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
  </span>
</template>

<script>
  import MetamaskWidgetOn from "../../global/metamaskWidgetOn";
  import MetamaskWidgetOff from "../../global/metamaskWidgetOff";

  export default {
    components: {
      MetamaskWidgetOn,
      MetamaskWidgetOff
    },
    name: 'indexMain',
    data() {
      return {
        faqs: require('@/langs/en.json').faqs
      }
    },
  }
</script>
