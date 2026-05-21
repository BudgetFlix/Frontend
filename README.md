# BudgetFlix Frontend

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=190&color=0:00ADD8,45:111827,100:E50914&text=BudgetFlix&fontColor=ffffff&fontSize=56&fontAlignY=36&desc=An%20early-stage%20streaming%20frontend%20monorepo&descAlignY=58&animation=fadeIn" alt="BudgetFlix banner" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Early%20Prototype-E50914?style=for-the-badge" alt="Status: Early Prototype" />
  <img src="https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=111111" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/pnpm-Workspace-F69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm workspace" />
  <img src="https://img.shields.io/badge/Tamagui-UI-24A1C1?style=for-the-badge" alt="Tamagui UI" />
  <img src="https://img.shields.io/badge/HLS.js-Video-FF5A5F?style=for-the-badge" alt="HLS.js" />
</p>

<p align="center">
  <b>BudgetFlix is the frontend foundation for a budget-friendly streaming platform.</b><br />
  It is currently very early, intentionally small, and focused on proving the architecture before the product gets bigger.
</p>

---

## What This Is

BudgetFlix is a TypeScript monorepo that contains the web client and shared frontend packages for a streaming experience. The project already sketches out the core shape of the app:

- a Next.js web application with App Router
- shared domain models for movies
- a framework-light API layer
- React hooks for feature logic
- reusable UI components powered by Tamagui
- an HLS-ready video player component

This repository is **not a finished product yet**. It is a first foundation: clean structure first, bigger features later.

---

## Current Preview

The app currently includes a simple movie list flow using mock data and an early movie detail/video direction. The goal at this stage is to validate how the layers talk to each other before adding full backend integration, authentication, payments, recommendation logic, or a polished catalogue experience.

```txt
API -> Features -> UI -> Web App
```

---

## Monorepo Structure

```txt
apps/
  web/                Next.js frontend app

packages/
  core/               Shared domain models, mappers, navigation contracts
  api/                Data fetching functions
  features/           React hooks and feature orchestration
  ui/                 Reusable Tamagui UI components
```

---

## Architecture

BudgetFlix follows a layered frontend architecture:

```txt
@budgetflix/core
        |
@budgetflix/api
        |
@budgetflix/features
        |
@budgetflix/ui
        |
apps/web
```

### Principles

- Keep domain types in `core`
- Keep fetching logic outside UI components
- Use hooks for state and feature orchestration
- Keep pages focused on routing and composition
- Build UI components so they can be reused later
- Let the monorepo grow into web, mobile, and shared experiences over time

---

## Tech Stack

| Area | Tools |
| --- | --- |
| App | Next.js 14, React 18 |
| Language | TypeScript |
| Workspace | pnpm workspaces |
| UI | Tamagui |
| Video | HLS.js |
| Structure | Modular frontend packages |

---

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the web app:

```bash
pnpm --filter web dev
```

Build the web app:

```bash
pnpm --filter web build
```

Lint the web app:

```bash
pnpm --filter web lint
```

---

## Package Responsibilities

### `@budgetflix/core`

Contains shared domain definitions such as the `Movie` model, mapping helpers, and navigation contracts.

### `@budgetflix/api`

Contains data access functions. This keeps networking concerns away from UI components and pages.

### `@budgetflix/features`

Contains React hooks such as movie loading, stream loading, and navigation orchestration.

### `@budgetflix/ui`

Contains reusable presentation components such as movie cards, lists, buttons, and the video player.

### `apps/web`

Composes everything into the actual Next.js application.

---

## Roadmap

- Replace mock data with real backend responses
- Expand the movie detail page
- Improve the streaming flow and error states
- Add loading, empty, and failure UI states
- Add authentication and user profiles
- Build a richer catalogue browsing experience
- Grow the shared design system
- Add tests once the first stable flows settle

---

## Project Status

This project is in a **very early prototype phase**. Expect rough edges, missing features, and changing APIs. The important part is that the foundation is already pointing in a scalable direction:

> small packages, clear responsibilities, and a streaming app that can grow without becoming messy.

---

## Vision

BudgetFlix aims to become a lean, modular streaming frontend that can evolve from a simple movie list into a real multi-platform experience.

Build the structure. Prove the flow. Then make it feel like cinema.
