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
│   ├── _functions.scss     # space(), text-size(), color(), bp(), font-family(), clip-path()
│   ├── _mixins.scss        # respond-to(), heading(), card-base(), container(), glass(), bg-shape(), image-clipped()
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
| `clip-path('shard')` | Returns clip-path polygon |

## SCSS Mixins

| Mixin | Usage |
|-------|-------|
| `@include respond-to('tablet')` | Desktop-first `max-width` media query |
| `@include heading` | Font-family, weight, letter-spacing, color for headings |
| `@include card-base` | Background, border-radius, box-shadow |
| `@include container` | Max-width + centered + inline padding |
| `@include glass($opacity, $blur)` | Glassmorphism effect |
| `@include bg-shape('slanted-bottom')` | Positioned, z-indexed, clipped (mixin only — no utility class) |
| `@include image-clipped` | Border-radius + clip-path + drop-shadow (mixin only — no utility class) |
| `@include truncate($lines)` | Single or multi-line text truncation |
| `@include focus-ring` | Accessible focus outline |

## Type Scale

Major Third (1.25 ratio). Available as CSS vars (`--text-*`) and `text-size()` function:

| Token | rem | px |
|-------|-----|----|
| `--text-xs` / `text-size('xs')` | `1.0rem` | 10 |
| `--text-sm` / `text-size('sm')` | `1.25rem` | 12.5 |
| `--text-base` / `text-size('base')` | `1.5625rem` | 15.6 |
| `--text-md` / `text-size('md')` | `1.953rem` | 19.5 |
| `--text-lg` / `text-size('lg')` | `2.441rem` | 24.4 |
| `--text-xl` / `text-size('xl')` | `3.052rem` | 30.5 |
| `--text-2xl` / `text-size('2xl')` | `3.815rem` | 38.2 |
| `--text-3xl` / `text-size('3xl')` | `4.768rem` | 47.7 |
| `--text-4xl` / `text-size('4xl')` | `5.96rem` | 59.6 |
| `--text-5xl` / `text-size('5xl')` | `7.451rem` | 74.5 |

## Spacing

4px grid. Available as CSS vars (`--space-*`) and `space()` function:

| Token | rem | px |
|-------|-----|----|
| `--space-1` / `space('1')` | `0.8rem` | 8 |
| `--space-2` / `space('2')` | `1.2rem` | 12 |
| `--space-3` / `space('3')` | `1.6rem` | 16 |
| `--space-4` / `space('4')` | `2.0rem` | 20 |
| `--space-5` / `space('5')` | `2.4rem` | 24 |
| `--space-6` / `space('6')` | `3.2rem` | 32 |
| `--space-7` / `space('7')` | `4.0rem` | 40 |
| `--space-8` / `space('8')` | `4.8rem` | 48 |
| `--space-9` / `space('9')` | `6.4rem` | 64 |
| `--space-10` / `space('10')` | `8.0rem` | 80 |
| `--space-11` / `space('11')` | `9.6rem` | 96 |
| `--space-12` / `space('12')` | `11.2rem` | 112 |
| `--space-13` / `space('13')` | `12.8rem` | 128 |

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

Use `color()` function or CSS vars. Never hardcode hex/rgb.

| Key | Value | CSS Var |
|-----|-------|---------|
| `primary` | `#0d295b` | `--ifm-color-primary` |
| `primary-dark` | `#0a1f47` | `--ifm-color-primary-dark` |
| `primary-darker` | `#081838` | `--ifm-color-primary-darker` |
| `primary-darkest` | `#051224` | `--ifm-color-primary-darkest` |
| `primary-light` | `#244680` | `--ifm-color-primary-light` |
| `primary-lighter` | `#3d6aa8` | `--ifm-color-primary-lighter` |
| `primary-lightest` | `#5689d0` | `--ifm-color-primary-lightest` |
| `ice` | `#eff6ff` | `--color-ice` |
| `ice-light` | `#e8f4fd` | `--color-ice-light` |
| `sky` | `rgba(147, 197, 253, 0.35)` | `--color-sky` |
| `sky-bright` | `rgba(147, 197, 253, 0.6)` | `--color-sky-bright` |
| `accent` | `#4a90e2` | `--color-accent` |
| `accent-teal` | `#35a9d3` | `--color-accent-teal` |
| `accent-teal-dark` | `#005967` | `--color-accent-teal-dark` |
| `accent-amber` | `#d97706` | `--color-accent-amber` |
| `accent-red` | `#dc2626` | `--color-accent-red` |
| `grey-dark-2` | `#8E8E93` | `--color-grey-dark-2` |
| `grey-dark-1` | `#AEAEB2` | `--color-grey-dark-1` |
| `grey` | `#C7C7CC` | `--color-grey` |
| `grey-light-1` | `#D1D1D6` | `--color-grey-light-1` |
| `grey-light-2` | `#E5E5EA` | `--color-grey-light-2` |
| `black` | `#000000` | `--color-black` |
| `black-1` | `#1D1D1F` | `--color-black-1` |
| `black-2` | `#3A3A3C` | `--color-black-2` |
| `black-3` | `#48484A` | `--color-black-3` |
| `black-4` | `#636366` | `--color-black-4` |
| `white` | `#FFFFFF` | `--color-white` |
| `white-1` | `#F5F5F7` | `--color-white-1` |

### Neutral Scale Usage

No semantic aliases — use scale tokens directly:

| Use case | Token |
|----------|-------|
| Primary text | `color('black-2')` |
| Secondary text | `color('black-3')` |
| Muted / placeholder text | `color('grey-dark-2')` |
| Text on dark backgrounds | `color('grey-light-2')` |
| Muted text on dark backgrounds | `color('grey-dark-1')` |
| Borders | `color('grey-light-1')` |
| Page / card background | `color('white-1')` |
| Pure black / white | `color('black')` / `color('white')` |

## Clip-Path Shapes

Available via `clip-path()` function or `bg-shape()` mixin (no utility classes):

| Name | Shape |
|------|-------|
| `slanted-bottom` | `polygon(0 0, 100% 0, 100% 85%, 0 100%)` |
| `cut-corner-br` | bottom-right cut corner |
| `shard` | `polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)` |
| `image-clipped` | subtle corner clip (use via `@include image-clipped` mixin) |

## CSS Rules

- SCSS Modules only (`*.module.scss`) — no inline styles except CSS custom properties via `style` prop
- BEM naming via SCSS nesting: `.block { &__element { &--modifier {} } }`
- `rem` for layout, `em` for component-internal sizing
- No `clamp()` — use a single token per element, override in `@include respond-to()` if needed
- Desktop-first (`max-width`)
- All values must use tokens — no hardcoded colors, spacing, or font sizes
