---
name: styling-system
description: Audit and fix CSS to comply with this project's design system — type scale, spacing, breakpoints, tokens, clip-path shapes, and layout rules. Use when editing/auditing styles or asked to follow the design system.
---

# Styling System

Audit and fix CSS to comply with this project's design system. Invoke when reviewing, editing, or adding component styles.

## Base

`html { font-size: 62.5%; }` — 1rem = 10px. All lengths in `rem` (except fixed sizes like logo heights, icon dimensions).

## Type Scale

Major Third (1.25 ratio). Use these CSS variables from `custom.css`:

| Token | rem | px |
|-------|-----|----|
| `--text-xs` | `1.0rem` | 10 |
| `--text-sm` | `1.25rem` | 12.5 |
| `--text-base` | `1.5625rem` | 15.6 |
| `--text-md` | `1.953rem` | 19.5 |
| `--text-lg` | `2.441rem` | 24.4 |
| `--text-xl` | `3.052rem` | 30.5 |
| `--text-2xl` | `3.815rem` | 38.2 |
| `--text-3xl` | `4.768rem` | 47.7 |
| `--text-4xl` | `5.96rem` | 59.6 |
| `--text-5xl` | `7.451rem` | 74.5 |

Body copy, labels, nav links — use tokens. No `clamp()` — use a single token, override in media queries if needed.

## Spacing

4px grid. Use these tokens from `custom.css`:

| Token | rem | px |
|-------|-----|----|
| `--space-1` | `0.8rem` | 8 |
| `--space-2` | `1.2rem` | 12 |
| `--space-3` | `1.6rem` | 16 |
| `--space-4` | `2.0rem` | 20 |
| `--space-5` | `2.4rem` | 24 |
| `--space-6` | `3.2rem` | 32 |
| `--space-7` | `4.0rem` | 40 |
| `--space-8` | `4.8rem` | 48 |
| `--space-9` | `6.4rem` | 64 |
| `--space-10` | `8.0rem` | 80 |

No ad-hoc values like `0.35rem`, `0.56rem`, `1.04rem`. Round to nearest token.

## Breakpoints

Desktop-first (`max-width`). `px` in CSS Modules (no Sass in this project):

| Name | Value |
|------|-------|
| desktop | `996px` |
| tablet | `768px` |
| mobile | `500px` |

## Tokens

Use CSS vars from `custom.css :root`. Never hardcode hex/rgb.

**Colors:**
- `--ifm-color-primary` (#0d295b), `--ifm-color-primary-dark` through `--ifm-color-primary-lightest`
- `--color-primary`, `--color-secondary`, `--color-accent`
- `--color-accent-teal` (#4a90e2), `--color-accent-amber` (#d97706), `--color-accent-deep` (#1e3a5f)
- `--ifm-background-color` (#ffffff), `--ifm-background-surface-color` (#f5f5f5)
- `--ifm-font-color-base`, `--ifm-font-color-base-light`, `--ifm-font-color-base-lighter`
- `--ifm-border-color` (#e0e0e0)
- Categorical: `--piksel-color-brown`, `--piksel-color-blue`, `--piksel-color-green`, `--piksel-color-cyan`, `--piksel-color-purple`, `--piksel-color-red`, `--piksel-color-amber`

**Fonts:**
- `--ifm-font-family-base` (Inter), `--font-family-heading` (Outfit), `--ifm-font-family-monospace` (JetBrains Mono)

## Layout Defaults

- Container: `.container` — `max-width: 115rem`
- Card radius: `--ifm-card-border-radius` (0.5rem)
- Card shadow: `--ifm-card-box-shadow`

## Clip-Path Shapes

Available in `custom.css` as utility classes:
- `.bg-shape--slanted-bottom` — diagonal bottom edge
- `.bg-shape--cut-corner-br` — bottom-right cut corner
- `.bg-shape--shard` — angled shard (20% offset)
- `.image-container--clipped` — subtle corner clip + drop shadow

## CSS Rules

- CSS Modules only (`*.module.css`) — no inline styles except CSS custom properties via `style` prop
- BEM naming: `.block`, `.block__element`, `.block--modifier`
- `rem` for layout, `em` for component-internal sizing
- No `clamp()` — use a single token per element, override in media queries if needed
- Desktop-first (`max-width`)
