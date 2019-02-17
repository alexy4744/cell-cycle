import Vue, { CreateElement, VNode } from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h: CreateElement): VNode => h(App)
}).$mount("#app");
