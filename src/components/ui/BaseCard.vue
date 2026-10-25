<script setup>
// 具名插槽 + 默认插槽演示
defineProps({
  title: { type: String, default: '' }
})
</script>

<template>
  <div class="card">
    <header v-if="title || $slots.header" class="card-head">
      <slot name="header">{{ title }}</slot>
    </header>

    <div class="card-body">
      <slot />
    </div>

    <footer v-if="$slots.footer" class="card-foot">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped>
.card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}
.card-head {
  padding: 16px 18px 0;
  font-weight: 600;
  font-size: 16px;
}
.card-body { padding: 14px 18px 18px; }
.card-foot {
  padding: 12px 18px;
  border-top: 1px solid #f3f4f6;
  background: #fafafa;
}
</style>