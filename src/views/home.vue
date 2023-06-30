<template>
    <div style="background: rgb(217, 217, 217);height: 100vh;width: 100%;padding-top: 100px;">
      <div style="text-align: center;margin-top: 50px;">
        <el-button type="primary" @click="goHome">去home1</el-button>
      </div>
      <div style="text-align: center;margin-top: 50px;">
        <el-button type="primary" @click="directChange">直接修改count的值</el-button>
        <el-button type="primary" @click="batchChange">批量修改pinia的值</el-button>
        <el-button type="primary" @click="callAction">actions修改pinia的值</el-button>
      </div>
      <div style="text-align: center;margin-top: 50px;color: red;font-size: 22px;">
        <div>{{ count }}</div>
        <div>{{ title }}</div>
      </div>
    </div>
  </template>

  <script lang="ts">
  import {useRouter} from "vue-router";
  import { storeToRefs } from 'pinia';
  import appStore from '@/pinia';

  export default defineComponent({
    setup() {

      const router = useRouter();

      // 这里是个小知识点,因为pinia不允许直接解构,比如下面
      // const { count, title } = appStore.viewsModule
      // 这样写的话会失去响应式,所以得使用storeToRefs
      const { count, title } = storeToRefs(appStore.viewsModule)

      // 直接修改views里面的count值
      const directChange = () => {
        appStore.viewsModule.count!++
      }

      // 批量修改views的值
      const batchChange = () => {
        appStore.viewsModule.$patch({
          count: 100,
          title: 'Etc-End'
        })
        // 还可以这样写,和上面一样的效果
        // appStore.viewsModule.$state = {
        //   count: 100,
        //   title: 'Etc-End'
        // }
      }

      const callAction = () => {
        appStore.viewsModule.incremental()
      }

      const goHome = () => {
        router.push({
          path: '/home1'
        })
      }

      return {
        directChange,
        batchChange,
        callAction,
        goHome,
        count,
        title
      }
    }
  })
  </script>
