/*
 * @Author: nlqs
 * @Date: 2024-04-11 16:02:32
 * @Description: 用户信息数据
 */
import { defineStore } from "pinia"
import { ref } from "vue"
import { loginAPI } from "@/api/user"
import { useCartStore } from "./cartStore"
import { mergeCartAPI } from "@/api/cart"

export const useUserStore = defineStore('user', () => {

  const cartStore = useCartStore()
  // 用户信息
  const userInfo = ref({})

  // 获取用户信息
  const getUserInfo = async (account, password) => {
    const res = await loginAPI(account, password)
    // console.log(res)
    userInfo.value = res.result
    // 合并本地购物车_调用接口
    await mergeCartAPI(cartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    // 获取最新购物车列表
    cartStore.updateCart()
  }

  // 清空用户信息
  const clearUserInfo = () => {
    // 清除用户信息
    userInfo.value = {}
    // 清空购物车
    cartStore.clearGoods()
  }

  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, {
  // 持久化
  persist: true
})