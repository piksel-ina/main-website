# SCSS Migration — Master Plan

## Current State

| Metric | Value |
|--------|-------|
| CSS files | 22 (1 global `custom.css` + 21 CSS Modules) |
| Components with styles | 21 |
| SCSS dependencies | None (`sass` not installed) |
| Naming inconsistencies | 3 files use `style.module.css` (singular) |
| BEM inconsistencies | Hero, ModernCard use flat camelCase |
| Hardcoded colors | Hero, DocCard |
| Hardcoded fonts | DocCard (Oswald, Open Sans — not in project) |
| clamp() violations | Hero, CallToAction, custom.css |
| Dark mode remnants | ModernCard (`:global([data-theme="dark"])`) |
| Non-token spacing | Multiple components use raw rem values |

## Target Architecture

```
src/css/
├── abstracts/
│   ├── _tokens.scss        # SCSS maps: $spacing, $type-scale, $breakpoints, $colors, $font-families
│   ├── _functions.scss     # Helpers: space(), text-size(), color(), bp()
│   ├── _mixins.scss        # Patterns: respond-to(), heading(), card-base(), container(), glass()
│   └── _index.scss         # @forward everything
└── custom.scss             # Entry: CSS custom properties + @use base/utilities/overrides

Component styles (co-located):
src/components/X/Y/styles.module.scss   # Each: @use '../css/abstracts' as *;
```

## Dual Variable Strategy

- **SCSS variables** — build-time: loops, calculations, mixin parameters
- **CSS custom properties** — runtime: `var()` usage in components, Docusaurus theming
- Tokens defined once as SCSS maps → emitted as CSS custom properties via `@each` loops in `custom.scss`

## Session Dependency Graph

```
Session 0 (Foundation)
    ├── Session 1 (Atoms + Carousel)
    ├── Session 2 (Molecules)
    ├── Session 3 (Home Sections)     ← can reference migrated atoms/molecules
    ├── Session 4 (Docs Components)   ← independent of Sessions 1-3
    └── Session 5 (Theme Overrides)   ← independent of Sessions 1-4
Session 6 (Final Audit)               ← depends on ALL prior sessions
```

Sessions 1-2 are independent. Sessions 3-5 are independent of each other. Session 6 is always last.

## Per-Component Migration Checklist

1. Create `.module.scss` with `@use` import
2. Convert to SCSS nesting with BEM (`&__element`, `&--modifier`)
3. Replace hardcoded values with tokens/functions/mixins
4. Replace `@media` with `@include respond-to()`
5. Remove `clamp()` — use single token + media query override
6. Update JS `import styles from './styles.module.scss'`
7. Delete old `.module.css`
8. Run `npm run build`

## File Inventory

| # | Component | Current File | Target File | Key Fixes | Session |
|---|-----------|-------------|-------------|-----------|---------|
| 0 | Global | `src/css/custom.css` | `src/css/custom.scss` | Token generation from maps, organize sections | 0 |
| 1 | CTAButton | `UI/Atoms/CTAButton/styles.module.css` | `styles.module.scss` | BEM, tokens | 1 |
| 2 | ShapeContainer | `UI/Atoms/ShapeContainer/styles.module.css` | `styles.module.scss` | Clip-path mixins | 1 |
| 3 | ViewAllButton | `UI/Atoms/ViewAllButton/styles.module.css` | `styles.module.scss` | BEM, tokens | 1 |
| 4 | Carousel | `UI/Carousel/styles.module.css` | `styles.module.scss` | Responsive mixins | 1 |
| 5 | CleanCard | `UI/Molecules/CleanCard/style.module.css` | `styles.module.scss` | Rename singular→plural, BEM | 2 |
| 6 | FAQItem | `UI/Molecules/FAQItem/styles.module.css` | `styles.module.scss` | BEM, tokens | 2 |
| 7 | ModernCard | `UI/Molecules/ModernCard/styles.module.css` | `styles.module.scss` | Remove dark mode, BEM, colors | 2 |
| 8 | Hero | `Home/Hero/styles.module.css` | `styles.module.scss` | camelCase→BEM, colors, clamp | 3 |
| 9 | CallToAction | `Home/CallToAction/styles.module.css` | `styles.module.scss` | Remove clamp(), glass() mixin | 3 |
| 10 | OurServices | `Home/OurServices/style.module.css` | `styles.module.scss` | Rename singular→plural, BEM | 3 |
| 11 | UseCases | `Home/UseCases/styles.module.css` | `styles.module.scss` | Token usage, BEM | 3 |
| 12 | Faq | `Home/Faq/style.module.css` | `styles.module.scss` | Rename singular→plural, BEM | 3 |
| 13 | DocCallout | `Docs/DocCallout/styles.module.css` | `styles.module.scss` | BEM, tokens | 4 |
| 14 | DocCard | `Docs/DocCard/styles.module.css` | `styles.module.scss` | Fix fonts + colors | 4 |
| 15 | DocSteps | `Docs/DocSteps/styles.module.css` | `styles.module.scss` | BEM, tokens | 4 |
| 16 | ImageCard | `Docs/ImageCard/styles.module.css` | `styles.module.scss` | BEM, tokens | 4 |
| 17 | Navbar/Layout | `theme/Navbar/Layout/styles.module.css` | `styles.module.scss` | Token usage | 5 |
| 18 | Navbar/Content | `theme/Navbar/Content/styles.module.css` | `styles.module.scss` | Token usage | 5 |
| 19 | Navbar/Search | `theme/Navbar/Search/styles.module.css` | `styles.module.scss` | Token usage | 5 |
| 20 | Navbar/ColorModeToggle | `theme/Navbar/ColorModeToggle/styles.module.css` | `styles.module.scss` | Light-mode cleanup | 5 |
| 21 | DocSidebarItem/Category | `theme/DocSidebarItem/Category/styles.module.css` | `styles.module.scss` | Token usage | 5 |

## Risk Mitigation

| Risk | Mitigation |
|------|-----------|
| Build breaks mid-session | Each session ends with `npm run build`; only that session's changes need reverting |
| SCSS `@use` path resolution | Use explicit relative paths; no webpack alias changes needed |
| CSS Modules hash change | Renaming `.module.css` → `.module.scss` doesn't change hashing — but verify visually |
| Swizzled theme import quirks | Test each theme component individually after migration |
| `sass` version compatibility | Pin version; Docusaurus 3.x supports Dart Sass natively |
