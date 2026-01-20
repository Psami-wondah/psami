FROM node:20-alpine AS build

WORKDIR /app

# Enable Yarn via Corepack (Node 20)
RUN corepack enable

# Copy dependency files first for cache
COPY package.json yarn.lock ./

# Install deps INCLUDING devDependencies
RUN yarn install --frozen-lockfile

# Copy source
COPY . .

# Build (TypeScript / Next.js / MDX)
RUN yarn build
