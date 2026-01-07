FROM node:20-alpine

# Install and link the charts
WORKDIR /app

COPY . /app

RUN yarn install
RUN yarn build

