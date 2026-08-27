# Newzella App

Nuxt 4 migration workspace for the Newzella brand-refresh concepts.

## Routes

- `/` — Konzept 01: Laib & Leben
- `/variant-1` — Alias für Konzept 01
- `/variant-2` — Konzept 02: Die Backstube
- `/variant-3` — Konzept 03: Gebäck mit Anlass
- `/variant-4` — Konzept 04: Wo Geschmack beginnt

## Local development

```bash
pnpm install
pnpm dev
```

The first pass keeps the approved Imgur URLs in `app/data/newzella-content.ts` and mirrors those assets into `public/images/` so the local preview remains deterministic even when a headless browser blocks remote media. The concept CSS stays close to the reviewed HTML prototypes.
