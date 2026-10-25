<script setup>
const props = defineProps({
  modelValue: { type: String, default: '全部' }
})
const emit = defineEmits(['update:modelValue'])

const categories = ['全部', '古镇', '古都', '海岛', '极地']
</script>

<template>
  <div class="filter">
    <button
      v-for="c in categories"
      :key="c"
      :class="['chip', { active: modelValue === c }]"
      @click="emit('update:modelValue', c)"
    >
      {{ c }}
    </button>
  </div>
</template>

<style scoped>
.filter { display: flex; gap: 8px; flex-wrap: wrap; }
.chip {
  border: 1px solid #e5e7eb;
  background: #fff;
  color: #4b5563;
  border-radius: 999px;
  padding: 7px 16px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.chip:hover { border-color: #111827; }
.chip.active { background: #111827; color: #fff; border-color: #111827; }
</style>