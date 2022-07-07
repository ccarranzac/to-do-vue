import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../layouts/HomeLayout.vue";
import HomeView from "../views/landing/HomeView.vue";
import AboutView from "../views/landing/AboutView.vue";
import RegisterView from "../views/landing/RegisterView.vue";
import LoginView from "../views/landing/LoginView.vue";
import EditTask from "../views/user/EditTask.vue";
import NewTask from "../views/user/NewTask.vue";
import TaskDashboard from "../views/user/TaskDashboard.vue";
import NotFound from "../views/NotFound.vue";
import store from "@/store";

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
  {
    path: "/dashboard",
    name: "dashboard",
    component: TaskDashboard,
    meta: {
      protected: true,
    },
  },
  {
    path: "/edit-task",
    name: "edit-task",
    component: EditTask,
    meta: {
      protected: true,
    },
  },
  {
    path: "/new-task",
    name: "new-task",
    component: NewTask,
    meta: {
      protected: true,
    },
  },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

//protected routes
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.protected);
  if (requiresAuth && store.state.auth === false) {
    next({ name: "home" });
  } else if (
    to.name === "home" ||
    to.name === "about" ||
    to.name === "register" ||
    to.name === "login"
  ) {
    if (store.state.auth === true) {
      next({ name: "dashboard" });
    } else next();
  } else next();
});

export default router;
