<script setup>
defineProps({
  text: { type: String, default: '加载中...' }
})
</script>

<template>
  <div class="loading">
    <div class="ring"></div>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 60px 0;
  color: #6b7280;
  font-size: 14px;
}
.ring {
  width: 32px;
  height: 32px;
  border: 3px solid #e5e7eb;
  border-top-color: #111827;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>