<script setup>
import { provide, ref, onMounted} from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Menubar from './components/Menubar.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Log from './components/Log.vue'
import {Log2textarea} from "log2textarea/dist/log2textarea.js";

const log = ref(null);


onMounted(() => {
  log.value = new Log2textarea("logger");
  provide('log', log); // Provide the ref
});

</script>

<template>
<header class="fixed-header">
  <Menubar />  
</header>
  <RouterView />
<Log/>
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
