import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Shop from "../views/Shop.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop,
    },

    {
      path: "/about",
      name: "about",
      component: About,
    },

    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },

    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
