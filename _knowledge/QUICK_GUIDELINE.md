# Piksel UI Development Guidelines

This document outlines the architectural patterns, folder structure, and best practices for developing UI components in the Piksel Docusaurus project.

## 1. Architecture & Folder Structure

We follow a modified **Atomic Design** principle to organize components, ensuring separation between reusable UI elements and page-specific content.

- **`src/components/UI/`**: Pure, reusable UI components.
    - **`Atoms/`**: Smallest building blocks (e.g., `Button`, `Badge`).
    - **`Molecules/`**: Combinations of atoms (e.g., `GlassCard`, `ModernCard`).
    - **`Organisms/`**: Complex reusable sections (e.g., `Carousel`).
- **`src/components/<Feature>/`**: Feature-specific or Page-specific layouts.
    - Example: `src/components/Home/` contains `Articles`, `OurServices`, `UseCases`, `PikselHero`.
    - These components orchestrate data and UI components but shouldn't hold the core aesthetic styles (which belong to UI components).
- **`src/data/`**: Source of truth for content.
    - **DO NOT** hardcode text, links, or image URLs inside components.
    - Import data from `src/data/homepageData.js` (or similar files).

## 2. Component Development Rules

### A. creating New Components
1.  **Is it reusable?**
    - Yes -> Place in `src/components/UI/`.
    - No -> Place in `src/components/<PageName>/`.
2.  **Styling**:
    - Use **CSS Modules** (`styles.module.css`) for component-specific styles.
    - Use **Global Variables** (defined in `custom.css`) for colors, fonts, and spacing to maintain consistency.
    - Example: `var(--ifm-color-primary)`, `var(--ifm-global-radius)`.
3.  **Icons**:
    - Use `lucide-react` for all icons.
    - Propagate icon sizing/styling via props if needed.

### B. Data & Content
1.  **Decoupling**:
    - Components should accept data via `props`.
    - Page/Container components (e.g., in `src/pages/` or `src/components/Home/`) are responsible for importing the data and passing it down.
2.  **Internationalization**:
    - Always wrap text strings in `@docusaurus/Translate`.
    - Example:
      ```javascript
      translate({
        id: 'component.title',
        message: 'Default Title',
        description: 'Context for translators'
      })
      ```

### C. Accessibility (a11y)
1.  **Semantic HTML**:
    - Use `<h3>` for card titles inside a section (where the section title is `<h2>`).
    - Use `<button>` or Docusaurus `<Link>` for interactive elements.
    - **Avoid** using `div` with `onClick` unless you handle `onKeyDown` and `role` attributes correctly.
2.  **Links**:
    - Use the project's `Button` atom which wraps Docusaurus `<Link>` automatically.
    - Ensure external links open securely (handled by Docusaurus, but good to verify).

## 3. Best Practices Checklist

- [ ] **Data Check**: Is the text hardcoded? -> Move to `src/data/`.
- [ ] **Style Check**: Am I using a hardcoded hex color? -> Use a CSS variable.
- [ ] **Structure Check**: Is this a generic card used in two places? -> Move to `src/components/UI/Molecules`.
- [ ] **A11y Check**: Can I tab to this button? Does the image have an `alt` tag?

## 4. Common Patterns

**Using the Button Atom:**
```javascript
import Button from "@site/src/components/UI/Atoms/Button";

<Button to="/docs/intro" variant="primary">
  Get Started
</Button>
```

**Using the GlassCard Molecule:**
```javascript
import GlassCard from "@site/src/components/UI/Molecules/GlassCard";

<GlassCard
  icon={MapIcon}
  title="Piksel Map"
  description="..."
  buttonText="Go"
  link="/map"
/>
```
