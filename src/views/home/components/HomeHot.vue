<!--
 * @Author: nlqs
 * @Date: 2024-04-07 16:14:37
 * @Description: 首页人气推荐模块
-->
<script setup>
import HomePanel from '@/views/home/components/HomePanel.vue'
import { getHotAPI } from '@/api/home'
import { onMounted, ref } from 'vue'

const hotGoods = ref([])
const getHot = async () => {
  const { result } = await getHotAPI()
  hotGoods.value = result
}

onMounted(() => getHot())
 
</script>

<template>
  <div>
    <HomePanel title="人气推荐" subTitle="人气爆款 不容错过">
      <!-- 插槽主题内容 -->
      <ul class="goods-list">
        <li v-for="item in hotGoods" :key="item.id">
          <RouterLink to="/"></RouterLink>
          <a href="">
            <img :src="item.picture" alt="">
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </a>
        </li>
      </ul>
    </HomePanel>
  </div>
</template>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      padding-top: 12px;
      font-size: 22px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>