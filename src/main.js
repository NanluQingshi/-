/*
 * @Author: nlqs
 * @Date: 2024-04-04 18:19:30
 * @Description: 
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'
// 引入懒加载指令插件
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from '@/components'
// pinia 持久化
import persist from 'pinia-plugin-persistedstate'

const app = createApp(App)


app.use(createPinia().use(persist))
app.use(router)
app.use(ElementPlus)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
