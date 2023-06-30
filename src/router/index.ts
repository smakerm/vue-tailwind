import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const asyncRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: 'home'
        },
        component: () => import('@/views/home.vue')
    },
    {
        path: '/home1',
        name: 'home1',
        meta: {
            title: 'home1'
        },
        component: () => import('@/views/home1.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: asyncRoutes,
    scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router