import { createRouter, createWebHistory } from 'vue-router'
import PathNotFound from '../views/PathNotFound.vue'
import Logout from '../views/customer/Logout.vue'
import { CustomerDashboardView } from '../views/customer'
import { DetailExternalTransactionView, ExternalTransactionView } from '../views/external-transaction'
import { ListExternalTransactionView } from '../views/external-transaction'
import HomeView from '../views/HomeView.vue'
import { AuthView, RegisterView } from '../auth'

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
      path: '/detail-external-transaction/:id',
      name: 'detail-external-transaction',
      component: DetailExternalTransactionView,
    },
    {
      path: '/auth/login',
      name: 'login',
      component: AuthView,
    },
    {
      path: '/auth/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
    },
    { path: '/:pathMatch(.*)*', component: PathNotFound },
  ],
})
export default router
