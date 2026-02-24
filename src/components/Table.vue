<script setup>
import { onMounted, ref } from 'vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import ProductService from '../services/ProductService';

const v = ref("fuck");
const products = ref([]);

onMounted(async () => {
  v.value = 'ffffffffff';
  products.value =[
    {code:"xxx",name:"fff",category:"ccccc",quantity:"1111"},
    {code:"xxx",name:"fff",category:"ccccc",quantity:"1111"},
    {code:"xxx",name:"fff",category:"ccccc",quantity:"1111"},
    {code:"xxx",name:"fff",category:"ccccc",quantity:"1111"},    

]
});



</script>
<template>
<br>
 {{v}}
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem" responsiveLayout="scroll">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<style scoped>

</style>
