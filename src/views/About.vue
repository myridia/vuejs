<script setup>
  import Breadcrumb from '../components/Breadcrumb.vue'
  import { ref } from "vue";
  const items = ref([
    { label: 'About' },  
]);  
</script>


<template>
  <Breadcrumb :items="items"  />
</template>

<style>

</style>
