/*
 * @Author: nlqs
 * @Date: 2024-04-11 14:19:16
 * @Description: 用户相关接口
 */
import httpInstance from "@/utils/request"

/**
 * @description: 登录
 * @param {*} userInfo
 * {
 *   account,
 *   password
 * }
 * @return {*}
 */
export const loginAPI = (account, password) => {
  // console.log(account, password)
  return httpInstance.post('/login', {
    account,
    password
  })
}
