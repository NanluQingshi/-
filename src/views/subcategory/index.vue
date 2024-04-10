<!--
 * @Author: nlqs
 * @Date: 2024-04-09 00:23:00
 * @Description: 二级分类页面组件
-->
<script setup>
import { getCategoryFilterAPI, getFieldDataAPI } from '@/api/category'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// 面包屑导航
const data = ref({}) 
// 商品列表
const goodsList = ref([])
// 分类筛选请求参数
const queryData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
// 数据是否全部加载
const disabled = ref(false)

// ====== 获取面包屑导航数据
const getCategoryFilter = async () => {
  const { result } = await getCategoryFilterAPI(route.params.id)
  // console.log(result)
  data.value = result
} 
// ====== 获取分类筛选数据
const getFieldData = async () => {
  const { result } = await getFieldDataAPI(queryData.value)
  // console.log(result)
  // 商品列表数据
  goodsList.value = result.items
}
// ====== 分类筛选切换
const handleTabChange = () => {
  queryData.value.page = 1
  // console.log(queryData.value.sortField)
  getFieldData()
}

// ====== 无限加载
const load = async () => {
  queryData.value.page++
  const { result }  = await getFieldDataAPI(queryData.value)
  goodsList.value = [...goodsList.value, ...result.items]
  // 加载完毕，停止监听
  if (result.items.length === 0) {
    disabled.value = true
  }
  // console.log(result)
}

onMounted(() => { 
  getCategoryFilter()
  getFieldData()
}) 
</script>

<template>
  <div class="container ">
    <!-- 面包屑导航 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${data.parentId}` }">
          {{ data.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ data.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 分类筛选 -->
    <div class="sub-container">
      <el-tabs v-model="queryData.sortField" @tab-change="handleTabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
         <!-- 商品列表-->
         <GoodsItem v-for="goods in goodsList" :key="goods.id" :goods="goods"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>