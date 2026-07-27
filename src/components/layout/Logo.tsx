import * as React from "react"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  iconClassName?: string
  iconOnly?: boolean
  showTagline?: boolean
}

export function Logo({ className, iconClassName, iconOnly = false, showTagline = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      {/* SVG Logo Icon */}
      <svg
        viewBox="0 0 100 100"
        className={cn("w-8 h-8 flex-shrink-0", iconClassName)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Main gradient for the 'g' character shape */}
          <linearGradient id="logo-g-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-brand-blue)" />
            <stop offset="100%" stopColor="var(--color-brand-cyan)" />
          </linearGradient>
          {/* Subtle shifted gradient for the smile crescent below */}
          <linearGradient id="logo-smile-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0072FF" />
            <stop offset="100%" stopColor="var(--color-brand-cyan)" />
          </linearGradient>
        </defs>
        
        {/* Top 'g' loop with ear */}
        <path
          d="M 50 18 C 35.6 18 24 29.6 24 44 C 24 58.4 35.6 70 50 70 C 64.4 70 76 58.4 76 44 L 76 24 C 76 18 78 14 78 12 C 75 14 70 17 67 18 C 62 18 56 18 50 18 Z M 50 30 C 42.3 30 36 36.3 36 44 C 36 51.7 42.3 58 50 58 C 57.7 58 64 51.7 64 44 C 64 36.3 57.7 30 50 30 Z"
          fill="url(#logo-g-gradient)"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        
        {/* Bottom smiling crescent */}
        <path
          d="M 24 76 C 32 83 41 87 50 87 C 59 87 68 83 76 76 C 78 83 68 95 50 95 C 32 95 22 83 24 76 Z"
          fill="url(#logo-smile-gradient)"
        />
      </svg>
      
      {!iconOnly && (
        <div className="flex flex-col justify-center">
          <span className="text-2xl font-bold tracking-tight leading-none">
            <span className="text-white">grow</span>
            <span className="text-[var(--color-brand-text)]">cin</span>
          </span>
          {showTagline && (
            <span className="text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] font-bold mt-1.5 leading-none">
              AI-Powered Growth Platform
            </span>
          )}
        </div>
      )}
    </div>
  )
}
