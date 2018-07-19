import Vue from 'vue'
import Router from 'vue-router'

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
    {
      path: '/gov',
      name: '',
      components: {
        header: () => import('@/components/pages/gov/header'),
        main: () => import('@/components/pages/gov/main'),
      },
      children: [
        {
          path: "",
          name: "Gov",
          components: {
            panel: () => import('@/components/pages/gov/sub/welcome')
          },
        },
        {
          path: "vote",
          name: "Vote",
          components: {
            panel: () => import('@/components/pages/gov/sub/vote')
          },
        },
        {
          path: "votePlatform",
          name: "VotePlatform",
          components: {
            panel: () => import('@/components/pages/gov/sub/votePlatform')
          },
        },
        {
          path: "funding",
          name: "Funding",
          components: {
            panel: () => import('@/components/pages/gov/sub/funding')
          },
        }
      ]
    },
    {
      path: '/join',
      name: '',
      components: {
        header: () => import('@/components/pages/join/header'),
        main: () => import('@/components/pages/join/main'),
      },
      children: [
        {
          path: "",
          name: "Join",
          components: {
            panel: () => import('@/components/pages/join/sub/welcome')
          },
        },
        {
          path: "diagram",
          name: "Diagram",
          components: {
            panel: () => import('@/components/pages/join/sub/diagram')
          },
        }
      ]
    },
    {
      path: '/learn',
      name: '',
      components: {
        header: () => import('@/components/pages/learn/header'),
        main: () => import('@/components/pages/learn/main'),
      },
      children: [
        {
          path: "",
          name: "Learn",
          components: {
            panel: () => import('@/components/pages/learn/sub/welcome')
          },
        },
        {
          path: "governance",
          name: "Governance",
          components: {
            panel: () => import('@/components/pages/learn/sub/governance')
          },
        },
        {
          path: "tokenModel",
          name: "TokenModel",
          components: {
            panel: () => import('@/components/pages/learn/sub/tokenModel')
          },
        },
        {
          path: "industryNeeds",
          name: "industryNeeds",
          components: {
            panel: () => import('@/components/pages/learn/sub/industryNeeds')
          },
        }
      ]
    },
    {
      path: '/prod',
      name: '',
      components: {
        header: () => import('@/components/pages/products/header'),
        main: () => import('@/components/pages/products/main'),
      },
      children: [
        {
          path: "",
          name: "Learn",
          components: {
            panel: () => import('@/components/pages/products/sub/welcome')
          },
        },
        {
          path: "organization",
          name: "Organization",
          components: {
            panel: () => import('@/components/pages/products/sub/organization')
          },
        },
        {
          path: "riskManagement",
          name: "RiskManagement",
          components: {
            panel: () => import('@/components/pages/products/sub/riskManagement')
          },
        },
        {
          path: "stabilityFeatures",
          name: "Stability Features",
          components: {
            panel: () => import('@/components/pages/products/sub/stabilityFeatures')
          },
        }
      ]
    }
  ]
})
