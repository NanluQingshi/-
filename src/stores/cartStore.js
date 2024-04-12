/*
 * @Author: nlqs
 * @Date: 2024-04-12 11:03:58
 * @Description: 购物车数据
 */

import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useCartStore = defineStore('cart', () => {
  // 购物车商品列表
  const cartList = ref([])

  // 购物车商品数量
  const totalCount = computed(() => cartList.value.reduce((sum, item) => sum + item.count, 0))

  // 购物车商品总价
  const totalPrice = computed(() => cartList.value.reduce((sum, item) => sum + item.count*item.price, 0).toFixed(2))

  // 添加购物车
  const addGoods = (goods) => {
    /* 
      - 判断该商品有没有在购物车中，若已存在，则数量 + 1；若不存在，则直接加入购物车(push)

      - 通过传递过来的商品数据，在购物车中寻找 skuId 相等的商品，找到则存在
    */
   const item = cartList.value.find(item => item.skuId === goods.skuId)
   if (item) {
    item.count++
   } else {
    cartList.value.push(goods)
   }
  }

  // 删除购物车
  const removeGoods = (skuId) => {
    cartList.value = cartList.value.filter(item => item.skuId !== skuId)
  }

  return {
    cartList,
    totalCount,
    totalPrice,
    addGoods,
    removeGoods
  }
}, {
  persist: true
})
