# 🌊 Harbour & Hills Design System

> A premium, responsive, and accessibility-first design system and interactive component library built specifically for **Harbour & Hills Financial Services**.

---

## 🎨 Brand Identity & Vision

The **Harbour & Hills Design System** brings institutional-grade trust and high-end modern layout principles to B2B payment processing. It is designed to look premium, minimal, and state-of-the-art.

*   **Primary Navy (`#023e63`)**: Represents stability, trust, and professional safety.
*   **Secondary Teal (`#00bfb3`)**: Acts as our key interactive driver and call-to-action color.
*   **Neutral Palette**: Curated slates (`#f8fafc` to `#0a0f1d`) that provide clean, balanced contrast ratios.
*   **Dark Mode**: A system-integrated, low-fatigue dark experience built for financial terminals.

---

## ✨ Features

*   **Interactive Playgrounds**: Live preview boxes with state controls and dynamic, copy-pasteable code generators.
*   **Responsive Framework**: Handcrafted layouts built with fluid flex and grid containers.
*   **Modern Micro-interactions**: Seamless hover effects and exit animations built on top of **Framer Motion**.
*   **SEO & Access-Compliant**: Semantic structure adhering to WCAG AA color contrast guidelines.

---

## 📚 What's Inside

76 documented pages across four navigation groups:

| Group | Count | Contents |
| :--- | :--- | :--- |
| **Getting Started** | 2 | Introduction, Design Principles |
| **Foundations** | 8 | Colors, Typography, Spacing & Grids, Borders & Shadows, Iconography, Theme Builder & Tokens, Enterprise UX Patterns, Accessibility & WCAG |
| **Components** | 58 | Accordion through Typography — each with overview, specimens, and an interactive playground |
| **Legacy Platforms** | 8 | Platforms Directory, QoR3+, DigiQore+, H Markets, Edge+, H Business, Ficoy+, Coventrix+ |

**Legacy Platforms** are the portal-brand microsites operating under Harbour & Hills, documented so each retains its own identity while sharing the core token layer.

---

## 📁 Repository Structure

```text
├── html/                          # Vite + React application directory
│   ├── src/
│   │   ├── App.tsx                # Navigation, foundations & all component pages
│   │   ├── components/
│   │   │   └── LegacyPlatforms.tsx # Portal-brand microsite pages
│   │   ├── index.css              # Custom Tailwind theme tokens & utility styles
│   │   ├── main.tsx               # App entrypoint
│   │   └── assets/                # Graphic assets and icons
│   ├── public/                    # Static files
│   ├── DESIGN_SYSTEM_PROGRESS.md  # Page-by-page implementation tracker
│   ├── package.json               # Dependencies and build scripts
│   └── vite.config.ts             # Vite configuration
└── README.md                      # Repository documentation
```

---

## 🛠️ Getting Started

### 📋 Prerequisites

Make sure you have **Node.js** (v20.19+ or v22.12+, required by Vite 8) and **npm** installed on your system.

Built on React 19, Vite 8, Tailwind CSS v4, Framer Motion, and Lucide icons.

### 🚀 Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/alokdesaii/hnh-design-system.git
   cd hnh-design-system/html
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

### 📦 Building for Production

To compile and optimize the design system for production deployment:

```bash
npm run build
```

The output will be generated inside the `dist/` directory, ready to be hosted on Vercel, Netlify, or your preferred hosting provider.

---

## 💎 Design Tokens

Our design tokens are mapped directly in `src/index.css` via custom CSS properties for full flexibility:

### 🌗 Shadow Scale (`--shadow-hnh-*`)
| Token Name | Light Mode Styling | Dark Mode Styling |
| :--- | :--- | :--- |
| `hnh-sm` | `0 1px 2px 0 rgba(2, 62, 99, 0.05)` | `0 1px 2px 0 rgba(0, 0, 0, 0.5)` |
| `hnh` | `0 1px 3px 0 rgba(2, 62, 99, 0.1)` | `0 1px 3px 0 rgba(0, 0, 0, 0.5)` |
| `hnh-md` | `0 4px 6px -1px rgba(2, 62, 99, 0.1)` | `0 4px 6px -1px rgba(0, 0, 0, 0.5)` |
| `hnh-lg` | `0 10px 15px -3px rgba(2, 62, 99, 0.1)` | `0 10px 15px -3px rgba(0, 0, 0, 0.5)` |
| `hnh-xl` | `0 20px 25px -5px rgba(2, 62, 99, 0.1)` | `0 20px 25px -5px rgba(0, 0, 0, 0.5)` |

### 📏 Spacing & Borders
*   **Font Family**: `Inter` (Sans-Serif) with weights from `300` (Light) to `800` (Extrabold).
*   **Borders & Radius**: Standardized curves at `0.5rem` (base) with active focus outlines utilizing secondary glow shadow rings.
