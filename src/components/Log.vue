<script setup>
import Textarea from "primevue/textarea";
import IftaLabel from "primevue/iftalabel";
import { ref, onMounted, inject } from "vue";
const logger = ref([]);
logger.value = "xxxxx";
</script>
<template>
  <IftaLabel>
    <Textarea
      id="logger"
      v-model="logger"
      rows="10"
      cols="100"
      style="resize: none"
    />
    <label for="logger">Logger:</label>
  </IftaLabel>
</template>

<style scoped>
#logger {
}
</style>
