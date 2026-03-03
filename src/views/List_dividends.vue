<script setup>
import Breadcrumb from "../components/Breadcrumb.vue";
import Table from "../components/Table.vue";

import { ref } from "vue";
const items = ref([{ label: "Securities", route: "securities" }]);
</script>

<template>
  <Breadcrumb :items="items" />
</template>

<style></style>
