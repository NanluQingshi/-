/*
 * @Author: nlqs
 * @Date: 2024-04-09 16:38:35
 * @Description: 封装商品详情相关接口
 */
import httpInstance from "@/utils/request"

/**
 * @description: 
 * @param {*} goodsId
 * @return {*}
 */
export const getGoodsDetailsAPI = (goodsId) => {
  return httpInstance.get('/goods', {
    params: {
      id: goodsId
    }
  })
}

/**
 * @description: 获取热榜商品
 * @param {Number} id - 商品 id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 * @return {*}
 */
export const getHotGoodsAPI  = (id, type, limit = 3) => {
  return httpInstance.get('/goods/hot', {
    params: {
      id, 
      type,
      limit
    }
  })
}