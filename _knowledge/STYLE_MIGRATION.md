# Style Migration Guide: Dark Blue Theme

This document outlines changes needed to migrate from the current "Corporate Light / Clean Tech" theme to the new Dark Blue Theme.

---

## 1. Color Palette Migration

### Current vs Target

| Token | Current (OKLCH) | Target (Hex) | Notes |
|-------|-----------------|--------------|-------|
| `--ifm-color-primary` | `oklch(0.145 0.02 240)` | `#1a2b4a` | Deep Navy → Dark Blue |
| `--ifm-color-primary-light` | `oklch(0.25 0.02 240)` | `#2d4a7c` | Medium Blue |
| `--ifm-color-primary-lighter` | `oklch(0.35 0.02 240)` | `#4a90e2` | Light Blue (Accent) |
| `--ifm-background-color` | `oklch(1 0 0)` | `#ffffff` | Keep white |
| `--ifm-font-color-base` | `oklch(0.145 0.02 240)` | `#333333` | Slightly lighter |

### New Color Tokens to Add

```css
:root {
  /* Primary Colors */
  --color-primary: #1a2b4a;      /* Dark Blue - main brand */
  --color-secondary: #2d4a7c;    /* Medium Blue */
  --color-accent: #4a90e2;       /* Light Blue - interactive elements */
  
  /* Backgrounds */
  --color-background: #f5f5f5;   /* Light Gray - page background */
  --color-surface: #ffffff;      /* White - cards/sections */
  
  /* Text */
  --color-text-primary: #1a2b4a; /* Dark text on light */
  --color-text-secondary: #333333; /* Body text */
  --color-text-inverse: #ffffff; /* White text on dark */
  
  /* Borders */
  --color-border: #e0e0e0;
}
```

---

## 2. Typography Migration

### Font Weights
| Element | Current | Target |
|---------|---------|--------|
| H1 | 600 (Semi-bold) | 300 (Light) |
| H2 | 600 (Semi-bold) | 600 (Semi-bold) |
| Body | 400 | 400 (Regular) |

### Font Sizes
| Element | Current | Target |
|---------|---------|--------|
| H1 | `clamp(2.5rem, 5vw, 4rem)` | `48px` (clamp) |
| H2 | `clamp(2rem, 4vw, 3rem)` | `32px` |
| Body | `16px` | `16px` |

### Letter Spacing
- Add `letter-spacing: -1px` for H1
- Body line-height: `1.6`

---

## 3. Component Styles

### Buttons

| Variant | Current | Target |
|---------|---------|--------|
| Primary | Dark Navy bg | `#1a2b4a` bg, white text |
| Secondary | Outline | White bg, `#1a2b4a` border + text |
| Accent | Teal/Amber | `#4a90e2` bg, white text |

**Button Specs:**
- Padding: `12px 30px`
- Border-radius: `4px`
- Font-weight: `600`
- Hover: `transform: translateY(-2px)` + shadow

### Cards

| Property | Current | Target |
|----------|---------|--------|
| Border-radius | `0.64rem` | `8px` |
| Box-shadow | `0 0.32rem 0.48rem...` | `0 2px 8px rgba(0,0,0,0.1)` |

---

## 4. Layout & Spacing

### Section Padding
- Current: Varies
- Target: `60px` for sections

### Container
- Max-width: `1200px`
- Border-radius: `8px`
- Box-shadow: `0 2px 10px rgba(0,0,0,0.1)`

### Grid
- Color grid: `repeat(auto-fit, minmax(200px, 1fr))`
- Gap: `20px`

---

## 5. Hero Section

### Current
- Gradient with geometric shards
- Deep Navy background

### Target
```css
.hero {
  height: 500px;
  background: linear-gradient(135deg, #1a2b4a 0%, #2d4a7c 100%);
}

.hero::before {
  /* Right-side decorative element */
  right: 0;
  top: 0;
  width: 60%;
  height: 100%;
  background: center/cover;
  opacity: 0.3;
}
```

---

## 6. Header/Navbar

### Current
- Height: `8rem`
- Transparent → glassmorphism on scroll

### Target
```css
.header {
  background: white;
  padding: 20px 40px;
  border-bottom: 1px solid #e0e0e0;
}

.search-box {
  background: #1a2b4a;
  color: white;
  padding: 8px 20px;
  border-radius: 4px;
}
```

---

## 7. Migration Checklist

- [ ] Update `--ifm-color-primary` in `custom.css`
- [ ] Add new color tokens
- [ ] Update button component styles
- [ ] Update card component styles
- [ ] Update typography scale
- [ ] Update Hero section gradient
- [ ] Update Navbar/Header styles
- [ ] Test all color contrast ratios

---

## 8. Files to Modify

1. `src/css/custom.css` - Main color tokens
2. `src/components/UI/Atoms/Button/` - Button variants
3. `src/components/UI/Atoms/ShapeContainer/` - Remove teal accents
4. `src/components/Home/Hero/` - Update gradient
5. `src/theme/Navbar/` - Update navbar styles

---

## 9. Notes

- Keep light mode only (dark mode disabled)
- Maintain accessibility contrast ratios
- The `#1a2b4a` primary is similar to current but slightly warmer
- Accent changes from teal to light blue - may need visual approval
