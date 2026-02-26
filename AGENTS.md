# Agent Guidelines for Piksel Main Website

This is a Docusaurus-based documentation website using React 19. The site provides documentation for Piksel - a platform integrating satellite imagery with cloud computing technology.

## Project Overview

- **Framework**: Docusaurus 3.x with React 19
- **Styling**: CSS Modules with OKLCH color system
- **Icons**: lucide-react
- **Utilities**: clsx for conditional classes
- **Languages**: Indonesian (default), English
- **Node**: >=18.0

---

## Build Commands

### Development

```bash
npm start          # Start dev server with hot reload
npm run build      # Build for production
npm run serve      # Serve production build locally
npm run clear      # Clear Docusaurus cache
```

### CI/Build Check

```bash
npm ci             # Clean install dependencies
npm run build      # Production build (broken links: warn)
```

### Localization

```bash
npm run write-translations          # Generate translation files
npm run write-heading-ids           # Generate heading IDs for docs
```

### Testing

No dedicated test framework. Use `npm run build` to verify correctness.

---

## Critical Rules

### Human in the Loop (STRICT)

- **NEVER** run `npm start`, `npm run serve`, or local server commands
- **NEVER** use browser automation tools to verify changes
- **NEVER** assume the state of a running server
- Write code, then ask the User to run the server and validate in browser

---

## Code Style Guidelines

### Folder Structure

```
src/
├── components/
│   ├── Home/          # Page-specific (Hero, UseCases, Faq, etc.)
│   ├── UI/
│   │   ├── Atoms/     # Button, ShapeContainer
│   │   ├── Molecules/ # CleanCard, ModernCard
│   │   └── Carousel/
│   └── Docs/          # DocCard, DocSteps, DocCallout
├── data/              # Single source of truth for content
├── pages/             # Docusaurus pages
├── theme/              # Swizzled theme components
└── css/               # Global CSS
```

### Data Separation (MANDATORY)

- All content for homepage and components **MUST** be in `src/data/`
- Do NOT hardcode text, titles, or descriptions in React components
- Import data: `import { heroData } from "@site/src/data/heroData"`

### Naming Conventions

- Folders: `kebab-case`
- Components: `PascalCase` (e.g., `Hero`, `CTAButton`)
- Props: `camelCase`
- CSS: BEM in CSS Modules (`styles.module.css`)

### Import Order

1. React/Docusaurus (`@docusaurus/*`, `react`)
2. External libs (`lucide-react`, `clsx`)
3. Internal imports (`@site/src/...`, `@theme/...`)
4. Relative imports (`../Component`, `./styles.module.css`)

### React Patterns

- Default exports for components, named exports for data
- Functional components only
- Destructure props with defaults

```javascript
const CTAButton = ({ label, to, variant = "primary", ...props }) => {
  // ...
};
export default CTAButton;
```

### CSS Guidelines

- CSS Modules required (`.module.css`)
- OKLCH colors in `custom.css` (`--ifm-color-primary`, `--color-accent-teal`)
- Rem units (base 10px: `1.6rem` = `16px`)
- Use `clamp()` for responsive sizing

### Translations

Use `@docusaurus/Translate` for all user-facing text:

```javascript
import { translate } from "@docusaurus/Translate";

title: translate({
  id: "homepage.hero.title",
  message: "My Title",
  description: "Description",
});
```

### Internal Links

Use Docusaurus `Link`, not `<a>`:

```javascript
import Link from "@docusaurus/Link";
<Link to="/docs/path">Text</Link>;
```

---

## Design System

### Visual Style: "Corporate Light / Clean Tech"

- Clean white backgrounds, Deep Navy text
- Teal (`--color-accent-teal`) and Amber (`--color-accent-amber`) accents
- Shape language: `clip-path` for geometric accents ("Shards", "Cut Corners")

### Typography

- Headings: **Outfit**
- Body: **Inter**
- Code: **JetBrains Mono**

---

## Meta-Documentation Maintenance

Update these files when making structural changes:

- **`_knowledge/CODEBASE_MAP.md`**: File tree, component map
- **`_knowledge/QUICK_GUIDELINE.md`**: Patterns and best practices
- **`_knowledge/AGENT_RULES.md`**: Constitution rules

---

## Common Pitfalls

1. Don't use `<a>` for internal links - use Docusaurus `Link`
2. Don't hardcode content - use `src/data/`
3. Don't use inline styles (except CSS custom properties)
4. Don't forget translation keys for user-facing text
5. Run `npm run build` before committing
