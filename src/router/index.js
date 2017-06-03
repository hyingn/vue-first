import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Detail from '@/pages/detail'
import list from '@/components/list'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
