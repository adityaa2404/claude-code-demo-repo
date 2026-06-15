# tasks.md — Portfolio Website

Status legend: `[ ]` todo · `[~]` in progress · `[x]` done · `[!]` blocked

---

## Phase 1 — Static Frontend (Current)

### Project Scaffold
- [x] Initialize Vite + React project inside `portfolio/`
- [x] Install and configure TailwindCSS (v4 via @tailwindcss/vite)
- [x] Set up folder structure (`components/`, `sections/`, `hooks/`, `assets/`)
- [x] Remove vanilla TS boilerplate, wire up React entry point

### UI Sections
- [x] Layout shell — Navbar (sticky, mobile-responsive), Footer
- [x] Hero / landing section — typing effect, CTA buttons, avatar placeholder
- [x] About / Bio section — bio text + highlight cards
- [x] Skills section — categorized skill grid
- [x] Projects section — GitHub API cards with tags, stars, links
- [x] Contact section — terminal-style card + social links

### GitHub API Integration
- [x] Custom hook `useGitHubProjects` — fetches and filters featured repos
- [x] Featured: legal-assist, algo-lens, bill-master, cyber-trace
- [x] Manual metadata (descriptions, tags) merged with GitHub API data

### Styling & Theme
- [x] Global dark hacker theme (CSS custom properties, glow effects, scanline)
- [x] Grid background, radial glow, cursor blink
- [x] Responsive layout (mobile + desktop)
- [x] Typing effect on hero, card hover animations

### Docker & Infra
- [x] `Dockerfile` — multi-stage: Vite build → nginx serve
- [x] `docker-compose.yml` — nginx service (Phase 2 placeholders commented in)
- [x] `nginx/nginx.conf` — SPA routing, gzip, asset caching, Phase 2 proxy commented
- [x] `.dockerignore`
- [x] Vite build verified clean (`npm run build` ✓)
- [ ] Test full Docker build: `docker compose up --build` (blocked: Docker Desktop not running)
- [ ] Run ngrok and verify public URL

### Docs
- [x] `CLAUDE.md` updated with commands and architecture
- [x] `README.md` with setup and run instructions
- [x] `decisions/` — 3 ADR files (tech stack, structure, phase plan)

---

## Phase 2 — Backend + Database (Planned)

### Backend Service
- [ ] Scaffold Node.js / Express backend in `server/`
- [ ] Add backend service to `docker-compose.yml` (block already commented)
- [ ] REST API endpoints (contact form submission)

### Database
- [ ] Add MongoDB service to `docker-compose.yml` (block already commented)
- [ ] Schema for contact submissions

### Contact Form
- [ ] Wire frontend contact form to backend API (currently mailto)
- [ ] Email notification on submission

---

## Decisions Log
See `decisions/` folder for rationale behind all major choices.
