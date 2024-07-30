import App from "src/app/App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import { router } from "./app/router";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
