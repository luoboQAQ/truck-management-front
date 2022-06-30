import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView'
import OwnerLayout from '@/layouts/OwnerLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/owner',
    name: 'OwnerLayout',
    redirect: '/owner/findcar',
    component: OwnerLayout,
    children: [
      {
        path: '/owner/findcar',
        name: 'findcar',
        component: () => import('@/views/owner/FindCarView')
      },
      {
        path: '/owner/soldorders',
        name: 'soldorders',
        component: () => import('@/views/owner/SoldOrdersView')
      }
    ]
  }, {
    path: '/',
    name: 'login',
    component: LoginView
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
