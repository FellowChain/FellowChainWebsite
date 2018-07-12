import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Join from '@/components/Join'
import Why from '@/components/Why'
import Gov from '@/components/Governance'
import Vote from '@/components/gov/Vote'
import Buy from '@/components/gov/Buy'
import Funding from '@/components/gov/RequestDonation'
import VotePlatform from '@/components/gov/VotePlatform'
import Footer from '@/components/Footer'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      components: {
        header: () => import('@/components/pages/index/header'),
        main: () => import('@/components/pages/index/main')
      }
    },
    {
      path: '/buy',
      name: '',
      components: {
        header: () => import('@/components/pages/buy/header'),
        main: () => import('@/components/pages/buy/main')
      }
    },
    /*OLD*/

      {
        path: '/About',
        name: 'About',
        component: About
      },
        {
          path: '/Funding',
          name: 'Funding',
          component: Funding
        },
          {
            path: '/Vote',
            name: 'Vote',
            component: Vote
          },
            {
              path: '/Buy',
              name: 'Buy',
              component: Buy
            },
            {
              path: '/VotePlatform',
              name: 'VotePlatform',
              component: VotePlatform
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
        },
        {
          path: '/Gov',
          name: 'Gov',
          component: Gov
        },



  ]
})
