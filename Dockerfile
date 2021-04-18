###
# Build stage
###
FROM node:12-alpine AS builder
WORKDIR /builder

COPY package.json yarn.lock ./
COPY patches patches
RUN yarn --frozen-lockfile

COPY tsconfig.json next.config.js postcss.config.js tailwind.config.js ./
COPY api api
COPY assets assets
COPY components components
COPY pages pages
COPY styles styles
RUN NODE_OPTIONS='--inspect' yarn build && rm -rf .next/cache

###
# Exec Stage
###
FROM node:12-alpine
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --production --ignore-scripts
# RUN yarn --frozen-lockfile

COPY --from=builder /builder/.next .next
COPY --from=builder /builder/assets assets
COPY --from=builder /builder/next.config.js next.config.js

CMD ["yarn", "start"]