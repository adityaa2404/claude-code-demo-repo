# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal portfolio website for GitHub user `adityaa2404`. Phase 1 is a static React + Vite frontend served by nginx inside Docker, exposed via ngrok. Phase 2 will add a Node.js backend and MongoDB. See `decisions/` for full rationale.

## Commands

### Local development (no Docker)
```bash
cd portfolio
npm install
npm run dev          # Vite dev server at localhost:5173
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
npm run lint         # ESLint
```

### Docker
```bash
docker compose up --build        # Build and start (nginx on port 80)
docker compose up -d             # Detached mode
docker compose down              # Stop and remove containers
docker compose build --no-cache  # Force full rebuild
```

### ngrok (run after docker compose up)
```bash
ngrok http 80
```

### Run a single test (Phase 2, once tests exist)
```bash
cd portfolio && npm test -- --testPathPattern=<filename>
```

## Architecture

### Phase 1 structure
```
full-cc/
├── portfolio/          # React + Vite app
│   └── src/
│       ├── sections/   # Full-page sections (Hero, About, Skills, Projects, Contact)
│       ├── components/ # Reusable UI atoms (Card, Button, Tag, etc.)
│       ├── hooks/      # Custom hooks — useGitHubProjects fetches GitHub API
│       └── assets/
├── nginx/nginx.conf    # SPA routing + commented Phase 2 API proxy block
├── docker-compose.yml  # nginx service now; backend + db commented for Phase 2
└── Dockerfile          # Multi-stage: node (vite build) → nginx (serve dist/)
```

### Key data flow
- Projects are fetched **client-side** by `useGitHubProjects` hook from `api.github.com/users/adityaa2404/repos` (unauthenticated, public).
- Featured repos: `legal-assist`, `algo-lens`, `bill-master`, `cyber-trace`.
- Contact section uses `mailto:` in Phase 1 — no backend.

### Phase 2 additions (don't implement yet)
- `server/` — Express/Node backend as a new docker-compose service.
- nginx `/api/*` proxy to backend (block already commented in `nginx.conf`).
- MongoDB as a third docker-compose service.
- Contact form POSTs to backend instead of `mailto:`.

## Context Management

- `tasks.md` — tracks all tasks with status (`[ ]` todo, `[~]` in progress, `[x]` done).
- `decisions/` — ADR-style logs for every major decision. Read these before changing architecture.
  - `001-tech-stack.md` — why React/Vite/Tailwind/nginx/docker-compose/ngrok.
  - `002-project-structure.md` — folder layout and rationale.
  - `003-phase-plan.md` — what belongs in Phase 1 vs Phase 2, and boundary rules.

## Theme

Dark hacker aesthetic. TailwindCSS. Think terminal greens / cyans on near-black backgrounds, monospace accents, subtle glow effects on cards and borders.
