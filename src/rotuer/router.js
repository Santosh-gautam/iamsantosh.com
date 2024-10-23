import { createRouter, createWebHashHistory } from 'vue-router';

import Dashboard from '../Pages/Dashboard.vue';

// Define the routes
const routes = [
  {
    name: 'dashboard',
    path: '/',
    component: Dashboard, // Use 'component' for a single component
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition;
      } else if (to.hash) {
          return { el: to.hash, behavior: 'smooth' };
      }
      // Default to scrolling to top
      return { top: 0, behavior: 'smooth' };
  },
});


  
export default router;
