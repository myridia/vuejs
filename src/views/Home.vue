<script setup>
import Breadcrumb from "../components/Breadcrumb.vue";

import { ref, onMounted, inject } from "vue";
const items = ref([]);
</script>

<template>
  <Breadcrumb :items="items" />
</template>

<style></style>
