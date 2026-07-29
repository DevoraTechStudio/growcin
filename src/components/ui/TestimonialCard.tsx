import * as React from "react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  title: string
  quote: string
  className?: string
}

export function TestimonialCard({ name, title, quote, className }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)

  return (
    <div
      className={cn(
        "h-full flex flex-col rounded-2xl border border-[var(--color-border-subtle)] bg-white p-5 sm:p-7 md:p-8 shadow-[0_1px_0_rgba(15,23,42,0.04)]",
        className
      )}
    >
      <div className="flex gap-0.5 mb-4 sm:mb-5 text-[var(--color-brand-blue)]">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="material-symbols-outlined text-[16px] sm:text-[18px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        ))}
      </div>

      <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-body mb-6 sm:mb-8 flex-grow">
        &quot;{quote}&quot;
      </p>

      <div className="flex items-center gap-3.5 mt-auto">
        <div className="h-11 w-11 rounded-full brand-gradient-bg flex items-center justify-center text-white text-xs font-bold">
          {initials}
        </div>
        <div>
          <div className="font-semibold text-[var(--color-ink)] text-sm">{name}</div>
          <div className="text-sm text-[var(--color-text-muted)]">{title}</div>
        </div>
      </div>
    </div>
  )
}
