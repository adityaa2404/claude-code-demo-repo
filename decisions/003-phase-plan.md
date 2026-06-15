# Decision 003 — Phase-wise Development Plan

**Date:** 2026-06-14  
**Status:** Decided

---

## Phase 1 — Static Portfolio (Current Focus)

**Goal:** A fully styled, deployed portfolio accessible via ngrok with no backend.

**Deliverables:**
- React + Vite app with dark hacker theme
- Sections: Hero, About, Skills, Projects (GitHub API), Contact (mailto)
- Dockerized: multi-stage build → nginx
- docker-compose with nginx service
- ngrok exposing port 80

**GitHub API usage in Phase 1:**
- Fetch from `https://api.github.com/users/adityaa2404/repos`
- Filter to: `legal-assist`, `algo-lens`, `bill-master`, `cyber-trace`
- No API key — unauthenticated public access (60 req/hr limit is fine)
- Fetch happens client-side on page load via a custom React hook

**Contact in Phase 1:**
- `mailto:` link (no form submission, no backend)

---

## Phase 2 — Backend + Database

**Goal:** Add persistence and dynamic features without changing the frontend structure.

**Planned additions:**
- `server/` — Node.js/Express (or FastAPI) REST API
- New service in `docker-compose.yml` for backend
- New service in `docker-compose.yml` for database (MongoDB preferred, aligns with user's BillMaster stack)
- Contact form POSTs to backend API → stores in DB → sends email notification
- Optional: GitHub API calls proxied through backend to avoid rate limits and add caching
- Optional: Admin panel or blog

**Frontend changes in Phase 2:**
- Contact section: swap `mailto:` for a real form with fetch/axios to backend
- Projects section: optionally fetch from backend instead of directly from GitHub API (for caching, custom metadata)
- nginx proxy: `/api/*` routes proxied to backend service (already planned in nginx.conf)

---

## Phase Boundary Design Principles

1. Phase 1 frontend code should not hardcode assumptions that break in Phase 2.
2. The GitHub API hook should be written to accept a data source prop/config so it can later point to a backend endpoint instead.
3. nginx.conf includes a commented-out `location /api/` proxy block from day one.
4. docker-compose.yml includes commented-out backend and db service definitions from day one.
