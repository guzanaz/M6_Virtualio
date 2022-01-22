import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Home from "../views/Home.vue";

const routes = [

  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;