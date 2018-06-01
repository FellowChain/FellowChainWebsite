import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Join from '@/components/Join'
import Why from '@/components/Why'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
        path: '/About',
        name: 'About',
        component: About
      },
        {
          path: '/Why',
          name: 'Why',
          component: Why
        },
          {
            path: '/Join',
            name: 'Join',
            component: Join
          }
  ]
})
