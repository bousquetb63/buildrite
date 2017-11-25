import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Browse from '@/components/Guides'
import CreateGuide from '@/components/CreateGuide'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/ ',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/browse',
      name: 'browse',
      component: Browse
    },
    {
      path: '/guides/create',
      name: 'guides-create',
      component: CreateGuide
    }
  ]
})
