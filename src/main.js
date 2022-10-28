import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";
import App from "./App.vue";
import VueScrollTo from "vue-scrollto";

import "./css/style.css";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueScrollTo);
app.mount("#app");
