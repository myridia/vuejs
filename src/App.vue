<script setup>
import { provide, ref, onMounted,inject} from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Menubar from './components/Menubar.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Log from './components/Log.vue'

//const log = ref(null);
const logService = inject('logService');
const Workers = inject('Workers');
const worker = inject('Worker');

onMounted(() => {
    logService.initialize();
    Workers.set_default_message(worker);    
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
