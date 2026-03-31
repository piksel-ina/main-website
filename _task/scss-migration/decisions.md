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

## D-003: Light-mode only — remove dark mode remnants
- **Date:** 2026-03-30
- **Decision:** Strip all `:global([data-theme="dark"])` selectors and dark-mode-specific styles
- **Rationale:** Project config disables dark mode entirely (`disableSwitch: true`). Dead CSS adds maintenance burden.
- **Impact:** ModernCard has a dark mode block to remove; audit all other files during migration

## D-004: Custom webpack plugin required for SCSS
- **Date:** 2026-03-30
- **Decision:** Docusaurus 3.9.x does not include `sass-loader` in its webpack config. A custom plugin (`scss-support`) was added to `docusaurus.config.js` that adds rules for both `.scss` (global) and `.module.scss` (CSS Modules) files, using Docusaurus's `getStyleLoaders` utility.
- **Rationale:** Without this plugin, webpack fails with "Unexpected character '@'" when encountering SCSS files
- **Alternatives considered:** CRA-based setup (not applicable), docusaurus-plugin-sass (third-party, adds dependency)
- **Impact:** `docusaurus.config.js` now contains a webpack plugin function. Both `sass` and `sass-loader` are pinned as dependencies.

## D-005: Modern Sass module system (no global built-ins)
- **Date:** 2026-03-30
- **Decision:** Use `@use 'sass:string'`, `@use 'sass:map'`, etc. instead of global built-in functions (`str-index`, `str-slice`, `quote`). Use `@if`/`@else` blocks instead of `if()` function for conditionals in SCSS.
- **Rationale:** Dart Sass 3.0 will remove global built-in functions. Current version (1.98.0) emits deprecation warnings.
- **Impact:** Zero deprecation warnings in build output

---

*Add new decisions below this line as they arise during migration sessions.*
