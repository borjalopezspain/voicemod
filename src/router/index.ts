import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: () => import("@/layouts/MainLayout/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/pages/Home/Home.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
