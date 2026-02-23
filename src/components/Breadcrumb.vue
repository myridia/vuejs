<script setup>
import Breadcrumb from 'primevue/breadcrumb';
import { ref } from "vue";
const home = ref({
icon: 'pi pi-home',
label : "Home"
})

import { defineProps } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
;

</script>

<template>
   <Breadcrumb :home="home" :model="items" />
</template>




