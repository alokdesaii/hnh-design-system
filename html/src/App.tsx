import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Search, 
  Sun, 
  Moon, 
  ChevronRight, 
  ChevronLeft,
  ExternalLink,
  Check,
  Compass,
  Shield,
  LayoutGrid,
  Accessibility,
  ArrowUpRight,
  ArrowDownLeft,
  Wallet,
  Send,
  ArrowRight,
  Activity,
  Copy,
  Loader2,
  Eye,
  EyeOff,
  ChevronDown,
  // TrendingUp,
  // TrendingDown,
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  Bell,
  User,
  // Plus,
  // Filter,
  // ArrowUpDown,
  Minus
} from 'lucide-react'


// Navigation types and groups
interface NavigationItem {
  id: string
  name: string
}

interface NavigationGroup {
  title: string
  items: NavigationItem[]
}

const navigationGroups: NavigationGroup[] = [
  {
    title: 'Getting Started',
    items: [
      { id: 'introduction', name: 'Introduction' },
      { id: 'principles', name: 'Design Principles' },
    ]
  },
  {
    title: 'Foundations',
    items: [
      { id: 'foundations/colors', name: 'Colors' },
      { id: 'foundations/typography', name: 'Typography' },
      { id: 'foundations/spacing', name: 'Spacing & Grids' },
      { id: 'foundations/borders', name: 'Borders & Shadows' },
    ]
  },
  {
    title: 'Components',
    items: [
      { id: 'components/accordion', name: 'Accordion' },
      { id: 'components/alert', name: 'Alert' },
      { id: 'components/alert-dialog', name: 'Alert Dialog' },
      { id: 'components/aspect-ratio', name: 'Aspect Ratio' },
      { id: 'components/avatar', name: 'Avatar' },
      { id: 'components/badge', name: 'Badge' },
      { id: 'components/breadcrumb', name: 'Breadcrumb' },
      { id: 'components/button', name: 'Button' },
      { id: 'components/button-group', name: 'Button Group' },
      { id: 'components/calendar', name: 'Calendar' },
      { id: 'components/card', name: 'Card' },
      { id: 'components/carousel', name: 'Carousel' },
      { id: 'components/chart', name: 'Chart' },
      { id: 'components/checkbox', name: 'Checkbox' },
      { id: 'components/collapsible', name: 'Collapsible' },
      { id: 'components/combobox', name: 'Combobox' },
      { id: 'components/command', name: 'Command' },
      { id: 'components/context-menu', name: 'Context Menu' },
      { id: 'components/data-table', name: 'Data Table' },
      { id: 'components/date-picker', name: 'Date Picker' },
      { id: 'components/dialog', name: 'Dialog' },
      { id: 'components/direction', name: 'Direction' },
      { id: 'components/drawer', name: 'Drawer' },
      { id: 'components/dropdown-menu', name: 'Dropdown Menu' },
      { id: 'components/empty', name: 'Empty' },
      { id: 'components/field', name: 'Field' },
      { id: 'components/hover-card', name: 'Hover Card' },
      { id: 'components/input', name: 'Input' },
      { id: 'components/input-group', name: 'Input Group' },
      { id: 'components/input-otp', name: 'Input OTP' },
      { id: 'components/item', name: 'Item' },
      { id: 'components/kbd', name: 'Kbd' },
      { id: 'components/label', name: 'Label' },
      { id: 'components/menubar', name: 'Menubar' },
      { id: 'components/native-select', name: 'Native Select' },
      { id: 'components/navigation-menu', name: 'Navigation Menu' },
      { id: 'components/pagination', name: 'Pagination' },
      { id: 'components/popover', name: 'Popover' },
      { id: 'components/progress', name: 'Progress' },
      { id: 'components/radio-group', name: 'Radio Group' },
      { id: 'components/resizable', name: 'Resizable' },
      { id: 'components/scroll-area', name: 'Scroll Area' },
      { id: 'components/select', name: 'Select' },
      { id: 'components/separator', name: 'Separator' },
      { id: 'components/sheet', name: 'Sheet' },
      { id: 'components/sidebar', name: 'Sidebar' },
      { id: 'components/skeleton', name: 'Skeleton' },
      { id: 'components/slider', name: 'Slider' },
      { id: 'components/sonner', name: 'Sonner' },
      { id: 'components/spinner', name: 'Spinner' },
      { id: 'components/switch', name: 'Switch' },
      { id: 'components/table', name: 'Table' },
      { id: 'components/tabs', name: 'Tabs' },
      { id: 'components/textarea', name: 'Textarea' },
      { id: 'components/toast', name: 'Toast' },
      { id: 'components/toggle', name: 'Toggle' },
      { id: 'components/toggle-group', name: 'Toggle Group' },
      { id: 'components/tooltip', name: 'Tooltip' },
      { id: 'components/typography', name: 'Typography' },
    ]
  }
]

const implementedPaths = [
  'introduction',
  'principles',
  'foundations/colors',
  'foundations/typography',
  'foundations/spacing',
  'foundations/borders',
  'components/button',
  'components/button-group',
  'components/input',
  'components/label',
  'components/textarea',
  'components/input-group',
  'components/checkbox',
  'components/radio-group',
  'components/select',
  'components/native-select',
  'components/accordion',
  'components/alert',
  'components/alert-dialog',
  'components/badge',
  'components/switch',
  'components/card',
  'components/avatar',
]

interface Shade {
  shade: string
  hex: string
  twClass: string
}

interface ColorCardProps {
  shade: Shade
  prefix: string
  onCopy: (text: string, label: string) => void
}

const ColorCard = ({ shade, prefix, onCopy }: ColorCardProps) => {
  return (
    <div className="bg-card border border-border/80 rounded-xl overflow-hidden shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 flex flex-col group/card">
      <div 
        className="h-14 w-full relative transition-transform duration-200"
        style={{ backgroundColor: shade.hex }}
      />
      <div className="p-2 flex-1 flex flex-col justify-between gap-1 bg-card">
        <div>
          <div className="text-[10px] font-bold text-foreground leading-none">{shade.shade}</div>
          <div className="text-[9px] text-muted-foreground font-mono mt-1 leading-none">{shade.hex.toUpperCase()}</div>
        </div>
        <div className="flex items-center justify-between pt-1 border-t border-border/40 mt-1 opacity-0 group-hover/card:opacity-100 transition-opacity duration-200">
          <button 
            onClick={() => onCopy(shade.hex, `hex-${prefix}-${shade.shade}`)}
            className="p-1 hover:bg-muted text-muted-foreground hover:text-foreground rounded transition shrink-0 cursor-pointer"
            title="Copy HEX"
          >
            <Copy size={9} />
          </button>
          <button 
            onClick={() => onCopy(`var(--color-${prefix}-${shade.shade})`, `var-${prefix}-${shade.shade}`)}
            className="p-1 hover:bg-muted text-muted-foreground hover:text-foreground rounded transition shrink-0 cursor-pointer"
            title="Copy CSS Variable"
          >
            <span className="text-[8px] font-mono leading-none">{`{}`}</span>
          </button>
          <button 
            onClick={() => onCopy(shade.twClass, `class-${prefix}-${shade.shade}`)}
            className="p-1 hover:bg-muted text-muted-foreground hover:text-foreground rounded transition shrink-0 cursor-pointer"
            title="Copy Tailwind Class"
          >
            <span className="text-[8.5px] font-bold font-mono tracking-tighter leading-none">tw</span>
          </button>
        </div>
      </div>
    </div>
  )
}

interface SpacingItem {
  token: string
  rem: string
  px: string
  twClass: string
  barWidth: string
}

const spacingScale: SpacingItem[] = [
  { token: '0.5', rem: '0.125rem', px: '2px', twClass: 'hnh-spacing-0.5', barWidth: '2px' },
  { token: '1', rem: '0.25rem', px: '4px', twClass: 'hnh-spacing-1', barWidth: '4px' },
  { token: '1.5', rem: '0.375rem', px: '6px', twClass: 'hnh-spacing-1.5', barWidth: '6px' },
  { token: '2', rem: '0.5rem', px: '8px', twClass: 'hnh-spacing-2', barWidth: '8px' },
  { token: '2.5', rem: '0.625rem', px: '10px', twClass: 'hnh-spacing-2.5', barWidth: '10px' },
  { token: '3', rem: '0.75rem', px: '12px', twClass: 'hnh-spacing-3', barWidth: '12px' },
  { token: '4', rem: '1rem', px: '16px', twClass: 'hnh-spacing-4', barWidth: '16px' },
  { token: '5', rem: '1.25rem', px: '20px', twClass: 'hnh-spacing-5', barWidth: '20px' },
  { token: '6', rem: '1.5rem', px: '24px', twClass: 'hnh-spacing-6', barWidth: '24px' },
  { token: '8', rem: '2rem', px: '32px', twClass: 'hnh-spacing-8', barWidth: '32px' },
  { token: '10', rem: '2.5rem', px: '40px', twClass: 'hnh-spacing-10', barWidth: '40px' },
  { token: '12', rem: '3rem', px: '48px', twClass: 'hnh-spacing-12', barWidth: '48px' },
  { token: '16', rem: '4rem', px: '64px', twClass: 'hnh-spacing-16', barWidth: '64px' },
  { token: '20', rem: '5rem', px: '80px', twClass: 'hnh-spacing-20', barWidth: '80px' },
  { token: '24', rem: '6rem', px: '96px', twClass: 'hnh-spacing-24', barWidth: '96px' },
  { token: '32', rem: '8rem', px: '128px', twClass: 'hnh-spacing-32', barWidth: '128px' },
  { token: '40', rem: '10rem', px: '160px', twClass: 'hnh-spacing-40', barWidth: '160px' },
  { token: '48', rem: '12rem', px: '192px', twClass: 'hnh-spacing-48', barWidth: '192px' },
  { token: '64', rem: '16rem', px: '256px', twClass: 'hnh-spacing-64', barWidth: '256px' },
]

interface BreakpointItem {
  token: string
  value: string
  usage: string
}

const responsiveBreakpoints: BreakpointItem[] = [
  { token: 'xs', value: '< 640px', usage: 'Mobile viewports, portrait phones, bottom sheets.' },
  { token: 'sm', value: '640px', usage: 'Large landscape phones, portrait small tablets, compact widgets.' },
  { token: 'md', value: '768px', usage: 'Portrait iPads and landscape Android tablets, split columns.' },
  { token: 'lg', value: '1024px', usage: 'Default laptop resolutions, desktop sidebars, grid controls.' },
  { token: 'xl', value: '1280px', usage: 'High-res desktop displays, multi-column dashboard workspaces.' },
  { token: '2xl', value: '1536px', usage: 'Large screen iMacs, dual display setups, expansive dashboard grids.' },
]

interface TypoItem {
  id: string
  name: string
  twClass: string
  sizeInfo: string
  description: string
}

const typographicScale: TypoItem[] = [
  { id: 'display', name: 'Display Heading', twClass: 'text-5xl font-extrabold tracking-tight', sizeInfo: '48px / 3rem · Leading Tight', description: 'Used for main hero areas, value propositions, and key metrics.' },
  { id: 'h1', name: 'Heading 1', twClass: 'text-4xl font-extrabold tracking-tight', sizeInfo: '36px / 2.25rem · Leading Tight', description: 'Used for primary section headings and main documentation titles.' },
  { id: 'h2', name: 'Heading 2', twClass: 'text-3xl font-bold tracking-tight', sizeInfo: '30px / 1.875rem · Leading Snug', description: 'Used for secondary sections and key card titles.' },
  { id: 'h3', name: 'Heading 3', twClass: 'text-2xl font-bold tracking-tight', sizeInfo: '24px / 1.5rem · Leading Snug', description: 'Used for nested subheadings and dashboard indicators.' },
  { id: 'h4', name: 'Heading 4', twClass: 'text-xl font-semibold tracking-tight', sizeInfo: '20px / 1.25rem · Leading Normal', description: 'Used for item labels and widget titles.' },
  { id: 'body-large', name: 'Body Large', twClass: 'text-lg font-light leading-relaxed', sizeInfo: '18px / 1.125rem · Leading Relaxed', description: 'Used for lead paragraphs and editorial descriptions.' },
  { id: 'body-regular', name: 'Body Regular / Default', twClass: 'text-sm font-normal leading-relaxed', sizeInfo: '14px / 0.875rem · Leading Relaxed', description: 'Our default body font size for docs, paragraphs, and lists.' },
  { id: 'body-small', name: 'Body Small / Muted', twClass: 'text-xs font-normal leading-normal text-muted-foreground', sizeInfo: '12px / 0.75rem · Leading Normal', description: 'Used for supporting metadata, transaction labels, and table cells.' },
  { id: 'caption', name: 'Caption / Accent', twClass: 'text-[10px] font-bold uppercase tracking-wider text-muted-foreground', sizeInfo: '10px / 0.625rem · Tracking Wider', description: 'Used for uppercase category pills, card headers, and table headers.' },
]

const fontWeights = [
  { name: 'Light', weight: '300', twClass: 'font-light', usage: 'Lead body copy and descriptive headers' },
  { name: 'Regular', weight: '400', twClass: 'font-normal', usage: 'Default paragraphs, cells, and standard lists' },
  { name: 'Medium', weight: '500', twClass: 'font-medium', usage: 'Navigation items, table headers, and badges' },
  { name: 'Semibold', weight: '600', twClass: 'font-semibold', usage: 'Input labels, buttons, and sub-widget titles' },
  { name: 'Bold', weight: '700', twClass: 'font-bold', usage: 'Major card titles, principles headers, and key callouts' },
  { name: 'Extrabold', weight: '800', twClass: 'font-extrabold', usage: 'Main Hero titles, big display metrics, and H1 elements' },
]

const primaryNavyShades: Shade[] = [
  { shade: '50', hex: '#e6f0fa', twClass: 'bg-primary-50' },
  { shade: '100', hex: '#ccdcf2', twClass: 'bg-primary-100' },
  { shade: '200', hex: '#99b9e5', twClass: 'bg-primary-200' },
  { shade: '300', hex: '#6696d7', twClass: 'bg-primary-300' },
  { shade: '400', hex: '#3373ca', twClass: 'bg-primary-400' },
  { shade: '500', hex: '#023e63', twClass: 'bg-primary-500' },
  { shade: '600', hex: '#02324f', twClass: 'bg-primary-600' },
  { shade: '700', hex: '#01253b', twClass: 'bg-primary-700' },
  { shade: '800', hex: '#011927', twClass: 'bg-primary-800' },
  { shade: '900', hex: '#000c14', twClass: 'bg-primary-900' },
]

const secondaryTealShades: Shade[] = [
  { shade: '50', hex: '#e6fcfb', twClass: 'bg-secondary-50' },
  { shade: '100', hex: '#cffaf7', twClass: 'bg-secondary-100' },
  { shade: '200', hex: '#9ff5ef', twClass: 'bg-secondary-200' },
  { shade: '300', hex: '#6ee0d6', twClass: 'bg-secondary-300' },
  { shade: '400', hex: '#3ecabd', twClass: 'bg-secondary-400' },
  { shade: '500', hex: '#00bfb3', twClass: 'bg-secondary-500' },
  { shade: '600', hex: '#00998f', twClass: 'bg-secondary-600' },
  { shade: '700', hex: '#00736b', twClass: 'bg-secondary-700' },
  { shade: '800', hex: '#004d47', twClass: 'bg-secondary-800' },
  { shade: '900', hex: '#002624', twClass: 'bg-secondary-900' },
]

const neutralShades: Shade[] = [
  { shade: '50', hex: '#f8fafc', twClass: 'bg-slate-50' },
  { shade: '100', hex: '#f1f5f9', twClass: 'bg-slate-100' },
  { shade: '200', hex: '#e2e8f0', twClass: 'bg-slate-200' },
  { shade: '300', hex: '#cbd5e1', twClass: 'bg-slate-300' },
  { shade: '400', hex: '#94a3b8', twClass: 'bg-slate-400' },
  { shade: '500', hex: '#64748b', twClass: 'bg-slate-500' },
  { shade: '600', hex: '#475569', twClass: 'bg-slate-600' },
  { shade: '700', hex: '#334155', twClass: 'bg-slate-700' },
  { shade: '800', hex: '#1e293b', twClass: 'bg-slate-800' },
  { shade: '900', hex: '#0f172a', twClass: 'bg-slate-900' },
  { shade: '950', hex: '#020617', twClass: 'bg-slate-950' },
]

const successShades: Shade[] = [
  { shade: '50', hex: '#ecfdf5', twClass: 'bg-emerald-50' },
  { shade: '100', hex: '#d1fae5', twClass: 'bg-emerald-100' },
  { shade: '500', hex: '#10b981', twClass: 'bg-emerald-500' },
  { shade: '700', hex: '#047857', twClass: 'bg-emerald-700' },
  { shade: '900', hex: '#064e3b', twClass: 'bg-emerald-900' },
]

const warningShades: Shade[] = [
  { shade: '50', hex: '#fffbeb', twClass: 'bg-amber-50' },
  { shade: '100', hex: '#fef3c7', twClass: 'bg-amber-100' },
  { shade: '500', hex: '#f59e0b', twClass: 'bg-amber-500' },
  { shade: '700', hex: '#b45309', twClass: 'bg-amber-700' },
  { shade: '900', hex: '#78350f', twClass: 'bg-amber-900' },
]

const destructiveShades: Shade[] = [
  { shade: '50', hex: '#fef2f2', twClass: 'bg-red-50' },
  { shade: '100', hex: '#fee2e2', twClass: 'bg-red-100' },
  { shade: '500', hex: '#ef4444', twClass: 'bg-red-500' },
  { shade: '700', hex: '#b91c1c', twClass: 'bg-red-700' },
  { shade: '900', hex: '#7f1d1d', twClass: 'bg-red-900' },
]

const infoShades: Shade[] = [
  { shade: '50', hex: '#eff6ff', twClass: 'bg-blue-50' },
  { shade: '100', hex: '#dbeafe', twClass: 'bg-blue-100' },
  { shade: '500', hex: '#3b82f6', twClass: 'bg-blue-500' },
  { shade: '700', hex: '#1d4ed8', twClass: 'bg-blue-700' },
  { shade: '900', hex: '#1e3a8a', twClass: 'bg-blue-900' },
]

const bgPresets = [
  { name: 'Navy', hex: '#023e63' },
  { name: 'Teal', hex: '#00bfb3' },
  { name: 'Light Gray', hex: '#f8fafc' },
  { name: 'Dark Slate', hex: '#0a0f1d' },
  { name: 'White', hex: '#ffffff' },
  { name: 'Slate 800', hex: '#1e293b' },
]

const textPresets = [
  { name: 'White', hex: '#ffffff' },
  { name: 'Navy', hex: '#023e63' },
  { name: 'Teal', hex: '#00bfb3' },
  { name: 'Dark Slate', hex: '#090d16' },
  { name: 'Light Gray', hex: '#f8fafc' },
  { name: 'Slate 500', hex: '#64748b' },
]

// Borders & Shadows Structures
interface RadiusItem {
  token: string
  value: string
  usage: string
  twClass: string
}

const radiusScale: RadiusItem[] = [
  { token: 'rounded-xs', value: '2px', twClass: 'rounded-xs', usage: 'For micro elements, like checkbox indicators or tag outlines.' },
  { token: 'rounded-sm', value: '4px', twClass: 'rounded-sm', usage: 'For small inputs, badges, sliders, and nested buttons.' },
  { token: 'rounded-md', value: '6px', twClass: 'rounded-md', usage: 'For default buttons, search inputs, list items, and tooltips.' },
  { token: 'rounded-lg', value: '8px', twClass: 'rounded-lg', usage: 'For cards, standard dialogs, select dropdowns, and form containers.' },
  { token: 'rounded-xl', value: '12px', twClass: 'rounded-xl', usage: 'For major dashboard widgets, nested sections, and modal boxes.' },
  { token: 'rounded-2xl', value: '16px', twClass: 'rounded-2xl', usage: 'For main page content containers, login banners, and outer frames.' },
  { token: 'rounded-3xl', value: '24px', twClass: 'rounded-3xl', usage: 'For huge hero modules, landing banners, and floating panels.' },
  { token: 'rounded-full', value: '9999px', twClass: 'rounded-full', usage: 'For avatars, pills, toggle switches, and circles.' },
]

interface ShadowItem {
  token: string
  cssVar: string
  twClass: string
  description: string
}

const shadowScale: ShadowItem[] = [
  { token: 'shadow-hnh-sm', cssVar: 'var(--hnh-shadow-sm)', twClass: 'shadow-hnh-sm', description: 'Extremely subtle elevation. Used for default form elements and grid cells.' },
  { token: 'shadow-hnh', cssVar: 'var(--hnh-shadow)', twClass: 'shadow-hnh', description: 'Default overlay boundary. Used for cards and secondary page divisions.' },
  { token: 'shadow-hnh-md', cssVar: 'var(--hnh-shadow-md)', twClass: 'shadow-hnh-md', description: 'Medium elevation. Used for dropdown selects, hover states, and key control components.' },
  { token: 'shadow-hnh-lg', cssVar: 'var(--hnh-shadow-lg)', twClass: 'shadow-hnh-lg', description: 'High elevation. Used for modal panels, dialog notifications, and drawer menus.' },
  { token: 'shadow-hnh-xl', cssVar: 'var(--hnh-shadow-xl)', twClass: 'shadow-hnh-xl', description: 'Maximum elevation. Used for mega-menus and floating control dashboards.' },
]

// Contrast ratio helpers
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b)
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

const getLuminance = (r: number, g: number, b: number): number => {
  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

const getContrastRatio = (hex1: string, hex2: string): number => {
  const rgb1 = hexToRgb(hex1)
  const rgb2 = hexToRgb(hex2)
  if (!rgb1 || !rgb2) return 1.0
  const l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b)
  const l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b)
  const brightest = Math.max(l1, l2)
  const darkest = Math.min(l1, l2)
  return (brightest + 0.05) / (darkest + 0.05)
}

function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })

  // Hash-based routing state
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '')
    return hash || 'introduction'
  })

  // Sidebar toggle for mobile viewports
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  // Search input state and ref
  const [searchQuery, setSearchQuery] = useState<string>('')
  const searchRef = useRef<HTMLInputElement>(null)

  // Toast/copy feedback state
  const [copiedToken, setCopiedToken] = useState<string | null>(null)

  // Contrast Tester states
  const [contrastBg, setContrastBg] = useState<string>('#023e63')
  const [contrastText, setContrastText] = useState<string>('#ffffff')
  const [customBgInput, setCustomBgInput] = useState<string>('#023e63')
  const [customTextInput, setCustomTextInput] = useState<string>('#ffffff')

  const isValidHex = (hex: string): boolean => {
    return /^#?([a-f\d]{3}|[a-f\d]{6})$/i.test(hex)
  }

  const handleBgInputChange = (val: string) => {
    setCustomBgInput(val)
    if (isValidHex(val)) {
      setContrastBg(val.startsWith('#') ? val : `#${val}`)
    }
  }

  const handleTextInputChange = (val: string) => {
    setCustomTextInput(val)
    if (isValidHex(val)) {
      setContrastText(val.startsWith('#') ? val : `#${val}`)
    }
  }

  const computedRatio = getContrastRatio(contrastBg, contrastText)

  // Typography Playground states
  const [playgroundText, setPlaygroundText] = useState<string>('B2B payment processing designed for the next generation of global enterprises.')
  const [playgroundSize, setPlaygroundSize] = useState<string>('text-2xl')
  const [playgroundWeight, setPlaygroundWeight] = useState<string>('font-bold')
  const [playgroundLeading, setPlaygroundLeading] = useState<string>('leading-snug')
  const [playgroundTracking, setPlaygroundTracking] = useState<string>('tracking-tight')
  const [playgroundColor, setPlaygroundColor] = useState<string>('text-primary')

  // Spacing & Grid Playground states
  const [gridCols, setGridCols] = useState<number>(4)
  const [gridGap, setGridGap] = useState<string>('gap-4')

  // Borders & Shadows Composer states
  const [composerRadius, setComposerRadius] = useState<string>('rounded-xl')
  const [composerShadow, setComposerShadow] = useState<string>('shadow-hnh-md')
  const [composerBorder, setComposerBorder] = useState<string>('border border-border/80')
  const [composerBg, setComposerBg] = useState<string>('bg-card')

  // Button Playground states
  const [btnSize, setBtnSize] = useState<string>('md')
  const [btnVariant, setBtnVariant] = useState<string>('primary')
  const [btnLoading, setBtnLoading] = useState<boolean>(false)
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false)
  const [btnIcon, setBtnIcon] = useState<string>('none')

  // Input Playground states
  const [inputVal, setInputVal] = useState<string>('')
  const [inputPassShow, setInputPassShow] = useState<boolean>(false)
  // const [inputFloatFocused, setInputFloatFocused] = useState<boolean>(false)
  // const [inputFloatVal, setInputFloatVal] = useState<string>('')
  const [playInputLabel, setPlayInputLabel] = useState<string>('Portfolio Reference Name')
  const [playInputPlaceholder, setPlayInputPlaceholder] = useState<string>('e.g., Q3 Growth Allocation')
  const [playInputHelper, setPlayInputHelper] = useState<string>('Unique internal identifier for auditing.')
  const [playInputDisabled, setPlayInputDisabled] = useState<boolean>(false)
  const [playInputError, setPlayInputError] = useState<boolean>(false)
  const [playInputSize, setPlayInputSize] = useState<string>('md')
  const [playInputLeftIcon, setPlayInputLeftIcon] = useState<string>('none')
  const [playInputRightIcon, setPlayInputRightIcon] = useState<string>('none')


  // Checkbox & Radio Playground states
  const [playCheckLabel, setPlayCheckLabel] = useState<string>('Enable Multi-Factor Authentication')
  const [playCheckSubtext, setPlayCheckSubtext] = useState<string>('Recommended for secure transaction authorization.')
  const [playCheckState, setPlayCheckState] = useState<'checked' | 'unchecked' | 'indeterminate'>('checked')
  const [playCheckDisabled, setPlayCheckDisabled] = useState<boolean>(false)
  const [playCheckError, setPlayCheckError] = useState<boolean>(false)
  const [playCheckSize, setPlayCheckSize] = useState<string>('md')

  const [playRadioSelected, setPlayRadioSelected] = useState<string>('standard')
  const [playRadioDisabled, setPlayRadioDisabled] = useState<boolean>(false)
  const [playRadioError, setPlayRadioError] = useState<boolean>(false)
  const [playRadioSize, setPlayRadioSize] = useState<string>('md')

  // Select Playground states
  const [playSelectLabel, setPlaySelectLabel] = useState<string>('Reporting Currency')
  const [playSelectHelper, setPlaySelectHelper] = useState<string>('Select the base asset class currency for transaction records.')
  const [playSelectPlaceholder, setPlaySelectPlaceholder] = useState<string>('Choose currency...')
  const [playSelectValue, setPlaySelectValue] = useState<string>('')
  const [playSelectDisabled, setPlaySelectDisabled] = useState<boolean>(false)
  const [playSelectError, setPlaySelectError] = useState<boolean>(false)
  const [playSelectSize, setPlaySelectSize] = useState<string>('md')

  // Accordion Playground states
  const [playAccordionAllowMultiple, setPlayAccordionAllowMultiple] = useState<boolean>(false)
  const [playAccordionSize, setPlayAccordionSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [playAccordionVariant, setPlayAccordionVariant] = useState<'bordered' | 'cards'>('bordered')
  const [playAccordionDisabledItem, setPlayAccordionDisabledItem] = useState<boolean>(false)
  const [expandedItems, setExpandedItems] = useState<string[]>(['item-1'])

  // Alert Playground states
  const [playAlertVariant, setPlayAlertVariant] = useState<'info' | 'success' | 'warning' | 'destructive' | 'default'>('info')
  const [playAlertStyle, setPlayAlertStyle] = useState<'accent' | 'flat' | 'outline'>('accent')
  const [playAlertTitle, setPlayAlertTitle] = useState<string>('Portfolio Advisory')
  const [playAlertDescription, setPlayAlertDescription] = useState<string>('Your asset rebalancing transaction is pending approval from the secondary signature custodian.')
  const [playAlertDismissible, setPlayAlertDismissible] = useState<boolean>(true)
  const [playAlertVisible, setPlayAlertVisible] = useState<boolean>(true)

  // Badge playground state
  const [playBadgeVariant, setPlayBadgeVariant] = useState<'solid' | 'soft' | 'outline'>('solid')
  const [playBadgeColor, setPlayBadgeColor] = useState<'primary' | 'secondary' | 'success' | 'warning' | 'destructive' | 'neutral'>('primary')
  const [playBadgeSize, setPlayBadgeSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [playBadgeLabel, setPlayBadgeLabel] = useState<string>('Verified')
  const [playBadgeDot, setPlayBadgeDot] = useState<boolean>(false)
  const [playBadgeRounded, setPlayBadgeRounded] = useState<boolean>(false)

  // Checkbox, Radio, Switch, Select states
  // const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false)
  // const [radioSelected, setRadioSelected] = useState<string>('option-1')
  // const [switchChecked, setSwitchChecked] = useState<boolean>(false)
  // const [selectValue, setSelectValue] = useState<string>('USD')

  // Switch Playground states
  const [playSwitchChecked, setPlaySwitchChecked] = useState<boolean>(true)
  const [playSwitchDisabled, setPlaySwitchDisabled] = useState<boolean>(false)
  const [playSwitchError, setPlaySwitchError] = useState<boolean>(false)
  const [playSwitchSize, setPlaySwitchSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [playSwitchColor, setPlaySwitchColor] = useState<'primary' | 'secondary' | 'success' | 'destructive'>('primary')
  const [playSwitchLabel, setPlaySwitchLabel] = useState<string>('Automatic Auto-Rebalance')
  const [playSwitchDescription, setPlaySwitchDescription] = useState<string>('Automatically trigger asset allocation when target deviation exceeds 5%.')

  // Card Playground states
  const [playCardPadding, setPlayCardPadding] = useState<'sm' | 'md' | 'lg'>('md')
  const [playCardRadius, setPlayCardRadius] = useState<string>('rounded-xl')
  const [playCardShadow, setPlayCardShadow] = useState<string>('shadow-hnh-md')
  const [playCardBg, setPlayCardBg] = useState<'solid' | 'flat' | 'glass' | 'accent'>('solid')
  const [playCardTitle, setPlayCardTitle] = useState<string>('Bastheon Yield Fund')
  const [playCardSubtitle, setPlayCardSubtitle] = useState<string>('YTD growth of structured credit indices across Singapore & Hong Kong jurisdictions.')
  const [playCardShowFooter, setPlayCardShowFooter] = useState<boolean>(true)
  const [playCardInteractive, setPlayCardInteractive] = useState<boolean>(false)

  // Alert Dialog Playground states
  const [playAlertDialogOpen, setPlayAlertDialogOpen] = useState<boolean>(false)
  const [playAlertDialogVariant, setPlayAlertDialogVariant] = useState<'confirm' | 'destructive' | 'info'>('confirm')
  const [playAlertDialogTitle, setPlayAlertDialogTitle] = useState<string>('Revoke API Access Key?')
  const [playAlertDialogDescription, setPlayAlertDialogDescription] = useState<string>('This action cannot be undone. All active ingestion pipelines or scripts utilizing this credential will fail immediately.')
  const [playAlertDialogCancelText, setPlayAlertDialogCancelText] = useState<string>('Cancel')
  const [playAlertDialogActionText, setPlayAlertDialogActionText] = useState<string>('Revoke Access Key')
  const [playAlertDialogBlur, setPlayAlertDialogBlur] = useState<'none' | 'sm' | 'md' | 'lg'>('sm')
  const [specimenConfirmOpen, setSpecimenConfirmOpen] = useState<boolean>(false)
  const [specimenDestructiveOpen, setSpecimenDestructiveOpen] = useState<boolean>(false)
  const [specimenInfoOpen, setSpecimenInfoOpen] = useState<boolean>(false)

  // Avatar Playground states
  const [playAvatarSize, setPlayAvatarSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>('md')
  const [playAvatarShape, setPlayAvatarShape] = useState<'circle' | 'rounded' | 'square'>('circle')
  const [playAvatarType, setPlayAvatarType] = useState<'image' | 'initials' | 'icon'>('image')
  const [playAvatarStatus, setPlayAvatarStatus] = useState<'none' | 'online' | 'offline' | 'away' | 'busy'>('none')
  const [playAvatarBorder, setPlayAvatarBorder] = useState<'none' | 'primary' | 'secondary' | 'accent'>('none')
  const [playAvatarInitials, setPlayAvatarInitials] = useState<string>('AD')


  // Dialog & Modal states
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  // Alert & Banner Toast states
  // interface Toast {
  //   id: number
  //   text: string
  //   type: 'success' | 'info' | 'warning' | 'destructive'
  // }
  // const [toasts, setToasts] = useState<Toast[]>([])

  // const addToast = (text: string, type: 'success' | 'info' | 'warning' | 'destructive') => {
  //   const id = Date.now()
  //   setToasts(prev => [...prev, { id, text, type }])
  //   setTimeout(() => {
  //     setToasts(prev => prev.filter(t => t.id !== id))
  //   }, 3000)
  // }

  // Tabs states
  // const [activeTab, setActiveTab] = useState<string>('portfolio')

  // Table states
  // const [tableSearch, setTableSearch] = useState<string>('')
  // const [tableSortDir, setTableSortDir] = useState<'asc' | 'desc'>('desc')
  // const [tableStatusFilter, setTableStatusFilter] = useState<string>('all')

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  // Escape key global listener for Alert Dialog overlays
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPlayAlertDialogOpen(false)
        setSpecimenConfirmOpen(false)
        setSpecimenDestructiveOpen(false)
        setSpecimenInfoOpen(false)
      }

      // Global Cmd+K / Ctrl+K search focus hotkey
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Hash change listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      setCurrentPath(hash || 'introduction')
      setMobileMenuOpen(false)
      window.scrollTo(0, 0)
    };
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Copy helper
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedToken(label)
    setTimeout(() => setCopiedToken(null), 2000)
  }

  // Find active item details
  const activeItem = navigationGroups
    .flatMap(g => g.items)
    .find(item => item.id === currentPath) || { name: 'Introduction', id: 'introduction' }

  // Right TOC Items generator based on active page
  const getTOCItems = () => {
    switch (currentPath) {
      case 'introduction':
        return [
          { id: 'hh-financial', name: 'Harbour & Hills' },
          { id: 'design-system', name: 'Design System' },
          { id: 'quick-start', name: 'Quick Start' },
        ]
      case 'principles':
        return [
          { id: 'brand-principles', name: 'Core Principles' },
          { id: 'trust', name: '1. Trust & Stability' },
          { id: 'clarity', name: '2. Secondary Clarity' },
          { id: 'spacing', name: '3. Space & Confidence' },
          { id: 'accessibility', name: '4. Accessibility First' },
        ]
      case 'foundations/colors':
        return [
          { id: 'overview', name: 'Overview' },
          { id: 'brand-palette', name: 'Brand Palette' },
          { id: 'neutral-palette', name: 'Neutral Palette' },
          { id: 'semantic-palette', name: 'Semantic Palette' },
          { id: 'accessibility-tester', name: 'Contrast Tester' },
        ]
      case 'foundations/typography':
        return [
          { id: 'overview', name: 'Overview' },
          { id: 'font-family', name: 'Font Family' },
          { id: 'type-scale', name: 'Typographic Scale' },
          { id: 'weights', name: 'Font Weights' },
          { id: 'playground', name: 'Interactive Playground' },
        ]
      case 'foundations/spacing':
        return [
          { id: 'overview', name: 'Overview' },
          { id: 'spacing-scale', name: 'Spacing Scale' },
          { id: 'breakpoints', name: 'Responsive Breakpoints' },
          { id: 'grid-system', name: 'Grid Layout System' },
        ]
      case 'foundations/borders':
        return [
          { id: 'overview', name: 'Overview' },
          { id: 'radius-scale', name: 'Border Radius Scale' },
          { id: 'shadows-scale', name: 'Elevation Shadows' },
          { id: 'composer', name: 'Interactive Composer' },
        ]
      case 'components/button':
      case 'components/button-group':
      case 'components/input':
      case 'components/input-group':
      case 'components/textarea':
      case 'components/label':
      case 'components/checkbox':
      case 'components/radio-group':
      case 'components/select':
      case 'components/native-select':
      case 'components/accordion':
      case 'components/alert':
        return [
          { id: 'overview', name: 'Overview' },
          { id: 'specimen', name: 'Component Specimens' },
          { id: 'playground', name: 'Interactive Playground' },
        ]
      case 'components/alert-dialog':
      case 'components/badge':
      case 'components/switch':
      case 'components/card':
      case 'components/avatar':
        return [
          { id: 'overview', name: 'Overview' },
          { id: 'specimen', name: 'Component Specimens' },
          { id: 'playground', name: 'Interactive Playground' },
        ]
      default:
        return [
          { id: 'overview', name: 'Overview' },
          { id: 'details', name: 'Under Construction' },
        ]
    }
  }

  const getAccordionCode = () => {
    const sizeClasses = {
      sm: 'text-[11px] py-2 px-3',
      md: 'text-xs py-2.5 px-4',
      lg: 'text-sm py-3.5 px-5'
    }[playAccordionSize];

    return `// Installation: npm i framer-motion lucide-react\n` +
      `import { useState } from 'react'\n` +
      `import { motion, AnimatePresence } from 'framer-motion'\n` +
      `import { ChevronDown } from 'lucide-react'\n\n` +
      `export default function AccordionDemo() {\n` +
      `  const [expanded, setExpanded] = useState<string[]>(${JSON.stringify(expandedItems)})\n\n` +
      `  const handleToggle = (id: string) => {\n` +
      `    const allowMultiple = ${playAccordionAllowMultiple};\n` +
      `    if (allowMultiple) {\n` +
      `      setExpanded(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])\n` +
      `    } else {\n` +
      `      setExpanded(prev => prev.includes(id) ? [] : [id])\n` +
      `    }\n` +
      `  }\n\n` +
      `  const items = [\n` +
      `    { id: 'item-1', title: 'Institutional Fund Settlement', content: 'Direct access to private market funds, structured credit instruments, and liquidity pool optimization protocols.' },\n` +
      `    { id: 'item-2', title: 'Custodial Trust Protocols', content: 'Secured multi-signature cold storage vault integrations and compliant off-exchange clearing settlements.' },\n` +
      `    { id: 'item-3', title: 'Global Regulatory Compliance', content: 'Automated KYC/AML vetting pipelines, cross-border jurisdiction logic, and smart contract audit certifications.' }\n` +
      `  ]\n\n` +
      `  return (\n` +
      (playAccordionVariant === 'bordered'
        ? `    <div className="border-t border-border/80 w-full max-w-md">\n` +
          `      {items.map((item, index) => {\n` +
          `        const isOpen = expanded.includes(item.id);\n` +
          `        const isDisabled = index === 2 && ${playAccordionDisabledItem};\n` +
          `        return (\n` +
          `          <div key={item.id} className="border-b border-border/80">\n` +
          `            <button\n` +
          `              onClick={() => !isDisabled && handleToggle(item.id)}\n` +
          `              disabled={isDisabled}\n` +
          `              aria-expanded={isOpen}\n` +
          `              className="w-full flex justify-between items-center ${sizeClasses} font-bold text-left transition duration-150 rounded-md outline-none focus-visible:shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border)] disabled:opacity-40 disabled:cursor-not-allowed"\n` +
          `            >\n` +
          `              <span className={isOpen ? 'text-secondary-500' : 'text-slate-900 dark:text-white'}>{item.title}</span>\n` +
          `              <ChevronDown size={16} className={\`transition-transform duration-200 \${isOpen ? 'rotate-180 text-secondary-500' : 'text-muted-foreground'}\`} />\n` +
          `            </button>\n` +
          `            <AnimatePresence initial={false}>\n` +
          `              {isOpen && (\n` +
          `                <motion.div\n` +
          `                  initial={{ height: 0, opacity: 0 }}\n` +
          `                  animate={{ height: 'auto', opacity: 1 }}\n` +
          `                  exit={{ height: 0, opacity: 0 }}\n` +
          `                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}\n` +
          `                  className="overflow-hidden"\n` +
          `                >\n` +
          `                  <div className="pb-4 px-4 text-xs text-muted-foreground leading-relaxed">\n` +
          `                    {item.content}\n` +
          `                  </div>\n` +
          `                </motion.div>\n` +
          `              )}\n` +
          `            </AnimatePresence>\n` +
          `          </div>\n` +
          `        )\n` +
          `      })}\n` +
          `    </div>\n`
        : `    <div className="space-y-3 w-full max-w-md">\n` +
          `      {items.map((item, index) => {\n` +
          `        const isOpen = expanded.includes(item.id);\n` +
          `        const isDisabled = index === 2 && ${playAccordionDisabledItem};\n` +
          `        return (\n` +
          `          <div key={item.id} className="bg-card/45 border border-border/80 rounded-xl overflow-hidden transition-all duration-200">\n` +
          `            <button\n` +
          `              onClick={() => !isDisabled && handleToggle(item.id)}\n` +
          `              disabled={isDisabled}\n` +
          `              aria-expanded={isOpen}\n` +
          `              className="w-full flex justify-between items-center ${sizeClasses} font-bold text-left transition duration-150 outline-none focus-visible:shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border)] disabled:opacity-40 disabled:cursor-not-allowed"\n` +
          `            >\n` +
          `              <span className={isOpen ? 'text-secondary-500' : 'text-slate-900 dark:text-white'}>{item.title}</span>\n` +
          `              <ChevronDown size={16} className={\`transition-transform duration-200 \${isOpen ? 'rotate-180 text-secondary-500' : 'text-muted-foreground'}\`} />\n` +
          `            </button>\n` +
          `            <AnimatePresence initial={false}>\n` +
          `              {isOpen && (\n` +
          `                <motion.div\n` +
          `                  initial={{ height: 0, opacity: 0 }}\n` +
          `                  animate={{ height: 'auto', opacity: 1 }}\n` +
          `                  exit={{ height: 0, opacity: 0 }}\n` +
          `                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}\n` +
          `                  className="overflow-hidden"\n` +
          `                >\n` +
          `                  <div className="pb-4 px-4 text-xs text-muted-foreground leading-relaxed border-t border-border/30 pt-3">\n` +
          `                    {item.content}\n` +
          `                  </div>\n` +
          `                </motion.div>\n` +
          `              )}\n` +
          `            </AnimatePresence>\n` +
          `          </div>\n` +
          `        )\n` +
          `      })}\n` +
          `    </div>\n`) +
      `  )\n` +
      `}`
  }

  const getAlertCode = () => {
    const iconName = {
      info: 'Info',
      success: 'CheckCircle2',
      warning: 'AlertTriangle',
      destructive: 'XCircle',
      default: 'Bell'
    }[playAlertVariant];

    const styleClasses = {
      accent: {
        info: 'relative w-full rounded-r-xl border border-y-border border-r-border border-l-4 border-l-secondary-500 bg-card p-4 flex gap-3 text-left shadow-hnh-sm text-foreground',
        success: 'relative w-full rounded-r-xl border border-y-border border-r-border border-l-4 border-l-emerald-500 bg-card p-4 flex gap-3 text-left shadow-hnh-sm text-foreground',
        warning: 'relative w-full rounded-r-xl border border-y-border border-r-border border-l-4 border-l-amber-500 bg-card p-4 flex gap-3 text-left shadow-hnh-sm text-foreground',
        destructive: 'relative w-full rounded-r-xl border border-y-border border-r-border border-l-4 border-l-red-500 bg-card p-4 flex gap-3 text-left shadow-hnh-sm text-foreground',
        default: 'relative w-full rounded-r-xl border border-y-border border-r-border border-l-4 border-l-slate-400 dark:border-l-slate-600 bg-card p-4 flex gap-3 text-left shadow-hnh-sm text-foreground'
      }[playAlertVariant],
      flat: {
        info: 'relative w-full rounded-xl border border-transparent bg-secondary-500/8 dark:bg-secondary-500/10 text-secondary-700 dark:text-secondary-300 p-4 flex gap-3 text-left shadow-xs',
        success: 'relative w-full rounded-xl border border-transparent bg-emerald-500/8 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 p-4 flex gap-3 text-left shadow-xs',
        warning: 'relative w-full rounded-xl border border-transparent bg-amber-500/8 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 p-4 flex gap-3 text-left shadow-xs',
        destructive: 'relative w-full rounded-xl border border-transparent bg-red-500/8 dark:bg-red-500/10 text-red-700 dark:text-red-300 p-4 flex gap-3 text-left shadow-xs',
        default: 'relative w-full rounded-xl border border-transparent bg-muted/65 text-slate-700 dark:text-slate-300 p-4 flex gap-3 text-left shadow-xs'
      }[playAlertVariant],
      outline: {
        info: 'relative w-full rounded-xl border border-secondary-500/40 bg-transparent text-secondary-700 dark:text-secondary-300 p-4 flex gap-3 text-left shadow-xs',
        success: 'relative w-full rounded-xl border border-emerald-500/40 bg-transparent text-emerald-700 dark:text-emerald-300 p-4 flex gap-3 text-left shadow-xs',
        warning: 'relative w-full rounded-xl border border-amber-500/40 bg-transparent text-amber-700 dark:text-amber-300 p-4 flex gap-3 text-left shadow-xs',
        destructive: 'relative w-full rounded-xl border border-red-500/40 bg-transparent text-red-700 dark:text-red-300 p-4 flex gap-3 text-left shadow-xs',
        default: 'relative w-full rounded-xl border border-border bg-transparent text-foreground p-4 flex gap-3 text-left shadow-xs'
      }[playAlertVariant]
    }[playAlertStyle];

    const iconColorClass = {
      accent: {
        info: 'text-secondary-500',
        success: 'text-emerald-500',
        warning: 'text-amber-500',
        destructive: 'text-red-500',
        default: 'text-slate-400 dark:text-slate-500'
      }[playAlertVariant],
      flat: 'shrink-0 mt-0.5',
      outline: 'shrink-0 mt-0.5'
    }[playAlertStyle];

    const isInherited = playAlertStyle === 'flat' || playAlertStyle === 'outline';
    const finalIconClass = isInherited ? 'shrink-0 mt-0.5' : `shrink-0 mt-0.5 ${iconColorClass}`;

    return `// Installation: npm i lucide-react\n` +
      `import { ${iconName}, X } from 'lucide-react'\n\n` +
      `export default function AlertDemo() {\n` +
      `  return (\n` +
      `    <div\n` +
      `      role="alert"\n` +
      `      className="${styleClasses}"\n` +
      `    >\n` +
      `      <${iconName} className="${finalIconClass}" size={16} />\n` +
      `      <div className="flex-1 space-y-1">\n` +
      `        <h5 className="font-bold text-xs leading-none tracking-tight">${playAlertTitle}</h5>\n` +
      `        <p className="text-[11px] leading-relaxed opacity-95">${playAlertDescription}</p>\n` +
      `      </div>\n` +
      (playAlertDismissible
        ? `      <button\n` +
          `        aria-label="Close alert"\n` +
          `        className="text-muted-foreground hover:text-foreground shrink-0 self-start p-1 rounded-md transition duration-150 focus:outline-none focus:ring-2 focus:ring-secondary-500"\n` +
          `      >\n` +
          `        <X size={14} />\n` +
          `      </button>\n`
        : '') +
      `    </div>\n` +
      `  )\n` +
      `}`
  }

  const getSwitchCode = () => {
    const sizeClass = playSwitchSize === 'sm' ? 'w-8 h-5' : playSwitchSize === 'lg' ? 'w-12 h-7' : 'w-10 h-6';
    const thumbClass = playSwitchSize === 'sm' ? 'w-4 h-4' : playSwitchSize === 'lg' ? 'w-6 h-6' : 'w-5 h-5';
    const translateClass = playSwitchChecked 
      ? (playSwitchSize === 'sm' ? 'translate-x-3' : playSwitchSize === 'lg' ? 'translate-x-5' : 'translate-x-4')
      : 'translate-x-0';
    
    const colorClass = playSwitchChecked
      ? (playSwitchColor === 'secondary' ? 'bg-secondary' : playSwitchColor === 'success' ? 'bg-emerald-500' : playSwitchColor === 'destructive' ? 'bg-rose-500' : 'bg-primary')
      : 'bg-slate-300 dark:bg-slate-700';

    const errorClass = playSwitchError && !playSwitchDisabled ? ' ring-2 ring-rose-500/80 ring-offset-2 ring-offset-card' : '';

    return `// Installation: npm i lucide-react\n` +
      `import { useState } from 'react'\n\n` +
      `export default function SwitchDemo() {\n` +
      `  const [checked, setChecked] = useState(${playSwitchChecked})\n\n` +
      `  return (\n` +
      `    <div className="flex items-start justify-between gap-4 w-full max-w-md">\n` +
      `      <div className="space-y-1">\n` +
      `        <label className="text-xs font-semibold ${playSwitchDisabled ? 'text-muted-foreground/60' : 'text-foreground'}">\n` +
      `          ${playSwitchLabel}\n` +
      `        </label>\n` +
      (playSwitchDescription ? `        <p className="text-[11px] text-muted-foreground leading-relaxed">\n          ${playSwitchDescription}\n        </p>\n` : '') +
      `      </div>\n` +
      `      <button\n` +
      `        type="button"\n` +
      `        role="switch"\n` +
      `        aria-checked={checked}\n` +
      (playSwitchDisabled ? `        disabled\n` : '') +
      `        onClick={() => setChecked(!checked)}\n` +
      `        className="relative inline-flex shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out outline-none focus-visible:shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border)] ${sizeClass} ${colorClass}${errorClass}${playSwitchDisabled ? ' opacity-40 cursor-not-allowed' : ''}"\n` +
      `      >\n` +
      `        <span className="pointer-events-none block rounded-full bg-white shadow-md ring-0 transition-transform duration-200 ease-in-out ${thumbClass} ${translateClass}" />\n` +
      `      </button>\n` +
      `    </div>\n` +
      `  )\n` +
      `}`;
  }

  const getCardCode = () => {
    const paddingClass = playCardPadding === 'sm' ? 'p-4' : playCardPadding === 'lg' ? 'p-8' : 'p-6';
    
    let bgBorderClass = 'bg-card border border-border/80';
    if (playCardBg === 'flat') bgBorderClass = 'bg-muted/30 border border-transparent';
    else if (playCardBg === 'glass') bgBorderClass = 'bg-card/40 backdrop-blur-md border border-border/40';
    else if (playCardBg === 'accent') bgBorderClass = 'bg-card border border-border/80 border-l-4 border-l-primary';

    const shadowClass = playCardShadow !== 'none' ? ` ${playCardShadow}` : '';
    
    const interactiveClass = playCardInteractive 
      ? ' hover:-translate-y-1 hover:shadow-hnh-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-200/40'
      : '';

    return `export default function CardDemo() {\n` +
      `  return (\n` +
      `    <div \n` +
      `      className="${bgBorderClass} ${playCardRadius}${shadowClass}${interactiveClass} ${paddingClass} w-full max-w-md"\n` +
      (playCardInteractive ? `      tabIndex={0}\n` : '') +
      `    >\n` +
      `      {/* Header */}\n` +
      `      <div className="space-y-1.5">\n` +
      `        <h3 className="text-sm font-bold text-foreground leading-none">\n` +
      `          ${playCardTitle}\n` +
      `        </h3>\n` +
      `        <p className="text-[11px] text-muted-foreground leading-relaxed">\n` +
      `          ${playCardSubtitle}\n` +
      `        </p>\n` +
      `      </div>\n\n` +
      `      {/* Content Body */}\n` +
      `      <div className="py-4 text-xs text-foreground/90 font-light leading-relaxed border-t border-border/40 mt-4">\n` +
      `        Institutional liquidity balances settle instantly via multi-signature smart contracts. Standard yield cycles accrue at 4.8% APY.\n` +
      `      </div>\n` +
      (playCardShowFooter
        ? `\n      {/* Footer Actions */}\n` +
          `      <div className="flex justify-end gap-2.5 pt-4 border-t border-border/40 mt-1">\n` +
          `        <button className="px-3 py-1.5 rounded-lg border border-border text-[11px] font-semibold hover:bg-muted transition">Cancel</button>\n` +
          `        <button className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-[11px] font-semibold hover:opacity-95 transition">Approve</button>\n` +
          `      </div>\n`
        : '') +
      `    </div>\n` +
      `  )\n` +
      `}`;
  }

  const getAlertDialogCode = () => {
    const blurClass = {
      none: 'backdrop-blur-none',
      sm: 'backdrop-blur-xs',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg'
    }[playAlertDialogBlur];

    const actionBtnColorClass = {
      confirm: 'bg-primary hover:opacity-95 text-primary-foreground focus-visible:ring-primary',
      destructive: 'bg-destructive hover:bg-destructive-600 text-destructive-foreground focus-visible:ring-destructive',
      info: 'bg-secondary-500 hover:opacity-95 text-white focus-visible:ring-secondary-500'
    }[playAlertDialogVariant];

    return `// Installation: npm i framer-motion lucide-react\n` +
      `import { useState, useEffect } from 'react'\n` +
      `import { motion, AnimatePresence } from 'framer-motion'\n` +
      `import { AlertCircle, AlertTriangle, CheckCircle2, X } from 'lucide-react'\n\n` +
      `export default function AlertDialogDemo() {\n` +
      `  const [isOpen, setIsOpen] = useState(false)\n\n` +
      `  // Escape key listener to close dialog\n` +
      `  useEffect(() => {\n` +
      `    const handleKeyDown = (e: KeyboardEvent) => {\n` +
      `      if (e.key === 'Escape') setIsOpen(false)\n` +
      `    }\n` +
      `    if (isOpen) window.addEventListener('keydown', handleKeyDown)\n` +
      `    return () => window.removeEventListener('keydown', handleKeyDown)\n` +
      `  }, [isOpen])\n\n` +
      `  return (\n` +
      `    <div className="flex justify-center p-8">\n` +
      `      <button\n` +
      `        onClick={() => setIsOpen(true)}\n` +
      `        className="px-4 py-2.5 bg-primary text-primary-foreground text-xs font-semibold rounded-lg hover:opacity-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-2 ring-offset-background cursor-pointer"\n` +
      `      >\n` +
      `        Open Alert Dialog\n` +
      `      </button>\n\n` +
      `      <AnimatePresence>\n` +
      `        {isOpen && (\n` +
      `          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="alertdialog" aria-modal="true" aria-labelledby="dialog-title" aria-describedby="dialog-desc">\n` +
      `            {/* Backdrop Overlay */}\n` +
      `            <motion.div\n` +
      `              initial={{ opacity: 0 }}\n` +
      `              animate={{ opacity: 1 }}\n` +
      `              exit={{ opacity: 0 }}\n` +
      `              onClick={() => setIsOpen(false)}\n` +
      `              className="fixed inset-0 bg-slate-950/60 ${blurClass}"\n` +
      `            />\n\n` +
      `            {/* Dialog Panel */}\n` +
      `            <motion.div\n` +
      `              initial={{ opacity: 0, scale: 0.95 }}\n` +
      `              animate={{ opacity: 1, scale: 1 }}\n` +
      `              exit={{ opacity: 0, scale: 0.95 }}\n` +
      `              transition={{ duration: 0.2, ease: 'easeOut' }}\n` +
      `              className="relative bg-card border border-border/80 text-foreground w-full max-w-md p-6 rounded-xl shadow-hnh-xl z-10 flex flex-col gap-4 focus-visible:outline-none"\n` +
      `              tabIndex={-1}\n` +
      `            >\n` +
      `              {/* Close Button */}\n` +
      `              <button\n` +
      `                onClick={() => setIsOpen(false)}\n` +
      `                className="absolute top-4.5 right-4.5 text-muted-foreground hover:text-foreground rounded-lg p-1 hover:bg-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-2 ring-offset-background cursor-pointer"\n` +
      `                aria-label="Close dialog"\n` +
      `              >\n` +
      `                <X size={14} />\n` +
      `              </button>\n\n` +
      `              {/* Content Header */}\n` +
      `              <div className="flex gap-3.5">\n` +
      `                {/* Icon mapping based on Variant */}\n` +
      (playAlertDialogVariant === 'destructive'
        ? `                <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-rose-500/10 text-rose-500">\n` +
          `                  <AlertTriangle size={18} />\n` +
          `                </div>\n`
        : playAlertDialogVariant === 'info'
        ? `                <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-sky-500/10 text-sky-500">\n` +
          `                  <AlertCircle size={18} />\n` +
          `                </div>\n`
        : `                <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">\n` +
          `                  <CheckCircle2 size={18} />\n` +
          `                </div>\n`) +
      `                <div className="space-y-1.5 flex-1">\n` +
      `                  <h3 id="dialog-title" className="text-sm font-bold leading-none">${playAlertDialogTitle}</h3>\n` +
      `                  <p id="dialog-desc" className="text-[11px] text-muted-foreground leading-relaxed font-light">${playAlertDialogDescription}</p>\n` +
      `                </div>\n` +
      `              </div>\n\n` +
      `              {/* Footer Actions */}\n` +
      `              <div className="flex justify-end gap-2.5 pt-4 border-t border-border/60">\n` +
      `                <button\n` +
      `                  onClick={() => setIsOpen(false)}\n` +
      `                  className="px-3.5 py-2 border border-border text-[11px] font-semibold rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-2 ring-offset-background cursor-pointer"\n` +
      `                >\n` +
      `                  ${playAlertDialogCancelText}\n` +
      `                </button>\n` +
      `                <button\n` +
      `                  onClick={() => setIsOpen(false)}\n` +
      `                  className="px-3.5 py-2 text-[11px] font-semibold rounded-lg transition focus-visible:outline-none focus-visible:ring-2 ring-offset-2 ring-offset-background cursor-pointer ${actionBtnColorClass}"\n` +
      `                >\n` +
      `                  ${playAlertDialogActionText}\n` +
      `                </button>\n` +
      `              </div>\n` +
      `            </motion.div>\n` +
      `          </div>\n` +
      `        )}\n` +
      `      </AnimatePresence>\n` +
      `    </div>\n` +
      `  )\n` +
      `}`;
  };

  const getAvatarCode = () => {
    const sizeClassMap = {
      xs: 'w-6 h-6 text-[9px]',
      sm: 'w-8 h-8 text-xs',
      md: 'w-10 h-10 text-sm',
      lg: 'w-12 h-12 text-base',
      xl: 'w-14 h-14 text-lg',
      '2xl': 'w-16 h-16 text-xl'
    };
    
    const shapeClassMap = {
      circle: 'rounded-full',
      rounded: 'rounded-xl',
      square: 'rounded-none'
    };
    
    const sizeClass = sizeClassMap[playAvatarSize];
    const shapeClass = shapeClassMap[playAvatarShape];
    
    const statusDotSizeMap = {
      xs: 'w-1.5 h-1.5 translate-x-0.5 translate-y-0.5',
      sm: 'w-2 h-2 translate-x-0.5 translate-y-0.5',
      md: 'w-2.5 h-2.5 translate-x-0.5 translate-y-0.5',
      lg: 'w-3.5 h-3.5 translate-x-0.5 translate-y-0.5',
      xl: 'w-4 h-4 translate-x-0.5 translate-y-0.5',
      '2xl': 'w-4.5 h-4.5 translate-x-0.5 translate-y-0.5'
    };
    
    const statusDotSize = statusDotSizeMap[playAvatarSize];
    
    const statusColorMap = {
      none: '',
      online: 'bg-emerald-500',
      offline: 'bg-slate-400',
      away: 'bg-amber-500',
      busy: 'bg-red-500'
    };
    const statusColor = statusColorMap[playAvatarStatus];
    
    const borderClassMap = {
      none: '',
      primary: 'ring-2 ring-primary ring-offset-2 ring-offset-background',
      secondary: 'ring-2 ring-secondary-500 ring-offset-2 ring-offset-background',
      accent: 'ring-2 ring-slate-350 dark:ring-slate-700 ring-offset-2 ring-offset-background'
    };
    const borderClass = borderClassMap[playAvatarBorder];

    let contentHtml = '';
    if (playAvatarType === 'image') {
      contentHtml = `      <img \n` +
        `        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" \n` +
        `        alt="User profile" \n` +
        `        className="w-full h-full object-cover \${shapeClass}" \n` +
        `      />`;
    } else if (playAvatarType === 'initials') {
      contentHtml = `      <span className="font-semibold text-primary dark:text-primary-300 font-mono tracking-tight">\n` +
        `        \${playAvatarInitials}\n` +
        `      </span>`;
    } else {
      contentHtml = `      <User className="w-1/2 h-1/2 text-muted-foreground" />`;
    }

    const wrapperBg = playAvatarType === 'initials' ? 'bg-primary/10' : playAvatarType === 'icon' ? 'bg-muted' : 'bg-transparent';
    const flexClasses = `relative flex items-center justify-center shrink-0 overflow-visible \${shapeClass} \${sizeClass} \${wrapperBg} \${borderClass}`;

    let statusDotHtml = '';
    if (playAvatarStatus !== 'none') {
      statusDotHtml = `\n      {/* Status indicator */}\n` +
        `      <span \n` +
        `        className="absolute bottom-0 right-0 rounded-full ring-2 ring-background \${statusColor} \${statusDotSize}" \n` +
        `        aria-hidden="true"\n` +
        `      />`;
    }

    return `import { User } from 'lucide-react'\n\n` +
      `export default function AvatarDemo() {\n` +
      `  return (\n` +
      `    <div className="\${flexClasses}">\n` +
      contentHtml +
      statusDotHtml +
      `\n    </div>\n` +
      `  )\n` +
      `}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-300">
      {/* 1. Header (Wise Design Layout) */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-card/85 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Mobile menu toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 md:hidden text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          {/* Logo SVG */}
          <a href="#introduction" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 flex items-center justify-center transition-all duration-300">
              <svg width="38" height="16" viewBox="0 0 100 42" fill="none" className="transform group-hover:scale-105 transition-transform duration-300">
                <g clipPath="url(#clip0_hnh_logo)">
                  {/* Bottom wave: Teal */}
                  <path 
                    d="M99.9234 32.7937C90.8917 25.56 83.2504 22.4049 75.8685 22.8797C69.2818 23.2983 63.7326 26.544 57.856 29.9796C45.0355 37.4767 30.4418 45.9579 0.310373 26.3282C0.216824 26.2678 0.093509 26.2937 0.0339776 26.3886C-0.0255538 26.4836 -4.03689e-05 26.6088 0.093509 26.6692L12.34 34.8094C20.8615 40.0534 27.8734 42 33.9669 42C42.9349 42 49.9085 37.7832 56.7419 33.6483C68.4611 26.557 79.5339 19.8627 99.6938 33.1218C99.7831 33.1822 99.9022 33.1563 99.966 33.07C100.03 32.9837 100.013 32.8585 99.9277 32.7937H99.9234Z" 
                    fill="#00bfb3" 
                  />
                  {/* Top wave: Navy in light mode, Slate-100 in dark mode */}
                  <path 
                    d="M99.9833 23.1558C99.9493 23.0392 99.8345 22.9659 99.7154 22.9918C94.3321 24.1053 87.7964 21.2653 80.878 18.257C69.6393 13.3712 56.9038 7.83361 45.427 17.683C43.7771 19.0986 39.8863 24.1226 39.5419 24.6405C38.5596 26.1166 37.4711 26.8417 36.2209 26.8676C32.3726 26.9539 27.5251 20.2036 22.8349 13.6906C17.6173 6.44382 12.2255 -1.0403 7.75215 0.120733C4.14199 1.05733 1.60765 7.55738 0.000306221 19.9878C-0.0167028 20.1086 0.0640899 20.2208 0.183153 20.2467C0.302215 20.2683 0.417026 20.1992 0.451044 20.0784C2.87907 10.9498 5.61752 6.23233 8.81946 5.64966C13.1142 4.86413 17.9788 11.8001 22.6818 18.503C27.5081 25.3829 32.5002 32.4915 37.4668 32.5778C37.4966 32.5778 37.5263 32.5778 37.5561 32.5778C39.5887 32.5778 41.4384 31.4341 43.2073 29.0818C56.7507 11.1095 68.572 15.8616 80.002 20.4625C86.8524 23.2162 93.32 25.8188 99.8387 23.445C99.9535 23.4018 100.013 23.2809 99.9833 23.1644V23.1558Z" 
                    fill={darkMode ? "#f1f5f9" : "#023e63"} 
                  />
                </g>
                <defs>
                  <clipPath id="clip0_hnh_logo">
                    <rect width="100" height="42" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-primary dark:text-slate-100 text-base leading-none">HARBOUR & HILLS</span>
              <span className="text-[10px] text-muted-foreground tracking-wider font-semibold uppercase mt-0.5">Design System</span>
            </div>
          </a>
        </div>

        {/* Global Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a href="#introduction" className={`hover:text-primary dark:hover:text-secondary transition ${currentPath === 'introduction' || currentPath === 'principles' ? 'text-primary dark:text-secondary font-semibold' : 'text-muted-foreground'}`}>Getting Started</a>
          <a href="#foundations/colors" className={`hover:text-primary dark:hover:text-secondary transition ${currentPath.startsWith('foundations') ? 'text-primary dark:text-secondary font-semibold' : 'text-muted-foreground'}`}>Foundations</a>
          <a href="#components/button" className={`hover:text-primary dark:hover:text-secondary transition ${currentPath.startsWith('components') ? 'text-primary dark:text-secondary font-semibold' : 'text-muted-foreground'}`}>Components</a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-foreground transition flex items-center gap-1"
          >
            Github <ExternalLink size={12} />
          </a>
        </nav>

        {/* Tools and Search */}
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block w-48 lg:w-64">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
              <Search size={14} />
            </span>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search design system..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-muted/50 hover:bg-muted/80 border border-border focus:border-primary dark:focus:border-secondary focus:ring-1 focus:ring-primary dark:focus:ring-secondary rounded-full py-1.5 pl-9 pr-14 transition-all duration-300 outline-none text-foreground"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none text-[10px] text-muted-foreground font-semibold font-mono bg-muted/95 border border-border/85 rounded px-1.5 py-0.5 leading-none h-[18px] shadow-2xs">
              ⌘K
            </span>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-all duration-300 cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} className="text-primary hover:rotate-45 transition-transform duration-300" /> : <Moon size={18} className="text-primary hover:-rotate-12 transition-transform duration-300" />}
          </button>
        </div>
      </header>

      {/* 2. Main Body Layout (Wise Design sidebars) */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto flex relative">
        {/* Left Navigation Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-30 w-[260px] md:w-[280px] border-r border-border bg-card md:bg-transparent px-6 py-6 overflow-y-auto transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-[calc(100vh-65px)] sticky top-[65px]
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="space-y-5.5">
            {navigationGroups.map((group) => (
              <div key={group.title} className="space-y-1.5">
                <h4 className="text-[10px] font-bold tracking-widest text-muted-foreground/80 uppercase">{group.title}</h4>
                <ul className="space-y-0.5 border-l border-border/60 pl-1.5 ml-1">
                  {group.items.map((item) => {
                    const isActive = currentPath === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`
                            group flex items-center justify-between text-xs px-3 py-1.5 rounded-md transition-all duration-200 focus-visible:ring-1 focus-visible:ring-primary dark:focus-visible:ring-secondary outline-none
                            ${isActive 
                              ? 'bg-secondary/10 dark:bg-secondary/10 text-secondary dark:text-secondary font-semibold border-l-3 border-secondary dark:border-secondary -ml-2 rounded-l-none' 
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'}
                          `}
                        >
                          <span>{item.name}</span>
                          {isActive && <ChevronRight size={12} className="text-secondary dark:text-secondary" />}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Backdrop for mobile menu */}
        {mobileMenuOpen && (
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-20 bg-background/50 backdrop-blur-xs md:hidden"
          />
        )}

        {/* Center Main Content Area */}
        <main className="flex-1 min-w-0 px-6 sm:px-10 lg:px-12 py-8 lg:py-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
            <span>Docs</span>
            <ChevronRight size={12} />
            <span className="capitalize">{activeItem.id.split('/')[0]}</span>
            {activeItem.id.includes('/') && (
              <>
                <ChevronRight size={12} />
                <span className="text-foreground font-medium">{activeItem.name}</span>
              </>
            )}
          </div>

          {/* Dynamic Page Router */}
          {currentPath === 'introduction' && (
            <div className="space-y-16 max-w-5xl mx-auto py-4">
              {/* Hero Section */}
              <section className="text-center space-y-6 max-w-3xl mx-auto">
                {/* Announcement Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-muted/65 text-[10.5px] font-medium text-primary dark:text-secondary-300">
                  <span className="bg-secondary-500 text-white dark:bg-primary-500 dark:text-foreground text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">v1.0</span>
                  <span className="font-semibold">Introducing Harbour & Hills Design System</span>
                  <ChevronRight size={10} className="text-muted-foreground" />
                </div>

                <h1 id="hh-financial" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground leading-[1.05] max-w-3xl mx-auto text-balance">
                  Build premium <span className="text-secondary-500">financial interfaces</span> with speed.
                </h1>

                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                  Beautifully designed, fully-customizable component variables built specifically for **Harbour & Hills Financial Services**. Copy, paste, and style consistent B2B Payment Apps.
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-wrap justify-center gap-3.5 pt-2">
                  <a 
                    href="#foundations/colors" 
                    className="px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary-600 active:scale-[0.98] rounded-lg text-xs font-semibold shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2 cursor-pointer"
                  >
                    Get Started
                    <ArrowRight size={14} />
                  </a>
                  <a 
                    href="#components/button" 
                    className="px-5 py-2.5 bg-card hover:bg-muted active:scale-[0.98] text-foreground border border-border rounded-lg text-xs font-semibold shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2 cursor-pointer"
                  >
                    Browse Components
                  </a>
                </div>
              </section>

              {/* Showcase Divider */}
              <div className="relative flex items-center justify-center">
                <hr className="w-full border-border/60" />
                <span className="absolute px-4 bg-background text-[10px] font-bold text-muted-foreground uppercase tracking-widest">SHOWCASE PLAYGROUND</span>
              </div>

              {/* Component Showcase Bento Grid */}
              <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* 1. B2B Volume Metric (col-span-7) */}
                <div className="md:col-span-7 bg-card border border-border/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between min-h-[220px] relative overflow-hidden group hover:border-border transition duration-200">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="text-[10px] text-muted-foreground font-bold tracking-wider font-mono flex items-center gap-1.5">
                        <Wallet size={11} className="text-secondary-500" />
                        B2B TRANSACTION VOLUME (YTD)
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary dark:text-slate-100 tabular-nums">$24,892,400.00</h3>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-0.8 bg-secondary-500/10 text-secondary-500 dark:bg-secondary-500/10 dark:text-secondary rounded-full text-[10px] font-bold">
                      <ArrowUpRight size={12} />
                      +28.4%
                    </div>
                  </div>
                  
                  {/* Mock SVG Line Chart */}
                  <div className="h-16 w-full mt-4 flex items-end">
                    <svg viewBox="0 0 400 100" className="w-full h-full text-secondary-500 dark:text-secondary overflow-visible">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M0,80 Q50,90 100,50 T200,60 T300,20 T400,10" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                      />
                      <path 
                        d="M0,80 Q50,90 100,50 T200,60 T300,20 T400,10 L400,100 L0,100 Z" 
                        fill="url(#chartGrad)" 
                      />
                      <circle cx="400" cy="10" r="4.5" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* 2. B2B Remittance Transfer Box (col-span-5) */}
                <div className="md:col-span-5 bg-card border border-border/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between min-h-[220px] hover:border-border transition duration-200">
                  <div className="space-y-1">
                    <div className="text-[10px] text-muted-foreground font-bold tracking-wider font-mono flex items-center gap-1.5">
                      <Send size={11} className="text-secondary-500" />
                      B2B VENDOR SETTLEMENT
                    </div>
                    <h3 className="text-base font-bold text-primary dark:text-slate-100">Initiate Remittance</h3>
                  </div>

                  <div className="space-y-3.5 my-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary-100 dark:bg-secondary-900 flex items-center justify-center text-xs font-bold text-secondary-500 dark:text-secondary-300">SC</div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold leading-none">SingCorp Trading Ltd</p>
                        <p className="text-[10px] text-muted-foreground leading-none mt-1">vendor-settlement@singcorp.com</p>
                      </div>
                    </div>

                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground">$</span>
                      <input 
                        type="text" 
                        value="124,500.00" 
                        disabled
                        className="w-full bg-muted/40 border border-border rounded-lg py-2 pl-7 pr-4 text-xs font-bold text-foreground outline-none cursor-default tabular-nums"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-primary hover:bg-primary-600 text-primary-foreground py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition cursor-pointer">
                    Authorize B2B Settlement <ArrowRight size={13} />
                  </button>
                </div>

                {/* 3. B2B Payments Transactions (col-span-7) */}
                <div className="md:col-span-7 bg-card border border-border/80 rounded-2xl p-6 shadow-xs hover:border-border transition duration-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] text-muted-foreground font-bold tracking-wider font-mono flex items-center gap-1.5">
                      <Activity size={11} className="text-secondary-500" />
                      RECENT SETTLEMENTS
                    </div>
                    <a href="#components/table" className="text-[10px] text-secondary-500 hover:underline font-semibold">View All</a>
                  </div>

                  <div className="divide-y divide-border/60">
                    <div className="flex items-center justify-between py-2.5">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                          <ArrowDownLeft size={14} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold">Inbound Settlement</p>
                          <p className="text-[9px] text-muted-foreground">Bastheon Global Fund · Jun 25, 2026</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-500 tabular-nums">+$189,400.00</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center">
                          <ArrowUpRight size={14} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold">Outbound FX Remittance</p>
                          <p className="text-[9px] text-muted-foreground">SingCorp Logistics invoice · Jun 24, 2026</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-foreground tabular-nums">-$48,250.00</span>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center">
                          <ArrowUpRight size={14} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold">Supplier Settlement</p>
                          <p className="text-[9px] text-muted-foreground">AusTrade Trading Services · Jun 23, 2026</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-foreground tabular-nums">-$120,000.00</span>
                    </div>
                  </div>
                </div>

                {/* 4. Brand Variables Reference Card (col-span-5) */}
                <div className="md:col-span-5 bg-card border border-border/80 rounded-2xl p-6 shadow-xs hover:border-border transition duration-200 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="text-[10px] text-muted-foreground font-bold tracking-wider font-mono">BRAND CODES</div>
                    <h3 className="text-base font-bold text-primary dark:text-slate-100">Variables Quick Ref</h3>
                  </div>

                  {/* Mac Code Card (Reused from Quick Start but smaller) */}
                  <div className="relative rounded-xl overflow-hidden border border-border/80 bg-slate-950 dark:bg-slate-900/50 shadow-sm mt-3.5">
                    <div className="flex items-center justify-between px-3.5 py-1.8 bg-slate-900/70 dark:bg-slate-950/40 border-b border-white/5">
                      <span className="text-[9px] text-slate-400 font-mono">tokens.css</span>
                      <button 
                        onClick={() => handleCopy('#023e63 | #00bfb3', 'reference')}
                        className="text-slate-400 hover:text-white transition text-[9px] font-mono cursor-pointer"
                      >
                        {copiedToken === 'reference' ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                    <div className="p-3 font-mono text-[10px] leading-normal text-slate-200 space-y-1">
                      <div><span className="text-sky-300">--primary</span>: #023e63;</div>
                      <div><span className="text-sky-300">--secondary</span>: #00bfb3;</div>
                      <div><span className="text-sky-300">--font</span>: 'Inter';</div>
                    </div>
                  </div>

                  <a 
                    href="#foundations/colors" 
                    className="w-full border border-border hover:bg-muted text-foreground text-center py-2 rounded-lg text-xs font-semibold shadow-2xs mt-4 block transition cursor-pointer"
                  >
                    Inspect All Foundations
                  </a>
                </div>
              </section>

              {/* Page navigation block at the bottom */}
              <div className="pt-8 border-t border-border/60 flex justify-end mt-12">
                <a 
                  href="#principles" 
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    Design Principles <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          )}

          {currentPath === 'principles' && (
            <div className="space-y-8 max-w-4xl">
              <section className="space-y-3">
                <h1 id="brand-principles" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100">
                  Core Design Principles
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  These core tenets guide the H&H design decisions, helping us construct interface architectures that feel premium, clean, and highly secure.
                </p>
              </section>

              <hr className="border-border" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {/* Principle 1 */}
                <div className="bg-card border border-border rounded-xl p-5 shadow-xs space-y-3" id="trust">
                  <div className="w-10 h-10 rounded-lg bg-secondary-500/10 dark:bg-secondary-500/15 text-secondary-500 flex items-center justify-center">
                    <Shield size={20} />
                  </div>
                  <h3 className="font-bold text-base text-secondary-500">1. Trust & Stability</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Our users entrust us with their financial assets. We build trust by utilizing stable layouts, precise alignment, strong typographic weights, and our authoritative deep Navy blue color. Consistency is key to establishing security.
                  </p>
                </div>

                {/* Principle 2 */}
                <div className="bg-card border border-border rounded-xl p-5 shadow-xs space-y-3" id="clarity">
                  <div className="w-10 h-10 rounded-lg bg-secondary-500/10 dark:bg-secondary-500/15 text-secondary-500 flex items-center justify-center">
                    <Compass size={20} />
                  </div>
                  <h3 className="font-bold text-base text-secondary-500">2. Turquoise/Teal Clarity</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We use our secondary Teal color purposefully to signify primary action states, notifications, success indicators, and interactive points. This creates a high visual contrast against our dark blue assets, steering user attention.
                  </p>
                </div>

                {/* Principle 3 */}
                <div className="bg-card border border-border rounded-xl p-5 shadow-xs space-y-3" id="spacing">
                  <div className="w-10 h-10 rounded-lg bg-secondary-500/10 dark:bg-secondary-500/15 text-secondary-500 flex items-center justify-center">
                    <LayoutGrid size={20} />
                  </div>
                  <h3 className="font-bold text-base text-secondary-500">3. Generous Space & Confidence</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Financial dashboards can quickly become overwhelming. We solve this by employing a rigorous grid system and generous spacing tokens. Giving metrics room to breathe projects sophistication and calm control.
                  </p>
                </div>

                {/* Principle 4 */}
                <div className="bg-card border border-border rounded-xl p-5 shadow-xs space-y-3" id="accessibility">
                  <div className="w-10 h-10 rounded-lg bg-secondary-500/10 dark:bg-secondary-500/15 text-secondary-500 flex items-center justify-center">
                    <Accessibility size={20} />
                  </div>
                  <h3 className="font-bold text-base text-secondary-500">4. Accessibility First</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    A financial service is for everyone. H&H mandates AA/AAA WCAG contrast levels across all text rendering, proper keyboard layouts, visible focus states, and scalable font dimensions using relative rem values.
                  </p>
                </div>
              </div>

              {/* Page navigation block at bottom */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a 
                  href="#introduction" 
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                     <ChevronLeft size={16} /> Introduction
                  </span>
                </a>

                <a 
                  href="#foundations/colors" 
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    Colors <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          )}

          {currentPath === 'foundations/colors' && (
            <div className="space-y-12 max-w-5xl mx-auto py-4">
              {/* Header */}
              <section className="space-y-3">
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">Foundations</div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100">
                  Colors
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-3xl animate-fade-in">
                  Our color system is built to convey trust, clarity, and safety. We employ a deep Navy brand primary, a highly legible secondary Teal for actions, and a supportive slate neutral scale. All combinations are optimized for contrast and accessibility.
                </p>
              </section>

              <hr className="border-border/60" />

              {/* Brand Palette Section */}
              <section id="brand-palette" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100" id="overview">Brand Palette</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    The core identity colors of Harbour & Hills. Navy represents safety and trust, while Teal is our key interactive driver.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Primary Navy Grid */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-primary dark:text-slate-200">Primary Navy (Brand Core)</h3>
                      <span className="text-[10px] text-muted-foreground font-mono">--color-primary-*</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-3">
                      {primaryNavyShades.map((shade) => (
                        <ColorCard key={shade.shade} shade={shade} prefix="primary" onCopy={handleCopy} />
                      ))}
                    </div>
                  </div>

                  {/* Secondary Teal Grid */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-secondary-500">Secondary Teal (Action Core)</h3>
                      <span className="text-[10px] text-muted-foreground font-mono">--color-secondary-*</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-3">
                      {secondaryTealShades.map((shade) => (
                        <ColorCard key={shade.shade} shade={shade} prefix="secondary" onCopy={handleCopy} />
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Neutral Palette Section */}
              <section id="neutral-palette" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Neutral Palette</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Used for backgrounds, borders, cards, text scales, and secondary elements.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Slate Neutrals</h3>
                    <span className="text-[10px] text-muted-foreground font-mono">--color-slate-* / tailwind defaults</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-11 gap-3">
                    {neutralShades.map((shade) => (
                      <ColorCard key={shade.shade} shade={shade} prefix="slate" onCopy={handleCopy} />
                    ))}
                  </div>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Semantic Palette Section */}
              <section id="semantic-palette" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Semantic Palette</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Functional colors representing specific states: success (green), warning (amber), destructive (red), and information (blue).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Success & Info */}
                  <div className="space-y-6">
                    {/* Success (Green) */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-500">Success</h3>
                      <div className="grid grid-cols-5 gap-2">
                        {successShades.map((shade) => (
                          <ColorCard key={shade.shade} shade={shade} prefix="success" onCopy={handleCopy} />
                        ))}
                      </div>
                    </div>

                    {/* Info (Blue) */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-blue-500">Information</h3>
                      <div className="grid grid-cols-5 gap-2">
                        {infoShades.map((shade) => (
                          <ColorCard key={shade.shade} shade={shade} prefix="info" onCopy={handleCopy} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Warning & Destructive */}
                  <div className="space-y-6">
                    {/* Warning (Amber) */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500">Warning</h3>
                      <div className="grid grid-cols-5 gap-2">
                        {warningShades.map((shade) => (
                          <ColorCard key={shade.shade} shade={shade} prefix="warning" onCopy={handleCopy} />
                        ))}
                      </div>
                    </div>

                    {/* Destructive (Red) */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-rose-500">Destructive</h3>
                      <div className="grid grid-cols-5 gap-2">
                        {destructiveShades.map((shade) => (
                          <ColorCard key={shade.shade} shade={shade} prefix="destructive" onCopy={handleCopy} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Accessibility & Contrast Tester Section */}
              <section id="accessibility-tester" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Contrast & Accessibility Tester</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Choose from preset brand colors or input custom hex values to check contrast ratios and ensure your layouts satisfy WCAG AA and AAA requirements.
                  </p>
                </div>

                {/* Tester Widget Card */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Controls (col-span-5) */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Background Picker */}
                    <div className="space-y-2.5">
                      <label className="text-xs font-bold tracking-wide text-foreground block">Background Color</label>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-8 h-8 rounded-lg border border-border shadow-xs shrink-0" 
                          style={{ backgroundColor: contrastBg }} 
                        />
                        <input 
                          type="text" 
                          value={customBgInput}
                          onChange={(e) => handleBgInputChange(e.target.value)}
                          className="flex-1 text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-mono text-foreground"
                          placeholder="#023E63"
                        />
                      </div>
                      
                      {/* Presets */}
                      <div className="space-y-1">
                        <span className="text-[10px] text-muted-foreground font-semibold">Presets</span>
                        <div className="flex flex-wrap gap-1.5">
                          {bgPresets.map(preset => (
                            <button
                              key={preset.hex}
                              onClick={() => {
                                setContrastBg(preset.hex)
                                setCustomBgInput(preset.hex)
                              }}
                              className={`text-[10px] px-2 py-1 rounded border transition cursor-pointer font-medium
                                ${contrastBg.toLowerCase() === preset.hex.toLowerCase() 
                                  ? 'bg-primary/10 border-primary text-primary dark:bg-primary/20 dark:border-secondary dark:text-secondary-300' 
                                  : 'bg-card border-border hover:bg-muted text-muted-foreground'
                                }
                              `}
                            >
                              {preset.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Text Picker */}
                    <div className="space-y-2.5">
                      <label className="text-xs font-bold tracking-wide text-foreground block">Text Color</label>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-8 h-8 rounded-lg border border-border shadow-xs shrink-0" 
                          style={{ backgroundColor: contrastText }} 
                        />
                        <input 
                          type="text" 
                          value={customTextInput}
                          onChange={(e) => handleTextInputChange(e.target.value)}
                          className="flex-1 text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-mono text-foreground"
                          placeholder="#FFFFFF"
                        />
                      </div>

                      {/* Presets */}
                      <div className="space-y-1">
                        <span className="text-[10px] text-muted-foreground font-semibold">Presets</span>
                        <div className="flex flex-wrap gap-1.5">
                          {textPresets.map(preset => (
                            <button
                              key={preset.hex}
                              onClick={() => {
                                setContrastText(preset.hex)
                                setCustomTextInput(preset.hex)
                              }}
                              className={`text-[10px] px-2 py-1 rounded border transition cursor-pointer font-medium
                                ${contrastText.toLowerCase() === preset.hex.toLowerCase() 
                                  ? 'bg-primary/10 border-primary text-primary dark:bg-primary/20 dark:border-secondary dark:text-secondary-300' 
                                  : 'bg-card border-border hover:bg-muted text-muted-foreground'
                                }
                              `}
                            >
                              {preset.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Preview & Scorecard (col-span-7) */}
                  <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border/85 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                    {/* Rendered Preview */}
                    <div 
                      className="p-5 rounded-xl border border-border/60 flex-1 flex flex-col justify-center min-h-[140px] shadow-2xs transition-all duration-300"
                      style={{ backgroundColor: contrastBg, color: contrastText }}
                    >
                      <h4 className="text-lg font-bold tracking-tight mb-2">H&H Portfolio Dashboard</h4>
                      <p className="text-xs leading-relaxed opacity-90 font-light">
                        Accessibility means empowering every finance team and business partner. By maintaining strict design tokens, we ensure high visual contrast.
                      </p>
                    </div>

                    {/* Score Card */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                      <div className="sm:col-span-5 bg-muted/30 border border-border rounded-xl p-4 text-center">
                        <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Contrast Ratio</div>
                        <div className="text-3xl font-extrabold text-primary dark:text-secondary-300 tracking-tight tabular-nums">
                          {computedRatio.toFixed(2)} : 1
                        </div>
                      </div>

                      <div className="sm:col-span-7 grid grid-cols-2 gap-2 text-xs">
                        <div className={`p-2.5 rounded-lg flex items-center justify-between border font-semibold
                          ${computedRatio >= 4.5 ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400'}
                        `}>
                          <span>AA Normal</span>
                          <span className="flex items-center gap-0.5 text-[9px] font-bold">
                            {computedRatio >= 4.5 ? <Check size={11} /> : <X size={11} />}
                            {computedRatio >= 4.5 ? 'PASS' : 'FAIL'}
                          </span>
                        </div>

                        <div className={`p-2.5 rounded-lg flex items-center justify-between border font-semibold
                          ${computedRatio >= 3.0 ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400'}
                        `}>
                          <span>AA Large</span>
                          <span className="flex items-center gap-0.5 text-[9px] font-bold">
                            {computedRatio >= 3.0 ? <Check size={11} /> : <X size={11} />}
                            {computedRatio >= 3.0 ? 'PASS' : 'FAIL'}
                          </span>
                        </div>

                        <div className={`p-2.5 rounded-lg flex items-center justify-between border font-semibold
                          ${computedRatio >= 7.0 ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400'}
                        `}>
                          <span>AAA Normal</span>
                          <span className="flex items-center gap-0.5 text-[9px] font-bold">
                            {computedRatio >= 7.0 ? <Check size={11} /> : <X size={11} />}
                            {computedRatio >= 7.0 ? 'PASS' : 'FAIL'}
                          </span>
                        </div>

                        <div className={`p-2.5 rounded-lg flex items-center justify-between border font-semibold
                          ${computedRatio >= 4.5 ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400'}
                        `}>
                          <span>AAA Large</span>
                          <span className="flex items-center gap-0.5 text-[9px] font-bold">
                            {computedRatio >= 4.5 ? <Check size={11} /> : <X size={11} />}
                            {computedRatio >= 4.5 ? 'PASS' : 'FAIL'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Navigation Block */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a 
                  href="#principles" 
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    <ChevronLeft size={16} /> Design Principles
                  </span>
                </a>

                <a 
                  href="#foundations/typography" 
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    Typography <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          )}

          {currentPath === 'foundations/typography' && (
            <div className="space-y-12 max-w-5xl mx-auto py-4 animate-fade-in">
              {/* Header */}
              <section className="space-y-3">
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">Foundations</div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100">
                  Typography
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
                  Our typography system is anchored on **Inter**, a highly legible sans-serif typeface designed for user interfaces. We employ a responsive, structured hierarchy to present payment analytics and data elements with maximum clarity.
                </p>
              </section>

              <hr className="border-border/60" />

              {/* Font Family Details */}
              <section id="font-family" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Font Family</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Inter is imported globally and mapped to the default sans-serif font stack.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Font Spec Card */}
                  <div className="md:col-span-2 bg-card border border-border rounded-2xl p-6 shadow-xs flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="text-[10px] text-muted-foreground font-bold tracking-wider font-mono">SPECIFICATION</div>
                      <h3 className="text-4xl font-bold text-primary dark:text-slate-200 tracking-tight">Inter</h3>
                      <p className="text-xs text-muted-foreground font-light">
                        Designed by Rasmus Andersson, Inter features a tall x-height, aiding readability on small screens. It is optimal for financial grids, transaction lists, and complex numeric inputs.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 mt-6 bg-muted/20 border border-border/40 rounded-xl p-4 font-mono select-none overflow-x-auto">
                      <div className="flex items-center gap-4 min-w-[320px]">
                        <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider w-10 shrink-0">Caps</span>
                        <span className="text-sm sm:text-base font-semibold tracking-wider text-primary dark:text-secondary-300">
                          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                        </span>
                      </div>
                      <div className="flex items-center gap-4 border-t border-border/40 pt-3 min-w-[320px]">
                        <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider w-10 shrink-0">Lower</span>
                        <span className="text-sm sm:text-base font-normal tracking-wider text-foreground">
                          a b c d e f g h i j k l m n o p q r s t u v w x y z
                        </span>
                      </div>
                      <div className="flex items-center gap-4 border-t border-border/40 pt-3 min-w-[320px]">
                        <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider w-10 shrink-0">Num</span>
                        <span className="text-sm sm:text-base font-normal tracking-wider text-muted-foreground">
                          0 1 2 3 4 5 6 7 8 9
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Fallback Font Spec */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="text-[10px] text-muted-foreground font-bold tracking-wider font-mono">FALLBACK STACK</div>
                      <h3 className="text-sm font-bold text-foreground">System UI</h3>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed">
                        When Inter cannot load, the browser falls back automatically to standard system fonts to prevent flash of unstyled text (FOUT).
                      </p>
                    </div>
                    <div className="font-mono text-[10.5px] bg-muted/60 p-3 rounded-lg border border-border text-muted-foreground">
                      system-ui, -apple-system, sans-serif
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Typographic Scale */}
              <section id="type-scale" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Typographic Scale</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    A collection of size tokens configured to establish proper reading hierarchy and scanning speed.
                  </p>
                </div>

                <div className="border border-border bg-card rounded-2xl overflow-hidden shadow-xs divide-y divide-border/60">
                  {typographicScale.map((item) => (
                    <div key={item.id} className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center group/typo hover:bg-muted/10 transition-colors">
                      {/* Name and Token info */}
                      <div className="lg:col-span-3 space-y-1">
                        <div className="text-xs font-bold text-primary dark:text-slate-100">{item.name}</div>
                        <div className="text-[10px] text-muted-foreground font-mono">{item.sizeInfo}</div>
                      </div>

                      {/* Rendering Preview */}
                      <div className="lg:col-span-6 min-h-[44px] flex items-center">
                        <span className={`${item.twClass} truncate block text-foreground`} title={item.name}>
                          B2B payments reimagined.
                        </span>
                      </div>

                      {/* Description and Copy code */}
                      <div className="lg:col-span-3 flex items-center justify-between gap-4">
                        <p className="text-[11px] text-muted-foreground font-light leading-snug flex-1">
                          {item.description}
                        </p>
                        <button
                          onClick={() => handleCopy(item.twClass, `typo-${item.id}`)}
                          className="p-2 bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition shrink-0 cursor-pointer"
                          title="Copy Tailwind Classes"
                        >
                          <Copy size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Font Weights Scale */}
              <section id="weights" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Font Weights</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    We employ specific weight scales to separate interactive buttons, active headers, and paragraph contents.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {fontWeights.map((weight) => (
                    <div key={weight.weight} className="bg-card border border-border rounded-xl p-5 shadow-xs flex flex-col justify-between group/weight hover:border-slate-300 dark:hover:border-slate-700 transition">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-foreground">{weight.name}</span>
                          <span className="text-[10px] text-muted-foreground font-mono">{weight.weight} · .{weight.twClass}</span>
                        </div>
                        <p className={`text-2xl text-primary dark:text-slate-200 mt-2 tracking-tight overflow-hidden text-ellipsis whitespace-nowrap ${weight.twClass}`}>
                          Harbour & Hills
                        </p>
                      </div>
                      <div className="border-t border-border/40 pt-3 mt-4 flex items-center justify-between">
                        <span className="text-[10px] text-muted-foreground font-light">{weight.usage}</span>
                        <button
                          onClick={() => handleCopy(weight.twClass, `weight-${weight.name}`)}
                          className="p-1 hover:bg-muted text-muted-foreground hover:text-foreground rounded transition cursor-pointer"
                          title="Copy Class"
                        >
                          <Copy size={11} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Interactive Playground */}
              <section id="playground" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Interactive Playground</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Type a custom string and tweak size, weight, line-height, letter-spacing, and brand color to see it render live and copy the exact classes.
                  </p>
                </div>

                {/* Playground Board */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Controls (col-span-5) */}
                  <div className="lg:col-span-5 space-y-5">
                    {/* Preview Text Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Preview Text</label>
                      <textarea
                        value={playgroundText}
                        onChange={(e) => setPlaygroundText(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary h-20 resize-none font-light leading-relaxed text-foreground"
                        placeholder="Type something here..."
                      />
                    </div>

                    {/* Font Size Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Size</label>
                      <select
                        value={playgroundSize}
                        onChange={(e) => setPlaygroundSize(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="text-xs">text-xs (12px / 0.75rem)</option>
                        <option value="text-sm">text-sm (14px / 0.875rem)</option>
                        <option value="text-base">text-base (16px / 1rem)</option>
                        <option value="text-lg">text-lg (18px / 1.125rem)</option>
                        <option value="text-xl">text-xl (20px / 1.25rem)</option>
                        <option value="text-2xl">text-2xl (24px / 1.5rem)</option>
                        <option value="text-3xl">text-3xl (30px / 1.875rem)</option>
                        <option value="text-4xl">text-4xl (36px / 2.25rem)</option>
                        <option value="text-5xl">text-5xl (48px / 3rem)</option>
                        <option value="text-6xl">text-6xl (64px / 4rem)</option>
                      </select>
                    </div>

                    {/* Weight Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Weight</label>
                      <select
                        value={playgroundWeight}
                        onChange={(e) => setPlaygroundWeight(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="font-light">font-light (300)</option>
                        <option value="font-normal">font-normal (400)</option>
                        <option value="font-medium">font-medium (500)</option>
                        <option value="font-semibold">font-semibold (600)</option>
                        <option value="font-bold">font-bold (700)</option>
                        <option value="font-extrabold">font-extrabold (800)</option>
                      </select>
                    </div>

                    {/* Line Height Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Line Height</label>
                      <select
                        value={playgroundLeading}
                        onChange={(e) => setPlaygroundLeading(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="leading-none">leading-none (1.0)</option>
                        <option value="leading-tight">leading-tight (1.25)</option>
                        <option value="leading-snug">leading-snug (1.375)</option>
                        <option value="leading-normal">leading-normal (1.5)</option>
                        <option value="leading-relaxed">leading-relaxed (1.625)</option>
                        <option value="leading-loose">leading-loose (2.0)</option>
                      </select>
                    </div>

                    {/* Letter Spacing Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Letter Spacing</label>
                      <select
                        value={playgroundTracking}
                        onChange={(e) => setPlaygroundTracking(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="tracking-tighter">tracking-tighter</option>
                        <option value="tracking-tight">tracking-tight</option>
                        <option value="tracking-normal">tracking-normal</option>
                        <option value="tracking-wide">tracking-wide</option>
                        <option value="tracking-wider">tracking-wider</option>
                        <option value="tracking-widest">tracking-widest</option>
                      </select>
                    </div>

                    {/* Color Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Color</label>
                      <select
                        value={playgroundColor}
                        onChange={(e) => setPlaygroundColor(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="text-primary">Primary Navy (text-primary)</option>
                        <option value="text-secondary-500">Secondary Teal (text-secondary-500)</option>
                        <option value="text-foreground">Slate Foreground (text-foreground)</option>
                        <option value="text-muted-foreground">Slate Muted (text-muted-foreground)</option>
                      </select>
                    </div>
                  </div>

                  {/* Rendering & Code Output (col-span-7) */}
                  <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border/85 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                    {/* Live Preview Container */}
                    <div className="bg-muted/20 border border-border/60 rounded-xl p-5 flex-1 flex items-center min-h-[180px] overflow-hidden break-words shadow-2xs">
                      <p className={`${playgroundSize} ${playgroundWeight} ${playgroundLeading} ${playgroundTracking} ${playgroundColor} w-full transition-all duration-150`}>
                        {playgroundText || ' '}
                      </p>
                    </div>

                    {/* Compiled Class output */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Generated Class List</label>
                      <div className="relative rounded-xl overflow-hidden border border-border/80 bg-slate-950 dark:bg-slate-900/50 shadow-sm flex items-center justify-between px-4 py-3">
                        <code className="text-[10.5px] font-mono text-sky-300 break-all select-all pr-12">
                          className="{`${playgroundSize} ${playgroundWeight} ${playgroundLeading} ${playgroundTracking} ${playgroundColor}`}"
                        </code>
                        <button
                          onClick={() => handleCopy(`${playgroundSize} ${playgroundWeight} ${playgroundLeading} ${playgroundTracking} ${playgroundColor}`, 'playground')}
                          className="absolute right-3.5 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-white rounded-lg p-2 transition cursor-pointer flex items-center justify-center"
                          title="Copy Class String"
                        >
                          <Copy size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Navigation Block */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a 
                  href="#foundations/colors" 
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    <ChevronLeft size={16} /> Colors
                  </span>
                </a>

                <a 
                  href="#foundations/spacing" 
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[4px] transition-transform duration-200 flex items-center gap-1.5">
                    Spacing & Grids <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          )}

          {currentPath === 'foundations/spacing' && (
            <div className="space-y-12 max-w-5xl mx-auto py-4 animate-fade-in">
              {/* Header */}
              <section className="space-y-3">
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">Foundations</div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100">
                  Spacing & Grids
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
                  We use an **8px grid system** (with a 4px sub-grid for tight layouts) to govern all spatial dimensions, heights, paddings, margins, and layout alignments. This guarantees visual balance and mathematical rigor.
                </p>
              </section>

              <hr className="border-border/60" />

              {/* Spacing Scale Section */}
              <section id="spacing-scale" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Spacing Scale</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    A list of standard spacing tokens. Consistent use of these tokens prevents arbitrary alignments.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border/80 text-[10px] font-bold text-muted-foreground uppercase bg-muted/20">
                          <th className="py-3 px-4 w-24">Token</th>
                          <th className="py-3 px-4 w-28">Rem / Px</th>
                          <th className="py-3 px-4">Visual Scale</th>
                          <th className="py-3 px-4 w-20 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/60 text-xs">
                        {spacingScale.map((item) => (
                          <tr key={item.token} className="hover:bg-muted/10 transition">
                            <td className="py-3.5 px-4 font-mono font-bold text-primary dark:text-slate-300">
                              {item.token}
                            </td>
                            <td className="py-3.5 px-4 font-mono text-muted-foreground">
                              {item.rem} <span className="text-[10px] text-slate-400">({item.px})</span>
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="h-6 w-full max-w-[280px] bg-muted/40 rounded-md flex items-center px-1 overflow-hidden">
                                <div 
                                  className="h-4 bg-secondary-500 rounded transition-all duration-300 shrink-0" 
                                  style={{ width: item.barWidth }} 
                                />
                              </div>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <button
                                onClick={() => handleCopy(item.token, `spacing-${item.token}`)}
                                className="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded transition cursor-pointer"
                                title="Copy Token Number"
                              >
                                <Copy size={11} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Responsive Breakpoints Section */}
              <section id="breakpoints" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Responsive Breakpoints</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    We use standard Tailwind screen sizes to manage layouts fluidly across viewport widths.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {responsiveBreakpoints.map((bp) => (
                    <div key={bp.token} className="bg-card border border-border rounded-xl p-5 shadow-xs flex flex-col justify-between group hover:border-slate-300 dark:hover:border-slate-700 transition">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-primary dark:text-slate-200">{bp.token}</span>
                          <span className="text-[10px] text-muted-foreground font-mono">min-width: {bp.value}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed font-light mt-2">
                          {bp.usage}
                        </p>
                      </div>
                      <div className="border-t border-border/40 pt-3 mt-4 text-right">
                        <button
                          onClick={() => handleCopy(bp.value, `breakpoint-${bp.token}`)}
                          className="p-1 hover:bg-muted text-muted-foreground hover:text-foreground rounded transition cursor-pointer"
                          title="Copy Width"
                        >
                          <Copy size={11} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Grid Layout System Sandbox Section */}
              <section id="grid-system" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Grid Layout System</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Preview different column splits and gaps using our responsive 12-column layout grid sandbox.
                  </p>
                </div>

                {/* Sandbox Widget */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Controls (col-span-4) */}
                  <div className="lg:col-span-4 space-y-5">
                    {/* Columns Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Columns</label>
                      <select
                        value={gridCols}
                        onChange={(e) => setGridCols(Number(e.target.value))}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="1">1 Column</option>
                        <option value="2">2 Columns</option>
                        <option value="3">3 Columns</option>
                        <option value="4">4 Columns</option>
                        <option value="6">6 Columns</option>
                        <option value="12">12 Columns</option>
                      </select>
                    </div>

                    {/* Gap Selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Gap Spacing</label>
                      <select
                        value={gridGap}
                        onChange={(e) => setGridGap(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="gap-2">gap-2 (8px)</option>
                        <option value="gap-4">gap-4 (16px)</option>
                        <option value="gap-6">gap-6 (24px)</option>
                        <option value="gap-8">gap-8 (32px)</option>
                      </select>
                    </div>
                  </div>

                  {/* Rendering & Code Output (col-span-8) */}
                  <div className="lg:col-span-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border/85 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                    {/* Live Grid preview */}
                    <div className="bg-muted/15 border border-border/60 rounded-xl p-4 flex items-center justify-center min-h-[160px] shadow-2xs">
                      <div 
                        className="grid w-full transition-all duration-300"
                        style={{
                          gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
                          gap: gridGap === 'gap-2' ? '8px' : gridGap === 'gap-4' ? '16px' : gridGap === 'gap-6' ? '24px' : '32px'
                        }}
                      >
                        {Array.from({ length: Math.min(12, gridCols * 2) }).map((_, idx) => (
                          <div 
                            key={idx} 
                            className="bg-primary/10 border border-primary/20 dark:bg-primary/20 dark:border-secondary/20 rounded-lg py-4 px-2 text-center text-[10px] font-bold text-primary dark:text-secondary-300 font-mono truncate"
                          >
                            Col {idx + 1}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Class output */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">JSX Implementation</label>
                      <div className="relative rounded-xl overflow-hidden border border-border/80 bg-slate-950 dark:bg-slate-900/50 shadow-sm flex items-center justify-between px-4 py-3">
                        <code className="text-[10.5px] font-mono text-sky-300 break-all select-all pr-12">
                          {`<div className="grid grid-cols-${gridCols} ${gridGap}">\n  {/* Columns content */}\n</div>`}
                        </code>
                        <button
                          onClick={() => handleCopy(`<div className="grid grid-cols-${gridCols} ${gridGap}">\n  {/* Columns content */}\n</div>`, 'grid-code')}
                          className="absolute right-3.5 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-white rounded-lg p-2 transition cursor-pointer"
                          title="Copy JSX String"
                        >
                          <Copy size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Navigation Block */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a 
                  href="#foundations/typography" 
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    <ChevronLeft size={16} /> Typography
                  </span>
                </a>

                <a 
                  href="#foundations/borders" 
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[4px] transition-transform duration-200 flex items-center gap-1.5">
                    Borders & Shadows <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          )}

          {currentPath === 'foundations/borders' && (
            <div className="space-y-12 max-w-5xl mx-auto py-4 animate-fade-in">
              {/* Header */}
              <section className="space-y-3">
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">Foundations</div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100">
                  Borders & Shadows
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
                  We create depth and structure in our interface using layered box shadows and concentric border radii. Rather than harsh black dividers, H&H uses low-opacity borders and shadows that blend into background canvas layers.
                </p>
              </section>

              <hr className="border-border/60" />

              {/* Radius Scale Section */}
              <section id="radius-scale" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Border Radius Scale</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    A list of standard border-radius tokens. Radii should be concentric when elements are nested.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-hnh-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border/80 text-[10px] font-bold text-muted-foreground uppercase bg-muted/20">
                          <th className="py-3 px-4 w-28">Token</th>
                          <th className="py-3 px-4 w-24">Value</th>
                          <th className="py-3 px-4">Usage & Context</th>
                          <th className="py-3 px-4 w-32">Visual Specimen</th>
                          <th className="py-3 px-4 w-16 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/60 text-xs">
                        {radiusScale.map((item) => (
                          <tr key={item.token} className="hover:bg-muted/10 transition">
                            <td className="py-3.5 px-4 font-mono font-bold text-primary dark:text-slate-300">
                              {item.token}
                            </td>
                            <td className="py-3.5 px-4 font-mono text-muted-foreground">
                              {item.value}
                            </td>
                            <td className="py-3.5 px-4 font-light text-muted-foreground leading-relaxed">
                              {item.usage}
                            </td>
                            <td className="py-3.5 px-4">
                              <div className={`h-9 w-20 bg-primary/10 border border-primary/20 dark:bg-primary/20 dark:border-secondary/20 flex items-center justify-center text-[10px] font-bold font-mono text-primary dark:text-secondary-300 ${item.twClass}`}>
                                Preview
                              </div>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <button
                                onClick={() => handleCopy(item.token, `radius-${item.token}`)}
                                className="p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground rounded transition cursor-pointer"
                                title="Copy Tailwind Class"
                              >
                                <Copy size={11} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Shadows Scale Section */}
              <section id="shadows-scale" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Elevation Shadows</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    H&H uses multi-layered, soft shadows instead of flat border strokes to lift interactive items. In dark mode, shadows disappear, and we transition to subtle accent borders.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {shadowScale.map((item) => (
                    <div 
                      key={item.token} 
                      className={`bg-card border border-border/40 rounded-xl p-4 flex flex-col justify-between min-h-[140px] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 ${item.twClass}`}
                    >
                      <div className="space-y-1">
                        <div className="text-[10px] font-bold text-primary dark:text-slate-300 font-mono">{item.token}</div>
                        <p className="text-[9.5px] text-muted-foreground leading-snug font-light">{item.description}</p>
                      </div>
                      <div className="border-t border-border/40 pt-2.5 mt-3 flex items-center justify-between">
                        <span className="text-[8.5px] font-mono text-slate-400 truncate max-w-[100px]">{item.cssVar}</span>
                        <button
                          onClick={() => handleCopy(item.token, `shadow-${item.token}`)}
                          className="p-1 hover:bg-muted text-muted-foreground hover:text-foreground rounded transition cursor-pointer"
                          title="Copy Shadow Utility"
                        >
                          <Copy size={10} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Interactive Composer Section */}
              <section id="composer" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Interactive Composer</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Compose card styles dynamically. Adjust the border, corner radius, elevation shadow, and background fill to view real-time rendering.
                  </p>
                </div>

                {/* Composer Widget */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Controls (col-span-5) */}
                  <div className="lg:col-span-5 space-y-4">
                    {/* Radius selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Corner Radius</label>
                      <select
                        value={composerRadius}
                        onChange={(e) => setComposerRadius(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="rounded-none">rounded-none (0px)</option>
                        <option value="rounded-xs">rounded-xs (2px)</option>
                        <option value="rounded-sm">rounded-sm (4px)</option>
                        <option value="rounded-md">rounded-md (6px)</option>
                        <option value="rounded-lg">rounded-lg (8px)</option>
                        <option value="rounded-xl">rounded-xl (12px)</option>
                        <option value="rounded-2xl">rounded-2xl (16px)</option>
                        <option value="rounded-3xl">rounded-3xl (24px)</option>
                        <option value="rounded-full">rounded-full (Pill)</option>
                      </select>
                    </div>

                    {/* Shadow selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Elevation Shadow</label>
                      <select
                        value={composerShadow}
                        onChange={(e) => setComposerShadow(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="shadow-none">shadow-none</option>
                        <option value="shadow-hnh-sm">shadow-hnh-sm (Extra Subtle)</option>
                        <option value="shadow-hnh">shadow-hnh (Default Card)</option>
                        <option value="shadow-hnh-md">shadow-hnh-md (Select/Hover)</option>
                        <option value="shadow-hnh-lg">shadow-hnh-lg (Dialog/Modal)</option>
                        <option value="shadow-hnh-xl">shadow-hnh-xl (Mega Panel)</option>
                      </select>
                    </div>

                    {/* Border selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Borders</label>
                      <select
                        value={composerBorder}
                        onChange={(e) => setComposerBorder(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="border-0">No Border (border-0)</option>
                        <option value="border border-border/80">Standard Muted (border border-border/80)</option>
                        <option value="border border-primary-500/30">Primary Accent Border</option>
                        <option value="border-2 border-primary-500">Thick Brand Border (border-2)</option>
                      </select>
                    </div>

                    {/* Background selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Background Fill</label>
                      <select
                        value={composerBg}
                        onChange={(e) => setComposerBg(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="bg-card">Card Surface (bg-card)</option>
                        <option value="bg-muted/30">Muted Inset (bg-muted/30)</option>
                        <option value="bg-primary/5">Primary Tint (bg-primary/5)</option>
                        <option value="bg-secondary/5">Secondary Tint (bg-secondary/5)</option>
                      </select>
                    </div>
                  </div>

                  {/* Rendering & Code Output (col-span-7) */}
                  <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border/85 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                    {/* Live Preview Container */}
                    <div className="bg-muted/10 border border-border/40 rounded-2xl p-6 flex items-center justify-center min-h-[190px] shadow-inner">
                      <div className={`p-5 w-full max-w-sm transition-all duration-200 ${composerRadius} ${composerShadow} ${composerBorder} ${composerBg}`}>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Settlement Account</span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                        </div>
                        <h4 className="text-xl font-bold tracking-tight text-foreground">$125,000.00</h4>
                        <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground border-t border-border/40 pt-3">
                          <span>Vault Vault-01</span>
                          <span>HNH Vault Services</span>
                        </div>
                      </div>
                    </div>

                    {/* Compiled Code Output */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Generated JSX Class List</label>
                      <div className="relative rounded-xl overflow-hidden border border-border/80 bg-slate-950 dark:bg-slate-900/50 shadow-sm flex items-center justify-between px-4 py-3">
                        <code className="text-[10.5px] font-mono text-sky-300 break-all select-all pr-12">
                          {`className="${composerRadius} ${composerShadow} ${composerBorder} ${composerBg}"`}
                        </code>
                        <button
                          onClick={() => handleCopy(`className="${composerRadius} ${composerShadow} ${composerBorder} ${composerBg}"`, 'composer')}
                          className="absolute right-3.5 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-white rounded-lg p-2 transition cursor-pointer"
                          title="Copy JSX String"
                        >
                          <Copy size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Navigation Block */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a 
                  href="#foundations/spacing" 
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    <ChevronLeft size={16} /> Spacing & Grids
                  </span>
                </a>

                <a 
                  href="#components/button" 
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[4px] transition-transform duration-200 flex items-center gap-1.5">
                    Button <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          )}

          {currentPath === 'components/accordion' && (
            <div className="space-y-12 max-w-5xl mx-auto py-4 animate-fade-in">
              {/* Header */}
              <section className="space-y-3">
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">Components</div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100" id="overview">
                  Accordion
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
                  An accordion is a vertically stacked set of interactive headings that can be expanded or collapsed to reveal associated content sections. Designed for FAQ matrices, compact settings sections, and structured disclosure panels.
                </p>
                <div className="bg-accent/40 border border-border/80 rounded-xl p-4.5 text-xs text-muted-foreground space-y-2 mt-4 max-w-3xl">
                  <div className="font-bold text-foreground flex items-center gap-2">
                    <Accessibility size={14} className="text-secondary" />
                    Accessibility Contract (WCAG 2.1 AA)
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 pl-1">
                    <li>Headers are built using native HTML <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">button</code> tags to ensure screen reader focus.</li>
                    <li>Supports full keyboard tab traversal. Custom offset focus ring guarantees visibility against primary surfaces.</li>
                    <li>Headers reflect active layout state dynamically via <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">aria-expanded</code> and <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">aria-controls</code> declarations.</li>
                  </ul>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Specimens Section */}
              <section id="specimen" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Component Specimens</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Examine accordion layout varieties, expanded animations, and focus ring structures.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1: Bordered Accordion */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm space-y-5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Bordered Rows Layout</h3>
                    <div className="border-t border-border/80">
                      {/* Item 1 (Closed) */}
                      <div className="border-b border-border/80">
                        <button className="w-full py-3.5 flex justify-between items-center font-bold text-xs text-left outline-none focus-visible:shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border)] rounded-md transition duration-150">
                          <span className="text-slate-900 dark:text-white">Institutional Portfolio Strategy</span>
                          <ChevronDown size={15} className="text-muted-foreground" />
                        </button>
                      </div>
                      {/* Item 2 (Expanded) */}
                      <div className="border-b border-border/80">
                        <button className="w-full py-3.5 flex justify-between items-center font-bold text-xs text-left outline-none focus-visible:shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border)] rounded-md transition duration-150">
                          <span className="text-secondary-500">Asset Allocation Matrix</span>
                          <ChevronDown size={15} className="text-secondary-500 rotate-180 transition-transform duration-200" />
                        </button>
                        <div className="pb-4 px-1 text-xs text-muted-foreground leading-relaxed animate-fade-in">
                          Our algorithms leverage multi-factor regression models to balance yield target parameters against real-time global margin liquidity curves.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Card-Based Accordion */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm space-y-5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Card Boxes Layout</h3>
                    <div className="space-y-3">
                      {/* Item 1 (Closed) */}
                      <div className="bg-card/45 border border-border/80 rounded-xl overflow-hidden">
                        <button className="w-full py-3.5 px-4 flex justify-between items-center font-bold text-xs text-left outline-none focus-visible:shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border)] rounded-md transition duration-150">
                          <span className="text-slate-900 dark:text-white">Secured Custodial Vaults</span>
                          <ChevronDown size={15} className="text-muted-foreground" />
                        </button>
                      </div>
                      {/* Item 2 (Expanded) */}
                      <div className="bg-card/45 border border-border/80 rounded-xl overflow-hidden shadow-xs">
                        <button className="w-full py-3.5 px-4 flex justify-between items-center font-bold text-xs text-left outline-none focus-visible:shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border)] rounded-md transition duration-150">
                          <span className="text-secondary-500">Multi-Sig Cold Storage</span>
                          <ChevronDown size={15} className="text-secondary-500 rotate-180 transition-transform duration-200" />
                        </button>
                        <div className="pb-4 px-4 text-xs text-muted-foreground leading-relaxed border-t border-border/30 pt-3 animate-fade-in">
                          Cold storage structures are segmented across geographically discrete vaults, requiring a 3-of-5 threshold of cryptographic keys to initiate clearance pipelines.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grid 2: Accordion States */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm space-y-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">State Specimen Treatment</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Focused State */}
                    <div className="space-y-2">
                      <div className="text-[10px] uppercase font-bold text-muted-foreground">Focused Header</div>
                      <div className="border border-border/80 rounded-lg bg-card/10 overflow-hidden">
                        <button className="w-full py-3 px-3 flex justify-between items-center font-bold text-xs text-left outline-none shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border)]">
                          <span className="text-slate-900 dark:text-white">Focus Ring State</span>
                          <ChevronDown size={14} className="text-muted-foreground" />
                        </button>
                      </div>
                    </div>

                    {/* Disabled State */}
                    <div className="space-y-2">
                      <div className="text-[10px] uppercase font-bold text-muted-foreground">Disabled Header</div>
                      <div className="border border-border/40 rounded-lg bg-muted/20 opacity-40 overflow-hidden cursor-not-allowed">
                        <button disabled className="w-full py-3 px-3 flex justify-between items-center font-bold text-xs text-left text-muted-foreground outline-none cursor-not-allowed">
                          <span>Locked Security Protocol</span>
                          <ChevronDown size={14} className="text-muted-foreground" />
                        </button>
                      </div>
                    </div>

                    {/* Active Chevron State */}
                    <div className="space-y-2">
                      <div className="text-[10px] uppercase font-bold text-muted-foreground">Active Highlight</div>
                      <div className="border border-secondary/60 rounded-lg bg-secondary/5 overflow-hidden">
                        <button className="w-full py-3 px-3 flex justify-between items-center font-bold text-xs text-left outline-none">
                          <span className="text-secondary-500">Active / Open Item</span>
                          <ChevronDown size={14} className="text-secondary-500 rotate-180" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Interactive Playground */}
              <section id="playground" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Interactive Playground</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Toggle allowMultiple mode, configure sizing, and customize border layouts dynamically.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Controls */}
                  <div className="lg:col-span-4 bg-card border border-border rounded-2xl p-5 shadow-hnh-sm space-y-6 self-start">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-primary border-b border-border/40 pb-2">Customizer</h3>

                    {/* Accordion Layout style */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted-foreground">Visual Style</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setPlayAccordionVariant('bordered')}
                          className={`py-1.5 text-xs font-semibold rounded-lg border transition cursor-pointer ${
                            playAccordionVariant === 'bordered'
                              ? 'bg-secondary-500/15 text-secondary-500 border-secondary-500/50 shadow-xs'
                              : 'bg-card hover:bg-muted text-muted-foreground border-border/80'
                          }`}
                        >
                          Bordered Rows
                        </button>
                        <button
                          onClick={() => setPlayAccordionVariant('cards')}
                          className={`py-1.5 text-xs font-semibold rounded-lg border transition cursor-pointer ${
                            playAccordionVariant === 'cards'
                              ? 'bg-secondary-500/15 text-secondary-500 border-secondary-500/50 shadow-xs'
                              : 'bg-card hover:bg-muted text-muted-foreground border-border/80'
                          }`}
                        >
                          Card Boxes
                        </button>
                      </div>
                    </div>

                    {/* Sizing options */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted-foreground">Component Density</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['sm', 'md', 'lg'].map((sz) => (
                          <button
                            key={sz}
                            onClick={() => setPlayAccordionSize(sz as 'sm' | 'md' | 'lg')}
                            className={`py-1.5 text-xs font-semibold rounded-lg border transition uppercase cursor-pointer ${
                              playAccordionSize === sz
                                ? 'bg-secondary-500/15 text-secondary-500 border-secondary-500/50 shadow-xs'
                                : 'bg-card hover:bg-muted text-muted-foreground border-border/80'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* allowMultiple checkbox toggle */}
                    <div className="space-y-3 pt-2">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center shrink-0">
                          <input
                            type="checkbox"
                            checked={playAccordionAllowMultiple}
                            onChange={(e) => setPlayAccordionAllowMultiple(e.target.checked)}
                            className="appearance-none w-4 h-4 rounded border border-border/80 checked:bg-secondary checked:border-secondary outline-none transition cursor-pointer"
                          />
                          {playAccordionAllowMultiple && <Check size={10} className="absolute text-slate-900 font-extrabold stroke-[4]" />}
                        </div>
                        <span className="text-xs font-semibold text-foreground group-hover:text-primary dark:group-hover:text-secondary transition">Allow Multi-Expansion</span>
                      </label>

                      {/* disabledState check */}
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center shrink-0">
                          <input
                            type="checkbox"
                            checked={playAccordionDisabledItem}
                            onChange={(e) => {
                              setPlayAccordionDisabledItem(e.target.checked)
                              if (e.target.checked) {
                                setExpandedItems(prev => prev.filter(x => x !== 'item-3'))
                              }
                            }}
                            className="appearance-none w-4 h-4 rounded border border-border/80 checked:bg-secondary checked:border-secondary outline-none transition cursor-pointer"
                          />
                          {playAccordionDisabledItem && <Check size={10} className="absolute text-slate-900 font-extrabold stroke-[4]" />}
                        </div>
                        <span className="text-xs font-semibold text-foreground group-hover:text-primary dark:group-hover:text-secondary transition">Disable Third Item</span>
                      </label>
                    </div>
                  </div>

                  {/* Right Column: Live Preview & Code */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="bg-card border border-border rounded-2xl p-8 flex items-center justify-center min-h-[250px] shadow-hnh-sm relative">
                      <div className="absolute top-3 left-4 text-[9px] uppercase font-bold text-muted-foreground tracking-wider">Live Preview</div>

                      {/* Interactive Component Frame */}
                      <div className="w-full max-w-md">
                        {playAccordionVariant === 'bordered' ? (
                          <div className="border-t border-border/80 w-full">
                            {[
                              { id: 'item-1', title: 'Institutional Fund Settlement', content: 'Direct access to private market funds, structured credit instruments, and liquidity pool optimization protocols.' },
                              { id: 'item-2', title: 'Custodial Trust Protocols', content: 'Secured multi-signature cold storage vault integrations and compliant off-exchange clearing settlements.' },
                              { id: 'item-3', title: 'Global Regulatory Compliance', content: 'Automated KYC/AML vetting pipelines, cross-border jurisdiction logic, and smart contract audit certifications.' }
                            ].map((item, index) => {
                              const isOpen = expandedItems.includes(item.id);
                              const isDisabled = index === 2 && playAccordionDisabledItem;
                              const sizePadding = playAccordionSize === 'sm' ? 'py-2 px-3 text-[11px]' : playAccordionSize === 'lg' ? 'py-3.5 px-5 text-sm' : 'py-2.5 px-4 text-xs';

                              const handleTogglePlay = () => {
                                if (isDisabled) return;
                                if (playAccordionAllowMultiple) {
                                  setExpandedItems(prev =>
                                    prev.includes(item.id)
                                      ? prev.filter(id => id !== item.id)
                                      : [...prev, item.id]
                                  );
                                } else {
                                  setExpandedItems(prev =>
                                    prev.includes(item.id) ? [] : [item.id]
                                  );
                                }
                              };

                              return (
                                <div key={item.id} className="border-b border-border/80">
                                  <button
                                    onClick={handleTogglePlay}
                                    disabled={isDisabled}
                                    aria-expanded={isOpen}
                                    className={`w-full flex justify-between items-center ${sizePadding} font-bold text-left transition duration-150 rounded-md outline-none focus-visible:shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border)] disabled:opacity-40 disabled:cursor-not-allowed`}
                                  >
                                    <span className={isOpen ? 'text-secondary-500' : 'text-slate-900 dark:text-white'}>{item.title}</span>
                                    <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-secondary-500' : 'text-muted-foreground'}`} />
                                  </button>
                                  <AnimatePresence initial={false}>
                                    {isOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                      >
                                        <div className="pb-4 px-4 text-xs text-muted-foreground leading-relaxed">
                                          {item.content}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="space-y-3 w-full">
                            {[
                              { id: 'item-1', title: 'Institutional Fund Settlement', content: 'Direct access to private market funds, structured credit instruments, and liquidity pool optimization protocols.' },
                              { id: 'item-2', title: 'Custodial Trust Protocols', content: 'Secured multi-signature cold storage vault integrations and compliant off-exchange clearing settlements.' },
                              { id: 'item-3', title: 'Global Regulatory Compliance', content: 'Automated KYC/AML vetting pipelines, cross-border jurisdiction logic, and smart contract audit certifications.' }
                            ].map((item, index) => {
                              const isOpen = expandedItems.includes(item.id);
                              const isDisabled = index === 2 && playAccordionDisabledItem;
                              const sizePadding = playAccordionSize === 'sm' ? 'py-2 px-3 text-[11px]' : playAccordionSize === 'lg' ? 'py-3.5 px-5 text-sm' : 'py-2.5 px-4 text-xs';

                              const handleTogglePlay = () => {
                                if (isDisabled) return;
                                if (playAccordionAllowMultiple) {
                                  setExpandedItems(prev =>
                                    prev.includes(item.id)
                                      ? prev.filter(id => id !== item.id)
                                      : [...prev, item.id]
                                  );
                                } else {
                                  setExpandedItems(prev =>
                                    prev.includes(item.id) ? [] : [item.id]
                                  );
                                }
                              };

                              return (
                                <div key={item.id} className="bg-card/45 border border-border/80 rounded-xl overflow-hidden transition-all duration-200">
                                  <button
                                    onClick={handleTogglePlay}
                                    disabled={isDisabled}
                                    aria-expanded={isOpen}
                                    className={`w-full flex justify-between items-center ${sizePadding} font-bold text-left transition duration-150 outline-none focus-visible:shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border)] disabled:opacity-40 disabled:cursor-not-allowed`}
                                  >
                                    <span className={isOpen ? 'text-secondary-500' : 'text-slate-900 dark:text-white'}>{item.title}</span>
                                    <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-secondary-500' : 'text-muted-foreground'}`} />
                                  </button>
                                  <AnimatePresence initial={false}>
                                    {isOpen && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                      >
                                        <div className="pb-4 px-4 text-xs text-muted-foreground leading-relaxed border-t border-border/30 pt-3">
                                          {item.content}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Exporter Block */}
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                      <div className="border-b border-slate-800 bg-slate-900/60 px-4.5 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          <span>Accordion.tsx</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground font-bold tracking-wider uppercase">React / Motion</span>
                      </div>
                      <div className="p-4 relative group/code">
                        <pre className="text-xs font-mono text-slate-300 overflow-x-auto whitespace-pre leading-relaxed select-all">
                          <code>{getAccordionCode()}</code>
                        </pre>
                        <button
                          onClick={() => handleCopy(getAccordionCode(), 'accordion-code')}
                          className="absolute right-3.5 top-3.5 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-white rounded-lg p-2 transition cursor-pointer"
                          title="Copy Code"
                        >
                          <Copy size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Navigation Block */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a 
                  href="#components/card" 
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    <ChevronLeft size={16} /> Card
                  </span>
                </a>

                <a 
                  href="#components/alert" 
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[4px] transition-transform duration-200 flex items-center gap-1.5">
                    Alert <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          )}

          {['components/button', 'components/button-group'].includes(currentPath) && (
            <div className="space-y-12 max-w-5xl mx-auto py-4 animate-fade-in">
              {/* Header */}
              <section className="space-y-3">
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">Components</div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100" id="overview">
                  Button
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
                  Buttons are used to trigger actions, submit forms, or navigate workspaces. H&H buttons emphasize tactile feedback, visible focus rings, and proper contrast alignment for accessibility.
                </p>
              </section>

              <hr className="border-border/60" />

              {/* Specimens Section */}
              <section id="specimen" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Component Specimens</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Review all standard Button variations in their default and active states.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm space-y-8">
                  {/* Grid of Variants */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Variants</h3>
                    <div className="flex flex-wrap gap-4 items-center">
                      <div className="flex flex-col gap-1.5 items-center">
                        <button className="px-4.5 py-3 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-95 shadow-md active:scale-[0.98] transition cursor-pointer">
                          Primary Navy
                        </button>
                        <span className="text-[9px] text-muted-foreground font-mono">variant="primary"</span>
                      </div>

                      <div className="flex flex-col gap-1.5 items-center">
                        <button className="px-4.5 py-3 text-xs font-semibold rounded-lg bg-secondary text-secondary-foreground hover:opacity-95 shadow-sm active:scale-[0.98] transition cursor-pointer">
                          Secondary Teal
                        </button>
                        <span className="text-[9px] text-muted-foreground font-mono">variant="secondary"</span>
                      </div>

                      <div className="flex flex-col gap-1.5 items-center">
                        <button className="px-4.5 py-3 text-xs font-semibold rounded-lg border border-border bg-card text-foreground hover:bg-muted active:scale-[0.98] transition cursor-pointer">
                          Outline
                        </button>
                        <span className="text-[9px] text-muted-foreground font-mono">variant="outline"</span>
                      </div>

                      <div className="flex flex-col gap-1.5 items-center">
                        <button className="px-4.5 py-3 text-xs font-semibold rounded-lg bg-rose-500 text-white hover:bg-rose-600 shadow-sm active:scale-[0.98] transition cursor-pointer">
                          Destructive
                        </button>
                        <span className="text-[9px] text-muted-foreground font-mono">variant="destructive"</span>
                      </div>

                      <div className="flex flex-col gap-1.5 items-center">
                        <button className="px-4.5 py-3 text-xs font-semibold rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/65 active:scale-[0.98] transition cursor-pointer">
                          Ghost
                        </button>
                        <span className="text-[9px] text-muted-foreground font-mono">variant="ghost"</span>
                      </div>
                    </div>
                  </div>

                  {/* Sizing scale */}
                  <div className="space-y-4 pt-6 border-t border-border/40">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Sizing Scale</h3>
                    <div className="flex flex-wrap gap-4 items-end">
                      <div className="flex flex-col gap-1.5 items-center">
                        <button className="px-3.5 py-2.5 text-[11px] font-semibold rounded-md bg-primary text-primary-foreground hover:opacity-95 shadow-sm active:scale-[0.98] transition cursor-pointer">
                          Small Button
                        </button>
                        <span className="text-[9px] text-muted-foreground font-mono">size="sm"</span>
                      </div>

                      <div className="flex flex-col gap-1.5 items-center">
                        <button className="px-4.5 py-3 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-95 shadow-md active:scale-[0.98] transition cursor-pointer">
                          Medium Default
                        </button>
                        <span className="text-[9px] text-muted-foreground font-mono">size="md"</span>
                      </div>

                      <div className="flex flex-col gap-1.5 items-center">
                        <button className="px-5.5 py-3.5 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-95 shadow-md active:scale-[0.98] transition cursor-pointer">
                          Large Hero
                        </button>
                        <span className="text-[9px] text-muted-foreground font-mono">size="lg"</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive States */}
                  <div className="space-y-4 pt-6 border-t border-border/40">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Interactive States</h3>
                    <div className="flex flex-wrap gap-4 items-center">
                      <div className="flex flex-col gap-1.5 items-center">
                        <button className="px-4.5 py-3 text-xs font-semibold rounded-lg bg-primary text-primary-foreground cursor-default">
                          Default
                        </button>
                        <span className="text-[9px] text-muted-foreground font-mono">Default State</span>
                      </div>

                      <div className="flex flex-col gap-1.5 items-center">
                        <button className="px-4.5 py-3 text-xs font-semibold rounded-lg bg-primary/90 text-primary-foreground ring-2 ring-primary/30 cursor-default">
                          Hover Mimic
                        </button>
                        <span className="text-[9px] text-muted-foreground font-mono">:hover</span>
                      </div>

                      <div className="flex flex-col gap-1.5 items-center">
                        <button className="px-4.5 py-3 text-xs font-semibold rounded-lg bg-primary/95 text-primary-foreground scale-[0.98] cursor-default">
                          Active Mimic
                        </button>
                        <span className="text-[9px] text-muted-foreground font-mono">:active</span>
                      </div>

                      <div className="flex flex-col gap-1.5 items-center">
                        <button className="px-4.5 py-3 text-xs font-semibold rounded-lg bg-primary text-primary-foreground ring-2 ring-primary dark:ring-primary-200/40 ring-offset-2 ring-offset-background cursor-default outline-none">
                          Focused Mimic
                        </button>
                        <span className="text-[9px] text-muted-foreground font-mono">:focus-visible</span>
                      </div>

                      <div className="flex flex-col gap-1.5 items-center">
                        <button className="px-4.5 py-3 text-xs font-semibold rounded-lg bg-primary text-primary-foreground opacity-50 cursor-not-allowed" disabled>
                          Disabled State
                        </button>
                        <span className="text-[9px] text-muted-foreground font-mono">disabled</span>
                      </div>

                      <div className="flex flex-col gap-1.5 items-center">
                        <button className="px-4.5 py-3 text-xs font-semibold rounded-lg bg-primary text-primary-foreground opacity-90 cursor-default flex items-center gap-1.5" disabled>
                          <Loader2 size={13} className="animate-spin" />
                          Loading State
                        </button>
                        <span className="text-[9px] text-muted-foreground font-mono">loading</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Interactive Playground Section */}
              <section id="playground" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Interactive Playground</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Tweak button properties in real time to test layout behavior, accessibility focus rings, and view copyable JSX.
                  </p>
                </div>

                {/* Playground Widget */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Controls (col-span-5) */}
                  <div className="lg:col-span-5 space-y-4">
                    {/* Variant selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Button Variant</label>
                      <select
                        value={btnVariant}
                        onChange={(e) => setBtnVariant(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="primary">Primary (bg-primary)</option>
                        <option value="secondary">Secondary (bg-secondary)</option>
                        <option value="outline">Outline (border-border)</option>
                        <option value="destructive">Destructive (bg-rose-500)</option>
                        <option value="ghost">Ghost (text-muted-foreground)</option>
                      </select>
                    </div>

                    {/* Size selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Size</label>
                      <select
                        value={btnSize}
                        onChange={(e) => setBtnSize(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="sm">Small (sm)</option>
                        <option value="md">Medium Default (md)</option>
                        <option value="lg">Large Hero (lg)</option>
                      </select>
                    </div>

                    {/* Icon selector */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Icon Option</label>
                      <select
                        value={btnIcon}
                        onChange={(e) => setBtnIcon(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="none">No Icon</option>
                        <option value="left">Leading Icon (Wallet)</option>
                        <option value="right">Trailing Icon (ArrowRight)</option>
                      </select>
                    </div>

                    {/* Boolean Toggles */}
                    <div className="flex flex-col gap-3 pt-2">
                      <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer">
                        <input
                          type="checkbox"
                          checked={btnLoading}
                          onChange={(e) => setBtnLoading(e.target.checked)}
                          className="rounded border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                        />
                        Simulate Loading State
                      </label>

                      <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer">
                        <input
                          type="checkbox"
                          checked={btnDisabled}
                          onChange={(e) => setBtnDisabled(e.target.checked)}
                          className="rounded border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                        />
                        Disable Button
                      </label>
                    </div>
                  </div>

                  {/* Preview & Code (col-span-7) */}
                  <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border/85 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                    {/* Live Preview Container */}
                    <div className="bg-muted/10 border border-border/40 rounded-2xl p-6 flex items-center justify-center min-h-[190px]">
                      <button
                        disabled={btnDisabled || btnLoading}
                        className={`
                          flex items-center justify-center gap-2 select-none active:scale-[0.98] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                          ${btnSize === 'sm' ? 'px-3.5 py-2.5 text-[11px] rounded-md' : btnSize === 'lg' ? 'px-5.5 py-3.5 text-sm font-semibold rounded-xl' : 'px-4.5 py-3 text-xs font-semibold rounded-lg'}
                          ${btnVariant === 'secondary' ? 'bg-secondary text-secondary-foreground hover:bg-secondary/95 shadow-sm focus-visible:ring-secondary' : 
                            btnVariant === 'outline' ? 'border border-border bg-card text-foreground hover:bg-muted focus-visible:ring-primary dark:focus-visible:ring-primary-200/40' :
                            btnVariant === 'destructive' ? 'bg-rose-500 text-white hover:bg-rose-600 shadow-sm focus-visible:ring-rose-500' :
                            btnVariant === 'ghost' ? 'text-muted-foreground hover:text-foreground hover:bg-muted/65 focus-visible:ring-primary dark:focus-visible:ring-primary-200/40' :
                            'bg-primary text-primary-foreground hover:opacity-95 shadow-md focus-visible:ring-primary dark:focus-visible:ring-primary-200/40'
                          }
                          ${(btnDisabled || btnLoading) ? 'opacity-50 cursor-not-allowed pointer-events-none scale-100!' : ''}
                        `}
                      >
                        {btnLoading && <Loader2 size={btnSize === 'sm' ? 12 : btnSize === 'lg' ? 15 : 13} className="animate-spin" />}
                        {!btnLoading && btnIcon === 'left' && <Wallet size={btnSize === 'sm' ? 12 : btnSize === 'lg' ? 15 : 13} />}
                        <span>Confirm Portfolio Settlement</span>
                        {!btnLoading && btnIcon === 'right' && <ArrowRight size={btnSize === 'sm' ? 12 : btnSize === 'lg' ? 15 : 13} />}
                      </button>
                    </div>

                    {/* Compiled Code Output */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Generated JSX Component</label>
                      <div className="relative rounded-xl overflow-hidden border border-border/80 bg-slate-950 dark:bg-slate-900/50 shadow-sm flex items-center justify-between px-4 py-3">
                        <code className="text-[10.5px] font-mono text-sky-300 break-all select-all pr-12">
                          {`<Button\n  variant="${btnVariant}"\n  size="${btnSize}"${btnLoading ? '\n  loading' : ''}${btnDisabled ? '\n  disabled' : ''}${btnIcon !== 'none' ? `\n  icon={${btnIcon === 'left' ? '<Wallet />' : '<ArrowRight />'}` : ''}\n>\n  Confirm Portfolio Settlement\n</Button>`}
                        </code>
                        <button
                          onClick={() => handleCopy(`<Button\n  variant="${btnVariant}"\n  size="${btnSize}"${btnLoading ? '\n  loading' : ''}${btnDisabled ? '\n  disabled' : ''}${btnIcon !== 'none' ? `\n  icon={${btnIcon === 'left' ? '<Wallet />' : '<ArrowRight />'}` : ''}\n>\n  Confirm Portfolio Settlement\n</Button>`, 'button-code')}
                          className="absolute right-3.5 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-white rounded-lg p-2 transition cursor-pointer"
                          title="Copy JSX String"
                        >
                          <Copy size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Navigation Block */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a 
                  href="#foundations/borders" 
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    <ChevronLeft size={16} /> Borders & Shadows
                  </span>
                </a>

                <a 
                  href="#components/input" 
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[4px] transition-transform duration-200 flex items-center gap-1.5">
                    Input & Label <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          )}

          {['components/input', 'components/label', 'components/textarea', 'components/input-group'].includes(currentPath) && (
            <div className="space-y-12 max-w-5xl mx-auto py-4 animate-fade-in">
              {/* Header */}
              <section className="space-y-3">
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">Components</div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100" id="overview">
                  Input & Label
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
                  Inputs allow users to enter, edit, and search for structured data. Harbour & Hills forms prioritize clear labeling, accessibility (WCAG AA compliance), active focus indicators, and semantic error alignments.
                </p>
              </section>

              <hr className="border-border/60" />

              {/* Specimens Section */}
              <section id="specimen" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Component Specimens</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Examine standard input layouts, typography treatments, and interactive states.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1: Functional Specimens */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm space-y-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Functional Varieties</h3>
                    
                    {/* 1. Basic Text Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground block">
                        Account Holder Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alok Desai"
                        className="w-full text-xs bg-muted/30 dark:bg-slate-950/40 border border-border/80 hover:border-secondary/80 focus:ring-2 focus:ring-secondary focus:border-transparent focus:shadow-[0_0_10px_color-mix(in_srgb,var(--secondary)_35%,transparent)] rounded-md py-2.5 px-3.5 outline-none transition duration-200 text-foreground"
                      />
                      <span className="text-[10px] text-muted-foreground block">
                        Enter your legal name as it appears on your passport.
                      </span>
                    </div>

                    {/* 2. Password with Eye Icon */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground block">
                        Private API Secret Key
                      </label>
                      <div className="relative flex items-center bg-muted/30 dark:bg-slate-950/40 border border-border/80 hover:border-secondary/80 rounded-md focus-within:ring-2 focus-within:ring-secondary focus-within:border-transparent focus-within:shadow-[0_0_10px_color-mix(in_srgb,var(--secondary)_35%,transparent)] transition duration-200">
                        <input
                          type={inputPassShow ? 'text' : 'password'}
                          value="hnh_secret_alloc_9042851"
                          readOnly
                          className="w-full text-xs bg-transparent border-none py-2.5 pl-3.5 pr-10 outline-none text-foreground font-mono"
                        />
                        <button
                          type="button"
                          onClick={() => setInputPassShow(!inputPassShow)}
                          className="absolute right-3 text-muted-foreground hover:text-foreground cursor-pointer focus:outline-none"
                        >
                          {inputPassShow ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                      </div>
                    </div>

                    {/* 3. B2B Payment currency input with static labels */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground block">
                        Liquidity Funding Value
                      </label>
                      <div className="flex rounded-md bg-muted/30 dark:bg-slate-950/40 border border-border/80 hover:border-secondary/80 focus-within:ring-2 focus-within:ring-secondary focus-within:border-transparent focus-within:shadow-[0_0_10px_color-mix(in_srgb,var(--secondary)_35%,transparent)] transition duration-200 overflow-hidden">
                        <span className="inline-flex items-center px-3 bg-muted/60 dark:bg-slate-900 border-r border-border/80 text-xs text-muted-foreground select-none font-semibold font-mono">
                          $
                        </span>
                        <input
                          type="text"
                          placeholder="0.00"
                          className="flex-1 bg-transparent border-none py-2.5 px-3 outline-none text-xs text-foreground font-mono tabular-nums"
                        />
                        <div className="inline-flex items-center px-3 border-l border-border/80 bg-muted/65 dark:bg-slate-900 select-none">
                          <span className="text-[10px] text-foreground font-bold tracking-wider font-mono">USD</span>
                        </div>
                      </div>
                    </div>

                    {/* 4. Search input with leading search icon */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground block">
                        Search Global Equities
                      </label>
                      <div className="relative flex items-center bg-muted/30 dark:bg-slate-950/40 border border-border/80 hover:border-secondary/80 rounded-md focus-within:ring-2 focus-within:ring-secondary focus-within:border-transparent focus-within:shadow-[0_0_10px_color-mix(in_srgb,var(--secondary)_35%,transparent)] transition duration-200">
                        <span className="absolute left-3.5 text-muted-foreground">
                          <Search size={13} />
                        </span>
                        <input
                          type="text"
                          placeholder="Search ticker, ISIN, or sector..."
                          className="w-full text-xs bg-transparent border-none py-2.5 pl-9.5 pr-12 outline-none text-foreground"
                        />
                        <span className="absolute right-3 text-[9px] font-mono font-semibold text-muted-foreground/80 bg-muted px-1.5 py-0.5 rounded border border-border/40">
                          ⌘K
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Interactive States */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm space-y-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">State Treatments</h3>
                    
                    {/* Default State */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-semibold text-foreground block">Default State</label>
                        <span className="text-[9px] font-mono text-muted-foreground">Inactive</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Default state style"
                        className="w-full text-xs bg-muted/30 dark:bg-slate-950/40 border border-border/80 hover:border-secondary/80 rounded-md py-2.5 px-3.5 outline-none text-foreground"
                      />
                    </div>

                    {/* Hover State Mimic */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-semibold text-foreground block">Hover State</label>
                        <span className="text-[9px] font-mono text-muted-foreground">:hover</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Hover state style"
                        className="w-full text-xs bg-muted/45 dark:bg-slate-950/50 border border-secondary/80 rounded-md py-2.5 px-3.5 outline-none text-foreground cursor-pointer"
                      />
                    </div>

                    {/* Focus State Mimic */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-semibold text-foreground block">Focused State</label>
                        <span className="text-[9px] font-mono text-muted-foreground">:focus-within</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Focused state style"
                        className="w-full text-xs bg-muted/10 dark:bg-slate-950/20 border border-transparent ring-2 ring-secondary shadow-[0_0_10px_color-mix(in_srgb,var(--secondary)_35%,transparent)] rounded-md py-2.5 px-3.5 outline-none text-foreground"
                      />
                    </div>

                    {/* Disabled State */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-semibold text-muted-foreground block">Disabled State</label>
                        <span className="text-[9px] font-mono text-muted-foreground">disabled</span>
                      </div>
                      <input
                        type="text"
                        disabled
                        placeholder="Disabled state style"
                        className="w-full text-xs bg-muted/10 dark:bg-slate-900/10 border border-border/80 rounded-md py-2.5 px-3.5 outline-none text-muted-foreground cursor-not-allowed opacity-50"
                      />
                    </div>

                    {/* Error State */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-semibold text-red-500 dark:text-red-400 block">Invalid/Error State</label>
                        <span className="text-[9px] font-mono text-red-500 dark:text-red-400">error</span>
                      </div>
                      <div className="relative flex items-center bg-red-500/[0.03] dark:bg-red-500/[0.01] border border-rose-500/80 rounded-md focus-within:ring-2 focus-within:ring-rose-500/30 focus-within:border-rose-500 transition duration-200">
                        <input
                          type="text"
                          value="invalid_routing_code_value"
                          readOnly
                          className="w-full text-xs bg-transparent border-none py-2.5 pl-3.5 pr-10 outline-none text-foreground font-mono"
                        />
                        <span className="absolute right-3 text-red-500">
                          <AlertCircle size={14} />
                        </span>
                      </div>
                      <span className="text-[10px] text-red-500 font-semibold block flex items-center gap-1">
                        Please enter a valid 9-digit ABA routing transit number.
                      </span>
                    </div>

                  </div>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Interactive Playground Section */}
              <section id="playground" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Interactive Playground</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Customize input options dynamically to test responsiveness, focus alignment, icon placements, sizes, and copy code.
                  </p>
                </div>

                {/* Playground Grid */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Controls (col-span-5) */}
                  <div className="lg:col-span-5 space-y-4">
                    {/* Label Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Label Text</label>
                      <input
                        type="text"
                        value={playInputLabel}
                        onChange={(e) => setPlayInputLabel(e.target.value)}
                        placeholder="Input label"
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground"
                      />
                    </div>

                    {/* Placeholder Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Placeholder</label>
                      <input
                        type="text"
                        value={playInputPlaceholder}
                        onChange={(e) => setPlayInputPlaceholder(e.target.value)}
                        placeholder="Placeholder text"
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground"
                      />
                    </div>

                    {/* Helper Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Helper Text</label>
                      <input
                        type="text"
                        value={playInputHelper}
                        onChange={(e) => setPlayInputHelper(e.target.value)}
                        placeholder="Helper description"
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground"
                      />
                    </div>

                    {/* Size Select */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Input Size</label>
                      <select
                        value={playInputSize}
                        onChange={(e) => setPlayInputSize(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="sm">Small (sm)</option>
                        <option value="md">Medium Default (md)</option>
                        <option value="lg">Large (lg)</option>
                      </select>
                    </div>

                    {/* Left Icon Select */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Left Icon / Prefix</label>
                      <select
                        value={playInputLeftIcon}
                        onChange={(e) => setPlayInputLeftIcon(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="none">None</option>
                        <option value="search">Search Icon</option>
                        <option value="wallet">Wallet Icon (Financial)</option>
                        <option value="user">User Icon</option>
                      </select>
                    </div>

                    {/* Right Icon Select */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Right Icon / Action</label>
                      <select
                        value={playInputRightIcon}
                        onChange={(e) => setPlayInputRightIcon(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="none">None</option>
                        <option value="check">Checkmark (Success)</option>
                        <option value="alert">Alert Circle (Warning)</option>
                        <option value="loader">Spinner (Loading)</option>
                      </select>
                    </div>

                    {/* Boolean States */}
                    <div className="flex flex-col gap-3 pt-2">
                      <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer">
                        <input
                          type="checkbox"
                          checked={playInputDisabled}
                          onChange={(e) => setPlayInputDisabled(e.target.checked)}
                          className="rounded border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                        />
                        Simulate Disabled State
                      </label>

                      <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer">
                        <input
                          type="checkbox"
                          checked={playInputError}
                          onChange={(e) => setPlayInputError(e.target.checked)}
                          className="rounded border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                        />
                        Simulate Error/Invalid State
                      </label>
                    </div>
                  </div>

                  {/* Preview & Code (col-span-7) */}
                  <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border/85 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                    {/* Live Preview Container */}
                    <div className="bg-muted/10 border border-border/40 rounded-2xl p-6 flex flex-col justify-center min-h-[190px]">
                      <div className="space-y-1.5 w-full max-w-md mx-auto">
                        {playInputLabel && (
                          <label className={`block font-semibold ${
                            playInputDisabled ? 'text-muted-foreground/60' :
                            playInputError ? 'text-red-500 dark:text-red-400' : 'text-foreground/80'
                          } ${
                            playInputSize === 'sm' ? 'text-[11px]' :
                            playInputSize === 'lg' ? 'text-sm' : 'text-xs'
                          }`}>
                            {playInputLabel}
                          </label>
                        )}
                        <div className={`
                          relative flex items-center transition-all duration-200 border
                          ${playInputSize === 'sm' ? 'rounded-md' : playInputSize === 'lg' ? 'rounded-lg' : 'rounded-md'}
                          ${playInputDisabled ? 'bg-muted/10 dark:bg-slate-900/10 border-border/60 opacity-50 cursor-not-allowed' :
                            playInputError ? 'bg-red-500/[0.02] dark:bg-red-500/[0.01] border-rose-500/80 focus-within:ring-2 focus-within:ring-rose-500/30 focus-within:border-rose-500 focus-within:shadow-[0_0_10px_color-mix(in_srgb,var(--destructive)_35%,transparent)]' :
                            'bg-muted/30 dark:bg-slate-950/40 border-border/80 hover:border-secondary/80 focus-within:ring-2 focus-within:ring-secondary focus-within:border-transparent focus-within:bg-muted/15 focus-within:shadow-[0_0_10px_color-mix(in_srgb,var(--secondary)_35%,transparent)]'
                          }
                        `}>
                          {/* Left Icon Render */}
                          {playInputLeftIcon !== 'none' && (
                            <span className={`absolute left-3 text-muted-foreground flex items-center justify-center`}>
                              {playInputLeftIcon === 'search' && <Search size={playInputSize === 'sm' ? 12 : playInputSize === 'lg' ? 15 : 13} />}
                              {playInputLeftIcon === 'wallet' && <Wallet size={playInputSize === 'sm' ? 12 : playInputSize === 'lg' ? 15 : 13} />}
                              {playInputLeftIcon === 'user' && <User size={playInputSize === 'sm' ? 12 : playInputSize === 'lg' ? 15 : 13} />}
                            </span>
                          )}

                          {/* The Real Input */}
                          <input
                            type="text"
                            disabled={playInputDisabled}
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            placeholder={playInputPlaceholder}
                            className={`
                              w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/60
                              ${playInputSize === 'sm' ? 'py-2 px-3 text-[11px]' :
                                playInputSize === 'lg' ? 'py-3 px-4.5 text-sm' :
                                'py-2.5 px-3.5 text-xs'
                              }
                              ${playInputLeftIcon !== 'none' ? (playInputSize === 'sm' ? 'pl-8' : playInputSize === 'lg' ? 'pl-11' : 'pl-9') : ''}
                              ${playInputRightIcon !== 'none' ? (playInputSize === 'sm' ? 'pr-8' : playInputSize === 'lg' ? 'pr-11' : 'pr-9') : ''}
                              ${playInputDisabled ? 'cursor-not-allowed' : ''}
                            `}
                          />

                          {/* Right Icon Render */}
                          {playInputRightIcon !== 'none' && (
                            <span className="absolute right-3 flex items-center justify-center">
                              {playInputRightIcon === 'check' && <Check className="text-emerald-500" size={playInputSize === 'sm' ? 12 : playInputSize === 'lg' ? 15 : 13} />}
                              {playInputRightIcon === 'alert' && <AlertCircle className="text-amber-500" size={playInputSize === 'sm' ? 12 : playInputSize === 'lg' ? 15 : 13} />}
                              {playInputRightIcon === 'loader' && <Loader2 className="text-muted-foreground animate-spin" size={playInputSize === 'sm' ? 12 : playInputSize === 'lg' ? 15 : 13} />}
                            </span>
                          )}
                        </div>

                        {/* Helper and Error Message */}
                        {playInputError ? (
                          <span className={`text-red-500 dark:text-red-400 font-semibold block flex items-center gap-1 ${
                            playInputSize === 'sm' ? 'text-[9.5px]' : playInputSize === 'lg' ? 'text-xs' : 'text-[10px]'
                          }`}>
                            <AlertCircle size={playInputSize === 'sm' ? 10 : playInputSize === 'lg' ? 14 : 12} />
                            Please check your entry and try again.
                          </span>
                        ) : playInputHelper ? (
                          <span className={`text-muted-foreground block ${
                            playInputSize === 'sm' ? 'text-[9.5px]' : playInputSize === 'lg' ? 'text-xs' : 'text-[10px]'
                          }`}>
                            {playInputHelper}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    {/* Compiled Code Output */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Generated JSX Component</label>
                      <div className="relative rounded-xl overflow-hidden border border-border/80 bg-slate-950 dark:bg-slate-900/50 shadow-sm flex items-center justify-between px-4 py-3">
                        <code className="text-[10.5px] font-mono text-sky-300 break-all select-all pr-12">
                          {`<div className="space-y-1.5 w-full max-w-md">\n` +
                           (playInputLabel ? `  <Label htmlFor="input-field">${playInputLabel}</Label>\n` : '') +
                           `  <div className="relative flex items-center bg-muted/30 border border-border/80 hover:border-secondary/80 rounded-md focus-within:ring-2 ` + (playInputError ? 'focus-within:ring-rose-500/30 focus-within:border-rose-500 focus-within:shadow-[0_0_10px_rgba(244,63,94,0.35)]' : 'focus-within:ring-secondary focus-within:border-transparent focus-within:shadow-[0_0_10px_color-mix(in_srgb,var(--secondary)_35%,transparent)]') + `">\n` +
                           (playInputLeftIcon !== 'none' ? `    <span className="absolute left-3 text-muted-foreground"><${playInputLeftIcon.charAt(0).toUpperCase() + playInputLeftIcon.slice(1)} size={14} /></span>\n` : '') +
                           `    <input\n` +
                           `      id="input-field"\n` +
                           `      type="text"\n` +
                           (playInputPlaceholder ? `      placeholder="${playInputPlaceholder}"\n` : '') +
                           (playInputDisabled ? `      disabled\n` : '') +
                           `      className="w-full bg-transparent border-none py-2.5 ${playInputLeftIcon !== 'none' ? 'pl-9' : 'pl-3.5'} ${playInputRightIcon !== 'none' ? 'pr-9' : 'pr-3.5'} text-xs outline-none"\n` +
                           `    />\n` +
                           (playInputRightIcon !== 'none' ? `    <span className="absolute right-3"><${playInputRightIcon === 'check' ? 'Check' : playInputRightIcon === 'alert' ? 'AlertCircle' : 'Loader2'} size={14} /></span>\n` : '') +
                           `  </div>\n` +
                           (playInputError ? `  <span className="text-red-500 text-[10px] flex items-center gap-1"><AlertCircle size={12} /> Please check your entry.</span>\n` :
                            playInputHelper ? `  <span className="text-muted-foreground text-[10px]">${playInputHelper}</span>\n` : '') +
                           `</div>`}
                        </code>
                        <button
                          onClick={() => handleCopy(
                            `<div className="space-y-1.5 w-full max-w-md">\n` +
                            (playInputLabel ? `  <Label htmlFor="input-field">${playInputLabel}</Label>\n` : '') +
                            `  <div className="relative flex items-center bg-muted/30 border border-border/80 hover:border-secondary/80 rounded-md focus-within:ring-2 ` + (playInputError ? 'focus-within:ring-rose-500/30 focus-within:border-rose-500 focus-within:shadow-[0_0_10px_rgba(244,63,94,0.35)]' : 'focus-within:ring-secondary focus-within:border-transparent focus-within:shadow-[0_0_10px_color-mix(in_srgb,var(--secondary)_35%,transparent)]') + `">\n` +
                            (playInputLeftIcon !== 'none' ? `    <span className="absolute left-3 text-muted-foreground"><${playInputLeftIcon.charAt(0).toUpperCase() + playInputLeftIcon.slice(1)} size={14} /></span>\n` : '') +
                            `    <input\n` +
                            `      id="input-field"\n` +
                            `      type="text"\n` +
                            (playInputPlaceholder ? `      placeholder="${playInputPlaceholder}"\n` : '') +
                            (playInputDisabled ? `      disabled\n` : '') +
                            `      className="w-full bg-transparent border-none py-2.5 ${playInputLeftIcon !== 'none' ? 'pl-9' : 'pl-3.5'} ${playInputRightIcon !== 'none' ? 'pr-9' : 'pr-3.5'} text-xs outline-none"\n` +
                            `    />\n` +
                            (playInputRightIcon !== 'none' ? `    <span className="absolute right-3"><${playInputRightIcon === 'check' ? 'Check' : playInputRightIcon === 'alert' ? 'AlertCircle' : 'Loader2'} size={14} /></span>\n` : '') +
                            `  </div>\n` +
                            (playInputError ? `  <span className="text-red-500 text-[10px] flex items-center gap-1"><AlertCircle size={12} /> Please check your entry.</span>\n` :
                             playInputHelper ? `  <span className="text-muted-foreground text-[10px]">${playInputHelper}</span>\n` : '') +
                            `</div>`, 'input-code')}
                          className="absolute right-3.5 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-white rounded-lg p-2 transition cursor-pointer"
                          title="Copy JSX String"
                        >
                          <Copy size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Navigation Block */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a 
                  href="#components/button" 
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    <ChevronLeft size={16} /> Button
                  </span>
                </a>

                <a 
                  href="#components/checkbox" 
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[4px] transition-transform duration-200 flex items-center gap-1.5">
                    Checkbox & Radio <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          )}

          {['components/checkbox', 'components/radio-group'].includes(currentPath) && (
            <div className="space-y-12 max-w-5xl mx-auto py-4 animate-fade-in">
              {/* Header */}
              <section className="space-y-3">
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">Components</div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100" id="overview">
                  Checkbox & Radio
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
                  Checkboxes and radio buttons allow users to make binary choices or select options from a list. Our designs feature high-contrast states, clear focus cues, indeterminate support, and keyboard accessibility.
                </p>
              </section>

              <hr className="border-border/60" />

              {/* Specimens Section */}
              <section id="specimen" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Component Specimens</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Examine visual styling, checkmark scaling, alignment, and hover feedback states.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1: Checkbox Specimens */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm space-y-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Checkbox States</h3>

                    {/* Unchecked */}
                    <div className="flex items-start gap-2.5">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input
                          type="checkbox"
                          checked={false}
                          readOnly
                          className="peer appearance-none w-4 h-4 rounded border border-border/80 bg-muted/20 hover:border-secondary/80 focus:outline-none transition duration-150 cursor-pointer"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-foreground block">Default Unchecked</span>
                        <span className="text-[10px] text-muted-foreground block">Standard starting state.</span>
                      </div>
                    </div>

                    {/* Checked */}
                    <div className="flex items-start gap-2.5">
                      <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          checked={true}
                          readOnly
                          className="peer appearance-none w-4 h-4 rounded border border-transparent bg-secondary focus:outline-none transition duration-150 cursor-pointer"
                        />
                        <Check size={10} strokeWidth={3} className="absolute text-white pointer-events-none" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-foreground block">Active Checked</span>
                        <span className="text-[10px] text-muted-foreground block">Teal primary accent fill.</span>
                      </div>
                    </div>

                    {/* Indeterminate */}
                    <div className="flex items-start gap-2.5">
                      <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          checked={false}
                          readOnly
                          className="peer appearance-none w-4 h-4 rounded border border-transparent bg-secondary focus:outline-none transition duration-150 cursor-pointer"
                        />
                        <Minus size={10} strokeWidth={3} className="absolute text-white pointer-events-none" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-foreground block">Indeterminate</span>
                        <span className="text-[10px] text-muted-foreground block">Used for partial nested selection.</span>
                      </div>
                    </div>

                    {/* Focus State */}
                    <div className="flex items-start gap-2.5">
                      <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          checked={true}
                          readOnly
                          className="peer appearance-none w-4 h-4 rounded border border-transparent bg-secondary focus:outline-none shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border),_0_0_8px_rgba(100,116,139,0.15)] transition duration-150 cursor-pointer"
                        />
                        <Check size={10} strokeWidth={3} className="absolute text-white pointer-events-none" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-foreground block">Focused (Active)</span>
                        <span className="text-[10px] text-muted-foreground block">Features our signature outer glow ring.</span>
                      </div>
                    </div>

                    {/* Disabled Unchecked */}
                    <div className="flex items-start gap-2.5 opacity-50">
                      <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          disabled
                          className="appearance-none w-4 h-4 rounded border border-border/80 bg-muted/10 cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-muted-foreground block">Disabled Unchecked</span>
                        <span className="text-[10px] text-muted-foreground/80 block">Actions locked.</span>
                      </div>
                    </div>

                    {/* Disabled Checked */}
                    <div className="flex items-start gap-2.5 opacity-50">
                      <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                        <input
                          type="checkbox"
                          checked={true}
                          disabled
                          readOnly
                          className="peer appearance-none w-4 h-4 rounded border border-transparent bg-muted-foreground/30 cursor-not-allowed"
                        />
                        <Check size={10} strokeWidth={3} className="absolute text-white pointer-events-none" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-muted-foreground block">Disabled Checked</span>
                        <span className="text-[10px] text-muted-foreground/80 block">Checked state preserved but inactive.</span>
                      </div>
                    </div>

                    {/* Invalid / Error */}
                    <div className="flex items-start gap-2.5">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input
                          type="checkbox"
                          checked={false}
                          readOnly
                          className="appearance-none w-4 h-4 rounded border border-rose-500/80 bg-rose-500/[0.02] focus:outline-none transition duration-150 cursor-pointer"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-rose-500 dark:text-rose-400 block">Invalid / Error State</span>
                        <span className="text-[10px] text-rose-500 dark:text-rose-400 block">Required check verification warning.</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Radio Specimens */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm space-y-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Radio Button States</h3>

                    {/* Unselected */}
                    <div className="flex items-start gap-2.5">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input
                          type="radio"
                          checked={false}
                          readOnly
                          className="appearance-none w-4 h-4 rounded-full border border-border/80 bg-muted/20 hover:border-secondary/80 focus:outline-none transition duration-150 cursor-pointer"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-foreground block">Default Unselected</span>
                        <span className="text-[10px] text-muted-foreground block">Selectable item state.</span>
                      </div>
                    </div>

                    {/* Selected */}
                    <div className="flex items-start gap-2.5">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input
                          type="radio"
                          checked={true}
                          readOnly
                          className="appearance-none w-4 h-4 rounded-full border border-secondary bg-muted/20 focus:outline-none transition duration-150"
                        />
                        <div className="absolute w-2 h-2 rounded-full bg-secondary" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-foreground block">Active Selected</span>
                        <span className="text-[10px] text-muted-foreground block">Highlighted central indicator.</span>
                      </div>
                    </div>

                    {/* Focus State */}
                    <div className="flex items-start gap-2.5">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input
                          type="radio"
                          checked={true}
                          readOnly
                          className="appearance-none w-4 h-4 rounded-full border border-secondary bg-muted/20 focus:outline-none shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border),_0_0_8px_rgba(100,116,139,0.15)] transition duration-150"
                        />
                        <div className="absolute w-2 h-2 rounded-full bg-secondary" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-foreground block">Focused (Selected)</span>
                        <span className="text-[10px] text-muted-foreground block">Signature ring focus indicator.</span>
                      </div>
                    </div>

                    {/* Disabled Unselected */}
                    <div className="flex items-start gap-2.5 opacity-50">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input
                          type="radio"
                          disabled
                          className="appearance-none w-4 h-4 rounded-full border border-border/80 bg-muted/10 cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-muted-foreground block">Disabled Unselected</span>
                        <span className="text-[10px] text-muted-foreground/80 block">Selection locked.</span>
                      </div>
                    </div>

                    {/* Disabled Selected */}
                    <div className="flex items-start gap-2.5 opacity-50">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input
                          type="radio"
                          disabled
                          checked={true}
                          readOnly
                          className="appearance-none w-4 h-4 rounded-full border border-muted-foreground/40 bg-muted/10 cursor-not-allowed"
                        />
                        <div className="absolute w-2 h-2 rounded-full bg-muted-foreground/40" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-muted-foreground block">Disabled Selected</span>
                        <span className="text-[10px] text-muted-foreground/80 block">Preserved but interactive-locked.</span>
                      </div>
                    </div>

                    {/* Invalid / Error */}
                    <div className="flex items-start gap-2.5">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input
                          type="radio"
                          checked={false}
                          readOnly
                          className="appearance-none w-4 h-4 rounded-full border border-rose-500/80 bg-rose-500/[0.02] focus:outline-none transition duration-150 cursor-pointer"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-rose-500 dark:text-rose-400 block">Invalid / Error State</span>
                        <span className="text-[10px] text-rose-500 dark:text-rose-400 block">Highlights group choice validation error.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Interactive Playground Section */}
              <section id="playground" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Interactive Playground</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Toggle check options, modify text, and verify accessibility scaling of both elements.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {/* Playground 1: Checkbox */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Checkbox Controls (col-span-5) */}
                    <div className="lg:col-span-5 space-y-4">
                      <h3 className="text-sm font-bold text-primary dark:text-slate-200 border-b border-border/40 pb-2">Checkbox Settings</h3>

                      {/* Label Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground block">Checkbox Label</label>
                        <input
                          type="text"
                          value={playCheckLabel}
                          onChange={(e) => setPlayCheckLabel(e.target.value)}
                          className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground"
                        />
                      </div>

                      {/* Subtext Input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground block">Checkbox Helper Text</label>
                        <input
                          type="text"
                          value={playCheckSubtext}
                          onChange={(e) => setPlayCheckSubtext(e.target.value)}
                          className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground"
                        />
                      </div>

                      {/* Size Select */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground block">Checkbox Size</label>
                        <select
                          value={playCheckSize}
                          onChange={(e) => setPlayCheckSize(e.target.value)}
                          className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                        >
                          <option value="sm">Small (sm)</option>
                          <option value="md">Medium Default (md)</option>
                          <option value="lg">Large (lg)</option>
                        </select>
                      </div>

                      {/* Check State Select */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground block">Check State</label>
                        <select
                          value={playCheckState}
                          onChange={(e) => setPlayCheckState(e.target.value as 'checked' | 'unchecked' | 'indeterminate')}
                          className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                        >
                          <option value="unchecked">Unchecked</option>
                          <option value="checked">Checked</option>
                          <option value="indeterminate">Indeterminate</option>
                        </select>
                      </div>

                      {/* Toggles */}
                      <div className="flex flex-col gap-3 pt-2">
                        <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer">
                          <input
                            type="checkbox"
                            checked={playCheckDisabled}
                            onChange={(e) => setPlayCheckDisabled(e.target.checked)}
                            className="rounded border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                          />
                          Simulate Disabled State
                        </label>

                        <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer">
                          <input
                            type="checkbox"
                            checked={playCheckError}
                            onChange={(e) => setPlayCheckError(e.target.checked)}
                            className="rounded border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                          />
                          Simulate Error State
                        </label>
                      </div>
                    </div>

                    {/* Checkbox Live Preview & Code (col-span-7) */}
                    <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border/85 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                      <div className="bg-muted/10 border border-border/40 rounded-2xl p-6 flex flex-col justify-center min-h-[190px]">
                        <div className="w-full max-w-md mx-auto">
                          <label className={`flex items-start cursor-pointer select-none transition-all
                            ${playCheckSize === 'sm' ? 'gap-2' : playCheckSize === 'lg' ? 'gap-3.5' : 'gap-2.5'}
                            ${playCheckDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                          `}>
                            <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                              <input
                                type="checkbox"
                                disabled={playCheckDisabled}
                                checked={playCheckState === 'checked'}
                                ref={(el) => {
                                  if (el) {
                                    el.indeterminate = playCheckState === 'indeterminate';
                                  }
                                }}
                                onChange={() => {
                                  if (playCheckState === 'checked') {
                                    setPlayCheckState('unchecked');
                                  } else {
                                    setPlayCheckState('checked');
                                  }
                                }}
                                className={`
                                  peer appearance-none border transition-all duration-200 outline-none
                                  ${playCheckSize === 'sm' ? 'w-3.5 h-3.5 rounded' : playCheckSize === 'lg' ? 'w-5 h-5 rounded-md' : 'w-4 h-4 rounded'}
                                  ${playCheckDisabled ? 'bg-muted/10 border-border/60' :
                                    playCheckError ? 'border-rose-500 bg-rose-500/[0.02] focus:ring-2 focus:ring-rose-500/30' :
                                    'border-border/80 bg-muted/30 checked:bg-secondary checked:border-transparent hover:border-secondary/80 focus:ring-2 focus:ring-secondary/30'
                                  }
                                `}
                              />
                              {playCheckState === 'checked' && (
                                <Check 
                                  className="absolute text-white pointer-events-none" 
                                  size={playCheckSize === 'sm' ? 8 : playCheckSize === 'lg' ? 12 : 10} 
                                  strokeWidth={3} 
                                />
                              )}
                              {playCheckState === 'indeterminate' && (
                                <Minus 
                                  className="absolute text-white pointer-events-none" 
                                  size={playCheckSize === 'sm' ? 8 : playCheckSize === 'lg' ? 12 : 10} 
                                  strokeWidth={3} 
                                />
                              )}
                            </div>
                            <div className="flex flex-col">
                              {playCheckLabel && (
                                <span className={`font-semibold transition-colors
                                  ${playCheckSize === 'sm' ? 'text-[11px] leading-tight' : playCheckSize === 'lg' ? 'text-sm' : 'text-xs'}
                                  ${playCheckError && !playCheckDisabled ? 'text-rose-500 dark:text-rose-400' : 'text-foreground'}
                                `}>
                                  {playCheckLabel}
                                </span>
                              )}
                              {playCheckSubtext && (
                                <span className={`text-muted-foreground block font-light mt-0.5
                                  ${playCheckSize === 'sm' ? 'text-[9.5px]' : playCheckSize === 'lg' ? 'text-xs' : 'text-[10px]'}
                                `}>
                                  {playCheckSubtext}
                                </span>
                              )}
                            </div>
                          </label>
                        </div>
                      </div>

                      {/* Checkbox Code Output */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Generated JSX Component</label>
                        <div className="relative rounded-xl overflow-hidden border border-border/80 bg-slate-950 dark:bg-slate-900/50 shadow-sm flex items-center justify-between px-4 py-3">
                          <code className="text-[10.5px] font-mono text-sky-300 break-all select-all pr-12">
                            {`<label className="flex items-start gap-2.5 cursor-pointer">\n` +
                             `  <div className="relative flex items-center justify-center shrink-0 mt-0.5">\n` +
                             `    <input\n` +
                             `      type="checkbox"\n` +
                             (playCheckState === 'checked' ? `      checked\n` : '') +
                             (playCheckDisabled ? `      disabled\n` : '') +
                             `      className="appearance-none ${playCheckSize === 'sm' ? 'w-3.5 h-3.5' : playCheckSize === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} rounded border ${
                               playCheckError ? 'border-rose-500 bg-rose-500/[0.02]' : 'border-border/80 checked:bg-secondary checked:border-transparent'
                             } focus:ring-2 focus:ring-secondary/30 outline-none transition duration-150"\n` +
                             `    />\n` +
                             (playCheckState === 'checked' ? `    <Check size={10} className="absolute text-white" />\n` : '') +
                             (playCheckState === 'indeterminate' ? `    <Minus size={10} className="absolute text-white" />\n` : '') +
                             `  </div>\n` +
                             `  <div>\n` +
                             (playCheckLabel ? `    <span className="text-xs font-semibold text-foreground">${playCheckLabel}</span>\n` : '') +
                             (playCheckSubtext ? `    <span className="text-[10px] text-muted-foreground block">${playCheckSubtext}</span>\n` : '') +
                             `  </div>\n` +
                             `</label>`}
                          </code>
                          <button
                            onClick={() => handleCopy(
                              `<label className="flex items-start gap-2.5 cursor-pointer">\n` +
                              `  <div className="relative flex items-center justify-center shrink-0 mt-0.5">\n` +
                              `    <input\n` +
                              `      type="checkbox"\n` +
                              (playCheckState === 'checked' ? `      checked\n` : '') +
                              (playCheckDisabled ? `      disabled\n` : '') +
                              `      className="appearance-none ${playCheckSize === 'sm' ? 'w-3.5 h-3.5' : playCheckSize === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} rounded border ${
                                playCheckError ? 'border-rose-500 bg-rose-500/[0.02]' : 'border-border/80 checked:bg-secondary checked:border-transparent'
                              } focus:ring-2 focus:ring-secondary/30 outline-none transition duration-150"\n` +
                              `    />\n` +
                              (playCheckState === 'checked' ? `    <Check size={10} className="absolute text-white" />\n` : '') +
                              (playCheckState === 'indeterminate' ? `    <Minus size={10} className="absolute text-white" />\n` : '') +
                              `  </div>\n` +
                              `  <div>\n` +
                              (playCheckLabel ? `    <span className="text-xs font-semibold text-foreground">${playCheckLabel}</span>\n` : '') +
                              (playCheckSubtext ? `    <span className="text-[10px] text-muted-foreground block">${playCheckSubtext}</span>\n` : '') +
                              `  </div>\n` +
                              `</label>`, 'checkbox-code')}
                            className="absolute right-3.5 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-white rounded-lg p-2 transition cursor-pointer"
                          >
                            <Copy size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Playground 2: Radio Group */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Radio Controls (col-span-5) */}
                    <div className="lg:col-span-5 space-y-4">
                      <h3 className="text-sm font-bold text-primary dark:text-slate-200 border-b border-border/40 pb-2">Radio Group Settings</h3>

                      {/* Size Select */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground block">Radio Size</label>
                        <select
                          value={playRadioSize}
                          onChange={(e) => setPlayRadioSize(e.target.value)}
                          className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                        >
                          <option value="sm">Small (sm)</option>
                          <option value="md">Medium Default (md)</option>
                          <option value="lg">Large (lg)</option>
                        </select>
                      </div>

                      {/* Radio Selected Value */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-foreground block">Select Choice</label>
                        <div className="flex flex-col gap-2">
                          <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer">
                            <input
                              type="radio"
                              name="setting-radio-option"
                              checked={playRadioSelected === 'standard'}
                              onChange={() => setPlayRadioSelected('standard')}
                              className="rounded-full border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                            />
                            Option 1: Standard Settlement (T+2)
                          </label>
                          <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer">
                            <input
                              type="radio"
                              name="setting-radio-option"
                              checked={playRadioSelected === 'instant'}
                              onChange={() => setPlayRadioSelected('instant')}
                              className="rounded-full border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                            />
                            Option 2: Instant Settlement (Same Day)
                          </label>
                        </div>
                      </div>

                      {/* Toggles */}
                      <div className="flex flex-col gap-3 pt-2">
                        <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer">
                          <input
                            type="checkbox"
                            checked={playRadioDisabled}
                            onChange={(e) => setPlayRadioDisabled(e.target.checked)}
                            className="rounded border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                          />
                          Simulate Disabled State
                        </label>

                        <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer">
                          <input
                            type="checkbox"
                            checked={playRadioError}
                            onChange={(e) => setPlayRadioError(e.target.checked)}
                            className="rounded border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                          />
                          Simulate Error State
                        </label>
                      </div>
                    </div>

                    {/* Radio Live Preview & Code (col-span-7) */}
                    <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border/85 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                      <div className="bg-muted/10 border border-border/40 rounded-2xl p-6 flex flex-col justify-center min-h-[190px]">
                        <div className="w-full max-w-md mx-auto space-y-4">
                          {/* Option 1 Option */}
                          <label className={`flex items-start cursor-pointer select-none transition-all
                            ${playRadioSize === 'sm' ? 'gap-2' : playRadioSize === 'lg' ? 'gap-3.5' : 'gap-2.5'}
                            ${playRadioDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                          `}>
                            <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                              <input
                                type="radio"
                                disabled={playRadioDisabled}
                                checked={playRadioSelected === 'standard'}
                                onChange={() => setPlayRadioSelected('standard')}
                                className={`
                                  peer appearance-none rounded-full border transition-all duration-200 outline-none
                                  ${playRadioSize === 'sm' ? 'w-3.5 h-3.5' : playRadioSize === 'lg' ? 'w-5 h-5' : 'w-4 h-4'}
                                  ${playRadioDisabled ? 'bg-muted/10 border-border/60' :
                                    playRadioError ? 'border-rose-500 bg-rose-500/[0.02] focus:ring-2 focus:ring-rose-500/30' :
                                    'border-border/80 checked:border-secondary bg-muted/30 hover:border-secondary/80 focus:ring-2 focus:ring-secondary/30'
                                  }
                                `}
                              />
                              {playRadioSelected === 'standard' && (
                                <div className={`
                                  absolute rounded-full bg-secondary pointer-events-none transition-all
                                  ${playRadioSize === 'sm' ? 'w-1.5 h-1.5' : playRadioSize === 'lg' ? 'w-2.5 h-2.5' : 'w-2 h-2'}
                                  ${playRadioDisabled ? 'bg-muted-foreground/50' : ''}
                                `} />
                              )}
                            </div>
                            <div className="flex flex-col">
                              <span className={`font-semibold transition-colors
                                ${playRadioSize === 'sm' ? 'text-[11px]' : playRadioSize === 'lg' ? 'text-sm' : 'text-xs'}
                                ${playRadioError && !playRadioDisabled ? 'text-rose-500 dark:text-rose-400' : 'text-foreground'}
                              `}>
                                Standard Settlement (T+2)
                              </span>
                              <span className={`text-muted-foreground block font-light mt-0.5
                                ${playRadioSize === 'sm' ? 'text-[9.5px]' : playRadioSize === 'lg' ? 'text-xs' : 'text-[10px]'}
                              `}>
                                Primary payout route via local banking rails. No fees.
                              </span>
                            </div>
                          </label>

                          {/* Option 2 Option */}
                          <label className={`flex items-start cursor-pointer select-none transition-all
                            ${playRadioSize === 'sm' ? 'gap-2' : playRadioSize === 'lg' ? 'gap-3.5' : 'gap-2.5'}
                            ${playRadioDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                          `}>
                            <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                              <input
                                type="radio"
                                disabled={playRadioDisabled}
                                checked={playRadioSelected === 'instant'}
                                onChange={() => setPlayRadioSelected('instant')}
                                className={`
                                  peer appearance-none rounded-full border transition-all duration-200 outline-none
                                  ${playRadioSize === 'sm' ? 'w-3.5 h-3.5' : playRadioSize === 'lg' ? 'w-5 h-5' : 'w-4 h-4'}
                                  ${playRadioDisabled ? 'bg-muted/10 border-border/60' :
                                    playRadioError ? 'border-rose-500 bg-rose-500/[0.02] focus:ring-2 focus:ring-rose-500/30' :
                                    'border-border/80 checked:border-secondary bg-muted/30 hover:border-secondary/80 focus:ring-2 focus:ring-secondary/30'
                                  }
                                `}
                              />
                              {playRadioSelected === 'instant' && (
                                <div className={`
                                  absolute rounded-full bg-secondary pointer-events-none transition-all
                                  ${playRadioSize === 'sm' ? 'w-1.5 h-1.5' : playRadioSize === 'lg' ? 'w-2.5 h-2.5' : 'w-2 h-2'}
                                  ${playRadioDisabled ? 'bg-muted-foreground/50' : ''}
                                `} />
                              )}
                            </div>
                            <div className="flex flex-col">
                              <span className={`font-semibold transition-colors
                                ${playRadioSize === 'sm' ? 'text-[11px]' : playRadioSize === 'lg' ? 'text-sm' : 'text-xs'}
                                ${playRadioError && !playRadioDisabled ? 'text-rose-500 dark:text-rose-400' : 'text-foreground'}
                              `}>
                                Instant Settlement (Same Day)
                              </span>
                              <span className={`text-muted-foreground block font-light mt-0.5
                                ${playRadioSize === 'sm' ? 'text-[9.5px]' : playRadioSize === 'lg' ? 'text-xs' : 'text-[10px]'}
                              `}>
                                Real-time clearing via RTP network. Subject to a 0.25% processing fee.
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>

                      {/* Radio Code Output */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Generated JSX Component</label>
                        <div className="relative rounded-xl overflow-hidden border border-border/80 bg-slate-950 dark:bg-slate-900/50 shadow-sm flex items-center justify-between px-4 py-3">
                          <code className="text-[10.5px] font-mono text-sky-300 break-all select-all pr-12">
                            {`<div className="space-y-3">\n` +
                             `  <label className="flex items-start gap-2.5 cursor-pointer">\n` +
                             `    <div className="relative flex items-center justify-center shrink-0 mt-0.5">\n` +
                             `      <input\n` +
                             `        type="radio"\n` +
                             `        name="settlement"\n` +
                             (playRadioSelected === 'standard' ? `        checked\n` : '') +
                             (playRadioDisabled ? `        disabled\n` : '') +
                             `        className="appearance-none ${playRadioSize === 'sm' ? 'w-3.5 h-3.5' : playRadioSize === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} rounded-full border ${
                               playRadioError ? 'border-rose-500 bg-rose-500/[0.02]' : 'border-border/80 checked:border-secondary'
                             } focus:ring-2 focus:ring-secondary/30 outline-none transition duration-150"\n` +
                             `      />\n` +
                             (playRadioSelected === 'standard' ? `      <div className="absolute w-2 h-2 rounded-full bg-secondary" />\n` : '') +
                             `    </div>\n` +
                             `    <span className="text-xs font-semibold text-foreground">Standard Settlement (T+2)</span>\n` +
                             `  </label>\n` +
                             `</div>`}
                          </code>
                          <button
                            onClick={() => handleCopy(
                              `<div className="space-y-3">\n` +
                              `  <label className="flex items-start gap-2.5 cursor-pointer">\n` +
                              `    <div className="relative flex items-center justify-center shrink-0 mt-0.5">\n` +
                              `      <input\n` +
                              `        type="radio"\n` +
                              `        name="settlement"\n` +
                              (playRadioSelected === 'standard' ? `        checked\n` : '') +
                              (playRadioDisabled ? `        disabled\n` : '') +
                              `        className="appearance-none ${playRadioSize === 'sm' ? 'w-3.5 h-3.5' : playRadioSize === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} rounded-full border ${
                                playRadioError ? 'border-rose-500 bg-rose-500/[0.02]' : 'border-border/80 checked:border-secondary'
                              } focus:ring-2 focus:ring-secondary/30 outline-none transition duration-150"\n` +
                              `      />\n` +
                              (playRadioSelected === 'standard' ? `      <div className="absolute w-2 h-2 rounded-full bg-secondary" />\n` : '') +
                              `    </div>\n` +
                              `    <span className="text-xs font-semibold text-foreground">Standard Settlement (T+2)</span>\n` +
                              `  </label>\n` +
                              `</div>`, 'radio-code')}
                            className="absolute right-3.5 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-white rounded-lg p-2 transition cursor-pointer"
                          >
                            <Copy size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Navigation Block */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a 
                  href="#components/input" 
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    <ChevronLeft size={16} /> Input & Label
                  </span>
                </a>

                <a 
                  href="#components/select" 
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[4px] transition-transform duration-200 flex items-center gap-1.5">
                    Select <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          )}

          {['components/select', 'components/native-select'].includes(currentPath) && (
            <div className="space-y-12 max-w-5xl mx-auto py-4 animate-fade-in">
              {/* Header */}
              <section className="space-y-3">
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">Components</div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100" id="overview">
                  Select
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
                  Select menus allow users to choose one option from a collapsible list of options. Our menus feature unified visual indicator chevrons, support for placeholder states, validation layouts, and custom keyboard focus offsets.
                </p>
              </section>

              <hr className="border-border/60" />

              {/* Specimens Section */}
              <section id="specimen" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Component Specimens</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Examine select dropdown varieties, placeholder treatments, and focused offsets.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1: Varieties */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm space-y-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Dropdown Varieties</h3>

                    {/* Default Placeholder */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground block">
                        Account Billing Currency
                      </label>
                      <select 
                        defaultValue=""
                        className="w-full text-xs bg-muted/30 dark:bg-slate-950/40 border border-border/80 hover:border-secondary/80 rounded-md py-2.5 px-3.5 outline-none transition duration-200 text-muted-foreground/80 cursor-pointer"
                      >
                        <option value="" disabled>Choose currency...</option>
                        <option value="usd">USD ($)</option>
                      </select>
                    </div>

                    {/* Value Selected */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground block">
                        Primary Region Location
                      </label>
                      <select 
                        defaultValue="hk"
                        className="w-full text-xs bg-muted/30 dark:bg-slate-950/40 border border-border/80 hover:border-secondary/80 rounded-md py-2.5 px-3.5 outline-none transition duration-200 text-foreground cursor-pointer"
                      >
                        <option value="us">United States (Americas)</option>
                        <option value="hk">Hong Kong (Asia-Pacific)</option>
                        <option value="gb">United Kingdom (Europe)</option>
                      </select>
                    </div>
                  </div>

                  {/* Card 2: Interactive States */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm space-y-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">State Treatments</h3>

                    {/* Focused Select */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-semibold text-foreground block">Focused Dropdown</label>
                        <span className="text-[9px] font-mono text-muted-foreground">:focus</span>
                      </div>
                      <select 
                        defaultValue="instant"
                        className="w-full text-xs bg-muted/10 dark:bg-slate-950/20 border border-transparent rounded-md py-2.5 px-3.5 outline-none shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border),_0_0_8px_rgba(100,116,139,0.15)] cursor-pointer"
                      >
                        <option value="instant">Instant Clearing (Same Day)</option>
                        <option value="standard">Standard Clearing (T+2)</option>
                      </select>
                    </div>

                    {/* Disabled Select */}
                    <div className="space-y-1.5 opacity-55">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-semibold text-muted-foreground block">Disabled State</label>
                        <span className="text-[9px] font-mono text-muted-foreground">disabled</span>
                      </div>
                      <select 
                        disabled
                        defaultValue="locked"
                        className="w-full text-xs bg-muted/15 dark:bg-slate-900/15 border border-border/60 rounded-md py-2.5 px-3.5 outline-none text-muted-foreground cursor-not-allowed"
                      >
                        <option value="locked">Preserve Account Allocations</option>
                      </select>
                    </div>

                    {/* Invalid / Error Select */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-semibold text-rose-500 dark:text-rose-400 block">Invalid / Error State</label>
                        <span className="text-[9px] font-mono text-rose-500 dark:text-rose-400">error</span>
                      </div>
                      <div className="relative flex items-center">
                        <select 
                          defaultValue="none"
                          className="w-full text-xs bg-rose-500/[0.02] dark:bg-rose-500/[0.01] border border-rose-500/80 rounded-md py-2.5 pl-3.5 pr-12 outline-none text-foreground cursor-pointer focus:ring-2 focus:ring-rose-500/30"
                        >
                          <option value="none">Choose portfolio distribution...</option>
                        </select>
                        <span className="absolute right-9 text-rose-500 pointer-events-none flex items-center justify-center">
                          <AlertCircle size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Interactive Playground Section */}
              <section id="playground" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Interactive Playground</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Toggle dynamic options, sizes, and states to review rendering alignments and export clean code components.
                  </p>
                </div>

                {/* Playground Grid */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-hnh-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Controls (col-span-5) */}
                  <div className="lg:col-span-5 space-y-4">
                    {/* Label Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Select Label</label>
                      <input
                        type="text"
                        value={playSelectLabel}
                        onChange={(e) => setPlaySelectLabel(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground"
                      />
                    </div>

                    {/* Helper Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Helper Description</label>
                      <input
                        type="text"
                        value={playSelectHelper}
                        onChange={(e) => setPlaySelectHelper(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground"
                      />
                    </div>

                    {/* Placeholder Input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Placeholder Item</label>
                      <input
                        type="text"
                        value={playSelectPlaceholder}
                        onChange={(e) => setPlaySelectPlaceholder(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground"
                      />
                    </div>

                    {/* Size Select */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-foreground block">Select Size</label>
                      <select
                        value={playSelectSize}
                        onChange={(e) => setPlaySelectSize(e.target.value)}
                        className="w-full text-xs bg-muted/40 border border-border rounded-lg py-2 px-3 outline-none focus:border-primary dark:focus:border-secondary font-medium text-foreground cursor-pointer"
                      >
                        <option value="sm">Small (sm)</option>
                        <option value="md">Medium Default (md)</option>
                        <option value="lg">Large (lg)</option>
                      </select>
                    </div>

                    {/* Toggles */}
                    <div className="flex flex-col gap-3 pt-2">
                      <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer">
                        <input
                          type="checkbox"
                          checked={playSelectDisabled}
                          onChange={(e) => setPlaySelectDisabled(e.target.checked)}
                          className="rounded border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                        />
                        Simulate Disabled State
                      </label>

                      <label className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer">
                        <input
                          type="checkbox"
                          checked={playSelectError}
                          onChange={(e) => setPlaySelectError(e.target.checked)}
                          className="rounded border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                        />
                        Simulate Error/Invalid State
                      </label>
                    </div>
                  </div>

                  {/* Preview & Code (col-span-7) */}
                  <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border/85 pt-6 lg:pt-0 lg:pl-8 space-y-6">
                    {/* Live Preview Container */}
                    <div className="bg-muted/10 border border-border/40 rounded-2xl p-6 flex flex-col justify-center min-h-[190px]">
                      <div className="space-y-1.5 w-full max-w-md mx-auto">
                        {playSelectLabel && (
                          <label className={`block font-semibold ${
                            playSelectDisabled ? 'text-muted-foreground/60' :
                            playSelectError ? 'text-rose-500 dark:text-rose-400' : 'text-foreground/80'
                          } ${
                            playSelectSize === 'sm' ? 'text-[11px]' :
                            playSelectSize === 'lg' ? 'text-sm' : 'text-xs'
                          }`}>
                            {playSelectLabel}
                          </label>
                        )}
                        <div className="relative flex items-center w-full">
                          <select
                            disabled={playSelectDisabled}
                            value={playSelectValue}
                            onChange={(e) => setPlaySelectValue(e.target.value)}
                            className={`
                              w-full cursor-pointer appearance-none border transition-all duration-200 outline-none
                              ${playSelectSize === 'sm' ? 'rounded-md py-2 text-[11px] pl-3 pr-10' :
                                playSelectSize === 'lg' ? 'rounded-lg py-3 text-sm pl-4.5 pr-14' :
                                'rounded-md py-2.5 text-xs pl-3.5 pr-12'
                              }
                              ${playSelectDisabled ? 'bg-muted/10 dark:bg-slate-900/10 border-border/60 text-muted-foreground/60 cursor-not-allowed' :
                                playSelectError ? 'bg-rose-500/[0.02] dark:bg-rose-500/[0.01] border-rose-500/80 focus:ring-2 focus:ring-rose-500/30 text-rose-500' :
                                'bg-muted/30 dark:bg-slate-950/40 border-border/80 hover:border-secondary/80 focus:shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border),_0_0_8px_rgba(100,116,139,0.15)] focus:border-transparent text-foreground'
                              }
                              ${playSelectValue === '' ? 'text-muted-foreground/80' : ''}
                            `}
                          >
                            {playSelectPlaceholder && (
                              <option value="" disabled>{playSelectPlaceholder}</option>
                            )}
                            <option value="usd">United States Dollar (USD)</option>
                            <option value="eur">Euro (EUR)</option>
                            <option value="gbp">British Pound Sterling (GBP)</option>
                            <option value="jpy">Japanese Yen (JPY)</option>
                          </select>
                          {playSelectError && !playSelectDisabled && (
                            <span className={`absolute text-rose-500 pointer-events-none flex items-center justify-center
                              ${playSelectSize === 'sm' ? 'right-8' : playSelectSize === 'lg' ? 'right-11' : 'right-9'}
                            `}>
                              <AlertCircle size={playSelectSize === 'sm' ? 12 : playSelectSize === 'lg' ? 16 : 14} />
                            </span>
                          )}
                        </div>

                        {/* Helper and Error Message */}
                        {playSelectError ? (
                          <span className={`text-rose-500 dark:text-rose-400 font-semibold block flex items-center gap-1 ${
                            playSelectSize === 'sm' ? 'text-[9.5px]' : playSelectSize === 'lg' ? 'text-xs' : 'text-[10px]'
                          }`}>
                            <AlertCircle size={playSelectSize === 'sm' ? 10 : playSelectSize === 'lg' ? 14 : 12} />
                            Please choose a currency settlement path.
                          </span>
                        ) : playSelectHelper ? (
                          <span className={`text-muted-foreground block ${
                            playSelectSize === 'sm' ? 'text-[9.5px]' : playSelectSize === 'lg' ? 'text-xs' : 'text-[10px]'
                          }`}>
                            {playSelectHelper}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    {/* Compiled Code Output */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Generated JSX Component</label>
                      <div className="relative rounded-xl overflow-hidden border border-border/80 bg-slate-950 dark:bg-slate-900/50 shadow-sm flex items-center justify-between px-4 py-3">
                        <code className="text-[10.5px] font-mono text-sky-300 break-all select-all pr-12">
                          {`<div className="space-y-1.5 w-full max-w-md">\n` +
                           (playSelectLabel ? `  <Label>${playSelectLabel}</Label>\n` : '') +
                           `  <div className="relative flex items-center">\n` +
                           `    <select\n` +
                           (playSelectDisabled ? `      disabled\n` : '') +
                           `      className="w-full appearance-none bg-muted/30 border ${
                             playSelectError ? 'border-rose-500 bg-rose-500/[0.02]' : 'border-border/80'
                           } rounded-md ${playSelectSize === 'sm' ? 'py-2 px-3 text-[11px]' : playSelectSize === 'lg' ? 'py-3 px-4.5 text-sm' : 'py-2.5 px-3.5 text-xs'} outline-none focus:shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border)] transition duration-200 cursor-pointer"\n` +
                           `    >\n` +
                           (playSelectPlaceholder ? `      <option value="" disabled>${playSelectPlaceholder}</option>\n` : '') +
                           `      <option value="usd">United States Dollar (USD)</option>\n` +
                           `      <option value="eur">Euro (EUR)</option>\n` +
                           `    </select>\n` +
                           (playSelectError ? `    <span className="absolute right-9 text-rose-500"><AlertCircle size={14} /></span>\n` : '') +
                           `  </div>\n` +
                           (playSelectError ? `  <span className="text-rose-500 text-[10px] flex items-center gap-1"><AlertCircle size={12} /> Please select an option.</span>\n` :
                            playSelectHelper ? `  <span className="text-muted-foreground text-[10px]">${playSelectHelper}</span>\n` : '') +
                           `</div>`}
                        </code>
                        <button
                          onClick={() => handleCopy(
                            `<div className="space-y-1.5 w-full max-w-md">\n` +
                            (playSelectLabel ? `  <Label>${playSelectLabel}</Label>\n` : '') +
                            `  <div className="relative flex items-center">\n` +
                            `    <select\n` +
                            (playSelectDisabled ? `      disabled\n` : '') +
                            `      className="w-full appearance-none bg-muted/30 border ${
                              playSelectError ? 'border-rose-500 bg-rose-500/[0.02]' : 'border-border/80'
                            } rounded-md ${playSelectSize === 'sm' ? 'py-2 px-3 text-[11px]' : playSelectSize === 'lg' ? 'py-3 px-4.5 text-sm' : 'py-2.5 px-3.5 text-xs'} outline-none focus:shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border)] transition duration-200 cursor-pointer"\n` +
                            `    >\n` +
                            (playSelectPlaceholder ? `      <option value="" disabled>${playSelectPlaceholder}</option>\n` : '') +
                            `      <option value="usd">United States Dollar (USD)</option>\n` +
                            `      <option value="eur">Euro (EUR)</option>\n` +
                            `    </select>\n` +
                            (playSelectError ? `    <span className="absolute right-9 text-rose-500"><AlertCircle size={14} /></span>\n` : '') +
                            `  </div>\n` +
                            (playSelectError ? `  <span className="text-rose-500 text-[10px] flex items-center gap-1"><AlertCircle size={12} /> Please select an option.</span>\n` :
                             playSelectHelper ? `  <span className="text-muted-foreground text-[10px]">${playSelectHelper}</span>\n` : '') +
                            `</div>`, 'select-code')}
                          className="absolute right-3.5 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-white rounded-lg p-2 transition cursor-pointer"
                        >
                          <Copy size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Navigation Block */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a 
                  href="#components/checkbox" 
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    <ChevronLeft size={16} /> Checkbox & Radio
                  </span>
                </a>

                <a 
                  href="#components/switch" 
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[4px] transition-transform duration-200 flex items-center gap-1.5">
                    Switch <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          )}

          {currentPath === 'components/alert' && (
            <div className="space-y-12 max-w-5xl mx-auto py-4 animate-fade-in">
              {/* Header */}
              <section className="space-y-3">
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">Components</div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100" id="overview">
                  Alert
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
                  An alert displays a brief, high-priority message in a way that attracts the user's attention without interrupting their current task. Designed for inline validation, security updates, and critical system statuses.
                </p>
                
                {/* Accessibility Contract (WCAG 2.1 AA) */}
                <div className="bg-accent/40 border border-border/80 rounded-xl p-4.5 text-xs text-muted-foreground space-y-2 mt-4 max-w-3xl">
                  <div className="font-bold text-foreground flex items-center gap-2">
                    <Accessibility size={14} className="text-secondary-500" />
                    Accessibility Contract (WCAG 2.1 AA)
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 pl-1">
                    <li>Uses the native HTML <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">role="alert"</code> declaration to trigger immediate screen reader announcements.</li>
                    <li>Status icons contain <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">aria-hidden="true"</code> to prevent redundant vocalization of purely visual status states.</li>
                    <li>Optional close buttons feature explicit, translated <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">aria-label</code> controls for proper button naming.</li>
                    <li>Supports proper keyboard focus outlines on interactive action links or dismiss buttons.</li>
                  </ul>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Specimens Section */}
              <section id="specimen" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Component Specimens</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Examine alert design variants, status states, and contextual configurations.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Style 1: Accent Border */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Accent Border (Left Indicator Bar)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                      <div className="relative w-full rounded-r-xl border border-y-border border-r-border border-l-4 border-l-secondary-500 bg-card p-4 flex gap-3 text-left shadow-hnh-sm" role="alert">
                        <Info className="shrink-0 mt-0.5 text-secondary-500" size={16} aria-hidden="true" />
                        <div className="flex-1 space-y-1">
                          <h5 className="font-bold text-xs leading-none tracking-tight text-foreground">System Advisory</h5>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">Secondary signature requirement will be activated automatically at midnight UTC.</p>
                        </div>
                      </div>
                      <div className="relative w-full rounded-r-xl border border-y-border border-r-border border-l-4 border-l-emerald-500 bg-card p-4 flex gap-3 text-left shadow-hnh-sm" role="alert">
                        <CheckCircle2 className="shrink-0 mt-0.5 text-emerald-500" size={16} aria-hidden="true" />
                        <div className="flex-1 space-y-1">
                          <h5 className="font-bold text-xs leading-none tracking-tight text-foreground">Transaction Complete</h5>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">Vault allocation swap has been confirmed on-chain. Audit record #4492 has been logged.</p>
                        </div>
                      </div>
                      <div className="relative w-full rounded-r-xl border border-y-border border-r-border border-l-4 border-l-amber-500 bg-card p-4 flex gap-3 text-left shadow-hnh-sm" role="alert">
                        <AlertTriangle className="shrink-0 mt-0.5 text-amber-500" size={16} aria-hidden="true" />
                        <div className="flex-1 space-y-1">
                          <h5 className="font-bold text-xs leading-none tracking-tight text-foreground">Custodial Warning</h5>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">A secondary authentication signature is pending. This transaction will expire in 2 hours.</p>
                        </div>
                      </div>
                      <div className="relative w-full rounded-r-xl border border-y-border border-r-border border-l-4 border-l-red-500 bg-card p-4 flex gap-3 text-left shadow-hnh-sm" role="alert">
                        <XCircle className="shrink-0 mt-0.5 text-red-500" size={16} aria-hidden="true" />
                        <div className="flex-1 space-y-1">
                          <h5 className="font-bold text-xs leading-none tracking-tight text-foreground">Settlement Failure</h5>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">Liquidity pool insufficient to cover cross-border settlement. Please re-route liquidity.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Style 2: Flat Tint */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Flat Tint (Soft Color Surfaces)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                      <div className="relative w-full rounded-xl border border-transparent bg-secondary-500/8 dark:bg-secondary-500/10 text-secondary-700 dark:text-secondary-300 p-4 flex gap-3 text-left shadow-xs" role="alert">
                        <Info className="shrink-0 mt-0.5" size={16} aria-hidden="true" />
                        <div className="flex-1 space-y-1">
                          <h5 className="font-bold text-xs leading-none tracking-tight">Information Alert</h5>
                          <p className="text-[11px] leading-relaxed opacity-90">All transaction feeds are operating at normal speeds with zero block delay.</p>
                        </div>
                      </div>
                      <div className="relative w-full rounded-xl border border-transparent bg-emerald-500/8 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 p-4 flex gap-3 text-left shadow-xs" role="alert">
                        <CheckCircle2 className="shrink-0 mt-0.5" size={16} aria-hidden="true" />
                        <div className="flex-1 space-y-1">
                          <h5 className="font-bold text-xs leading-none tracking-tight">Success Advisory</h5>
                          <p className="text-[11px] leading-relaxed opacity-90">Compliance status verified successfully. Direct deposit ledger synced with internal assets.</p>
                        </div>
                      </div>
                      <div className="relative w-full rounded-xl border border-transparent bg-amber-500/8 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 p-4 flex gap-3 text-left shadow-xs" role="alert">
                        <AlertTriangle className="shrink-0 mt-0.5" size={16} aria-hidden="true" />
                        <div className="flex-1 space-y-1">
                          <h5 className="font-bold text-xs leading-none tracking-tight">Attention Required</h5>
                          <p className="text-[11px] leading-relaxed opacity-90">A new IP address has initiated a signature request on vault security policies.</p>
                        </div>
                      </div>
                      <div className="relative w-full rounded-xl border border-transparent bg-red-500/8 dark:bg-red-500/10 text-red-700 dark:text-red-300 p-4 flex gap-3 text-left shadow-xs" role="alert">
                        <XCircle className="shrink-0 mt-0.5" size={16} aria-hidden="true" />
                        <div className="flex-1 space-y-1">
                          <h5 className="font-bold text-xs leading-none tracking-tight">Critical Intercept</h5>
                          <p className="text-[11px] leading-relaxed opacity-90">API key token has expired. Secondary authentication handshake rejected.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Style 3: Actionable Alert Cards */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Action Integration & Dismissible</h3>
                    <div className="space-y-4 max-w-2xl">
                      <div className="relative w-full rounded-r-xl border border-y-border border-r-border border-l-4 border-l-secondary-500 bg-card p-4 flex gap-3 text-left shadow-hnh-sm" role="alert">
                        <Info className="shrink-0 mt-0.5 text-secondary-500" size={16} aria-hidden="true" />
                        <div className="flex-1 space-y-2">
                          <div>
                            <h5 className="font-bold text-xs leading-none tracking-tight text-foreground">Compliance Policy Updated</h5>
                            <p className="text-[11px] text-muted-foreground leading-relaxed mt-1">Please review the updated global liquidity reporting terms for regulatory clearance.</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button className="text-[10px] font-bold text-secondary-500 hover:text-secondary-600 transition focus:outline-none focus:underline">Review Terms</button>
                            <button className="text-[10px] font-bold text-muted-foreground hover:text-foreground transition focus:outline-none">Ignore</button>
                          </div>
                        </div>
                      </div>

                      <div className="relative w-full rounded-xl border border-border bg-card p-4 flex gap-3 text-left shadow-xs" role="alert">
                        <Bell className="shrink-0 mt-0.5 text-slate-400 dark:text-slate-500" size={16} aria-hidden="true" />
                        <div className="flex-1 space-y-1 pr-6">
                          <h5 className="font-bold text-xs leading-none tracking-tight text-foreground">Dismissible System Notification</h5>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">Weekly maintenance windows have been set. Expect short downtime Sunday at 02:00 AM.</p>
                        </div>
                        <button className="absolute right-3 top-3 text-muted-foreground hover:text-foreground p-1 rounded-md transition focus:outline-none focus:ring-1 focus:ring-secondary-500" aria-label="Dismiss Alert">
                          <X size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Playground Section */}
              <section id="playground" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Interactive Playground</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Experiment with alert layout settings, state styling variables, and content customizers.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Live Preview & Generated Code */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="bg-slate-50 dark:bg-slate-900/35 border border-border rounded-2xl p-8 flex items-center justify-center min-h-[180px] shadow-inner relative overflow-hidden">
                      {playAlertVisible ? (
                        <div className="w-full max-w-md animate-fade-in">
                          <div
                            role="alert"
                            className={
                              {
                                accent: {
                                  info: 'relative w-full rounded-r-xl border border-y-border border-r-border border-l-4 border-l-secondary-500 bg-card p-4 flex gap-3 text-left shadow-hnh-sm text-foreground',
                                  success: 'relative w-full rounded-r-xl border border-y-border border-r-border border-l-4 border-l-emerald-500 bg-card p-4 flex gap-3 text-left shadow-hnh-sm text-foreground',
                                  warning: 'relative w-full rounded-r-xl border border-y-border border-r-border border-l-4 border-l-amber-500 bg-card p-4 flex gap-3 text-left shadow-hnh-sm text-foreground',
                                  destructive: 'relative w-full rounded-r-xl border border-y-border border-r-border border-l-4 border-l-red-500 bg-card p-4 flex gap-3 text-left shadow-hnh-sm text-foreground',
                                  default: 'relative w-full rounded-r-xl border border-y-border border-r-border border-l-4 border-l-slate-400 dark:border-l-slate-600 bg-card p-4 flex gap-3 text-left shadow-hnh-sm text-foreground'
                                }[playAlertVariant],
                                flat: {
                                  info: 'relative w-full rounded-xl border border-transparent bg-secondary-500/8 dark:bg-secondary-500/10 text-secondary-700 dark:text-secondary-300 p-4 flex gap-3 text-left shadow-xs',
                                  success: 'relative w-full rounded-xl border border-transparent bg-emerald-500/8 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 p-4 flex gap-3 text-left shadow-xs',
                                  warning: 'relative w-full rounded-xl border border-transparent bg-amber-500/8 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 p-4 flex gap-3 text-left shadow-xs',
                                  destructive: 'relative w-full rounded-xl border border-transparent bg-red-500/8 dark:bg-red-500/10 text-red-700 dark:text-red-300 p-4 flex gap-3 text-left shadow-xs',
                                  default: 'relative w-full rounded-xl border border-transparent bg-muted/65 text-slate-700 dark:text-slate-300 p-4 flex gap-3 text-left shadow-xs'
                                }[playAlertVariant],
                                outline: {
                                  info: 'relative w-full rounded-xl border border-secondary-500/40 bg-transparent text-secondary-700 dark:text-secondary-300 p-4 flex gap-3 text-left shadow-xs',
                                  success: 'relative w-full rounded-xl border border-emerald-500/40 bg-transparent text-emerald-700 dark:text-emerald-300 p-4 flex gap-3 text-left shadow-xs',
                                  warning: 'relative w-full rounded-xl border border-amber-500/40 bg-transparent text-amber-700 dark:text-amber-300 p-4 flex gap-3 text-left shadow-xs',
                                  destructive: 'relative w-full rounded-xl border border-red-500/40 bg-transparent text-red-700 dark:text-red-300 p-4 flex gap-3 text-left shadow-xs',
                                  default: 'relative w-full rounded-xl border border-border bg-transparent text-foreground p-4 flex gap-3 text-left shadow-xs'
                                }[playAlertVariant]
                              }[playAlertStyle]
                            }
                          >
                            {/* Render matching Icon */}
                            {playAlertVariant === 'info' && <Info size={16} className={`shrink-0 mt-0.5 ${playAlertStyle === 'accent' ? 'text-secondary-500' : ''}`} aria-hidden="true" />}
                            {playAlertVariant === 'success' && <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${playAlertStyle === 'accent' ? 'text-emerald-500' : ''}`} aria-hidden="true" />}
                            {playAlertVariant === 'warning' && <AlertTriangle size={16} className={`shrink-0 mt-0.5 ${playAlertStyle === 'accent' ? 'text-amber-500' : ''}`} aria-hidden="true" />}
                            {playAlertVariant === 'destructive' && <XCircle size={16} className={`shrink-0 mt-0.5 ${playAlertStyle === 'accent' ? 'text-red-500' : ''}`} aria-hidden="true" />}
                            {playAlertVariant === 'default' && <Bell size={16} className={`shrink-0 mt-0.5 ${playAlertStyle === 'accent' ? 'text-slate-400 dark:text-slate-500' : ''}`} aria-hidden="true" />}

                            <div className="flex-1 space-y-1">
                              <h5 className="font-bold text-xs leading-none tracking-tight">{playAlertTitle}</h5>
                              <p className="text-[11px] leading-relaxed opacity-95">{playAlertDescription}</p>
                            </div>

                            {playAlertDismissible && (
                              <button
                                onClick={() => setPlayAlertVisible(false)}
                                className="text-muted-foreground hover:text-foreground shrink-0 self-start p-1 rounded-md transition duration-150 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                                aria-label="Close Alert"
                              >
                                <X size={14} />
                              </button>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center space-y-3 animate-fade-in">
                          <p className="text-xs text-muted-foreground italic">Alert dismissed by the operator.</p>
                          <button
                            onClick={() => setPlayAlertVisible(true)}
                            className="text-xs font-bold text-secondary-500 hover:text-secondary-600 transition flex items-center gap-1.5 mx-auto focus:outline-none focus:underline"
                          >
                            Reset Alert Preview
                          </button>
                        </div>
                      )}
                    </div>

                    {/* JSX Code Exporter */}
                    <div className="border border-border/80 rounded-2xl overflow-hidden bg-slate-950 dark:bg-slate-900/40 shadow-hnh-sm">
                      <div className="bg-slate-900/60 dark:bg-slate-950/40 border-b border-border/60 px-4.5 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                        </div>
                        <span className="text-[10px] text-muted-foreground font-bold tracking-wider uppercase">React / JSX</span>
                      </div>
                      <div className="p-4 relative group/code">
                        <pre className="text-xs font-mono text-slate-300 overflow-x-auto whitespace-pre leading-relaxed select-all">
                          <code>{getAlertCode()}</code>
                        </pre>
                        <button
                          onClick={() => handleCopy(getAlertCode(), 'alert-code')}
                          className="absolute right-3.5 top-3.5 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-white rounded-lg p-2 transition cursor-pointer"
                          title="Copy Code"
                        >
                          <Copy size={13} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Customizer Panel */}
                  <div className="lg:col-span-5 bg-card border border-border rounded-2xl p-6 shadow-hnh-sm space-y-6">
                    <h3 className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-slate-100 border-b border-border/50 pb-2">Customizer Options</h3>

                    {/* Style Selection */}
                    <div className="space-y-2">
                      <label className="text-[10.5px] font-bold text-muted-foreground uppercase tracking-wider block">Visual Style</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['accent', 'flat', 'outline'].map((style) => (
                          <button
                            key={style}
                            onClick={() => setPlayAlertStyle(style as 'accent' | 'flat' | 'outline')}
                            className={`py-2 text-[10px] font-bold border rounded-lg transition capitalize focus:outline-none ${
                              playAlertStyle === style
                                ? 'bg-secondary-500/10 border-secondary-500 text-secondary-500'
                                : 'border-border bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                            }`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Variant Selection */}
                    <div className="space-y-2">
                      <label className="text-[10.5px] font-bold text-muted-foreground uppercase tracking-wider block">Status Variant</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {[
                          { id: 'info', name: 'Info (Teal)' },
                          { id: 'success', name: 'Success (Green)' },
                          { id: 'warning', name: 'Warning (Amber)' },
                          { id: 'destructive', name: 'Destructive (Red)' },
                          { id: 'default', name: 'Neutral (Slate)' }
                        ].map((v) => (
                          <button
                            key={v.id}
                            onClick={() => setPlayAlertVariant(v.id as 'info' | 'success' | 'warning' | 'destructive' | 'default')}
                            className={`py-2 px-1 text-[10px] font-bold border rounded-lg transition text-center focus:outline-none ${
                              playAlertVariant === v.id
                                ? 'bg-secondary-500/10 border-secondary-500 text-secondary-500'
                                : 'border-border bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                            }`}
                          >
                            {v.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Text Inputs */}
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-bold text-muted-foreground uppercase tracking-wider block">Title Text</label>
                        <input
                          type="text"
                          value={playAlertTitle}
                          onChange={(e) => setPlayAlertTitle(e.target.value)}
                          className="w-full text-xs bg-muted/30 hover:bg-muted/50 dark:hover:bg-muted/40 focus:bg-card border border-border focus:border-secondary-500 rounded-xl px-3 py-2 text-foreground focus:outline-none transition duration-150 shadow-xs"
                          placeholder="Alert Title"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-bold text-muted-foreground uppercase tracking-wider block">Description Text</label>
                        <textarea
                          rows={3}
                          value={playAlertDescription}
                          onChange={(e) => setPlayAlertDescription(e.target.value)}
                          className="w-full text-xs bg-muted/30 hover:bg-muted/50 dark:hover:bg-muted/40 focus:bg-card border border-border focus:border-secondary-500 rounded-xl px-3 py-2 text-foreground focus:outline-none transition duration-150 shadow-xs leading-relaxed resize-none"
                          placeholder="Detailed status explanation..."
                        />
                      </div>
                    </div>

                    {/* Toggles */}
                    <div className="pt-2 flex items-center justify-between border-t border-border/40">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[10.5px] font-bold text-foreground">Dismissible Action</span>
                        <span className="text-[9px] text-muted-foreground">Expose close button</span>
                      </div>
                      <button
                        onClick={() => {
                          setPlayAlertDismissible(!playAlertDismissible);
                          setPlayAlertVisible(true);
                        }}
                        className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${
                          playAlertDismissible ? 'bg-secondary-500' : 'bg-slate-300 dark:bg-slate-700'
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                            playAlertDismissible ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Navigation Block */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a 
                  href="#components/accordion" 
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    <ChevronLeft size={16} /> Accordion
                  </span>
                </a>

                <a 
                  href="#components/alert-dialog" 
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[4px] transition-transform duration-200 flex items-center gap-1.5">
                    Alert Dialog <ChevronRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          )}

          {/* ── BADGE PAGE ────────────────────────────────────────────── */}
          {currentPath === 'components/badge' && (
            <div className="space-y-12 max-w-5xl mx-auto py-4 animate-fade-in">

              {/* Header */}
              <section className="space-y-3">
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">Components</div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100" id="overview">
                  Badge
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
                  A compact label used to convey status, category, or count at a glance. Badges are purely presentational — they carry no interactive role and rely on surrounding context for meaning.
                </p>

                {/* Accessibility Contract */}
                <div className="bg-accent/40 border border-border/80 rounded-xl p-4.5 text-xs text-muted-foreground space-y-2 mt-4 max-w-3xl">
                  <div className="font-bold text-foreground flex items-center gap-2">
                    <Accessibility size={14} className="text-secondary-500" />
                    Accessibility Contract (WCAG 2.1 AA)
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 pl-1">
                    <li>Badges are rendered as <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">{'<span>'}</code> elements — not buttons — as they carry no interactive role.</li>
                    <li>Color alone is never the sole conveyor of meaning; always pair with a text label or <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">aria-label</code> for status-dot variants.</li>
                    <li>Minimum 3:1 contrast ratio maintained between badge text and its background across all color variants in both light and dark modes.</li>
                    <li>When used inside a table or list, ensure the parent row or item has a meaningful accessible label that does not rely solely on the badge.</li>
                  </ul>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Specimens */}
              <section id="specimen" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Component Specimens</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    All badge color roles, visual styles, and size options shown in context.
                  </p>
                </div>

                <div className="space-y-10">

                  {/* Solid */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Solid (Filled)</h3>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none bg-primary text-primary-foreground">Primary</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none bg-secondary-500 text-white">Secondary</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none bg-emerald-600 text-white">Success</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none bg-amber-500 text-white">Warning</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none bg-red-600 text-white">Destructive</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none bg-slate-500 text-white">Neutral</span>
                    </div>
                  </div>

                  {/* Soft */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Soft (Tinted Surface)</h3>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none bg-primary/10 text-primary dark:text-primary-300">Primary</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none bg-secondary-500/10 text-secondary-600 dark:text-secondary-300">Secondary</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">Success</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none bg-amber-500/10 text-amber-700 dark:text-amber-300">Warning</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none bg-red-500/10 text-red-700 dark:text-red-300">Destructive</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none bg-slate-500/10 text-slate-600 dark:text-slate-300">Neutral</span>
                    </div>
                  </div>

                  {/* Outline */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Outline (Bordered)</h3>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none border border-primary/40 text-primary dark:text-primary-300">Primary</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none border border-secondary-500/40 text-secondary-600 dark:text-secondary-300">Secondary</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none border border-emerald-500/40 text-emerald-700 dark:text-emerald-300">Success</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none border border-amber-500/40 text-amber-700 dark:text-amber-300">Warning</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none border border-red-500/40 text-red-700 dark:text-red-300">Destructive</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none border border-slate-400/40 text-slate-600 dark:text-slate-300">Neutral</span>
                    </div>
                  </div>

                  {/* Sizes */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Sizes</h3>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-semibold leading-none bg-secondary-500 text-white">sm · Compact</span>
                      <span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold leading-none bg-secondary-500 text-white">md · Default</span>
                      <span className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold leading-none bg-secondary-500 text-white">lg · Prominent</span>
                    </div>
                  </div>

                  {/* Pill shape */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Pill Shape</h3>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold leading-none bg-primary text-primary-foreground">Verified</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold leading-none bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">Active</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold leading-none border border-amber-500/40 text-amber-700 dark:text-amber-300">Pending</span>
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold leading-none bg-red-500/10 text-red-700 dark:text-red-300">Suspended</span>
                    </div>
                  </div>

                  {/* With status dot */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">With Status Dot</h3>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold leading-none bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                        Live
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold leading-none bg-amber-500/10 text-amber-700 dark:text-amber-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" aria-hidden="true" />
                        Pending Review
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold leading-none bg-red-500/10 text-red-700 dark:text-red-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" aria-hidden="true" />
                        Suspended
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold leading-none bg-slate-500/10 text-slate-600 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" aria-hidden="true" />
                        Inactive
                      </span>
                    </div>
                  </div>

                  {/* In-context: table row */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">In Context — Portfolio Table Row</h3>
                    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-hnh-sm max-w-3xl">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b border-border bg-muted/40">
                            <th className="text-left px-4 py-3 font-bold text-muted-foreground tracking-wide">Account</th>
                            <th className="text-left px-4 py-3 font-bold text-muted-foreground tracking-wide">Type</th>
                            <th className="text-right px-4 py-3 font-bold text-muted-foreground tracking-wide">AUM</th>
                            <th className="text-left px-4 py-3 font-bold text-muted-foreground tracking-wide">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                          <tr>
                            <td className="px-4 py-3 font-medium text-foreground">Bastheon Growth Fund</td>
                            <td className="px-4 py-3 text-muted-foreground">Institutional</td>
                            <td className="px-4 py-3 text-right font-mono text-foreground">USD 142.4M</td>
                            <td className="px-4 py-3">
                              <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold leading-none bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />Active
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium text-foreground">HK Credit Special</td>
                            <td className="px-4 py-3 text-muted-foreground">Private Credit</td>
                            <td className="px-4 py-3 text-right font-mono text-foreground">USD 89.1M</td>
                            <td className="px-4 py-3">
                              <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold leading-none bg-amber-500/10 text-amber-700 dark:text-amber-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium text-foreground">SCS Liquidity Reserve</td>
                            <td className="px-4 py-3 text-muted-foreground">Hedge Fund</td>
                            <td className="px-4 py-3 text-right font-mono text-foreground">USD 34.7M</td>
                            <td className="px-4 py-3">
                              <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold leading-none bg-red-500/10 text-red-700 dark:text-red-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" aria-hidden="true" />Suspended
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              </section>

              <hr className="border-border/60" />

              {/* Playground */}
              <section id="playground" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Interactive Playground</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Compose badge variants, colors, sizes, and shape options.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Preview + Code */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="bg-slate-50 dark:bg-slate-900/35 border border-border rounded-2xl p-8 flex items-center justify-center min-h-[140px] shadow-inner">
                      <span
                        className={[
                          'inline-flex items-center font-semibold leading-none transition-all',
                          playBadgeDot ? 'gap-1.5' : 'gap-0',
                          // size
                          playBadgeSize === 'sm' ? 'text-[10px] px-2 py-0.5' : playBadgeSize === 'lg' ? 'text-xs px-3 py-1.5' : 'text-[11px] px-2.5 py-1',
                          // radius
                          playBadgeRounded
                            ? 'rounded-full'
                            : playBadgeSize === 'sm' ? 'rounded' : playBadgeSize === 'lg' ? 'rounded-lg' : 'rounded-md',
                          // variant × color
                          playBadgeVariant === 'solid' && playBadgeColor === 'primary' && 'bg-primary text-primary-foreground',
                          playBadgeVariant === 'solid' && playBadgeColor === 'secondary' && 'bg-secondary-500 text-white',
                          playBadgeVariant === 'solid' && playBadgeColor === 'success' && 'bg-emerald-600 text-white',
                          playBadgeVariant === 'solid' && playBadgeColor === 'warning' && 'bg-amber-500 text-white',
                          playBadgeVariant === 'solid' && playBadgeColor === 'destructive' && 'bg-red-600 text-white',
                          playBadgeVariant === 'solid' && playBadgeColor === 'neutral' && 'bg-slate-500 text-white',
                          playBadgeVariant === 'soft' && playBadgeColor === 'primary' && 'bg-primary/10 text-primary dark:text-primary-300',
                          playBadgeVariant === 'soft' && playBadgeColor === 'secondary' && 'bg-secondary-500/10 text-secondary-600 dark:text-secondary-300',
                          playBadgeVariant === 'soft' && playBadgeColor === 'success' && 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
                          playBadgeVariant === 'soft' && playBadgeColor === 'warning' && 'bg-amber-500/10 text-amber-700 dark:text-amber-300',
                          playBadgeVariant === 'soft' && playBadgeColor === 'destructive' && 'bg-red-500/10 text-red-700 dark:text-red-300',
                          playBadgeVariant === 'soft' && playBadgeColor === 'neutral' && 'bg-slate-500/10 text-slate-600 dark:text-slate-300',
                          playBadgeVariant === 'outline' && playBadgeColor === 'primary' && 'border border-primary/40 text-primary dark:text-primary-300',
                          playBadgeVariant === 'outline' && playBadgeColor === 'secondary' && 'border border-secondary-500/40 text-secondary-600 dark:text-secondary-300',
                          playBadgeVariant === 'outline' && playBadgeColor === 'success' && 'border border-emerald-500/40 text-emerald-700 dark:text-emerald-300',
                          playBadgeVariant === 'outline' && playBadgeColor === 'warning' && 'border border-amber-500/40 text-amber-700 dark:text-amber-300',
                          playBadgeVariant === 'outline' && playBadgeColor === 'destructive' && 'border border-red-500/40 text-red-700 dark:text-red-300',
                          playBadgeVariant === 'outline' && playBadgeColor === 'neutral' && 'border border-slate-400/40 text-slate-600 dark:text-slate-300',
                        ].filter(Boolean).join(' ')}
                      >
                        {playBadgeDot && (
                          <span
                            className={[
                              'w-1.5 h-1.5 rounded-full shrink-0',
                              playBadgeColor === 'primary' && 'bg-primary',
                              playBadgeColor === 'secondary' && 'bg-secondary-500',
                              playBadgeColor === 'success' && 'bg-emerald-500',
                              playBadgeColor === 'warning' && 'bg-amber-500',
                              playBadgeColor === 'destructive' && 'bg-red-500',
                              playBadgeColor === 'neutral' && 'bg-slate-400',
                            ].filter(Boolean).join(' ')}
                            aria-hidden="true"
                          />
                        )}
                        {playBadgeLabel}
                      </span>
                    </div>

                    {/* Generated Code */}
                    <div className="rounded-xl border border-border bg-slate-900 dark:bg-slate-950 overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Generated Code</span>
                        <button
                          onClick={() => {
                            const dotClass = playBadgeDot ? ' gap-1.5' : '';
                            const sizeClass = playBadgeSize === 'sm' ? 'text-[10px] px-2 py-0.5' : playBadgeSize === 'lg' ? 'text-xs px-3 py-1.5' : 'text-[11px] px-2.5 py-1';
                            const radiusClass = playBadgeRounded ? 'rounded-full' : (playBadgeSize === 'sm' ? 'rounded' : playBadgeSize === 'lg' ? 'rounded-lg' : 'rounded-md');
                            const colorMap: Record<string, Record<string, string>> = {
                              solid: { primary: 'bg-primary text-primary-foreground', secondary: 'bg-secondary-500 text-white', success: 'bg-emerald-600 text-white', warning: 'bg-amber-500 text-white', destructive: 'bg-red-600 text-white', neutral: 'bg-slate-500 text-white' },
                              soft: { primary: 'bg-primary/10 text-primary', secondary: 'bg-secondary-500/10 text-secondary-600', success: 'bg-emerald-500/10 text-emerald-700', warning: 'bg-amber-500/10 text-amber-700', destructive: 'bg-red-500/10 text-red-700', neutral: 'bg-slate-500/10 text-slate-600' },
                              outline: { primary: 'border border-primary/40 text-primary', secondary: 'border border-secondary-500/40 text-secondary-600', success: 'border border-emerald-500/40 text-emerald-700', warning: 'border border-amber-500/40 text-amber-700', destructive: 'border border-red-500/40 text-red-700', neutral: 'border border-slate-400/40 text-slate-600' },
                            };
                            const dotColorMap: Record<string, string> = { primary: 'bg-primary', secondary: 'bg-secondary-500', success: 'bg-emerald-500', warning: 'bg-amber-500', destructive: 'bg-red-500', neutral: 'bg-slate-400' };
                            const code = `<span className="inline-flex items-center${dotClass} font-semibold leading-none ${sizeClass} ${radiusClass} ${colorMap[playBadgeVariant][playBadgeColor]}">\n${playBadgeDot ? `  <span className="w-1.5 h-1.5 rounded-full shrink-0 ${dotColorMap[playBadgeColor]}" aria-hidden="true" />\n` : ''}  ${playBadgeLabel}\n</span>`;
                            navigator.clipboard.writeText(code);
                            setCopiedToken('badge-code');
                            setTimeout(() => setCopiedToken(null), 2000);
                          }}
                          className="text-[10px] text-slate-400 hover:text-slate-200 transition flex items-center gap-1"
                        >
                          <Copy size={11} />
                          Copy
                        </button>
                      </div>
                      <pre className="p-4 text-[11px] text-slate-300 font-mono overflow-x-auto leading-relaxed whitespace-pre-wrap">{(() => {
                        const dotClass = playBadgeDot ? ' gap-1.5' : '';
                        const sizeClass = playBadgeSize === 'sm' ? 'text-[10px] px-2 py-0.5' : playBadgeSize === 'lg' ? 'text-xs px-3 py-1.5' : 'text-[11px] px-2.5 py-1';
                        const radiusClass = playBadgeRounded ? 'rounded-full' : (playBadgeSize === 'sm' ? 'rounded' : playBadgeSize === 'lg' ? 'rounded-lg' : 'rounded-md');
                        const colorMap: Record<string, Record<string, string>> = {
                          solid: { primary: 'bg-primary text-primary-foreground', secondary: 'bg-secondary-500 text-white', success: 'bg-emerald-600 text-white', warning: 'bg-amber-500 text-white', destructive: 'bg-red-600 text-white', neutral: 'bg-slate-500 text-white' },
                          soft: { primary: 'bg-primary/10 text-primary', secondary: 'bg-secondary-500/10 text-secondary-600', success: 'bg-emerald-500/10 text-emerald-700', warning: 'bg-amber-500/10 text-amber-700', destructive: 'bg-red-500/10 text-red-700', neutral: 'bg-slate-500/10 text-slate-600' },
                          outline: { primary: 'border border-primary/40 text-primary', secondary: 'border border-secondary-500/40 text-secondary-600', success: 'border border-emerald-500/40 text-emerald-700', warning: 'border border-amber-500/40 text-amber-700', destructive: 'border border-red-500/40 text-red-700', neutral: 'border border-slate-400/40 text-slate-600' },
                        };
                        const dotColorMap: Record<string, string> = { primary: 'bg-primary', secondary: 'bg-secondary-500', success: 'bg-emerald-500', warning: 'bg-amber-500', destructive: 'bg-red-500', neutral: 'bg-slate-400' };
                        return `<span className="inline-flex items-center${dotClass} font-semibold leading-none ${sizeClass} ${radiusClass} ${colorMap[playBadgeVariant][playBadgeColor]}">\n${playBadgeDot ? `  <span className="w-1.5 h-1.5 rounded-full shrink-0 ${dotColorMap[playBadgeColor]}" aria-hidden="true" />\n` : ''}  ${playBadgeLabel}\n</span>`;
                      })()}</pre>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="lg:col-span-5 space-y-5 bg-card border border-border rounded-2xl p-5 shadow-hnh-sm">
                    <h3 className="text-xs font-bold text-foreground">Controls</h3>

                    {/* Label */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Label</label>
                      <input
                        type="text"
                        value={playBadgeLabel}
                        onChange={e => setPlayBadgeLabel(e.target.value)}
                        className="w-full text-xs bg-muted/50 border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none"
                        maxLength={32}
                      />
                    </div>

                    {/* Variant */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Variant</label>
                      <div className="flex gap-2">
                        {(['solid', 'soft', 'outline'] as const).map(v => (
                          <button
                            key={v}
                            onClick={() => setPlayBadgeVariant(v)}
                            className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold border transition capitalize ${playBadgeVariant === v ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/40 border-border text-muted-foreground hover:border-slate-400'}`}
                          >{v}</button>
                        ))}
                      </div>
                    </div>

                    {/* Color */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Color</label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['primary', 'secondary', 'success', 'warning', 'destructive', 'neutral'] as const).map(c => (
                          <button
                            key={c}
                            onClick={() => setPlayBadgeColor(c)}
                            className={`py-1.5 rounded-lg text-[11px] font-semibold border transition capitalize ${playBadgeColor === c ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/40 border-border text-muted-foreground hover:border-slate-400'}`}
                          >{c}</button>
                        ))}
                      </div>
                    </div>

                    {/* Size */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Size</label>
                      <div className="flex gap-2">
                        {(['sm', 'md', 'lg'] as const).map(s => (
                          <button
                            key={s}
                            onClick={() => setPlayBadgeSize(s)}
                            className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold border transition uppercase ${playBadgeSize === s ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/40 border-border text-muted-foreground hover:border-slate-400'}`}
                          >{s}</button>
                        ))}
                      </div>
                    </div>

                    {/* Toggles */}
                    <div className="space-y-3 pt-1 border-t border-border/50">
                      {/* Status dot */}
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-muted-foreground">Status dot</span>
                        <button
                          onClick={() => setPlayBadgeDot(!playBadgeDot)}
                          className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${playBadgeDot ? 'bg-secondary-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                        >
                          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${playBadgeDot ? 'translate-x-4' : 'translate-x-0'}`} />
                        </button>
                      </div>
                      {/* Pill shape */}
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-muted-foreground">Pill shape</span>
                        <button
                          onClick={() => setPlayBadgeRounded(!playBadgeRounded)}
                          className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${playBadgeRounded ? 'bg-secondary-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                        >
                          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${playBadgeRounded ? 'translate-x-4' : 'translate-x-0'}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Navigation Block */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a
                  href="#components/alert-dialog"
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    <ChevronLeft size={16} /> Alert Dialog
                  </span>
                </a>
                <a
                  href="#components/avatar"
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[4px] transition-transform duration-200 flex items-center gap-1.5">
                    Avatar <ChevronRight size={16} />
                  </span>
                </a>
              </div>

            </div>
          )}

          {/* ── AVATAR PAGE ────────────────────────────────────────────── */}
          {currentPath === 'components/avatar' && (
            <div className="space-y-12 max-w-5xl mx-auto py-4 animate-fade-in">

              {/* Header */}
              <section className="space-y-3">
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">Components</div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100" id="overview">
                  Avatar
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
                  A visual representation of a user, group, or entity. Avatars support custom sizing, shapes, status indicators, initials/fallback modes, and stacked layouts for collaborative list views.
                </p>

                {/* Accessibility Contract */}
                <div className="bg-accent/40 border border-border/80 rounded-xl p-4.5 text-xs text-muted-foreground space-y-2 mt-4 max-w-3xl">
                  <div className="font-bold text-foreground flex items-center gap-2">
                    <Accessibility size={14} className="text-secondary-500" />
                    Accessibility Contract (WCAG 2.1 AA)
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 pl-1">
                    <li>The avatar wrapper carries a descriptive <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">{'aria-label'}</code> or <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">{'title'}</code> when serving as standalone identification.</li>
                    <li>Always provide a meaningful <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">{'alt'}</code> tag for profile images. If the image fails to load, the markup must fallback seamlessly to textual initials or a neutral generic icon.</li>
                    <li>Status indicator dots include an <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">{'aria-label'}</code> (e.g. <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">{"Status: Online"}</code>) rather than depending solely on color visual indicators.</li>
                    <li>When wrapped in interactive elements (e.g. user profile links), the anchor should receive focus state outlines.</li>
                  </ul>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Specimens */}
              <section id="specimen" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Component Specimens</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Visual specimens detailing sizes, fallback systems, custom shapes, and group layouts.
                  </p>
                </div>

                <div className="space-y-10">

                  {/* Sizes */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Sizes</h3>
                    <div className="flex flex-wrap gap-6 items-end">
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden bg-muted flex items-center justify-center border border-border/60">
                          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User XS" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground">XS (24px)</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center border border-border/60">
                          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User SM" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground">SM (32px)</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center border border-border/60">
                          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User MD" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground">MD (40px)</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted flex items-center justify-center border border-border/60">
                          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User LG" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground">LG (48px)</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-muted flex items-center justify-center border border-border/60">
                          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User XL" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground">XL (56px)</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted flex items-center justify-center border border-border/60">
                          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 2XL" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground">2XL (64px)</span>
                      </div>
                    </div>
                  </div>

                  {/* Shapes */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Shapes</h3>
                    <div className="flex flex-wrap gap-8 items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex items-center justify-center border border-border/60">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Circle Shape" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs font-semibold text-foreground">Circle</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-muted flex items-center justify-center border border-border/60">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Rounded Shape" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs font-semibold text-foreground">Rounded (12px)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-none overflow-hidden bg-muted flex items-center justify-center border border-border/60">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Square Shape" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs font-semibold text-foreground">Square (0px)</span>
                      </div>
                    </div>
                  </div>

                  {/* Fallback Hierarchy */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Fallback Hierarchy</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                      <div className="bg-card border border-border/80 rounded-xl p-4.5 space-y-3 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Primary" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-xs font-bold text-foreground">1. Photo Image</h4>
                          <p className="text-[10px] text-muted-foreground">Displays target graphic with scale cover mapping.</p>
                        </div>
                      </div>
                      <div className="bg-card border border-border/80 rounded-xl p-4.5 space-y-3 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary dark:text-primary-300 font-mono">RA</span>
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-xs font-bold text-foreground">2. Initials Tint</h4>
                          <p className="text-[10px] text-muted-foreground">Standard text initials displayed when image fails to load.</p>
                        </div>
                      </div>
                      <div className="bg-card border border-border/80 rounded-xl p-4.5 space-y-3 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                          <User className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-xs font-bold text-foreground">3. Generic Icon</h4>
                          <p className="text-[10px] text-muted-foreground">Generic SVG fallback for guests or empty fields.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status Badges */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Status Ring Indicators</h3>
                    <div className="flex flex-wrap gap-6">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Online User" className="w-full h-full object-cover" />
                        </div>
                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-card" aria-label="Status: Online" />
                      </div>
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Offline User" className="w-full h-full object-cover" />
                        </div>
                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-slate-400 ring-2 ring-card" aria-label="Status: Offline" />
                      </div>
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Away User" className="w-full h-full object-cover" />
                        </div>
                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-amber-500 ring-2 ring-card" aria-label="Status: Away" />
                      </div>
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Busy User" className="w-full h-full object-cover" />
                        </div>
                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-red-500 ring-2 ring-card" aria-label="Status: Busy" />
                      </div>
                    </div>
                  </div>

                  {/* Avatar Groups */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Stacked Groups (Joint Custody Teams)</h3>
                    <div className="space-y-2">
                      <p className="text-[11px] text-muted-foreground max-w-lg leading-relaxed">
                        Stacked lists overlap adjacent items. Hovering an individual item pulls it to the foreground with an elevation shift.
                      </p>
                      <div className="flex items-center gap-4 pt-2">
                        {/* Group stacked */}
                        <div className="flex -space-x-3.5 hover:-space-x-2.5 transition-all duration-300 group">
                          {[
                            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                          ].map((src, i) => (
                            <div 
                              key={i} 
                              style={{ zIndex: 10 + i }}
                              className="relative w-10 h-10 rounded-full bg-card overflow-hidden ring-2 ring-card hover:-translate-y-1.5 hover:scale-105 transition-all duration-300 cursor-pointer select-none"
                            >
                              <img src={src} alt="Team User" className="w-full h-full object-cover" />
                            </div>
                          ))}
                          <div 
                            style={{ zIndex: 15 }}
                            className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center ring-2 ring-card text-white text-[10px] font-bold select-none cursor-pointer"
                          >
                            +3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              <hr className="border-border/60" />

              {/* Playground */}
              <section id="playground" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Interactive Playground</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Configure avatar visuals, fallbacks, shape borders, and status ring dots dynamically.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Preview + Code */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="bg-slate-50 dark:bg-slate-900/35 border border-border rounded-2xl p-8 flex items-center justify-center min-h-[160px] shadow-inner">
                      
                      {/* Live Avatar Preview Container */}
                      <div className="relative">
                        <div
                          className={[
                            'relative flex items-center justify-center shrink-0 transition-all duration-200',
                            // Shape
                            playAvatarShape === 'circle' ? 'rounded-full' : playAvatarShape === 'rounded' ? 'rounded-xl' : 'rounded-none',
                            // Size
                            playAvatarSize === 'xs' ? 'w-6 h-6 text-[9px]' :
                            playAvatarSize === 'sm' ? 'w-8 h-8 text-xs' :
                            playAvatarSize === 'lg' ? 'w-12 h-12 text-base' :
                            playAvatarSize === 'xl' ? 'w-14 h-14 text-lg' :
                            playAvatarSize === '2xl' ? 'w-16 h-16 text-xl' :
                            'w-10 h-10 text-sm',
                            // Background fallback tints
                            playAvatarType === 'initials' ? 'bg-primary/10 text-primary dark:text-primary-300 font-semibold' :
                            playAvatarType === 'icon' ? 'bg-muted' : 'bg-transparent',
                            // Outer ring border
                            playAvatarBorder === 'primary' ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' :
                            playAvatarBorder === 'secondary' ? 'ring-2 ring-secondary-500 ring-offset-2 ring-offset-background' :
                            playAvatarBorder === 'accent' ? 'ring-2 ring-slate-350 dark:ring-slate-700 ring-offset-2 ring-offset-background' :
                            'ring-0'
                          ].filter(Boolean).join(' ')}
                        >
                          {playAvatarType === 'image' && (
                            <img
                              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="User profile"
                              className={`w-full h-full object-cover ${
                                playAvatarShape === 'circle' ? 'rounded-full' : playAvatarShape === 'rounded' ? 'rounded-xl' : 'rounded-none'
                              }`}
                            />
                          )}
                          {playAvatarType === 'initials' && (
                            <span className="font-mono tracking-tight uppercase leading-none">{playAvatarInitials || 'AD'}</span>
                          )}
                          {playAvatarType === 'icon' && (
                            <User className="w-1/2 h-1/2 text-muted-foreground" />
                          )}
                        </div>

                        {/* Corner Status dot indicator */}
                        {playAvatarStatus !== 'none' && (
                          <span
                            className={[
                              'absolute bottom-0 right-0 rounded-full ring-2 ring-background shrink-0 transition-all',
                              // Status dot colors
                              playAvatarStatus === 'online' ? 'bg-emerald-500' :
                              playAvatarStatus === 'offline' ? 'bg-slate-400' :
                              playAvatarStatus === 'away' ? 'bg-amber-500' :
                              'bg-red-500',
                              // Scale indicator size relative to avatar sizes
                              playAvatarSize === 'xs' ? 'w-1.5 h-1.5 translate-x-0.5 translate-y-0.5' :
                              playAvatarSize === 'sm' ? 'w-2 h-2 translate-x-0.5 translate-y-0.5' :
                              playAvatarSize === 'lg' ? 'w-3.5 h-3.5 translate-x-0.5 translate-y-0.5' :
                              playAvatarSize === 'xl' ? 'w-4 h-4 translate-x-0.5 translate-y-0.5' :
                              playAvatarSize === '2xl' ? 'w-4.5 h-4.5 translate-x-0.5 translate-y-0.5' :
                              'w-2.5 h-2.5 translate-x-0.5 translate-y-0.5'
                            ].join(' ')}
                            aria-label={`Status: ${playAvatarStatus}`}
                          />
                        )}
                      </div>

                    </div>

                    {/* Interactive Code Preview */}
                    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xs relative group/code">
                      <div className="border-b border-border/80 bg-muted/30 px-4 py-2 flex items-center justify-between text-[10px]">
                        <span className="font-mono font-bold text-muted-foreground tracking-wide">HTML / Utility Classes</span>
                        <button
                          onClick={() => handleCopy(getAvatarCode(), 'avatar-code')}
                          className="flex items-center gap-1.5 px-2 py-1 rounded bg-muted/65 hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition"
                        >
                          <Copy size={11} /> Copy Code
                        </button>
                      </div>
                      <pre className="p-4 overflow-x-auto text-[10.5px] font-mono leading-relaxed text-slate-800 dark:text-slate-200">
                        {getAvatarCode()}
                      </pre>
                    </div>

                  </div>

                  {/* Playground Controls */}
                  <div className="lg:col-span-5 bg-card border border-border/80 rounded-2xl p-6 shadow-hnh-sm space-y-6">
                    <div className="flex items-center justify-between pb-3 border-b border-border/40">
                      <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">Configuration</h3>
                      <button
                        onClick={() => {
                          setPlayAvatarSize('md');
                          setPlayAvatarShape('circle');
                          setPlayAvatarType('image');
                          setPlayAvatarStatus('none');
                          setPlayAvatarBorder('none');
                          setPlayAvatarInitials('AD');
                        }}
                        className="text-[10px] text-secondary-500 hover:underline font-semibold cursor-pointer"
                      >
                        Reset Defaults
                      </button>
                    </div>

                    {/* Content Type */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Content Type</label>
                      <div className="flex gap-2">
                        {(['image', 'initials', 'icon'] as const).map(t => (
                          <button
                            key={t}
                            onClick={() => setPlayAvatarType(t)}
                            className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold border transition capitalize ${playAvatarType === t ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/40 border-border text-muted-foreground hover:border-slate-400'}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Initials Text Input (Conditional) */}
                    {playAvatarType === 'initials' && (
                      <div className="space-y-1.5 animate-fade-in">
                        <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Initials Content</label>
                        <input
                          type="text"
                          value={playAvatarInitials}
                          onChange={e => setPlayAvatarInitials(e.target.value.substring(0, 3))}
                          className="w-full text-xs bg-muted/50 border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-secondary-500 uppercase font-mono"
                          maxLength={3}
                          placeholder="e.g. AD"
                        />
                      </div>
                    )}

                    {/* Sizes Selection */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Sizes</label>
                      <div className="grid grid-cols-6 gap-1.5">
                        {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map(sz => (
                          <button
                            key={sz}
                            onClick={() => setPlayAvatarSize(sz)}
                            className={`py-1 rounded-lg text-[10px] font-bold border transition uppercase ${playAvatarSize === sz ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/40 border-border text-muted-foreground hover:border-slate-400'}`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Shapes Selection */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Shapes</label>
                      <div className="flex gap-2">
                        {(['circle', 'rounded', 'square'] as const).map(sh => (
                          <button
                            key={sh}
                            onClick={() => setPlayAvatarShape(sh)}
                            className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold border transition capitalize ${playAvatarShape === sh ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/40 border-border text-muted-foreground hover:border-slate-400'}`}
                          >
                            {sh}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Status Ring selection */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Status Indicators</label>
                      <div className="grid grid-cols-5 gap-1">
                        {(['none', 'online', 'offline', 'away', 'busy'] as const).map(st => (
                          <button
                            key={st}
                            onClick={() => setPlayAvatarStatus(st)}
                            className={`py-1 rounded-lg text-[10px] font-semibold border transition capitalize ${playAvatarStatus === st ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/40 border-border text-muted-foreground hover:border-slate-400'}`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Outer border decoration */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Decorative Outer Ring</label>
                      <div className="grid grid-cols-4 gap-1">
                        {(['none', 'primary', 'secondary', 'accent'] as const).map(b => (
                          <button
                            key={b}
                            onClick={() => setPlayAvatarBorder(b)}
                            className={`py-1 rounded-lg text-[10px] font-semibold border transition capitalize ${playAvatarBorder === b ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/40 border-border text-muted-foreground hover:border-slate-400'}`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </section>

              <hr className="border-border/60" />

              {/* Navigation Block */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a
                  href="#components/badge"
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    <ChevronLeft size={16} /> Badge
                  </span>
                </a>
                <a
                  href="#components/breadcrumb"
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[4px] transition-transform duration-200 flex items-center gap-1.5">
                    Breadcrumb <ChevronRight size={16} />
                  </span>
                </a>
              </div>

            </div>
          )}

          {/* ── SWITCH PAGE ────────────────────────────────────────────── */}
          {currentPath === 'components/switch' && (
            <div className="space-y-12 max-w-5xl mx-auto py-4 animate-fade-in">

              {/* Header */}
              <section className="space-y-3">
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">Components</div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100" id="overview">
                  Switch
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
                  A toggle control that allows users to switch between binary states—such as on and off—with immediate feedback. Switches are designed for preferences, configuration settings, and actions that do not require an explicit "submit" step.
                </p>

                {/* Accessibility Contract */}
                <div className="bg-accent/40 border border-border/80 rounded-xl p-4.5 text-xs text-muted-foreground space-y-2 mt-4 max-w-3xl">
                  <div className="font-bold text-foreground flex items-center gap-2">
                    <Accessibility size={14} className="text-secondary-500" />
                    Accessibility Contract (WCAG 2.1 AA)
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 pl-1">
                    <li>Uses the HTML <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">role="switch"</code> attribute to declare the component identity to screen readers.</li>
                    <li>Synchronizes the toggle state with the <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">aria-checked</code> attribute (values: <code className="font-mono text-[11px]">"true"</code> or <code className="font-mono text-[11px]">"false"</code>).</li>
                    <li>Keyboard navigation is supported: the control is focusable via <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">Tab</code>, and toggled with <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">Space</code> or <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">Enter</code>.</li>
                    <li>Focus outline transitions smoothly using <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">focus-visible:</code> ring offsets to prevent overlay overlap.</li>
                    <li>If disabled, standard <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">disabled</code> or <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">aria-disabled="true"</code> is set, dropping opacity to 40% and blocking pointer/click events.</li>
                  </ul>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Specimens */}
              <section id="specimen" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Component Specimens</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Visual state matrix, color presets, size variations, and layout structures.
                  </p>
                </div>

                <div className="space-y-10">

                  {/* Standard States */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">State Matrix</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                      <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-xl border border-border/40">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold">Unchecked</span>
                        <button type="button" role="switch" aria-checked="false" className="relative inline-flex w-10 h-6 shrink-0 cursor-pointer rounded-full p-0.5 bg-slate-300 dark:bg-slate-700 transition-colors duration-200">
                          <span className="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 translate-x-0" />
                        </button>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-xl border border-border/40">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold">Checked</span>
                        <button type="button" role="switch" aria-checked="true" className="relative inline-flex w-10 h-6 shrink-0 cursor-pointer rounded-full p-0.5 bg-primary transition-colors duration-200">
                          <span className="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 translate-x-4" />
                        </button>
                      </div>

                      <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-xl border border-border/40">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold">Disabled Unchecked</span>
                        <button type="button" role="switch" aria-checked="false" disabled className="relative inline-flex w-10 h-6 shrink-0 cursor-not-allowed rounded-full p-0.5 bg-slate-300/40 dark:bg-slate-700/40 opacity-40">
                          <span className="w-5 h-5 rounded-full bg-white/80 shadow-md" />
                        </button>
                      </div>

                      <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-xl border border-border/40">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold">Disabled Checked</span>
                        <button type="button" role="switch" aria-checked="true" disabled className="relative inline-flex w-10 h-6 shrink-0 cursor-not-allowed rounded-full p-0.5 bg-primary/45 opacity-40">
                          <span className="w-5 h-5 rounded-full bg-white/80 shadow-md transform translate-x-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Color Role Variations</h3>
                    <div className="flex flex-wrap gap-6 items-center">
                      <div className="flex items-center gap-2.5">
                        <button type="button" role="switch" aria-checked="true" className="relative inline-flex w-10 h-6 shrink-0 cursor-pointer rounded-full p-0.5 bg-primary transition-colors duration-200">
                          <span className="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 translate-x-4" />
                        </button>
                        <span className="text-xs font-medium text-foreground">Primary (Navy)</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <button type="button" role="switch" aria-checked="true" className="relative inline-flex w-10 h-6 shrink-0 cursor-pointer rounded-full p-0.5 bg-secondary transition-colors duration-200">
                          <span className="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 translate-x-4" />
                        </button>
                        <span className="text-xs font-medium text-foreground">Secondary (Teal)</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <button type="button" role="switch" aria-checked="true" className="relative inline-flex w-10 h-6 shrink-0 cursor-pointer rounded-full p-0.5 bg-emerald-500 transition-colors duration-200">
                          <span className="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 translate-x-4" />
                        </button>
                        <span className="text-xs font-medium text-foreground">Success (Green)</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <button type="button" role="switch" aria-checked="true" className="relative inline-flex w-10 h-6 shrink-0 cursor-pointer rounded-full p-0.5 bg-rose-500 transition-colors duration-200">
                          <span className="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 translate-x-4" />
                        </button>
                        <span className="text-xs font-medium text-foreground">Destructive (Red)</span>
                      </div>
                    </div>
                  </div>

                  {/* Sizes */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Size Variations</h3>
                    <div className="flex flex-wrap gap-8 items-center">
                      <div className="flex items-center gap-2.5">
                        <button type="button" role="switch" aria-checked="true" className="relative inline-flex w-8 h-5 shrink-0 cursor-pointer rounded-full p-0.5 bg-primary transition-colors duration-200">
                          <span className="w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-200 translate-x-3" />
                        </button>
                        <span className="text-xs text-foreground">Small (sm)</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <button type="button" role="switch" aria-checked="true" className="relative inline-flex w-10 h-6 shrink-0 cursor-pointer rounded-full p-0.5 bg-primary transition-colors duration-200">
                          <span className="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 translate-x-4" />
                        </button>
                        <span className="text-xs text-foreground font-medium">Medium (md)</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <button type="button" role="switch" aria-checked="true" className="relative inline-flex w-12 h-7 shrink-0 cursor-pointer rounded-full p-0.5 bg-primary transition-colors duration-200">
                          <span className="w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-200 translate-x-5" />
                        </button>
                        <span className="text-xs text-foreground font-semibold">Large (lg)</span>
                      </div>
                    </div>
                  </div>

                  {/* Form Layouts */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Common Layout Configurations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Left Label */}
                      <div className="bg-card border border-border rounded-xl p-5 shadow-xs space-y-4">
                        <div className="text-[10px] text-muted-foreground uppercase font-bold">Left Aligned Label</div>
                        <div className="flex items-center justify-between p-3 bg-muted/20 border border-border/50 rounded-lg">
                          <span className="text-xs font-semibold text-foreground">Toggle Platform Emails</span>
                          <button type="button" role="switch" aria-checked="true" className="relative inline-flex w-10 h-6 shrink-0 cursor-pointer rounded-full p-0.5 bg-primary transition-colors duration-200">
                            <span className="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 translate-x-4" />
                          </button>
                        </div>
                      </div>

                      {/* Right Label */}
                      <div className="bg-card border border-border rounded-xl p-5 shadow-xs space-y-4">
                        <div className="text-[10px] text-muted-foreground uppercase font-bold">Right Aligned Label</div>
                        <div className="flex items-center gap-3 p-3 bg-muted/20 border border-border/50 rounded-lg">
                          <button type="button" role="switch" aria-checked="false" className="relative inline-flex w-10 h-6 shrink-0 cursor-pointer rounded-full p-0.5 bg-slate-300 dark:bg-slate-700 transition-colors duration-200">
                            <span className="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 translate-x-0" />
                          </button>
                          <span className="text-xs font-semibold text-foreground">Require Multi-Signature Verification</span>
                        </div>
                      </div>

                      {/* Vertical Layout with description */}
                      <div className="bg-card border border-border rounded-xl p-5 shadow-xs space-y-4 md:col-span-2">
                        <div className="text-[10px] text-muted-foreground uppercase font-bold">Description Details Layout</div>
                        <div className="flex items-start justify-between gap-4 p-4 bg-muted/20 border border-border/50 rounded-lg">
                          <div className="space-y-1">
                            <h4 className="text-xs font-bold text-foreground">Liquidity Settlement Overdraft</h4>
                            <p className="text-[11px] text-muted-foreground leading-relaxed max-w-xl">
                              Allow settlement accounts to temporarily exceed overnight deposit allocations. Standard institutional lending interest rates apply.
                            </p>
                          </div>
                          <button type="button" role="switch" aria-checked="true" className="relative inline-flex w-10 h-6 shrink-0 cursor-pointer rounded-full p-0.5 bg-primary transition-colors duration-200 mt-0.5">
                            <span className="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 translate-x-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              <hr className="border-border/60" />

              {/* Playground */}
              <section id="playground" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Interactive Playground</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Experiment with sizing, colors, layouts, and system states.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Preview + Code */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Live Preview */}
                    <div className="bg-slate-50 dark:bg-slate-900/35 border border-border rounded-2xl p-8 flex items-center justify-center min-h-[160px] shadow-inner">
                      <div className="flex items-start justify-between gap-6 w-full max-w-md bg-card border border-border rounded-xl p-5 shadow-sm">
                        <div className="space-y-1">
                          <label className={`text-xs font-semibold block leading-tight ${playSwitchDisabled ? 'text-muted-foreground/60' : 'text-foreground'}`}>
                            {playSwitchLabel}
                          </label>
                          {playSwitchDescription && (
                            <p className={`text-[11px] leading-relaxed block ${playSwitchDisabled ? 'text-muted-foreground/40' : 'text-muted-foreground'}`}>
                              {playSwitchDescription}
                            </p>
                          )}
                          {playSwitchError && !playSwitchDisabled && (
                            <span className="text-[10.5px] font-semibold text-rose-500 flex items-center gap-1 mt-1 animate-pulse">
                              <AlertCircle size={12} /> State validation failed.
                            </span>
                          )}
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={playSwitchChecked}
                          disabled={playSwitchDisabled}
                          onClick={() => !playSwitchDisabled && setPlaySwitchChecked(!playSwitchChecked)}
                          className={`
                            relative inline-flex shrink-0 cursor-pointer rounded-full p-0.5 transition-all duration-200 ease-in-out outline-none focus-visible:shadow-[0_0_0_2px_var(--card),_0_0_0_4px_var(--border)]
                            ${playSwitchSize === 'sm' ? 'w-8 h-5' : playSwitchSize === 'lg' ? 'w-12 h-7' : 'w-10 h-6'}
                            ${playSwitchDisabled ? 'opacity-40 cursor-not-allowed' : ''}
                            ${playSwitchError && !playSwitchDisabled ? 'ring-2 ring-rose-500/80 ring-offset-2 ring-offset-card' : ''}
                            ${playSwitchChecked 
                              ? (playSwitchColor === 'secondary' ? 'bg-secondary' : playSwitchColor === 'success' ? 'bg-emerald-500' : playSwitchColor === 'destructive' ? 'bg-rose-500' : 'bg-primary') 
                              : 'bg-slate-300 dark:bg-slate-700'}
                          `}
                        >
                          <span
                            className={`
                              pointer-events-none block rounded-full bg-white shadow-md ring-0 transition-transform duration-200 ease-in-out
                              ${playSwitchSize === 'sm' ? 'w-4 h-4' : playSwitchSize === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}
                              ${playSwitchChecked 
                                ? (playSwitchSize === 'sm' ? 'translate-x-3' : playSwitchSize === 'lg' ? 'translate-x-5' : 'translate-x-4') 
                                : 'translate-x-0'}
                            `}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Generated Code */}
                    <div className="rounded-xl border border-border bg-slate-900 dark:bg-slate-950 overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Generated JSX code</span>
                        <button
                          onClick={() => {
                            const code = getSwitchCode();
                            navigator.clipboard.writeText(code);
                            setCopiedToken('switch-code');
                            setTimeout(() => setCopiedToken(null), 2000);
                          }}
                          className="text-[10px] text-slate-400 hover:text-slate-200 transition flex items-center gap-1 cursor-pointer"
                        >
                          <Copy size={11} />
                          Copy
                        </button>
                      </div>
                      <pre className="p-4 text-[11px] text-slate-300 font-mono overflow-x-auto leading-relaxed whitespace-pre-wrap">{getSwitchCode()}</pre>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="lg:col-span-5 space-y-5 bg-card border border-border rounded-2xl p-5 shadow-hnh-sm">
                    <h3 className="text-xs font-bold text-foreground">Controls</h3>

                    {/* Label input */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Label</label>
                      <input
                        type="text"
                        value={playSwitchLabel}
                        onChange={e => setPlaySwitchLabel(e.target.value)}
                        className="w-full text-xs bg-muted/50 border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none"
                        maxLength={48}
                      />
                    </div>

                    {/* Description input */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Description</label>
                      <textarea
                        value={playSwitchDescription}
                        onChange={e => setPlaySwitchDescription(e.target.value)}
                        rows={2}
                        className="w-full text-xs bg-muted/50 border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none resize-none"
                        maxLength={120}
                      />
                    </div>

                    {/* Color selection */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Color Role</label>
                      <div className="grid grid-cols-2 gap-2">
                        {(['primary', 'secondary', 'success', 'destructive'] as const).map(c => (
                          <button
                            key={c}
                            onClick={() => setPlaySwitchColor(c)}
                            className={`py-1.5 rounded-lg text-[11px] font-semibold border transition capitalize ${playSwitchColor === c ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/40 border-border text-muted-foreground hover:border-slate-400'}`}
                          >{c}</button>
                        ))}
                      </div>
                    </div>

                    {/* Size selection */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Size Scale</label>
                      <div className="flex gap-2">
                        {(['sm', 'md', 'lg'] as const).map(s => (
                          <button
                            key={s}
                            onClick={() => setPlaySwitchSize(s)}
                            className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold border transition uppercase ${playSwitchSize === s ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/40 border-border text-muted-foreground hover:border-slate-400'}`}
                          >{s}</button>
                        ))}
                      </div>
                    </div>

                    {/* Simulator States Toggles */}
                    <div className="space-y-3 pt-3 border-t border-border/50">
                      
                      {/* Checked state */}
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-muted-foreground">Toggle State (Checked)</span>
                        <button
                          onClick={() => setPlaySwitchChecked(!playSwitchChecked)}
                          className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${playSwitchChecked ? 'bg-secondary-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                        >
                          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${playSwitchChecked ? 'translate-x-4' : 'translate-x-0'}`} />
                        </button>
                      </div>

                      {/* Disabled switch simulator */}
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-muted-foreground">Simulate Disabled</span>
                        <button
                          onClick={() => setPlaySwitchDisabled(!playSwitchDisabled)}
                          className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${playSwitchDisabled ? 'bg-secondary-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                        >
                          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${playSwitchDisabled ? 'translate-x-4' : 'translate-x-0'}`} />
                        </button>
                      </div>

                      {/* Error switch simulator */}
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-muted-foreground">Simulate Error</span>
                        <button
                          onClick={() => setPlaySwitchError(!playSwitchError)}
                          className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${playSwitchError ? 'bg-secondary-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                        >
                          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${playSwitchError ? 'translate-x-4' : 'translate-x-0'}`} />
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              </section>

              {/* Navigation Block */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a
                  href="#components/select"
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    <ChevronLeft size={16} /> Select
                  </span>
                </a>
                <a
                  href="#components/card"
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[4px] transition-transform duration-200 flex items-center gap-1.5">
                    Card <ChevronRight size={16} />
                  </span>
                </a>
              </div>

            </div>
          )}

          {/* ── CARD PAGE ────────────────────────────────────────────── */}
          {currentPath === 'components/card' && (
            <div className="space-y-12 max-w-5xl mx-auto py-4 animate-fade-in">

              {/* Header */}
              <section className="space-y-3">
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">Components</div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100" id="overview">
                  Card
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
                  A content container used to group related information and actions. Cards are the fundamental visual building block of our dashboard grid interfaces, helping segment complex financial charts, portfolio tables, and quick action headers.
                </p>

                {/* Accessibility Contract */}
                <div className="bg-accent/40 border border-border/80 rounded-xl p-4.5 text-xs text-muted-foreground space-y-2 mt-4 max-w-3xl">
                  <div className="font-bold text-foreground flex items-center gap-2">
                    <Accessibility size={14} className="text-secondary-500" />
                    Accessibility Contract (WCAG 2.1 AA)
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 pl-1">
                    <li>Uses standard heading tags (<code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">h3</code> or <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">h4</code>) within the card header to preserve document outline structure.</li>
                    <li>If the card functions as a click destination, it must carry a semantic <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">role="button"</code> or <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">role="link"</code> and have a focusable <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">tabIndex={0}</code>.</li>
                    <li>Interactive cards respond to keyboard toggles, firing click handlers on <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">Space</code> and <code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">Enter</code>.</li>
                    <li>Focus outline states use the subtle primary blue glow (<code className="font-mono text-[11px] text-secondary-500 bg-muted px-1 py-0.5 rounded">focus-visible:ring-primary-200/40</code>) to prevent visual clutter while ensuring accessibility.</li>
                  </ul>
                </div>
              </section>

              <hr className="border-border/60" />

              {/* Specimens */}
              <section id="specimen" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Component Specimens</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Visual archetypes, padding variants, elevations, and practical dashboard widget examples.
                  </p>
                </div>

                <div className="space-y-10">

                  {/* Visual Archetypes */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Visual Archetypes</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      
                      {/* Solid */}
                      <div className="bg-card border border-border/80 rounded-xl p-5 shadow-hnh-sm space-y-3">
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-foreground">Solid Card</h4>
                          <p className="text-[10px] text-muted-foreground">Default card with a subtle border and clean background fill.</p>
                        </div>
                        <div className="text-[11px] text-foreground/80 font-light pt-2 border-t border-border/40">Standard container.</div>
                      </div>

                      {/* Flat */}
                      <div className="bg-muted/30 border border-transparent rounded-xl p-5 space-y-3">
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-foreground">Flat / Muted Card</h4>
                          <p className="text-[10px] text-muted-foreground">Border-free layout using a light slate fill for low-emphasis lists.</p>
                        </div>
                        <div className="text-[11px] text-foreground/80 font-light pt-2 border-t border-border/20">Muted container.</div>
                      </div>

                      {/* Glassmorphic */}
                      <div className="bg-card/40 backdrop-blur-md border border-border/40 rounded-xl p-5 shadow-hnh-sm space-y-3">
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-foreground">Glassmorphic Card</h4>
                          <p className="text-[10px] text-muted-foreground">Semi-transparent overlay styling for modern dark mode panels.</p>
                        </div>
                        <div className="text-[11px] text-foreground/80 font-light pt-2 border-t border-border/30">Blur container.</div>
                      </div>

                      {/* Left Accent */}
                      <div className="bg-card border border-border/80 border-l-4 border-l-primary rounded-r-xl rounded-l-xs p-5 shadow-hnh-sm space-y-3">
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-foreground">Left Accent Card</h4>
                          <p className="text-[10px] text-muted-foreground">Features a primary blue brand accent block on the left border edge.</p>
                        </div>
                        <div className="text-[11px] text-foreground/80 font-light pt-2 border-t border-border/40">Accent container.</div>
                      </div>

                    </div>
                  </div>

                  {/* Shadows & Interactive */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Interactive & Focus States</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      
                      {/* Static Card */}
                      <div className="bg-card border border-border/80 rounded-xl p-6 shadow-hnh-sm space-y-3">
                        <span className="text-[9px] uppercase font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded inline-block">Static Container</span>
                        <h4 className="text-xs font-bold text-foreground">Standard Layout</h4>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          Static cards group informational assets that carry no actions or page redirections.
                        </p>
                      </div>

                      {/* Interactive Card */}
                      <div 
                        tabIndex={0}
                        className="bg-card border border-border/80 rounded-xl p-6 shadow-hnh-sm hover:-translate-y-1 hover:shadow-hnh-md hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-200/40 ring-offset-2 ring-offset-background space-y-3"
                      >
                        <span className="text-[9px] uppercase font-bold text-secondary-500 bg-secondary/10 px-2 py-0.5 rounded inline-block">Clickable Action</span>
                        <h4 className="text-xs font-bold text-foreground">Interactive Card</h4>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          Hover or focus this container to see the premium translation shift, shadow expansion, and accessible outline.
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Dashboard Widgets */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 pb-2">Practical Dashboard Widgets</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                      {/* Yield Performance Widget */}
                      <div className="bg-card border border-border rounded-2xl p-5 shadow-hnh-sm flex flex-col justify-between min-h-[160px]">
                        <div className="flex justify-between items-start">
                          <div className="space-y-0.5">
                            <h4 className="text-xs font-bold text-foreground">SCS Growth Tracker</h4>
                            <p className="text-[10px] text-muted-foreground">Bastheon Custody Accruals</p>
                          </div>
                          <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-semibold leading-none text-emerald-700 dark:text-emerald-300">
                            +4.82%
                          </span>
                        </div>
                        <div className="py-3">
                          <div className="text-2xl font-extrabold text-primary dark:text-slate-100">$1,424,208.50</div>
                          <div className="text-[9px] text-muted-foreground mt-0.5">USD reporting currency ledger index</div>
                        </div>
                        <div className="border-t border-border/40 pt-2 flex justify-between items-center text-[10px]">
                          <span className="text-muted-foreground">Last updated 2m ago</span>
                          <a href="#components/card" className="text-secondary-500 hover:underline font-semibold flex items-center gap-0.5">Details <ChevronRight size={10} /></a>
                        </div>
                      </div>

                      {/* Asset Allocation Widget */}
                      <div className="bg-card border border-border rounded-2xl p-5 shadow-hnh-sm flex flex-col justify-between min-h-[160px]">
                        <div className="space-y-0.5">
                          <h4 className="text-xs font-bold text-foreground">Asset Allocation</h4>
                          <p className="text-[10px] text-muted-foreground">Portfolio Diversification Index</p>
                        </div>
                        <div className="space-y-2 py-3">
                          <div className="space-y-1">
                            <div className="flex justify-between text-[10px] font-medium">
                              <span>Private Credit</span>
                              <span>65%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                              <div className="bg-primary h-1.5 rounded-full" style={{ width: '65%' }} />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-[10px] font-medium">
                              <span>Structured Cash</span>
                              <span>35%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                              <div className="bg-secondary h-1.5 rounded-full" style={{ width: '35%' }} />
                            </div>
                          </div>
                        </div>
                        <div className="border-t border-border/40 pt-2 text-[9px] text-muted-foreground">
                          Diversification metrics adhere to custody limits.
                        </div>
                      </div>

                      {/* Custody Signature Widget */}
                      <div className="bg-card border border-border rounded-2xl p-5 shadow-hnh-sm flex flex-col justify-between min-h-[160px]">
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-foreground">Signature Pending</h4>
                          <p className="text-[10px] text-muted-foreground">Custodial Ledger Settlement</p>
                          <div className="bg-amber-500/10 border border-amber-500/25 rounded-lg p-2.5 mt-2 flex gap-2">
                            <AlertCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                            <p className="text-[10px] text-amber-700 dark:text-amber-400 font-medium leading-normal">
                              Bastheon custody release requires approval from secondary signatory.
                            </p>
                          </div>
                        </div>
                        <div className="border-t border-border/40 pt-2.5 flex justify-end gap-2">
                          <button className="px-2.5 py-1 rounded bg-muted hover:bg-muted-foreground/15 text-[10px] font-bold text-muted-foreground transition">Reject</button>
                          <button className="px-2.5 py-1 rounded bg-primary text-primary-foreground text-[10px] font-bold hover:opacity-95 transition">Approve</button>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </section>

              <hr className="border-border/60" />

              {/* Playground */}
              <section id="playground" className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary dark:text-slate-100">Interactive Playground</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Compose card backdrops, margins, rounded corners, and action styles in real time.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Preview + Code */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Live Preview */}
                    <div className="bg-slate-50 dark:bg-slate-900/35 border border-border rounded-2xl p-8 flex items-center justify-center min-h-[220px] shadow-inner">
                      <div 
                        tabIndex={playCardInteractive ? 0 : undefined}
                        className={[
                          playCardRadius,
                          playCardPadding === 'sm' ? 'p-4' : playCardPadding === 'lg' ? 'p-8' : 'p-6',
                          playCardShadow !== 'none' ? playCardShadow : '',
                          playCardBg === 'flat' && 'bg-muted/30 border border-transparent',
                          playCardBg === 'solid' && 'bg-card border border-border/80',
                          playCardBg === 'glass' && 'bg-card/40 backdrop-blur-md border border-border/40',
                          playCardBg === 'accent' && 'bg-card border border-border/80 border-l-4 border-l-primary',
                          playCardInteractive && 'hover:-translate-y-1 hover:shadow-hnh-lg hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-primary-200/40 ring-offset-2 ring-offset-background',
                          'w-full max-w-md bg-card transition-all duration-300'
                        ].filter(Boolean).join(' ')}
                      >
                        {/* Header */}
                        <div className="space-y-1.5">
                          <h3 className="text-sm font-bold text-foreground leading-none">
                            {playCardTitle}
                          </h3>
                          {playCardSubtitle && (
                            <p className="text-[11px] text-muted-foreground leading-relaxed">
                              {playCardSubtitle}
                            </p>
                          )}
                        </div>

                        {/* Content Body */}
                        <div className="py-4 text-xs text-foreground/90 font-light leading-relaxed border-t border-border/40 mt-4">
                          Institutional liquidity balances settle instantly via multi-signature smart contracts. Standard yield cycles accrue at 4.8% APY.
                        </div>

                        {/* Footer */}
                        {playCardShowFooter && (
                          <div className="flex justify-end gap-2.5 pt-4 border-t border-border/40 mt-1">
                            <button className="px-3 py-1.5 rounded-lg border border-border text-[11px] font-semibold hover:bg-muted transition cursor-pointer">Cancel</button>
                            <button className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-[11px] font-semibold hover:opacity-95 transition cursor-pointer">Approve</button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Generated Code */}
                    <div className="rounded-xl border border-border bg-slate-900 dark:bg-slate-950 overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Generated JSX code</span>
                        <button
                          onClick={() => {
                            const code = getCardCode();
                            navigator.clipboard.writeText(code);
                            setCopiedToken('card-code');
                            setTimeout(() => setCopiedToken(null), 2000);
                          }}
                          className="text-[10px] text-slate-400 hover:text-slate-200 transition flex items-center gap-1 cursor-pointer"
                        >
                          <Copy size={11} />
                          Copy
                        </button>
                      </div>
                      <pre className="p-4 text-[11px] text-slate-300 font-mono overflow-x-auto leading-relaxed whitespace-pre-wrap">{getCardCode()}</pre>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="lg:col-span-5 space-y-5 bg-card border border-border rounded-2xl p-5 shadow-hnh-sm">
                    <h3 className="text-xs font-bold text-foreground">Controls</h3>

                    {/* Title input */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Title</label>
                      <input
                        type="text"
                        value={playCardTitle}
                        onChange={e => setPlayCardTitle(e.target.value)}
                        className="w-full text-xs bg-muted/50 border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none"
                        maxLength={48}
                      />
                    </div>

                    {/* Subtitle input */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Subtitle</label>
                      <textarea
                        value={playCardSubtitle}
                        onChange={e => setPlayCardSubtitle(e.target.value)}
                        rows={2}
                        className="w-full text-xs bg-muted/50 border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none resize-none"
                        maxLength={120}
                      />
                    </div>

                    {/* Theme Bg Fill */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Visual Archetype</label>
                      <div className="grid grid-cols-2 gap-2">
                        {(['solid', 'flat', 'glass', 'accent'] as const).map(b => (
                          <button
                            key={b}
                            onClick={() => setPlayCardBg(b)}
                            className={`py-1.5 rounded-lg text-[11px] font-semibold border transition capitalize ${playCardBg === b ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/40 border-border text-muted-foreground hover:border-slate-400'}`}
                          >{b}</button>
                        ))}
                      </div>
                    </div>

                    {/* Corner Radius */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Corner Radius</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { label: 'lg (8px)', val: 'rounded-lg' },
                          { label: 'xl (12px)', val: 'rounded-xl' },
                          { label: '2xl (16px)', val: 'rounded-2xl' }
                        ].map(r => (
                          <button
                            key={r.val}
                            onClick={() => setPlayCardRadius(r.val)}
                            className={`py-1.5 rounded-lg text-[10px] font-semibold border transition ${playCardRadius === r.val ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/40 border-border text-muted-foreground hover:border-slate-400'}`}
                          >{r.label}</button>
                        ))}
                      </div>
                    </div>

                    {/* Padding Size */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Padding</label>
                      <div className="flex gap-2">
                        {(['sm', 'md', 'lg'] as const).map(p => (
                          <button
                            key={p}
                            onClick={() => setPlayCardPadding(p)}
                            className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold border transition uppercase ${playCardPadding === p ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/40 border-border text-muted-foreground hover:border-slate-400'}`}
                          >{p}</button>
                        ))}
                      </div>
                    </div>

                    {/* Elevations / Shadows */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Shadow Elevation</label>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { label: 'None', val: 'none' },
                          { label: 'sm', val: 'shadow-hnh-sm' },
                          { label: 'md', val: 'shadow-hnh-md' },
                          { label: 'lg', val: 'shadow-hnh-lg' }
                        ].map(s => (
                          <button
                            key={s.val}
                            onClick={() => setPlayCardShadow(s.val)}
                            className={`py-1.5 rounded-lg text-[10px] font-semibold border transition ${playCardShadow === s.val ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted/40 border-border text-muted-foreground hover:border-slate-400'}`}
                          >{s.label}</button>
                        ))}
                      </div>
                    </div>

                    {/* Playground Simulator Toggles */}
                    <div className="space-y-3 pt-3 border-t border-border/50">
                      
                      {/* Show Footer */}
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-muted-foreground">Show Card Footer Actions</span>
                        <button
                          onClick={() => setPlayCardShowFooter(!playCardShowFooter)}
                          className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${playCardShowFooter ? 'bg-secondary-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                        >
                          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${playCardShowFooter ? 'translate-x-4' : 'translate-x-0'}`} />
                        </button>
                      </div>

                      {/* Simulate Interactivity */}
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-muted-foreground">Interactive Card Mode</span>
                        <button
                          onClick={() => setPlayCardInteractive(!playCardInteractive)}
                          className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${playCardInteractive ? 'bg-secondary-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                        >
                          <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${playCardInteractive ? 'translate-x-4' : 'translate-x-0'}`} />
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              </section>

              {/* Navigation Block */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a
                  href="#components/switch"
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    <ChevronLeft size={16} /> Switch
                  </span>
                </a>
                <a
                  href="#components/accordion"
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[4px] transition-transform duration-200 flex items-center gap-1.5">
                    Accordion <ChevronRight size={16} />
                  </span>
                </a>
              </div>

            </div>
          )}

          {/* ── ALERT DIALOG PAGE ────────────────────────────────────────── */}
          {currentPath === 'components/alert-dialog' && (
            <div className="space-y-12 max-w-5xl mx-auto py-4 animate-fade-in">
              {/* Header */}
              <section className="space-y-3">
                <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">Components</div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary dark:text-slate-100" id="overview">
                  Alert Dialog
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
                  An alert dialog interrupts the user with important content and expects a confirmation or warning acknowledgment. It locks the page flow and overlays the backdrop with customizable blurs.
                </p>
              </section>

              {/* Accessibility Contract */}
              <section className="bg-card border border-border/80 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 dark:bg-sky-500/20 text-sky-500 flex items-center justify-center">
                    <Accessibility size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-primary dark:text-slate-100">Accessibility Standards (WCAG 2.1 AA)</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-xs text-muted-foreground leading-relaxed font-light">
                  <div className="space-y-3">
                    <h4 className="font-bold text-foreground">Aria & Role Contracts</h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>The container element must hold <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono text-[10.5px]">role="alertdialog"</code>.</li>
                      <li>Use <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono text-[10.5px]">aria-modal="true"</code> to instruct screen readers to restrict navigation within dialog bounds.</li>
                      <li>Assign <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono text-[10.5px]">aria-labelledby</code> to target the dialog title element.</li>
                      <li>Assign <code className="bg-muted px-1 py-0.5 rounded text-foreground font-mono text-[10.5px]">aria-describedby</code> to target the description paragraph.</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-foreground">Keyboard Interactions</h4>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li><strong>Escape key</strong>: Must close the dialog without triggering any actions.</li>
                      <li><strong>Focus Trapping</strong>: Tab navigation must loop back to the first interactive element inside the dialog panel.</li>
                      <li><strong>Focus Restoration</strong>: Upon dismissal, keyboard focus must return back to the original trigger button.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Component Specimens */}
              <section className="space-y-6" id="specimen">
                <div className="border-b border-border/60 pb-3">
                  <h2 className="text-lg font-bold text-primary dark:text-slate-100">Component Specimens</h2>
                  <p className="text-xs text-muted-foreground font-light">Standard visual variations for confirm, destructive, and informational alert confirmations.</p>
                </div>

                {/* Inline variations representation for documentation convenience */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Confirm Inline specimen */}
                  <div className="bg-card border border-border/80 rounded-2xl p-5 flex flex-col justify-between shadow-xs">
                    <div className="space-y-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full inline-block">Confirm Archetype</span>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={16} />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-foreground">Commit Portfolio Allocation</h4>
                          <p className="text-[10.5px] text-muted-foreground leading-relaxed">Confirm and lock transaction logs across HK custodian indices. Daily yields start accruing immediately.</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-5 pt-3 border-t border-border/40">
                      <button className="px-2.5 py-1 text-[10px] border border-border text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition font-semibold">Cancel</button>
                      <button className="px-2.5 py-1 text-[10px] bg-primary text-primary-foreground rounded-md hover:opacity-90 transition font-semibold">Commit Allocation</button>
                    </div>
                  </div>

                  {/* Destructive Inline specimen */}
                  <div className="bg-card border border-border/80 rounded-2xl p-5 flex flex-col justify-between shadow-xs">
                    <div className="space-y-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full inline-block">Destructive Archetype</span>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
                          <AlertTriangle size={16} />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-foreground">Delete Vault ingester?</h4>
                          <p className="text-[10.5px] text-muted-foreground leading-relaxed">This completely erases the vault pipeline config. Historical transaction tracking files cannot be recovered.</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-5 pt-3 border-t border-border/40">
                      <button className="px-2.5 py-1 text-[10px] border border-border text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition font-semibold">Cancel</button>
                      <button className="px-2.5 py-1 text-[10px] bg-destructive text-destructive-foreground rounded-md hover:bg-destructive-600 transition font-semibold">Delete Ingester</button>
                    </div>
                  </div>

                  {/* Info Inline specimen */}
                  <div className="bg-card border border-border/80 rounded-2xl p-5 flex flex-col justify-between shadow-xs">
                    <div className="space-y-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-sky-500 bg-sky-500/10 px-2 py-0.5 rounded-full inline-block">Info Archetype</span>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-sky-500/10 text-sky-500 flex items-center justify-center shrink-0">
                          <AlertCircle size={16} />
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-foreground">Maintenance Window Scheduled</h4>
                          <p className="text-[10.5px] text-muted-foreground leading-relaxed">A standard smart contract re-audit is scheduled. Quick trades might suffer slight latency delays.</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-5 pt-3 border-t border-border/40">
                      <button className="px-2.5 py-1 text-[10px] border border-border text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition font-semibold">Dismiss</button>
                      <button className="px-2.5 py-1 text-[10px] bg-secondary-500 text-white rounded-md hover:opacity-90 transition font-semibold">Acknowledge</button>
                    </div>
                  </div>
                </div>

                {/* Interactive Specimens overlay launchers */}
                <div className="p-6 border border-dashed border-border bg-card/45 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center md:text-left">
                    <h4 className="text-xs font-bold text-foreground">Launch Full Overlay Specimens</h4>
                    <p className="text-[11px] text-muted-foreground font-light">Trigger real-time instances of overlays with framer-motion entry transitions and focus management.</p>
                  </div>
                  <div className="flex flex-wrap gap-2.5 justify-center">
                    <button
                      onClick={() => setSpecimenConfirmOpen(true)}
                      className="px-3 py-1.5 text-[10.5px] font-semibold bg-primary text-primary-foreground hover:opacity-95 rounded-lg transition shadow-xs cursor-pointer"
                    >
                      Trigger Confirm Modal
                    </button>
                    <button
                      onClick={() => setSpecimenDestructiveOpen(true)}
                      className="px-3 py-1.5 text-[10.5px] font-semibold bg-destructive text-destructive-foreground hover:bg-destructive-600 rounded-lg transition shadow-xs cursor-pointer"
                    >
                      Trigger Destructive Modal
                    </button>
                    <button
                      onClick={() => setSpecimenInfoOpen(true)}
                      className="px-3 py-1.5 text-[10.5px] font-semibold bg-secondary-500 text-white hover:opacity-95 rounded-lg transition shadow-xs cursor-pointer"
                    >
                      Trigger Info Modal
                    </button>
                  </div>
                </div>
              </section>

              {/* Interactive Playground */}
              <section className="space-y-6" id="playground">
                <div className="border-b border-border/60 pb-3">
                  <h2 className="text-lg font-bold text-primary dark:text-slate-100">Interactive Playground</h2>
                  <p className="text-xs text-muted-foreground font-light">Customize overlay transitions, header details, action styles, and generate clean JSX output.</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Canvas Section */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="border border-border/80 rounded-2xl bg-slate-900/5 dark:bg-slate-900/10 p-12 min-h-[250px] flex items-center justify-center shadow-inner relative overflow-hidden">
                      <button
                        onClick={() => setPlayAlertDialogOpen(true)}
                        className="px-4 py-2.5 bg-primary text-primary-foreground text-xs font-semibold rounded-lg hover:opacity-95 transition shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-2 ring-offset-background cursor-pointer"
                      >
                        Launch Interactive Dialog
                      </button>
                    </div>

                    {/* Exporter Block */}
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                      <div className="border-b border-slate-800 bg-slate-900/60 px-4.5 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                          <div className="w-2.5 h-2.5 rounded-full bg-sky-500/80" />
                          <span>AlertDialog.tsx</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground font-bold tracking-wider uppercase">React / Framer Motion</span>
                      </div>
                      <div className="p-4 relative group/code">
                        <pre className="text-xs font-mono text-slate-300 overflow-x-auto whitespace-pre leading-relaxed select-all">
                          <code>{getAlertDialogCode()}</code>
                        </pre>
                        <button
                          onClick={() => handleCopy(getAlertDialogCode(), 'alert-dialog-code')}
                          className="absolute right-3.5 top-3.5 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-white rounded-lg p-2 transition cursor-pointer"
                          title="Copy Code"
                        >
                          <Copy size={13} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Settings Sidebar Panel */}
                  <div className="lg:col-span-5 bg-card border border-border/85 p-6 rounded-2xl space-y-6 shadow-sm">
                    <h3 className="text-xs font-bold text-foreground uppercase tracking-wider pb-2.5 border-b border-border/50">Control Panel</h3>
                    
                    {/* Header Input Group */}
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-bold text-muted-foreground uppercase tracking-wider block">Dialog Title</label>
                        <input
                          type="text"
                          value={playAlertDialogTitle}
                          onChange={(e) => setPlayAlertDialogTitle(e.target.value)}
                          className="w-full text-xs bg-muted/40 border border-border/85 rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-secondary-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-bold text-muted-foreground uppercase tracking-wider block">Description</label>
                        <textarea
                          rows={3}
                          value={playAlertDialogDescription}
                          onChange={(e) => setPlayAlertDialogDescription(e.target.value)}
                          className="w-full text-xs bg-muted/40 border border-border/85 rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-secondary-500 resize-none font-light leading-relaxed"
                        />
                      </div>
                    </div>

                    {/* Variant Group */}
                    <div className="space-y-2">
                      <label className="text-[10.5px] font-bold text-muted-foreground uppercase tracking-wider block">Visual Variant</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['confirm', 'destructive', 'info'].map((v) => (
                          <button
                            key={v}
                            onClick={() => setPlayAlertDialogVariant(v as 'confirm' | 'destructive' | 'info')}
                            className={`py-1.5 text-[10px] font-bold border rounded-lg transition capitalize focus:outline-none cursor-pointer ${
                              playAlertDialogVariant === v
                                ? 'bg-secondary-500 text-white border-secondary-500'
                                : 'border-border bg-muted/30 text-muted-foreground hover:border-slate-400'
                            }`}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Backdrop Blur Group */}
                    <div className="space-y-2">
                      <label className="text-[10.5px] font-bold text-muted-foreground uppercase tracking-wider block">Backdrop Blur</label>
                      <div className="grid grid-cols-4 gap-2">
                        {(['none', 'sm', 'md', 'lg'] as const).map((b) => (
                          <button
                            key={b}
                            onClick={() => setPlayAlertDialogBlur(b)}
                            className={`py-1.5 text-[10px] font-bold border rounded-lg transition uppercase focus:outline-none cursor-pointer ${
                              playAlertDialogBlur === b
                                ? 'bg-secondary-500 text-white border-secondary-500'
                                : 'border-border bg-muted/30 text-muted-foreground hover:border-slate-400'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Custom Button Labels */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-bold text-muted-foreground uppercase tracking-wider block">Cancel Label</label>
                        <input
                          type="text"
                          value={playAlertDialogCancelText}
                          onChange={(e) => setPlayAlertDialogCancelText(e.target.value)}
                          className="w-full text-xs bg-muted/40 border border-border/85 rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-secondary-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-bold text-muted-foreground uppercase tracking-wider block">Action Label</label>
                        <input
                          type="text"
                          value={playAlertDialogActionText}
                          onChange={(e) => setPlayAlertDialogActionText(e.target.value)}
                          className="w-full text-xs bg-muted/40 border border-border/85 rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-secondary-500"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Navigation Block */}
              <div className="pt-8 border-t border-border/60 flex justify-between mt-12">
                <a
                  href="#components/alert"
                  className="group flex flex-col items-start gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-left w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Previous Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[-4px] transition-transform duration-200 flex items-center gap-1.5">
                    <ChevronLeft size={16} /> Alert
                  </span>
                </a>
                <a
                  href="#components/badge"
                  className="group flex flex-col items-end gap-1.5 p-4 rounded-xl border border-border hover:border-slate-400 dark:hover:border-slate-700 hover:bg-muted/30 transition text-right w-64 shadow-xs"
                >
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Next Section</span>
                  <span className="font-bold text-sm text-secondary dark:text-secondary group-hover:translate-x-[4px] transition-transform duration-200 flex items-center gap-1.5">
                    Badge <ChevronRight size={16} />
                  </span>
                </a>
              </div>

              {/* Overlays Rendering Blocks */}
              <AnimatePresence>
                {specimenConfirmOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-desc">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setSpecimenConfirmOpen(false)}
                      className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="relative bg-card border border-border/80 text-foreground w-full max-w-md p-6 rounded-xl shadow-hnh-xl z-10 flex flex-col gap-4 focus-visible:outline-none"
                      tabIndex={-1}
                    >
                      <button
                        onClick={() => setSpecimenConfirmOpen(false)}
                        className="absolute top-4.5 right-4.5 text-muted-foreground hover:text-foreground rounded-lg p-1 hover:bg-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-2 ring-offset-background cursor-pointer"
                        aria-label="Close dialog"
                      >
                        <X size={14} />
                      </button>
                      <div className="flex gap-3.5">
                        <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                          <CheckCircle2 size={18} />
                        </div>
                        <div className="space-y-1.5 flex-1">
                          <h3 id="confirm-title" className="text-sm font-bold leading-none">Commit Portfolio Allocation</h3>
                          <p id="confirm-desc" className="text-[11px] text-muted-foreground leading-relaxed font-light">Confirm and lock transaction logs across HK custodian indices. Daily yields start accruing immediately.</p>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2.5 pt-4 border-t border-border/60">
                        <button
                          onClick={() => setSpecimenConfirmOpen(false)}
                          className="px-3.5 py-2 border border-border text-[11px] font-semibold rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => setSpecimenConfirmOpen(false)}
                          className="px-3.5 py-2 bg-primary text-primary-foreground text-[11px] font-semibold rounded-lg hover:opacity-95 transition cursor-pointer"
                        >
                          Commit Allocation
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}

                {specimenDestructiveOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="alertdialog" aria-modal="true" aria-labelledby="destructive-title" aria-describedby="destructive-desc">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setSpecimenDestructiveOpen(false)}
                      className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="relative bg-card border border-border/80 text-foreground w-full max-w-md p-6 rounded-xl shadow-hnh-xl z-10 flex flex-col gap-4 focus-visible:outline-none"
                      tabIndex={-1}
                    >
                      <button
                        onClick={() => setSpecimenDestructiveOpen(false)}
                        className="absolute top-4.5 right-4.5 text-muted-foreground hover:text-foreground rounded-lg p-1 hover:bg-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-2 ring-offset-background cursor-pointer"
                        aria-label="Close dialog"
                      >
                        <X size={14} />
                      </button>
                      <div className="flex gap-3.5">
                        <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-rose-500/10 text-rose-500">
                          <AlertTriangle size={18} />
                        </div>
                        <div className="space-y-1.5 flex-1">
                          <h3 id="destructive-title" className="text-sm font-bold leading-none">Delete Vault ingester?</h3>
                          <p id="destructive-desc" className="text-[11px] text-muted-foreground leading-relaxed font-light">This completely erases the vault pipeline config. Historical transaction tracking files cannot be recovered.</p>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2.5 pt-4 border-t border-border/60">
                        <button
                          onClick={() => setSpecimenDestructiveOpen(false)}
                          className="px-3.5 py-2 border border-border text-[11px] font-semibold rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => setSpecimenDestructiveOpen(false)}
                          className="px-3.5 py-2 bg-destructive text-destructive-foreground text-[11px] font-semibold rounded-lg hover:bg-destructive-600 transition cursor-pointer"
                        >
                          Delete Ingester
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}

                {specimenInfoOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="alertdialog" aria-modal="true" aria-labelledby="info-title" aria-describedby="info-desc">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setSpecimenInfoOpen(false)}
                      className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="relative bg-card border border-border/80 text-foreground w-full max-w-md p-6 rounded-xl shadow-hnh-xl z-10 flex flex-col gap-4 focus-visible:outline-none"
                      tabIndex={-1}
                    >
                      <button
                        onClick={() => setSpecimenInfoOpen(false)}
                        className="absolute top-4.5 right-4.5 text-muted-foreground hover:text-foreground rounded-lg p-1 hover:bg-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-2 ring-offset-background cursor-pointer"
                        aria-label="Close dialog"
                      >
                        <X size={14} />
                      </button>
                      <div className="flex gap-3.5">
                        <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
                          <AlertCircle size={18} />
                        </div>
                        <div className="space-y-1.5 flex-1">
                          <h3 id="info-title" className="text-sm font-bold leading-none">Maintenance Window Scheduled</h3>
                          <p id="info-desc" className="text-[11px] text-muted-foreground leading-relaxed font-light">A standard smart contract re-audit is scheduled. Quick trades might suffer slight latency delays.</p>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2.5 pt-4 border-t border-border/60">
                        <button
                          onClick={() => setSpecimenInfoOpen(false)}
                          className="px-3.5 py-2 border border-border text-[11px] font-semibold rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
                        >
                          Dismiss
                        </button>
                        <button
                          onClick={() => setSpecimenInfoOpen(false)}
                          className="px-3.5 py-2 bg-secondary-500 text-white text-[11px] font-semibold rounded-lg hover:opacity-95 transition cursor-pointer"
                        >
                          Acknowledge
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}

                {playAlertDialogOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="alertdialog" aria-modal="true" aria-labelledby="play-title" aria-describedby="play-desc">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setPlayAlertDialogOpen(false)}
                      className={`fixed inset-0 bg-slate-950/60 ${
                        playAlertDialogBlur === 'none'
                          ? 'backdrop-blur-none'
                          : playAlertDialogBlur === 'sm'
                          ? 'backdrop-blur-xs'
                          : playAlertDialogBlur === 'md'
                          ? 'backdrop-blur-md'
                          : 'backdrop-blur-lg'
                      }`}
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="relative bg-card border border-border/80 text-foreground w-full max-w-md p-6 rounded-xl shadow-hnh-xl z-10 flex flex-col gap-4 focus-visible:outline-none"
                      tabIndex={-1}
                    >
                      <button
                        onClick={() => setPlayAlertDialogOpen(false)}
                        className="absolute top-4.5 right-4.5 text-muted-foreground hover:text-foreground rounded-lg p-1 hover:bg-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-2 ring-offset-background cursor-pointer"
                        aria-label="Close dialog"
                      >
                        <X size={14} />
                      </button>
                      <div className="flex gap-3.5">
                        {playAlertDialogVariant === 'destructive' ? (
                          <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-rose-500/10 text-rose-500">
                            <AlertTriangle size={18} />
                          </div>
                        ) : playAlertDialogVariant === 'info' ? (
                          <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-sky-500/10 text-sky-500">
                            <AlertCircle size={18} />
                          </div>
                        ) : (
                          <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                            <CheckCircle2 size={18} />
                          </div>
                        )}
                        <div className="space-y-1.5 flex-1">
                          <h3 id="play-title" className="text-sm font-bold leading-none">{playAlertDialogTitle}</h3>
                          <p id="play-desc" className="text-[11px] text-muted-foreground leading-relaxed font-light">{playAlertDialogDescription}</p>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2.5 pt-4 border-t border-border/60">
                        <button
                          onClick={() => setPlayAlertDialogOpen(false)}
                          className="px-3.5 py-2 border border-border text-[11px] font-semibold rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer"
                        >
                          {playAlertDialogCancelText}
                        </button>
                        <button
                          onClick={() => setPlayAlertDialogOpen(false)}
                          className={`px-3.5 py-2 text-[11px] font-semibold rounded-lg transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 ring-offset-2 ring-offset-background ${
                            playAlertDialogVariant === 'destructive'
                              ? 'bg-destructive text-destructive-foreground hover:bg-destructive-600 focus-visible:ring-destructive'
                              : playAlertDialogVariant === 'info'
                              ? 'bg-secondary-500 text-white hover:opacity-95 focus-visible:ring-secondary-500'
                              : 'bg-primary text-primary-foreground hover:opacity-95 focus-visible:ring-primary'
                          }`}
                        >
                          {playAlertDialogActionText}
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>

            </div>
          )}

          {/* Fallback Placeholder view for other pages */}
          {!implementedPaths.includes(currentPath) && (
            <div className="space-y-6 max-w-4xl" id="overview">
              <div className="p-8 border border-dashed border-border rounded-xl bg-card text-center space-y-4 shadow-xs">
                <div className="inline-flex w-12 h-12 rounded-full bg-primary/10 text-primary items-center justify-center text-xl font-bold">!</div>
                <h2 className="text-lg font-bold text-primary dark:text-slate-100 capitalize">{activeItem.name} Page</h2>
                <p className="text-xs text-muted-foreground max-w-md mx-auto">
                  The **{activeItem.name}** documentation page under the **{activeItem.id.split('/')[0]}** category is scaffolded and ready for implementation in the next step.
                </p>
                <div className="text-xs font-mono bg-muted/65 p-2 rounded inline-block text-muted-foreground">
                  Active Page ID: {activeItem.id}
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Right Sidebar - Scroll-spy Page TOC (Wise Design layout) */}
        <aside className="hidden xl:block w-[220px] border-l border-border/70 px-5 py-8 sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto">
          <div className="space-y-4">
            <h5 className="text-[10px] font-extrabold tracking-widest text-muted-foreground uppercase">On this page</h5>
            <ul className="space-y-2.5">
              {getTOCItems().map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.getElementById(item.id)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-xs text-muted-foreground hover:text-primary dark:hover:text-secondary block transition font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Global Toast for clipboard action feedback */}
      {copiedToken && (
        <div className="fixed bottom-5 right-5 bg-slate-900 text-slate-100 border border-slate-800 text-xs px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-2 animate-bounce z-50">
          <Check size={14} className="text-emerald-400" />
          <span>Copied value successfully!</span>
        </div>
      )}
    </div>
  )
}

export default App
