import Vue from 'vue'
import Router from 'vue-router'
import Tuijian from '@/pages/tuijian/Tuijian'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tuijian',
      component: Tuijian
    },
  ]
})
