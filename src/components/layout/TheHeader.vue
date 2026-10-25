<script setup>
import { inject, computed } from 'vue'
import { useTripStore } from '../../stores/tripStore'

// inject 演示：接收 App.vue 提供的主题
const siteTheme = inject('siteTheme', 'light')

const tripStore = useTripStore()
const badgeText = computed(() => (tripStore.count > 0 ? tripStore.count : ''))
</script>

<template>
  <header class="header" :class="`theme-${siteTheme}`">
    <div class="inner">
      <RouterLink to="/" class="logo">🧭 足迹旅行</RouterLink>

      <nav class="nav">
        <RouterLink to="/" active-class="active">首页</RouterLink>
        <RouterLink to="/destinations" active-class="active">目的地</RouterLink>
        <RouterLink to="/my-trips" active-class="active">
          我的行程
          <span v-if="badgeText" class="badge">{{ badgeText }}</span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
}
.inner {
  max-width: 1100px;
  margin: 0 auto;
  height: 64px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo { font-size: 20px; font-weight: 700; text-decoration: none; color: #111827; }
.nav { display: flex; gap: 6px; }
.nav a {
  position: relative;
  text-decoration: none;
  color: #6b7280;
  font-size: 14px;
  padding: 8px 14px;
  border-radius: 8px;
  transition: all 0.2s;
}
.nav a:hover { background: #f3f4f6; }
.nav a.active { background: #111827; color: #fff; }
.badge {
  display: inline-block;
  margin-left: 4px;
  min-width: 18px;
  height: 18px;
  line-height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: #ef4444;
  color: #fff;
  font-size: 11px;
  text-align: center;
}
</style>