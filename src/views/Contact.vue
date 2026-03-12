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
</template>

<style></style>
