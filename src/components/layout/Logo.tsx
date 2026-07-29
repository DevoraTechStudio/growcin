import * as React from "react"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  iconClassName?: string
  iconOnly?: boolean
  showTagline?: boolean
  light?: boolean
}

export function Logo({
  className,
  iconClassName,
  iconOnly = false,
  showTagline = false,
  light = false,
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      <svg
        viewBox="0 0 100 100"
        className={cn("w-8 h-8 flex-shrink-0", iconClassName)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-g-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-brand-blue)" />
            <stop offset="100%" stopColor="var(--color-brand-accent)" />
          </linearGradient>
          <linearGradient id="logo-smile-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-brand-secondary)" />
            <stop offset="100%" stopColor="var(--color-brand-accent)" />
          </linearGradient>
        </defs>

        <path
          d="M 50 18 C 35.6 18 24 29.6 24 44 C 24 58.4 35.6 70 50 70 C 64.4 70 76 58.4 76 44 L 76 24 C 76 18 78 14 78 12 C 75 14 70 17 67 18 C 62 18 56 18 50 18 Z M 50 30 C 42.3 30 36 36.3 36 44 C 36 51.7 42.3 58 50 58 C 57.7 58 64 51.7 64 44 C 64 36.3 57.7 30 50 30 Z"
          fill="url(#logo-g-gradient)"
          fillRule="evenodd"
          clipRule="evenodd"
        />

        <path
          d="M 24 76 C 32 83 41 87 50 87 C 59 87 68 83 76 76 C 78 83 68 95 50 95 C 32 95 22 83 24 76 Z"
          fill="url(#logo-smile-gradient)"
        />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col justify-center">
          <span className="font-display text-[18px] sm:text-[22px] font-extrabold tracking-tight leading-none">
            <span className={light ? "text-white" : "text-[var(--color-ink)]"}>grow</span>
            <span className={light ? "text-[var(--color-brand-accent)]" : "text-[var(--color-brand-blue)]"}>
              cin
            </span>
          </span>
          {showTagline && (
            <span
              className={cn(
                "text-[9px] uppercase tracking-widest font-bold mt-1.5 leading-none",
                light ? "text-white/60" : "text-[var(--color-text-muted)]"
              )}
            >
              AI Marketing Platform
            </span>
          )}
        </div>
      )}
    </div>
  )
}
