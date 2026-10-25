<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: '搜索...' }
})
const emit = defineEmits(['update:modelValue'])

// 模板引用演示
const inputRef = ref(null)

function onInput(e) {
  emit('update:modelValue', e.target.value)
}

function clear() {
  emit('update:modelValue', '')
  inputRef.value?.focus()
}

// 暴露给父组件调用
defineExpose({ focus: () => inputRef.value?.focus() })
</script>

<template>
  <div class="search">
    <span class="icon">🔍</span>
    <input
      ref="inputRef"
      :value="modelValue"
      :placeholder="placeholder"
      @input="onInput"
    />
    <button v-if="modelValue" class="clear" @click="clear">✕</button>
  </div>
</template>

<style scoped>
.search {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 0 12px;
  height: 42px;
  flex: 1;
  min-width: 200px;
}
.search input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  font-family: inherit;
  background: transparent;
}
.icon { font-size: 14px; opacity: 0.6; }
.clear { border: none; background: none; cursor: pointer; color: #9ca3af; }
</style>