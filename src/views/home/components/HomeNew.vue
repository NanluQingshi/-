<!--
 * @Author: nlqs
 * @Date: 2024-04-07 16:14:37
 * @Description: 首页新鲜好物模块
-->
<script setup>
import HomePanel from '@/views/home/components/HomePanel.vue'
import { getNewAPI } from '@/api/home'
import { onMounted, ref } from 'vue'

const newGoods = ref([])
const getNewGoods = async (limit) => {
  const { result } = await getNewAPI(limit)
  newGoods.value = result
}

onMounted(() => {
  getNewGoods(4) 
}) 
</script>

<template>
  <div>
    <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
      <!-- 插槽主题内容 -->
      <ul class="goods-list">
        <li v-for="item in newGoods" :key="item.id">
          <RouterLink to="/"></RouterLink>
          <a href="">
            <img :src="item.picture" alt="">
            <p>{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
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
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    background-color: #f0f9f4;
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
      overflow: hidden;
      padding-top: 12px;
      font-size: 22px;
      text-align: center;
      // 文字溢出显示省略号
      text-overflow: ellipsis;
      // 合并空白符，文本不换行 
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>