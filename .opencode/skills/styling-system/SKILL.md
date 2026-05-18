---
name: styling-system
description: Audit and fix CSS/SCSS to comply with this project's design system — type scale, spacing, breakpoints, tokens, clip-path shapes, and layout rules. Use when editing/auditing styles or asked to follow the design system.
---

# Styling System

Audit and fix SCSS to comply with this project's design system. Invoke when reviewing, editing, or adding component styles.

## Base

`html { font-size: 62.5%; }` — 1rem = 10px. All lengths in `rem` (except fixed sizes like logo heights, icon dimensions).

## SCSS Architecture

```
src/css/
├── abstracts/
│   ├── _tokens.scss        # SCSS maps: $spacing, $type-scale, $breakpoints, $colors, $font-families
│   ├── _functions.scss     # space(), text-size(), color(), bp(), font-family()
│   ├── _mixins.scss        # respond-to(), heading(), container(), truncate(), focus-ring()
│   └── _index.scss         # @forward everything
└── custom.scss             # Entry: CSS custom properties generated from SCSS maps
```

Import in any component: `@use '../../css/abstracts' as *;` (adjust relative path).

## SCSS Functions

| Function | Usage |
|----------|-------|
| `space('4')` | Returns spacing value from `$spacing` map |
| `text-size('lg')` | Returns type scale value from `$type-scale` map |
| `color('primary')` | Returns color from `$colors` map |
| `bp('tablet')` | Returns breakpoint value from `$breakpoints` map |
| `font-family('heading')` | Returns formatted font-family stack |

## SCSS Mixins

| Mixin | Usage |
|-------|-------|
| `@include respond-to('tablet')` | Desktop-first `max-width` media query |
| `@include heading` | Font-family, weight, letter-spacing, color for headings |
| `@include container` | Max-width + centered + inline padding |
| `@include truncate($lines)` | Single or multi-line text truncation |
| `@include focus-ring` | Accessible focus outline |

## Type Scale

Available as CSS vars (`--pk-text-*`) and `text-size()` function:

| Token | rem | px |
|-------|-----|----|
| `--pk-text-2xs` / `text-size('2xs')` | `0.625rem` | 6.25 |
| `--pk-text-xs` / `text-size('xs')` | `0.75rem` | 7.5 |
| `--pk-text-sm` / `text-size('sm')` | `0.875rem` | 8.75 |
| `--pk-text-base` / `text-size('base')` | `1rem` | 10 |
| `--pk-text-md` / `text-size('md')` | `1.125rem` | 11.25 |
| `--pk-text-lg` / `text-size('lg')` | `1.375rem` | 13.75 |
| `--pk-text-xl` / `text-size('xl')` | `1.75rem` | 17.5 |
| `--pk-text-2xl` / `text-size('2xl')` | `2.25rem` | 22.5 |
| `--pk-text-3xl` / `text-size('3xl')` | `3rem` | 30 |
| `--pk-text-4xl` / `text-size('4xl')` | `4rem` | 40 |
| `--pk-text-5xl` / `text-size('5xl')` | `5.5rem` | 55 |

## Spacing

Available as CSS vars (`--pk-s-*`) and `space()` function:

| Token | rem | px |
|-------|-----|----|
| `--pk-s-0` / `space('0')` | `0` | 0 |
| `--pk-s-1` / `space('1')` | `0.25rem` | 2.5 |
| `--pk-s-2` / `space('2')` | `0.5rem` | 5 |
| `--pk-s-3` / `space('3')` | `0.75rem` | 7.5 |
| `--pk-s-4` / `space('4')` | `1rem` | 10 |
| `--pk-s-5` / `space('5')` | `1.5rem` | 15 |
| `--pk-s-6` / `space('6')` | `2rem` | 20 |
| `--pk-s-7` / `space('7')` | `3rem` | 30 |
| `--pk-s-8` / `space('8')` | `4rem` | 40 |
| `--pk-s-9` / `space('9')` | `6rem` | 60 |
| `--pk-s-10` / `space('10')` | `8rem` | 80 |
| `--pk-s-11` / `space('11')` | `12rem` | 120 |
| `--pk-s-12` / `space('12')` | `16rem` | 160 |

No ad-hoc values. Round to nearest token.

## Breakpoints

Desktop-first (`max-width`). Single mixin `respond-to()` only — no `respond-above`. Default styles target ≥ 1440px.

| Name | Value | Target |
|------|-------|--------|
| `phone` | `480px` | Small phones |
| `phone-wide` | `768px` | Large phones / landscape |
| `tablet` | `996px` | Tablets (Docusaurus cutoff) |
| `laptop` | `1280px` | Small laptops |
| `desktop` | `1440px` | Standard laptops & desktops |

**Responsive images:** `<picture>` `media` attributes use `min-width` (browser standard, opposite of CSS). Always use the breakpoint values above — never invent pixel values. Example: `media="(min-width: 996px)"` maps to the `tablet` breakpoint.

## Colors

Use `color()` function or `--pk-*` CSS vars. Never hardcode hex/rgb.

| Key | Value | CSS Var |
|-----|-------|---------|
| `primary` | `#1040a8` | `--pk-primary` |
| `primary-dark` | `#0b2d80` | `--pk-primary-dark` |
| `primary-darker` | `#081c58` | `--pk-primary-darker` |
| `primary-darkest` | `#050e30` | `--pk-primary-darkest` |
| `primary-light` | `#2060cc` | `--pk-primary-light` |
| `primary-lighter` | `#4487e8` | `--pk-primary-lighter` |
| `primary-lightest` | `#7ab3f5` | `--pk-primary-lightest` |
| `ice` | `#eff6ff` | `--pk-ice` |
| `ice-light` | `#e8f4fd` | `--pk-ice-light` |
| `sky` | `rgb(147 197 253 / 35%)` | `--pk-sky` |
| `sky-bright` | `rgb(147 197 253 / 60%)` | `--pk-sky-bright` |
| `accent` | `#3b82f6` | `--pk-accent` |
| `teal` | `#06c8d8` | `--pk-teal` |
| `teal-dark` | `#0e7488` | `--pk-teal-dark` |
| `amber` | `#e58c0a` | `--pk-amber` |
| `red` | `#ef4444` | `--pk-red` |
| `green` | `#16a34a` | `--pk-green` |
| `black` | `#000` | `--pk-black` |
| `ink-1` | `#1d1d1f` | `--pk-ink-1` |
| `ink-2` | `#3a3a3c` | `--pk-ink-2` |
| `ink-3` | `#48484a` | `--pk-ink-3` |
| `ink-4` | `#636366` | `--pk-ink-4` |
| `grey-1` | `#8e8e93` | `--pk-grey-1` |
| `grey-2` | `#aeaeb2` | `--pk-grey-2` |
| `grey-3` | `#c7c7cc` | `--pk-grey-3` |
| `grey-4` | `#d1d1d6` | `--pk-grey-4` |
| `grey-5` | `#e5e5ea` | `--pk-grey-5` |
| `paper` | `#f5f5f7` | `--pk-paper` |
| `paper-2` | `#f2f2f4` | `--pk-paper-2` |
| `paper-3` | `#efefef` | `--pk-paper-3` |
| `paper-4` | `#ebebed` | `--pk-paper-4` |
| `white` | `#fff` | `--pk-white` |

### Semantic Color Tokens

Derived from the scale above, used for UI semantics:

| Token | Value | Usage |
|-------|-------|-------|
| `--pk-fg-strong` | `var(--pk-ink-1)` | Primary text |
| `--pk-fg` | `var(--pk-ink-2)` | Body text |
| `--pk-fg-muted` | `var(--pk-ink-4)` | Secondary / muted text |
| `--pk-fg-subtle` | `var(--pk-grey-1)` | Subtle / hint text |
| `--pk-fg-inverse` | `var(--pk-white)` | Text on dark backgrounds |
| `--pk-fg-on-primary` | `#e8f4fd` | Text on primary bg |
| `--pk-bg` | `var(--pk-white)` | Page background |
| `--pk-bg-subtle` | `var(--pk-paper)` | Subtle bg |
| `--pk-bg-deep` | `#081c58` | Dark section bg |
| `--pk-bg-deeper` | `#050e30` | Deepest dark bg |
| `--pk-border` | `var(--pk-grey-5)` | Default border |
| `--pk-border-ink` | `var(--pk-ink-1)` | Strong border |
| `--pk-hairline` | `1px solid var(--pk-border)` | Hairline border shorthand |

## Motion & Z-Index

| Token | Value |
|-------|-------|
| `--pk-ease` | `cubic-bezier(0.22, 0.61, 0.36, 1)` |
| `--pk-dur-1` | `120ms` |
| `--pk-dur-2` | `200ms` |
| `--pk-dur-3` | `320ms` |
| `--pk-shadow-1` | `0 1px 0 rgb(13 41 91 / 4%)` |
| `--pk-shadow-2` | `0 12px 32px -16px rgb(13 41 91 / 12%)` |
| `--pk-z-sticky` | `100` |
| `--pk-z-overlay` | `1000` |

## Typography: Named Styles (global classes in custom.scss)

| Class | Font | Size | Weight | Usage |
|-------|------|------|--------|-------|
| `.pk-eyebrow` | mono | xs | 500 | Section labels, has `::before` dash |
| `.pk-display` | display | 5xl | 300 | Hero display headings |
| `.pk-h1` – `.pk-h4` | display | 3xl → lg | 300–500 | Section headings |
| `.pk-lead` | body | md | 400 | Intro paragraphs |
| `.pk-body` | body | base | 400 | Body text |
| `.pk-meta` | body | sm | 400 | Metadata / captions |
| `.pk-mono` | mono | sm | 500 | Monospace labels |
| `.pk-coord` | mono | 2xs | 400 | Coordinate / ID labels |

## Atom Components (src/components/UI/Atoms/)

Reusable UI primitives. Each is a `PascalCase/` folder with `index.js` (+ `styles.module.scss` if styled).

### Button

`src/components/UI/Atoms/Button/`

Variants: `primary`, `ink`, `outline`, `on-dark`, `ghost`. Size modifier: `sm`.

- 48px height, 0 border-radius, uppercase, wide tracking (except ghost)
- `ChevronRight` icon on LEFT of text (except ghost: no icon)
- Props: `label`/`children`, `to`/`href`, `variant`, `size`, `showIcon`, `fullWidth`, `color`, `className`
- Removed: `enableShine`, `enableExpand`, `iconPosition`

### Eyebrow

`src/components/UI/Atoms/Eyebrow/`

Section label with `::before` horizontal dash. Mono font, xs, 500 weight, widest tracking, uppercase.

- Props: `tone` — `"teal"` (default) or `"ink"`
- Uses `--pk-teal` by default, `--pk-fg-strong` for ink tone

### Coord

`src/components/UI/Atoms/Coord/`

Coordinate-frame label for LAT/LON, service IDs, dates, metadata. Mono font, 2xs, widest tracking, uppercase.

- Props: `className` for color overrides (e.g., white on dark backgrounds)
- Uses `--pk-fg-subtle` by default

### Tag

`src/components/UI/Atoms/Tag/`

Bordered badge for categories. Mono font, 2xs, widest tracking, uppercase, hairline border.

- Props: `variant` — `"default"`, `"teal"`, `"amber"`, `"solid"`
- Non-default variants render a 6px `__dot` element
- `solid`: ink bg + white text

### InaDcMark

`src/components/UI/Atoms/InaDcMark/`

Inline SVG brand mark — pixel grid of rectangles + satellite dot circle.

- Props: `size` (default `36`), `color` (default `"var(--pk-primary, #1040a8)"`)
- No SCSS module (pure SVG, no styles needed)

## CSS Rules

- SCSS Modules only (`*.module.scss`) — no inline styles except CSS custom properties via `style` prop
- BEM naming via SCSS nesting: `.block { &__element { &--modifier {} } }`
- `rem` for layout, `em` for component-internal sizing
- No `clamp()` — use a single token per element, override in `@include respond-to()` if needed
- Desktop-first (`max-width`)
- All values must use tokens — no hardcoded colors, spacing, or font sizes
