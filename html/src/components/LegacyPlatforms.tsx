import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  ArrowLeft, 
  Copy, 
  Check, 
  ShieldCheck, 
  Layers, 
  Zap, 
  Server, 
  Code2, 
  Globe, 
  Activity, 
  BookOpen, 
  Palette, 
  Boxes,
  Terminal,
  Building2,
  Users,
  RefreshCw,
  BarChart3,
  DollarSign,
  CheckCircle2,
  TrendingUp,
  LineChart,
  CreditCard,
  ShieldAlert,
  PieChart,
  UserCheck,
  Briefcase,
  LayoutDashboard,
  Type,
  ExternalLink
} from 'lucide-react';

export interface PlatformData {
  id: string;
  name: string;
  badgeTitle: string;
  category: 'payments' | 'compliance' | 'enterprise' | 'hrms';
  tagline: string;
  description: string;
  para1: string;
  para2: string;
  regions: string;
  version: string;
  icon: React.ElementType;
  primaryColorHex: string;
  techStack: string[];
  capabilities: { title: string; desc: string; detail: string; icon: React.ElementType }[];
  personas: { title: string; desc: string; role: string }[];
  apiPayload: { endpoint: string; method: string; description: string; json: string };
  metrics: { label: string; value: string }[];
  dsCompliancePct: number;
  websiteUrl?: string;
}

// Custom QoR3+ Vector Logo component loaded with official SVG path vectors and supporting dynamic fill theme tokens
export const Qor3Logo: React.FC<{ className?: string; primaryColor?: string; secondaryColor?: string }> = ({
  className = "h-8 w-20",
  primaryColor = "#023e63",
  secondaryColor = "#00bfb3"
}) => {
  return (
    <svg 
      viewBox="0 0 807.85 331.17" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <g>
        <path 
          fill={primaryColor} 
          d="M238.01,326.52c.04,3.73-1.13,4.74-4.74,4.64-10.29-.27-20.6-.33-30.89-.18-3.34.05-4.07-1.11-4.01-4.22.27-14.1.33-28.2.38-42.3,0-1.45.86-3.42-.79-4.26-1.41-.71-2.41,1-3.5,1.76-50.09,35.03-121.62,26.33-162.08-19.74-44.26-50.39-43.2-122.88,3.44-170.96,54.15-55.83,145.46-48.14,188.19,11.58,22.5,31.44,44.38,63.33,66.99,94.69,11.79,16.36,23.12,33.21,38.61,46.56,36.31,31.3,94.23,25.64,123.72-12.12,3.22-4.12,6.31-8.34,9.22-12.67,1.4-2.09,2.34-2.91,4.8-1.19,9.01,6.28,18.13,12.4,27.32,18.4,2.34,1.53,2.2,2.57.8,4.79-26.48,41.97-64.86,62.86-114.22,62.34-37.71-.4-68.73-16.68-93.03-45.13-23.57-27.59-43.65-57.81-64.37-87.53-11.05-15.86-21.89-31.9-33.73-47.16-20.53-26.46-56.21-37.17-88.36-27.41-62.41,18.94-83.02,94.08-38.16,141.32,34.76,36.6,94.48,35.86,126.88-5.94,5.23-6.75,10.34-13.59,15.33-20.51,1.6-2.21,3.32-3.33,6.09-3.09,2.25.2,4.54-.05,6.8.06,11.81.55,19.76,8.81,19.79,20.61.03,15.94-.67,81.16-.48,97.66Z"
        />
        <path 
          fill={primaryColor} 
          d="M564.01,248.35c0,6.97-.22,13.94.09,20.89.18,4.03-1.28,5.02-5.11,4.92-9.95-.24-19.9-.22-29.85,0-3.58.08-4.84-.89-4.78-4.64.22-12.53.05-25.07.11-37.61.01-2.86-.38-5.48-2.01-7.94-19.88-30.07-38.93-60.71-62.16-88.42-5.37-6.4-10.81-12.79-16.69-18.72-31.44-31.72-85.06-32.23-117.45-1.39-7.38,7.02-13.27,15.23-19.44,23.21-2.25,2.91-3.64,3.1-6.5.73-8.06-6.66-16.41-12.97-24.68-19.38-1.62-1.26-2.94-2.08-1.15-4.48,14.58-19.57,30.64-37.31,52.97-48.7,50.85-25.92,113.52-13.75,151.21,29.09,29.36,33.38,53.45,70.44,77.62,107.48,5.55,8.5,8.13,18,7.85,28.24-.15,5.57-.03,11.14-.03,16.72Z"
        />
        <path 
          fill={primaryColor} 
          d="M663.19,73.41c0,4.7-.31,9.43.09,14.09.37,4.26-1.03,5.38-5.31,5.74-32.16,2.66-60.43,14.36-83.83,36.93-1.63,1.57-3.08,3.32-4.53,5.06-4.67,5.61-4.67,5.65-10.66,1.79-7.47-4.82-14.71-10.02-22.42-14.4-4.45-2.53-3.69-4.35-1.17-7.73,14.63-19.62,33.8-33.46,55.63-43.93,21.28-10.21,43.71-16.14,67.36-17.51,4.07-.24,5.16.95,4.92,4.83-.31,5.03-.08,10.09-.08,15.14Z"
        />
      </g>
      <g>
        <path 
          fill={secondaryColor} 
          d="M666.58,190.03c5.79,2.6,11.63,5.18,16.31,9.8,14.25,14.05,15.75,39.01,3.46,56.2-19.02,26.6-58.59,27.92-78.6,12.43-12.07-9.34-17.69-22.01-19.18-36.87-.32-3.22,1.1-3.8,3.88-3.75,6.98.13,13.97.19,20.95-.02,3.26-.1,4.32,1.12,5.17,4.23,4.08,14.92,15.48,22.04,29.54,18.52,9.35-2.34,15.12-8.58,16.79-17.99,1.65-9.32-2.12-16.66-9.71-22.12-6.16-4.43-13.27-6.16-20.67-6.51-3.27-.16-4.59-.89-4.42-4.41.29-5.91.19-11.84.03-17.76-.07-2.74.55-4.03,3.66-4.22,4.51-.28,8.99-1.22,13.09-3.32,7.4-3.79,11.14-12.57,8.49-19.85-2.6-7.14-10.62-10.75-19.13-8.43-5.4,1.47-9.97,4.33-12.6,9.41-1.2,2.32-2.58,3.32-5.24,3.26-6.8-.16-13.62-.17-20.42,0-3.28.08-4.07-.72-3.46-4.19,4.08-23.18,23.46-38.52,47.89-37.93,19.13.46,33.29,8.87,41.05,26.26,7.48,16.77,1.42,34.56-14.05,44.69-.98.64-2.32.91-2.83,2.6Z"
        />
        <path 
          fill={secondaryColor} 
          d="M724.28,89.45h-46.2c-1.18-5.89-1.77-11.77-1.77-17.66s.59-12.06,1.77-17.95h46.2V1.77c5.89-1.18,11.77-1.77,17.66-1.77s12.06.59,17.95,1.77v52.08h46.2c1.18,5.89,1.77,11.77,1.77,17.66s-.59,12.06-1.77,17.95h-46.2v52.08c-5.89,1.18-11.77,1.77-17.66,1.77s-12.06-.59-17.95-1.77v-52.08Z"
        />
      </g>
    </svg>
  );
};

// Custom DigiQore+ Vector Logo component loaded with official SVG path vectors and supporting dynamic fill theme tokens
export const DigiqoreLogo: React.FC<{ className?: string; primaryColor?: string; secondaryColor?: string }> = ({
  className = "h-8 w-28",
  primaryColor = "#023e63",
  secondaryColor = "#00bfb3"
}) => {
  return (
    <svg 
      viewBox="0 0 886.09 263.47" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <g>
        <path 
          fill={primaryColor} 
          d="M121.34,35.1v65.28c-12.89-11.61-29.89-18.73-48.6-18.73C32.56,81.65,0,114.21,0,154.38s32.56,72.73,72.73,72.73,72.5-28.73,72.45-67.13l.05-124.88h-23.9ZM113.33,196.41l-21.26,10.91-3.61-7.03c-18.21,6.1-39.11.77-52.03-13.85-7.78-8.8-12.15-20.3-12.15-32.05,0-26.72,21.74-48.45,48.45-48.45,20.19,0,38.73,13.05,45.59,32.04,6.02,16.65,1.65,35.89-9.81,48.97,0,.01-.02.02-.03.03l4.84,9.44Z"
        />
        <polygon 
          fill={secondaryColor} 
          points="113.35 196.44 92.03 207.22 105.01 232.54 126.28 221.63 113.35 196.44"
        />
      </g>
      <path 
        fill={secondaryColor} 
        d="M886.09,62.09h-37.83v37.33h-26.49v-37.33h-37.83v-24.76h37.83V0h26.49v37.33h37.83v24.76Z"
      />
      <g>
        <path 
          fill={primaryColor} 
          d="M190.32,64.44c-4.35,0-8.07-1.46-11.16-4.39s-4.64-6.42-4.64-10.49,1.55-7.65,4.64-10.57,6.81-4.39,11.16-4.39,8.07,1.46,11.16,4.39,4.64,6.42,4.64,10.49-1.55,7.65-4.64,10.57-6.81,4.39-11.16,4.39ZM177.7,212.65V84.25h24.99v128.39h-24.99Z"
        />
        <path 
          fill={primaryColor} 
          d="M290.13,263.47c-10.2,0-18.96-1.34-26.29-4.01-7.33-2.67-13.31-6.21-17.93-10.62-4.63-4.4-8.08-9.22-10.37-14.46l21.48-8.86c1.5,2.45,3.52,5.06,6.06,7.82,2.54,2.76,5.99,5.11,10.37,7.06,4.37,1.95,10.02,2.93,16.93,2.93,9.47,0,17.3-2.3,23.49-6.9s9.28-11.91,9.28-21.94v-25.24h-1.59c-1.5,2.73-3.67,5.77-6.48,9.11-2.81,3.34-6.67,6.24-11.58,8.69-4.9,2.45-11.28,3.68-19.14,3.68-10.14,0-19.27-2.38-27.38-7.15s-14.52-11.81-19.23-21.15c-4.71-9.33-7.06-20.83-7.06-34.48s2.33-25.35,6.98-35.11c4.65-9.75,11.05-17.23,19.18-22.44,8.13-5.21,17.36-7.82,27.67-7.82,7.97,0,14.41,1.32,19.31,3.97,4.9,2.65,8.73,5.73,11.49,9.24s4.89,6.6,6.39,9.28h1.84v-20.81h24.49v131.24c0,11.03-2.56,20.09-7.69,27.17-5.13,7.08-12.05,12.32-20.77,15.71-8.72,3.4-18.54,5.1-29.47,5.1ZM289.88,190c7.19,0,13.28-1.68,18.26-5.06,4.99-3.37,8.78-8.22,11.37-14.54,2.59-6.32,3.89-13.92,3.89-22.78s-1.28-16.24-3.84-22.82c-2.56-6.57-6.33-11.72-11.29-15.42s-11.09-5.56-18.39-5.56-13.79,1.94-18.81,5.81-8.79,9.12-11.33,15.76c-2.54,6.63-3.8,14.04-3.8,22.23s1.28,15.8,3.84,22.15c2.56,6.35,6.37,11.31,11.41,14.88,5.04,3.57,11.27,5.35,18.68,5.35Z"
        />
        <path 
          fill={primaryColor} 
          d="M394.2,64.44c-4.35,0-8.07-1.46-11.16-4.39s-4.64-6.42-4.64-10.49,1.55-7.65,4.64-10.57,6.81-4.39,11.16-4.39,8.07,1.46,11.16,4.39,4.64,6.42,4.64,10.49-1.55,7.65-4.64,10.57-6.81,4.39-11.16,4.39ZM381.58,212.65V84.25h24.99v128.39h-24.99Z"
        />
        <path 
          fill={primaryColor} 
          d="M526.86,260.8v-68.13h-1.5c-1.5,2.73-3.66,5.85-6.48,9.36-2.81,3.51-6.67,6.58-11.58,9.2-4.9,2.62-11.26,3.93-19.06,3.93-10.37,0-19.6-2.66-27.71-7.98-8.11-5.32-14.46-12.93-19.06-22.82-4.6-9.89-6.9-21.78-6.9-35.65s2.33-25.75,6.98-35.61c4.65-9.86,11.05-17.41,19.18-22.65,8.13-5.24,17.36-7.86,27.67-7.86,7.97,0,14.39,1.32,19.27,3.97,4.88,2.65,8.66,5.73,11.37,9.24,2.7,3.51,4.81,6.6,6.31,9.28h2.09v-20.81h24.41v176.54h-24.99ZM493.75,193.84c7.19,0,13.28-1.91,18.26-5.73,4.99-3.82,8.78-9.12,11.37-15.92,2.59-6.8,3.89-14.71,3.89-23.74s-1.28-16.72-3.84-23.41c-2.56-6.69-6.33-11.9-11.29-15.63s-11.09-5.6-18.39-5.6-13.79,1.95-18.81,5.85c-5.02,3.9-8.79,9.22-11.33,15.97-2.54,6.74-3.8,14.35-3.8,22.82s1.28,16.3,3.84,23.15c2.56,6.85,6.37,12.28,11.41,16.26,5.04,3.98,11.27,5.98,18.68,5.98Z"
        />
        <path 
          fill={primaryColor} 
          d="M639.53,215.24c-12.04,0-22.54-2.76-31.51-8.28-8.97-5.52-15.94-13.23-20.9-23.15-4.96-9.92-7.44-21.51-7.44-34.77s2.48-24.96,7.44-34.94c4.96-9.97,11.92-17.72,20.9-23.24,8.97-5.52,19.48-8.28,31.51-8.28s22.54,2.76,31.51,8.28c8.97,5.52,15.94,13.26,20.9,23.24,4.96,9.98,7.44,21.62,7.44,34.94s-2.48,24.86-7.44,34.77c-4.96,9.92-11.93,17.64-20.9,23.15-8.97,5.52-19.48,8.28-31.51,8.28ZM639.62,194.26c7.8,0,14.27-2.06,19.39-6.19,5.13-4.12,8.93-9.61,11.41-16.47s3.72-14.4,3.72-22.65-1.24-15.73-3.72-22.61c-2.48-6.88-6.28-12.41-11.41-16.59-5.13-4.18-11.59-6.27-19.39-6.27s-14.36,2.09-19.52,6.27c-5.16,4.18-8.97,9.71-11.45,16.59-2.48,6.88-3.72,14.42-3.72,22.61s1.24,15.8,3.72,22.65c2.48,6.85,6.3,12.34,11.45,16.47,5.15,4.12,11.66,6.19,19.52,6.19Z"
        />
        <path 
          fill={primaryColor} 
          d="M727.22,212.65V84.25h24.16v20.4h1.34c2.34-6.91,6.48-12.36,12.41-16.34,5.93-3.98,12.66-5.98,20.19-5.98,1.56,0,3.41.06,5.56.17,2.14.11,3.83.25,5.06.42v23.91c-1-.28-2.79-.6-5.35-.96-2.56-.36-5.13-.54-7.69-.54-5.91,0-11.16,1.24-15.76,3.72-4.6,2.48-8.23,5.91-10.91,10.28-2.67,4.38-4.01,9.35-4.01,14.92v78.41h-24.99Z"
        />
      </g>
    </svg>
  );
};

// Custom H Markets Vector Logo component loaded with official SVG path vectors and supporting dynamic fill theme tokens
export const HMarketsLogo: React.FC<{ className?: string; primaryColor?: string; secondaryColor?: string }> = ({
  className = "h-8 w-8",
  primaryColor = "#023e63",
  secondaryColor = "#00bfb3"
}) => {
  return (
    <svg 
      id="Layer_1" 
      data-name="Layer 1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 667.16 674.08"
      className={className}
      style={{ 
        display: 'inline-block', 
        verticalAlign: 'middle', 
        flexShrink: 0,
        ['--hmarkets-primary' as any]: primaryColor,
        ['--hmarkets-secondary' as any]: secondaryColor
      }}
    >
      <defs>
        <style>{`
          .hmarkets-cls-1 {
            fill: none;
            stroke: var(--hmarkets-primary);
            stroke-miterlimit: 10;
          }

          .hmarkets-cls-2 {
            fill: var(--hmarkets-secondary);
          }

          .hmarkets-cls-3 {
            fill: var(--hmarkets-primary);
            font-family: Inter-Medium, Inter, sans-serif;
            font-size: 42px;
            font-variation-settings: 'wght' 500, 'slnt' 0;
            font-weight: 500;
          }

          .hmarkets-cls-4 {
            clip-path: url(#hmarkets-clip-1);
          }

          .hmarkets-cls-5 {
            clip-path: url(#hmarkets-clip-3);
          }

          .hmarkets-cls-6 {
            clip-path: url(#hmarkets-clip-2);
          }

          .hmarkets-cls-7, .hmarkets-cls-8 {
            fill: var(--hmarkets-primary);
          }

          .hmarkets-cls-8 {
            font-family: Inter-Bold, Inter, sans-serif;
            font-size: 43px;
            font-variation-settings: 'wght' 700, 'slnt' 0;
            font-weight: 700;
            letter-spacing: .2em;
          }

          .hmarkets-cls-9 {
            clip-path: url(#hmarkets-clip-0);
          }
        `}</style>
        <clipPath id="hmarkets-clip-0">
          <rect className="hmarkets-cls-2" x="555.24" y="45.03" width="111.92" height="21.87"/>
        </clipPath>
        <clipPath id="hmarkets-clip-1">
          <rect className="hmarkets-cls-2" x="555.24" y="45.03" width="111.92" height="21.87"/>
        </clipPath>
        <clipPath id="hmarkets-clip-2">
          <rect className="hmarkets-cls-2" x="600.27" width="21.87" height="111.92"/>
        </clipPath>
        <clipPath id="hmarkets-clip-3">
          <rect className="hmarkets-cls-2" x="600.27" width="21.87" height="111.92"/>
        </clipPath>
      </defs>
      <g>
        <path className="hmarkets-cls-7" d="M34.32,48.42v15.55h8.45c23.21,0,38.26,2.03,45.14,6.09,6.87,4.06,11.38,11.38,13.53,21.98,2.14,10.6,3.21,34.15,3.21,70.67v224.86c0,38.32-1.07,62.72-3.21,73.2-2.15,10.48-6.99,18.21-14.54,23.16-7.56,4.96-21.13,7.44-40.74,7.44h-11.83v15.55h206.26v-15.55h-11.83c-20.52,0-34.44-2.7-41.76-8.12-7.33-5.41-11.89-13.69-13.69-24.85-1.81-11.16-2.71-34.77-2.71-70.84v-224.86c0-38.09,1.18-62.21,3.55-72.36,2.37-10.14,7.04-17.07,14.03-20.8,6.98-3.72,21.64-5.58,43.96-5.58h8.45v-15.55H34.32Z"/>
        <path className="hmarkets-cls-7" d="M315.93,48.42v15.55h12.17c23.21,0,38.26,2.03,45.14,6.09,6.87,4.06,11.33,11.38,13.36,21.98,2.03,10.6,3.04,34.15,3.04,70.67v224.86c0,38.32-1.01,62.72-3.04,73.2-2.03,10.48-6.82,18.21-14.37,23.16-7.56,4.96-21.02,7.44-40.41,7.44h-15.89v15.55h208.62v-15.55h-10.48c-20.51,0-34.49-2.7-41.93-8.12-7.44-5.41-12-13.69-13.69-24.85-1.69-11.16-2.54-34.77-2.54-70.84v-224.86c0-38.09,1.18-62.21,3.55-72.36,2.37-10.14,7.04-17.07,14.03-20.8,6.98-3.72,21.75-5.58,44.3-5.58h6.76v-15.55h-208.62Z"/>
      </g>
      <rect className="hmarkets-cls-2" y="344.85" width="274.43" height="21.87"/>
      <rect className="hmarkets-cls-2" x="285.64" y="186.54" width="274.43" height="21.87"/>
      <text className="hmarkets-cls-3" transform="translate(30.75 660.66) scale(1.04 1)"><tspan x="0" y="0">One World. One Money.</tspan></text>
      <text className="hmarkets-cls-8" transform="translate(141.75 587.69) scale(1.04 1)"><tspan x="0" y="0">MARKETS</tspan></text>
      <line className="hmarkets-cls-1" x1="34.32" y1="538.08" x2="524.56" y2="538.08"/>
      <line className="hmarkets-cls-1" x1="34.32" y1="607.69" x2="524.56" y2="607.69"/>
      <g>
        <g>
          <rect className="hmarkets-cls-2" x="555.24" y="45.03" width="111.92" height="21.87"/>
          <g className="hmarkets-cls-9">
            <g>
              <rect className="hmarkets-cls-2" x="555.24" y="45.03" width="111.92" height="21.87"/>
              <g className="hmarkets-cls-4">
                <rect className="hmarkets-cls-2" x="555.24" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="556.86" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="558.47" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="560.09" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="561.71" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="563.32" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="564.94" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="566.56" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="568.17" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="569.79" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="571.41" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="573.02" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="574.64" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="576.26" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="577.87" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="579.49" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="581.11" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="582.72" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="584.34" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="585.96" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="587.57" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="589.19" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="590.81" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="592.43" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="594.04" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="595.66" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="597.28" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="598.89" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="600.51" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="602.13" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="603.74" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="605.36" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="606.98" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="608.59" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="610.21" y="45.03" width="1.62" height="21.87"/>
                <rect className="hmarkets-cls-2" x="611.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="612.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="613.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="613.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="614.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="615.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="615.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="616.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="617.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="617.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="618.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="619.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="619.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="620.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="621.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="621.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="622.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="623.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="623.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="624.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="625.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="625.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="626.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="627.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="627.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="628.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="629.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="629.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="630.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="631.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="631.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="632.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="633.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="633.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="634.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="635.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="635.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="636.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="637.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="637.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="638.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="639.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="639.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="640.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="641.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="641.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="642.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="643.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="643.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="644.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="645.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="645.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="646.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="647.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="647.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="648.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="649.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="649.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="650.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="651.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="651.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="652.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="653.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="653.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="654.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="655.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="655.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="656.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="657.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="657.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="658.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="659.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="659.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="660.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="661.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="661.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="662.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="663.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="663.82" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="664.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="665.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="665.82" y="45.03" width=".67" height="21.87"/>
                <rect className="hmarkets-cls-2" x="666.49" y="45.03" width=".67" height="21.87"/>
              </g>
            </g>
          </g>
        </g>
        <g>
          <rect className="hmarkets-cls-2" x="600.27" width="21.87" height="111.92"/>
          <g className="hmarkets-cls-6">
            <g>
              <rect className="hmarkets-cls-2" x="600.27" width="21.87" height="111.92"/>
              <g className="hmarkets-cls-5">
                <rect className="hmarkets-cls-2" x="600.27" y="110.3" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="108.69" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="107.07" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="105.45" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="103.84" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="102.22" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="100.6" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="98.99" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="97.37" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="95.75" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="94.13" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="92.52" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="90.9" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="89.28" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="87.67" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="86.05" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="84.43" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="82.82" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="81.2" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="79.58" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="77.97" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="76.35" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="74.73" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="73.12" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="71.5" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="69.88" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="68.27" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="66.65" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="65.03" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="63.42" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="61.8" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="60.18" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="58.56" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="56.95" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="55.33" width="21.87" height="1.62"/>
                <rect className="hmarkets-cls-2" x="600.27" y="54.66" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="54" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="53.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="52.66" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="52" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="51.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="50.66" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="50" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="49.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="48.66" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="48" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="47.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="46.66" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="46" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="45.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="44.66" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="44" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="43.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="42.66" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="42" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="41.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="40.66" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="40" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="39.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="38.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="38" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="37.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="36.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="36" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="35.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="34.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="34" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="33.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="32.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="32" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="31.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="30.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="30" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="29.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="28.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="28" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="27.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="26.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="26" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="25.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="24.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="24" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="23.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="22.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="22" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="21.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="20.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="20" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="19.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="18.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="18" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="17.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="16.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="16" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="15.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="14.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="14" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="13.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="12.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="12" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="11.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="10.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="10" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="9.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="8.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="8" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="7.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="6.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="6" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="5.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="4.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="4" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="3.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="2.67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="2" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="1.33" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y=".67" width="21.87" height=".67"/>
                <rect className="hmarkets-cls-2" x="600.27" y="0" width="21.87" height=".67"/>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

// Custom Edge+ Vector Logo component loaded with official SVG path vectors and supporting dynamic fill theme tokens
export const EdgePlusLogo: React.FC<{ className?: string; primaryColor?: string; secondaryColor?: string }> = ({
  className = "h-8 w-24",
  primaryColor = "#023e63",
  secondaryColor = "#00bfb3"
}) => {
  return (
    <svg 
      id="Layer_1" 
      data-name="Layer 1" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 982.07 329.62"
      className={className}
      style={{ 
        display: 'inline-block', 
        verticalAlign: 'middle', 
        flexShrink: 0,
        ['--edgeplus-primary' as any]: primaryColor,
        ['--edgeplus-secondary' as any]: secondaryColor
      }}
    >
      <defs>
        <style>{`
          .edgeplus-cls-1 {
            fill: var(--edgeplus-secondary);
          }

          .edgeplus-cls-2 {
            fill: #3cc666;
          }

          .edgeplus-cls-3 {
            fill: var(--edgeplus-primary);
          }

          .edgeplus-cls-4 {
            fill: #0251cc;
          }
        `}</style>
      </defs>
      <g>
        <g>
          <path className="edgeplus-cls-4" d="M220.31,206.99c-1.74-.02-3.48-.03-5.21-.05-1.44-22.26-8.38-42.59-21.66-60.61-28.26-38.33-74.6-51.93-117.39-34.2-21.09,8.73-36.69,23.87-48.4,43.21-.99,1.64-1.25,4.87-4.5,3.42-3.47-1.56-2.3-4.31-1-6.58,6.69-11.72,15.25-21.91,25.68-30.54,17.21-14.25,37.11-22.43,59.22-24.03,23.31-1.68,44.73,5,64.13,18.07,7.69,5.18,14.39,11.35,20.58,18.24,13.14,14.62,21.46,31.72,26.63,50.42,2.03,7.34,2,15.04,1.91,22.66Z"/>
          <path fill="var(--edgeplus-primary)" d="M223.6,210.35l-11.62-.1-.2-3.08c-1.42-22.07-8.5-41.87-21.02-58.85-27.48-37.27-72-50.27-113.43-33.1-19.29,7.99-34.61,21.69-46.83,41.86-.09.15-.24.51-.36.81-.56,1.33-1.39,3.35-3.6,4.22-1.44.57-3.03.47-4.74-.3-2.54-1.14-3.56-2.84-3.96-4.07-.98-3,.7-5.94,1.42-7.2,6.87-12.03,15.77-22.62,26.44-31.46,17.89-14.81,38.45-23.15,61.1-24.78,23.13-1.66,45.41,4.6,66.23,18.63,7.37,4.97,14.31,11.11,21.2,18.77,12.68,14.11,21.63,31.04,27.37,51.76,2.21,7.98,2.12,16.27,2.03,23.58l-.04,3.32ZM215.07,184.79c.38,1.53.73,3.07,1.04,4.62-.24-1.42-.54-2.82-.92-4.19-.04-.14-.08-.29-.12-.43ZM114.03,100.68c-2.24,0-4.49.08-6.75.24-15.64,1.12-30.22,5.66-43.53,13.53,3.55-2.03,7.22-3.83,11.02-5.4,21.69-8.98,44.63-10.38,66.35-4.04,5.27,1.54,10.39,3.51,15.32,5.89-13.65-6.8-27.85-10.23-42.41-10.23Z"/>
        </g>
        <g>
          <path className="edgeplus-cls-3" d="M638.83,323.41c-.03-.72-.08-1.43-.12-2.15-.08-1.4-.17-2.84-.17-4.19-.02-21.5-.03-42.99-.04-64.49v-23.8c0-1.57-.03-2.99-.06-4.34-.09-3.4-2.2-7.04-7.8-7.08-2.41-.03-4.32.67-5.72,2.09-.93.94-2.03,2.62-2,5.31.01.89,0,1.79-.01,2.68,0,.69-.02,1.37-.02,2.06,0,6.68,0,13.37-.02,20.05v.08c-.02,20.58-.05,41.85.1,62.79,0,.03,0,.06,0,.09-.06,0-.12,0-.18,0-31.63-1.53-58.4-7.83-81.84-19.25-26.09-12.71-43.6-28.04-55.12-48.24-12.36-21.67-12.94-43.77-1.73-65.69,10.41-20.35,27.95-36.58,53.61-49.62,24.22-12.31,51.84-19.11,84.42-20.78.34-.02.63-.03.87-.03,0,.18,0,.39,0,.63-.26,14.19-.21,28.59-.17,42.5.02,4.68.03,9.36.03,14.04,0,.15,0,.31-.01.49-.26,7.26,4.93,8.27,7.17,8.37,3.26.14,5.23-1.12,6.3-2.2,2.42-2.44,2.24-5.74,2.19-6.82,0-.17,0-.35,0-.58v-.36c0-5.54,0-11.09-.02-16.65-.03-15.39-.05-31.31.13-46.95.04-3.29-.78-5.71-2.51-7.41-2.53-2.5-6.02-2.41-7.9-2.36-25.19.66-49.33,4.85-71.75,12.45-38.5,13.06-65.92,33.42-83.81,62.25-14.79,23.82-16.91,49.65-6.3,76.77,6.34,16.19,17.51,30.86,33.21,43.6,4.36,3.54,8.96,6.91,13.65,10.01,10.8,7.13,22.68,13.19,35.3,18.02,2.15.82,4.4,1.63,6.7,2.39,9.08,3.02,18.93,5.54,29.3,7.48,1.36.26,2.71.52,4.06.78h.07c4.72.92,9.6,1.86,14.5,2.52,4.08.54,7.79.84,11.35.91,1.22.02,2.45.03,3.68.03,2.67,0,5.34-.04,7.96-.09,2.53-.04,5.15-.08,7.71-.08h5.23l-.25-5.23Z"/>
          <path className="edgeplus-cls-3" d="M449.78,175.7c-8.73-20.97-25.34-38.97-49.39-53.5-31.76-19.2-68.21-29.21-111.43-30.62-2.15-.07-5.26.1-7.56,2.34-2.26,2.2-2.54,5.12-2.52,7.69.13,14.51.11,29.27.09,43.56,0,5.28-.01,10.56-.01,15.84v3.68c0,10.02,0,20.37.03,30.56,0,.12,0,.25-.02.41-.26,5.01,2.35,7.04,4.59,7.86,4.79,1.76,7.68-.49,8.69-1.54,2.67-2.75,2.38-6.03,2.22-7.8-.03-.33-.06-.64-.06-.84v-8.06c.03-24.92.06-50.69-.09-76.04,0-.14,0-.27,0-.39.02,0,.03,0,.05,0,46.6,2.47,81.98,14.46,111.37,37.73,12.23,9.69,21.19,20.29,27.38,32.4,13.26,25.95,10.4,51.75-8.51,76.69-11.54,15.23-27.43,27.74-47.22,37.18-24.61,11.74-51.56,18.16-82.39,19.63-.27.01-.5.02-.69.02,0-.22,0-.48,0-.79.22-15.53.18-31.31.13-46.57v-.07c-.01-3.3-.02-6.59-.03-9.89,0-.17.01-.34.03-.58.5-7.46-4.79-8.68-7.09-8.86-2.51-.19-4.56.43-6.09,1.86-2.35,2.18-2.33,5.14-2.33,6.91v.09c.05,11.68,0,23.75-.03,35.45-.04,11.41-.07,23.2-.04,34.57l.02,4.96,7.95.03s4.39,0,5.81-.01h.09c14.65-.54,65.33-9.94,85.02-18.73,26.96-12.03,47.32-27.92,62.23-48.56,19.29-26.71,22.58-55.85,9.77-86.62Z"/>
          <path className="edgeplus-cls-3" d="M897.3,258.93h0c-2.63-2.03-4.91-1.99-6.36-1.59-3.09.85-4.17,3.58-4.63,4.75-.03.09-.07.18-.1.26-4.99,8.59-10.1,15.42-15.63,20.87-21.22,20.91-46.04,30.47-73.76,28.42-24.65-1.82-45.87-12.53-63.09-31.81-15.44-17.3-24.59-40.08-26.47-65.88l-.34-4.63h-4.64c-1.49,0-2.34.03-3.17.06-.76.03-1.48.05-2.78.05h-4.74l-.24,4.74c-1.02,20.23,5.12,39.65,19.91,62.99,6.56,10.35,14.42,19.34,23.37,26.73,9.09,7.5,19.43,13.47,30.74,17.72,10.36,3.9,19.24,6.13,27.15,6.83,2.56.22,5.07.24,7.5.26,1.22,0,2.45.02,3.7.02,2.5,0,5.8-.04,9.14-.31,14.63-1.22,29.12-5.63,41.9-12.77,21.22-11.85,36.01-26.8,45.19-45.71,3.16-6.51-1.21-9.88-2.64-10.99Z"/>
          <path className="edgeplus-cls-3" d="M223.21,183c-5.8-20.98-14.88-38.12-27.73-52.43-6.98-7.77-14.02-14-21.51-19.04-21.14-14.23-43.78-20.6-67.28-18.91-23.01,1.65-43.88,10.12-62.05,25.16-10.83,8.97-19.86,19.71-26.83,31.92-1.29,2.26-2.63,5.26-1.56,8.54.5,1.55,1.76,3.68,4.86,5.07,2.66,1.19,4.75.84,6.03.33,2.86-1.13,3.94-3.73,4.52-5.13.08-.2.21-.51.25-.58,12.03-19.86,27.09-33.34,46.04-41.19,19.92-8.25,40.95-9.54,60.83-3.74,19.9,5.81,37.41,18.36,50.63,36.29,12.33,16.72,19.29,36.23,20.7,57.97l.3,4.63,14.83.13.06-4.98c.08-7.42.18-15.84-2.09-24.04Z"/>
        </g>
        <g>
          <path className="edgeplus-cls-2" d="M327.53,207.55c-16.87-.18-33.75-.03-50.62-.11-18.87-.08-37.73-.29-56.6-.45-1.73-1.19-3.46-1.53-5.21-.05-1.39.13-2.78.38-4.17.38-63.84.06-127.68.09-191.52.13-15.55,0-16.23.89-12.58,16.47.73,4.51,1.01,9.14,2.26,13.5,6.16,21.56,16,41.25,32.37,56.94,14.19,13.61,31.14,22.89,50.2,27.79,8.1,2.08,16.82,1.8,25.11,1.5,10.35-.38,21.17-1.36,31.01-4.74,10.02-3.44,19.24-8.89,27.54-15.45,2.35-1.86,4.65-3.81,6.85-5.84,5.13-4.72,10.28-9.46,14.59-14.96,1.69-2.16,3.25-4.43,4.61-6.81.69-1.21,1.32-2.44,1.9-3.71s1.71-2.65,2.46-3.81c.73-1.14,1.22-2.11,1.46-3.51s-.91-2.32-1.97-2.95c-3.58-2.12-3.74,1.74-4.91,3.33-2.1,2.86-3.85,5.97-5.75,8.98-2.19,2.57-4.41,5.11-6.55,7.72-19.29,23.47-44.3,34.99-74.59,35.6-13.02.26-25.26-3.34-37.46-7.25-8.68-5.24-17.86-9.61-25.45-16.63-12.75-11.79-23.14-24.94-29.47-41.43-3.1-8.08-5.03-16.49-7.33-24.82-.2-.71-.38-1.44-.49-2.17-.14-.91-.17-1.83-.21-2.76-.07-1.77-.14-3.54-.21-5.32-.07-1.75.31-2.88,2.1-3.07,2-.21,4.07.01,6.08,0,30.53-.03,61.07,0,91.6,0,71.71,0,143.42.02,215.14-.08,2.5,0,6.74,1.94,6.62-3.33-.11-5.24-4.35-3.1-6.81-3.12Z"/>
          <path fill="var(--edgeplus-primary)" d="M107.92,327.2c-5.62,0-11.45-.37-17.08-1.82-19.79-5.08-37.18-14.71-51.68-28.61-15.36-14.72-26.24-33.84-33.27-58.43-.92-3.22-1.35-6.51-1.76-9.7-.17-1.35-.35-2.74-.57-4.07-1.97-8.44-2.95-13.39-.21-16.84,2.71-3.43,7.87-3.6,16.05-3.61h5.89c61.87-.04,123.75-.07,185.62-.13.75,0,1.57-.1,2.44-.21.16-.02.33-.04.49-.06,1.63-1.04,4.2-1.84,7.41-.06,5.4.05,10.8.09,16.2.14,12.93.12,26.3.24,39.45.3,6.83.03,13.79.02,20.51.02,9.87-.01,20.08-.02,30.13.09h0c.28,0,.79-.08,1.26-.15,1.78-.28,4.47-.7,6.62,1.09,1.42,1.19,2.17,3.02,2.22,5.44.05,2.47-.63,4.36-2.04,5.61-2.11,1.88-4.85,1.5-6.67,1.25-.47-.07-.96-.13-1.24-.13h0c-62.27.08-125.59.08-186.82.08h-55.2c-21.21-.01-43.14-.02-64.72,0-.72,0-1.46-.03-2.19-.05-.93-.03-1.82-.07-2.65-.04l.2,5.01c.03.85.06,1.66.18,2.39.1.63.27,1.28.4,1.78.55,1.99,1.08,3.98,1.6,5.97,1.63,6.17,3.32,12.54,5.63,18.54,5.56,14.5,14.66,27.27,28.62,40.18,5.44,5.03,11.72,8.62,18.36,12.41,2.04,1.16,4.14,2.37,6.21,3.61,11.96,3.83,23.73,7.22,36,6.98,29.57-.59,53.83-12.16,72.08-34.38,1.49-1.81,3.02-3.6,4.51-5.33.64-.75,1.29-1.5,1.93-2.25.51-.81,1-1.62,1.5-2.44,1.32-2.17,2.69-4.41,4.26-6.54.08-.12.26-.54.38-.82.55-1.3,1.48-3.48,3.83-4.24,1.57-.51,3.28-.23,5.08.84,3.67,2.18,3.8,4.93,3.55,6.37-.35,2.06-1.14,3.49-1.93,4.74-.27.43-.59.88-.93,1.35-.5.7-1.06,1.5-1.31,2.05-.61,1.33-1.29,2.67-2.03,3.97-1.36,2.4-3.01,4.83-4.88,7.22-4.5,5.74-9.81,10.63-14.96,15.36-2.21,2.03-4.58,4.05-7.04,6-9.18,7.25-18.77,12.63-28.52,15.98-10.8,3.71-22.75,4.58-31.96,4.92-2.88.11-5.9.22-8.99.22ZM80.95,315.31c3.74,1.4,7.59,2.6,11.55,3.62,3.94,1.01,8.11,1.43,12.27,1.56-8.12-.79-15.97-2.79-23.82-5.18ZM172.68,301.31c-12.5,9.42-26.81,15.46-42.82,18.07,5.59-.66,11.42-1.75,16.85-3.62,8.83-3.04,17.56-7.9,25.98-14.46ZM58.96,304.13c3.11,2.06,6.32,3.96,9.64,5.69-.26-.15-.51-.29-.77-.44-2.95-1.68-5.93-3.39-8.87-5.25ZM30.96,277.05c3.84,5.44,8.1,10.4,12.81,14.92,1.21,1.16,2.44,2.29,3.69,3.38-6.46-6.05-11.92-12.09-16.5-18.3ZM198.73,273.76c-.45.74-.9,1.48-1.37,2.21l-.13.2-.15.18c-.7.82-1.4,1.64-2.1,2.46-1.46,1.71-2.98,3.47-4.42,5.23-2.33,2.84-4.75,5.51-7.27,8.03,3.84-3.59,7.63-7.34,10.85-11.45,1.67-2.13,3.13-4.29,4.33-6.4.08-.15.17-.3.25-.45ZM11.1,230.45c.3,2.1.65,4.12,1.2,6.05,1.15,4.01,2.4,7.87,3.76,11.58-1.51-4.64-2.76-9.33-3.97-13.91-.33-1.24-.66-2.48-.99-3.72ZM13.91,210.87c-2.54.12-4.85.38-5.33.99-.74.93.23,5.75,1.06,9.38l-.16-3.96c-.19-4.74,2.66-6.05,4.43-6.41ZM329.04,210.76c.28.03.56.07.83.11.32.04.77.11,1.14.14,0-.08,0-.17,0-.27,0-.1,0-.18-.01-.26-.37.04-.82.11-1.14.16-.27.04-.54.09-.82.12ZM79,210.74c2.24,0,4.48,0,6.7,0h55.2c42.27,0,85.53,0,128.75-.02-10.8-.06-21.66-.16-32.23-.26-5.71-.05-11.42-.1-17.13-.15h-1.02s-.84-.59-.84-.59c-.62-.43-.89-.44-.89-.44,0,0-.11.06-.28.2l-.8.68-1.04.1c-.41.04-.83.09-1.24.14-1.03.13-2.09.26-3.24.26-43.98.04-87.96.07-131.94.09Z"/>
        </g>
        <g>
          <path className="edgeplus-cls-1" d="M914.93,208.16v-.02c-.05-3.47-.1-7.05-.34-10.64-.29-4.38-1.06-8.62-1.8-12.71l-.11-.62c-1.39-7.72-4.5-15.06-7.84-22.53-3.19-7.13-6.81-13.76-10.77-19.69-4.29-6.43-9.16-12.33-14.47-17.52-3.13-3.06-6.49-5.96-10-8.62-28.71-21.75-57.72-28.71-88.68-21.3-33.23,7.96-58.08,26.97-73.86,56.52-.06.12-.26.4-.41.63-.88,1.29-2.52,3.7-1.82,6.81.48,2.1,1.87,3.83,4.15,5.16,2.44,1.42,4.76,1.74,6.88.96,3.12-1.16,4.14-4.1,4.63-5.51.05-.15.11-.32.16-.46,10.65-16.99,21.41-28.32,33.86-35.65,30.75-18.11,61.64-19.04,91.81-2.75,20.31,10.96,35.05,27.47,43.83,49.08,1.68,4.14,3.16,8.5,4.47,12.34.35,1.03.72,2.03,1.08,3.01,1.07,2.87,1.99,5.35,2.19,7.82.25,3,.55,6.49,1.06,9.99-4.37-.21-8.74-.14-13-.07-2.07.03-4.21.07-6.3.07h-55.64c-77.56,0-157.76,0-236.63.05-.16,0-.52-.04-.8-.07-1.75-.18-4.69-.49-7.16,1.7-1.68,1.49-2.55,3.65-2.6,6.43-.05,2.8.76,5,2.4,6.55,2.42,2.29,5.4,2.07,7.18,1.94l.23-.02c.18-.01.42-.04.51-.03h.09c6.81.05,13.92.04,20.18.03h.32c5.02-.01,10.04-.02,15.07,0,17.24.06,34.48.15,51.72.24l21.8.11h.22c.28-.02,6.99-.31,12.03-.31,47.02-.02,94.05-.02,141.07-.02h52.93c.49,0,.99-.01,1.48-.02.87-.02,1.68-.03,2.43.01,2.56.16,4.65-.51,6.2-1.99,1.56-1.49,2.33-3.59,2.29-6.22-.02-.89-.03-1.79-.04-2.68Z"/>
          <path className="edgeplus-cls-1" d="M339.33,210.67v-.11c0-.24,0-.47-.01-.68-.02-1.76-.04-3.76-1.89-5.6 l-.08-.08c-1.62-1.62-2.88-1.77-5.81-1.77-.29,0-1.14.03-2,.06-.68.03-1.68.07-1.89.06h-.08c-10.06-.11-20.27-.1-30.15-.09h-.88c-6.43,0-13.09.01-19.62-.02-13.24-.06-26.56-.18-39.44-.3h-1.04c-5.2-.06-10.41-.1-15.62-.15-2.35-.01-3.65.04-4.8.08-.55.02-1.05.04-1.63.05h-.12s-.16.02-.16.02c-.12,0-.32.01-.53.02-.49.02-.81.03-1.09.06-.81.1-.88.1-1.58.1-60.86.05-121.72.09-182.58.12h-8.94c-7.83,0-14.01.01-17.36,4.24-3.36,4.24-2.01,10.1-.12,18.19.2,1.29.38,2.64.55,3.97.42,3.24.85,6.59,1.81,9.94,7.11,24.89,18.14,44.24,33.72,59.18,14.71,14.1,32.34,23.86,52.41,29.02,4.96,1.27,10.52,1.87,17.51,1.87,3.12,0,6.13-.11,9.03-.22,9.32-.35,21.44-1.23,32.44-5.01,9.92-3.41,19.68-8.88,29.01-16.25,2.5-1.97,4.9-4.02,7.14-6.08,5.19-4.78,10.56-9.71,15.14-15.56,1.92-2.45,3.61-4.95,5.01-7.42.77-1.35,1.48-2.73,2.1-4.11.19-.41.72-1.16,1.15-1.78.35-.49.68-.97.97-1.42.89-1.39,1.76-3,2.17-5.35.26-1.5.35-5.3-4.34-8.09-2.24-1.33-4.41-1.66-6.45-.99-3.06,1-4.22,3.71-4.84,5.18-.07.17-.19.44-.26.58-1.58,2.16-2.95,4.39-4.29,6.59-.47.76-.93,1.53-1.41,2.29-.61.71-1.22,1.43-1.86,2.17-1.49,1.73-3.03,3.53-4.52,5.35-17.94,21.83-41.77,33.19-70.83,33.78-11.99.25-23.53-3.08-35.28-6.84-2.02-1.21-4.07-2.38-6.08-3.53-6.27-3.58-12.76-7.29-18.06-12.19-13.77-12.73-22.72-25.3-28.19-39.55-2.27-5.91-3.95-12.24-5.57-18.37-.53-2-1.06-3.99-1.61-5.99-.13-.46-.28-1.05-.36-1.59-.1-.64-.13-1.36-.16-2.2l-.13-3.27c.28,0,.57.02.86.03.75.03,1.49.05,2.26.05,21.46-.02,43.28-.02,64.4-.01h56.05c61.06,0,124.19.01,186.28-.07h.38c1.84,0,3.16,0,3.6-.01,2.98-.11,4.73-.77,6.02-2.31,1.69-2,1.65-3.86,1.61-6ZM335.08,206.64h0s0,0,0,0Z"/>
        </g>
      </g>
      <path className="edgeplus-cls-3" d="M972.96,48.81h-37.47V9.12c0-5.03-4.09-9.12-9.21-9.12s-9.11,4.09-9.11,9.12v39.7h-35.63c-5.03,0-9.11,4.09-9.11,9.12s4.09,9.11,9.11,9.11h35.63v39.6c0,5.03,4.09,9.11,9.21,9.11s9.11-4.09,9.11-9.11v-39.6h37.47c5.03,0,9.12-4.09,9.12-9.11s-4.09-9.12-9.12-9.12Z"/>
    </svg>
  );
};

// Custom H Business Vector Logo component loaded with official SVG path vectors and supporting dynamic fill theme tokens
export const HBusinessLogo: React.FC<{ className?: string; primaryColor?: string; secondaryColor?: string }> = ({
  className = "h-8 w-8",
  primaryColor = "#023e63",
  secondaryColor = "#00bfb3"
}) => {
  return (
    <svg 
      id="Layer_1" 
      data-name="Layer 1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 667.16 674.08"
      className={className}
      style={{ 
        display: 'inline-block', 
        verticalAlign: 'middle', 
        flexShrink: 0,
        ['--hbusiness-primary' as any]: primaryColor,
        ['--hbusiness-secondary' as any]: secondaryColor
      }}
    >
      <defs>
        <style>{`
          .hbusiness-cls-1 {
            fill: none;
            stroke: var(--hbusiness-primary);
            stroke-miterlimit: 10;
          }

          .hbusiness-cls-2 {
            fill: var(--hbusiness-secondary);
          }

          .hbusiness-cls-3 {
            fill: var(--hbusiness-primary);
            font-family: Inter-Medium, Inter, sans-serif;
            font-size: 42px;
            font-variation-settings: 'wght' 500, 'slnt' 0;
            font-weight: 500;
          }

          .hbusiness-cls-4 {
            clip-path: url(#hbusiness-clip-1);
          }

          .hbusiness-cls-5 {
            clip-path: url(#hbusiness-clip-3);
          }

          .hbusiness-cls-6 {
            clip-path: url(#hbusiness-clip-2);
          }

          .hbusiness-cls-7, .hbusiness-cls-8 {
            fill: var(--hbusiness-primary);
          }

          .hbusiness-cls-8 {
            font-family: Inter-Bold, Inter, sans-serif;
            font-size: 43px;
            font-variation-settings: 'wght' 700, 'slnt' 0;
            font-weight: 700;
            letter-spacing: .2em;
          }

          .hbusiness-cls-9 {
            clip-path: url(#hbusiness-clip-0);
          }
        `}</style>
        <clipPath id="hbusiness-clip-0">
          <rect className="hbusiness-cls-2" x="555.24" y="45.03" width="111.92" height="21.87"/>
        </clipPath>
        <clipPath id="hbusiness-clip-1">
          <rect className="hbusiness-cls-2" x="555.24" y="45.03" width="111.92" height="21.87"/>
        </clipPath>
        <clipPath id="hbusiness-clip-2">
          <rect className="hbusiness-cls-2" x="600.27" width="21.87" height="111.92"/>
        </clipPath>
        <clipPath id="hbusiness-clip-3">
          <rect className="hbusiness-cls-2" x="600.27" width="21.87" height="111.92"/>
        </clipPath>
      </defs>
      <g>
        <g>
          <path className="hbusiness-cls-7" d="M34.32,48.42v15.55h8.45c23.21,0,38.26,2.03,45.14,6.09,6.87,4.06,11.38,11.38,13.53,21.98,2.14,10.6,3.21,34.15,3.21,70.67v224.86c0,38.32-1.07,62.72-3.21,73.2-2.15,10.48-6.99,18.21-14.54,23.16-7.56,4.96-21.13,7.44-40.74,7.44h-11.83v15.55h206.26v-15.55h-11.83c-20.52,0-34.44-2.7-41.76-8.12-7.33-5.41-11.89-13.69-13.69-24.85-1.81-11.16-2.71-34.77-2.71-70.84v-224.86c0-38.09,1.18-62.21,3.55-72.36,2.37-10.14,7.04-17.07,14.03-20.8,6.98-3.72,21.64-5.58,43.96-5.58h8.45v-15.55H34.32Z"/>
          <path className="hbusiness-cls-7" d="M315.93,48.42v15.55h12.17c23.21,0,38.26,2.03,45.14,6.09,6.87,4.06,11.33,11.38,13.36,21.98,2.03,10.6,3.04,34.15,3.04,70.67v224.86c0,38.32-1.01,62.72-3.04,73.2-2.03,10.48-6.82,18.21-14.37,23.16-7.56,4.96-21.02,7.44-40.41,7.44h-15.89v15.55h208.62v-15.55h-10.48c-20.51,0-34.49-2.7-41.93-8.12-7.44-5.41-12-13.69-13.69-24.85-1.69-11.16-2.54-34.77-2.54-70.84v-224.86c0-38.09,1.18-62.21,3.55-72.36,2.37-10.14,7.04-17.07,14.03-20.8,6.98-3.72,21.75-5.58,44.3-5.58h6.76v-15.55h-208.62Z"/>
        </g>
        <rect className="hbusiness-cls-2" y="344.85" width="274.43" height="21.87"/>
        <rect className="hbusiness-cls-2" x="285.64" y="186.54" width="274.43" height="21.87"/>
        <text className="hbusiness-cls-3" transform="translate(30.75 660.66) scale(1.04 1)"><tspan x="0" y="0">One World. One Money.</tspan></text>
        <text className="hbusiness-cls-8" transform="translate(136.4 587.69) scale(1.04 1)"><tspan x="0" y="0">BUSINESS</tspan></text>
        <line className="hbusiness-cls-1" x1="34.32" y1="538.08" x2="524.56" y2="538.08"/>
        <line className="hbusiness-cls-1" x1="34.32" y1="607.69" x2="524.56" y2="607.69"/>
      </g>
      <g>
        <g>
          <rect className="hbusiness-cls-2" x="555.24" y="45.03" width="111.92" height="21.87"/>
          <g className="hbusiness-cls-9">
            <g>
              <rect className="hbusiness-cls-2" x="555.24" y="45.03" width="111.92" height="21.87"/>
              <g className="hbusiness-cls-4">
                <rect className="hbusiness-cls-2" x="555.24" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="556.86" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="558.47" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="560.09" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="561.71" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="563.32" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="564.94" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="566.56" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="568.17" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="569.79" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="571.41" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="573.02" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="574.64" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="576.26" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="577.87" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="579.49" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="581.11" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="582.72" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="584.34" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="585.96" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="587.57" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="589.19" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="590.81" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="592.43" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="594.04" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="595.66" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="597.28" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="598.89" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="600.51" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="602.13" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="603.74" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="605.36" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="606.98" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="608.59" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="610.21" y="45.03" width="1.62" height="21.87"/>
                <rect className="hbusiness-cls-2" x="611.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="612.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="613.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="613.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="614.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="615.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="615.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="616.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="617.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="617.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="618.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="619.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="619.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="620.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="621.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="621.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="622.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="623.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="623.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="624.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="625.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="625.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="626.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="627.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="627.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="628.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="629.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="629.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="630.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="631.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="631.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="632.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="633.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="633.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="634.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="635.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="635.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="636.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="637.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="637.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="638.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="639.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="639.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="640.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="641.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="641.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="642.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="643.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="643.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="644.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="645.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="645.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="646.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="647.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="647.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="648.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="649.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="649.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="650.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="651.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="651.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="652.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="653.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="653.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="654.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="655.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="655.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="656.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="657.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="657.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="658.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="659.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="659.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="660.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="661.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="661.83" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="662.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="663.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="663.82" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="664.49" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="665.16" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="665.82" y="45.03" width=".67" height="21.87"/>
                <rect className="hbusiness-cls-2" x="666.49" y="45.03" width=".67" height="21.87"/>
              </g>
            </g>
          </g>
        </g>
        <g>
          <rect className="hbusiness-cls-2" x="600.27" width="21.87" height="111.92"/>
          <g className="hbusiness-cls-6">
            <g>
              <rect className="hbusiness-cls-2" x="600.27" width="21.87" height="111.92"/>
              <g className="hbusiness-cls-5">
                <rect className="hbusiness-cls-2" x="600.27" y="110.3" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="108.69" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="107.07" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="105.45" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="103.84" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="102.22" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="100.6" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="98.99" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="97.37" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="95.75" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="94.13" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="92.52" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="90.9" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="89.28" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="87.67" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="86.05" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="84.43" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="82.82" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="81.2" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="79.58" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="77.97" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="76.35" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="74.73" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="73.12" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="71.5" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="69.88" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="68.27" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="66.65" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="65.03" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="63.42" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="61.8" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="60.18" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="58.56" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="56.95" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="55.33" width="21.87" height="1.62"/>
                <rect className="hbusiness-cls-2" x="600.27" y="54.66" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="54" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="53.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="52.66" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="52" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="51.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="50.66" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="50" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="49.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="48.66" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="48" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="47.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="46.66" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="46" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="45.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="44.66" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="44" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="43.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="42.66" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="42" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="41.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="40.66" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="40" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="39.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="38.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="38" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="37.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="36.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="36" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="35.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="34.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="34" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="33.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="32.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="32" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="31.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="30.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="30" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="29.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="28.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="28" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="27.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="26.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="26" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="25.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="24.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="24" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="23.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="22.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="22" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="21.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="20.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="20" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="19.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="18.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="18" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="17.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="16.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="16" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="15.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="14.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="14" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="13.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="12.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="12" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="11.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="10.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="10" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="9.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="8.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="8" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="7.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="6.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="6" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="5.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="4.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="4" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="3.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="2.67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="2" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="1.33" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y=".67" width="21.87" height=".67"/>
                <rect className="hbusiness-cls-2" x="600.27" y="0" width="21.87" height=".67"/>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

// Custom Ficoy Vector Logo component loaded with official SVG path vectors and supporting dynamic fill theme tokens
export const FicoyLogo: React.FC<{ className?: string; primaryColor?: string; secondaryColor?: string }> = ({
  className = "h-8 w-24",
  primaryColor = "#0b3f63",
  secondaryColor = "#20bbb1"
}) => {
  return (
    <svg 
      id="Layer_1" 
      data-name="Layer 1" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1000 303.6"
      className={className}
      style={{ 
        display: 'inline-block', 
        verticalAlign: 'middle', 
        flexShrink: 0,
        ['--ficoy-primary' as any]: primaryColor,
        ['--ficoy-secondary' as any]: secondaryColor
      }}
    >
      <defs>
        <style>{`
          .ficoy-cls-1 {
            fill: var(--ficoy-secondary);
          }

          .ficoy-cls-2 {
            fill: var(--ficoy-primary);
            font-family: Inter-Black, Inter, sans-serif;
            font-size: 249.27px;
            font-variation-settings: 'wght' 900, 'slnt' 0;
            font-weight: 800;
            letter-spacing: .03em;
          }
        `}</style>
      </defs>
      <path className="ficoy-cls-1" d="M216.93,7.17c-32.85.28-65.72-.37-98.56.38-17.91.41-35.01,5.89-50.82,14.37-35.64,19.13-47.32,50.74-32.37,88.31,2.68,6.73,2.43,11.5-1.43,17.65C12,162.49,5.52,201.71.26,241.27c-1.08,8.13,1.02,11.77,10.08,11.43,16.14-.61,32.33-.54,48.48-.03,9.65.31,14.22-2.88,16.67-12.85,6.94-28.2,25.7-43.26,54.69-47.01,13.08-1.69,30.44,5.71,38.2-4.63,7.52-10.03,6.43-26.54,9.01-40.23,5.8-30.72,5.77-30.48-26.33-30.8-22.96-.23-46.04,1.53-69.29-3.59,13.92-13.67,29.88-21.63,48.77-22.46,23.66-1.05,47.34-1.92,71.02-2.3,7.53-.12,11.47-1.53,12.78-10.14,3.15-20.7,7.31-41.27,11.72-61.74,1.89-8.77-1.79-9.8-9.12-9.74ZM137.98,141.94c5.04.08,15.16-4.54,13.74,6.85-1.05,8.4.84,20.91-14.73,19.74-11.33-.85-22.59.58-33.38,4.25-22.15,7.52-37.75,22.39-46.41,43.91-3.4,8.45-8.3,11.99-17.11,10.27-8.59,1.47-12.94-.43-11.25-10.87,4.34-26.77,12.81-51.9,26.4-75.38,3.39-5.86,7.01-8.68,14.21-6.29,22.26,7.39,45.41,7.14,68.52,7.53ZM196.63,42.08c-1.46,17.62-8.55,23.69-26.41,22.35-41.49-3.1-80.59,4.22-112.73,33.92-8.24-18.83-3.04-36.32,13.5-49.09,18.95-14.62,41.31-17.29,64.12-17.82,17.25-.4,34.52.14,51.77-.23,8.19-.18,10.54,1.35,9.76,10.87Z"/>
      <path className="ficoy-cls-1" d="M997.46,30.85h-24.9c-1.57,0-2.77-1.41-2.51-2.96l4.11-24.93c.26-1.55-.94-2.96-2.51-2.96h-21.63c-1.25,0-2.31.9-2.51,2.13l-4.38,26.59c-.2,1.23-1.26,2.13-2.51,2.13h-26.48c-1.24,0-2.3.9-2.51,2.12l-3.68,21.7c-.26,1.55.93,2.97,2.51,2.97h24.9c1.57,0,2.77,1.41,2.51,2.96l-4.11,24.93c-.26,1.55.94,2.96,2.51,2.96h21.63c1.25,0,2.31-.9,2.51-2.13l4.38-26.59c.2-1.23,1.26-2.13,2.51-2.13h26.48c1.24,0,2.3-.9,2.51-2.12l3.68-21.7c.26-1.55-.93-2.97-2.51-2.97Z"/>
      <text className="ficoy-cls-2" transform="translate(246.33 223.94)"><tspan x="0" y="0">ficoy</tspan></text>
    </svg>
  );
};

// Custom Coventrix Vector Logo component loaded with official SVG path vectors and supporting dynamic fill theme tokens
export const CoventrixLogo: React.FC<{ className?: string; primaryColor?: string; secondaryColor?: string }> = ({
  className = "h-8 w-24",
  primaryColor = "#023e63",
  secondaryColor = "#00bfb3"
}) => {
  return (
    <svg 
      id="Layer_1" 
      data-name="Layer 1" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1482.97 274.13"
      className={className}
      style={{ 
        display: 'inline-block', 
        verticalAlign: 'middle', 
        flexShrink: 0,
        ['--coventrix-primary' as any]: primaryColor,
        ['--coventrix-secondary' as any]: secondaryColor
      }}
    >
      <defs>
        <style>{`
          .coventrix-cls-1 {
            fill: var(--coventrix-secondary);
          }

          .coventrix-cls-2 {
            fill: var(--coventrix-primary);
            font-family: Inter-Bold, Inter, sans-serif;
            font-size: 211.81px;
            font-variation-settings: 'wght' 700, 'slnt' 0;
            font-weight: 700;
            letter-spacing: .03em;
          }
        `}</style>
      </defs>
      <text className="coventrix-cls-2" transform="translate(335.52 206.43)"><tspan x="0" y="0">Coventrix</tspan></text>
      <path className="coventrix-cls-1" d="M338.06,56.92l2.18-.19c3.56-.33,6.37-.58,9.21-.58V9.89c-4.94,0-9.24.39-13.39.77l-1.78.13c-32.08,3.41-60.56,21.04-79.22,45.92-12.16-16.42-28.49-29.47-47.57-37.6-22.24-9.61-44.99-9.61-61.6-9.61v46.26c16.88,0,30.79.43,43.37,5.86,15.69,6.68,28.76,19.33,35.88,34.7l.17.36c4.29,8.87,6.56,18.58,6.56,28.09l.13,1.45-1.45,14.77c-5.17,24.37-24.75,45.61-48.97,53.02-13.19,4-29.88,3.56-46.03,3.14-5.37-.14-10.68-.28-15.88-.28-24.41,0-46.15-10.49-59.67-28.79-15.71-21.24-18.24-50.03-6.44-73.34,11.83-23.39,36.37-38.68,62.25-38.97h6.55V9.5h-6.81c-43.19.48-83.73,25.74-103.27,64.35-19.63,38.78-15.5,86.56,10.51,121.73,22.32,30.22,57.63,47.56,96.87,47.56,4.79,0,9.7.13,14.66.26,5.3.14,10.78.29,16.4.29,14.43,0,29.65-.96,44.33-5.41,24.22-7.41,45.17-22.67,60-42.47,21.84,29.16,57.03,47.33,93.61,47.33v-46.26c-25.32,0-49.58-14.49-61.81-36.91-3.18-5.83-5.49-12.09-7.05-19.09l-1.38-14.13.1-1.02-.02-1.33c-.54-32.15,27.16-63.39,59.55-67.46Z"/>
      <polygon className="coventrix-cls-1" points="1482.97 34.79 1447.94 34.79 1447.94 0 1414.76 0 1414.76 34.79 1379.97 34.79 1379.97 65.4 1414.76 65.4 1414.76 100.2 1447.94 100.2 1447.94 65.4 1482.97 65.4 1482.97 34.79"/>
    </svg>
  );
};

export const PLATFORMS_LIST: PlatformData[] = [
  {
    id: 'qor3',
    name: 'QoR3+',
    badgeTitle: 'Core Payments & Operations Engine',
    category: 'payments',
    tagline: 'Comprehensive core system streamlining Payments, FX Operations & Finance',
    description: 'QoR3+ is a comprehensive core system built to streamline and optimize workflows across Payments, Foreign Exchange Operations, and Finance departments.',
    para1: 'is a comprehensive core system built to streamline and optimize workflows across Payments, Foreign Exchange Operations, and Finance departments.',
    para2: 'Users benefit from fully customizable accounting reports, an automated revaluation function, and streamlined bank account reconciliation for enhanced accuracy, transparency, and operational control in a global financial environment.',
    regions: 'Hong Kong / Global',
    version: 'v4.2.0 Core',
    icon: Cpu,
    primaryColorHex: '#00bfb3',
    techStack: ['React 19', 'TypeScript', 'Go Core', 'PostgreSQL', 'Redis'],
    capabilities: [
      { title: 'Automated FX Revaluation', desc: 'Real-time mark-to-market portfolio revaluations and multi-currency ledger adjustments.', detail: 'Executes automated continuous balance adjustments across all active currency pairs.', icon: RefreshCw },
      { title: '3-Way Bank Reconciliation', desc: 'Automated matching of banking statements with internal ledger records.', detail: 'Matches MT940 / CAMT statement feeds directly against internal payment dispatches.', icon: CheckCircle2 },
      { title: 'Customizable Financial Reporting', desc: 'Tailored P&L, balance sheet, and regulatory audit reports with exportable formats.', detail: 'Supports instant generation of regulatory compliance packages and balance proofs.', icon: BarChart3 },
      { title: 'Dual-Key Authorization Protocol', desc: 'End-to-end payment dispatching with multi-tier approval matrix controls.', detail: 'Enforces dual-key authorization protocols for high-value financial transfers.', icon: Zap },
    ],
    personas: [
      { title: 'Finance Controller', desc: 'Oversees daily ledger reconciliation, revaluation runs, and statutory reporting.', role: 'Finance & Operations' },
      { title: 'FX Desk Manager', desc: 'Monitors FX exposure, currency positions, and hedging contracts in real time.', role: 'Treasury & FX' },
      { title: 'Operations Specialist', desc: 'Manages incoming bank feeds, statement clearing, and exception queues.', role: 'Operations' },
    ],
    metrics: [
      { label: 'Reconciliation Speed', value: 'Instant (< 2s)' },
      { label: 'Automated Reval Rate', value: '100% Real-time' },
      { label: 'Annual Flow Processed', value: '$14.2B USD' },
    ],
    dsCompliancePct: 92,
    apiPayload: {
      endpoint: 'v4/reconciliation/run',
      method: 'POST',
      description: 'Triggers automated multi-currency ledger revaluation and bank statement matching.',
      json: `{
  "reval_batch_id": "qor3_batch_99201",
  "base_currency": "USD",
  "val_date": "2026-07-23",
  "status": "COMPLETED",
  "matched_records": 18420,
  "unmatched_exceptions": 0,
  "net_reval_adjustment_usd": 14250.80,
  "execution_time_ms": 420
}`
    },
    websiteUrl: 'https://qor3.harbourandhills.com:82/login'
  },
  {
    id: 'digiqore',
    name: 'DigiQore+',
    badgeTitle: 'STP Payment Automation & Bank Routing',
    category: 'payments',
    tagline: 'Automated payment workflows with SWIFT STP rules & dynamic fee routing',
    description: 'DigiQore+ is a comprehensive platform designed to automate and optimize payment workflows through advanced routing logic.',
    para1: 'is a comprehensive platform designed to automate and optimize payment workflows through advanced routing logic, enabling seamless transaction processing without manual intervention.',
    para2: 'It allows users to configure bank charges dynamically based on amount, currency, or bank, supporting STP (Straight Through Processing) rules aligned with SWIFT standards and individual bank protocols for cost-effective cross-border payments.',
    regions: 'Hong Kong / India / Global',
    version: 'v3.8.1 Production',
    icon: Zap,
    primaryColorHex: '#00bfb3',
    techStack: ['React 19', 'TypeScript', 'Node.js', 'Go Settle', 'Kafka'],
    capabilities: [
      { title: 'Dynamic Bank Charge Routing', desc: 'Calculates dynamic fee tariffs based on payment size, currency pair, and correspondent bank rules.', detail: 'Evaluates transaction margins dynamically before selecting clearing corridors.', icon: DollarSign },
      { title: 'SWIFT STP Protocol Rule Engine', desc: 'Enforces Straight Through Processing rules complying with ISO 20022 and SWIFT MT standards.', detail: 'Validates beneficiary IBANs, BIC codes, and payment purpose tags automatically.', icon: Code2 },
      { title: 'Global Bank Clearing Manager', desc: 'Intelligent routing matrix selecting lowest latency & lowest cost clearing corridors.', detail: 'Routes transfers through optimal local clearing rails across Asia and Europe.', icon: Globe },
      { title: 'Zero-Touch Transaction Execution', desc: 'Automated zero-intervention payment dispatching for clean, compliant transfer requests.', detail: 'Eliminates manual touchpoints for 98.6% of standard corporate wire transfers.', icon: CheckCircle2 },
    ],
    personas: [
      { title: 'Payment Operations Lead', desc: 'Configures clearing rules, monitors STP clearance rates, and handles exceptions.', role: 'Payments Team' },
      { title: 'Correspondent Banking Lead', desc: 'Manages bank fee tariffs, routing preference tables, and clearing limits.', role: 'Banking Relations' },
      { title: 'Integration Engineer', desc: 'Maintains API Webhooks and ISO 20022 message payload formatters.', role: 'Engineering' },
    ],
    metrics: [
      { label: 'STP Straight-Through Rate', value: '98.6%' },
      { label: 'Avg Fee Savings', value: '1.85% per transfer' },
      { label: 'Daily Message Volume', value: '250,000+ SWIFT' },
    ],
    dsCompliancePct: 90,
    apiPayload: {
      endpoint: 'v3/routing/dispatch',
      method: 'POST',
      description: 'Dispatches cross-border payment through dynamic bank charge routing engine.',
      json: `{
  "payment_reference": "dq_swift_881920",
  "stp_status": "STP_APPROVED",
  "clearing_corridor": "HNH_HK_FAST_SETTLE",
  "applied_tariff_usd": 12.50,
  "fee_saving_pct": 2.1,
  "swift_mt103_reference": "260723HKH890123",
  "latency_ms": 115
}`
    }
  },
  {
    id: 'h-markets',
    name: 'H Markets',
    badgeTitle: 'FX Conversion & Execution Engine',
    category: 'payments',
    tagline: 'High-speed FX Conversion & multi-currency trade reporting engine',
    description: 'HMarkets is a platform designed to facilitate the FX Conversion for cross border payments with speed and precision.',
    para1: 'is a platform designed to facilitate FX Conversion for cross border payments with speed and precision.',
    para2: 'It supports major currency pairs and provides comprehensive reporting tools, including currency-wise transaction summaries and records of booked and cancelled trades.',
    regions: 'Hong Kong / Global Desk',
    version: 'v5.1.0 High-Freq',
    icon: TrendingUp,
    primaryColorHex: '#00bfb3',
    techStack: ['React 19', 'TypeScript', 'Go FIX', 'Redis Streams', 'gRPC'],
    capabilities: [
      { title: 'Institutional FX Execution', desc: 'Real-time spot and forward FX conversions across G10 and emerging market currency pairs.', detail: 'Streams sub-millisecond rates directly from Tier-1 liquidity providers.', icon: LineChart },
      { title: 'Currency-Wise Summaries', desc: 'Live net position aggregation, exposure dashboards, and daily trade volume breakdowns.', detail: 'Provides instant currency position visibility for corporate treasury desks.', icon: PieChart },
      { title: 'Booked & Cancelled Trade Audit', desc: 'Immutable audit logs tracking every trade quote, execution timestamp, and cancellation.', detail: 'Maintains tamper-proof transaction logs for regulatory trade compliance.', icon: Terminal },
      { title: 'Instant Quote Streaming', desc: 'Sub-millisecond rate feeds integrated directly with global liquidity providers.', detail: 'Locks FX rate quotes with zero slippage during payment execution.', icon: Activity },
    ],
    personas: [
      { title: 'FX Trader & Market Maker', desc: 'Executes spot currency deals, manages spread margins, and monitors live rate tickers.', role: 'Trading Desk' },
      { title: 'Corporate Treasury Client', desc: 'Books forward contracts and multi-currency conversions for international supplier payouts.', role: 'Corporate Client' },
      { title: 'Risk Analyst', desc: 'Monitors FX volatility, client position limits, and mark-to-market slippage.', role: 'Risk & Analytics' },
    ],
    metrics: [
      { label: 'Execution Speed', value: '< 15 ms' },
      { label: 'Active Currency Pairs', value: '45+ Majors & EMs' },
      { label: 'Monthly FX Volume', value: '$3.8B Nominal' },
    ],
    dsCompliancePct: 88,
    apiPayload: {
      endpoint: 'v5/fx/trade/book',
      method: 'POST',
      description: 'Books an institutional FX conversion trade with guaranteed rate lock.',
      json: `{
  "trade_id": "hm_trade_774910",
  "pair": "HKD/USD",
  "side": "BUY_USD",
  "rate": 7.8215,
  "source_amount_hkd": 500000.00,
  "payout_amount_usd": 63926.36,
  "trade_status": "BOOKED_EXECUTIVE",
  "timestamp": "2026-07-23T22:05:12Z"
}`
    },
    websiteUrl: 'https://fx.harbourandhills.com/login'
  },
  {
    id: 'edge-plus',
    name: 'Edge+',
    badgeTitle: 'Unified Regulatory Compliance & AML Hub',
    category: 'compliance',
    tagline: 'Centralized onboarding, real-time payment screening & post-trade monitoring',
    description: 'Edge+ is a unified compliance platform built for financial institutions, integrating key regulatory functions.',
    para1: 'is a unified compliance platform built for financial institutions, integrating key regulatory functions to improve efficiency and reduce risk.',
    para2: 'By centralizing client onboarding, payment screening, and post-transaction monitoring, it strengthens adherence to AML and financial regulations with automated workflows and real-time screening.',
    regions: 'Hong Kong / Global Watchlists',
    version: 'v4.0.0 RegTech',
    icon: ShieldCheck,
    primaryColorHex: '#00bfb3',
    techStack: ['React 19', 'FastAPI', 'Python AI', 'ElasticSearch', 'Kafka'],
    capabilities: [
      { title: 'Real-Time Payment Screening', desc: 'Scans transactions against OFAC, UN, EU, and HKMA sanctions lists in real time.', detail: 'Screens originators, beneficiaries, and intermediary banks in sub-40ms.', icon: ShieldAlert },
      { title: 'Centralized Client Onboarding (KYC)', desc: 'Automated corporate KYC/KYB document verification, PEP checking, and risk scoring.', detail: 'Centralizes corporate registry checks, UBO verifications, and ID verification.', icon: UserCheck },
      { title: 'Post-Transaction Monitoring', desc: 'AI-driven behavioral anomaly detection identifying suspicious structuring and velocity bursts.', detail: 'Detects unusual pattern anomalies and flags suspicious transaction flows.', icon: Activity },
      { title: 'Automated Regulatory Reporting', desc: 'Generates SARs (Suspicious Activity Reports) and regulatory compliance packages.', detail: 'Auto-populates HKMA and regional regulatory filing packages for audit.', icon: BookOpen },
    ],
    personas: [
      { title: 'Chief Compliance Officer (CCO)', desc: 'Oversees organizational AML compliance, regulatory filings, and audit readiness.', role: 'Executive Leadership' },
      { title: 'AML Sanctions Analyst', desc: 'Investigates flagged transactions, clears false positives, and escalates true matches.', role: 'Compliance Ops' },
      { title: 'Onboarding Specialist', desc: 'Reviews corporate entity structures, UBO details, and verification documents.', role: 'KYC Operations' },
    ],
    metrics: [
      { label: 'Screening Latency', value: '< 40 ms' },
      { label: 'False Positive Reduction', value: '42% AI-Optimized' },
      { label: 'Watchlists Monitored', value: '180+ Global Feeds' },
    ],
    dsCompliancePct: 86,
    apiPayload: {
      endpoint: 'v4/aml/screen',
      method: 'POST',
      description: 'Screens transaction parties against international sanctions and PEP databases.',
      json: `{
  "screening_id": "edge_scr_301928",
  "entity_name": "Harbour & Hills Corporate Payout",
  "sanction_match": false,
  "pep_match": false,
  "risk_score": 4.2,
  "compliance_decision": "PASS_CLEARED",
  "watchlists_checked": 184
}`
    },
    websiteUrl: 'https://edge.harbourandhills.com:93/login'
  },
  {
    id: 'h-business',
    name: 'H Business',
    badgeTitle: 'Enterprise Business Portal & Financial Control',
    category: 'enterprise',
    tagline: 'Secure portal for business account management, transactions & analytics',
    description: 'The HBusiness platform is a secure online portal meticulously designed for streamlined business management.',
    para1: 'is a secure online portal meticulously designed for streamlined business management across organizations of all sizes.',
    para2: 'It enables users to conveniently access their accounts, manage transactions, and retrieve internal analysis data to ensure operational efficiency and enhanced financial oversight.',
    regions: 'Hong Kong / India / Global',
    version: 'v3.5.0 Portal',
    icon: Building2,
    primaryColorHex: '#00bfb3',
    techStack: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind v4'],
    capabilities: [
      { title: 'Multi-Currency Account Portal', desc: 'Consolidated dashboard for multi-bank balances, statement downloads, and account health.', detail: 'Presents unified real-time balances across HKD, USD, EUR, and GBP accounts.', icon: CreditCard },
      { title: 'Internal Analytics & Oversight', desc: 'Visual cashflow charts, expenditure categorization, and trend forecasts.', detail: 'Visualizes historical cashflow velocity and monthly operational expenditure.', icon: LineChart },
      { title: 'Role-Based Access Control (RBAC)', desc: 'Customizable permissions matrix for executives, accountants, and approvers.', detail: 'Grants granular view/edit/approve rights for organizational team members.', icon: ShieldCheck },
      { title: 'Secure Bulk Batch Transfers', desc: 'Upload CSV/Excel payment batches with dual-authorization approval workflows.', detail: 'Supports bulk upload of vendor payout files with automated syntax validation.', icon: Zap },
    ],
    personas: [
      { title: 'Corporate CFO / Treasurer', desc: 'Monitors global liquidity balances, approves high-value wire transfers, and exports reports.', role: 'C-Suite' },
      { title: 'Accounting Manager', desc: 'Prepares monthly vendor payout batches and reconciles bank statements.', role: 'Finance' },
      { title: 'Auditor & Tax Advisor', desc: 'Retrieves read-only account balance histories and transaction ledger exports.', role: 'Audit' },
    ],
    metrics: [
      { label: 'Active Business Users', value: '12,500+ Orgs' },
      { label: 'Portal Uptime SLA', value: '99.99%' },
      { label: 'Security Standard', value: '2FA + FIDO2' },
    ],
    dsCompliancePct: 94,
    apiPayload: {
      endpoint: 'v3/account/summary',
      method: 'GET',
      description: 'Fetches consolidated multi-currency account balances and transaction insights.',
      json: `{
  "org_id": "hnh_org_88102",
  "primary_currency": "HKD",
  "consolidated_balance_hkd": 18450200.00,
  "accounts": [
    { "ccy": "HKD", "balance": 10200000.00 },
    { "ccy": "USD", "balance": 980000.00 },
    { "ccy": "EUR", "balance": 140000.00 }
  ],
  "security_tier": "ENTERPRISE_FIDO2_ACTIVE"
}`
    },
    websiteUrl: 'https://online.harbourandhills.com/login'
  },
  {
    id: 'ficoy',
    name: 'Ficoy+',
    badgeTitle: 'Strategic HRMS & People Ecosystem',
    category: 'hrms',
    tagline: 'Comprehensive HRMS uniting recruitment, onboarding, payroll & performance',
    description: 'Ficoy+, our HRMS, is a strategic platform that integrates all people-centric processes into one seamless ecosystem.',
    para1: 'our HRMS, is a strategic platform that integrates all people-centric processes into one seamless enterprise ecosystem.',
    para2: 'It streamlines the entire employee lifecycle—from recruitment and onboarding to performance management, payroll, and exits—empowering teams through self-service and data-driven workforce insights.',
    regions: 'India / Regional Offices',
    version: 'v2.9.0 HR Suite',
    icon: Users,
    primaryColorHex: '#00bfb3',
    techStack: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    capabilities: [
      { title: 'Complete Employee Lifecycle', desc: 'Manages recruitment ATS, automated onboarding, performance reviews, and exit workflows.', detail: 'Automates job postings, applicant tracking, and onboarding document sign-off.', icon: UserCheck },
      { title: 'Integrated Payroll & Tax Engine', desc: 'Automated salary calculations, tax deductions, reimbursements, and payslip generation.', detail: 'Calculates statutory tax withholdings and auto-dispatches digital payslips.', icon: DollarSign },
      { title: 'Employee Self-Service Portal', desc: 'Allows employees to apply for leave, view payslips, submit expenses, and update info.', detail: 'Empowers staff to manage leave requests and view compensation statements.', icon: Building2 },
      { title: 'Workforce Analytics & Insights', desc: 'Executive dashboards tracking attrition, headcount trends, and performance metrics.', detail: 'Delivers real-time headcount distribution and department attrition analytics.', icon: BarChart3 },
    ],
    personas: [
      { title: 'CHRO / HR Director', desc: 'Tracks organization-wide attrition trends, compensation benchmarks, and talent acquisition.', role: 'HR Leadership' },
      { title: 'Payroll Manager', desc: 'Processes monthly payroll runs, statutory tax filings, and bonus distributions.', role: 'HR Operations' },
      { title: 'HNH Employee', desc: 'Accesses self-service portal to submit leave requests, claim expenses, and view payslips.', role: 'All Staff' },
    ],
    metrics: [
      { label: 'Lifecycle Automation', value: '100% End-to-End' },
      { label: 'Payroll Processing Time', value: '< 10 mins' },
      { label: 'Self-Service Adoption', value: '96%' },
    ],
    dsCompliancePct: 85,
    apiPayload: {
      endpoint: 'v2/payroll/process',
      method: 'POST',
      description: 'Executes automated monthly payroll run with tax calculation engine.',
      json: `{
  "payroll_run_id": "ficoy_pay_202607",
  "period": "JULY_2026",
  "total_employees": 450,
  "net_payout_amount": 3420000.00,
  "status": "APPROVED_DISPATCHED",
  "tax_compliance_filing": "AUTO_FILED"
}`
    },
    websiteUrl: 'https://ficoy.harbourandhills.com/login'
  },
  {
    id: 'coventrix',
    name: 'Coventrix+',
    badgeTitle: 'Centralized Enterprise Operations & Analytics Hub',
    category: 'enterprise',
    tagline: 'Unites departmental data, project management & real-time business analytics',
    description: 'Coventrix+ is a centralized platform that integrates all departmental information, enhancing collaboration and communication.',
    para1: 'is a centralized platform that integrates all departmental information, enhancing collaboration and communication across global teams.',
    para2: 'With tools for project management, real-time analytics, and customizable dashboards, teams can make data-driven decisions while ensuring alignment across Sales, Finance, Marketing, and Operations.',
    regions: 'Hong Kong / India / Global',
    version: 'v3.2.0 Enterprise',
    icon: LayoutDashboard,
    primaryColorHex: '#00bfb3',
    techStack: ['React 19', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Recharts'],
    capabilities: [
      { title: 'Cross-Departmental Data Hub', desc: 'Unifies operational metrics across Sales, Finance, Marketing, Operations, and IT.', detail: 'Connects disparate department data silos into a single analytical pipeline.', icon: Layers },
      { title: 'Customizable Analytics Dashboards', desc: 'Drag-and-drop widget layout engine with real-time KPI streaming.', detail: 'Allows departmental leaders to configure custom goal tracking views.', icon: PieChart },
      { title: 'Enterprise Project Management', desc: 'Task tracking, sprint planning, and goal alignment boards across departments.', detail: 'Tracks inter-departmental dependencies and operational deliverables.', icon: Briefcase },
      { title: 'Granular Security & Compliance', desc: 'Enterprise-grade encryption and department-level data governance policies.', detail: 'Protects sensitive operational data with row-level security permissions.', icon: ShieldCheck },
    ],
    personas: [
      { title: 'Chief Operating Officer (COO)', desc: 'Monitors cross-departmental KPIs, project timelines, and operational bottlenecks.', role: 'Executive' },
      { title: 'Department Lead (Sales/Ops)', desc: 'Customizes departmental performance dashboards and tracks quarterly OKRs.', role: 'Management' },
      { title: 'Business Analyst', desc: 'Builds cross-functional analytical views and exports data models.', role: 'Analytics' },
    ],
    metrics: [
      { label: 'Departments Unified', value: 'Sales, Fin, Ops, HR' },
      { label: 'Analytics Refresh', value: 'Real-time' },
      { label: 'Dashboard Templates', value: '35+ Pre-built' },
    ],
    dsCompliancePct: 89,
    apiPayload: {
      endpoint: 'v3/analytics/dashboard/kpi',
      method: 'GET',
      description: 'Fetches cross-departmental executive KPI metrics and operational status.',
      json: `{
  "organization": "Harbour & Hills Global",
  "timestamp": "2026-07-23T22:10:00Z",
  "kpis": {
    "sales_pipeline_usd": 42500000.00,
    "ops_sla_compliance": 99.8,
    "finance_realized_margin": 14.2,
    "active_projects": 38
  },
  "alignment_score": "98.5%"
}`
    },
    websiteUrl: 'https://coventrix.harbourandhills.com:81/login'
  }
];

interface LegacyPlatformsProps {
  activePath: string;
  onNavigate: (path: string) => void;
  themeMode?: 'light' | 'dark';
}

export const LegacyPlatforms: React.FC<LegacyPlatformsProps> = ({
  activePath,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'mapping'>('overview');
  const [formTab, setFormTab] = useState<'spec' | 'sla'>('spec');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(label);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const currentPlatformId = activePath.replace('legacy-platforms/', '');
  const activePlatform = PLATFORMS_LIST.find(p => p.id === currentPlatformId);

  // DIRECTORY OVERVIEW PAGE
  if (activePath === 'legacy-platforms/overview' || !activePlatform) {
    return (
      <div className="space-y-16 animate-fadeIn font-sans bg-[#090d16] text-white p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
        {/* Header Tag */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-widest">
            <span className="inline-block w-2 h-2 rounded-sm bg-[#00bfb3]" />
            <span>HARBOUR & HILLS TECH PLATFORMS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-100 tracking-tight leading-tight max-w-4xl">
            By integrating Harbour & Hills core platforms, you gain an <span className="font-bold text-white">experienced financial partner</span> with proven engineering in global payments.
          </h1>

          <div className="pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00bfb3] text-[#090d16] font-bold text-xs shadow-lg shadow-[#00bfb3]/20">
              <span>+ Explore All 7 Platforms</span>
            </span>
          </div>
        </div>

        {/* 2x2 Asymmetric Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-slate-100 text-slate-900 flex flex-col justify-between min-h-[280px] shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-900 flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5 text-slate-900" />
            </div>
            <div className="space-y-2 mt-8">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Payments & FX Core</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                QoR3+, DigiQore+, and H Markets provide automated FX revaluations, 3-way bank reconciliation, dynamic bank charge routing, and instant spot rate execution.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#00bfb3] text-[#090d16] flex flex-col justify-between min-h-[280px] shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-[#090d16] text-[#00bfb3] flex items-center justify-center font-bold shadow-md">
              <ShieldCheck className="w-5 h-5 text-[#00bfb3]" />
            </div>
            <div className="space-y-2 mt-8">
              <h3 className="text-2xl font-black tracking-tight text-[#090d16]">Unified RegTech & AML</h3>
              <p className="text-xs text-[#090d16]/90 leading-relaxed font-medium">
                Edge+ integrates corporate KYC onboarding, real-time sanctions screening against 180+ global watchlists, and post-transaction anomaly detection.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white text-slate-900 flex flex-col justify-between min-h-[280px] shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5 text-slate-900" />
            </div>
            <div className="space-y-2 mt-8">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Enterprise & HRMS Suite</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                H Business, Ficoy+, and Coventrix+ unite multi-currency business accounts, complete employee lifecycle payroll, and departmental analytics.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-800 text-white flex flex-col justify-between min-h-[280px] shadow-lg border border-slate-700">
            <div className="w-10 h-10 rounded-xl bg-slate-700 text-[#00bfb3] flex items-center justify-center font-bold">
              <Globe className="w-5 h-5 text-[#00bfb3]" />
            </div>
            <div className="space-y-2 mt-8">
              <h3 className="text-2xl font-bold text-white tracking-tight">ISO 20022 Compliance</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                98.6% Straight Through Processing clearance aligned with international SWIFT MT messaging protocols and enterprise-grade FIDO2 security.
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Directory Selector */}
        <div className="space-y-6 pt-4 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white tracking-tight">Platform Portfolio Directory</h2>
            <span className="text-xs text-slate-400 font-mono">7 Legacy Systems</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PLATFORMS_LIST.map((platform) => {
              const IconComp = platform.icon;
              const isQor3 = platform.id === 'qor3';
              const isDigiqore = platform.id === 'digiqore';
              const isHMarkets = platform.id === 'h-markets';
              const isEdgePlus = platform.id === 'edge-plus';
              const isHBusiness = platform.id === 'h-business';
              const isFicoy = platform.id === 'ficoy';
              const isCoventrix = platform.id === 'coventrix';
              return (
                <div
                  key={platform.id}
                  onClick={() => onNavigate(`legacy-platforms/${platform.id}`)}
                  className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#00bfb3]/50 transition-all cursor-pointer space-y-3 group"
                >
                  <div className="flex items-start justify-between gap-3 min-h-6">
                    {isQor3 ? (
                      <Qor3Logo className="h-5 w-auto mt-0.5" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                    ) : isDigiqore ? (
                      <DigiqoreLogo className="h-5 w-auto mt-0.5" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                    ) : isHMarkets ? (
                      <HMarketsLogo className="h-5 w-auto mt-0.5" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                    ) : isEdgePlus ? (
                      <EdgePlusLogo className="h-5 w-auto mt-0.5" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                    ) : isHBusiness ? (
                      <HBusinessLogo className="h-5 w-auto mt-0.5" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                    ) : isFicoy ? (
                      <FicoyLogo className="h-5 w-auto mt-0.5" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                    ) : isCoventrix ? (
                      <CoventrixLogo className="h-5 w-auto mt-0.5" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                    ) : (
                      <IconComp className="w-4 h-4 text-[#00bfb3] mt-0.5 shrink-0" />
                    )}
                    <span className="text-[10px] font-mono text-slate-400 text-right leading-tight select-none shrink">
                      {platform.version}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white group-hover:text-[#00bfb3] transition-colors">{platform.name}</h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1 font-light">{platform.tagline}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // PLATFORM MICROSITE LANDING PAGE
  const PlatformIcon = activePlatform.icon;
  const isQor3 = activePlatform.id === 'qor3';
  const isDigiqore = activePlatform.id === 'digiqore';
  const isHMarkets = activePlatform.id === 'h-markets';
  const isEdgePlus = activePlatform.id === 'edge-plus';
  const isHBusiness = activePlatform.id === 'h-business';
  const isFicoy = activePlatform.id === 'ficoy';
  const isCoventrix = activePlatform.id === 'coventrix';

  // Extract Lucide icons for capability cards
  const CapIcon0 = activePlatform.capabilities[0]?.icon || Zap;
  const CapIcon1 = activePlatform.capabilities[1]?.icon || Code2;
  const CapIcon2 = activePlatform.capabilities[2]?.icon || Globe;
  const CapIcon3 = activePlatform.capabilities[3]?.icon || CheckCircle2;

  return (
    <div className="space-y-16 animate-fadeIn font-sans bg-[#090d16] text-white p-6 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-xs font-mono text-slate-400">
        <button
          onClick={() => onNavigate('legacy-platforms/overview')}
          className="flex items-center gap-1.5 hover:text-[#00bfb3] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Platforms Directory</span>
        </button>
        <div className="flex items-center gap-2">
          <span>■ HARBOUR & HILLS PLATFORM</span>
          <span>/</span>
          <span className="text-[#00bfb3] font-bold">{activePlatform.name}</span>
        </div>
      </div>

      {/* Hero Headline */}
      <div className="space-y-4 max-w-4xl">
        <p className="text-base sm:text-lg md:text-xl font-light text-slate-100 tracking-tight leading-relaxed">
          {isQor3 ? (
            <span className="inline-block mr-2.5 align-middle">
              <Qor3Logo className="h-8 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
            </span>
          ) : isDigiqore ? (
            <span className="inline-block mr-2.5 align-middle">
              <DigiqoreLogo className="h-8 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
            </span>
          ) : isHMarkets ? (
            <span className="inline-block mr-2.5 align-middle">
              <HMarketsLogo className="h-8 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
            </span>
          ) : isEdgePlus ? (
            <span className="inline-block mr-2.5 align-middle">
              <EdgePlusLogo className="h-8 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
            </span>
          ) : isHBusiness ? (
            <span className="inline-block mr-2.5 align-middle">
              <HBusinessLogo className="h-8 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
            </span>
          ) : isFicoy ? (
            <span className="inline-block mr-2.5 align-middle">
              <FicoyLogo className="h-8 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
            </span>
          ) : isCoventrix ? (
            <span className="inline-block mr-2.5 align-middle">
              <CoventrixLogo className="h-8 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
            </span>
          ) : (
            <strong className="font-black text-[#00bfb3] border-b-2 border-[#00bfb3]/40 pb-0.5 mr-1.5">{activePlatform.name}</strong>
          )}
          {activePlatform.para1}
        </p>

        <p className="text-base sm:text-lg md:text-xl font-light text-slate-300 tracking-tight leading-relaxed">
          {activePlatform.para2}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          {activePlatform.websiteUrl && (
            <a 
              href={activePlatform.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00bfb3]/10 hover:bg-[#00bfb3]/20 text-[#00bfb3] hover:text-[#00bfb3] transition-all font-bold text-xs border border-[#00bfb3]/30 shadow-lg cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Visit Website</span>
            </a>
          )}
          <span className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700">
            {activePlatform.version}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700">
            Region: {activePlatform.regions}
          </span>
          <span className="px-3 py-1.5 rounded-full bg-slate-800 text-[#00bfb3] font-mono text-xs border border-slate-700">
            {activePlatform.dsCompliancePct}% DS Tokens
          </span>
        </div>
      </div>

      {/* Tab Selector */}
      <div className="border-b border-slate-800 pb-2">
        <div className="flex space-x-6 text-xs font-mono">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'overview' ? 'border-[#00bfb3] text-[#00bfb3] font-bold' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            // 01 CORE PILLARS & BRAND KIT
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'architecture' ? 'border-[#00bfb3] text-[#00bfb3] font-bold' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            // 02 SYSTEM ARCHITECTURE & API
          </button>
          <button
            onClick={() => setActiveTab('mapping')}
            className={`pb-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'mapping' ? 'border-[#00bfb3] text-[#00bfb3] font-bold' : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            // 03 DESIGN TOKEN MAPPING
          </button>
        </div>
      </div>

      {/* TAB 1: 2x2 ASYMMETRIC GRID + BRAND KIT WITH CLEAN ROW-BASED TYPOGRAPHY MAPPING + DEVELOPER MODULE */}
      {activeTab === 'overview' && (
        <div className="space-y-16 animate-fadeIn">
          {/* 2x2 Asymmetric Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-slate-100 text-slate-900 flex flex-col justify-between min-h-[280px] shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-900 flex items-center justify-center font-bold">
                <CapIcon0 className="w-5 h-5 text-slate-900" />
              </div>
              <div className="space-y-2 mt-8">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{activePlatform.capabilities[0]?.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">{activePlatform.capabilities[0]?.desc}</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-[#00bfb3] text-[#090d16] flex flex-col justify-between min-h-[280px] shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#090d16] text-[#00bfb3] flex items-center justify-center font-bold shadow-md">
                <CapIcon1 className="w-5 h-5 text-[#00bfb3]" />
              </div>
              <div className="space-y-2 mt-8">
                <h3 className="text-2xl font-black tracking-tight text-[#090d16]">{activePlatform.capabilities[1]?.title}</h3>
                <p className="text-xs text-[#090d16]/90 leading-relaxed font-medium">{activePlatform.capabilities[1]?.desc}</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-white text-slate-900 flex flex-col justify-between min-h-[280px] shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center font-bold">
                <CapIcon2 className="w-5 h-5 text-slate-900" />
              </div>
              <div className="space-y-2 mt-8">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{activePlatform.capabilities[2]?.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">{activePlatform.capabilities[2]?.desc}</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl bg-slate-800 text-white flex flex-col justify-between min-h-[280px] shadow-lg border border-slate-700">
              <div className="w-10 h-10 rounded-xl bg-slate-700 text-[#00bfb3] flex items-center justify-center font-bold">
                <CapIcon3 className="w-5 h-5 text-[#00bfb3]" />
              </div>
              <div className="space-y-2 mt-8">
                <h3 className="text-2xl font-bold text-white tracking-tight">{activePlatform.capabilities[3]?.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">{activePlatform.capabilities[3]?.desc}</p>
              </div>
            </div>
          </div>

          {/* Full-Bleed Live Workspace Container */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                {isQor3 ? (
                  <Qor3Logo className="h-5 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                ) : isDigiqore ? (
                  <DigiqoreLogo className="h-5 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                ) : isHMarkets ? (
                  <HMarketsLogo className="h-5 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                ) : isEdgePlus ? (
                  <EdgePlusLogo className="h-5 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                ) : isHBusiness ? (
                  <HBusinessLogo className="h-5 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                ) : isFicoy ? (
                  <FicoyLogo className="h-5 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                ) : isCoventrix ? (
                  <CoventrixLogo className="h-5 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                ) : (
                  <PlatformIcon className="w-4 h-4 text-[#00bfb3]" />
                )}
                <span className="font-bold text-white">{activePlatform.name} Real-Time Operational Workspace</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-[#00bfb3]/20 text-[#00bfb3] font-bold">LIVE METRICS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {activePlatform.metrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono">
                  <span className="text-[10px] text-slate-400 block">{m.label.toUpperCase()}</span>
                  <span className="text-lg font-bold text-[#00bfb3] mt-1 block">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HNH BRAND KIT SECTION */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-10 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Palette className="w-5 h-5 text-[#00bfb3]" />
                  {activePlatform.name} — HNH Brand Kit & Specifications
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Official Harbour & Hills brand specifications, color tokens, typography scales, and logo mark specimens.
                </p>
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#00bfb3]/20 text-[#00bfb3] border border-[#00bfb3]/30">
                100% Brand Aligned
              </span>
            </div>

            {/* 1. Logo Mark Specimens */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00bfb3]" />
                Product Mark & Logo Specimen
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-slate-200 bg-white text-slate-900 flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-4">
                    {isQor3 ? (
                      <Qor3Logo className="h-10 w-auto" primaryColor="#023e63" secondaryColor="#00bfb3" />
                    ) : isDigiqore ? (
                      <DigiqoreLogo className="h-10 w-auto" primaryColor="#023e63" secondaryColor="#00bfb3" />
                    ) : isHMarkets ? (
                      <HMarketsLogo className="h-10 w-auto" primaryColor="#023e63" secondaryColor="#00bfb3" />
                    ) : isEdgePlus ? (
                      <EdgePlusLogo className="h-10 w-auto" primaryColor="#023e63" secondaryColor="#00bfb3" />
                    ) : isHBusiness ? (
                      <HBusinessLogo className="h-10 w-auto" primaryColor="#023e63" secondaryColor="#00bfb3" />
                    ) : isFicoy ? (
                      <FicoyLogo className="h-10 w-auto" primaryColor="#023e63" secondaryColor="#20bbb1" />
                    ) : isCoventrix ? (
                      <CoventrixLogo className="h-10 w-auto" primaryColor="#023e63" secondaryColor="#00bfb3" />
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-xl bg-[#023e63] text-[#00bfb3] flex items-center justify-center shadow-md shrink-0">
                          <PlatformIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="font-extrabold text-xl text-[#023e63] tracking-tight block">{activePlatform.name.toUpperCase()}</span>
                          <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mt-0.5">Harbour & Hills Platform</span>
                        </div>
                      </>
                    )}
                  </div>
                  <span className="text-xs text-slate-400 font-mono px-3 py-1 rounded-full bg-slate-100 border border-slate-200">Light Specimen</span>
                </div>

                <div className="p-6 rounded-2xl border border-slate-800 bg-[#011927] text-white flex items-center justify-between shadow-md">
                  <div className="flex items-center gap-4">
                    {isQor3 ? (
                      <Qor3Logo className="h-10 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                    ) : isDigiqore ? (
                      <DigiqoreLogo className="h-10 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                    ) : isHMarkets ? (
                      <HMarketsLogo className="h-10 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                    ) : isEdgePlus ? (
                      <EdgePlusLogo className="h-10 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                    ) : isHBusiness ? (
                      <HBusinessLogo className="h-10 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                    ) : isFicoy ? (
                      <FicoyLogo className="h-10 w-auto" primaryColor="#ffffff" secondaryColor="#20bbb1" />
                    ) : isCoventrix ? (
                      <CoventrixLogo className="h-10 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-xl bg-[#00bfb3] text-[#011927] flex items-center justify-center shadow-lg shrink-0">
                          <PlatformIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="font-extrabold text-xl text-white tracking-tight block">{activePlatform.name.toUpperCase()}</span>
                          <span className="text-[10px] text-[#00bfb3] font-mono tracking-widest uppercase block mt-0.5">Harbour & Hills Platform</span>
                        </div>
                      </>
                    )}
                  </div>
                  <span className="text-xs text-slate-400 font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800">Dark Specimen</span>
                </div>
              </div>
            </div>

            {/* 2. HNH Core Brand Palette Tokens */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00bfb3]" />
                HNH Brand Palette Tokens
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950 shadow-md">
                  <div className="h-16 bg-[#023e63] p-3 flex items-end justify-between">
                    <span className="text-[10px] font-mono text-white/80">--primary-500</span>
                  </div>
                  <div className="p-4 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">Primary Navy</span>
                      <button onClick={() => handleCopy('#023E63', 'navy')} className="p-1 rounded text-slate-400 hover:text-white cursor-pointer transition-colors">
                        {copiedToken === 'navy' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono block">#023E63</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950 shadow-md">
                  <div className="h-16 bg-[#00bfb3] p-3 flex items-end justify-between">
                    <span className="text-[10px] font-mono text-slate-950 font-bold">--secondary-500</span>
                  </div>
                  <div className="p-4 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">Secondary Teal</span>
                      <button onClick={() => handleCopy('#00BFB3', 'teal')} className="p-1 rounded text-slate-400 hover:text-white cursor-pointer transition-colors">
                        {copiedToken === 'teal' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono block">#00BFB3</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950 shadow-md">
                  <div className="h-16 bg-[#0a0f1d] p-3 flex items-end justify-between border-b border-slate-800">
                    <span className="text-[10px] font-mono text-white/80">--background-dark</span>
                  </div>
                  <div className="p-4 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">Dark Navy</span>
                      <button onClick={() => handleCopy('#0A0F1D', 'darknavy')} className="p-1 rounded text-slate-400 hover:text-white cursor-pointer transition-colors">
                        {copiedToken === 'darknavy' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono block">#0A0F1D</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950 shadow-md">
                  <div className="h-16 bg-[#f8fafc] p-3 flex items-end justify-between border-b border-slate-800">
                    <span className="text-[10px] font-mono text-slate-900 font-bold">--background-light</span>
                  </div>
                  <div className="p-4 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">Light Slate</span>
                      <button onClick={() => handleCopy('#F8FAFC', 'slate')} className="p-1 rounded text-slate-400 hover:text-white cursor-pointer transition-colors">
                        {copiedToken === 'slate' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono block">#F8FAFC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. HNH Typography Specifications */}
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Type className="w-4 h-4 text-[#00bfb3]" />
                HNH Typography Standards & Type Scale
              </h3>

              <div className="space-y-2 bg-slate-950/40 rounded-2xl border border-slate-800 p-6 divide-y divide-slate-800/80">
                {/* Row 1: Headings */}
                <div className="pb-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6 space-y-1.5">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-[#00bfb3]/15 text-[#00bfb3] font-mono text-[10px] font-bold uppercase tracking-wider">
                      --font-sans (Headings)
                    </span>
                    <h4 className="text-3xl font-black text-white tracking-tight leading-none">Inter Display</h4>
                    <p className="text-[11px] text-slate-500 font-mono tracking-tight leading-relaxed select-all">
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890
                    </p>
                  </div>
                  <div className="md:col-span-6 grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-slate-500 uppercase block">Weight / Weight Class</span>
                      <span className="text-white font-bold text-sm block">700 / 800 (Bold & Black)</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-slate-500 uppercase block">System Application</span>
                      <span className="text-slate-200 block">Page Titles, Section Headers</span>
                    </div>
                  </div>
                </div>

                {/* Row 2: Body & UI */}
                <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6 space-y-1.5">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-[#00bfb3]/15 text-[#00bfb3] font-mono text-[10px] font-bold uppercase tracking-wider">
                      --font-sans (Body & UI)
                    </span>
                    <h4 className="text-lg font-medium text-slate-200 leading-none">Inter Sans</h4>
                    <p className="text-[11px] text-slate-500 font-mono tracking-tight leading-relaxed select-all">
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890
                    </p>
                  </div>
                  <div className="md:col-span-6 grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-slate-500 uppercase block">Weight / Weight Class</span>
                      <span className="text-white font-bold text-sm block">400 / 500 (Regular & Medium)</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-slate-500 uppercase block">System Application</span>
                      <span className="text-slate-200 block">Paragraphs, Buttons, Forms</span>
                    </div>
                  </div>
                </div>

                {/* Row 3: Code & Schemas */}
                <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6 space-y-1.5">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-[#00bfb3]/15 text-[#00bfb3] font-mono text-[10px] font-bold uppercase tracking-wider">
                      --font-mono (Code & Schemas)
                    </span>
                    <h4 className="text-base font-bold text-teal-300 font-mono leading-none">JetBrains Mono</h4>
                    <p className="text-[11px] text-teal-400/80 font-mono tracking-tight leading-relaxed select-all">
                      const qor3 = await HNH.Platforms.get(&apos;qor3&apos;);
                    </p>
                  </div>
                  <div className="md:col-span-6 grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-slate-500 uppercase block">Weight / Weight Class</span>
                      <span className="text-white font-bold text-sm block">400 / 700 (Regular & Bold)</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-slate-500 uppercase block">System Application</span>
                      <span className="text-slate-200 block">API Code Blocks, JSON Specs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* API Integration Module */}
          <div className="rounded-3xl bg-white text-slate-900 p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 shadow-2xl items-start">
            <div className="md:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#023e63]/10 text-[#023e63] font-mono text-[10px] font-bold uppercase">
                Developer Sandbox Module
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {formTab === 'spec' ? 'API Integration' : 'Enterprise SLA'} <br />
                <span className="text-[#023e63]">{formTab === 'spec' ? '& Sandbox Access' : '& Guarantee Spec'}</span>
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed font-light max-w-sm">
                {formTab === 'spec'
                  ? 'This module allows institutional developers and partner systems to review target API endpoints, verify OAuth 2.0 / mTLS authentication requirements, and copy the endpoint payload schema directly.'
                  : 'Review Harbour & Hills enterprise service level commitments, high-availability multi-region failover targets, and SOC2 / ISO 20022 compliance guarantees.'}
              </p>
            </div>

            <div className="md:col-span-7 rounded-2xl bg-[#090d16] text-white p-6 sm:p-8 space-y-6 shadow-xl">
              {/* Interactive Tabs */}
              <div className="flex items-center gap-6 text-xs font-mono border-b border-slate-800 pb-1">
                <button
                  onClick={() => setFormTab('spec')}
                  className={`pb-3 transition-all cursor-pointer ${
                    formTab === 'spec'
                      ? 'text-[#00bfb3] font-bold border-b-2 border-[#00bfb3]'
                      : 'text-slate-400 hover:text-white border-b-2 border-transparent'
                  }`}
                >
                  API Specification
                </button>
                <button
                  onClick={() => setFormTab('sla')}
                  className={`pb-3 transition-all cursor-pointer ${
                    formTab === 'sla'
                      ? 'text-[#00bfb3] font-bold border-b-2 border-[#00bfb3]'
                      : 'text-slate-400 hover:text-white border-b-2 border-transparent'
                  }`}
                >
                  Enterprise SLA
                </button>
              </div>

              {/* TAB CONTENT 1: API SPECIFICATION */}
              {formTab === 'spec' && (
                <div className="space-y-4 text-xs font-mono animate-fadeIn">
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase block mb-1">Organization Name*</label>
                    <input type="text" readOnly value="Harbour & Hills Partner" className="w-full bg-transparent border-b border-slate-700 py-1.5 text-white focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase block mb-1">Target Endpoint*</label>
                    <input type="text" readOnly value={activePlatform.apiPayload.endpoint} className="w-full bg-transparent border-b border-slate-700 py-1.5 text-[#00bfb3] focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase block mb-1">Authentication Tier*</label>
                    <input type="text" readOnly value="OAuth 2.0 / mTLS Mutual Authentication" className="w-full bg-transparent border-b border-slate-700 py-1.5 text-white focus:outline-none" />
                  </div>

                  <button
                    onClick={() => handleCopy(activePlatform.apiPayload.endpoint, 'api-copy')}
                    className="w-full py-3 rounded-full bg-[#00bfb3] text-[#090d16] font-bold text-xs hover:bg-[#00bfb3]/90 transition-colors cursor-pointer flex items-center justify-center gap-2 mt-4"
                  >
                    <span>+ {copiedToken === 'api-copy' ? 'Endpoint Schema Copied!' : 'Copy Endpoint Schema'}</span>
                  </button>
                </div>
              )}

              {/* TAB CONTENT 2: ENTERPRISE SLA */}
              {formTab === 'sla' && (
                <div className="space-y-4 text-xs font-mono animate-fadeIn">
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase block mb-1">Uptime Availability Guarantee*</label>
                    <input type="text" readOnly value="99.99% Availability SLA (24/7 Monitoring)" className="w-full bg-transparent border-b border-slate-700 py-1.5 text-[#00bfb3] font-bold focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase block mb-1">Disaster Recovery RPO / RTO*</label>
                    <input type="text" readOnly value="< 15 Sec RPO (Data Loss) / < 2 Min RTO (Recovery)" className="w-full bg-transparent border-b border-slate-700 py-1.5 text-white focus:outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase block mb-1">Security & Regulatory Compliance*</label>
                    <input type="text" readOnly value="ISO 20022 / SOC2 Type II / HKMA RegTech Compliant" className="w-full bg-transparent border-b border-slate-700 py-1.5 text-white focus:outline-none" />
                  </div>

                  <button
                    onClick={() => handleCopy("99.99% Availability SLA / <15s RPO / SOC2 Type II", 'sla-copy')}
                    className="w-full py-3 rounded-full bg-[#00bfb3] text-[#090d16] font-bold text-xs hover:bg-[#00bfb3]/90 transition-colors cursor-pointer flex items-center justify-center gap-2 mt-4"
                  >
                    <span>+ {copiedToken === 'sla-copy' ? 'SLA Certificate Spec Copied!' : 'Copy SLA Guarantee PDF Spec'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SYSTEM ARCHITECTURE & API CONTRACT */}
      {activeTab === 'architecture' && (
        <div className="space-y-12 animate-fadeIn">
          {/* Microservice Architecture Pipeline */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Server className="w-5 h-5 text-[#00bfb3]" />
                  {activePlatform.name} Architecture Pipeline
                </h2>
                <p className="text-xs text-slate-400 mt-1">End-to-end microservices data flow and compliance validation stream.</p>
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#00bfb3]/20 text-[#00bfb3] border border-[#00bfb3]/30 font-mono">
                ISO 20022 Ready
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="p-4 rounded-2xl bg-[#023e63] text-white space-y-2 border border-slate-700/80">
                <div className="text-[10px] font-mono text-[#00bfb3]">STEP 01</div>
                <h3 className="font-bold text-sm">Client Portal / API</h3>
                <p className="text-[11px] text-slate-300">Authenticated user request.</p>
                <div className="text-[10px] text-slate-300 font-mono pt-2">OAuth2 / OIDC</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#023e63] text-white space-y-2 border border-[#00bfb3]/40">
                <div className="text-[10px] font-mono text-[#00bfb3]">STEP 02</div>
                <h3 className="font-bold text-sm">API Gateway</h3>
                <p className="text-[11px] text-slate-300">Rate limiting & token auth.</p>
                <div className="text-[10px] text-[#00bfb3] font-mono pt-2">Redis Cluster</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#023e63] text-white space-y-2 border border-emerald-500/40">
                <div className="text-[10px] font-mono text-emerald-300">STEP 03</div>
                <h3 className="font-bold text-sm">Core Engine</h3>
                <p className="text-[11px] text-slate-300">{activePlatform.name} business logic.</p>
                <div className="text-[10px] text-emerald-300 font-mono pt-2">Go / Node / Python</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#023e63] text-white space-y-2 border border-amber-500/40">
                <div className="text-[10px] font-mono text-amber-300">STEP 04</div>
                <h3 className="font-bold text-sm">Compliance & Audit</h3>
                <p className="text-[11px] text-slate-300">Real-time log & AML check.</p>
                <div className="text-[10px] text-amber-300 font-mono pt-2">Kafka Streaming</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#023e63] text-white space-y-2 border border-slate-700/80">
                <div className="text-[10px] font-mono text-[#00bfb3]">STEP 05</div>
                <h3 className="font-bold text-sm">Storage Ledger</h3>
                <p className="text-[11px] text-slate-300">PostgreSQL ledger database.</p>
                <div className="text-[10px] text-slate-300 font-mono pt-2">Encrypted Vault</div>
              </div>
            </div>
          </div>

          {/* Interactive API Payload Contract Inspector */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-bold text-white flex items-center gap-2 text-sm font-sans">
                <Terminal className="w-5 h-5 text-[#00bfb3]" />
                {activePlatform.name} API Contract & Payload Schema
              </span>
              <span className="text-emerald-400 font-bold">200 OK SUCCESS</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 font-sans">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-500/20 text-emerald-400">
                    {activePlatform.apiPayload.method}
                  </span>
                  <span className="font-mono text-xs text-white font-bold">
                    {activePlatform.apiPayload.endpoint}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {activePlatform.apiPayload.description}
                </p>
                <button
                  onClick={() => handleCopy(activePlatform.apiPayload.json, 'json-spec')}
                  className="mt-2 w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-[11px] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Copy size={12} />
                  <span>{copiedToken === 'json-spec' ? 'JSON Copied!' : 'Copy JSON Payload'}</span>
                </button>
              </div>

              <div className="lg:col-span-2 rounded-2xl bg-[#011927] border border-slate-800 p-4 text-slate-200 overflow-x-auto">
                <pre className="text-[#00bfb3] leading-relaxed">{activePlatform.apiPayload.json}</pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DESIGN TOKEN MAPPING */}
      {activeTab === 'mapping' && (
        <div className="space-y-12 animate-fadeIn">
          {/* Master Token Matrix */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="font-bold text-white text-base font-sans flex items-center gap-2">
                <Boxes className="w-5 h-5 text-[#00bfb3]" />
                {activePlatform.name} Design System Token Compliance
              </h2>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {activePlatform.dsCompliancePct}% Token Compliance
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <span className="text-slate-400 text-[10px] block">PRIMARY NAVY</span>
                <span className="text-[#023e63] font-bold text-sm">#023E63</span>
                <span className="text-[11px] text-slate-300 block mt-1 font-sans font-light">Main Navigation & Portal Cards</span>
              </div>
              <div className="p-4 bg-[#011927] rounded-2xl border border-slate-800">
                <span className="text-slate-400 text-[10px] block">SECONDARY TEAL</span>
                <span className="text-[#00bfb3] font-bold text-sm">#00BFB3</span>
                <span className="text-[11px] text-slate-300 block mt-1 font-sans font-light">Action Triggers & Glow Accents</span>
              </div>
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <span className="text-slate-400 text-[10px] block">PRIMARY FONT</span>
                <span className="text-white font-bold text-sm">Inter Sans</span>
                <span className="text-[11px] text-slate-300 block mt-1 font-sans font-light">Headings, Body & Form Controls</span>
              </div>
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <span className="text-slate-400 text-[10px] block">BORDER RADIUS</span>
                <span className="text-[#00bfb3] font-bold text-sm">24px / 32px</span>
                <span className="text-[11px] text-slate-300 block mt-1 font-sans font-light">Asymmetric Cards & Containers</span>
              </div>
            </div>
          </div>

          {/* Interactive Live Component Sandbox */}
          <div className="p-8 rounded-3xl border-2 border-[#00bfb3]/30 bg-slate-900 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 font-mono text-xs">
              <h2 className="font-bold text-white text-base font-sans flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#00bfb3]" />
                Live {activePlatform.name} Workspace Sandbox (Built with HNH Design System)
              </h2>
              <span className="text-[#00bfb3] font-bold">100% REACT COMPONENT</span>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-[#011927] text-white space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 font-mono text-xs">
                <div className="flex items-center gap-3">
                  {isQor3 ? (
                    <Qor3Logo className="h-6 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                  ) : isDigiqore ? (
                    <DigiqoreLogo className="h-6 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                  ) : isHMarkets ? (
                    <HMarketsLogo className="h-6 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                  ) : isEdgePlus ? (
                    <EdgePlusLogo className="h-6 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                  ) : isHBusiness ? (
                    <HBusinessLogo className="h-6 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                  ) : isFicoy ? (
                    <FicoyLogo className="h-6 w-auto" primaryColor="#ffffff" secondaryColor="#20bbb1" />
                  ) : isCoventrix ? (
                    <CoventrixLogo className="h-6 w-auto" primaryColor="#ffffff" secondaryColor="#00bfb3" />
                  ) : (
                    <PlatformIcon className="w-6 h-6 text-[#00bfb3]" />
                  )}
                  <div>
                    <span className="font-extrabold text-sm text-white block">{activePlatform.name} Live Operational Console</span>
                    <span className="text-[10px] text-slate-400 font-mono">Harbour & Hills Core</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ONLINE & SYNCED
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                {activePlatform.metrics.map((m) => (
                  <div key={m.label} className="p-3.5 rounded-xl bg-[#023e63]/60 border border-slate-700/80">
                    <span className="text-slate-300 block text-[10px]">{m.label.toUpperCase()}</span>
                    <span className="font-bold text-[#00bfb3] text-sm">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
