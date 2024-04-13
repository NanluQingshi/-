/*
 * @Author: nlqs
 * @Date: 2024-04-12 21:34:05
 * @Description: 封装订单相关接口
 */
import httpInstance from "@/utils/request"

/**
 * @description: 生成订单页详情(即填写订单或结算页)
 * @return {*}
 */
export const generateOrderAPI = () => {
  return httpInstance.get('/member/order/pre')
}
