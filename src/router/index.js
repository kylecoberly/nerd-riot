import { createRouter, createWebHistory } from "vue-router";

import PlacePage from "../views/PlacePage";
import IndexPage from "../views/IndexPage";

const routes = [
  {
    name: "index",
    path: "/",
    component: IndexPage,
  },
  {
    name: "place",
    path: "/places/:id",
    component: PlacePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
