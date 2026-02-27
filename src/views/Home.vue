<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import { ref,onMounted,inject } from "vue";
const items = ref([]);

const log = inject('log'); // Inject the ref
log.value.info("hello");

</script>


<template>
<Breadcrumb :items="items"  />

</template>

<style>
  

</style>


