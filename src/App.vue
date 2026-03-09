<script setup>
import { provide, ref, onMounted, inject } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Menubar from "./components/Menubar.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import Log from "./components/Log.vue";

//const log = ref(null);
const logService = inject("logService");
const Workers = inject("Workers");
const worker = inject("Worker");

onMounted(() => {
  logService.initialize();
  Workers.set_default_message(worker);
});
</script>

<template>
  <div class="app-container">
    <header class="fixed-header">
      <Menubar />
    </header>

    <main class="main-content">
      <RouterView />
    </main>

    <footer>
      <Log />

      <div class="footer-content">
        <p>&copy; 2026 Vue Starter App</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the container takes up at least the full viewport height */
}

.main-content {
  flex: 1; /* Allow the main content to grow and fill the available space */
}

footer {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

.footer-content {
  /* Styles for the content inside the footer */
}

.fixed-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 200;
  height: 65px;
}

.fixed-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  z-index: 200;
  height: 65px;
}
</style>
