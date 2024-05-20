import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/HomeView.vue')
    },
    {
      path: '/indie-game',
      name: 'indie-game',
      component: () => import('@/components/IndieGameView.vue')
    },
    {
      path: '/entry-game',
      name: 'entry-game',
      component: () => import('@/components/EntryGameView.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('@/components/CommunityView.vue')
    }
  ]
})

export default router
