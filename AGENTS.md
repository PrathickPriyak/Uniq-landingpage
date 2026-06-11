# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

Single Next.js 16 (App Router) landing page for **UniqJobs** — a software training & placement institute. No database, no Docker, no monorepo.

### Scripts (see `package.json`)

| Command | Purpose |
|---|---|
| `pnpm dev` | Start dev server on port 3000 (Turbopack) |
| `pnpm build` | Production build |
| `pnpm lint` | Lint — **eslint is not installed**; this script currently fails. Use `npx tsc --noEmit` for type checking instead. |

### Caveats

- The project source lives inside `uniq-landingpage.zip` at the repo root. The update script extracts it automatically if `package.json` is missing.
- The lead capture form (`POST /api/lead`) requires `EMAIL_USER` and `EMAIL_PASS` environment variables (Gmail SMTP) to send emails. Without them the form validates and processes correctly but returns "Email service not configured." This is fine for local development.
- No automated test suite exists in this project.
- `sharp` build scripts are blocked by pnpm's default policy; the warning is harmless for dev since Next.js `images.unoptimized` is `true` in `next.config.mjs`.
