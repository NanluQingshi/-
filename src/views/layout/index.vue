<script setup>
import LayoutHeader from '@/views/layout/components/LayoutHeader.vue'
import LayoutNav from '@/views/layout/components/LayoutNav.vue'
import LayoutFooter from '@/views/layout/components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

import { useCategoryStore } from '@/stores/categoryStore'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

// 组件渲染完后获取导航列表数据
onMounted(() => {
  categoryStore.getCategoryList()
}) 

</script>

<template>
  <LayoutHeader></LayoutHeader>
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <!-- 二级路由出口 -->
  <router-view></router-view>
  <LayoutFooter></LayoutFooter>
</template>