# Design System Audit

> **Working copy moved off Google Drive (2026-08-26).** The repo now lives at
> `~/dev/hnh-design-system`. Builds inside the Drive-synced folder had degraded
> from ~200 ms to **20 m 13 s** — every file write triggered Drive sync, and two
> `tsc` processes were found hung at 0 % CPU alongside three orphaned dev
> servers. The same build on local disk: **209 ms** (~250× faster).
>
> The clone was taken from the Drive repo, not from GitHub, so all unpushed
> commits came with it. `origin` points at GitHub. The Drive copy is now stale
> and should not be used — treat `~/dev/hnh-design-system` as the source of
> truth.

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

## 🔴 Duplicate pages — 8 nav entries render 4 pages

Found while reconciling why 92 source edits fixed 143 runtime instances.
Verified by **byte-for-byte comparison** of rendered text, not fingerprints.

| Nav entries | Actually render | Page title |
| :-- | :-- | :-- |
| Input, Input Group, Label, Textarea | one identical page | "Input & Label" |
| Select, Native Select | one identical page | "Select" |
| Button, Button Group | one identical page | "Button" |
| Checkbox, Radio Group | one identical page | "Checkbox & Radio" |

The combined pages are defensible where the title says so ("Input & Label",
"Checkbox & Radio"). What is not defensible is that **four components have a
sidebar entry and no documentation at all**:

- **Input Group** — page never mentions "input group"
- **Textarea** — page never mentions "textarea"
- **Native Select** — page never mentions "native"
- **Button Group** — identical to Button

Clicking "Textarea" gives an Input page. `implementedPaths` lists all four as
implemented, and the README advertises "59 components — each with overview,
specimens, and an interactive playground". The true figure is 55 documented
components across 69 distinct pages.

**Corrected earlier claim:** Phase 1 reported "all 77 nav entries resolve to
implemented pages, no dead links". That was measured by checking each route
rendered *something*, which it does. It never checked whether routes rendered
*distinct* content. The statement was true as worded and misleading as read.

**False positive caught:** two legacy-platform pairs (`edge-plus`/`ficoy`,
`h-business`/`coventrix`) initially looked duplicated on a 200-character
fingerprint. Full-text comparison shows they diverge after a shared 49-character
header and are genuinely distinct. They are **not** defects.

## Phase 2b — Full-site sweep ✅ COMPLETE (contrast + structure)

### ⚠️ CORRECTION: earlier contrast results were unreliable

The auditor used through pages 1–4 parsed only `rgb()`/`rgba()`. Tailwind v4
emits **`oklch()`** and **`oklab()`** for much of its palette. Those values
returned `null` and the element was **silently skipped** — so any text or
background in a modern colour space was never evaluated at all.

Consequences, stated plainly:
- "0 contrast failures" reported for **Introduction** and **Colors** was wrong.
  Introduction has 1 failure (emerald `+$189,400.00`, 2.47:1); Colors has 2
  (the contrast tester's own "AA Normal / PASS" badge at 3.65:1).
- Design Principles and Typography re-verified as genuinely clean.
- A first corrected pass then produced *false* failures — `oklch` unparsed →
  fell through to the white card behind → "white on white, 1.00:1". Those were
  not real either.

Fixed by implementing OKLCH/OKLab → sRGB conversion (validated: black→black,
white→white) **and** adding an unparsed-colour counter so a blind spot can never
again pass as a clean result. Both final sweeps report **0 unparsed formats**.

### Results (all 77 pages, both themes)

| | Light | Dark |
| :-- | :-- | :-- |
| Contrast failures | **128** | **45** |
| Pages clean | 22 / 77 | 44 / 77 |

Failures cluster into a small number of colour pairs, so this is a token
problem, not 173 individual bugs.

**Light mode — top classes**

| Pair | Count | Worst | Meaning |
| :-- | :-- | :-- | :-- |
| emerald `rgb(0,188,125)` on white | 19 | 2.47 | positive amounts, e.g. `+$189,400.00` |
| `--muted-foreground` on `--muted` | 19 | 4.34 | just under 4.5 — kbd keys, meta labels |
| rose `rgb(255,32,86)` on white | 10 | 3.75 | destructive text |
| red `rgb(251,44,54)` on white | 10 | 3.81 | negative amounts |
| slate-400 on `--muted` | 7 | 2.40 | specimen captions |
| emerald-600 both directions | 9 | 3.65 | success badges |
| amber `rgb(225,113,0)` on white | 3 | 3.20 | "Pending Review" |

**Dark mode — top classes**

| Pair | Count | Worst | Meaning |
| :-- | :-- | :-- | :-- |
| white on brand teal `#00bfb3` | 7 | 2.31 | teal fills with white text |
| slate-400 on light muted | 7 | 2.40 | light-mode panels shown inside dark pages |
| navy `#023e63` on dark surfaces | 5 | **1.59** | `text-primary` unreadable in dark mode |
| white on emerald-600 | 4 | 3.65 | success buttons |
| destructive `#7f1d1d`/red on dark | 3 | 3.74 | dark-mode destructive |

### The two systemic token defects

1. **`--primary` (`#023e63`) is identical in both themes.** Navy on the dark
   navy background measures 1.59:1 — effectively invisible. This is the exact
   mirror of the teal problem fixed on page 1, and it was missed then because
   those colours were unparseable.
2. **Semantic status colours are raw Tailwind palette values**, not tokens.
   Emerald/red/amber are used directly at 500-level weights that fail AA on
   white. There is no `--success` / `--warning` token to fix centrally, so each
   usage is its own edit unless tokens are introduced.

### Structure findings (light pass, all 77 pages)

- **26 pages with heading-level skips** — mostly `h2 → h4`, plus
  `h1 → h3` on 4 pages. Same class as pages 1–4.
- **7 Legacy Platform pages have no `h1` at all**; `components/typography` has
  **3** `h1`s (should be exactly one).
- **1 content leak**: `components/resizable` renders a raw attribute string in
  prose.
- **2 unnamed links** on `components/breadcrumb`.
- ~110 buttons flagged as unnamed — **not yet verified**, and likely to include
  false positives (icon buttons whose name comes from a child element). Needs
  the same verification discipline before it is reported as a defect count.
- All images have `alt` on every page.

### ✅ Token fixes applied

| | Before | After |
| :-- | :-- | :-- |
| Light failures | 128 | **45** |
| Light pages clean | 22 / 77 | **42 / 77** |
| Dark failures | 45 | **37** |
| Dark pages clean | 44 / 77 | **47 / 77** |

Every replacement value was **measured before being applied**, not guessed —
candidate stops were scored against white, `--muted`, `--background` and the
dark card, and the first one clearing 4.5:1 in all light contexts was chosen.

**Light mode only** (`:root`): emerald-500/600 → `#007a55` (5.36 on white,
4.90 on muted) · red-500 → `#c10007` · rose-500 → `#c70036` · amber-500/600 →
`#bb4d00` · `--destructive` → `#c10007` (white on it 6.42, was 3.76) ·
`--muted-foreground` → `#5a6b83` (4.96 on muted, was 4.34 — the single
largest class at 19 instances).

**Dark mode** (`.dark`): vivid weights restored; `--destructive` → `#fb2c36`
(was `#7f1d1d`, which measured **1.78:1** as text on the dark card).

**25 class strings** got `dark:text-slate-950` where white text sits on a vivid
teal or emerald fill — this keeps the brand fill vivid in dark mode while making
its label readable, instead of dulling the brand colour.

`slate-400` was deliberately **not** remapped: it has 184 border usages, and
darkening it would change borders sitewide to fix 7 text instances.

#### Bug caught during verification: the override leaked into dark mode

Adding the `:root` overrides sent dark failures from 45 to **395** — `:root` and
`.dark` have equal specificity, so the later block wins, and my light-mode
values were overriding `.dark` even when dark was active. Fixed by appending a
`.dark` block *after* the overrides to restore the vivid values. The teal fix on
page 1 already had this structure; the new tokens did not.

Without the before/after measurement this would have shipped as a large
regression while looking like a fix.

### ✅ Heading structure fixed — all 77 pages

| | Before | After |
| :-- | :-- | :-- |
| Pages with level skips | 26 | **0** |
| Pages without exactly one `h1` | 8 | **0** |

Build passes, 0 console errors, no blank pages, no visual change.

**The mechanical fix would have been wrong.** A dry run proposed 40 promotions,
but inspecting the actual heading *text* showed roughly half were **demo content
inside live component previews**, not page structure — alert titles, popover
titles, dialog titles, a monetary value, and a fake user's name ("Alok Desai")
in a hover-card. Promoting those to `h3` would have satisfied the checker while
injecting demo content into the document outline.

So the fix was split by cause:

| Cause | Fix | Count |
| :-- | :-- | :-- |
| Demo content marked up as headings | → `<div>`, classes unchanged | 18 |
| Typography page's heading **specimens** (why it had 3 `h1`s) | → `<div>`, classes unchanged | 8 |
| Genuine section headings at the wrong level | level normalised | 31 |
| Legacy Platform pages had **no `h1`** — the visible title is a logo inside a `<p>` | added `<h1 className="sr-only">{platform.name}</h1>` | 8 pages |
| Legacy capability/pillar cards sat at `h3` directly under `h1` | promoted to `h2` | 8 |

After converting demo content, the remaining skip list dropped from 40 to 31
before a single level was changed — the demo markup *was* most of the problem.

Note for the component pages: the visible specimens are now non-semantic, while
the generated code snippets still show the semantic markup a consumer should
copy. That is the usual design-system convention, but worth a look when the
component pages get their own review.

### Still open (contrast)

Remaining failures are mostly **opacity-reduced text** (`text-muted-foreground/60`
and similar, which composite to ~3.3:1) and the `slate-400` captions. Also
still open: navy `#023e63` as text on dark surfaces (1.59:1, 5 instances) —
needs per-usage `dark:` variants, since `--primary` drives both text and fills.

## Phase 2 — Visual audit, page by page ⬜ SUPERSEDED by the sweep above

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

#### Group 1 ✅ APPLIED — 92 label/control pairings

**Result: 239 → 96 unlabeled controls.** Build passes, 0 console errors, 0
duplicate ids introduced.

Codemod rule: a label owns the first form control appearing before the next
label, within 12 lines, stopping at any `<button>` (button groups are Group 3).
Ids are slugged from the visible label text and seeded with the file's 72
existing ids so no collision is possible.

**The dry run earned its keep** — the first pass proposed three bad edits that
were caught before anything was written:
- garbage ids from label `className` expressions (`id=playinputdisabled-text-muted-foreg`)
- a label that already had `htmlFor` on a *later* line of a multi-line tag, which would have been double-added
- far-distance pairings (+23, +27, +28) that were actually button-group labels grabbing an unrelated input

The tightened rule rejected 139 labels for stated reasons: 104 button groups
(Group 3), ~22 labels that already wrap their control (valid as-is), 6 with no
text, 3 blocked by the next label, 2 with no control in range.

Why 92 source edits fixed 143 runtime instances: see the duplicate-page finding
below — several routes render the same source markup.

#### Groups 4 + 2 ✅ APPLIED — **0 unlabeled controls remain**

**Final: 297 controls, 0 without an accessible name, across all 77 pages.**
0 console errors · 0 duplicate ids · 0 stray attribute text.

| Step | Work | Result |
| :-- | :-- | :-- |
| Group 1 | 92 label/control pairings in `App.tsx` | 239 → 96 |
| LegacyPlatforms.tsx | 6 pairings — **the file the Group 1 codemod never ran on** | |
| OTP digits | `aria-label` per digit, scoped to each block's real length ("Digit 3 of 6", "of 4", dynamic) | |
| Placeholder inputs | 19 named, filtered to those with *no* existing label so `aria-label` never overrides a visible one (WCAG 2.5.3) | |
| Checkbox/radio specimens | 13 named from their specimen headings | 96 → 44 |
| Range sliders | 4 named (open/close delay, container width, progress value) | |
| Data-table | select-all + per-row `Select transaction ${item.id}` | |
| Dynamic previews | Input and Select preview controls paired via `htmlFor`/`id` (their labels render runtime text, so `aria-label` would have been wrong) | 44 → **0** |

**Group 4 was mostly a false alarm.** Of the 5–6 suspected snippet labels, four
*wrap* their input (valid) and one already had `htmlFor` on a later line of a
multi-line tag. Only the **Switch** snippet was genuinely broken: a `<label>`
cannot label a `<button role="switch">`, so the copied code produced an unnamed
switch. Fixed to `<span id="switch-label">` + `aria-labelledby`.

**Two bugs I introduced and caught:**
1. An `aria-label` inserted after a line that already closed with `>` landed
   *inside* the `<select>` as visible text. Found by scanning for inserted
   attributes whose preceding line ends in `>` — one occurrence, repaired into
   the tag.
2. Line-number drift from earlier insertions caused a wrong anchor; the guard
   aborted instead of writing to the wrong place, and anchors were re-derived by
   searching rather than by fixed line numbers.

**Verified working, not just labelled:** OTP digits still auto-advance focus and
accept input; every `aria-label=` string appearing in page text was confirmed to
be inside a `<pre>`/`<code>` snippet, not loose markup.

#### Group 3a ✅ APPLIED — 17 switches named

**All 17 `role="switch"` buttons now have accessible names** (0 unnamed), 0
console errors, no stray attribute text.

Names were derived by scanning **forward** past `</button>` for the label span —
an initial backward scan produced wrong names (it picked up section headings
like "Color Role Variations" instead of "Primary (Navy)"), because in this
markup the label sits *after* the switch.

The playground's preview switch has a runtime label, so it uses
`aria-labelledby` pointing at the label element (converted from an invalid
`<label>` to `<span id="switch-preview-label">`). Verified live: the name
resolves to "Automatic Auto-Rebalance" and the switch still toggles
`aria-checked` correctly.

Inline attribute insertion was used rather than adding a line, because these
opening tags are single-line — the exact shape that caused the stray-text bug
earlier.

One of the 18 was **not** a defect: line 8091 is prose documentation mentioning
`role="switch"`, not an element.

### 🆕 Still open: non-native controls have no accessible names

The 297-control metric only counts `input`/`select`/`textarea`. It is blind to
custom widgets, and two classes remain:

- ~~18 `role="switch"` buttons~~ — ✅ fixed above (17 real, 1 was prose).
- **104 `<label>`s on button groups** (Group 3b) — a `<label>` cannot label a
  group of `<button>`s, so those segmented controls have no group name and the
  markup is invalid. **Deferred to Phase 3**, and it needs a decision first:
  these are segmented controls where exactly one option is selected, so the
  correct semantics may be `role="radiogroup"` + `aria-checked` (arrow-key
  navigation) rather than a plain `role="group"` + `aria-labelledby`. That
  choice changes all 104 edits and the expected keyboard behaviour, so it is an
  owner decision, not a mechanical fix.

  Severity note: each button in these groups carries its own visible text, so it
  *does* have an accessible name and the control is operable. What is missing is
  the group name and valid markup — a degradation, not a blocker. That is why it
  was ranked below the switches despite being 6× the count.

Both classes pass an automated form-control scan and fail a real audit.

Remaining after Typography was: **239 across 45 pages.** Routes considered:
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
