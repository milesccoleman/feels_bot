import Vue from 'vue'
import Router from 'vue-router'
import Feelsbot from '@/components/Feelsbot'
import Video from '@/components/Video'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Feelsbot',
      component: Feelsbot
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video
    }
  ]
})
