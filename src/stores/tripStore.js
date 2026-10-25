import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// Pinia Setup Store 写法
export const useTripStore = defineStore('trip', () => {
  // state
  const trips = ref([])

  // getters
  const count = computed(() => trips.value.length)

  // 判断某目的地是否已在行程中
  function hasDestination(destinationId) {
    return trips.value.some(t => t.destinationId === destinationId)
  }

  // actions
  function addTrip(payload) {
    if (hasDestination(payload.destinationId)) return false
    trips.value.push({
      id: Date.now(),
      ...payload
    })
    return true
  }

  function removeTrip(id) {
    trips.value = trips.value.filter(t => t.id !== id)
  }

  function clearAll() {
    trips.value = []
  }

  return { trips, count, hasDestination, addTrip, removeTrip, clearAll }
})