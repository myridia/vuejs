// services/ProductService.js
import { inject, ref } from "vue";
import { Log2textarea } from "log2textarea/dist/log2textarea.esm.js";
export default {
  install: (app, options) => {
    const log = ref(null);
    const Workers = {
      async set_default_message(worker) {
        worker.onmessage = (e) => {
          const message_id = e.data[0];
          const message = e.data[1];
          switch (message_id) {
            case "log_message":
              this.initialize();
              log.value.info(message);
              //log.info(argumentos);
              break;
            case "init":
              //log.value.info("...init");
              //log.value.info(message);
              //[$nombre, $fechaNacimiento, $insertar, $obtener].forEach(
              //  (elemento) => (elemento.disabled = false),
              //);
              break;
            case "insert_row":
              log.value.info("...insert row");
              log.value.info(message);
              break;

            case "get_securities":
              const securities = message;
              log.value.info("get_insert");
              log.value.log(message);
              //$contenedorPersonas.innerHTML = "";
              //for (const persona of personas) {
              //  $contenedorPersonas.innerHTML += `<strong>${persona.nombre}</strong> ${persona.fechaNacimiento}<br>`;
              //}
              break;
          }
        };
      },
      async post_message(worker, id, message) {
        return new Promise((resolve, reject) => {
          const messageHandler = (e) => {
            const _id = e.data[0];
            const _message = e.data[1];
            if (_id === id) {
              worker.removeEventListener("message", messageHandler);
              worker.removeEventListener("error", errorHandler);
              resolve(_message);
            }
          };

          const errorHandler = (error) => {
            worker.removeEventListener("message", messageHandler);
            worker.removeEventListener("error", errorHandler);
            reject(error);
          };

          worker.addEventListener("message", messageHandler);
          worker.addEventListener("error", errorHandler);

          worker.postMessage([id, message]);
        });
      },

      initialize() {
        if (!log.value) {
          log.value = new Log2textarea("logger", "...worker init", false, true);
        }
      },
    };
    app.provide("Workers", Workers);
  },
};
