// createRouter：创建 router 实例对象
// createWebHistory：创建 history 模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/layout/home.vue'
import Category from '@/views/layout/category.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path 和 component 对应关系
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          // 访问 / 时，path 置空的页面也会默认得到渲染
          path: '',
          component: Home
        },
        {
          path: '/category',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
