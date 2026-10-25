<script setup>
import { ref, computed } from 'vue'
import { useTripStore } from '../stores/tripStore'
import TripForm from '../components/trip/TripForm.vue'
import TripItem from '../components/trip/TripItem.vue'
import BaseCard from '../components/ui/BaseCard.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import BaseModal from '../components/ui/BaseModal.vue'
import EmptyState from '../components/common/EmptyState.vue'

const tripStore = useTripStore()

const showConfirm = ref(false)
const pendingId = ref(null)

const total = computed(() => tripStore.count)

function handleSubmit(payload) {
  tripStore.addTrip({
    destinationId: `custom-${Date.now()}`,
    name: payload.name,
    image: 'https://picsum.photos/seed/custom-trip/200/200',
    note: payload.note
  })
}

function askRemove(id) {
  pendingId.value = id
  showConfirm.value = true
}

function confirmRemove() {
  if (pendingId.value !== null) {
    tripStore.removeTrip(pendingId.value)
  }
  showConfirm.value = false
  pendingId.value = null
}

function handleClearAll() {
  tripStore.clearAll()
}
</script>

<template>
  <section>
    <div class="head-row">
      <h1 class="page-title">我的行程</h1>
      <span class="count">共 {{ total }} 条</span>
    </div>

    <div class="layout">
      <BaseCard title="新建行程">
        <TripForm @submit="handleSubmit" />
      </BaseCard>

      <div class="list-col">
        <div v-if="tripStore.trips.length" class="list">
          <TripItem
            v-for="trip in tripStore.trips"
            :key="trip.id"
            :trip="trip"
            @remove="askRemove"
          />
          <div class="list-foot">
            <BaseButton variant="ghost" @click="handleClearAll">清空全部</BaseButton>
          </div>
        </div>

        <EmptyState
          v-else
          title="行程还是空的"
          desc="去目的地页面挑选几个想去的地方吧。"
        >
          <RouterLink to="/destinations">
            <BaseButton>去挑目的地</BaseButton>
          </RouterLink>
        </EmptyState>
      </div>
    </div>

    <BaseModal :show="showConfirm" title="确认删除" @close="showConfirm = false">
      确定要从行程中删除这一条吗？
      <template #footer>
        <BaseButton variant="ghost" @click="showConfirm = false">取消</BaseButton>
        <BaseButton variant="danger" @click="confirmRemove">删除</BaseButton>
      </template>
    </BaseModal>
  </section>
</template>

<style scoped>
.head-row { display: flex; align-items: baseline; gap: 12px; margin-bottom: 20px; }
.head-row .page-title { margin-bottom: 0; }
.count { font-size: 13px; color: #9ca3af; }
.layout { display: grid; grid-template-columns: 320px 1fr; gap: 22px; align-items: start; }
.list-col { display: flex; flex-direction: column; gap: 12px; }
.list { display: flex; flex-direction: column; gap: 12px; }
.list-foot { display: flex; justify-content: flex-end; margin-top: 4px; }
@media (max-width: 760px) {
  .layout { grid-template-columns: 1fr; }
}
</style>