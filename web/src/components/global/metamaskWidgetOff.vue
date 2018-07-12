<template>
  <div class="metamask">
    <div id="circle">
      <div class="right">
        <div class="pull-right">
          <i class="fa fa-download download" v-tooltip="'Download metamask'"></i>
          <label class="switch pull-right" v-tooltip="'Login with metamask'">
            <input type="checkbox" :checked="this.$store.getters.basicData.isEnabled" disabled="disabled">
            <span class="slider"></span>
          </label>
        </div>
      </div>
      <div id="mask"></div>
      <p>
        <i class="fa fa-times"></i>
        {{ $t('metamask.status.off')}}
      </p>
      <div class="actions">
        <a href="#" class="filled">Login with metamask</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'metamaskWidgetOff',
    mounted () {
      let ModelViewer = require('metamask-logo')
      let viewer = ModelViewer({
        pxNotRatio: true,
        width: 100,
        height: 60,
        followMouse: false,
        slowDrift: false,

      })

      let container = document.getElementById('mask')
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
