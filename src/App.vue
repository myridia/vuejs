<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menubar from './components/Menubar.vue'
import Breadcrumb from './components/Breadcrumb.vue'  

</script>

<template>
  <header>
  <Menubar />  
  </header>
  <RouterView />

</template>

<style scoped>

</style>
