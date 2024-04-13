/*
 * @Author: nlqs
 * @Date: 2024-04-04 18:19:30
 * @Description: 路由
 */
// createRouter：创建 router 实例对象
// createWebHistory：创建 history 模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/layout/home.vue'
import Category from '@/views/layout/category.vue'
import SubCategory from '@/views/subcategory/index.vue'
import Detail from '@/views/detail/index.vue'
import ShoppingCart from '@/views/shoppingcart/index.vue'
import Order from '@/views/order/index.vue'
import Pay from '@/views/pay/index.vue'

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
        { // 一级分类页
          // 动态路由
          path: '/category/:id',
          component: Category,
        },
        {
          path: '/category/sub/:id',
          component: SubCategory
        },
        {
          path: '/detail/:id',
          component: Detail
        },
        {
          path: '/cart',
          component: ShoppingCart
        },
        {
          path: '/order',
          component: Order
        },
        {
          path: 'pay',
          component: Pay
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
