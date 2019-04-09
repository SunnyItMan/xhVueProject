import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const routes = [
  {
    path: '/',
    component: () => import('../components/login')
  },
  {
    path: '/index',
    component: () => import('../components/index'),
    children: [
      {
        path: '/home',
        meta: {
          name: '总览'
        },
        component: () => import('../components/home/home.vue')
      },
      {
        path: '/orgManage',
        meta: {
          name: '客户管理'
        },
        component: () => import('../components/orgManage/orgList.vue')
      },
      {
        path: '/business/proxy',
        meta: {
          name: '代理商账户'
        },
        component: () => import('../components/business/proxy.vue')
      },
      {
        path: '/business/distributor',
        meta: {
          name: '渠道商账户'
        },
        component: () => import('../components/business/distributor.vue')
      },
      {
        path: '/order/order',
        meta: {
          name: '渠道商订单'
        },
        component: () => import('../components/order/order.vue')
      },
      {
        path: '/order/orderDetails',
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
  if (to.matched.length === 0) { // 如果未匹配到路由
    from.name ? next({name: from.name}) : next('/') // 如果上级也为匹配到路由跳转登录，匹配到则转上级路由
  } else {
    next()
  }
})
export default router
