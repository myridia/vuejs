<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import IftaLabel from "primevue/iftalabel";
import { ref, onMounted, inject } from "vue";
const items = ref([]);

//const log = inject('log');
const log = inject("logService");
const worker = inject("Worker");
const Workers = inject("Workers");

onMounted(() => {});

const init_sqlite3 = async () => {
  log.info("...init_sqlite3");
  let msg = await Workers.post_message(worker, "test", "my message");
  log.info(msg);
};

const name = ref("");
const code = ref("");
const qty = ref("");

const insert_security = async () => {
  log.info("...insert_security");
  log.info("name: " + name.value);
  log.info("code: " + code.value);
  log.info("qty: " + qty.value);

  //let msg = await Workers.post_message(worker,"test","my message");
  //log.info(msg);
};
</script>

<template>
  <Button label="Init Sqlite3" @click="init_sqlite3" class="db_sqlite3" /><br />

  <IftaLabel>
    <InputText id="name" v-model="name" />
    <label for="name">Name</label>
  </IftaLabel>

  <IftaLabel>
    <InputText id="code" v-model="code" />
    <label for="code">Code</label>
  </IftaLabel>

  <IftaLabel>
    <InputText id="qty" v-model="qty" />
    <label for="qty">qty</label>
  </IftaLabel>
  <Button
    label="Insert Security"
    @click="insert_security"
    class="insert_security"
  /><br />
</template>

<style>
.a2d {
  white-space: nowrap;
}
</style>
