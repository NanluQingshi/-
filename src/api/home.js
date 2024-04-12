/*
 * @Author: nlqs
 * @Date: 2024-04-07 17:04:30
 * @Description: 封装首页相关接口
 */
import httpInstance from "@/utils/request"

/**
 * @description: 获取轮播图
 * @param {*} distributionSite: 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 * @return {*}
 */
export const getBannerAPI = (distributionSite = 1) => {
  return httpInstance.get('/home/banner', {
    params: {
      distributionSite
    }
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*} limit 需要的数据条数(后台设置默认4)
 * @return {*}
 */
export const getNewAPI = (limit = 4) => {
  return httpInstance.get('/home/new', {
    params: {
      limit
    }
  })
}

/**
 * @description: 获取人气推荐
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance.get('/home/hot')
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}