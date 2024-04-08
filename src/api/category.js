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