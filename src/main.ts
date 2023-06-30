// tailwind 需要在 App 后引入，否则可能引起样式冲突

import './tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'

import 'animate.css'
import router from '@/router';
import '@/router/permission'

import { createPinia } from 'pinia';
import { registerStore } from '@/pinia';

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/theme-chalk/dark/css-vars.css'



const app = createApp(App)
app.use(ElementPlus, {
    size: 'small',
    zIndex: 3000 ,
    locale: zhCn,
}).use(router)

app.use(createPinia())
// 这里是进行一个注册，不然的话页面上是拿不到值的
registerStore()
app.mount('#app')
