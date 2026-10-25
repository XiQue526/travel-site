<script setup>
// Teleport + 具名插槽 + emits 演示
defineProps({
  show: { type: Boolean, default: false },
  title: { type: String, default: '提示' }
})
const emit = defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <div v-if="show" class="mask" @click.self="emit('close')">
      <div class="box">
        <header class="head">
          <h3>{{ title }}</h3>
          <button class="x" @click="emit('close')">✕</button>
        </header>

        <div class="body">
          <slot />
        </div>

        <footer class="foot">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.mask {
  position: fixed;
  inset: 0;
  background: rgba(17, 24, 39, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 20px;
}
.box {
  width: 100%;
  max-width: 420px;
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  border-bottom: 1px solid #f3f4f6;
}
.head h3 { font-size: 16px; }
.x { border: none; background: none; font-size: 16px; cursor: pointer; color: #9ca3af; }
.body { padding: 18px; color: #4b5563; font-size: 14px; }
.foot {
  padding: 14px 18px;
  border-top: 1px solid #f3f4f6;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  background: #fafafa;
}
</style>