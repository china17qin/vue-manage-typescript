import Vue from "vue";
import Router from "vue-router";
import routes from "./routes/index";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem("zks-user-token")) {
    next();
  } else {
    if (to.name !== "login" && to.name !== "forget" && to.name !== "register") {
      // sessionStorage.setItem("loginAfterRedirect", to.fullPath);
      router.push("/full/login");
    } else {
      next();
    }
  }
});

export default router;
