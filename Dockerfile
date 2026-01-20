FROM node:20-alpine

# Install and link the charts
WORKDIR /app

COPY . /app

RUN pnpm install
RUN pnpm build

