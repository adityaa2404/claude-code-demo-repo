# Portfolio — adityaa2404

Dark hacker-themed portfolio website. React + Vite frontend, served by nginx in Docker, exposed via ngrok.

## Run locally (dev mode)

```bash
cd portfolio
npm install
npm run dev        # http://localhost:5173
```

## Run via Docker

```bash
docker compose up --build    # builds and serves on http://localhost:80
docker compose up -d         # detached
docker compose down          # stop
```

## Expose via ngrok

`docker compose up`:

```bash
ngrok http 80
```

Copy the forwarding URL — that's your public portfolio link.

## Project structure

```
portfolio/     React + Vite app
nginx/         nginx.conf (SPA routing, Phase 2 proxy commented)
server/        Phase 2 backend (stub)
decisions/     Architecture decision records
tasks.md       Task tracker
Dockerfile     Multi-stage: node build → nginx serve
docker-compose.yml
```

