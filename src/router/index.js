import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../layouts/HomeLayout.vue";
import HomeView from "../views/landing/HomeView.vue";
import AboutView from "../views/landing/AboutView.vue";
import RegisterView from "../views/landing/RegisterView.vue";
import LoginView from "../views/landing/LoginView.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
    name: "home-view",
    component: HomeLayout,
    children: [
      {
        name: "home",
        path: "home",
        component: HomeView,
      },
      {
        name: "about",
        path: "about",
        component: AboutView,
      },
      {
        name: "register",
        path: "register",
        component: RegisterView,
      },
      {
        name: "login",
        path: "login",
        component: LoginView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
