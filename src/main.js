import { createApp } from "vue";
import App from "./base/apps/apps.vue";
import router from "./base/routes/routes.ts";
import store from "./store/main.ts";
import "./base/style/index.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
