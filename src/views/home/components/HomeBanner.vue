<!--
 * @Author: nlqs
 * @Date: 2024-04-07 16:13:51
 * @Description: 
-->
<script setup>
import { useBanner } from '@/composables/useBanner'

// 首页轮播图 - 1
const { bannerList } = useBanner(1) 

</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px" motion-blur>
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
.home-banner {
  position: absolute;
  width: 1240px;
  height: 500px;
  top: 0;
  left: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>