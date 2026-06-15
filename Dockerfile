# Stage 1 — build
FROM node:20-alpine AS builder
WORKDIR /app
COPY portfolio/package*.json ./
RUN npm ci
COPY portfolio/ .
RUN npm run build

# Stage 2 — serve
FROM nginx:alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
