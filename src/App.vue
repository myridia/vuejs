<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menubar from './components/Menubar.vue'
import Breadcrumb from './components/Breadcrumb.vue'  
</script>

<template>
<header class="fixed-header">
  <Menubar />  
</header>
  <RouterView />

</template>

<style scoped>
.fixed-header {
  position:fixed; 
  left:0;
  top:0; 
  width:100vw;      
  z-index:200;  
  height:65px; 
}
</style>
