import httpInstance from "@/utils/request"

/**
 * @description: 获取轮播图
 * @param {*} distributionSite: 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 * @return {*}
 */
export const getBannerAPI = (distributionSite) => {
  return httpInstance.get('/home/banner', {
    params: {
      distributionSite
    }
  })
}