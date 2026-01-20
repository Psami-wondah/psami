FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY . /app

RUN pnpm install
RUN pnpm build
