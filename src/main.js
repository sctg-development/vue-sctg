import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/styles/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const app = createApp(App);
window.app = app;
app.mount("#app");
