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

## Phase 1 — Automated sweep ✅ COMPLETE

**Result: 154 page loads, 0 failures. Resizable had no siblings.**

Method: an in-page collector hooked `console.error`, `window.onerror`, and
`unhandledrejection`, then every page was visited by hash navigation (the same
path a real user takes, which is what exposed the Resizable crash — direct loads
did not). Per page: rendered text length, DOM node count, captured errors.

| Pass | Pages | Errors | Blank renders |
| :-- | :-- | :-- | :-- |
| Ascending (nav order) | 77 | 0 | 0 |
| Descending (reverse) | 77 | 0 | 0 |

Both directions were run because hook-count crashes are order-dependent — a page
is only proven safe if it survives being entered from more than one predecessor.

Every page rendered with a plausible node count (min 200, max 1,451). No page
returned an empty or near-empty tree.

**Correction to earlier counts:** the system has **77 pages**, not 76 — the
Components group holds 59, not 58. Earlier totals in this file and in the README
were off by one.

## Phase 1b — Narrow-viewport overflow scan ✅ COMPLETE

All 77 pages scanned. Two metrics per page: page-level horizontal overflow, and
elements intrinsically wider than a 375 px phone that are **not** inside a
horizontal scroll container (wide tables and code blocks that scroll inside
their own box are the correct pattern, not a bug, so they are excluded).

**Tooling limitation, stated plainly:** the preview viewport is pinned at
496 CSS px — `innerWidth` would not move regardless of the requested size, so a
true 375 px test was not possible here. Media queries did report mobile (below
Tailwind's 640 `sm`), so the mobile layout branch was exercised. The second
metric exists to cover the gap. Anything below needing 375 px certainty should
be confirmed in real browser devtools.

**Result: 1 confirmed bug, 3 latent instances of the same root cause.**

| Page | Page overflow | Verdict |
| :-- | :-- | :-- |
| `components/alert-dialog` | **1176 px** | 🔴 Confirmed broken |
| `components/aspect-ratio` | 0 px (18 over-wide elements) | 🟠 Same defective grid class |
| `components/calendar` | 0 px (13 over-wide elements) | 🟠 Same defective grid class |
| `components/carousel` | 0 px (12 over-wide elements) | 🟠 Same defective grid class |
| Other 73 pages | 0–1 px (rounding) | ✅ Clean |

`components/navigation-menu` showed 3 elements at 384–486 px, but page overflow
is 0 and the widest is a `max-w-sm` toast container — not a defect.

### Root cause (single, shared)

| | Grid class |
| :-- | :-- |
| Dialog and 38 other pages (correct) | `grid grid-cols-1 lg:grid-cols-12` |
| The 4 offenders | `grid lg:grid-cols-12` ← no mobile column definition |

With no `grid-cols-1`, below `lg` the grid has no explicit column track, so it
falls back to content-driven implicit sizing. The playground code block's
intrinsic width then blows the column out to 2172 px, dragging every sibling
label and input to 2122 px with it. The `<pre>` already carries
`overflow-x-auto` — it never gets the chance to work, because a grid item with
`min-width: auto` refuses to shrink below its content.

**Fix:** add `grid-cols-1` to the 4 grids (`src/App.tsx` lines 11314, 12223,
20398, 22171). Matches the pattern the other 39 grids already use.

Status: ✅ **Applied and verified.** All 4 grids now carry `grid-cols-1`
(43 correct / 0 offenders). Build passes, 0 console errors.

| Page | Page overflow before → after | Over-wide elements before → after |
| :-- | :-- | :-- |
| `alert-dialog` | 1176 px → **0 px** | 33 → 1 |
| `aspect-ratio` | 0 px → 0 px | 18 → 1 |
| `calendar` | 0 px → 0 px | 13 → 1 |
| `carousel` | 0 px → 0 px | 12 → 1 |

The `<pre>` was confirmed to *scroll* rather than clip — `scrollWidth` 2138 vs
its client width, `overflow-x: auto` active, and all 4,455 characters of the
snippet still present. A "fix" that hid the code would not be a fix.

---

## ⚠️ Two environment caveats that affect Phase 2

**1. The preview pane's viewport is unstable.** Requested sizes are not
honoured: `innerWidth` was observed at 400, 445, 480, 484, 496, 500 and 857 px
across calls, regardless of what was asked for. Absolute pixel measurements
from this environment are therefore only trustworthy when a changed page and an
unchanged control page are measured back to back in the same call.

**2. Narrow-width screenshots from this pane are not reliable.** At mobile
sizes the pane renders content squeezed into a sliver with a large empty gutter
and one-word-per-line text. This was proven to be an artifact, not a real
defect: `components/dialog`, which was never modified, renders identically
broken. Phase 2's mobile visual review needs real browser devtools, or its
screenshots will show bugs that do not exist.

## Open — needs confirmation in real devtools

At `innerWidth` 400 px, **every** page overflows by 45–100 px, including pages
that were clean at 496 px (`button` 96 px, `dialog` 45 px). After the grid fix,
`alert-dialog` sits at 80 px — no longer an outlier, in line with everything
else, which is the expected result.

This looks like a separate site-wide narrow-width issue rather than anything
introduced here, but given caveat 1 it is **not** being treated as a confirmed
finding. To be re-tested at a genuine 375 px before any fix is attempted.

## Phase 2 — Visual audit, page by page ⬜ NOT STARTED

Per page: screenshot desktop + mobile, light + dark → check spacing rhythm,
alignment, hierarchy, dark-mode parity → measure rendered contrast against WCAG
AA → report → approval → fix → verify → next.

Order (highest visibility first): Introduction → Design Principles →
8 Foundations → 8 Legacy Platforms → 59 Components.

### Progress: 4 / 77

#### ✅ 4. Typography — complete

Contrast 0 failures both themes, heading outline clean, no raw markdown, all
images and buttons named. Type scale, weights and playground all render
correctly.

| Finding | Fix | Verified |
| :-- | :-- | :-- |
| All 6 playground controls had no accessible name — `<label>` present but no `htmlFor`, and the control was a sibling rather than a child, so screen readers announced "combo box" with no name | Paired each label with its control via `htmlFor`/`id` | 6/6 named, 0 unlabeled; **click-to-focus confirmed working** (clicking "Size" focuses `#typo-size`); playground still updates the generated class list |
| A 7th `<label>` ("Generated Class List") labelled a code block, not a form control — a label pointing at nothing | Changed to `<span>`, classes unchanged | 0 orphan labels |

---

### 🔴 Systemic finding: 245 of 297 form controls have no accessible name

Discovered on this page, measured across all 77. This is a **batch job for
Phase 3**, not page-by-page work.

| | |
| :-- | :-- |
| Form controls site-wide | 297 |
| Without accessible names | **245 (82%)** |
| Pages affected | **46 of 77** |
| `<label>` elements | 258 |
| ...using `htmlFor` | **8** |
| Controls with `aria-label` | **0** |

Worst offenders: `checkbox` 18/27, `radio-group` 18/27, `input` 16/18,
`input-group` 16/18, `input-otp` 16/16, `data-table` 11/11.

**The Label component page is the sharpest case:** 19 labels, none with
`htmlFor`, 16 of 18 controls unnamed — the page documenting labelling
demonstrates unlabelled controls. Its *generated code snippet is correct*
(`<Label htmlFor="input-field">` paired with `<input id="input-field">`), so the
code users are told to copy is right while the system's own demo markup is not.
This sits directly under that page's "WCAG AA compliance" claim.

Remaining after Typography: **239 across 45 pages.** Routes considered:
**A** `htmlFor`/`id` pairs everywhere (correct, adds click-to-focus, needs 239
unique stable ids) · **B** `aria-label` per control (scriptable from adjacent
label text, but no click-to-focus) · **C** check whether these render through
shared playground wrappers first, which could collapse many sites into a few
edits. Recommendation: investigate C, fall back to A.

#### ✅ 3. Colors — complete

Contrast was already clean in both themes (0 failures each).

**The built-in contrast tester was independently verified as mathematically
correct** — five edge cases, every threshold right, including the awkward
AAA-Large 4.5:1 boundary and exactly 21:1 for black-on-white (which confirms the
luminance formula). It agrees with this audit's own auditor, so two independent
implementations corroborate each other.

| Input | Ratio | AA-N / AA-L / AAA-N / AAA-L | Correct |
| :-- | :-- | :-- | :-- |
| `#00bfb3` on white | 2.31 | FAIL / FAIL / FAIL / FAIL | ✅ |
| `#00998f` on white | 3.53 | FAIL / PASS / FAIL / FAIL | ✅ |
| `#00736b` on white | 5.73 | PASS / PASS / FAIL / PASS | ✅ |
| `#767676` on white | 4.54 | PASS / PASS / FAIL / PASS | ✅ |
| white on black | 21.00 | PASS / PASS / PASS / PASS | ✅ |

| Finding | Fix | Verified |
| :-- | :-- | :-- |
| The light-mode teal substitution introduced on page 1 was undocumented — the palette presented `#00bfb3` as "Action Core" with no note that it fails AA for text on light | Added a callout under the Secondary Teal grid stating the rule with measured ratios: `#00bfb3` for dark mode, fills, borders and large accents; `#00736b` for text on light (5.48:1). Turns an undocumented workaround into a stated rule. | Renders in both themes; 0 contrast failures including the new callout |
| Intro copy overclaimed: "a **highly legible** secondary Teal" and "**All combinations** are optimized for contrast and accessibility" — both disproved by the page's own tester | Reworded to "Text pairings are validated against WCAG 2.1 AA — use the tester below to verify any combination before you ship it." | Old claim gone |
| Heading skip h2 → h4 on the tester's preview panel | `h4` → `h3` | No skips |

**Self-inflicted bug caught during verification:** the new callout initially
rendered as "maps--secondary to#00736b" — JSX strips the newline whitespace
before a tag on the following line. Fixed with explicit `{' '}` separators and
re-verified from the rendered text, not the source.

##### Second environment caveat

Screenshots from this preview pane appear pinned to the top of the document and
do not reflect programmatic scrolling, and `computer` scroll actions time out.
Content below the fold therefore has to be verified from the DOM (rendered text,
computed styles) rather than visually.

#### ✅ 2. Design Principles — complete

Contrast was already clean in both themes (0 failures each). No raw markdown,
all images had `alt`, all buttons had accessible names.

| Finding | Fix | Verified |
| :-- | :-- | :-- |
| Heading outline skipped h1 → h3 | The four principle cards are the page's top-level sections, so they were promoted `h3` → `h2` rather than inventing a hidden heading. Classes untouched. | No skips; headings still render 16px/700 — visually identical |
| Right-rail labels did not match the headings they linked to: "2. Secondary Clarity" vs "2. Turquoise/Teal Clarity", "3. Space & Confidence" vs "3. Generous Space & Confidence" | Synced `navigationGroups` labels to the real headings | Rail labels now match all four headings exactly |
| Card 4 claimed "H&H mandates **AA/AAA** WCAG contrast levels across all text" — AAA needs 7:1, which is unverified and which the brand teal (5.48:1) does not meet | Changed to "WCAG 2.1 AA" | Claim now matches what the system actually delivers, and the README |

Contrast re-confirmed after the changes: 0 failures light, 0 dark.

#### ✅ 1. Introduction — complete

| Finding | Fix | Verified |
| :-- | :-- | :-- |
| Brand teal `#00bfb3` failed WCAG AA on light backgrounds (2.20:1 — below both the 4.5:1 body and 3:1 large-text bars). 6 instances incl. the 60px hero accent. | Light mode remaps `--secondary` and `--color-secondary-500` to `#00736b` (5.48:1). Dark mode keeps the vivid brand teal. 4 lines of CSS instead of ~730 class edits. | Light 6 → **0** failures; dark **0**; screenshots both themes |
| Literal markdown `**bold**` rendering as visible asterisks | Converted to `<strong>`. 26 spans across 11 pages. | 0 remaining site-wide; all 12 affected pages re-checked |
| Literal backticks and `*italics*` in Tabs / Empty copy | Converted to `<code>` and `<em>` | Visually confirmed |
| Heading outline skipped h1 → h3 | "SHOWCASE PLAYGROUND" divider promoted `span` → `h2` (classes unchanged, so rendering is identical) | Outline now h1 → h2 → h3, no skips, single h1 |
| **Dark-mode flash on every load** — found while debugging measurement: `.dark` was applied only after React mounted, so dark-mode users saw a flash of light theme | Pre-paint script in `index.html` reads the stored theme before first paint | `bodyBg` now correct immediately on load |

**Checked and clean:** dark mode had zero contrast failures both before and after;
the Colors page palette still documents the true brand teal `#00bfb3` (swatches
render from a literal hex via inline style, so the token remap cannot make the
documentation contradict itself — explicitly verified).

**Follow-up for the Colors page review:** the light-mode AA substitution
(`#00736b`) is currently undocumented. That page should state both values and
when each applies.

##### Environment note discovered here

`getComputedStyle` returned **stale colours** — both foreground and background —
for any element that existed before the theme class flipped. This produced two
rounds of entirely fake findings (13, then 4) that were pure measurement
artifacts. Root cause was the same post-mount `.dark` application fixed above;
with the pre-paint script in place, readings are now correct. **Any contrast
audit must sanity-check that `body` background matches the active theme token
before its results are trusted.**

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
