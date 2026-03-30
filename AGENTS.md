# Agent Guidelines for Piksel Main Website

Docusaurus 3.x documentation site with React 19, classic preset. Satellite imagery + cloud computing platform by Badan Informasi Geospasial (Indonesia). Styling: CSS Modules with BEM naming (NO Tailwind). Icons: lucide-react. Utilities: clsx. Light mode only. Locales: Indonesian (`id`, default), English (`en`).

---

## Build Commands

```bash
npm run build                # Verify correctness — catches broken imports, missing refs, build errors
npm run clear                # Clear cache before build if stale
npm ci                       # Clean install for CI
npm run write-translations   # Regenerate i18n files
npm run write-heading-ids    # Regenerate heading IDs
```

No test framework, no linter. Use `npm run build` to verify.

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
└── css/               # Global CSS (custom.css)
```

---

## Code Conventions

### Naming & Files

- Components: `PascalCase/` folder with `index.js` inside, **default export**
- Data files: `camelCase.js` in `src/data/`, **named export**
- CSS: `styles.module.css` alongside component, BEM naming (`.block__element--modifier`)
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

CSS Modules only, no Tailwind, no inline styles (except CSS custom properties). BEM naming. `rem` for layout, `em` for component-internal. No `clamp()` — use type/spacing tokens, override in media queries. Type scale (`--text-xs` → `--text-5xl`) and spacing scale (`--space-1` → `--space-10`) defined in `custom.css`. See **styling-system** skill for full token reference, breakpoints, and clip-path shapes.

### Comments

No trivial comments. OK: CSS section dividers (`/* === SECTION === */`) and JSDoc for complex functions.
