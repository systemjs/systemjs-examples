import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/components/about.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
