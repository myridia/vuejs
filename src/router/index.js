import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Table from "../views/Table.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/table",
      name: "Table",
      component: Table,
    },

    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});

export default router;
