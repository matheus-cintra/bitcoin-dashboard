import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginForm from '@/views/LoginForm.vue';
import Dashboard from '@/views/Dashboard.vue';
import Settings from '@/views/Settings.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginForm,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
  ],
});
