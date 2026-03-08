import { Log2textarea } from "log2textarea/dist/log2textarea.esm.js";
import { onMounted, ref } from "vue";

export default {
  install: (app, options) => {
    const log = ref(null);
    const logService = {
      info(message) {
        if (log && log.value) {
          log.value.info(message);
        } else {
          this.initialize();
        }
      },

      initialize() {
        if (!log.value) {
          log.value = new Log2textarea("logger", "...app init", false, true);
        }
      },
    };
    app.provide("logService", logService);
  },
};
