import MainContainer from "@/views/Index/main.vue";
import FullContainer from "@/views/Index/full.vue";
import LoginPage from "@/views/Login/login.vue";
import { RouteConfig } from "vue-router";

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "mainWrapper",
    meta: { desc: "主屏容器" },
    component: MainContainer,
    children: [],
    redirect: "/workBranch",
  },
  {
    path: "/full",
    name: "fullWrapper",
    component: FullContainer,
    children: [
      {
        path: "login",
        name: "login",
        component: LoginPage,
      },
      {
        path: "forget",
        name: "forget",
        component: () => import("@/views/Forget/index.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("@/views/Register/index.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "pageNotFound",
    component: () => import("@/views/Error/404.vue"),
  },
];

export default routes;
