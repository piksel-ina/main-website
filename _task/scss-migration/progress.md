# SCSS Migration — Progress Tracker

Status legend: `[ ]` pending | `[~]` in progress | `[x]` done | `[-]` skipped/blocked

---

## Session 0 — Foundation & Infrastructure

- [x] 0.1  `npm install sass@1.98.0` + `sass-loader` (pinned versions)
- [x] 0.2  Create `src/css/abstracts/` directory structure
- [x] 0.3  Define SCSS token maps in `_tokens.scss` (`$spacing`, `$type-scale`, `$breakpoints`, `$colors`, `$font-families`, `$clip-paths`)
- [x] 0.4  Implement functions in `_functions.scss` (`space()`, `text-size()`, `color()`, `bp()`, `font-family()`, `clip-path()`)
- [x] 0.5  Implement mixins in `_mixins.scss` (`respond-to()`, `heading()`, `card-base()`, `container()`, `glass()`, `bg-shape()`, `image-clipped()`, `truncate()`, `focus-ring()`)
- [x] 0.6  Create `_index.scss` barrel file with `@forward`
- [x] 0.7  Convert `src/css/custom.css` → `custom.scss` (CSS custom properties generated from SCSS maps via `@each`, `clamp()` replaced with tokens + `respond-to()`)
- [x] 0.8  Update `docusaurus.config.js` — `customCss` path + custom webpack plugin for `.scss` and `.module.scss` rules using `getStyleLoaders`
- [x] 0.9  Run `npm run build` — **PASSES** with zero deprecation warnings
- [x] 0.10 Update `AGENTS.md` conventions for `.module.scss` and SCSS patterns
- [x] 0.11 Update `.opencode/skills/styling-system/SKILL.md` for SCSS documentation

**Session status:** `[x]` Complete
**Build passes:** Yes (zero deprecation warnings)
**Started:** 2026-03-30
**Completed:** 2026-03-30

---

## Session 1 — UI Atoms & Carousel (4 components)

- [ ] 1.1  CTAButton: `styles.module.css` → `styles.module.scss` (BEM, tokens)
- [ ] 1.2  ShapeContainer: `styles.module.css` → `styles.module.scss` (clip-path mixins)
- [ ] 1.3  ViewAllButton: `styles.module.css` → `styles.module.scss` (BEM, tokens)
- [ ] 1.4  Carousel: `styles.module.css` → `styles.module.scss` (responsive mixins)
- [ ] 1.5  Update JS imports in all 4 components
- [ ] 1.6  Delete old `.module.css` files (4 files)
- [ ] 1.7  Run `npm run build`

**Session status:** `[ ]` Not started
**Build passes:** —
**Started:** —
**Completed:** —

---

## Session 2 — UI Molecules (3 components)

- [ ] 2.1  CleanCard: `style.module.css` → `styles.module.scss` (rename singular→plural, BEM)
- [ ] 2.2  FAQItem: `styles.module.css` → `styles.module.scss` (BEM, tokens)
- [ ] 2.3  ModernCard: `styles.module.css` → `styles.module.scss` (remove dark mode, BEM, fix hardcoded colors)
- [ ] 2.4  Update JS imports in all 3 components
- [ ] 2.5  Delete old `.module.css` files (3 files)
- [ ] 2.6  Run `npm run build`

**Session status:** `[ ]` Not started
**Build passes:** —
**Started:** —
**Completed:** —

---

## Session 3 — Home Page Sections (5 components)

- [ ] 3.1  Hero: `styles.module.css` → `styles.module.scss` (camelCase→BEM, hardcoded colors→tokens, remove clamp(), 3 breakpoints→mixins)
- [ ] 3.2  CallToAction: `styles.module.css` → `styles.module.scss` (already BEM, remove clamp(), use glass() mixin)
- [ ] 3.3  OurServices: `style.module.css` → `styles.module.scss` (rename singular→plural, BEM)
- [ ] 3.4  UseCases: `styles.module.css` → `styles.module.scss` (token usage, BEM)
- [ ] 3.5  Faq: `style.module.css` → `styles.module.scss` (rename singular→plural, BEM)
- [ ] 3.6  Update JS imports in all 5 components
- [ ] 3.7  Delete old `.module.css` files (5 files)
- [ ] 3.8  Run `npm run build`

**Session status:** `[ ]` Not started
**Build passes:** —
**Started:** —
**Completed:** —

---

## Session 4 — Docs Components (4 components)

- [ ] 4.1  DocCallout: `styles.module.css` → `styles.module.scss` (BEM, tokens)
- [ ] 4.2  DocCard: `styles.module.css` → `styles.module.scss` (fix hardcoded fonts Oswald→Outfit, Open Sans→Inter; fix hardcoded colors)
- [ ] 4.3  DocSteps: `styles.module.css` → `styles.module.scss` (BEM, tokens)
- [ ] 4.4  ImageCard: `styles.module.css` → `styles.module.scss` (BEM, tokens)
- [ ] 4.5  Update JS imports in all 4 components
- [ ] 4.6  Delete old `.module.css` files (4 files)
- [ ] 4.7  Run `npm run build`

**Session status:** `[ ]` Not started
**Build passes:** —
**Started:** —
**Completed:** —

---

## Session 5 — Theme Overrides (5 components)

- [ ] 5.1  Navbar/Layout: `styles.module.css` → `styles.module.scss` (token usage)
- [ ] 5.2  Navbar/Content: `styles.module.css` → `styles.module.scss` (token usage)
- [ ] 5.3  Navbar/Search: `styles.module.css` → `styles.module.scss` (token usage)
- [ ] 5.4  Navbar/ColorModeToggle: `styles.module.css` → `styles.module.scss` (light-mode cleanup)
- [ ] 5.5  DocSidebarItem/Category: `styles.module.css` → `styles.module.scss` (token usage)
- [ ] 5.6  Update JS imports in all 5 components
- [ ] 5.7  Delete old `.module.css` files (5 files)
- [ ] 5.8  Run `npm run build`

**Session status:** `[ ]` Not started
**Build passes:** —
**Started:** —
**Completed:** —

---

## Session 6 — Final Audit, Cleanup & Documentation

- [ ] 6.1  Full `npm run build` verification
- [ ] 6.2  Audit: grep for remaining hardcoded colors across all `.scss`
- [ ] 6.3  Audit: grep for remaining `clamp()` usage
- [ ] 6.4  Audit: grep for remaining non-token spacing values
- [ ] 6.5  Verify all files use consistent `styles.module.scss` naming
- [ ] 6.6  Verify all files use proper BEM with `&__element` / `&--modifier` nesting
- [ ] 6.7  Remove dead CSS / unused selectors
- [ ] 6.8  Final update to `AGENTS.md` and `styling-system/SKILL.md`
- [ ] 6.9  Visual smoke test checklist (hero, navbar, cards, footer, docs pages)

**Session status:** `[ ]` Not started
**Build passes:** —
**Started:** —
**Completed:** —

---

## Overall Progress

| Session | Components | Status | Build |
|---------|-----------|--------|-------|
| 0       | Foundation | `[x]`  | Pass  |
| 1       | 4 (Atoms+Carousel) | `[ ]`   | —     |
| 2       | 3 (Molecules) | `[ ]`   | —     |
| 3       | 5 (Home)   | `[ ]`   | —     |
| 4       | 4 (Docs)   | `[ ]`   | —     |
| 5       | 5 (Theme)  | `[ ]`   | —     |
| 6       | Audit      | `[ ]`   | —     |

**Total files to migrate:** 22 (1 global + 21 CSS Modules)
**Files migrated:** 1 / 22
**Current session:** Session 0 complete
**Next session to resume:** Session 1
