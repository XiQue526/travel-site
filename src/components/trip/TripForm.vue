<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['submit'])

const tripName = ref('')
const note = ref('')
const error = ref('')

// watch 侦听器演示
watch(tripName, (val) => {
  error.value = val.length > 20 ? '名称不要超过 20 个字' : ''
})

function handleSubmit() {
  if (!tripName.value.trim()) {
    error.value = '请输入行程名称'
    return
  }
  if (error.value) return

  emit('submit', {
    name: tripName.value.trim(),
    note: note.value.trim()
  })

  tripName.value = ''
  note.value = ''
}
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="field">
      <label>行程名称</label>
      <input v-model="tripName" type="text" placeholder="例如：五一丽江行" />
      <p v-if="error" class="error">{{ error }}</p>
    </div>

    <div class="field">
      <label>备注（可选）</label>
      <textarea v-model="note" rows="2" placeholder="写点出发前的小提醒"></textarea>
    </div>

    <BaseButton type="submit">保存行程</BaseButton>
  </form>
</template>

<style scoped>
.form { display: flex; flex-direction: column; gap: 14px; }
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-size: 13px; color: #4b5563; }
.field input,
.field textarea {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  resize: vertical;
}
.field input:focus,
.field textarea:focus { border-color: #111827; }
.error { color: #ef4444; font-size: 12px; }
</style>