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
    <div className={cn("flex items-center gap-2.5 select-none group", className)}>
      <img
        src="/growcin-logo.png?v=2"
        alt="Growcin"
        className={cn("w-8 h-8 object-contain flex-shrink-0 transition-transform duration-200 group-hover:scale-105", iconClassName)}
      />

      {!iconOnly && (
        <span className={cn("font-bold text-xl tracking-tight flex items-center", light ? "text-white" : "text-slate-900")}>
          Grow<span className="text-[#A855F7]">cin</span>
        </span>
      )}
    </div>
  )
}
