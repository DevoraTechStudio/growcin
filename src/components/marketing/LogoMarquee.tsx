"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const BRAND_LOGOS = [
  { src: "/brands/Daga_Logo.webp", name: "Daga" },
  { src: "/brands/abbhyas.png", name: "Abbhyas" },
  { src: "/brands/almughamer.png", name: "Almughamer" },
  { src: "/brands/bestpropdeal.png", name: "BestPropDeal" },
  { src: "/brands/bliss.png", name: "Bliss" },
  { src: "/brands/core.png", name: "Core" },
  { src: "/brands/deepauth.png", name: "DeepAuth" },
  { src: "/brands/dsk.png", name: "DSK" },
  { src: "/brands/Hirakani_Logo_2-removebg-preview.png", name: "Hirakani" },
  { src: "/brands/alpha.png", name: "Alpha" },
  { src: "/brands/the_entrepreneur_times_logo-removebg-preview.png", name: "Entrepreneur Times" },
  { src: "/brands/japalouppe.png", name: "Japalouppe" },
  { src: "/brands/jnanaprabodhini.png", name: "Jnanaprabodhini" },
  { src: "/brands/mantra.png", name: "Mantra" },
  { src: "/brands/ltrek.png", name: "LTrek" },
  { src: "/brands/svi.png", name: "SVI" },
  { src: "/brands/vtrek.png", name: "VTrek" },
  { src: "/brands/ninsmart.png", name: "Ninsmart" },
  { src: "/brands/thetravelsaga.png", name: "The Travel Saga" },
  { src: "/brands/Procommun Google News.png", name: "Procommun" },
  { src: "/brands/cropped-cropped-Admission-bharat-removebg-preview.png", name: "Admission Bharat" },
  { src: "/brands/mvs-logo-removebg-preview.png", name: "MVS Media" },
  { src: "/brands/hp-jwellers.jpg", name: "HP Jewellers" },
]

export function LogoMarquee({ className }: { className?: string }) {
  const marqueeLogos = [...BRAND_LOGOS, ...BRAND_LOGOS]

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
        <div className="hero-marquee-track flex w-max items-center gap-8 sm:gap-12 md:gap-14">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex h-7 w-[100px] shrink-0 items-center justify-center sm:h-8 sm:w-[124px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                width={124}
                height={32}
                loading="lazy"
                decoding="async"
                className="max-h-7 w-auto max-w-full object-contain sm:max-h-8 [filter:grayscale(1)_brightness(0.55)_contrast(1.15)] transition-[filter] duration-500 hover:[filter:none]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
