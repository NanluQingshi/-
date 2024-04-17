/*
 * @Author: nlqs
 * @Date: 2024-04-04 18:19:30
 * @Description: 路由
 */
// createRouter：创建 router 实例对象
// createWebHistory：创建 history 模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/layout/home.vue'
import Category from '@/views/layout/category.vue'

// 路由懒加载
const Login = () => import('@/views/login/index.vue') 
const SubCategory = () => import('@/views/subcategory/index.vue') 
const Detail = () => import('@/views/detail/index.vue') 
const ShoppingCart = () => import('@/views/shoppingcart/index.vue') 
const Order = () => import('@/views/order/index.vue') 
const Pay = () => import('@/views/pay/index.vue') 
const PayBack = () => import('@/views/pay/payback.vue') 
const User = () => import('@/views/user/index.vue') 
const UserInfo = () => import('@/views/user/components/UserInfo.vue') 
const UserOrder = () => import('@/views/user/components/UserOrder.vue') 

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
        },
        {
          path: 'paycallback',  // 注意路径，必须是 paycallback
          component: PayBack
        },
        {
          path: 'user',
          component: User,
          // 三级路由
          children: [
            {
              path: '',
              component: UserInfo
            },
            {
              path: 'order',
              component: UserOrder
            }
          ]
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
