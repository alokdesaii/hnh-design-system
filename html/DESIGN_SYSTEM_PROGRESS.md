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

### 2. Implemented Components
* [x] **Accordion** (Animated collapsible sections)
* [x] **Alert** (Info, success, warning, destructive banner layouts)
* [x] **Alert Dialog** (Accessible overlay confirmation overlays)
* [x] **Avatar** (Visual entity representation with sizing, fallbacks, indicators, and stack spacing)
* [x] **Badge** (Pill indicators with optimized dark mode contrasts)
* [x] **Button** (Primary navy, secondary teal, ghost, and outline types)
* [x] **Button Group** (Merged focus/border button groupings)
* [x] **Checkbox** (Toggle-selection checkboxes)
* [x] **Radio Group** (Mutual-exclusion selection list)
* [x] **Card** (Layout containers with hover elevation)
* [x] **Input** (Standard text input)
* [x] **Input Group** (Input containers with prepended/appended icons/actions)
* [x] **Label** (Accessible text descriptions for input alignment)
* [x] **Native Select** (Standard browser select menus styled)
* [x] **Select** (Custom styled dropdown panels)
* [x] **Switch** (Premium toggle sliders)
* [x] **Textarea** (Multi-line text forms)

### 3. Pending Components
* [ ] **Aspect Ratio**
* [ ] **Breadcrumb**
* [ ] **Calendar**
* [ ] **Carousel**
* [ ] **Chart**
* [ ] **Collapsible**
* [ ] **Combobox**
* [ ] **Command**
* [ ] **Context Menu**
* [ ] **Data Table**
* [ ] **Date Picker**
* [ ] **Dialog**
* [ ] **Direction**
* [ ] **Drawer**
* [ ] **Dropdown Menu**
* [ ] **Empty**
* [ ] **Field**
* [ ] **Hover Card**
* [ ] **Input OTP**
* [ ] **Item**
* [ ] **Kbd**
* [ ] **Menubar**
* [ ] **Navigation Menu**
* [ ] **Pagination**
* [ ] **Popover**
* [ ] **Progress**
* [ ] **Resizable**
* [ ] **Scroll Area**
* [ ] **Separator**
* [ ] **Sheet**
* [ ] **Sidebar**
* [ ] **Skeleton**
* [ ] **Slider**
* [ ] **Sonner**
* [ ] **Spinner**
* [ ] **Table**
* [ ] **Tabs**
* [ ] **Toast**
* [ ] **Toggle**
* [ ] **Toggle Group**
* [ ] **Tooltip**
* [ ] **Typography** (Component specimen)

---

## 🛠️ How to Run & Verify
1. Run local development server:
   ```bash
   npm run dev
   ```
2. Open `http://localhost:5174/` to preview components in both light and dark modes.

## 📝 Recent Fixes & Adjustments
* Implemented the **Avatar** component, showcasing size scales, shapes, status indicators, fallback levels, and overlapping stacked groups.
* Added left-arrow navigation indicator to the **Alert Dialog** specimen page to match the pagination cues elsewhere.
* Balanced selected-state and dark-mode text colors for **Badge** and **Avatar** components, enforcing high-contrast brand teal.
