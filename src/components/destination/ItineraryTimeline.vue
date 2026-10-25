<script setup>
defineProps({
  itinerary: { type: Array, required: true }
})
</script>

<template>
  <ul class="timeline">
    <li v-for="item in itinerary" :key="item.day" class="item">
      <div class="dot">D{{ item.day }}</div>
      <div class="content">
        <h4>{{ item.title }}</h4>
        <p>{{ item.desc }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.timeline { list-style: none; position: relative; padding-left: 8px; }
.timeline::before {
  content: '';
  position: absolute;
  left: 25px;
  top: 10px;
  bottom: 10px;
  width: 2px;
  background: #e5e7eb;
}
.item { display: flex; gap: 16px; position: relative; padding-bottom: 22px; }
.item:last-child { padding-bottom: 0; }
.dot {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #111827;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  z-index: 1;
}
.content h4 { font-size: 15px; margin-bottom: 4px; }
.content p { font-size: 13px; color: #6b7280; }
</style>