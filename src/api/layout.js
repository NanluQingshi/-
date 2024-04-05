import httpInstance from '@/utils/request'

// 获取全部分类（包含推荐商品）
export const getCategoryList = () => {
  return httpInstance.get('/home/category/head')
}