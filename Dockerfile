FROM node:20-bookworm-slim AS base

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN npm install -g pnpm@10.24.0

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN CI=true pnpm install --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN CI=true pnpm build

FROM base AS runner

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app ./

EXPOSE 3000

CMD ["pnpm", "start"]
