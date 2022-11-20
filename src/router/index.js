import { createRouter, createWebHistory } from 'vue-router'
import { CustomerDashboardView } from '../views/customer'
import { DetailExternalTransactionView, ExternalTransactionView } from '../views/external-transaction'
import { ListExternalTransactionView } from '../views/external-transaction'
import { AuthView } from '../auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CustomerDashboardView,
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
      path: '/list-external-transaction',
      name: 'list-external-transaction',
      component: ListExternalTransactionView,
    },
    {
      path: '/detail-external-transaction',
      name: 'detail-external-transaction',
      component: DetailExternalTransactionView,
    },
    {
      path: '/auth/login',
      name: 'login',
      component: AuthView,
    },
  ],
})
export default router
