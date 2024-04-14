/*
 * @Author: nlqs
 * @Date: 2024-04-11 14:19:16
 * @Description: 封装用户相关接口
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

/**
 * @description: 获取猜你喜欢列表
 * @param {Number} limit - 每页条数
 * @return {*}
 */
export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance.get('/goods/relevant', {
    params: {
      limit
    }
  })
}

/**
 * @description: 获取用户订单
 * @param {Object} params
 * params: {
    orderState:0,
    page:1,
    pageSize:2
  }
 * @return {*}
 */
export const getUserOrderAPI = (params) => {
  return httpInstance.get('/member/order', params)
}