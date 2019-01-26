import Vue from "vue";
import Router from "vue-router";
import routes from "./routes/index";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem("zks-user-token")) {
    next();
  } else {
    if (to.name !== "login") {
      router.push("/full/login");
    }
    next();
  }
});

export default router;
