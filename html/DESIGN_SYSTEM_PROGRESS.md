# Harbour & Hills Design System - Project Progress

This document tracks the design system's visual tokens, typography, grid specifications, and component documentation.

## Setup & Architecture
* **Framework:** React + TypeScript + Vite
* **Styles:** Tailwind CSS v4 (using CSS-first `@theme` configuration in `src/index.css`)
* **Icons:** Lucide React
* **Animations:** Framer Motion

---

## 🗺️ Progress Roadmap

### 1. Foundations
* [x] **Introduction** (Overview of H&H design philosophy)
* [x] **Design Principles** (Core design values)
* [x] **Colors** (Primary navy, secondary teal, custom grays, status scales, dark/light modes)
* [x] **Typography** (Inter Display / Inter Sans scales and weights)
* [x] **Spacing & Grids** (Spacing scales, responsive breakpoints, interactive grid composer)
* [x] **Borders & Shadows** (Border-radius tokens, elevation shadows, interactive shadow composer)
* [x] **Theme Builder & Token Exporter** (Interactive brand color, radius, density customizer & Tailwind CSS v4 `@theme` / W3C JSON / CSS `:root` exporter)
* [x] **Enterprise UX Patterns & Templates** (Interactive Treasury Dashboard, Multi-Step Wire Transfer Wizard, API Security Settings, and React JSX Code Exporter)

### 2. Implemented Components
* [x] **Accordion** (Animated collapsible sections)
* [x] **Alert** (Info, success, warning, destructive banner layouts)
* [x] **Alert Dialog** (Accessible overlay confirmation overlays)
* [x] **Avatar** (Visual entity representation with sizing, fallbacks, indicators, and stack spacing)
* [x] **Badge** (Pill indicators with optimized dark mode contrasts)
* [x] **Breadcrumb** (Hierarchical trail navigation nodes)
* [x] **Button** (Primary navy, secondary teal, ghost, and outline types)
* [x] **Button Group** (Merged focus/border button groupings)
* [x] **Card** (Layout containers with hover elevation)
* [x] **Checkbox** (Toggle-selection checkboxes)
* [x] **Dialog** (Accessible overlay modal containers)
* [x] **Dropdown Menu** (Configurable actions and trigger options)
* [x] **Input** (Standard text input)
* [x] **Input Group** (Input containers with prepended/appended icons/actions)
* [x] **Label** (Accessible text descriptions for input alignment)
* [x] **Native Select** (Standard browser select menus styled)
* [x] **Pagination** (Page indicators and numeric action list controls)
* [x] **Radio Group** (Mutual-exclusion selection list)
* [x] **Select** (Custom styled dropdown panels)
* [x] **Switch** (Premium toggle sliders)
* [x] **Table** (Premium data tables)
* [x] **Tabs** (Variant selection and Framer Motion spring transitions)
* [x] **Textarea** (Multi-line text forms)
* [x] **Toast** (Transient overlay notifications)
* [x] **Toggle** (Interactive two-state buttons with accessibility attributes)
* [x] **Tooltip** (Contextual layout explanation and positioning guidelines)

### 3. Pending Components
* [x] **Aspect Ratio**
* [x] **Calendar**
* [x] **Carousel**
* [x] **Chart**
* [x] **Collapsible**
* [x] **Combobox**
* [x] **Command**
* [x] **Context Menu**
* [x] **Data Table**
* [x] **Date Picker**
* [x] **Direction**
* [x] **Drawer**
* [x] **Empty**
* [x] **Field**
* [x] **Hover Card**
* [x] **Input OTP**
* [x] **Item**
* [x] **Kbd**
* [x] **Menubar**
* [x] **Navigation Menu**
* [x] **Popover**
* [x] **Progress**
* [x] **Resizable**
* [x] **Scroll Area**
* [x] **Separator**
* [x] **Sheet**
* [x] **Sidebar**
* [x] **Skeleton**
* [x] **Slider**
* [x] **Sonner**
* [x] **Spinner**
* [x] **Toggle Group**
* [x] **Typography** (Component specimen)

---

## 🛠️ How to Run & Verify
1. Run local development server:
   ```bash
   npm run dev
   ```
2. Open `http://localhost:5174/` to preview components in both light and dark modes.

## 📝 Recent Fixes & Adjustments
* Implemented the **Toggle Group** component specimen and interactive playground page, supporting single selection (`radiogroup` behavior) and multiple selection (`checkbox` group behavior), visual variants (`default`, `outline`, `solid`), size density scales (`sm`, `md`, `lg`), horizontal vs vertical orientations, and state inspectors for selected values. Built rich interface specimens including a rich text formatting & alignment toolbar, a financial market timeframe picker, view mode layout switchers, a vertical canvas tool palette, and full WCAG accessibility contract mappings.
* Implemented the **Sidebar** vertical navigation panel component specimen and interactive playground page, showcasing collapsible state toggle widths, style theme variations (default bg-card, brand corporate dark navy, bordered flat borders), workspace selectors, active shortcut items, and user profile footers.
* Implemented the **Sheet** side-drawer slide-out panel component specimen and interactive playground page, showcasing placement modes (top, right, bottom, left), size configurations (sm, md, lg, full), theme variations (default, brand navy rich dark panels, frosted glass glassmorphism), backdrop designs (dimmed overlay, blurred overlay, transparent), and key event listeners (Escape key, backdrop dismissals).
* Implemented the **Separator** component specimen and interactive playground page, showcasing horizontal and vertical divider elements with multiple visual variants (solid, dashed, dotted, and elegant gradient fades), weight settings (1px, 2px, 4px), custom color themes (default, brand navy, subtle, and secondary teal accents), and optional text or icon center/side badges.
* Implemented the **Scroll Area** component specimen and interactive playground page, showcasing CSS-first custom webkit scrollbar bindings with orientation parameters (vertical, horizontal, bidirectional), visibility toggles (always vs hover-only), thickness options (thin, medium, thick), accent color mappings (default, brand navy/teal, success, danger), and adjustable corner radiuses.
* Implemented the **Progress** bar component specimen and interactive playground page, supporting theme accent scales (primary, secondary, success, danger), style variations (solid, gradient, striped, glowing shadows), heights (sm, md, lg), label layouts (none, top-right status text, inside value, bottom center status text), and an automatic loading simulator toggle.
* Implemented the **Navigation Menu** component specimen and interactive playground page, supporting multi-column mega-menus with interactive category boxes and links, animated background sliding active indicators via Framer Motion, sidebar navigation layouts, and dynamic configurations for transitions, dropdown styles, and logo alignments.

* Implemented the **Menubar** component specimen and interactive playground page, supporting active menu triggers, click-outside and Escape closures, multi-level dropdowns with keyboard shortcuts, layout borders, and state checkboxes/radio toggles inside nested menus.
* Implemented the **Kbd** keyboard key component specimen and interactive playground page, supporting visual variant configurations (raised 3D, flat, outline), size scalings (sm, md, lg), modifier key combinations (Ctrl + Shift + R), direction arrow pads, and inline input action shortcuts.
* Implemented the **Item** list row component specimen and interactive playground page, supporting text/description layouts, prefix icons/avatars/checkboxes, suffix chevrons/shortcuts/badges, custom spacing density toggles, hover/interactive highlighters, and selection checkboxes.
* Implemented the **Field** component specimen and interactive playground page, supporting form label styling, optional markers, descriptions, error validation states, and compatibility with various form controls (inputs, select dropdowns, textareas).
* Implemented the **Empty** state component specimen and interactive playground page, supporting common workflow templates (Search results, initial onboarding, and success clearance feeds), layout scaling constraints (sm/md/lg), boxed borders, action trigger toggles, and illustrative decorative icon sets.
* Implemented the **Direction** layout utility component specimen and interactive playground page, supporting dynamic Left-To-Right (LTR) vs Right-To-Left (RTL) flow swaps, side-by-side mirrored layout specimens, logical spacing guidelines, and mirror-eligible icon support.
* Implemented the **Context Menu** component specimen and interactive playground page, supporting coordinates-based placement with edge viewport safety, ESC and outside click dismissal, prefix icons, shortcut labels, and click logging in the action feed. Also registered `Context Menu`, `Date Picker`, `Popover`, `Hover Card`, and `Input OTP` in the active dashboard paths array.
* Implemented the **Input OTP** component specimen and interactive playground page, supporting character length variations (4 vs 6 slots), keyboard navigation (forward jump on digit, backspace shift on delete), input group formatting (3-3 slot structure with dash separators), clipboard paste distribution, and hidden digit masking.
* Implemented the **Hover Card** component specimen and interactive playground page, supporting open/close timing delay parameters (to prevent accidental hover triggers), direction sides, and rich specimen cards (user profile bios and interactive pool asset/margin details).
* Implemented the **Popover** component specimen and interactive playground page, supporting placement parameters (side/alignment offsets), dynamic pointer anchor arrows, close-on-click-outside, and rich specimen variants (basic description, quick configuration forms, and detailed user profile cards).
* Implemented the **Date Picker** component specimen and interactive playground page, supporting single/range selection modes, constraint toggles (min/max limits, weekends), outside days configurations, and quick preset shortcuts.
* Implemented the **Drawer** component specimen and interactive playground page, displaying custom edge alignments, animations, size configurations, and backdrop close overrides.
* Implemented the **Data Table** component specimen and playground page, featuring search/filter capabilities, checkbox row selection, column sorting, pagination, and density configurations.
* Refactored local hooks out of conditional IIFEs for **Collapsible**, **Combobox**, and **Command** pages, moving state variables to the parent component to resolve React Rules of Hooks violations.
* Implemented the **Command** component documentation and specimen page, featuring inline console panels, keyboard-interactive popup overlay modal, accessibility contracts, and custom playground accent styling.
* Implemented the **Avatar** component, showcasing size scales, shapes, status indicators, fallback levels, and overlapping stacked groups.
* Added left-arrow navigation indicator to the **Alert Dialog** specimen page to match the pagination cues elsewhere.
* Balanced selected-state and dark-mode text colors for **Badge** and **Avatar** components, enforcing high-contrast brand teal.
* Implemented the **Skeleton** component specimen and interactive playground page, supporting pulse/shimmer/none animation types, custom default/brand-navy/brand-teal color theme overlays, simulated loaded/loading layout state toggles (mitigating layout shifts with aria-busy), and pre-built spec copy code snippets. Also resolved multiple pre-existing TypeScript compilation and type violations in the workspace.
* Implemented the **Slider** component specimen and interactive playground page, supporting single/range thumb selections, customizable min/max limits, variable step divisions, scale density variations (sm, md, lg), and custom themes. Built a premium interactive portfolio allocator widget that dynamically simulates risk-tier adjustments and yield projection estimates, with full keyboard arrow controls and WCAG-compliant ARIA attribute mappings.
* Implemented the **Toggle** component specimen and interactive playground page, supporting variant choices (default, outline, solid), size ranges (sm, md, lg), state settings (pressed, disabled), and icon vs text combinations. Built a high-fidelity editor toolbar specimen showcasing Bold, Italic, and Underline formatting toggles, and fully compliant WCAG binary `aria-pressed` state announcements.
* Implemented the **Global `Cmd + K` Command Palette** overlay modal, providing instant fuzzy search across all 59 UI components, foundations, and design principles with keyboard arrow key selection (`↑` / `↓` / `Enter`).
* Implemented the **Interactive Theme Builder & Token Exporter** page (`#foundations/theme-builder`), featuring real-time brand color swatch pickers (primary navy & secondary teal), corner radius scale selectors (`0px` to `24px`), layout density scales (`32px` to `48px`), live reactive specimen previews, and one-click code exporters for Tailwind CSS v4 `@theme`, W3C JSON Design Tokens (`tokens.json`), and CSS `:root` Custom Properties.
* Implemented the **Legacy Platforms & Systems** ecosystem directory (`#legacy-platforms/overview`) and 7 dedicated modern tech landing page microsites (**QoR3+**, **DigiQore+**, **H Markets**, **Edge+**, **H Business**, **Ficoy+**, **Coventrix+**), built strictly in alignment with Harbour & Hills corporate branding (Navy `#0A192F`, HNH Teal `#0D9488`, Accent Cyan `#00F2FE`). Each microsite includes a 3-tab layout: **Overview & Mini Brand Kit** (capabilities bento grid, user personas, product mark specimens, copyable HEX color tokens, typography rules), **System Architecture & Tech Specs** (microservice flow pipeline, technology stack cards, API payload contract JSON inspector), and **Design Token & Component Mapping** (HNH CSS variable token mapping table, component matrix, and live interactive UI workspace widgets).



