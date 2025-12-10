# Docusaurus Codebase Map

## 1. File Tree Structure
```
/
├── docs/                      # Documentation source files
│   ├── about/                 # About section
│   │   ├── intro.md
│   │   └── main.md            # Category landing page
│   ├── usecase/               # Use Cases section
│   │   ├── intro.md
│   │   └── main.md            # Category landing page
│   ├── services/              # Services section
│   │   ├── intro.md
│   │   └── main.md            # Category landing page
├── src/                       # Source code
│   ├── components/            # React components
│   │   ├── Home/              # Page-specific components
│   │   │   ├── UseCases/      # New Use Cases section
│   │   │   ├── OurServices/   # New Our Services section
│   │   │   ├── Hero/          # Hero section
│   │   │   └── Faq/           # FAQ section
│   │   ├── Docs/              # Documentation components (New)
│   │   │   ├── DocCard/       # Navigation card
│   │   │   ├── DocSteps/      # Step-by-step guide
│   │   │   ├── DocCallout/    # Custom alerts
│   │   │   └── ImageCard/     # MDX Image Card component
│   │   ├── UI/                # Reusable UI components
│   │   │   ├── Atoms/         # Basic building blocks
│   │   │   │   └── Button/    # Semantic Link/Button wrapper
│   │   │   ├── Molecules/     # Composite components
│   │   │   │   ├── GlassCard/ # Glassmorphism card
│   │   │   │   └── ModernCard/# Image overlay card
│   │   │   └── Carousel/      # Generic carousel component
│   ├── data/                  # Data primitives
│   │   ├── heroData.js        # Data for Hero section
│   │   ├── useCasesData.js    # Data for Use Cases section
│   │   ├── servicesData.js    # Data for Services section
│   │   └── faqData.js         # Data for FAQ section
│   ├── css/                   # Custom CSS
│   │   └── custom.css         # Global styles
│   ├── pages/                 # Pages (e.g., index.js)
│   └── theme/                 # Theme overrides (swizzled components)
│       └── Footer/            # Swizzled Footer to hide on docs pages
├── docusaurus.config.js       # Main configuration file
├── sidebars.js                # Sidebar configuration
├── package.json               # Dependencies and scripts
└── static/                    # Static assets (images, etc.)
```

## 2. Component Map (src/components)

| Component | Type | Purpose | Key Props |
| :--- | :--- | :--- | :--- |
| **UseCases** | Home | Animated Use Cases section with tabs. | None |
| **OurServices** | Home | Animated Services section with timeline layout. | None |
| **Hero** | Home | Hero section with image grid and stats. | None |
| **Faq** | Home | FAQ section with accordion style, using `faqData`. | None |
| **Button** | Atom | Wrapper for Docusaurus `<Link>` or `<button>` with standardized styles. | `to`, `variant`, `size`, `block`, `onClick` |
| **GlassCard** | Molecule | Glassmorphism card with icon, title, description, and action buttons. | `icon`, `title`, `description`, `buttonText`, `link` |
| **ModernCard** | Molecule | Card with image overlay and hover effects. | `image`, `title`, `description`, `link` |
| **Carousel** | UI | Generic responsive carousel with Swiper/Embla-like behavior. | `items`, `renderItem`, `itemsPerView` |
| **DocCard** | Docs | Glass-styled card for docs navigation. | `title`, `description`, `to` |
| **DocSteps** | Docs | Step-by-step list with custom numbering. | `children` |
| **DocCallout** | Docs | Custom alert/admonition styled for "Digital Earth". | `type`, `title`, `children` |
| **ImageCard** | Docs | Image-based card with hover reveal description. | `image`, `title`, `description`, `to` |

## 3. Documentation Structure
**Source:** `sidebars.js`
*   **Sidebar Name:** `docsSidebar`
*   **Groups:**
    *   **About:** General project info based on `docs/about`.
    *   **Use Cases:** Usage scenarios based on `docs/usecase`.
    *   **Services:** Service details based on `docs/services`.

## 4. Key Configurations
**File:** `docusaurus.config.js`

*   **Site Info:**
    *   **Title:** Piksel
    *   **URL:** https://staging.pik-sel.id
    *   **i18n:** `id` (default), `en`.
*   **Theme Config:**
    *   **Color Mode:** Forced **Dark Mode**.
    *   **Navbar:** Links to "Dokumentasi", "Penggunaan", "Layanan", "FAQ" (anchor links). Language dropdown enabled.
    *   **Sidebar:** Swizzled `DocSidebar` to include sticky footer.
    *   **Footer:** Swizzled to be hidden on Docs pages. Default 4-column layout for other pages.
*   **Presets:** `classic`.

## 5. Major Dependencies
**File:** `package.json`

*   **Core:** `@docusaurus/core`, `@docusaurus/preset-classic`
*   **React:** `react`, `react-dom`
*   **UI/Icons:** `lucide-react`, `clsx`
*   **MDX:** `@mdx-js/react`
