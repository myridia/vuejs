<script setup>
  import Menubar from 'primevue/menubar';
import { ref } from "vue";


import { inject } from 'vue'


import { useRouter } from 'vue-router';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import 'primeicons/primeicons.css'
const router = useRouter();
import AutoComplete from 'primevue/autocomplete';
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
            router.push('/');
        }
    },
    {
        label: 'About',
        icon: 'pi pi-link',
        command: () => {
            router.push('/about');
        }
    },
    {
        label: 'Contact',
	icon: 'pi pi-envelope',
        command: () => {
            router.push('/contact');
        }
    },

    {
        label: 'Login',
	icon: 'pi pi-user',
        command: () => {
            router.push('/login');
        }
    },            

])






const search = (event) => {
    xitems.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
;

const value = ref(null);
const xitems = ref([]);


//const ButtonComponent = inject('a2d')



function  handle_search() {

  console.log("xxxxxxX");
}

function  handle_a2d() {

  console.log("...add to desktop");
}




</script>






<template>
<Menubar :model="items" >

  
 <template #start>
      <a href="/"><img alt="logo" src="/img/logo.png" height="40" /></a>
 </template>


  
    <template  #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span>{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
    </template>



    <template #end>
      <div class="search-container">

    <Button2 label="Add to Desktop"  
      @click="handle_a2d" class="custom_wrap_button"
    />

    <AutoComplete 
      v-model="value" 
      :suggestions="xitems" 
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
  
  .custom_wrap_button {
   white-space: nowrap;
  }
  
  .search-container {

  display: flex;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  max-width: 400px;
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
