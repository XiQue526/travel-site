<script setup>
defineProps({
  destination: { type: Object, required: true }
})
</script>

<template>
  <div class="info">
    <p class="summary">{{ destination.summary }}</p>

    <div class="meta">
      <div class="meta-item">
        <span class="label">最佳季节</span>
        <span class="value">{{ destination.bestSeason }}</span>
      </div>
      <div class="meta-item">
        <span class="label">分类</span>
        <span class="value">{{ destination.category }}</span>
      </div>
    </div>

    <div class="tags">
      <BaseBadge v-for="t in destination.tags" :key="t" color="green">{{ t }}</BaseBadge>
    </div>
  </div>
</template>

<style scoped>
.summary { color: #374151; font-size: 15px; line-height: 1.9; margin-bottom: 20px; }
.meta { display: flex; gap: 32px; margin-bottom: 18px; flex-wrap: wrap; }
.meta-item { display: flex; flex-direction: column; gap: 2px; }
.label { font-size: 12px; color: #9ca3af; }
.value { font-size: 14px; font-weight: 600; }
.tags { display: flex; gap: 8px; flex-wrap: wrap; }
</style>