import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/router";
import store from "@/store/store";
import elementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import { post } from "./untils/http";

Vue.use(elementUi);
Vue.config.productionTip = false;
// Vue.prototype.$post = post;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
