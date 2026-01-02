# Piksel UI Development Guidelines

This document outlines the architectural patterns, folder structure, and best practices for developing UI components in the Piksel Docusaurus project.

## 1. Architecture & Folder Structure

We follow a modified **Atomic Design** principle to organize components, ensuring separation between reusable UI elements and page-specific content.

- **`src/components/UI/`**: Pure, reusable UI components.
    - **`Atoms/`**: Smallest building blocks (e.g., `Button`, `ShapeContainer`).
    - **`Molecules/`**: Combinations of atoms (e.g., `CleanCard`, `ModernCard`).
    - **`Organisms/`**: Complex reusable sections (e.g., `Carousel`).
- **`src/components/<Feature>/`**: Feature-specific or Page-specific layouts.
    - Example: `src/components/Home/` contains `UseCases`, `OurServices`, `Hero`, `Faq`.
    - **`src/components/Docs/`**: Components specifically for MDX documentation (`DocCard`, `DocSteps`, `DocCallout`).
- **`src/data/`**: Source of truth for content.
    - **DO NOT** hardcode text, links, or image URLs inside components.
    - Import data from `src/data/` (e.g., `heroData.js`).

## 2. Design & Aesthetic System

Our visual language is **"Corporate Light / Clean Tech"**. It utilizes a light color scheme (`OKLCH` mapped to `IFM`) with sharp geometric accents ("Shards", "Cut Corners").

### A. Core Visual Traits
- **Atmosphere**: Clean White backgrounds (`var(--ifm-background-color)`) with Deep Navy text.
- **Accents**: 
    - **Teal** (`--color-accent-teal`) for highlights.
    - **Amber** (`--color-accent-amber`) for warmth.
- **Shape Language**:
    - **Clip-Path**: Use `clip-path` for *Section Backgrounds* and *Image Containers* to add uniqueness (Cut Corners, Slanted Separators).
    - **Cards**: Clean, rectangular cards with subtle border and shadow lift on hover.

### B. Typography & Spacing
- **Base Size**: `html { font-size: 62.5%; }` (Sets `1rem = 10px`).
- **Units**:
    - **Layouts & Global Padding**: Use `rem`. (e.g., `2rem` = 20px).
    - **Component Internals (Buttons/Icons)**: Use `em` for padding/sizing to scale with font.
    - **Media Queries**: Use `em`. (Calculate as `TargetPx / 16`).
- **Headings**: **Outfit** (Modern, Geometric).
- **Body**: **Inter** (Clean, Legible).
- **Code**: **JetBrains Mono** or **Geist Mono**.
- **MANDATORY**: Use `clamp()` for **ALL** major font sizes, padding, and margins.

### C. Responsiveness (Desktop First)
- **Strategy**: Write styles for Desktop first, then use `max-width` media queries.
- **Breakpoints**:
    - **Large Screen**: `1440px`
    - **Desktop**: `996px`
    - **Tablet**: `768px`
    - **Mobile**: `500px`
- **Navbar Scroll**: The navbar uses a custom scroll listener in `src/theme/Navbar/Layout/index.js` to handle hiding on scroll for mobile devices (<= 996px), supplementing Docusaurus's default behavior.

## 3. Component Development Rules

### A. Styling (BEM & No Tailwind)
1.  **Methodology**: Use **BEM** (Block Element Modifier) naming convention in `styles.module.css`.
    - Example: `.card`, `.card__title`, `.card__button--primary`.
2.  **Colors**:
    - Use global `--ifm-*` variables defined in `custom.css`.
    - Example: `color: var(--ifm-color-primary);`
3.  **Utilities**:
    - Use global utility classes for shapes: `.bg-shape`, `.bg-shape--slanted`.

### B. Data & Content
1.  **Decoupling**: Components accept data via `props`.
2.  **Internationalization**: Always wrap text strings in `@docusaurus/Translate`.

### C. Accessibility (a11y)
1.  **Contrast**: Ensure high contrast between text and background (Navy on White).
2.  **Focus**: Maintain visible focus states for interactive elements.

## 4. Common Patterns

**Using the ShapeContainer Atom:**
```javascript
import ShapeContainer from "@site/src/components/UI/Atoms/ShapeContainer";

<ShapeContainer variant="slanted" color="neutral" />
```

**Using the CleanCard Molecule:**
```javascript
import CleanCard from "@site/src/components/UI/Molecules/CleanCard";

<CleanCard
  icon={MapIcon}
  title="Piksel Map"
  description="..."
  buttonText="Go"
  link="/map"
/>
```
