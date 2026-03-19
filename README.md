#  BudgetFlix Monorepo

> Frontend and shared packages for the BudgetFlix streaming platform.

---

##  Overview

This repository contains the **client-side architecture** of BudgetFlix.

It includes:

*  The web application (Next.js)
*  Shared frontend packages (API layer, hooks, UI, types)

 Backend services (Spring Boot, FFmpeg, streaming pipeline) live in a **separate repository**.

---

##  Structure

```id="l0s9fj"
apps/
  web/                → Next.js frontend (App Router)

packages/
  core/               → domain models (Movie, etc.)
  api/                → data fetching layer (no React)
  features/           → business logic (React hooks)
  ui/                 → UI components (Tamagui)
```

---

##  Architecture

We follow a **layered frontend architecture**:

```id="k3d9sl"
api       → data fetching
features  → business logic (hooks)
ui        → presentation
web       → pages & routing
```

### Principles

* No direct API calls in UI
* No business logic in pages
* Hooks manage state and orchestration
* API layer is framework-agnostic
* UI is reusable and isolated

---

##  Data Flow

```id="q91ksl"
API → Features → UI → Pages
```

Example:

* `getMovies()` → fetch data (`@budgetflix/api`)
* `useMovies()` → manage state (`@budgetflix/features`)
* `MovieList` → render UI (`@budgetflix/ui`)
* `/movie/[id]` → route (`apps/web`)

---

##  Tech Stack

* Next.js 14 (App Router)
* React 18
* TypeScript
* Tamagui
* pnpm workspaces

---

##  Why Monorepo?

* Shared domain types (`@budgetflix/core`)
* Centralized API layer
* Reusable UI components
* Clean separation of concerns
* Easier scaling (mobile, desktop, etc.)

---

##  Getting Started

```bash id="x8sd2k"
pnpm install
pnpm dev
```

Or run only the web app:

```bash id="9sk2la"
pnpm --filter web dev
```

---

##  Future Scope

* Mobile app (React Native using shared packages)
* Design system expansion
* Advanced state management patterns
* Offline-first support

---

##  Philosophy

> Build once, reuse everywhere.

We aim for:

* modular architecture
* predictable data flow
* minimal coupling
* maximum reusability

---


