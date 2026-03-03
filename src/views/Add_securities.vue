<script setup>
import Breadcrumb from "../components/Breadcrumb.vue";
import Table from "../components/Table.vue";
import Db from "../components/Db.vue";

import { ref } from "vue";
const items = ref([{ label: "Securities", route: "securities" }]);
</script>

<template>
  <Breadcrumb :items="items" />
  <Db />
</template>

<style></style>
