import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import LandingPage from "../views/LandingPage.vue";

const routes = [

  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Home",
    name: "Home",
    component: LandingPage,
  }



];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;