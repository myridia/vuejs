# Project: vuejs

## Overview
Vue.js starter template with PrimeVue, PWA, OPFS, and WASM SQLite3.

## Stack
- Vue 3 + Vite 7
- PrimeVue 4 (Aura theme)
- PWA via `vite-plugin-pwa`
- WASM SQLite3 (`@sqlite.org/sqlite-wasm`) with OPFS
- Vue Router 5
- PapaParse (CSV import/export)

## Hosted
- Demo: https://vuejs.myridia.com

## Project Structure
- `src/views/` — Home, Table, Contact (3 routes)
- `src/components/` — Add2Desktop, Table, Menubar, Breadcrumb, Add_Securities, Contact_Form, Log
- `src/services/` — `db_worker.js` (Web Worker + WASM SQLite3), `Products.js` (mock data)
- `src/models/` — `Product.js`
- `src/plugins/` — `logService.js`, `Workers.js` (worker message bus)

## Dev Setup
```bash
npm install
npm run dev
```

## Key Architecture
- **Web Worker**: `db_worker.js` runs WASM SQLite3 in a Web Worker with OPFS for persistence
- **Worker messaging**: `Workers.js` plugin provides `post_message(worker, id, payload)` pattern
- **PWA**: Auto-update mode, manifest in `vite.config.js`, Add2Desktop via `Add2Desktop.vue`
- **SQLite DB**: `securities.sqlite` with table `securities(id, name, code, qty)`

## Notes
- COOP/COEP headers required for OPFS WASM (configured in `vite.config.js`)
- Global components registered in `main.js`
- `Product.js` model is unused (mock data in `Products.js`)
- `Login.vue` exists but not wired into router
