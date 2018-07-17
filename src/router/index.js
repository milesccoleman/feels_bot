import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Feelsbot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Feelsbot',
      component: HelloWorld
    }
  ]
})
