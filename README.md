# ![libre-jqgrid](public/img/logo.png) Vuejs Starter 

* Demo https://vuejs.myridia.com

# Vue.js Starter with PrimeVue, PWA, OPFS, and WASM SQLite3

This project is a Vue.js starter template designed to provide a solid foundation for building modern web applications with a focus on performance, offline capabilities, and data persistence. It includes pre-configured features like single-page routing, PrimeVue CSS examples, Progressive Web App (PWA) support, "Add to Desktop" functionality, Origin Private File System (OPFS) integration, and a WASM assembly build of SQLite3.

## Features

*   **Vue.js:** Utilizes the Vue.js framework for building reactive and component-based user interfaces.
*   **Single Router:** Configured with Vue Router for seamless navigation between different views within the application.
*   **PrimeVue CSS Examples:** Includes examples of using PrimeVue, a rich set of UI components for Vue.js, along with pre-configured CSS styling.
*   **Progressive Web App (PWA):** Implemented with PWA capabilities, allowing users to install the application on their devices and access it offline.
*   **Add to Desktop PWA:** Supports the "Add to Desktop" feature, enabling users to create a shortcut to the application on their desktop or home screen.
*   **Origin Private File System (OPFS):** Integrates with the Origin Private File System (OPFS) API, providing a sandboxed file system for storing and retrieving data within the browser.
*   **WASM Assembly Build SQLite3:** Includes a WebAssembly (WASM) build of SQLite3, enabling efficient and persistent data storage within the browser using a relational database.


## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/myridia/vuejs.git
    cd vuejs
    ```

2.  **Install dependencies:**

    ```bash
    npm install  # or yarn install or pnpm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev # or yarn dev or pnpm dev
    ```

    This will start the development server and open the application in your browser.

## Project Structure

```
vuejs/
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
└── ...
```

## Configuration

*   **Vite:** The project is configured using Vite, a fast and lightweight build tool for modern web development.  Configuration is in `vite.config.js`.
*   **PrimeVue:** PrimeVue components and styling can be customized in the `src/components` and `src/assets` directories.
*   **PWA:** The PWA configuration is typically handled through a Vite plugin.  Refer to the plugin's documentation for specific configuration options.
*   **OPFS:**  OPFS integration can be found in the relevant components or services that utilize the file system API.
*   **WASM SQLite3:** The WASM build of SQLite3 is typically integrated using a JavaScript wrapper library.  Refer to the library's documentation for usage instructions.

## Usage Examples

*   **PrimeVue Components:**

    ```vue
    <template>
      <Button label="Click Me" @click="handleClick" />
    </template>

    <script setup>
    import { Button } from 'primevue/button';

    const handleClick = () => {
      alert('Button clicked!');
    };
    </script>
    ```

*   **OPFS Example (Conceptual):**

    ```javascript
    // Example of writing to a file in OPFS (This is a simplified example)
    async function writeFile(filename, data) {
      const root = await navigator.storage.getDirectory();
      const fileHandle = await root.getFileHandle(filename, { create: true });
      const writable = await fileHandle.createWritable();
      await writable.write(data);
      await writable.close();
    }
    ```

*   **WASM SQLite3 Example (Conceptual):**

    ```javascript
    // Example of using WASM SQLite3 (This is a simplified example)
    // Requires a WASM SQLite3 library to be imported and initialized
    const db = new SQLiteDatabase('mydatabase.db');
    await db.open();
    await db.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)');
    await db.execute('INSERT INTO users (name) VALUES (?)', ['John Doe']);
    const results = await db.execute('SELECT * FROM users');
    console.log(results);
    await db.close();
    ```

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bug fixes, feature requests, or improvements to the documentation.  By contributing to this project, you agree to license your contributions under the GNU GPLv3 license.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).  See the `LICENSE` file for details.  A copy of the license is also available at [https://www.gnu.org/licenses/gpl-3.0.en.html](https://www.gnu.org/licenses/gpl-3.0.en.html).

---

**IMPORTANT:**

1.  **Create a `LICENSE` file:**  You *must* create a file named `LICENSE` in the root of your repository and paste the full text of the GNU GPLv3 license into it.  You can find the license text here: [https://www.gnu.org/licenses/gpl-3.0.txt](https://www.gnu.org/licenses/gpl-3.0.txt).

2.  **Verify the License:**  Double-check that the `LICENSE` file contains the correct and complete GNU GPLv3 license text.

3.  **Understand the GPLv3:**  Make sure you understand the terms and conditions of the GNU GPLv3 license before using or distributing this project.  It's a copyleft license, which means that any derivative works must also be licensed under the GPLv3.
```


## Comaptible 
* iPhone 15 Pro Max - NO
* Version 26.3.1 (21623.2.7.11.7) - OPFS Yes A2D No

## Extra Codeberg Repository
```
git remote add codeberg ssh://git@codeberg.org/veto/vuejs.git
```## Comaptible 
* iPhone 15 Pro Max - NO
* Version 26.3.1 (21623.2.7.11.7) - OPFS Yes A2D No

## Extra Codeberg Repository

```bash
  git remote add codeberg ssh://git@codeberg.org/veto/vuejs.git
```

