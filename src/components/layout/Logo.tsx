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
      <img
        src="/logo-transparent.png"
        alt="Growcin Logo"
        className={cn("w-8 h-8 object-contain flex-shrink-0", iconClassName)}
      />

      {!iconOnly && (
        <div className="flex flex-col justify-center">
          <span className="font-display text-[18px] sm:text-[22px] font-extrabold tracking-tight leading-none">
            <span className={light ? "text-white" : "text-[var(--color-ink)]"}>Grow</span>
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
