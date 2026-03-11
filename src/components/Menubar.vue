<script setup>
/*
  https://primevue.org/icons/#download
*/

import { ref, inject, onMounted } from "vue";
import { useRouter } from "vue-router";
import "primeicons/primeicons.css";
const router = useRouter();

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    command: () => {
      router.push("/");
    },
  },
  {
    label: "Securities",
    icon: "pi pi-building-columns",
    command: () => {
      router.push("/securities");
    },
  },
  {
    label: "Dividends",
    icon: "pi pi-building-columns",
    command: () => {
      router.push("/dividends");
    },
  },
  {
    label: "Settings",
    icon: "pi pi-cog",
    command: () => {
      router.push("/login");
    },
  },
  {
    label: "About",
    icon: "pi pi-link",
    command: () => {
      router.push("/about");
    },
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
    command: () => {
      router.push("/contact");
    },
  },
]);

const log = inject("logService");
const worker = inject("Worker");
const Workers = inject("Workers");

const names = ref([]);
const filter = ref();

onMounted(async () => {
  names.value = await Workers.post_message(worker, "get_names");
});

const search = (event) => {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filter.value = [...Names.value];
    } else {
      filter.value = names.value.filter((name) => {
        const x = name.toLowerCase().startsWith(event.query.toLowerCase());
        return x;
      });
    }
  }, 250);
};

const value = ref(null);
const xitems = ref([]);

//const ButtonComponent = inject('a2d')

function handle_search() {
  //console.log("xxxxxxX");
}

function handle_a2d() {
  console.log("...add to desktop");
}
</script>

<template>
  <Menubar :model="items">
    <template #start>
      <a href="/"><img alt="logo" src="/img/logo.png" height="40" /></a>
    </template>

    <template #item="{ item, props, hasSubmenu }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
        </a>
      </router-link>
      <a
        v-else
        v-ripple
        :href="item.url"
        :target="item.target"
        v-bind="props.action"
      >
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
      </a>
    </template>

    <template #end>
      <div class="search-container">
        <Add2Desktop />

        <AutoComplete
          v-model="value"
          :suggestions="filter"
          @complete="search"
          placeholder="Search..."
          class="search-input"
        />
        <Button
          icon="pi pi-search"
          severity="primary"
          size="small"
          @click="handle_search"
        />
      </div>
    </template>
  </Menubar>
</template>

<style scoped>
.search-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding-right: 15px;
}

.search-input {
  flex: 1;
}

:deep(.p-autocomplete) {
  width: 100%;
}

:deep(.p-autocomplete .p-autocomplete-input) {
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid var(--p-surface-border);
  font-size: 0.95rem;
}

:deep(.p-autocomplete .p-autocomplete-input:focus) {
  border-color: var(--p-primary-color);
  box-shadow: 0 0 0 0.2rem rgba(var(--p-primary-rgb), 0.1);
}
</style>
