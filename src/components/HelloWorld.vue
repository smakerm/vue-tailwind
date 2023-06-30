<script setup lang="ts">
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const count = ref(0)


const isDark = useDark()
const toggleDark = useToggle(isDark)

const color1 = ref('#409EFF')
const color2 = ref('#409EFF')


</script>

<template>
  <div class="bg-gray-100 dark:bg-gray-500 rounded-xl p-8">Hello World</div>
  <span @click.stop="toggleDark()">暗黑模式</span>
  <el-switch size="small" v-model="isDark"/>

  <div class="demo-color-block">
    <span class="demonstration">With default value</span>
    <el-color-picker v-model="color1" />
  </div>
  <div class="demo-color-block">
    <span class="demonstration">With no default value</span>
    <el-color-picker v-model="color2" />
  </div>
  <div class="bg-gray-100 rounded-xl p-8">Hello World</div>
</template>


<style scoped>
.demo-color-block {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.demo-color-block .demonstration {
  margin-right: 16px;
}
</style>
