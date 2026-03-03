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
</script>
<template>
  <div class="card">
    <DataTable
      :value="data"
      ref="dt"
      tableStyle="min-width: 50rem"
      responsiveLayout="scroll"
      resizableColumns
    >
      <template #header>
        <div class="text-end pb-4">
          <Button
            icon="pi pi-external-link"
            label="Export"
            @click="exportCSV($event)"
          />
        </div>
      </template>

      <Column field="id" sortable header="ID" style="width: 5%"></Column>
      <Column field="name" sortable header="Name"></Column>
      <Column field="code" sortable header="Code" style="width: 25%"></Column>
      <Column field="qty" sortable header="Qty" style="width: 20%"></Column>
    </DataTable>
  </div>
</template>

<style scoped></style>
