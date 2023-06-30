import { defineStore } from 'pinia'

export interface IViewsState {
    count?: number
    title?: string
}

// 创建一个pinia, defineStore接受两个参数，第一个是id(唯一的)。参数二是配置项
export const viewsModule = defineStore('VIEWS',{
    state(): IViewsState {
        return {
            count: 1,
            title: 'Etc.End'
        }
    },
    //可以操作异步 和 同步提交state
    actions:{
        // 这里因为我的count定义的类型不是必有参数,所有它会存在空的情况.
        // 后面只需要加个!让编译器知道它不会未定义或不会为null
        // 也可以把上面的count?: number更改为count: number,下面就不用加!了
        incremental() {
            this.count!++
        },
        getCount() {
            return this.count
        }
    },
    // 类似于computed 可以帮我们去修饰我们的值
    getters:{
        newCount ():number | string {
            return this.count = 0
        },
        newTitle ():string {
            return `$-${this.title}`
        }
    },
})