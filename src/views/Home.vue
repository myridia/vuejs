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

    <h2>Getting Started</h2>

    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/myridia/vuejs.git
cd vuejs</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>npm install  # or yarn install or pnpm install</code></pre>
        </li>
        <li><strong>Run the development server:</strong>
            <pre><code>npm run dev # or yarn dev or pnpm dev</code></pre>
            <p>This will start the development server and open the application in your browser.</p>
        </li>
    </ol>

    <h2>Project Structure</h2>

    <pre><code>vuejs/
├── public/              # Static assets (e.g., images, fonts)
├── src/                 # Source code
│   ├── assets/          # Application-specific assets
│   ├── components/      # Reusable Vue components
│   ├── router/            # Vue Router configuration
│   ├── views/             # Vue components representing different pages
│   ├── App.vue            # Root Vue component
│   ├── main.js            # Entry point for the application
│   └── ...
├── .gitignore           # Specifies intentionally untracked files that Git should ignore
├── index.html           # Main HTML file
├── package.json         # Project dependencies and scripts
├── README.md            # This file
├── vite.config.js       # Vite configuration file
├── LICENSE              # GNU GPLv3 License
└── ...</code></pre>

    <h2>Configuration</h2>

    <ul>
        <li><strong>Vite:</strong> The project is configured using Vite, a fast and lightweight build tool for modern web development. Configuration is in <code>vite.config.js</code>.</li>
        <li><strong>PrimeVue:</strong> PrimeVue components and styling can be customized in the <code>src/components</code> and <code>src/assets</code> directories.</li>
        <li><strong>PWA:</strong> The PWA configuration is typically handled through a Vite plugin. Refer to the plugin's documentation for specific configuration options.</li>
        <li><strong>OPFS:</strong> OPFS integration can be found in the relevant components or services that utilize the file system API.</li>
        <li><strong>WASM SQLite3:</strong> The WASM build of SQLite3 is typically integrated using a JavaScript wrapper library. Refer to the library's documentation for usage instructions.</li>
    </ul>

    <h2>Usage Examples</h2>

    <ul>
        <li><strong>PrimeVue Components:</strong>
            <pre><code>&lt;template&gt;
  &lt;Button label="Click Me" @click="handleClick" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { Button } from 'primevue/button';

const handleClick = () =&gt; {
  alert('Button clicked!');
};
&lt;/script&gt;</code></pre>
        </li>
        <li><strong>OPFS Example (Conceptual):</strong>
            <pre><code>// Example of writing to a file in OPFS (This is a simplified example)
async function writeFile(filename, data) {
  const root = await navigator.storage.getDirectory();
  const fileHandle = await root.getFileHandle(filename, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(data);
  await writable.close();
}</code></pre>
        </li>
        <li><strong>WASM SQLite3 Example (Conceptual):</strong>
            <pre><code>// Example of using WASM SQLite3 (This is a simplified example)
// Requires a WASM SQLite3 library to be imported and initialized
const db = new SQLiteDatabase('mydatabase.db');
await db.open();
await db.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)');
await db.execute('INSERT INTO users (name) VALUES (?)', ['John Doe']);
const results = await db.execute('SELECT * FROM users');
console.log(results);
await db.close();</code></pre>
        </li>
    </ul>

    <h2>Contributing</h2>

    <p>Contributions are welcome! Please feel free to submit pull requests or open issues for bug fixes, feature requests, or improvements to the documentation. By contributing to this project, you agree to license your contributions under the GNU GPLv3 license.</p>

    <h2>License</h2>

    <p>This project is licensed under the <a href="LICENSE">GNU General Public License v3.0</a>. See the <code>LICENSE</code> file for details. A copy of the license is also available at <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">https://www.gnu.org/licenses/gpl-3.0.en.html</a>.</p>

    <hr>

    <p class="important"><strong>IMPORTANT:</strong></p>
    <p class="important">You <strong>must</strong> create a file named <code>LICENSE</code> in the root of your repository and paste the full text of the GNU GPLv3 license into it. You can find the license text here: <a href="https://www.gnu.org/licenses/gpl-3.0.txt">https://www.gnu.org/licenses/gpl-3.0.txt</a>.</p>
    <p class="important">Double-check that the <code>LICENSE</code> file contains the correct and complete GNU GPLv3 license text.</p>
    <p class="important">Make sure you understand the terms and conditions of the GNU GPLv3 license before using or distributing this project. It's a copyleft license, which means that any derivative works must also be licensed under the GPLv3.</p>  <h1>Vue.js Starter with PrimeVue, PWA, OPFS, and WASM SQLite3</h1>

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

    <h2>Getting Started</h2>

    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/myridia/vuejs.git
cd vuejs</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>npm install  # or yarn install or pnpm install</code></pre>
        </li>
        <li><strong>Run the development server:</strong>
            <pre><code>npm run dev # or yarn dev or pnpm dev</code></pre>
            <p>This will start the development server and open the application in your browser.</p>
        </li>
    </ol>

    <h2>Project Structure</h2>

    <pre><code>vuejs/
├── public/              # Static assets (e.g., images, fonts)
├── src/                 # Source code
│   ├── assets/          # Application-specific assets
│   ├── components/      # Reusable Vue components
│   ├── router/            # Vue Router configuration
│   ├── views/             # Vue components representing different pages
│   ├── App.vue            # Root Vue component
│   ├── main.js            # Entry point for the application
│   └── ...
├── .gitignore           # Specifies intentionally untracked files that Git should ignore
├── index.html           # Main HTML file
├── package.json         # Project dependencies and scripts
├── README.md            # This file
├── vite.config.js       # Vite configuration file
├── LICENSE              # GNU GPLv3 License
└── ...</code></pre>

    <h2>Configuration</h2>

    <ul>
        <li><strong>Vite:</strong> The project is configured using Vite, a fast and lightweight build tool for modern web development. Configuration is in <code>vite.config.js</code>.</li>
        <li><strong>PrimeVue:</strong> PrimeVue components and styling can be customized in the <code>src/components</code> and <code>src/assets</code> directories.</li>
        <li><strong>PWA:</strong> The PWA configuration is typically handled through a Vite plugin. Refer to the plugin's documentation for specific configuration options.</li>
        <li><strong>OPFS:</strong> OPFS integration can be found in the relevant components or services that utilize the file system API.</li>
        <li><strong>WASM SQLite3:</strong> The WASM build of SQLite3 is typically integrated using a JavaScript wrapper library. Refer to the library's documentation for usage instructions.</li>
    </ul>

    <h2>Usage Examples</h2>

    <ul>
        <li><strong>PrimeVue Components:</strong>
            <pre><code>&lt;template&gt;
  &lt;Button label="Click Me" @click="handleClick" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { Button } from 'primevue/button';

const handleClick = () =&gt; {
  alert('Button clicked!');
};
&lt;/script&gt;</code></pre>
        </li>
        <li><strong>OPFS Example (Conceptual):</strong>
            <pre><code>// Example of writing to a file in OPFS (This is a simplified example)
async function writeFile(filename, data) {
  const root = await navigator.storage.getDirectory();
  const fileHandle = await root.getFileHandle(filename, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(data);
  await writable.close();
}</code></pre>
        </li>
        <li><strong>WASM SQLite3 Example (Conceptual):</strong>
            <pre><code>// Example of using WASM SQLite3 (This is a simplified example)
// Requires a WASM SQLite3 library to be imported and initialized
const db = new SQLiteDatabase('mydatabase.db');
await db.open();
await db.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)');
await db.execute('INSERT INTO users (name) VALUES (?)', ['John Doe']);
const results = await db.execute('SELECT * FROM users');
console.log(results);
await db.close();</code></pre>
        </li>
    </ul>

    <h2>Contributing</h2>

    <p>Contributions are welcome! Please feel free to submit pull requests or open issues for bug fixes, feature requests, or improvements to the documentation. By contributing to this project, you agree to license your contributions under the GNU GPLv3 license.</p>

    <h2>License</h2>

    <p>This project is licensed under the <a href="LICENSE">GNU General Public License v3.0</a>. See the <code>LICENSE</code> file for details. A copy of the license is also available at <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">https://www.gnu.org/licenses/gpl-3.0.en.html</a>.</p>

    <hr>

    <p class="important"><strong>IMPORTANT:</strong></p>
    <p class="important">You <strong>must</strong> create a file named <code>LICENSE</code> in the root of your repository and paste the full text of the GNU GPLv3 license into it. You can find the license text here: <a href="https://www.gnu.org/licenses/gpl-3.0.txt">https://www.gnu.org/licenses/gpl-3.0.txt</a>.</p>
    <p class="important">Double-check that the <code>LICENSE</code> file contains the correct and complete GNU GPLv3 license text.</p>
    <p class="important">Make sure you understand the terms and conditions of the GNU GPLv3 license before using or distributing this project. It's a copyleft license, which means that any derivative works must also be licensed under the GPLv3.</p>
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
