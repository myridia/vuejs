<script setup>
/******************************************************
  https://primevue.org/datatable/
******************************************************/
import { onMounted, ref, inject } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
//import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";

const log = inject("logService");
const worker = inject("Worker");
const Workers = inject("Workers");

const data = ref([]);
const category = ref("test");

onMounted(async () => {
  let msg = await Workers.post_message(worker, "init", "my message");
  data.value = await Workers.post_message(worker, "get_rows");
});
</script>
<template>
  <div class="card">
    <DataTable
      :value="data"
      tableStyle="min-width: 50rem"
      responsiveLayout="scroll"
    >
      <Column field="id" sortable header="ID"></Column>
      <Column field="name" sortable header="Name"></Column>
      <Column field="code" sortable header="Code"></Column>
      <Column field="qty" sortable header="Qty"></Column>
    </DataTable>
  </div>
</template>

<style scoped></style>
