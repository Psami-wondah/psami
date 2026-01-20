FROM node:20-alpine AS build

WORKDIR /app

# pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile  # IMPORTANT: no --prod here

COPY . .
RUN pnpm build
