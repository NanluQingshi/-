/*
 * @Author: nlqs
 * @Date: 2024-04-12 11:03:58
 * @Description: 购物车数据
 */

import { defineStore } from "pinia"
import { ref, computed } from "vue"
import { useUserStore } from "./userStore"
import { addCartAPI, delCartAPI, getCartListAPI } from "@/api/cart"

export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  // 登录状态
  const isLogin = computed(() => userStore.userInfo.token)

  // 购物车商品列表
  const cartList = ref([])

  // 购物车商品数量
  const totalCount = computed(() => cartList.value.reduce((sum, item) => sum + item.count, 0))

  // 购物车商品总价
  const totalPrice = computed(() => cartList.value.reduce((sum, item) => sum + item.count*item.price, 0).toFixed(2))

  // 全选状态
  const isAllChecked = computed(() => {
    return cartList.value.length === 0 ? false : cartList.value.every(item => item.selected === true)
  })

  // 选中商品数量
  const selectedCount = computed(() => {
    return cartList.value.filter(item => item.selected === true).reduce((sum, item) => sum + item.count, 0)
  })

  // 选中商品总价
  const selectedPrice = computed(() => {
    return cartList.value.filter(item => item.selected === true).reduce((sum, item) => sum + item.price*item.count, 0).toFixed(2)
  })

  // ===========================
  // 更新购物车列表
  const updateCart = async () => {
    const { result } = await getCartListAPI()
    // console.log(result)
    cartList.value = result
  }

  // 添加购物车
  const addGoods = async (goods) => {
    // 用户已登录
    if (isLogin.value) {
      await addCartAPI(goods.skuId, goods.count)
      updateCart()
    } else {  // 用户未登录
      /* 
        - 判断该商品有没有在购物车中，若已存在，则数量 + 1；若不存在，则直接加入购物车(push)
  
        - 通过传递过来的商品数据，在购物车中寻找 skuId 相等的商品，找到则存在
      */
     console.log('unlogin')
      const item = cartList.value.find(item => item.skuId === goods.skuId)
      if (item) {
        item.count++
      } else {
        cartList.value.push(goods)
      }
    }
  }

  // 删除购物车商品
  const removeGoods = async (skuId) => {
    console.log('cartStore --- removeGoods')
    if (isLogin.value) {
      await delCartAPI([skuId])
      updateCart()
    } else {
      cartList.value = cartList.value.filter(item => item.skuId !== skuId)
    }
  }

   // 清空购物车 - 本地存储
   const clearGoods = () => {
    cartList.value = []
  }

  // 单选功能
  const singleCheck = (selected, skuId) => {
    const goods = cartList.value.find(item => item.skuId === skuId)
    goods.selected = selected
  }

  // 全选功能
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }

  return {
    cartList,
    totalCount,
    totalPrice,
    isAllChecked,
    selectedCount,
    selectedPrice,
    updateCart,
    addGoods,
    removeGoods,
    clearGoods,
    singleCheck,
    allCheck
  }
}, {
  persist: true
})
