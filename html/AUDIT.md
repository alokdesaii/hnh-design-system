# Design System Audit

Running tracker for the H&H design system audit. Nothing is pushed to GitHub
until the full audit is signed off.

**Phase order:** 0 Global fixes → 1 Automated sweep → 2 Visual (page by page) →
3 Accessibility (page by page) → 4 Architecture.

---

## Phase 0 — Global fixes ✅ COMPLETE

| # | Item | Status | Verification |
| :-- | :-- | :-- | :-- |
| 0.1 | Resizable page crash (6 hooks in a conditional IIFE) | ✅ Fixed | `rules-of-hooks` 6 → 0; Button → Resizable renders, console clean |
| 0.2 | Google Fonts `@import` blocking first paint | ✅ Fixed | Moved to `preconnect` + `<link>` in `index.html`; `document.fonts` confirms Inter loaded |
| 0.3 | Missing `<meta name="description">` | ✅ Fixed | Present in `index.html` |
| 0.4 | No `prefers-reduced-motion` support | ✅ Fixed | CSS block in `index.css` + `<MotionConfig reducedMotion="user">` for Framer's 141 animations |
| 0.5 | Dead top-level state (6 declarations) | ✅ Removed | Build passes |

**Lint:** 82 → 61 errors. The remaining 61 are *page-scoped*, so they are
deliberately deferred to each page's turn in Phase 2 rather than fixed blind:

- 38 × `no-explicit-any` — mostly `setX(opt.id as any)` in per-page control
  arrays. Each is a type hole that would hide a typo'd option id.
- 16 × `no-unused-vars` + 6 × `no-useless-assignment` — see "code generator
  bug" below; these are symptoms, not dead code.
- 1 × `react-refresh/only-export-components` — `LegacyPlatforms.tsx` exports a
  non-component alongside components.

---

## Findings parked for Phase 2 (page by page)

Discovered during Phase 0 but page-specific, so they are fixed when that page
comes up for review.

| Page | Finding | Severity |
| :-- | :-- | :-- |
| **Avatar** | Code generator emits `${flexClasses}` / `${shapeClass}` as *literal text*. The snippet a user copies references variables that do not exist in the copied code — it will not compile. Same escaping bug suspected in Aspect Ratio and other generators. | High — the copy-code feature is the point of a playground |
| **Theme Builder** | `tbFontFamily` is written by the reset button but never read. The font-family control does not affect the preview. | Medium |
| **Command** | `playCommandIsOpen` is set by the Escape handler but never read. Open state does not drive the preview. | Medium |
| **Avatar / Badge / Tooltip / others** | ~22 computed class variables (`sizeClass`, `statusColor`, `borderClass`, `modeSnippet`, `activeStyle`…) are assigned then never used — each one is a control whose output silently goes nowhere. | Medium |

---

## Phase 1 — Automated sweep ⬜ NOT STARTED

Load all 76 pages; capture console errors, blank renders, failed navigations.
Produces a triage list. Purpose: find out whether Resizable had siblings before
investing in the visual pass.

## Phase 2 — Visual audit, page by page ⬜ NOT STARTED

Per page: screenshot desktop + mobile, light + dark → check spacing rhythm,
alignment, hierarchy, dark-mode parity → measure rendered contrast against WCAG
AA → report → approval → fix → verify → next.

Order (highest visibility first): Introduction → Design Principles →
8 Foundations → 8 Legacy Platforms → 58 Components.

### Progress: 0 / 76

## Phase 3 — Accessibility, page by page ⬜ NOT STARTED

Keyboard tab order, focus visibility, ARIA correctness.

## Phase 4 — Architecture ⬜ NOT STARTED

Split `App.tsx` (29.5k lines, ~375 `useState`), add route-level code splitting.
Currently one 1.72 MB chunk (317 KB gzipped) for all 76 pages. Deliberately
last, so no page gets audited twice.

---

## Verified clean (no action needed)

No `console.log` in source · all 15 `<img>` have `alt` · 82 `aria-label`s
present · the 3 `onClick` divs are modal backdrops (correct pattern) · 1,170
`dark:` variants · all 76 nav entries resolve to implemented pages, no dead
links.
