# 🌊 Harbour & Hills Design System

> A premium, responsive, and accessibility-first design system and interactive component library built specifically for **Harbour & Hills Financial Services**.

---

## 🎨 Brand Identity & Vision

The **Harbour & Hills Design System** brings institutional-grade trust and high-end modern layout principles to digital wealth management. It is designed to look premium, minimal, and state-of-the-art.

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

## 📁 Repository Structure

```text
├── html/                          # Vite + React application directory
│   ├── src/
│   │   ├── App.tsx                # Main design system interface & interactive specimens
│   │   ├── index.css              # Custom Tailwind theme tokens & utility styles
│   │   ├── main.tsx               # App entrypoint
│   │   └── assets/                # Graphic assets and icons
│   ├── public/                    # Static files
│   ├── package.json               # Dependencies and build scripts
│   └── vite.config.ts             # Vite configuration
└── README.md                      # Repository documentation
```

---

## 🛠️ Getting Started

### 📋 Prerequisites

Make sure you have **Node.js** (v18+) and **npm** installed on your system.

### 🚀 Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/HnH-Design-System.git
   cd HnH-Design-System/html
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
