<script setup>
defineProps({
  title: { type: String, default: '暂无数据' },
  desc: { type: String, default: '' }
})
</script>

<template>
  <div class="empty">
    <div class="emoji">🗺️</div>
    <h3>{{ title }}</h3>
    <p v-if="desc">{{ desc }}</p>
    <slot />
  </div>
</template>

<style scoped>
.empty {
  text-align: center;
  padding: 60px 20px;
  background: #fff;
  border-radius: 14px;
  border: 1px dashed #e5e7eb;
}
.emoji { font-size: 40px; margin-bottom: 12px; }
.empty h3 { font-size: 17px; margin-bottom: 6px; }
.empty p { color: #6b7280; font-size: 14px; margin-bottom: 16px; }
</style>