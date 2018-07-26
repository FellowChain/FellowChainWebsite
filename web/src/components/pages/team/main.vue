<template>
  <div class="body">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="title menu">
            <h1>
              {{$t('team.title')}}
            </h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="window padding-right-short">
            <div class="row">
              <div class="col-lg-3">
                <img src="https://avatars0.githubusercontent.com/u/10146412?s=96&v=4" width="100%" class="rounded-circle">
              </div>
              <div class="col-lg-9">
                <h4>{{$t('team.persons.adamS')}}</h4>
                <p>{{$t('team.roles.some')}}</p>
                <div>
                  <a href="https://github.com/adamskrodzki" target="_blank"
                     :title="$t('team.github')">
                    {{$t('team.github')}}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="window padding-right-short">
            <div class="row">
              <div class="col-lg-3">
                <img src="https://avatars0.githubusercontent.com/u/13403200?s=96&v=4" width="100%" class="rounded-circle">
              </div>
              <div class="col-lg-9">
                <h4>{{$t('team.persons.davidM')}}</h4>
                <p>{{$t('team.roles.some')}}</p>
                <div>
                  <a href="https://github.com/dawidmierzwa95" target="_blank"
                     :title="$t('team.github')">
                    {{$t('team.github')}}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'teamMain',
  }
</script>
