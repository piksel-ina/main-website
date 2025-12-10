# Piksel UI Development Guidelines

This document outlines the architectural patterns, folder structure, and best practices for developing UI components in the Piksel Docusaurus project.

## 1. Architecture & Folder Structure

We follow a modified **Atomic Design** principle to organize components, ensuring separation between reusable UI elements and page-specific content.

- **`src/components/UI/`**: Pure, reusable UI components.
    - **`Atoms/`**: Smallest building blocks (e.g., `Button`, `Badge`).
    - **`Molecules/`**: Combinations of atoms (e.g., `GlassCard`, `ModernCard`).
    - **`Organisms/`**: Complex reusable sections (e.g., `Carousel`).
- **`src/components/<Feature>/`**: Feature-specific or Page-specific layouts.
    - Example: `src/components/Home/` contains `Articles`, `OurServices`, `PikselOurServices`, `UseCases`, `PikselHero`, `faq`.
    - **`src/components/Docs/`**: Components specifically for MDX documentation (`DocCard`, `DocSteps`, `DocCallout`).
    - These components orchestrate data and UI components but shouldn't hold the core aesthetic styles (which belong to UI components).
- **`src/data/`**: Source of truth for content.
    - **DO NOT** hardcode text, links, or image URLs inside components.
    - Import data from `src/data/` (e.g., `heroData.js`).

## 2. Design & Aesthetic System

Our visual language is **"Digital Earth / Futuristic Data"**. It relies heavily on dark mode, glowing accents, and fluid layouts.

### A. Core Visual Traits
- **Atmosphere**: Dark backgrounds (`#1b1b1d`) with vibrant neon accents (Cyan, Purple, Emerald).
- **Background Elements**:
    - **Glowing Orbs**: Large, blurred radial gradients (`filter: blur(64px)`) floating in the background.
    - **Grid Patterns**: Subtle linear gradients creating a grid mesh (`opacity: 0.1`).
    - **Scan Lines**: Animated lines (`animation: scan`) to simulate data processing.
- **Containers**:
    - **Glassmorphism**: Semi-transparent backgrounds (`rgba(26, 31, 46, 0.6)`) with `backdrop-filter: blur(10px)`.
    - **Tech Borders**: Use "Corner Accents" (border on corners only) or Gradient Borders instead of solid boxes.

### B. Typography & Spacing (Fluidity)
- **MANDATORY**: Use `clamp()` for **ALL** major font sizes, padding, and margins to ensure seamless mobile-to-desktop transition.
    - *Example*: `font-size: clamp(1.5rem, 4vw, 2.5rem);`
    - *Example*: `padding: clamp(2rem, 8vw, 6rem) 0;`


### C. Animation & Interaction
- **Passive Motion**: Background elements (orbs) should have subtle "Float" or "Pulse" animations.
- **Active Motion**: Hover states should be snappy (`0.3s ease`).
    - *Common effects*: Icon glow intensity increases, text color shifts to white, buttons reveal a "shine".

### D. Responsive Design (Desktop First)
- **Strategy**: Write styles for Desktop first (base styles), then use `max-width` media queries to adapt for smaller screens.
- **Breakpoints**:
    - **Large Screen**: `1440px` (Use `@media (min-width: 1440px)` for overrides)
    - **Desktop/Laptop**: Default styles
    - **Docusaurus Breakpoint**: `996px` (Use `@media (max-width: 996px)`)
    - **Tablet**: `768px` (Use `@media (max-width: 768px)`)
    - **Mobile**: `500px` (Use `@media (max-width: 500px)`)
- **Structure**:
    - Keep media queries **immediately after** the class they modify to improve maintainability.

## 3. Component Development Rules

### A. Creating New Components
1.  **Is it reusable?**
    - Yes -> Place in `src/components/UI/`.
    - No -> Place in `src/components/<PageName>/` or `src/components/Docs/` if it's for documentation.
2.  **Styling**:
    - Use **CSS Modules** (`styles.module.css`) for component-specific styles.
    - **Use `clamp()`** for responsiveness. **Avoid** fixed pixel values for layout.
    - Use **Global Variables** (defined in `custom.css`) for colors.
    - Use `color-mix()` for transparencies:
        - *Good*: `background-color: color-mix(in srgb, var(--active-color) 10%, transparent);`
    - Use `lucide-react`.
    - Wrap icons in a `div` if adding glow effects.

### B. Data & Content
1.  **Decoupling**:
    - Components should accept data via `props`.
    - Page/Container components are responsible for importing the data.
2.  **Internationalization**:
    - Always wrap text strings in `@docusaurus/Translate`.
    - **Workflow**: Run `npm run write-translations -- --locale en` to extract new strings before adding translations.

### C. Accessibility (a11y)
1.  **Semantic HTML**:
    - Use `<h3>` for card titles inside a section.
    - Use `<button>` or Docusaurus `<Link>` for interactive elements.
2.  **Focus States**:
    - Ensure interactive elements have visible focus states (often handled by the "glow" borders).

## 4. Best Practices Checklist

- [ ] **Aesthetics Check**: Did I use `clamp()`? Are there background "Orbs" or "Grids"?
- [ ] **Data Check**: Is the text hardcoded? -> Move to `src/data/`.
- [ ] **Style Check**: Am I using a hardcoded hex color? -> Use a CSS variable or `color-mix`.
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
