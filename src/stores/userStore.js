/*
 * @Author: nlqs
 * @Date: 2024-04-11 16:02:32
 * @Description: 用户信息数据
 */
import { defineStore } from "pinia"
import { ref } from "vue"
import { loginAPI } from "@/api/user"

export const useUserStore = defineStore('user', () => {
  // 用户信息
  const userInfo = ref({})
  // 获取用户信息
  const getUserInfo = async (account, password) => {
    const res = await loginAPI(account, password)
    console.log(res)
    userInfo.value = res.result
  }

  // 清空用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
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