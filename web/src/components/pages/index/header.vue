
<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="introduce">
          <h1>{{ $t('introduction.title')}}</h1>
          <h2>Fellows <span class="label">.network</span></h2>
        </div>
        <div class="actions margin">
          <p>{{ $t('introduction.description')}}</p>
          <a href="/" class="filled">
            {{ $t('introduction.links.create')}}
          </a>
          <router-link to="/buy" class="filled" title="Buy Fellows Token">
            {{ $t('introduction.links.buy')}}
          </router-link>
          <a href="/">
            {{ $t('introduction.links.more')}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'indexHeader',
  }
</script>
