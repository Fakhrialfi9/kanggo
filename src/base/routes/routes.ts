import { createRouter, createWebHistory } from "vue-router";

import Layout from "../layout/layout.vue";
import PagesView from "../../ui/views/pagesView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Pages",
        component: PagesView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
