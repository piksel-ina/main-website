# Agent Guidelines for Piksel Main Website

Docusaurus 3.x documentation site with React 19, classic preset. Satellite imagery + cloud computing platform by Badan Informasi Geospasial (Indonesia). Styling: SCSS Modules with BEM naming (NO Tailwind). Icons: lucide-react. Utilities: clsx. Light mode only. Locales: Indonesian (`id`, default), English (`en`).

---

## Commands

```bash
npm run check                # Run ALL checks: eslint + stylelint + prettier (run this first)
npm run lint                 # ESLint on src/
npm run lint:css             # Stylelint on src/**/*.scss
npm run format:check         # Prettier check on src/**/*.{js,jsx,scss}
npm run build                # Docusaurus build — catches broken imports, missing refs
npm run clear                # Clear Docusaurus cache before build if stale
npm run write-translations   # Regenerate i18n files (CI verifies these stay in sync)
npm run write-heading-ids    # Regenerate heading IDs
```

**Verification order:** `npm run check` → `npm run build`. No test framework.

- **Only run `npm run check` when the user asks to commit.** During prototyping/iteration, don't run checks unless asked.
- **Before staging or committing code, style, configuration, or asset changes on the user's behalf, dispatch the `convention-review` skill against the diff.** Apply findings before proceeding with the verification commands below. Skip it for documentation, content-only Markdown, and `.kiro/` skill changes unless the user asks for a review.
- After JS/JSX or structural changes (at commit time): run `npm run check && npm run build`
- After CSS/SCSS-only changes (at commit time): run `npm run lint:css && npm run format:check` (build not needed — it restarts the dev server)
- `src/data/*.js` and `i18n/` are excluded from ESLint and Prettier (configured in eslint.config.mjs and .prettierignore)

**CI runs on PRs and pushes to main** (Node 20): eslint → stylelint → prettier → i18n sync check → build. The i18n sync step runs `write-translations` then `git diff --exit-code i18n/`, so always regenerate translations before committing if you changed translatable text.

---

## Folder Structure

```
src/
├── components/
│   ├── Home/          # Homepage sections
│   ├── UI/
│   │   ├── Atoms/     # Primitives (buttons, shapes)
│   │   ├── Molecules/ # Composed cards, items
│   │   └── Carousel/
│   └── Docs/          # Doc-specific components
├── data/              # Single source of truth for all content
├── pages/             # Docusaurus pages
├── theme/             # Swizzled theme components (Navbar, Footer, DocSidebar)
└── css/               # Global styles (custom.scss) + SCSS abstracts (tokens, functions, mixins)
```

---

## Code Conventions

### Naming & Files

- Components: `PascalCase/` folder with `index.js` inside, **default export**
- Data files: `camelCase.js` in `src/data/`, **named export**
- CSS: `styles.module.scss` alongside component, BEM naming (`.block__element--modifier`)
- Translation IDs: `namespace.section.key` (e.g., `homepage.hero.title`)
- Single quotes

### Import Order

React/Docusaurus core → external libs → `@site` alias → relative imports.

### Data Separation (MANDATORY)

ALL user-facing text, titles, descriptions, links, and image refs **MUST** live in `src/data/*.js`. Never hardcode text in components. Use `@docusaurus/Translate` for all strings:

```javascript
import { translate } from '@docusaurus/Translate';
export const heroData = {
  title: translate({
    id: 'homepage.hero.title',
    message: 'Default Indonesian text here',
    description: 'The main title on the homepage hero section',
  }),
};
```

### Links

Use Docusaurus `<Link to="...">` for internal links, never `<a>`.

### React

Use `const` arrow + default export pattern when hoisting named variables:

```javascript
const CTAButton = ({ label, to, variant = 'primary', ...props }) => {
  // ...
};
export default CTAButton;
```

### CSS & Design

SCSS Modules only (`.module.scss`), no Tailwind, no inline styles (except CSS custom properties). BEM naming via SCSS nesting (`&__element`, `&--modifier`). `rem` for layout, `em` for component-internal. No `clamp()`.

### Content Security Policy

The deployed site uses a strict CSP. Use SCSS modules and store images in `static/img`; normal changes then need no CSP work. Do not add inline scripts, inline style values, or external hosts for images, fonts, scripts, iframes, or API calls without raising it first. `npm run build` does not detect CSP violations.

**Desktop-first approach:** Default styles target ≥ 1440px. Use `@include respond-to('<breakpoint>')` to override for smaller screens. Single mixin, `max-width` only — no `respond-above`.

**Visual verification:** Token-only swaps (color, spacing, font-size) need no visual check. For layout changes (flex, grid, breakpoints, new components, clip-paths), delegate to the `@visual-check` subagent — never consume screenshots in the main context.

### Tooling Rules

- **Installing dev tools** (CLI binaries, language servers, formatters): agents may install missing tools the project documents or scripts reference (e.g. `playwright-cli`). Surface what's being installed before doing it.
- **Adding project dependencies** (anything that modifies `package.json` / `package-lock.json`): ask first. This goes in PRs and affects the whole team.
- **Visual checks use `playwright-cli` + Chromium.** Session-based: `playwright-cli open <url>` → `playwright-cli screenshot` → `playwright-cli close`. Don't use `npx playwright` or other variants. Don't add `playwright` or `puppeteer` as project dependencies.

### Comments

No trivial comments. OK: CSS section dividers (`/* === SECTION === */`) and JSDoc for complex functions.
