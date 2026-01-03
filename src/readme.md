OneCredit -- React Native (Expo) Fintech App
==============================================

A scalable, offline-first business ledger application built using **React Native + Expo Router**, designed to support **1M+ users** with background sync, modular architecture, and enterprise-level separation of concerns.

* * * * *

🧱 Architecture Overview
------------------------

-   **Feature-first architecture**

-   **Expo Router--based navigation**

-   **Offline-first data layer**

-   **API & UI fully separated**

-   **Scalable & maintainable**

* * * * *

📂 Root Folder Structure
------------------------

`app/        → Navigation & screens (Expo Router)
src/        → Business logic & features
assets/     → Fonts, icons, images
scripts/    → Dev & automation scripts`

* * * * *

🧭 `app/` -- Navigation Layer (Expo Router)
------------------------------------------

Handles **routing, layouts, and screen composition only**.\
No business logic here.

`app/
│── _layout.js
│── (auth)/
│── (tabs)/
│── modal/`

### Purpose

-   Defines **navigation flow**

-   Wraps global providers (theme, auth, store)

-   Keeps UI routing isolated from logic

### Key Concepts

-   `(auth)` → Authentication stack

-   `(tabs)` → Bottom tab navigation

-   `modal/` → Bottom sheets / modal screens

* * * * *

🧠 `src/` -- Application Core
----------------------------

Contains **all business logic**, organized **feature-first**.

* * * * *

🚀 `src/features/` -- Feature Modules
------------------------------------

Each feature is **self-contained**.

`features/
│── ledger/
│── billing/
│── inventory/
│── employees/
│── reports/
│── auth/`

### Each Feature Contains:

`components/   → Feature-specific UI
hooks/        → Feature hooks
services.js   → API & data logic
store.js      → Feature state
types.js      → Feature types`

### Why?

-   Independent development

-   Easy scaling

-   Clean separation

-   Testable modules

* * * * *

🧩 `src/components/` -- Shared UI Components
-------------------------------------------

Reusable UI across the app.

`components/
│── ui/        → Buttons, cards, inputs
│── forms/     → Form components
│── lists/     → FlatList / Table UI
│── feedback/  → Loaders, toasts, alerts`

* * * * *

🌐 `src/api/` -- API Layer
-------------------------

All server communication logic.

`api/
│── client.js        → Axios / fetch wrapper
│── endpoints.js     → API route definitions
│── interceptors.js  → Auth, retry, logging
│── errors.js        → Error handling`

### Benefits

-   Centralized API handling

-   Easy retry & offline queue

-   Cleaner services layer

* * * * *

💾 `src/data/` -- Offline & Sync Layer
-------------------------------------

Offline-first architecture.

`data/
│── database/
│── repositories/
│── sync/`

### Responsibilities

-   Local database (SQLite)

-   Repository pattern

-   Background sync

-   Conflict resolution

#### `database/`

-   Schema

-   Migrations

-   DB initialization

#### `repositories/`

-   Data access abstraction

-   Local + remote logic

#### `sync/`

-   Background sync tasks

-   Retry queues

-   Conflict handling

* * * * *

🗃️ `src/store/` -- Global State
-------------------------------

`store/
│── index.js
│── app.store.js
│── auth.store.js`

Handles:

-   Authentication state

-   App-wide flags

-   User session

* * * * *

🪝 `src/hooks/` -- Global Hooks
------------------------------

Reusable logic hooks.

`hooks/
│── useAuth.js
│── useNetwork.js
│── useSync.js`

Examples:

-   Network detection

-   Auth session handling

-   Sync triggers

* * * * *

🎨 `src/theme/` -- Design System
-------------------------------

Centralized styling.

`theme/
│── colors.js
│── spacing.js
│── typography.js
│── index.js`

Ensures:

-   Consistent UI

-   Easy theme updates

-   Scalable branding

* * * * *

📌 `src/constants/` -- Static Values
-----------------------------------

`constants/
│── app.js
│── storage.js
│── roles.js
│── routes.js`

Used for:

-   App configuration

-   Storage keys

-   Role permissions

-   Route names

* * * * *

🛠️ `src/utils/` -- Helper Functions
-----------------------------------

`utils/
│── currency.js
│── date.js
│── validators.js
│── logger.js`

Reusable utility logic.

* * * * *

🧾 `src/types/` -- Global Types
------------------------------

`types/
│── api.js
│── entities.js
│── navigation.js
│── common.js`

Ensures:

-   Type safety

-   Consistent data contracts

-   Cleaner APIs

* * * * *

⚙️ `src/config/` -- App Configuration
------------------------------------

`config/
│── env.js
│── feature-flags.js
│─`