# Portfolio — adityaa2404

Dark hacker-themed portfolio website. React + Vite frontend, served by nginx in Docker, exposed via ngrok.

## Project Overview
This is a personal portfolio website for GitHub user `adityaa2404`. The website is built using React and Vite, and is served by nginx in a Docker container. It is exposed to the public via ngrok.

## Live Demo
[Live Demo Link](https://example.com)

## Tech Stack
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![nginx](https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## Local Development
```bash
cd portfolio
npm install
npm run dev        # http://localhost:5173
```

## Docker Setup
```bash
docker compose up --build    # builds and serves on http://localhost:80
docker compose up -d         # detached
docker compose down          # stop
```

## Expose via ngrok
```bash
docker compose up
grok http 80
```

## Project Structure
```
portfolio/     React + Vite app
nginx/         nginx.conf (SPA routing, Phase 2 proxy commented)
server/        Phase 2 backend (stub)
decisions/     Architecture decision records
tasks.md       Task tracker
Dockerfile     Multi-stage build for portfolio
docker-compose.yml
```

## Screenshots
![Screenshot 1](https://example.com/screenshot1.png)
![Screenshot 2](https://example.com/screenshot2.png)