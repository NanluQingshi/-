<!--
 * @Author: nlqs
 * @Date: 2024-04-09 23:27:23
 * @Description: 商品详情页-热门榜单区域
-->
<script setup>
import { getHotGoodsAPI } from '@/api/detail'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const props= defineProps({
  type: Number
})
const limit = ref(3)
const hotList = ref([])
const route = useRoute()
// 热门榜单标题
const TITLEMAP = {
  1: '24小时热榜',
  2: '周热榜'
}

const title = computed(() => TITLEMAP[props.type]) 

const getHotGoods = async () => {
  const { result } = await getHotGoodsAPI(route.params.id, props.type, limit.value)
  hotList.value = result
}

getHotGoods()

</script>


<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink :to="`/detail/${item.id}`" class="goods-item" v-for="item in hotList" :key="item.id">
      <img v-img-lazy="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>