<script setup>
import { ref } from "vue";
const items = ref([{ label: "Table", route: "table" }]);
</script>

<template>
  <Breadcrumb :items="items" />
  <Table />
</template>

<style></style>
