import { createApp } from "vue";
import router from "./router";
import Ripple from "./directives/Ripple.js";
import { Vue3Mq } from "./plugin/index.js";
import App from "./App.vue";

const app = createApp(App);

app.directive("ripple", Ripple);
app.use(Vue3Mq, {
	defaultBreakpoint: "xl",
});
app.use(router);
app.mount("#app");
