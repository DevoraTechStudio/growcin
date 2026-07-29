"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const LOGOS = [
  "Northwave",
  "Lumina",
  "Parcelly",
  "Stackform",
  "Orbit Labs",
  "Brightpath",
  "Kite & Co",
  "Vanta Retail",
]

export function LogoMarquee({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden py-8 sm:py-12 md:py-14 flex flex-col gap-5 sm:gap-8 bg-white border-y border-[var(--color-border-subtle)]",
        className
      )}
    >
      <div className="text-center text-[11px] sm:text-[12px] font-semibold tracking-[0.18em] text-[var(--color-text-muted)] uppercase px-4">
        Trusted by growth teams worldwide
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex shrink-0 animate-marquee whitespace-nowrap items-center">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="mx-6 sm:mx-8 md:mx-12 flex items-center justify-center font-display text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-ink)]/25 hover:text-[var(--color-ink)]/55 transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee whitespace-nowrap items-center" aria-hidden="true">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={`b-${i}`}
              className="mx-6 sm:mx-8 md:mx-12 flex items-center justify-center font-display text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-ink)]/25"
            >
              {logo}
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 sm:w-1/4 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 sm:w-1/4 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </div>
  )
}
