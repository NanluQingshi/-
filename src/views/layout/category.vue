<!--
 * @Author: nlqs
 * @Date: 2024-04-04 23:29:27
 * @Description: 分类页面
-->
<script setup>
import { useCategory } from '@/views/category/composables/useCategory'
import { useBanner } from '@/composables/useBanner'

const { category } = useCategory()
// 分类页面轮播图 - 2
const { bannerList } = useBanner(2) 

</script>

<template>
  <div class="top-category">
    <div class="container m-top-20"> 
      <!-- 面包屑导航 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ category.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 轮播图 -->
      <div class="home-banner">
        <el-carousel height="500px" motion-blur>
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 分类数据 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="item in category.children" :key="item.id">
            <RouterLink to="/">
              <img v-img-lazy="item.picture" />
              <p>{{ item.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="item in category.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodsItem v-for="g in item.goods" :goods="g" :key="g.id" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.top-category {
  .bread-container {
    padding: 25px 0;
  }

  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }
}
</style>