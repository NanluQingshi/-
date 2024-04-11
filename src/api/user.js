/*
 * @Author: nlqs
 * @Date: 2024-04-11 14:19:16
 * @Description: 用户相关接口
 */
import httpInstance from "@/utils/request"

/**
 * @description: 用户登录
 * @param {String} account - 账号
 * @param {String} password - 密码
 * @return {*}
 */
export const loginAPI = (account, password) => {
  // console.log(account, password)
  return httpInstance.post('/login', {
    account,
    password
  })
}
