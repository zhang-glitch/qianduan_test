import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    component: () => import('../views/home.vue'),
    path: '/'
  },
  {
    component: () => import('../views/about.vue'),
    path: '/about',
    props: {
      name: 'zh'
    }
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
