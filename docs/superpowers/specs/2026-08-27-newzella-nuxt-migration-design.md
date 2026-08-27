# Newzella Nuxt 4 migration design

## Goal

Create an isolated Nuxt 4 app for the Newzella brand refresh so the four reviewed HTML concepts can be inspected as real routes and later evolved into the production website. The first implementation is a visual/content migration, not a CMS, shop, ordering flow, or final production information architecture.

## Confirmed constraints

- Project location: `/Users/flame/Developer/Projects/newzella-app`.
- Keep the current Newzella content, section order, image assignments, and visual character as the source of truth.
- Keep the known corporate colors visible: primary yellow, burgundy/red, warm brown/espresso, and cream. The latter two remain supporting colors and may be tuned later.
- Keep the supplied Imgur URLs in the typed content registry, and mirror those user-provided assets into `public/images/` for deterministic local/CI previews. The remote URLs remain the source references for the later hosting decision.
- Use Nuxt 4, Vue 3, TypeScript, PNPM, and UnoCSS. Do not introduce a large design-token system or a component library.
- Use a small shared CSS layer where exact layout, typography, image cropping, z-index, and responsive behavior need more control than utility classes provide.

## Route model

Use explicit routes so each direction can be opened directly and compared without a framework-level variant state:

| Route | Concept | Source |
| --- | --- | --- |
| `/` | Concept 01: Laib & Leben | `newzella-concept-01.html` |
| `/variant-1` | Alias of concept 01 | same component as `/` |
| `/variant-2` | Concept 02: Die Backstube | `newzella-concept-02.html` |
| `/variant-3` | Concept 03: Gebäck mit Anlass | `newzella-concept-03.html` |
| `/variant-4` | Concept 04: Wo Geschmack beginnt | `newzella-concept-04.html` |

Each page keeps the concept-specific navigation and page flow. A small shared route switcher may be included as a comparison aid, but it must not obscure the original page hierarchy or become part of the brand composition.

## File architecture

```text
newzella-app/
├── app/
│   ├── app.vue
│   ├── assets/css/newzella.css
│   ├── components/newzella/
│   │   ├── NewzellaRouteSwitcher.vue
│   │   ├── NewzellaVariant01.vue
│   │   ├── NewzellaVariant02.vue
│   │   ├── NewzellaVariant03.vue
│   │   └── NewzellaVariant04.vue
│   ├── data/newzella-content.ts
│   └── pages/
│       ├── index.vue
│       ├── variant-1.vue
│       ├── variant-2.vue
│       ├── variant-3.vue
│       └── variant-4.vue
├── docs/superpowers/specs/
├── nuxt.config.ts
├── uno.config.ts
├── package.json
└── tsconfig.json
```

The page files stay intentionally small and select a variant component. Variant components own their section composition and concept-specific markup. Shared content data owns brand copy and image references, but no generic renderer is forced across designs that intentionally have different layouts.

## Content and image data

`app/data/newzella-content.ts` will expose typed data for:

- brand name, logo URL, locations, navigation labels, and shared calls to action;
- the four product worlds: Brote, Brötchen, Torten, and Feingebäck;
- image URLs currently used in the reviewed concepts, including the approved hero and category images;
- reusable copy blocks for bread craft, locations, news/editorial, company, careers, contact, and footer content.

The data layer is deliberately plain TypeScript objects. It is not a CMS abstraction and should remain easy to replace when the real content model is decided.

## Styling and motion

- UnoCSS uses the Wind4 preset with reset/preflight enabled, following the working pattern in `grill-me` and `portfolio-app`.
- `uno.config.ts` contains only the small Newzella palette and a few useful shortcuts; exact concept-specific styling lives in `newzella.css` and component-local styles where appropriate.
- Preserve the rounded, warm bakery direction: generous radius, intentional image cropping, brown depth, yellow emphasis, and burgundy details.
- Preserve the strongest existing motion ideas only where they help reading: subtle reveal, hover image scale, ticker/parallax where already part of a concept. Respect `prefers-reduced-motion`.
- Every route must remain usable on narrow mobile widths without horizontal page overflow. Text with display scale must use safe line-height/tracking values and never depend on accidental clipping.

## Accessibility and metadata

- Use semantic landmarks and headings, meaningful image alt text, visible keyboard focus, and touch targets of at least 44px where controls are interactive.
- Set the document language to German and provide route-specific titles/descriptions.
- Mirrored images remain standard `<img>`/CSS image references initially so the migration stays transparent; image optimization can be introduced later once hosting and caching decisions are known.

## Verification criteria

Before handoff, verify:

1. `pnpm build` completes successfully.
2. `pnpm typecheck` completes successfully.
3. All five routes load directly, including the `/variant-1` alias.
4. Desktop and mobile screenshots show the intended content order, image assignments, colors, and no accidental horizontal overflow.
5. Images failing to load do not collapse the layout or make text unreadable.
6. Reduced-motion mode disables non-essential transitions/scroll behavior.

## Out of scope for this pass

- Nuxt Content, headless CMS, database, shop, online ordering, authentication, analytics, SEO campaign work, or deployment configuration.
- Rewriting the brand copy or deciding the final production design direction.
- Converting every section into a generic component when that would reduce visual fidelity.
