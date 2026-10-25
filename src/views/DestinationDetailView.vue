<script setup>
import { ref, computed, onMounted, onUnmounted, markRaw } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { destinations } from '../data/destinations'
import DestinationInfo from '../components/destination/DestinationInfo.vue'
import ItineraryTimeline from '../components/destination/ItineraryTimeline.vue'
import EmptyState from '../components/common/EmptyState.vue'
import LoadingSpinner from '../components/common/LoadingSpinner.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import { useTripStore } from '../stores/tripStore'

const route = useRoute()
const router = useRouter()
const tripStore = useTripStore()

const loading = ref(true)
let timer = null

const destination = computed(() =>
  destinations.find(d => d.id === route.params.id)
)

const added = computed(() =>
  destination.value ? tripStore.hasDestination(destination.value.id) : false
)

// 动态组件演示
const activeTab = ref('info')
const currentComponent = computed(() =>
  activeTab.value === 'info' ? markRaw(DestinationInfo) : markRaw(ItineraryTimeline)
)

function addToTrip() {
  if (!destination.value) return
  tripStore.addTrip({
    destinationId: destination.value.id,
    name: destination.value.name,
    image: destination.value.image,
    note: ''
  })
}

// 生命周期演示
onMounted(() => {
  timer = setTimeout(() => {
    loading.value = false
  }, 400)
})
onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<template>
  <LoadingSpinner v-if="loading" />

  <div v-else-if="destination">
    <div class="hero">
      <img :src="destination.image" :alt="destination.name" class="cover" />
      <div class="overlay">
        <BaseBadge color="blue">{{ destination.category }}</BaseBadge>
        <h1>{{ destination.name }}</h1>
      </div>
    </div>

    <div class="tabs">
      <button :class="{ active: activeTab === 'info' }" @click="activeTab = 'info'">
        景点介绍
      </button>
      <button :class="{ active: activeTab === 'itinerary' }" @click="activeTab = 'itinerary'">
        行程推荐
      </button>
    </div>

    <component
      :is="currentComponent"
      :destination="destination"
      :itinerary="destination.itinerary"
    />

    <div class="actions">
      <BaseButton :disabled="added" @click="addToTrip">
        {{ added ? '已加入我的行程' : '加入我的行程' }}
      </BaseButton>
      <BaseButton variant="ghost" @click="router.push('/my-trips')">
        查看我的行程
      </BaseButton>
      <BaseButton variant="ghost" @click="router.back()">返回</BaseButton>
    </div>
  </div>

  <EmptyState v-else title="目的地不存在" desc="请检查链接，或返回目的地列表。">
    <BaseButton variant="ghost" @click="router.push('/destinations')">返回列表</BaseButton>
  </EmptyState>
</template>

<style scoped>
.hero { position: relative; border-radius: 16px; overflow: hidden; margin-bottom: 22px; }
.cover { display: block; width: 100%; height: 280px; object-fit: cover; background: #e5e7eb; }
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.05));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  padding: 22px;
  color: #fff;
}
.overlay h1 { font-size: 30px; }
.tabs { display: flex; gap: 8px; margin-bottom: 18px; }
.tabs button {
  border: 1px solid #e5e7eb;
  background: #fff;
  border-radius: 10px;
  padding: 9px 18px;
  font-size: 14px;
  cursor: pointer;
  font-family: inherit;
}
.tabs button.active { background: #111827; color: #fff; border-color: #111827; }
.actions { display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; }
</style>