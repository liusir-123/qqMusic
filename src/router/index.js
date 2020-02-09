import Vue from 'vue'
import Router from 'vue-router'
import Tuijian from '@/pages/tuijian/Tuijian'
import Geshou from '@/pages/geshou/Geshou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tuijian',
      component: Tuijian
    },
    {
      path: '/Geshou',
      name: 'Geshou',
      component: Geshou
    },
  ]
})
