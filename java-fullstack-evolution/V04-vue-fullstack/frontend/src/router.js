import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './pages/NotFound.vue';
import EmployeeList from './pages/EmployeeList.vue';
import EmployeeForm from './pages/EmployeeForm.vue';
import EmployeeDetail from './pages/EmployeeDetail.vue';
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/employees' },
    { path: '/employees', component: EmployeeList },
    { path: '/employees/new', component: EmployeeForm },
    { path: '/employees/:id/edit', component: EmployeeForm },
    { path: '/employees/:id', component: EmployeeDetail },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
});
