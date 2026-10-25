<script setup>
defineProps({
  trip: { type: Object, required: true }
})
const emit = defineEmits(['remove'])
</script>

<template>
  <div class="trip-item">
    <img :src="trip.image" :alt="trip.name" class="thumb" />

    <div class="info">
      <h4>{{ trip.name }}</h4>
      <p class="name">{{ trip.name }}</p>
      <p v-if="trip.note" class="note">{{ trip.note }}</p>
    </div>

    <BaseButton variant="danger" @click="emit('remove', trip.id)">删除</BaseButton>
  </div>
</template>

<style scoped>
.trip-item {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #fff;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}
.thumb { width: 64px; height: 64px; border-radius: 10px; object-fit: cover; background: #e5e7eb; }
.info { flex: 1; min-width: 0; }
.info h4 { font-size: 15px; margin-bottom: 2px; }
.name { font-size: 12px; color: #9ca3af; }
.note { font-size: 13px; color: #4b5563; margin-top: 2px; }
</style>