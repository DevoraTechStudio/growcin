"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const LOGOS = [
  "Acme Corp",
  "Globex",
  "Soylent",
  "Initech",
  "Umbrella",
  "Stark Ind",
  "Wayne Ent",
  "Cyberdyne",
]

export function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden border-y border-[var(--color-border-subtle)] py-10 bg-[var(--color-base)] flex flex-col gap-8">
      <div className="text-center text-sm font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
        Trusted by growing teams
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="flex shrink-0 animate-marquee whitespace-nowrap">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="mx-8 flex items-center justify-center text-2xl font-bold text-[var(--color-text-secondary)] opacity-50 grayscale transition-all hover:opacity-100 hover:text-white"
            >
              {logo}
            </div>
          ))}
        </div>
        
        {/* Second block following the first for infinite scroll */}
        <div className="flex shrink-0 animate-marquee whitespace-nowrap" aria-hidden="true">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="mx-8 flex items-center justify-center text-2xl font-bold text-[var(--color-text-secondary)] opacity-50 grayscale transition-all hover:opacity-100 hover:text-white"
            >
              {logo}
            </div>
          ))}
        </div>
        
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[var(--color-base)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[var(--color-base)] to-transparent z-10" />
      </div>
    </div>
  )
}
