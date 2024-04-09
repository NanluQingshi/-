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