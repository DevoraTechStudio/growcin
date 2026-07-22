import * as React from "react"
import { Card, CardContent } from "@/components/ui/Card"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  title: string
  quote: string
  className?: string
}

export function TestimonialCard({ name, title, quote, className }: TestimonialCardProps) {
  return (
    <Card hoverable className={cn("h-full flex flex-col", className)}>
      <CardContent className="p-8 flex flex-col h-full">
        {/* Stars */}
        <div className="flex gap-1 mb-6 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="material-symbols-outlined fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
          ))}
        </div>
        
        {/* Quote */}
        <p className="text-[17px] leading-relaxed text-[var(--color-text-primary)] mb-8 flex-grow">
          "{quote}"
        </p>
        
        {/* Author */}
        <div className="flex items-center gap-4 mt-auto">
          {/* Avatar Placeholder */}
          <div className="h-12 w-12 rounded-full bg-[var(--color-surface-alt)] border border-[var(--color-border-strong)] flex items-center justify-center">
            <span className="material-symbols-outlined text-[var(--color-text-secondary)]">person</span>
          </div>
          <div>
            <div className="font-semibold text-white">{name}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">{title}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
