/*
 * @Author: nlqs
 * @Date: 2024-04-12 16:33:10
 * @Description: 封装购物车相关接口
 */
import httpInstance from "@/utils/request"

/**
 * @description: 获取购物车列表
 * @return {*}
 */
export const  getCartListAPI = () => {
  return httpInstance.get('/member/cart')
}

/**
 * @description: 加入购物车
 * @param {String} skuId - 商品 sku 的 id
 * @param {Number} count - 商品数量
 * @return {*}
 */
export const addCartAPI = (skuId, count) => {
  return httpInstance.post('/member/cart', {
    skuId,
    count
  })
}

/**
 * @description: 删除购物车商品
 * @param {Array} skuIds - 商品sku的id集合
 * @return {*}
 */
export const delCartAPI = (skuIds) => {
  // data 中的属性名和值名相同时，才能省略 data
  return httpInstance.delete('/member/cart', {
    data: {
      ids: skuIds
    }
  })
}

/**
 * @description: 合并本地购物车到服务器
 * @param data: {
 *   {String} skuId
 *   {Boolean} selected
 *   {Number} count
 * }
 * @return {*}
 */
export const mergeCartAPI = (data) => {
  return httpInstance.post('/member/cart/merge', data)
}