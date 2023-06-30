<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TestElement from './components/TestElement.vue'
</script>

<template>

<router-view #default="{route, Component}">
    <transition leave-from-class="ts-web-fade--leave-to" enter-active-class="animate__animated animate__bounceInRight">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style scoped>
</style>
