<script setup>
defineProps({
  variant: { type: String, default: 'primary' },
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false }
})
</script>

<template>
  <button :type="type" :disabled="disabled" :class="['btn', `btn-${variant}`]">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 9px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
.btn-primary { background: #111827; color: #fff; }
.btn-primary:hover:not(:disabled) { background: #374151; }
.btn-ghost { background: #fff; border-color: #d1d5db; color: #374151; }
.btn-ghost:hover:not(:disabled) { background: #f3f4f6; }
.btn-danger { background: #ef4444; color: #fff; }
.btn-danger:hover:not(:disabled) { background: #dc2626; }
</style>