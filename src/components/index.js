/*
 * @Author: nlqs
 * @Date: 2024-04-10 19:30:03
 * @Description: 将 components 下的所有组件通过插件的方式进行全局化注册
 */

import GoodsItem from "./GoodsItem.vue"
import Sku from "./Sku.vue"

export const componentPlugin = {
  install (app) {
    app
      .component('GoodsItem', GoodsItem)
      .component('Sku', Sku)
  }
}
