<script setup>
/******************************************************
  https://primevue.org/datatable/
******************************************************/
import { onMounted, ref, inject } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
//import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";
import Toolbar from "primevue/toolbar";

const log = inject("logService");
const worker = inject("Worker");
const Workers = inject("Workers");

const data = ref([]);
const category = ref("test");

const dt = ref();
const exportCSV = () => {
  dt.value.exportCSV();
};

onMounted(async () => {
  let msg = await Workers.post_message(worker, "init", "my message");
  data.value = await Workers.post_message(worker, "get_rows");
});

const delete_rows = async () => {
  let msg = await Workers.post_message(worker, "delete_rows", "securities");
  log.info(msg);
  data.value = await Workers.post_message(worker, "get_rows");
};
</script>
<template>
  <Toolbar class="mb-6">
    <template #start>
      <Button label="New" icon="pi pi-plus" class="mr-2" @click="openNew" />
      <Button
        label="Delete"
        icon="pi pi-trash"
        severity="danger"
        variant="outlined"
        @click="confirmDeleteSelected"
        :disabled="!selectedProducts || !selectedProducts.length"
      />
    </template>

    <template #end>
      <FileUpload
        mode="basic"
        accept="image/*"
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
    class="p-datatable-sm p-datatable-gridlines p-datatable-striped"
    responsiveLayout="scroll"
    resizableColumns
  >
    <Column field="id" sortable header="ID" style="width: 5%"></Column>
    <Column field="code" sortable header="Code" style="width: 15%"></Column>
    <Column field="name" sortable header="Name" style="width: 60%"></Column>
    <Column field="qty" sortable header="Qty" style="width: 10%"></Column>
    <Column field="div" sortable header="Div" style="width: 10%"></Column>
  </DataTable>
  <Button label="Delete Rows" @click="delete_rows" class="delete_rows" />
</template>

<style scoped></style>
