<script setup>
import { getCategoryList } from "@/api/layout"
import { onMounted, ref } from "vue"

const categoryList = ref([])
onMounted(async () => {
  const { result } = await getCategoryList()
  categoryList.value = result
}) 
</script>

<template>
  <div>
    <ul class="app-header-nav">
        <li
          class="home"
          v-for="item in categoryList"
          :key="item.id"
        >
          <RouterLink to="/">{{ item.name }}</RouterLink>
        </li>
      </ul>
  </div>
</template>

<style lang="scss" scoped>
.app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
      margin-right: 40px;
      width: 38px;
      text-align: center;

      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;

        &:hover {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }

      .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }
</style>
