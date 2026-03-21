<script setup>
import { ref, onMounted, inject } from "vue";
const items = ref([]);
</script>

<template>
<Breadcrumb :items="items" />


  <h1>Vue.js Starter with PrimeVue, PWA, OPFS, and WASM SQLite3</h1>

    <p>This project is a Vue.js starter template designed to provide a solid foundation for building modern web applications with a focus on performance, offline capabilities, and data persistence. It includes pre-configured features like single-page routing, PrimeVue CSS examples, Progressive Web App (PWA) support, "Add to Desktop" functionality, Origin Private File System (OPFS) integration, and a WASM assembly build of SQLite3.</p>

    <h2>Features</h2>

    <ul>
        <li><strong>Vue.js:</strong> Utilizes the Vue.js framework for building reactive and component-based user interfaces.</li>
        <li><strong>Single Router:</strong> Configured with Vue Router for seamless navigation between different views within the application.</li>
        <li><strong>PrimeVue CSS Examples:</strong> Includes examples of using PrimeVue, a rich set of UI components for Vue.js, along with pre-configured CSS styling.</li>
        <li><strong>Progressive Web App (PWA):</strong> Implemented with PWA capabilities, allowing users to install the application on their devices and access it offline.</li>
        <li><strong>Add to Desktop PWA:</strong> Supports the "Add to Desktop" feature, enabling users to create a shortcut to the application on their desktop or home screen.</li>
        <li><strong>Origin Private File System (OPFS):</strong> Integrates with the Origin Private File System (OPFS) API, providing a sandboxed file system for storing and retrieving data within the browser.</li>
        <li><strong>WASM Assembly Build SQLite3:</strong> Includes a WebAssembly (WASM) build of SQLite3, enabling efficient and persistent data storage within the browser using a relational database.</li>
    </ul>


</template>

<style>


        body {
            font-family: sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3 {
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            line-height: 1.2;
        }
        h1 {
            font-size: 2em;
        }
        h2 {
            font-size: 1.6em;
        }
        h3 {
            font-size: 1.2em;
        }
        p {
            margin-bottom: 1em;
        }
        code {
            background-color: #f0f0f0;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: monospace;
        }
        pre {
            background-color: #f0f0f0;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
            font-family: monospace;
        }
        ul, ol {
            margin-bottom: 1em;
            padding-left: 20px;
        }
        li {
            margin-bottom: 0.5em;
        }
        a {
            color: #007bff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .important {
            color: red;
            font-weight: bold;
        }

</style>
