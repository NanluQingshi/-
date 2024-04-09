/*
 * @Author: nlqs
 * @Date: 2024-04-08 12:06:23
 * @Description: 分类页面相关接口
 */
import httpInstance from "@/utils/request"

/**
 * @description: 获取二级分类列表
 * @param {*} id - 一级分类 id
 * @return {*}
 */
export const getCategoryAPI = (id) => {
  return httpInstance.get('/category', {
    params: {
      id
    }
  })
}

/**
 * @description: 获取二级分类及其商品数据
 * @param {*} id
 * @return {*}
 */
export const getCategoryFilterAPI = (id) => {
  return httpInstance.get('/category/sub/filter', {
    params: {
      id
    }
  })
}

/**
 * @description: 获取筛选导航数据
 * @param {*} data
 * @return {*}
 */
export const getFieldDataAPI = (data) => {
  return httpInstance.post('/category/goods/temporary', {
    data
  })
}