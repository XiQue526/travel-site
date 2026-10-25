<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="inner">
      <p>足迹旅行 · Vue 3 前端实验项目</p>
      <p class="copy">© {{ year }} Travel Site. 仅用于教学演示。</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid #e5e7eb;
  background: #fff;
  padding: 24px 20px;
}
.inner { max-width: 1100px; margin: 0 auto; text-align: center; color: #6b7280; font-size: 14px; }
.copy { margin-top: 4px; font-size: 13px; color: #9ca3af; }
</style>