#  BudgetFlix Web

> Frontend application for BudgetFlix — built with Next.js, clean architecture, and a modular UI system.

---

## ✨ Overview

This is the **web client** of BudgetFlix, responsible for:

*  Browsing movies
* ▶ Playing HLS streams
*  Navigation & routing
*  Rendering UI components

The app is built on top of a **layered frontend architecture** to keep logic clean, reusable, and scalable.

---

##  Architecture

The frontend does **not** directly fetch or manage everything itself.
Instead, it composes functionality from shared packages:

```
web (Next.js app)
   ↓
features  → business logic (hooks)
   ↓
api       → data fetching
   ↓
core      → types
```

UI is handled separately:

```
ui → reusable components (Tamagui)
```

---

##  Example Flow

1. Page loads `/movie/[id]`
2. `useStream(id)` is called (from `@budgetflix/features`)
3. `getStreamUrl(id)` runs (from `@budgetflix/api`)
4. URL is returned
5. `VideoPlayer` plays the HLS stream

---

##  Routing

Using **Next.js App Router**:

```
app/
  movie/
    [id]/
      page.tsx
```

Navigation is abstracted to avoid tight coupling to Next.js.

---

##  UI System

The UI is built using **Tamagui**:

* Cross-platform ready
* Styled components
* Themeable design system

All components come from:

```
@budgetflix/ui
```

---

##  Tech Stack

* Next.js 14 (App Router)
* React 18
* TypeScript
* Tamagui

---

##  Getting Started

### Install dependencies (from root)

```bash
pnpm install
```

### Run the web app

```bash
pnpm --filter web dev
```

### Build

```bash
pnpm --filter web build
```

---

## Project Structure

```
apps/web/
  app/              → routes (Next.js App Router)
  components/       → local components (if needed)
  lib/              → helpers, utilities
```

---

##  Design Principles

* No business logic in pages
* No direct API calls in UI
* Hooks handle logic (`features`)
* API layer is pure (no React)
* UI is reusable and isolated

---

##  Future Improvements

* Loading skeletons
* Error boundaries
* Keyboard navigation

---

##  Debugging Tips

* Check API responses in `@budgetflix/api`
* Ensure stream endpoint returns valid HLS URL
* Verify Nginx is serving `.m3u8` correctly

---

## Notes

This app is part of the **BudgetFlix monorepo**.
Do not duplicate logic — always use shared packages.

---
