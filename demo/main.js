import { createApp } from "vue";
import { VitalMq } from "vue3-mq";

import App from "./App.vue";
import "./main.css";

const app = createApp(App);
app.use(VitalMq);

app.mount("#app");
