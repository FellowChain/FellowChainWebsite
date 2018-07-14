<template>
  <div class="metamask">
    <div class="circle">
      <div class="right">
        <div class="pull-right">
          <label class="switch pull-right">
            <input type="checkbox" :checked="this.$store.getters.basicData.isEnabled" disabled="disabled">
            <span class="slider"></span>
          </label>
        </div>
      </div>
      <div id="mask"></div>
      <p>
        <i class="fa fa-check"></i>
        {{ $t('metamask.status.on')}}
      </p>
      <div class="actions">
        <a href="#" class="filled">Governance panel</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'metamaskWidgetOn',
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
