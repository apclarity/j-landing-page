import { createRouter, createWebHistory } from "vue-router";

import LayoutUtama from "./pages/layout/Utama.vue";
import Homepage from "./pages/Homepage/Index.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  routes: [
    {
      path: "/",
      component: LayoutUtama,
      children: [
        {
          path: "/",
          component: Homepage,
        }
      ],
    }
  ],
});

export default router;
