<script setup>
// props 校验 + emits 演示
const props = defineProps({
  destination: { type: Object, required: true },
  added: { type: Boolean, default: false }
})
const emit = defineEmits(['add'])

function handleAdd() {
  emit('add', props.destination)
}
</script>

<template>
  <article class="card">
    <div class="cover-wrap">
      <img :src="destination.image" :alt="destination.name" class="cover" />
      <BaseBadge class="cat" color="blue">{{ destination.category }}</BaseBadge>
    </div>

    <div class="body">
      <h3>{{ destination.name }}</h3>
      <p class="summary">{{ destination.summary }}</p>

      <div class="actions">
        <RouterLink :to="`/destinations/${destination.id}`" class="link">
          查看详情 →
        </RouterLink>
        <BaseButton :disabled="added" @click="handleAdd">
          {{ added ? '已加入' : '加入行程' }}
        </BaseButton>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}
.card:hover { transform: translateY(-3px); box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1); }
.cover-wrap { position: relative; }
.cover { display: block; width: 100%; height: 180px; object-fit: cover; background: #e5e7eb; }
.cat { position: absolute; top: 12px; left: 12px; }
.body { padding: 16px; display: flex; flex-direction: column; flex: 1; }
.body h3 { font-size: 17px; margin-bottom: 6px; }
.summary { color: #6b7280; font-size: 13px; flex: 1; margin-bottom: 16px; }
.actions { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.link { font-size: 13px; color: #2563eb; text-decoration: none; }
.link:hover { text-decoration: underline; }
</style>