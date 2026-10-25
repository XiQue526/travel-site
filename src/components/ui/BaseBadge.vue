<script setup>
defineProps({
  color: { type: String, default: 'gray' }
})
</script>

<template>
  <span :class="['badge', `badge-${color}`]">
    <slot />
  </span>
</template>

<style scoped>
.badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 12px;
  white-space: nowrap;
}
.badge-gray { background: #f3f4f6; color: #4b5563; }
.badge-blue { background: #dbeafe; color: #1d4ed8; }
.badge-green { background: #d1fae5; color: #047857; }
</style>