import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { CustomerDashboardView } from '../views/customer'
import { ExternalTransactionView } from '../views/external-transaction'

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
  ]
})
export default router;
