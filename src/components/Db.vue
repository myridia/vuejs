<script setup>
import Button from "primevue/button";  
import { ref,onMounted,inject } from "vue";
  const items = ref([
  ]);

//const log = inject('log');
const log = inject('logService');
const worker = inject('Worker');
const Workers  = inject('Workers');

onMounted(() => {
});

const init_sqlite3 = async () => {
  log.info("...init_sqlite3");
  let msg = await Workers.post_message(worker,"test","my message");
  log.info(msg);
};



</script>


<template>
  <Button label="Init Sqlite3" @click="init_sqlite3" class="db_sqlite3" />

</template>

<style>
  .a2d {
   white-space: nowrap;
  }
</style>



