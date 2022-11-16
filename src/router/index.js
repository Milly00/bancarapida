import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PathNotFound from '../views/PathNotFound.vue'
import Logout from '../views/customer/Logout.vue'
import { CustomerDashboardView } from '../views/customer'
import { AuthView, RegisterView } from '../auth'

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
