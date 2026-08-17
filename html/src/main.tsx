import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* reducedMotion="user" makes Framer honour prefers-reduced-motion;
        the CSS counterpart for non-Framer animations lives in index.css. */}
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>,
)
