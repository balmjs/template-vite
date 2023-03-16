import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BalmUI from "balm-ui";
import BalmUIPlus from "balm-ui-plus";
import $http from "@/plugins/http";
import { balmUIConfig, balmUIPlusConfig } from "@/config/components";
import "./styles/index.scss";

Vue.use(BalmUI, balmUIConfig);
Vue.use(BalmUIPlus, balmUIPlusConfig);
Vue.use($http);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
