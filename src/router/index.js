import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import CountUp from '@/components/countup'
import Grid from '@/router/grid.vue'
import mQuery1 from '@/views/mQuery1'
import mToolbar1 from '@/views/mToolbar1'
import dragTree from '@/views/drag-tree'
import controller from '@/views/dashboard/Index'

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
    {
      path: '/mtoolbar1',
      name:'mToolbar1',
      component: mToolbar1
    },
    {
      path: '/dragTree',
      name:'dragTree',
      component: dragTree
    },
    {
      path: '/controller',
      name:'controller',
      component: controller
    }
  ]
})
