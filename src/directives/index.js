/*
 * @Author: nlqs
 * @Date: 2024-04-07 20:47:55
 * @Description: 封装全局指令
 */
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install (app) {
    // 懒加载指令逻辑
    app.directive('img-lazy', {
      /**
       * @description: 在绑定元素的父组件及他自己的所有子节点都挂载完成后调用
       * @param {*} el：指令绑定到的元素
       * @param {*} binding：一个对象，包含以下属性 
       * {  
       *  value：传递给指令的值
       *  oldValue：之前的值，仅在 beforeUpdate 和 updated 中可用
       *  arg：传递给指令的参数（如果有）
       *  modifiers：包含修饰符的对象
       *  instance：使用该指令的组件实例
       *  dir：指令的定义对象
       * }
       * @return {*}
       */
      mounted (el, binding) {
        // ======== console.log(el)
        // stop：停止观察是否进入或移出可视区域的行为
        const { stop } = useIntersectionObserver(
          el,
          // isIntersecting：是否进入视口区域
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              // ======== console.log(el)
              // 第一次进入可视区域后，请求图片，停止观察
              el.src = binding.value
              stop()
            }
          }
        )
      }
    })
  }
} 
