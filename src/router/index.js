import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PathNotFound from '../views/PathNotFound.vue'
import Logout from '../views/customer/Logout.vue'
import CreditPage from "../views/CreditController/CreditPage.vue"
import CreditAdmin from "../views/CreditController/CreditAdmin.vue"
import ConsolidadoComponent from "../views/customer/consolidado.views.vue"
import { CustomerDashboardView } from '../views/customer'
import { DetailExternalTransactionView, ExternalTransactionView } from '../views/external-transaction'
import { ListExternalTransactionView } from '../views/external-transaction'
import { AuthView, RegisterView } from '../auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/consolidado',
      name:'ConsolidadoComponent',
      component: ConsolidadoComponent
    },
    {
    path:'/CreditPage',
    name:'CreditPage',
    component: CreditPage
    },
    {
      path:'/CreditAdmin',
      name:'CreditAdmin',
      component: CreditAdmin
      },
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
