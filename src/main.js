import "./assets/main.css";
import { createApp, ref } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import logServicePlugin from "./plugins/logService";
import Workers from "./plugins/Workers";
//import worker_service from "./services/Worker_service.js";
const worker = new Worker(new URL("./services/db_worker.js", import.meta.url), {
  type: "module",
});

const app = createApp(App);
//console.log("xxxxxxx");
//console.log(Workers);
//console.log("xxxxxxx");
//worker_service.set_default_message(worker);
app.provide("Worker", worker);
//app.provide("Worker_service", worker_service);

app.use(logServicePlugin);
app.use(worker);
app.use(Workers);
app.use(router);

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
