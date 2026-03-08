import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Securities from "../views/Securities.vue";
import List_securities from "../views/List_securities.vue";
import Add_securities from "../views/Edit_securities.vue";
import Add_dividends from "../views/Edit_dividends.vue";
import List_dividends from "../views/List_dividends.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/securities",
      name: "Securities",
      component: Securities,
    },

    {
      path: "/list_securities",
      name: "List Securities",
      component: List_securities,
    },

    {
      path: "/edit_securities",
      name: "Edit Securities",
      component: Add_securities,
    },

    {
      path: "/edit_dividends",
      name: "Edit Dividends",
      component: List_dividends,
    },

    {
      path: "/add_dividends",
      name: "Add Dividends",
      component: Add_dividends,
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
