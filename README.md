# Newzella App

Nuxt 4 workspace holding four brand-refresh concepts for Newzella, a family-run bakery and confectionery business in Köln, Leverkusen and Pulheim. Each concept is a full route, so visual directions can be compared side by side before one is chosen.

> Work in progress. This workspace holds the design decisions for Newzella in Köln. The concepts are still being evaluated and no direction is final.

## Concepts

| Route | Concept |
| --- | --- |
| `/` | Konzept 01: Laib & Leben |
| `/variant-1` | Alias for Konzept 01 |
| `/variant-2` | Konzept 02: Die Backstube |
| `/variant-3` | Konzept 03: Gebäck mit Anlass |
| `/variant-4` | Konzept 04: Wo Geschmack beginnt |

## Tech stack

- Nuxt 4 and Vue 3
- TypeScript
- UnoCSS

## Getting started

### Requirements

- Node.js with Corepack enabled
- pnpm 10

### Installation

```bash
corepack enable
pnpm install
```

### Development

```bash
pnpm dev
```

The development server runs at `http://localhost:3000`.

## Useful commands

```bash
pnpm build       # Build for production
pnpm generate    # Build a static output
pnpm preview     # Preview the production build
pnpm typecheck   # Run Nuxt type checking
```

## Project structure

```text
app/
├── components/newzella/   # Concept-specific components
├── data/                  # Shared content model
├── pages/                 # One route per concept
└── assets/                # Styles and design assets

outputs/   # Original HTML prototypes, design exploration, and source imagery
docs/      # Migration and variant-switcher specs
public/    # Mirrored image assets
```

## Content and assets

Content lives in [`app/data/newzella-content.ts`](app/data/newzella-content.ts). The first migration pass keeps the approved remote image URLs and mirrors those assets into `public/images/`, so the local preview stays deterministic even when a headless browser blocks remote media. The concept CSS stays close to the reviewed HTML prototypes in `outputs/`.

Product scope, users, positioning, and the fixed brand anchors are documented in [`PRODUCT.md`](PRODUCT.md).

## Documentation

- [Nuxt migration design](docs/superpowers/specs/2026-08-27-newzella-nuxt-migration-design.md)
- [Floating variant switcher design](docs/superpowers/specs/2026-08-27-newzella-floating-variant-switcher-design.md)
- [Design system draft](outputs/newzella-design-exploration/DESIGN-SYSTEM-DRAFT.md)
- [Content map](outputs/newzella-design-exploration/CONTENT-MAP.md)

## Status

The migration is an early pass and the visual direction is still open. Content stays grounded in the existing site and must not be invented; online ordering, live inventory, and payment are explicitly out of scope.

## License

No open-source license has been declared yet. Until a license is added, reuse and redistribution are not granted by default.

Made with love by [Laflamme](https://github.com/lafllamme).
