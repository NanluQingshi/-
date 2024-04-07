<!--
 * @Author: nlqs
 * @Date: 2024-04-07 18:03:28
 * @Description: 新鲜好物与人气推荐通用模板
-->
<script setup>
// 定义 props，接收父组件传值
defineProps({
  // 主标题
  title: String,
  // 副标题
  subTitle: String
}) 

</script>

<template>
  <div class="home-panel">
    <div class="container">
      <!-- 主标题和副标题 -->
      <div class="title">
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <!-- 主题内容区域 -->
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-panel {
  background-color: #fff;

  .title {
    display: flex;
    padding: 40px 0;
    align-items: flex-end;
  }

  h3 {
    flex: 1;
    margin-left: 6px;
    height: 35px;
    font-size: 32px;
    font-weight: normal;
    line-height: 35px;

    small {
      margin-left: 20px;
      font-size: 16px;
      color: #999;
    }
  }
}
</style>