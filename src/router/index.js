import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Admin from '@/components/Admin'
import ShopList from '@/components/ShopList'
import ShopDetail from '@/components/ShopDetail'
import NotFroundComponent from '@/components/NotFroundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: '',
          component: ShopList
        },
        {
          path: 'shop-detail',
          component: ShopDetail
        }
      ]
    },
    {
      path: '*',
      component: NotFroundComponent
    }
  ]
})
