<!--
 * @Author: nlqs
 * @Date: 2024-04-04 23:29:27
 * @Description: 
-->
<script setup>
import { getCategoryAPI } from '@/api/category'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const category = ref([])
// setup 中没有 this，因此使用函数来代替 this.$route
const route = useRoute()

const getCategory = async (id) => {
  const { result } = await getCategoryAPI(id)
  // console.log(result)
  category.value = result
  // console.log(route)
}

watch(
  () => route.params.id, 
  (newValue) => {
    getCategory(newValue)
  }
)
  
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