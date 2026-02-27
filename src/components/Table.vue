<script setup>
import { onMounted, ref } from 'vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import Products from '../services/Products';

const xproducts = ref([]);
const category = ref("test");
//const p = await new Products();


onMounted(async () => {
    const p = await new Products();
    const ps = await p.get();
    xproducts.value = ps;
});


</script>
<template>
<h2>Category: {{category}}</h2>
    <div class="card">
        <DataTable :value="xproducts" tableStyle="min-width: 50rem" responsiveLayout="scroll">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<style scoped>

</style>
