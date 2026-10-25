import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/destinations',
    name: 'destinations',
    // 路由懒加载
    component: () => import('../views/DestinationsView.vue')
  },
  {
    path: '/destinations/:id',
    name: 'destination-detail',
    component: () => import('../views/DestinationDetailView.vue'),
    props: true
  },
  {
    path: '/my-trips',
    name: 'my-trips',
    component: () => import('../views/MyTripsView.vue')
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// 全局前置导航守卫：动态修改页面标题
const titles = {
  home: '足迹旅行 · 发现下一站',
  destinations: '目的地 · 足迹旅行',
  'destination-detail': '目的地详情 · 足迹旅行',
  'my-trips': '我的行程 · 足迹旅行'
}

router.beforeEach((to, from, next) => {
  document.title = titles[to.name] || '足迹旅行'
  next()
})

export default router