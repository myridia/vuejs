<script setup>
import { ref } from "vue";
const items = ref([{ label: "Securities", route: "securities" }]);
</script>

<template>
  <Breadcrumb :items="items" />
</template>

<style></style>
