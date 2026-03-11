<script setup>
/******************************************************
  https://primevue.org/datatable/
******************************************************/
import { onMounted, ref, inject } from "vue";

const log = inject("logService");
const worker = inject("Worker");
const Workers = inject("Workers");

const data = ref([]);
const category = ref("test");

const dt = ref();

const name = ref("");
const code = ref("");
const qty = ref("");

const selected_securities = ref();
const metaKey = ref(true);

const exportCSV = () => {
  dt.value.exportCSV();
};
const new_security_box = ref(false);
const delete_security_dialog = ref(false);

onMounted(async () => {
  let msg = await Workers.post_message(worker, "init", "my message");
  data.value = await Workers.post_message(worker, "get_rows");
});

const confirm_delete_selected = () => {
  delete_security_dialog.value = true;
};

const delete_selected_securities = async () => {
  let x = selected_securities.value;
  let ids = [];
  for (let i in x) {
    ids.push(x[i].id);
  }
  let msg = await Workers.post_message(worker, "delete_by_ids", {
    table: "securities",
    ids: ids,
  });

  //log.info(msg);
  data.value = await Workers.post_message(worker, "get_rows");
  delete_security_dialog.value = false;
};

const delete_securities = async () => {
  console.log("xxxx");
  //let msg = await Workers.post_message(worker, "delete_rows", "securities");
  //log.info(msg);
  //data.value = await Workers.post_message(worker, "get_rows");
};

const open_new_security_box = () => {
  new_security_box.value = true;
};

const close_new_security_box = () => {
  new_security_box.value = false;
};

const save_new_security_box = async () => {
  if (name.value != "" && code.value != "" && parseFloat(qty.value)) {
    let msg = await Workers.post_message(worker, "insert_row", {
      name: name.value,
      code: code.value,
      qty: parseFloat(qty.value),
    });
    code.value = "";
    name.value = "";
    qty.value = "";
    data.value = await Workers.post_message(worker, "get_rows");
    new_security_box.value = false;
  }
};
</script>
<template>
  <Toolbar class="mb-6">
    <template #start>
      <Button
        label="New"
        icon="pi pi-plus"
        class="mr-2"
        @click="open_new_security_box"
      />
      <Button
        label="Delete All"
        icon="pi pi-trash"
        severity="danger"
        variant="outlined"
        @click="confirm_delete_selected"
        :disabled="!selected_securities || !selected_securities.length"
      />
    </template>

    <template #end>
      <FileUpload
        mode="basic"
        accept="text/csv"
        :maxFileSize="1000000"
        label="Import"
        customUpload
        chooseLabel="Import"
        class="mr-2"
        auto
        :chooseButtonProps="{ severity: 'secondary' }"
      />
      <Button
        label="Export"
        icon="pi pi-upload"
        severity="secondary"
        @click="exportCSV($event)"
      />
    </template>
  </Toolbar>

  <DataTable
    :value="data"
    ref="dt"
    v-model:selection="selected_securities"
    :dataKey="id"
    tableStyle="min-width: 50rem"
    class="p-datatable-sm p-datatable-gridlines p-datatable-striped"
    responsiveLayout="scroll"
    resizableColumns
  >
    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
    <Column field="id" sortable header="ID" style="width: 5%"></Column>
    <Column field="code" sortable header="Code" style="width: 15%"></Column>
    <Column field="name" sortable header="Name" style="width: 60%"></Column>
    <Column field="qty" sortable header="Qty" style="width: 10%"></Column>
    <Column field="div" sortable header="Div" style="width: 10%"></Column>
  </DataTable>

  <Dialog
    v-model:visible="new_security_box"
    modal
    header="Insert new Security"
    :style="{ width: '25rem' }"
  >
    <div class="flex items-center gap-4 mb-4">
      <label for="name" class="font-semibold w-24">Name</label>
      <InputText
        id="name"
        class="flex-auto"
        autocomplete="off"
        v-model="name"
      />
    </div>
    <div class="flex items-center gap-4 mb-4">
      <label for="code" class="font-semibold w-24">Code</label>
      <InputText
        id="code"
        class="flex-auto"
        autocomplete="off"
        v-model="code"
      />
    </div>
    <div class="flex items-center gap-4 mb-4">
      <label for="qty" class="font-semibold w-24">Qty</label>
      <InputText id="code" class="flex-auto" autocomplete="off" v-model="qty" />
    </div>

    <div class="flex justify-end gap-2">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="close_new_security_box"
      ></Button>
      <Button
        type="button"
        label="Save"
        @click="save_new_security_box"
      ></Button>
    </div>
  </Dialog>

  <Dialog
    v-model:visible="delete_security_dialog"
    :style="{ width: '450px' }"
    header="Confirm"
    :modal="true"
  >
    <div class="flex items-center gap-4">
      <i class="pi pi-exclamation-triangle !text-3xl" />
      <span v-if="data"
        >Are you sure you want to delete the selected securites?</span
      >
    </div>
    <template #footer>
      <Button
        label="No"
        icon="pi pi-times"
        text
        @click="delete_security_dialog = false"
        severity="secondary"
        variant="text"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        text
        @click="delete_selected_securities"
        severity="danger"
      />
    </template>
  </Dialog>
</template>

<style scoped>
.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.gap-4 {
  gap: 1rem;
}

.mb-4 {
  margin-bottom: 0.4rem;
}

.font-semibold {
  font-weight: 600;
}

.w-24 {
  width: 6rem;
}

.flex-auto {
  flex: 1 1 auto;
}
</style>
