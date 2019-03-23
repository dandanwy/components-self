import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import CountUp from '@/components/awesome/countup'
import mQuery1 from '@/views/mQuery1'
import mToolbar1 from '@/views/mToolbar1'
import dragTree from '@/views/drag-tree'
import controller from '@/views/dashboard/Index'
import animate1 from '@/views/animate/list1'
import echarts from '@/views/echarts/demo'
import paper from '@/views/paper'
import InfiniteMenu from '@/views/InfiniteMenu'
import panel1 from '@/views/panel/panel1/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      id: '1',
      path: '/',
      name: '首页',
      component: Index
    },
    {
      id: '2',
      path: 'panel',
      name: '面板',
      childrens: [
        {
          id: '21',
          path: 'panel1',
          name: '面板1',
          component: panel1
        }
      ]
    }
    // {
    //   path: '/countup',
    //   name: 'CountUp',
    //   component: CountUp
    // },
    // {
    //   path: '/mquery1',
    //   name:'mQuery1',
    //   component: mQuery1
    // },
    // {
    //   path: '/mtoolbar1',
    //   name:'mToolbar1',
    //   component: mToolbar1
    // },
    // {
    //   path: '/dragTree',
    //   name:'dragTree',
    //   component: dragTree
    // },
    // {
    //   path: '/controller',
    //   name:'controller',
    //   component: controller
    // },
    // {
    //   path: '/animate1',
    //   name:'animate1',
    //   component: animate1
    // },
    // {
    //   path: '/echarts',
    //   name:'echarts',
    //   component: echarts
    // },
    // {
    //   path: '/paper',
    //   name:'paper',
    //   component: paper
    // },
    // {
    //   path: '/InfiniteMenu',
    //   name:'InfiniteMenu',
    //   component: InfiniteMenu
    // }
  ]
})
