import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/indie-game',
      name: 'indie-game',
      component: () => import('@/views/IndieGameView.vue')
    },
    {
      path: '/entry-game',
      name: 'entry-game',
      component: () => import('@/views/EntryGameView.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('@/views/CommunityView.vue')
    }
  ]
})

export default router
