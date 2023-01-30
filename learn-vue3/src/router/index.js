import {createRouter, createWebHashHistory} from 'vue-router'



const routes = [
  {
    name: 'create',
    component: () => import("../view/create.vue"),
    path: '/create'
  },
  {
    name: 'list',
    component: () => import("../view/list.vue"),
    path: '/list'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})


export default router