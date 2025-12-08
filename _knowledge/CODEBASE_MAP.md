# Docusaurus Codebase Map

## 1. File Tree Structure
```
/
├── docs/                      # Documentation source files
│   ├── penggunaan/            # Usage guide (new structure)
│   │   └── intro.md
│   ├── referensi/             # Reference docs (new structure)
│   │   └── intro.md
├── src/                       # Source code
│   ├── components/            # React components
│   │   ├── Home/              # Page-specific components
│   │   │   ├── Articles/      # Articles list section
│   │   │   ├── OurServices/   # Services section
│   │   │   ├── UseCases/      # Use Cases section
│   │   │   └── PikselHero.js  # New Hero section (Piksel look)
│   │   ├── UI/                # Reusable UI components
│   │   │   ├── Atoms/         # Basic building blocks
│   │   │   │   └── Button/    # Semantic Link/Button wrapper
│   │   │   ├── Molecules/     # Composite components
│   │   │   │   ├── GlassCard/ # Glassmorphism card
│   │   │   │   └── ModernCard/# Image overlay card
│   │   │   └── Carousel/      # Generic carousel component
│   ├── data/                  # Data primitives
│   │   └── homepageData.js    # Content for homepage sections
│   ├── css/                   # Custom CSS
│   │   └── custom.css         # Global styles
│   ├── pages/                 # Pages (e.g., index.js)
│   └── theme/                 # Theme overrides (swizzled components)
├── docusaurus.config.js       # Main configuration file
├── sidebars.js                # Sidebar configuration
├── package.json               # Dependencies and scripts
└── static/                    # Static assets (images, etc.)
```

## 2. Component Map (src/components)

| Component | Type | Purpose | Key Props |
| :--- | :--- | :--- | :--- |
| **Articles** | Home | Renders a carousel of featured articles using `articlesData`. | `articles` (opt), `title` (opt) |
| **OurServices** | Home | Renders "Layanan Kami" section using `servicesData` and `GlassCard`. | None |
| **UseCases** | Home | Renders "Contoh Pemanfaatan" section using `useCasesData` and `ModernCard`. | None |
| **PikselHero** | Home | New Hero section with image grid and stats. | None |
| **Button** | Atom | Wrapper for Docusaurus `<Link>` or `<button>` with standardized styles. | `to`, `variant`, `size`, `block`, `onClick` |
| **GlassCard** | Molecule | Glassmorphism card with icon, title, description, and action buttons. | `icon`, `title`, `description`, `buttonText`, `link` |
| **ModernCard** | Molecule | Card with image overlay and hover effects. | `image`, `title`, `description`, `link` |
| **Carousel** | UI | Generic responsive carousel with Swiper/Embla-like behavior. | `items`, `renderItem`, `itemsPerView` |

## 3. Documentation Structure
**Source:** `sidebars.js`
*   **Sidebar Name:** `docsSidebar`
*   **Groups:**
    *   **Penggunaan:** Guides for using the platform.
    *   **Referensi:** API and technical references.

## 4. Key Configurations
**File:** `docusaurus.config.js`

*   **Site Info:**
    *   **Title:** Piksel
    *   **URL:** https://staging.pik-sel.id
    *   **i18n:** `id` (default), `en`.
*   **Theme Config:**
    *   **Color Mode:** Forced **Dark Mode**.
    *   **Navbar:** Links to "Dokumentasi", "Artikel". Language dropdown enabled.
    *   **Footer:** 4-column layout with links to new documentation paths.
*   **Presets:** `classic`.

## 5. Major Dependencies
**File:** `package.json`

*   **Core:** `@docusaurus/core`, `@docusaurus/preset-classic`
*   **React:** `react`, `react-dom`
*   **UI/Icons:** `lucide-react`, `clsx`
*   **MDX:** `@mdx-js/react`
