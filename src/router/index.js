import Vue from 'vue'
import Router from 'vue-router'
import Skills from '@/components/Skills.vue'
import Car from '@/components/Car.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    }
  ]
})
