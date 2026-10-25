<script setup>
import { destinations } from '../data/destinations'
import DestinationCard from '../components/destination/DestinationCard.vue'
import BaseCard from '../components/ui/BaseCard.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import { useTripStore } from '../stores/tripStore'

const tripStore = useTripStore()
const featured = destinations.slice(0, 3)

function handleAdd(destination) {
  tripStore.addTrip({
    destinationId: destination.id,
    name: destination.name,
    image: destination.image,
    note: ''
  })
}

const features = [
  { icon: '🗺️', title: '精选目的地', desc: '每个目的地都附有 3 日行程建议。' },
  { icon: '⚡', title: '一键加入', desc: '点击“加入行程”即可保存到本地行程单。' },
  { icon: '📱', title: '响应式布局', desc: '手机、平板、桌面端自适应。' }
]
</script>

<template>
  <section>
    <div class="hero">
      <div class="hero-text">
        <h1>发现下一站</h1>
        <p>从古镇到海岛，从极光到梯田。挑一个目的地，开始你的旅程。</p>
        <div class="hero-actions">
          <RouterLink to="/destinations">
            <BaseButton>浏览全部目的地</BaseButton>
          </RouterLink>
          <RouterLink to="/my-trips">
            <BaseButton variant="ghost">查看我的行程</BaseButton>
          </RouterLink>
        </div>
      </div>
      <img class="hero-img" src="https://picsum.photos/seed/travelhero/900/600" alt="旅行" />
    </div>

    <h2 class="section-title">热门目的地</h2>
    <div class="grid">
      <DestinationCard
        v-for="d in featured"
        :key="d.id"
        :destination="d"
        :added="tripStore.hasDestination(d.id)"
        @add="handleAdd"
      />
    </div>

    <h2 class="section-title">为什么选择足迹旅行</h2>
    <div class="grid">
      <BaseCard v-for="f in features" :key="f.title" :title="`${f.icon} ${f.title}`">
        {{ f.desc }}
      </BaseCard>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 28px;
  align-items: center;
  background: #fff;
  border-radius: 18px;
  padding: 32px;
  margin-bottom: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}
.hero h1 { font-size: 36px; margin-bottom: 12px; }
.hero p { color: #6b7280; margin-bottom: 22px; line-height: 1.8; }
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.hero-actions a { text-decoration: none; }
.hero-img { width: 100%; height: 260px; object-fit: cover; border-radius: 14px; background: #e5e7eb; }
.section-title { font-size: 20px; margin-bottom: 18px; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 44px;
}
@media (max-width: 760px) {
  .hero { grid-template-columns: 1fr; padding: 22px; }
  .hero h1 { font-size: 28px; }
}
</style>