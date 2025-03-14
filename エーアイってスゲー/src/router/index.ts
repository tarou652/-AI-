import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomePage.vue'
import ServicesPage from '@/views/ServicesPage.vue'
import AboutPage from '@/views/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage,
    },
    {
      path: '/about',
      name: 'about',
      component:AboutPage,
    },
  ],
})

export default router
