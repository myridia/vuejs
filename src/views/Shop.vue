<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import Table from '../components/Table.vue'
  import { ref } from "vue";
  const items = ref([
      { label: 'Shop',
        route: 'shop'},  
]);  
</script>


<template>
<Breadcrumb :items="items"  />
<Table/>
</template>

<style>

</style>
