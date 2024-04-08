/*
 * @Author: nlqs
 * @Date: 2024-04-08 23:39:08
 * @Description: 分类页-获取分类数据组合函数
 */

import { getCategoryAPI } from "@/api/category";
import { onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export function useCategory () {
  const category = ref([])
  // setup 中没有 this，因此使用函数来代替 this.$route
  const route = useRoute()

  const getCategory = async (id = route.params.id) => {
    const { result } = await getCategoryAPI(id)
    category.value = result
  }

  // 组件实例渲染完后执行函数
  onMounted(() => getCategory())

  // 路由参数变化前执行函数，回调
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })

  return {
    category
  }
}