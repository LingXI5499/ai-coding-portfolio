import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './pages/NotFound.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import AccountPage from './pages/AccountPage.vue';
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/account' },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/account', component: AccountPage },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
});
