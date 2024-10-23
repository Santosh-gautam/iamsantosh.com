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
        return savedPosition; // If going back, return to saved position
      } else {
        const position = {};
        if (to.hash) {
          position.selector = to.hash; // This should match the section ID
        }
        return position;
      }
    },
  });

  
export default router;
