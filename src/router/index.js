import Vue from 'vue'
import Router from 'vue-router'
import Feelsbot from '@/components/Feelsbot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Feelsbot',
      component: Feelsbot
    }
  ]
})
