<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import Table from '../components/Table.vue'

import { ref,onMounted } from "vue";
  const items = ref([
  ]);





const supportsPWA = ref('BeforeInstallPromptEvent' in window);
const deferredPrompt = ref(null);

onMounted(() => {
  if (supportsPWA.value) {
    window.addEventListener('beforeinstallprompt', (event) => {
      // Prevent the default prompt from showing immediately
      event.preventDefault();

      // Stash the event so it can be triggered later.
      deferredPrompt.value = event;

      console.log('beforeinstallprompt fired');
    });

    window.addEventListener('appinstalled', () => {
      console.log('PWA was installed');
      deferredPrompt.value = null;
    });
  }
});

const installPWA = async () => {
  if (deferredPrompt.value) {
    // Show the install prompt
    deferredPrompt.value.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.value.userChoice;

    console.log(`User response to the install prompt: ${outcome}`);

    // We've used the prompt, and it's no longer available, clear it
    deferredPrompt.value = null;
  }
};



</script>


<template>
<Breadcrumb :items="items"  />

<Button2 label="Add to Desktop"
       v-if="supportsPWA && deferredPrompt"
      @click="installPWA" class="custom_wrap_button"
	     />

 <p v-else-if="supportsPWA && !deferredPrompt">App already installed</p>
 <p v-else>PWA not supported in this browser</p>

</template>

<style>
  

</style>


