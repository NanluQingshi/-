<script setup>
import { getBannerAPI } from '@/api/home'
import { onMounted, ref } from 'vue'


const bannerList = ref([]) 
const getBannerList = async () => {
  const { result } = await getBannerAPI()
  bannerList.value = result
}

onMounted(() => {
  getBannerList()
}) 

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