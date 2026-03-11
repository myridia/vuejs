<script setup>

import { ref } from "vue";

onst items = ref([{ label: "Securities", route: "securities" }]);
</script>

<template>
  <Breadcrumb :items="items" />
  <Table />
</template>

<style></style>
