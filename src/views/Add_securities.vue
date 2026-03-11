<script setup>
import Breadcrumb from "../components/Breadcrumb.vue";
import Table from "../components/Table.vue";
import Add_Securities from "../components/Add_Securities.vue";

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
