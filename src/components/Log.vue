<script setup>
import Textarea from "primevue/textarea";
import IftaLabel from "primevue/iftalabel";
import { ref, onMounted, inject } from "vue";
const logger = ref([]);
//logger.value = "xxxxx";
</script>
<template>
  <div class="wrapper_logger">
    <IftaLabel>
      <Textarea id="logger" v-model="logger" />
      <label for="logger">Logger:</label>
    </IftaLabel>
  </div>
</template>

<style scoped>
.wrapper_logger {
  margin-left: 15px;
}

.wrapper_logger textarea {
  width: 100%;
  min-height: 300px;
}
</style>
