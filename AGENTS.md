# AGENTS.md — vuejs

## What this is
A Vue.js starter template with PrimeVue UI, PWA support, OPFS (Origin Private File System), and WASM SQLite3 for offline-capable web applications.

## Stack
- Vue.js 3
- Vite (build tool)
- PrimeVue (UI components)
- PWA (Progressive Web App)
- WASM SQLite3
- OPFS API

## Build
```bash
npm install
npm run dev
```

## Run
```bash
npm run dev
# Open http://localhost:5173
```

## Structure
- `src/` — Vue source code
  - `components/` — reusable Vue components
  - `router/` — Vue Router config
  - `views/` — page components
  - `App.vue` — root component
  - `main.js` — entry point
- `public/` — static assets
- `vite.config.js` — Vite config
- `index.html` — main HTML

## Conventions
- No comments in code unless asked.
- GPLv3 licensed.
- Verify: `npm run build`
