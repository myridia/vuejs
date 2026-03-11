<script setup>
import { ref } from "vue";
const items = ref([{ label: "About", route: "about" }]);
</script>

<template>
  <Breadcrumb :items="items" />
</template>

<style></style>
