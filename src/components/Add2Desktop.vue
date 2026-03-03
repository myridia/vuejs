<script setup>
import Button from "primevue/button";  
import { ref,onMounted } from "vue";
  const items = ref([
  ]);
const supportsPWA = ref('BeforeInstallPromptEvent' in window);
const deferredPrompt = ref(null);    

onMounted(() => {
  if (supportsPWA.value) {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      deferredPrompt.value = event;
      //console.log('beforeinstallprompt fired');
    });
    window.addEventListener('appinstalled', () => {
      //console.log('PWA was installed');
      deferredPrompt.value = null;
    });
  }
});

const installPWA = async () => {
  if (deferredPrompt.value) {
    deferredPrompt.value.prompt();
    const { outcome } = await deferredPrompt.value.userChoice;
    //console.log(`User response to the install prompt: ${outcome}`);
    deferredPrompt.value = null;
  }
};



</script>


<template>
  <Button label="Add to Desktop" v-if="supportsPWA && deferredPrompt" @click="installPWA" class="a2d" />
  <p v-else-if="supportsPWA && !deferredPrompt"></p>
  <p v-else></p>
</template>

<style>
  .a2d {
   white-space: nowrap;
  }
</style>


