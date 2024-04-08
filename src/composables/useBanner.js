/*
 * @Author: nlqs
 * @Date: 2024-04-08 22:53:43
 * @Description: 封装轮播图相关业务代码
 */
import { getBannerAPI } from "@/api/home";
import { onMounted, ref } from "vue";

export function useBanner (distributionSiteId) {
  const bannerList = ref([])

  const getBannerList = async (distributionSite) => {
    const { result } = await getBannerAPI(distributionSite)
    bannerList.value = result
  }

  onMounted(() => getBannerList(distributionSiteId))

  return {
    bannerList
  }
}
