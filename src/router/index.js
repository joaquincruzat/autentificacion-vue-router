import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "../views/SignUpView.vue";
import SuccessfulLoginView from "../views/SuccessfulLoginView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homeview",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpView,
  },
  {
    path: "/success",
    name: "success",
    component: SuccessfulLoginView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
