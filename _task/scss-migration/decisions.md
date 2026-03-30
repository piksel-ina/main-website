# SCSS Migration — Decision Log

Every design/architectural decision is recorded here with rationale.

---

## D-001: SCSS over CSS Modules (.css)
- **Date:** 2026-03-30
- **Decision:** Migrate all `.module.css` → `.module.scss` with full SCSS feature set
- **Rationale:** Nesting simplifies BEM, mixins replace repetitive media queries, SCSS maps + functions provide structured token access, `@use`/`@forward` enables modular architecture
- **Alternatives considered:** Stay with plain CSS; adopt CSS-in-JS (emotion/styled-components); adopt Tailwind
- **Impact:** All 21 CSS Module files + 1 global CSS file will be converted

## D-002: Dual variable strategy (SCSS vars + CSS custom properties)
- **Date:** 2026-03-30
- **Decision:** Keep CSS custom properties (`--space-*`, `--text-*`, etc.) alongside SCSS variables (`$spacing`, `$type-scale`, etc.)
- **Rationale:** SCSS variables for build-time logic (loops, calculations, mixins); CSS custom properties remain in browser for runtime theming/Docusaurus integration. Tokens defined once as SCSS maps, then emitted as CSS custom properties via `@each` loops.
- **Alternatives considered:** SCSS-only (loses runtime flexibility); CSS-vars-only (SCSS just for nesting, loses map/function power)
- **Impact:** `custom.scss` will contain both `:root` custom properties AND use SCSS maps to generate them

## D-003: Fix all inconsistencies during migration
- **Date:** 2026-03-30
- **Decision:** Address all 7 known inconsistency categories during migration (BEM, naming, clamp, hardcoded values, fonts, dark mode remnants, non-token spacing)
- **Rationale:** Migration is the best opportunity to enforce design system rules — doing it separately later doubles the work
- **Impact:** Every migrated file will be audited and corrected, not just mechanically converted

## D-004: Convert global custom.css to custom.scss
- **Date:** 2026-03-30
- **Decision:** Rename `custom.css` → `custom.scss` and use SCSS features for the global stylesheet
- **Rationale:** Unified approach — global styles benefit from the same token system, mixins, and nesting
- **Alternatives considered:** Keep `custom.css` as CSS entry point and `@import` SCSS partials; split into partials that compile separately
- **Impact:** `docusaurus.config.js` entry point changes to `.scss`

## D-005: File naming normalization
- **Date:** 2026-03-30
- **Decision:** All component stylesheets will use `styles.module.scss` (plural)
- **Rationale:** 18/21 files already use plural; standardizing reduces confusion
- **Impact:** 3 files renamed (`style.module.css` → `styles.module.scss`): CleanCard, OurServices, Faq

## D-006: SCSS architecture — abstracts layer
- **Date:** 2026-03-30
- **Decision:** Create `src/css/abstracts/` with `_tokens.scss`, `_functions.scss`, `_mixins.scss`, `_index.scss`
- **Rationale:** Separation of concerns — tokens (data), functions (logic), mixins (patterns) each in their own file. `_index.scss` provides single `@use` entry point.
- **Impact:** Every `.module.scss` file will start with `@use '../../css/abstracts' as *;` (or appropriate relative path)

## D-007: BEM enforcement via SCSS nesting
- **Date:** 2026-03-30
- **Decision:** All components must use BEM with SCSS `&__element` and `&--modifier` nesting
- **Rationale:** SCSS nesting is the natural fit for BEM — `.block { &__element { &--modifier {} } }` produces clean, readable output
- **Impact:** Hero and ModernCard (currently flat camelCase) will be restructured

## D-008: No clamp() — media query overrides only
- **Date:** 2026-03-30
- **Decision:** Remove all `clamp()` usage. Use single token per property, override in `@include respond-to()` media queries.
- **Rationale:** Explicit breakpoints are easier to debug, match the design system breakpoints (996/768/500px), and respect the project's desktop-first strategy
- **Impact:** Hero, CallToAction, and custom.scss global styles currently using `clamp()` will be refactored

## D-009: Light-mode only — remove dark mode remnants
- **Date:** 2026-03-30
- **Decision:** Strip all `:global([data-theme="dark"])` selectors and dark-mode-specific styles
- **Rationale:** Project config disables dark mode entirely (`disableSwitch: true`). Dead CSS adds maintenance burden.
- **Impact:** ModernCard has a dark mode block to remove; audit all other files during migration

---

*Add new decisions below this line as they arise during migration sessions.*

## D-010: Custom webpack plugin required for SCSS
- **Date:** 2026-03-30
- **Decision:** Docusaurus 3.9.x does not include `sass-loader` in its webpack config. A custom plugin (`scss-support`) was added to `docusaurus.config.js` that adds rules for both `.scss` (global) and `.module.scss` (CSS Modules) files, using Docusaurus's `getStyleLoaders` utility.
- **Rationale:** Without this plugin, webpack fails with "Unexpected character '@'" when encountering SCSS files
- **Alternatives considered:** CRA-based setup (not applicable), docusaurus-plugin-sass (third-party, adds dependency)
- **Impact:** `docusaurus.config.js` now contains a webpack plugin function. Both `sass` and `sass-loader` are pinned as dependencies.

## D-011: Modern Sass module system (no global built-ins)
- **Date:** 2026-03-30
- **Decision:** Use `@use 'sass:string'`, `@use 'sass:map'`, etc. instead of global built-in functions (`str-index`, `str-slice`, `quote`). Use `@if`/`@else` blocks instead of `if()` function for conditionals in SCSS.
- **Rationale:** Dart Sass 3.0 will remove global built-in functions. Current version (1.98.0) emits deprecation warnings.
- **Impact:** Zero deprecation warnings in build output

## D-012: clamp() replaced in custom.scss
- **Date:** 2026-03-30
- **Decision:** All `clamp()` usage in `custom.scss` was replaced with SCSS tokens + `@include respond-to()` media queries
- **Rationale:** Consistent with D-008 (no clamp) — explicit breakpoints are easier to debug and match the design system
- **Impact:** Footer padding, footer text sizes, markdown heading sizes now use tokens with breakpoint overrides

## D-013: Task tracking directory committed to repo (_task/)
- **Date:** 2026-03-30
- **Decision:** `_task/` directory is tracked in git and committed alongside code changes, not hidden via `.gitignore`
- **Rationale:** Makes migration progress visible to all collaborators. No sensitive content (only file paths, design token names, architectural decisions).
- **Alternatives considered:** Hidden `.task/` directory (invisible to team, defeats the purpose of shared tracking)
- **Impact:** `_task/scss-migration/` files will appear in commits and PRs
