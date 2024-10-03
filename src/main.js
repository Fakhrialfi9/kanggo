import { createApp } from "vue";
import App from "./base/apps/apps.vue";
import router from "./base/routes/routes.ts";
import "./base/style/index.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
