
<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import Db from '../components/Db.vue'
import { ref,onMounted,inject } from "vue";
const items = ref([]);

//const log = inject('log'); 
//log.info("...Home");

const log = inject('logService');
log.info("helloxxx");

</script>


<template>
<Breadcrumb :items="items"  />
<Db/>



</template>

<style>
  

</style>


