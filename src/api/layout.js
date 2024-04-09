/*
 * @Author: nlqs
 * @Date: 2024-04-05 10:05:56
 * @Description: 封装首页相关接口
 */
import httpInstance from '@/utils/request'

/**
 * @description: 获取全部分类（包含推荐商品）
 * @return {*}
 */
export const getCategoryListAPI = () => {
  return httpInstance.get('/home/category/head')
}

