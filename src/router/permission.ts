import router from '@/router'
// @ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
    easing: 'ease', // 动画方式
    showSpinner: true, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.4, // 更改启动时使用的最小百分比
})

const whiteList = ['/login', '/redirect']

router.beforeEach((to, form, next) => {
    // 这里处理自己的逻辑,比如需要登录以后才能访问其他页面等等
    NProgress.start()
    next()
    NProgress.done()
})