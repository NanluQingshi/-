<script setup>
import LayoutHeader from '@/views/layout/components/LayoutHeader.vue'
import LayoutNav from '@/views/layout/components/LayoutNav.vue'
import LayoutFooter from '@/views/layout/components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

</script>

<template>
  <LayoutHeader></LayoutHeader>
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <!-- 二级路由出口 -->
  <router-view></router-view>
  <LayoutFooter></LayoutFooter>
</template>