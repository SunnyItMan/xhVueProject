import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const routes = [
  {
    path: '/',
    component: () => import('../components/index'),
    children: [
      {
        path: 'orgManage',
        meta: {
          name: '客户管理'
        },
        component: () => import('../components/orgManage/orgList.vue')
      },
      {
        path: 'business/proxy',
        meta: {
          name: '代理商账户'
        },
        component: () => import('../components/business/proxy.vue')
      },
      {
        path: 'business/distributor',
        meta: {
          name: '渠道商账户'
        },
        component: () => import('../components/business/distributor.vue')
      },
      {
        path: 'order/order',
        meta: {
          name: '渠道商订单'
        },
        component: () => import('../components/order/order.vue')
      },
      {
        path: 'order/orderDetails',
        component: () => import('../components/order/orderDetails.vue')
      }
    ]
  }
]
const router = new Router({
  mode: 'hash',
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name ? next({name: from.name}) : next('/')
  } else {
    next()
  }
})
export default router