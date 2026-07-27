"use client"

import * as React from "react"
import { motion, TargetAndTransition } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"
import { cn } from "@/lib/utils"

export type DashboardCardType = "alert" | "health" | "suggestion" | "intent"

interface DashboardCardProps {
  type: DashboardCardType
  delay?: number
  className?: string
}

export function DashboardCard({ type, delay = 0, className }: DashboardCardProps) {
  // Customize floating animation speed and range based on the card type
  const getFloatAnimation = (): TargetAndTransition => {
    let duration = 4.5
    let yAmount = -10

    if (type === "health") {
      duration = 6
      yAmount = -14
    } else if (type === "intent") {
      duration = 3.5
      yAmount = -8
    }

    return {
      y: [0, yAmount, 0],
      transition: {
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      },
    }
  }

  const renderContent = () => {
    switch (type) {
      case "alert":
        return (
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-2 mb-1">
              <div className="flex items-center gap-1.5 font-bold text-white text-xs">
                <span className="material-symbols-outlined text-[var(--color-status-bad)] text-sm">notifications_active</span>
                <span>Spike Alert</span>
              </div>
              <span className="text-[10px] text-[var(--color-text-muted)] font-medium">8m ago</span>
            </div>
            <div className="flex items-start gap-2.5 rounded-lg p-2.5 border border-[var(--color-status-bad)]/20 bg-[var(--color-status-bad)]/5">
              <div className="w-6 h-6 rounded-full bg-[var(--color-status-bad)]/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[var(--color-status-bad)] text-[12px]">warning</span>
              </div>
              <div className="min-w-0 pt-0.5">
                <p className="text-xs font-bold text-white leading-snug">Creative fatigue detected</p>
                <p className="text-[10px] text-[var(--color-text-secondary)] mt-0.5">Summer_V3 — frequency 4.2x</p>
              </div>
            </div>
          </div>
        )
      case "health":
        return (
          <div className="flex flex-col w-full p-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-white">Campaign Health</span>
              <span className="text-[10px] bg-[var(--color-status-good)]/10 text-[var(--color-status-good)] px-2 py-0.5 rounded-full font-semibold">Nominal</span>
            </div>
            
            {/* SVG Radar Chart Representation */}
            <svg viewBox="0 0 240 240" className="w-full max-w-[150px] mx-auto my-2">
              {/* Grid Hexagons */}
              <polygon points="120,90 145,105 145,135 120,150 95,135 95,105" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
              <polygon points="120,60 170,90 170,150 120,180 70,150 70,90" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
              <polygon points="120,30 195,75 195,165 120,210 45,165 45,75" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
              
              {/* Axes lines */}
              <line x1="120" y1="120" x2="120" y2="30" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
              <line x1="120" y1="120" x2="195" y2="75" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
              <line x1="120" y1="120" x2="195" y2="165" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
              <line x1="120" y1="120" x2="120" y2="210" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
              <line x1="120" y1="120" x2="45" y2="165" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
              <line x1="120" y1="120" x2="45" y2="75" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
              
              {/* Dynamic Value Area (Cyan Glow) */}
              <polygon 
                points="120,48 185,81 170,152 120,195 62,153 71,91" 
                fill="rgba(34,211,238,0.06)" 
                stroke="var(--color-brand-cyan)" 
                strokeWidth="1.5" 
                strokeLinejoin="round" 
              />
              {/* Data points */}
              <circle cx="120" cy="48" r="2.5" fill="white" stroke="var(--color-brand-cyan)" strokeWidth="1.5" />
              <circle cx="185" cy="81" r="2.5" fill="white" stroke="var(--color-brand-cyan)" strokeWidth="1.5" />
              <circle cx="170" cy="152" r="2.5" fill="white" stroke="var(--color-brand-cyan)" strokeWidth="1.5" />
              <circle cx="120" cy="195" r="2.5" fill="white" stroke="var(--color-brand-cyan)" strokeWidth="1.5" />
              <circle cx="62" cy="153" r="2.5" fill="white" stroke="var(--color-brand-cyan)" strokeWidth="1.5" />
              <circle cx="71" cy="91" r="2.5" fill="white" stroke="var(--color-brand-cyan)" strokeWidth="1.5" />
            </svg>
          </div>
        )
      case "suggestion":
        return (
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-2">
              <div className="flex items-center gap-1.5 font-bold text-white text-xs">
                <span className="material-symbols-outlined text-[var(--color-brand-cyan)] text-sm">auto_awesome</span>
                <span>AI Suggestion</span>
              </div>
              <span className="text-[10px] bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] px-2 py-0.5 rounded-full font-semibold">92% Match</span>
            </div>
            <div className="font-semibold text-white text-sm">Shift 15% budget to Reels</div>
            <div className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Reels placement is driving 3x higher ROAS for &apos;Summer Collection&apos; vs standard feed.
            </div>
            <button className="mt-1 w-full rounded-lg bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] py-2 text-xs font-bold text-white transition-opacity hover:opacity-90 active:scale-98">
              Apply Change
            </button>
          </div>
        )
      case "intent":
        return (
          <div className="flex flex-col gap-3 w-full p-1">
            <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-2 mb-1">
              <div className="flex items-center gap-1.5 font-bold text-white text-xs">
                <span className="material-symbols-outlined text-[var(--color-brand-cyan)] text-sm">local_fire_department</span>
                <span>Buying Intent</span>
              </div>
              <span className="text-[10px] text-white bg-[var(--color-surface-alt)] border border-[var(--color-border-subtle)] px-2 py-0.5 rounded-full font-bold">78/100</span>
            </div>
            
            <div className="space-y-2.5">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] font-semibold text-[var(--color-text-secondary)]">
                  <span>Hot leads</span>
                  <span className="text-white font-bold">34%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[var(--color-surface-alt)] overflow-hidden">
                  <div className="h-full w-[34%] bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)]" />
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] font-semibold text-[var(--color-text-secondary)]">
                  <span>Warm</span>
                  <span className="text-white font-bold">44%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[var(--color-surface-alt)] overflow-hidden">
                  <div className="h-full w-[44%] bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)]" />
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] font-semibold text-[var(--color-text-secondary)]">
                  <span>Cold</span>
                  <span className="text-white font-bold">22%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-[var(--color-surface-alt)] overflow-hidden">
                  <div className="h-full w-[22%] bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)]" />
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <motion.div animate={getFloatAnimation()} className={cn("absolute", className)}>
      <Card className="shadow-2xl border-[var(--color-border-strong)] bg-[var(--color-surface)]/90 backdrop-blur-md">
        <CardContent className="p-4">{renderContent()}</CardContent>
      </Card>
    </motion.div>
  )
}

