/*
 * @Author: nlqs
 * @Date: 2024-04-11 16:02:32
 * @Description: 用户信息数据
 */
import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { loginAPI } from "@/api/user"
import { useCartStore } from "./cartStore"

export const useUserStore = defineStore('user', () => {

  const cartStore = useCartStore()
  // 用户信息
  const userInfo = ref({})
  // 登录状态
  const isLogin = computed(() => userInfo.value.token)

  // 获取用户信息
  const getUserInfo = async (account, password) => {
    const res = await loginAPI(account, password)
    console.log(res)
    userInfo.value = res.result
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
    isLogin,
    getUserInfo,
    clearUserInfo
  }
}, {
  // 持久化
  persist: true
})