/*
 * @Author: nlqs
 * @Date: 2024-04-14 10:58:46
 * @Description: 封装倒计时逻辑函数
 */

import dayjs from "dayjs";
import { ref, computed, onUnmounted } from "vue";

export function useCountDown () {
  // 1.响应式数据
  let timer = null
  let time = ref(0)
  // 2.格式化为 xx分xx秒
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  // 3.倒计时函数
  const start = (totalSeconds) => {
    // 编写倒计时逻辑：每隔 1s 就减一
    time.value = totalSeconds
    timer = setInterval(() => {
      time.value--
    }, 1000)
  }
  // 4.组件销毁时清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  // 5.返回
  return {
    formatTime,
    start
  }
}

