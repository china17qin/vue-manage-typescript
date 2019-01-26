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
    ],
  },
  {
    path: "*",
    name: "pageNotFound",
    component: () => import("@/views/Error/404.vue"),
  },
];

export default routes;
