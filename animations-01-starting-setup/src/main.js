import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import Goals from './pages/Goals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: Goals }
  ]
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

// initial animation is not there - only when you switch routes
router.isReady().then(() => app.mount('#app'));
