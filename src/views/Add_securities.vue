<script setup>
import { ref } from "vue";
const items = ref([
  { label: "Securities", route: "securities" },
  { label: "Add Securities", route: "add_securities" },
]);
</script>

<template>
  <Breadcrumb :items="items" />
  <Add_Securities />
</template>

<style></style>
