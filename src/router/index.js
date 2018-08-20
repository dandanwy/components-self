import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import CountUp from '@/components/countup'
import Grid from '@/router/grid.vue'
import mQuery1 from '@/views/mQuery1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/countup',
      name: 'CountUp',
      component: CountUp
    },
    {
        path: '/grid',
        name:'Grid',
        component: Grid
    },
    {
      path: '/mquery1',
      name:'mQuery1',
      component: mQuery1
    },
  ]
})