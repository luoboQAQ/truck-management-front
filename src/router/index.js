import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView'
import OwnerLayout from '@/layouts/OwnerLayout'
import CarerLayout from '@/layouts/CarerLayout'

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
      },
      {
        path: '/owner/entryreport',
        name: 'entryreport',
        props: true,
        component: () => import('@/views/owner/EntryReportView')
      }
    ]
  }, {
    path: '/',
    name: 'login',
    component: LoginView
  }, {
    path: '/carer',
    name: 'CarerLayout',
    redirect: '/carer/findgood',
    component: CarerLayout,
    children: [
      {
        path: '/carer/findgood',
        name: 'findgood',
        component: () => import('@/views/carer/FindGoodView')
      },
      {
        path: '/carer/receiveorder',
        name: 'receiveorder',
        props: true,
        component: () => import('@/views/carer/ReceiveOrderView')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
