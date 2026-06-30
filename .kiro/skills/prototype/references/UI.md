# UI Prototype

Generate **several radically different UI variations** on a single route, switchable from a floating bottom bar. The user flips between variants in the browser, picks one (or steals bits from each), then throws the rest away.

If the question is about logic/state rather than what something looks like — wrong branch. Use [LOGIC.md](LOGIC.md).

## When this is the right shape

- "What should this page look like?"
- "I want to see a few options for this dashboard before committing."
- "Try a different layout for the settings screen."

## Two sub-shapes — strongly prefer sub-shape A

Default to sub-shape A whenever there's a plausible existing page to host the variants. Only reach for sub-shape B if the prototype genuinely has no nearby home.

### Sub-shape A — adjustment to an existing page (preferred)

The route already exists. Variants are rendered **on the same route**, gated by a `?variant=` URL search param. The existing data fetching, params, and auth all stay — only the rendering swaps.

### Sub-shape B — a new page (last resort)

Only use this when the thing being prototyped genuinely has no existing page to live inside. Create a **throwaway route** following whatever routing convention the project already uses. Name it so it's obviously a prototype (e.g. include the word `prototype` in the path or filename).

## Process

### 1. State the question and pick N

Default to **3 variants**. More than 5 stops being radically different and starts being noise — cap there.

### 2. Generate radically different variants

Each variant must be **structurally different** — different layout, different information hierarchy, different primary affordance, not just different colours. Three slightly-tweaked card grids isn't a UI prototype, it's wallpaper.

Hold each variant to:
- The page's purpose and the data it has access to
- The project's component library / styling system (TailwindCSS, shadcn, MUI, plain CSS, whatever)
- A clear exported component name, e.g. `VariantA`, `VariantB`, `VariantC`

### 3. Wire them together

```tsx
// pseudo-code — adapt to the project's framework
const variant = searchParams.get('variant') ?? 'A';
return (
  <>
    {variant === 'A' && <VariantA {...data} />}
    {variant === 'B' && <VariantB {...data} />}
    {variant === 'C' && <VariantC {...data} />}
    <PrototypeSwitcher variants={['A','B','C']} current={variant} />
  </>
);
```

### 4. Build the floating switcher

A small fixed-position bar at the bottom-centre of the screen with:

- **Left arrow** — cycles to the previous variant (wraps around)
- **Variant label** — shows the current variant key and name, e.g. `B — Sidebar layout`
- **Right arrow** — cycles forward (wraps around)

Behaviour:
- Clicking an arrow updates the URL search param (use the framework's router) so the variant is shareable and reload-stable.
- Keyboard: `←` and `→` arrow keys also cycle. Don't intercept arrow keys when an `<input>`, `<textarea>`, or `[contenteditable]` is focused.
- Visually distinct from the page (e.g. high-contrast pill, subtle shadow).
- **Hidden in production builds** — gate on `process.env.NODE_ENV !== 'production'`.

### 5. Hand it over

Surface the URL and the `?variant=` keys. The interesting feedback is usually "I want the header from B with the sidebar from C" — that's the actual design they want.

### 6. Capture the answer and clean up

Once a variant has won, write down which one and why. Then:

- **Sub-shape A** — delete the losing variants and the switcher; fold the winner into the existing page.
- **Sub-shape B** — promote the winning variant to a real route, delete the throwaway route and the switcher.

## Anti-patterns

- **Variants that differ only in colour or copy.** Real variants disagree about structure.
- **Sharing too much code between variants.** A shared `<Header>` is fine; a shared `<Layout>` defeats the point.
- **Wiring variants to real mutations.** Read-only prototypes are fine.
- **Promoting the prototype directly to production.** Rewrite it properly when you fold it in.
