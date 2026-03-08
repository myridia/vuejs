<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import IftaLabel from "primevue/iftalabel";
import { ref, onMounted, inject } from "vue";
import FileUpload from "primevue/fileupload";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";
import Papa from "papaparse";

const log = inject("logService");
const worker = inject("Worker");
const Workers = inject("Workers");

const toast = useToast();
const fileupload = ref();
const items = ref([]);
const name = ref("");
const code = ref("");
const qty = ref("");

onMounted(async () => {
  let msg = await Workers.post_message(worker, "init", "my message");
});

const upload = (event) => {
  toast.add({
    severity: "info",
    summary: "Info",
    detail: "Message Content",
    life: 5000,
  });
  //  fileupload.value.upload();

  const file = event.files[0];
  const file_name = event.files[0].name;
  const reader = new FileReader();
  reader.onload = async (e) => {
    let rows = [];
    console.log("...ok");
    const file_content = e.target.result;
    const d = Papa.parse(file_content).data;
    for (let i in d) {
      if (d[i].length === 3) {
        //console.log(d[i]);
        const name = d[i][0];
        const code = d[i][1];
        let qty = d[i][2].replace(".", "");
        qty = qty.replace(",", ".");
        const row = { name: name, code: code, qty: qty };
        rows.push(row);
        //console.log(qty);
      }
    }
    await insert_rows(rows);
    //console.log(data);
  };
  reader.onerror = (error) => {
    console.log("...error");
    console.log(error);
  };

  reader.readAsText(file);
};

const insert_rows = async (rows) => {
  let msg = await Workers.post_message(worker, "insert_rows", rows);
};

const insert_row = async () => {
  if (name.value != "" && code.value != "" && parseFloat(qty.value)) {
    //console.log("...insert_row");
    let msg = await Workers.post_message(worker, "insert_row", {
      name: name.value,
      code: code.value,
      qty: parseFloat(qty.value),
    });
    //console.log(msg);
  }
};

const delete_rows = async () => {
  let msg = await Workers.post_message(worker, "delete_rows", "securities");
  log.info(msg);
};
</script>

<template>
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
    label="Insert Row"
    @click="insert_row"
    class="insert_row"
  /><br /><br />

  <Button label="Delete Rows" @click="delete_rows" class="delete_rows" /><br />

  <br />
  <Toast />
  <div class="card flex flex-wrap gap-6 items-center justify-between">
    <FileUpload
      ref="fileupload"
      mode="basic"
      name="myfiles"
      accept="text/csv"
      :maxFileSize="1000000"
      :auto="false"
      :multiple="false"
      @select="upload"
    />
  </div>
</template>

<style>
.a2d {
  white-space: nowrap;
}
</style>
