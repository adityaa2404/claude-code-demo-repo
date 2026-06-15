# Decision 002 — Project & Folder Structure

**Date:** 2026-06-14  
**Status:** Decided

---

## Chosen Structure

```
full-cc/
├── portfolio/               # React + Vite app (Phase 1)
│   ├── src/
│   │   ├── components/      # Reusable UI primitives (Button, Card, Tag, etc.)
│   │   ├── sections/        # Full-page sections (Hero, About, Skills, Projects, Contact)
│   │   ├── hooks/           # Custom hooks (useGitHubProjects, etc.)
│   │   ├── assets/          # Static assets (images, icons)
│   │   └── styles/          # Global CSS / Tailwind base
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server/                  # (Phase 2) Node.js / Express backend
├── nginx/
│   └── nginx.conf           # Nginx config for SPA + Phase 2 API proxy
├── docker-compose.yml       # Orchestrates all services
├── Dockerfile               # Multi-stage build for portfolio
├── .dockerignore
├── decisions/               # ADR-style decision logs
├── tasks.md                 # Task tracker
├── README.md
└── CLAUDE.md
```

## Rationale

- `portfolio/` is isolated so the React app can be developed and tested independently with `npm run dev` before touching Docker.
- `sections/` vs `components/` split keeps large page-level sections separate from reusable atoms — avoids a monolithic `components/` folder.
- `nginx/nginx.conf` lives outside the Dockerfile so it can be volume-mounted for config changes without rebuilding the image.
- `server/` is stubbed as an empty directory in Phase 1 as a placeholder — makes the Phase 2 addition feel like filling in a gap, not restructuring.
- `decisions/` follows lightweight ADR (Architecture Decision Record) style for context management across Claude Code sessions.
