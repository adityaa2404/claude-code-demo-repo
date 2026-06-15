# Decision 001 — Tech Stack Selection

**Date:** 2026-06-14  
**Status:** Decided

---

## Context
Building a personal portfolio website for GitHub user `adityaa2404`. Needs to be containerized, served via nginx, and exposed via ngrok. Must support phase-wise development where Phase 2 adds a backend and database.

## Decisions

### Frontend: React + Vite
**Chosen over:** Create React App, Next.js, plain HTML  
**Reason:** User is comfortable with React (majority of repos are JS/TS). Vite is significantly faster than CRA for dev and build. Next.js was skipped because there is no SSR/SSG need — it's a static portfolio served by nginx. Vite output is a plain static build that nginx can serve directly with no Node.js runtime needed in the container.

### Styling: TailwindCSS
**Chosen over:** CSS Modules, Styled Components, plain CSS  
**Reason:** TailwindCSS is the fastest way to build a consistent dark hacker theme with utility classes. Pairs cleanly with Vite.

### Data: GitHub Public API
**Chosen over:** Hardcoded data, a CMS  
**Reason:** User explicitly wants live GitHub data. The four target repos (legal-assist, algo-lens, bill-master, cyber-trace) are public so no auth token is needed for Phase 1. Rate limit (60 req/hr unauthenticated) is more than sufficient for a portfolio.

### Infrastructure: docker-compose (single service now, multi-service later)
**Chosen over:** Single Dockerfile only, Kubernetes  
**Reason:** Starting with `docker-compose` even for Phase 1 (nginx only) means Phase 2 backend and database are additive — just new services in the same file. No structural changes needed. Avoids a painful migration later.

### Web Server: Nginx
**Reason:** Lightweight, purpose-built for static file serving. Configured to handle React SPA client-side routing (all routes return `index.html`).

### Public Tunnel: ngrok (free tier)
**Chosen over:** Cloudflare Tunnel, localtunnel  
**Reason:** ngrok is the most widely used and simplest to set up. Free tier gives a dynamic URL per session — acceptable for Phase 1 demo/testing. Upgrade to ngrok paid static domain or a real domain + cloud hosting when going permanently public.

### Build: Multi-stage Dockerfile
**Reason:** Stage 1 uses Node to run `vite build`, Stage 2 copies the `dist/` output into an nginx image. The final image has no Node.js runtime, keeping it small and secure.
