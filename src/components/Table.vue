<script setup>
import { onMounted, ref, inject } from "vue";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row";
import Products from "../services/Products";

const log = inject("logService");
const worker = inject("Worker");
const Workers = inject("Workers");

const xproducts = ref([]);
const category = ref("test");
//const p = await new Products();

onMounted(async () => {
  let msg = await Workers.post_message(worker, "init", "my message");
  let data = await Workers.post_message(worker, "get_rows");
  console.log(data);
  const p = await new Products();
  const ps = await p.get();
  xproducts.value = ps;
});
</script>
<template>
  <div class="card">
    <DataTable
      :value="xproducts"
      tableStyle="min-width: 50rem"
      responsiveLayout="scroll"
    >
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
</template>

<style scoped></style>
