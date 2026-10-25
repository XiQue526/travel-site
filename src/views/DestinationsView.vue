<script setup>
import { ref, computed } from 'vue'
import { destinations } from '../data/destinations'
import SearchBar from '../components/common/SearchBar.vue'
import EmptyState from '../components/common/EmptyState.vue'
import DestinationCard from '../components/destination/DestinationCard.vue'
import DestinationFilter from '../components/destination/DestinationFilter.vue'
import { useTripStore } from '../stores/tripStore'

const keyword = ref('')
const category = ref('全部')
const tripStore = useTripStore()

// computed 演示：自动追踪 keyword / category 变化
const filtered = computed(() => {
  const kw = keyword.value.trim()
  return destinations.filter(d => {
    const matchKw = !kw || d.name.includes(kw) || d.summary.includes(kw)
    const matchCat = category.value === '全部' || d.category === category.value
    return matchKw && matchCat
  })
})

function handleAdd(destination) {
  tripStore.addTrip({
    destinationId: destination.id,
    name: destination.name,
    image: destination.image,
    note: ''
  })
}
</script>

<template>
  <section>
    <h1 class="page-title">目的地</h1>

    <div class="toolbar">
      <SearchBar v-model="keyword" placeholder="搜索目的地名称或简介..." />
      <DestinationFilter v-model="category" />
    </div>

    <p class="hint">共找到 {{ filtered.length }} 个目的地</p>

    <div v-if="filtered.length" class="grid">
      <DestinationCard
        v-for="d in filtered"
        :key="d.id"
        :destination="d"
        :added="tripStore.hasDestination(d.id)"
        @add="handleAdd"
      />
    </div>

    <EmptyState
      v-else
      title="没有匹配的目的地"
      desc="试试换一个关键词，或者切换分类。"
    >
      <BaseButton variant="ghost" @click="keyword = ''; category = '全部'">
        重置筛选
      </BaseButton>
    </EmptyState>
  </section>
</template>

<style scoped>
.toolbar { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 12px; }
.hint { font-size: 13px; color: #9ca3af; margin-bottom: 20px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
</style>