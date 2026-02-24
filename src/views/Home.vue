<script setup>
  import Breadcrumb from '../components/Breadcrumb.vue'
import { ref } from "vue";
  const items = ref([
  ]);

function handle_a2d() {
   console.log("handle a2d")
}

</script>


<template>
<Breadcrumb :items="items"  />

    <Button2 label="Add to Desktop"  
      @click="handle_a2d" class="custom_wrap_button"
    />
</template>

<style>
  

</style>


