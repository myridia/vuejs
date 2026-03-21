<script setup>
import { ref } from "vue";
const items = ref([
  {
    label: "Contact",
    route: "/contact",
  },
]);
</script>

<template>
  <Breadcrumb :items="items" />
  <Contact_Form />
</template>

<style></style>
