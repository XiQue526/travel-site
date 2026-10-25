<script setup>
import { ref, provide, onMounted } from 'vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

// provide / inject 演示：向下层提供全局主题
const siteTheme = ref('light')
provide('siteTheme', siteTheme)

// 生命周期演示
onMounted(() => {
  console.log('[App] 应用已挂载，欢迎来到足迹旅行')
})
</script>

<template>
  <TheHeader />
  <main class="main">
    <RouterView />
  </main>
  <TheFooter />
</template>