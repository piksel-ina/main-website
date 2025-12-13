# Agentic AI Rules & Constitution

This document serves as the primary "Constitution" for any AI agent working within this repository. Adherence to these rules is mandatory.

## 1. Human in the Loop (STRICT)
> [!CRITICAL]
> **ABSOLUTE PROHIBITIONS**
> - **NEVER** run `npm start`, `npm run serve`, or any local server commands.
> - **NEVER** use browser automation tools to verify changes.
> - **NEVER** assume the state of a running server.

**Protocol**:
- You write the code.
- The User runs the server and validates the changes in the browser.
- Rely on the User's feedback for visual correctness.

## 2. Meta-Documentation Maintenance
You are responsible for maintaining the "Brain" of the project.
- **`CODEBASE_MAP.md`**: 
    - **MUST** be updated immediately when you add, remove, or rename files.
    - **MUST** be updated if you significantly change the purpose or content of an existing file.
    - Keep the file tree and component tables synchronized with reality.
- **`QUICK_GUIDELINE.md`**:
    - **MUST** be updated if you establish a new common pattern (e.g., a new way to handle data fetching).
    - **MUST** be updated if you discover a recurring "gotcha" or best practice.

## 3. Data Source & Content
- **Single Source of Truth**: All content for the homepage and major components **MUST** reside in `src/data/`.
    - **Do NOT** hardcode text, titles, or descriptions inside React components.
    - **Do NOT** embed large JSON objects directly in component files.
    - Import data: `import { heroData } from "@site/src/data/heroData";`

## 4. Design & Aesthetics ("Corporate Light")
- **Visual Style**: Clean, White backgrounds, Deep Navy text, Teal/Amber accents.
- **Shape Language**: Use `clip-path` for geometric accents ("Shards", "Cut Corners").
- **Animations**: Subtle micro-interactions (hover lift, smooth transitions).
- **Typography**: 
    - Headings: **Outfit**
    - Body: **Inter**
    - **MANDATORY**: Use `clamp()` for strict control over responsive sizing.

## 5. Coding Standards
- **CSS Architecture**: 
    - **NO Tailwind CSS**.
    - Use **CSS Modules** (`styles.module.css`) with **BEM** naming conventions.
    - Use `custom.css` variables (`--ifm-color-*`) for consistency.
- **React/Docusaurus**:
    - Use `@docusaurus/Translate` for all text strings.
    - Prefer Swizzling only when necessary; prioritize custom components in `src/components`.
- **Code Comments**:
    - **NO** trivial inline comments (e.g., `// Internal state`, `// set variable`).
    - **NO** comments explaining obvious JSX structure (e.g., `{/* Button wrapper */}`).
    - **ACCEPTABLE**: Section dividers in CSS (e.g., `/* === SECTION === */`) and JSDoc for complex logical functions.

## 6. Project Structure
- **Atomic Design**:
    - `Atoms`: Small, distinct (Buttons, Shapes).
    - `Molecules`: Combinations (Cards).
    - `Organisms`: Complex sections (Hero, Carousel).
- **Feature Folders**: Components specific to a page go in `src/components/<FeatureName>`.
