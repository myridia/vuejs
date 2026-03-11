import "./assets/main.css";
import { createApp, ref, onMounted, inject } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import logServicePlugin from "./plugins/logService";
import Workers from "./plugins/Workers";
import ToastService from "primevue/toastservice";
import Table from "./components/Table.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import Add_Securities from "./components/Add_Securities.vue";
import Add2Desktop from "./components/Add2Desktop.vue";
import AutoComplete from "primevue/autocomplete";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Row from "primevue/row";
import Toolbar from "primevue/toolbar";
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import IftaLabel from "primevue/iftalabel";
import FileUpload from "primevue/fileupload";
import Fieldset from "primevue/fieldset";
import Toast from "primevue/toast";
import Papa from "papaparse";
import Prime_Breadcrumb from "primevue/breadcrumb";
import Textarea from "primevue/textarea";

//import worker_service from "./services/Worker_service.js";
const worker = new Worker(new URL("./services/db_worker.js", import.meta.url), {
  type: "module",
});

const app = createApp(App)
  .component("AutoComplete", AutoComplete)
  .component("Table", Table)
  .component("Breadcrumb", Breadcrumb)
  .component("Add_Securities", Add_Securities)
  .component("DataTable", DataTable)
  .component("Column", Column)
  .component("Button", Button)
  .component("Row", Row)
  .component("Toolbar", Toolbar)
  .component("Menubar", Menubar)
  .component("InputText", InputText)
  .component("Add2Desktop", Add2Desktop)
  .component("FileUpload", FileUpload)
  .component("Fieldset", Fieldset)
  .component("IftaLabel", IftaLabel)
  .component("Toast", Toast)
  .component("Add2Desktop", Add2Desktop)
  .component("Prime_Breadcrumb", Prime_Breadcrumb)
  .component("Textarea", Textarea)
  .component("Papa", Papa);

app.provide("Worker", worker);

app
  .use(logServicePlugin)
  .use(worker)
  .use(Workers)
  .use(router)
  .use(ToastService);

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
