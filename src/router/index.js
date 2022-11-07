import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { CustomerDashboardView } from '../views/customer'
import { ExternalTransactionView } from '../views/external-transaction'
import { AuthView } from '../auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/customer',
      name: 'customer',
      component: CustomerDashboardView,
    },
    {
      path: '/external-transaction',
      name: 'external-transaction',
      component: ExternalTransactionView,
    },
    {
      path: '/auth/login',
      name: 'login',
      component: AuthView,
    },
  ],
})
export default router
