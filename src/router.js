import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Quotations from './views/quotations/Quotations.vue'
import Companies from './views/companies/Companies.vue'
import Contracts from './views/Contracts.vue'
import Histories from './views/Histories.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/quotations',
      name: 'quotations',
      component: Quotations
    },
    {
      path: '/companies',
      name: 'companies',
      component: Companies
    },
    {
      path: '/contracts',
      name: 'contracts',
      component: Contracts
    },
    {
      path: '/histories',
      name: 'histories',
      component: Histories
    },
    
  ]
})
