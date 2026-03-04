<script setup>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import IftaLabel from "primevue/iftalabel";
import { ref, onMounted, inject } from "vue";
import FileUpload from "primevue/fileupload";
import { useToast } from "primevue/usetoast";

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

const upload = () => {
  console.log("uuuuuuuuuu");
  toast.add({
    severity: "info",
    summary: "Info",
    detail: "Message Content",
    life: 30000,
  });
  fileupload.value.upload();
};

const onUpload = () => {
  console.log("upload");
  toast.add({
    severity: "info",
    summary: "Success",
    detail: "File Uploaded",
    life: 3000,
  });
};

const insert_row = async () => {
  if (name.value != "" && code.value != "" && parseFloat(qty.value)) {
    log.info("...insert_security");
    let msg = await Workers.post_message(worker, "insert_row", {
      name: name.value,
      code: code.value,
      qty: parseFloat(qty.value),
    });
  }
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
  <Button label="Insert Row" @click="insert_row" class="insert_row" /><br />

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
      @upload="onUpload"
    />
    <Button label="Upload" @click="upload" severity="secondary" />
  </div>
</template>

<style>
.a2d {
  white-space: nowrap;
}
</style>
