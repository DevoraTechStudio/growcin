"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const BRAND_LOGOS = [
  { src: "/brands/virmax.png", name: "Virmax Engineering" },
  { src: "/brands/swastik-decor.png", name: "Swastik Decor" },
  { src: "/brands/royal-crown.png", name: "Royal Crown" },
  { src: "/brands/edc-leather.png", name: "EDC Custom Leather" },
  { src: "/brands/indie-grooves.png", name: "Indie Grooves" },
  { src: "/brands/ethera-ethnics.png", name: "Ethera Ethnics" },
]

export function LogoMarquee({ className }: { className?: string }) {
  // Quadruple the 6 logos so the marquee seamlessly fills any screen width and loops infinitely
  const marqueeLogos = [
    ...BRAND_LOGOS,
    ...BRAND_LOGOS,
    ...BRAND_LOGOS,
    ...BRAND_LOGOS,
  ]

  return (
    <section
      className={cn(
        "hero-marquee mt-12 pb-10 pt-8 sm:mt-16 sm:pb-12 sm:pt-10 lg:mt-20",
        className
      )}
      aria-label="Brands scaling ad performance with Growcin"
    >
      <div
        aria-hidden="true"
        className="mx-auto mb-6 h-px w-full max-w-[1060px] bg-slate-200/70 sm:mb-8 [mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)]"
      />
      <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:mb-8 sm:tracking-[0.22em]">
        Trusted by high-growth brands & agencies
      </p>

      <div className="hero-marquee-viewport hero-marquee-mask w-full overflow-hidden">
        <div className="hero-marquee-track flex w-max items-center gap-10 sm:gap-14 md:gap-16 py-1">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex h-10 sm:h-12 w-[140px] sm:w-[170px] shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logo.src}
                alt={logo.name}
                width={170}
                height={56}
                loading="lazy"
                decoding="async"
                className="h-10 sm:h-12 w-auto max-w-full object-contain [filter:grayscale(1)_brightness(0.55)_contrast(1.15)] transition-[filter] duration-500 hover:[filter:none]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
