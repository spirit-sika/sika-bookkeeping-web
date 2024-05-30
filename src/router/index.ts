import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/manage',
      name: 'Layout',
      component: () => import('@/views/Layout/Layout.vue'),
      redirect: '/manage/statistics',
      children: [
        {
          path: 'statistics',
          component: () => import('@/views/Statistics.vue'),
          name: 'Statistics',
          meta: {
            title: '数据统计',
            icon: 'TrendCharts'
          }
        },
        {
          path: 'user',
          component: () => import('@/views/UserManage.vue'),
          name: 'UserManage',
          meta: {
            title: '用户管理',
            icon: 'Avatar'
          }
        },
        {
          path: 'system',
          component: () => import('@/views/SystemManage.vue'),
          name: 'SystemManage',
          meta: {
            title: '系统管理',
            icon: 'Avatar'
          }
        },
        {
          path: 'ledger',
          component: () => import('@/views/LedgerManage.vue'),
          name: 'LedgerManage',
          meta: {
            title: '账本管理',
            icon: 'Avatar'
          }
        }
      ]
    },
    {
      path:'/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path:'/test',
      name:'test',
      component: () => import('@/views/Test.vue')
    },
    /* 错误页面 */
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/ErrorPage.vue'),
    }
  ]
})

export default router
