import "./assets/main.css";
import { createApp, ref } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import logServicePlugin from "./plugins/logService";
import Workers from "./plugins/Workers";
import ToastService from "primevue/toastservice";
//import worker_service from "./services/Worker_service.js";
const worker = new Worker(new URL("./services/db_worker.js", import.meta.url), {
  type: "module",
});

const app = createApp(App);

app.provide("Worker", worker);

app.use(logServicePlugin);
app.use(worker);
app.use(Workers);
app.use(router);
app.use(ToastService);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: false,
    },
  },
});

app.mount("#app");
