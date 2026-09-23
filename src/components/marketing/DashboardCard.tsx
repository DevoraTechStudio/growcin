"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

import { MascotAvatar } from "@/components/ui/MascotAvatar"

export function HeroIntelligenceShowcase() {
  const [applied, setApplied] = React.useState(false)
  const [mobileTab, setMobileTab] = React.useState<"suggestion" | "radar" | "intent">("suggestion")
  const [isPaused, setIsPaused] = React.useState(false)

  // Auto-cycle tabs on mobile every 4.5 seconds if not paused
  React.useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setMobileTab((prev) => {
        if (prev === "suggestion") return "radar"
        if (prev === "radar") return "intent"
        return "suggestion"
      })
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. MOBILE EXPERIENCE (< md): Zero-overlap interactive card deck           */}
      {/* ========================================================================= */}
      <div
        className="block md:hidden w-full max-w-sm sm:max-w-md mx-auto my-2 px-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
      >
        {/* Mobile Tab Switcher */}
        <div className="flex items-center justify-between gap-1 p-1 bg-white/95 backdrop-blur-md border border-purple-100 rounded-full shadow-sm mb-3">
          <button
            type="button"
            onClick={() => {
              setMobileTab("suggestion")
              setIsPaused(true)
            }}
            className={cn(
              "flex items-center justify-center gap-1.5 flex-1 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer",
              mobileTab === "suggestion"
                ? "bg-[#A855F7] text-white shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            )}
          >
            <span className="material-symbols-outlined text-[13px]">auto_awesome</span>
            Suggestion
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileTab("radar")
              setIsPaused(true)
            }}
            className={cn(
              "flex items-center justify-center gap-1.5 flex-1 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer",
              mobileTab === "radar"
                ? "bg-[#A855F7] text-white shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            )}
          >
            <span className="material-symbols-outlined text-[13px]">analytics</span>
            Health
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileTab("intent")
              setIsPaused(true)
            }}
            className={cn(
              "flex items-center justify-center gap-1.5 flex-1 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer",
              mobileTab === "intent"
                ? "bg-[#A855F7] text-white shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            )}
          >
            <span className="material-symbols-outlined text-[13px]">local_fire_department</span>
            Intent
          </button>
        </div>

        {/* Mobile Card Deck Container */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {mobileTab === "suggestion" && (
              <motion.div
                key="mobile-suggestion"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="brand-card text-left p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-purple-100 bg-white"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="brand-title flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px] text-[#A855F7]">auto_awesome</span>
                    </div>
                    <span className="text-xs font-bold text-slate-800">AI Suggestion</span>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 bg-purple-50 text-[#A855F7] rounded-full border border-purple-100 font-mono">
                    ROAS +3.2x
                  </span>
                </div>
                <div className="mb-4">
                  <p className="text-[15px] font-bold text-slate-900 leading-snug">
                    Shift 15% budget to Reels
                  </p>
                  <p className="text-[12px] text-slate-500 mt-1.5 leading-relaxed">
                    Reels placement is driving 3x higher ROAS for &apos;Summer Collection&apos; vs standard feed.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setApplied(!applied)}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-2.5 text-white rounded-xl text-[12px] font-bold shadow-md transition-all cursor-pointer",
                    applied
                      ? "bg-emerald-600 shadow-emerald-500/30"
                      : "bg-gradient-to-r from-[#a855f7] to-[#8b5cf6] hover:from-[#9d4edd] hover:to-[#7c3aed]"
                  )}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {applied ? "task_alt" : "check_circle"}
                  </span>
                  <span>{applied ? "Applied to Meta Ads" : "Apply Change"}</span>
                </button>
              </motion.div>
            )}

            {mobileTab === "radar" && (
              <motion.div
                key="mobile-radar"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="brand-card text-left p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-purple-100 bg-white"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#A855F7] text-[18px]">analytics</span>
                    <span className="text-xs font-bold text-slate-800">Campaign Health</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    6 AXES ACTIVE
                  </span>
                </div>

                <svg viewBox="0 0 240 240" className="w-full max-w-[190px] mx-auto my-1">
                  <polygon
                    points="120,90.96 145.15,105.48 145.15,134.52 120,149.04 94.85,134.52 94.85,105.48"
                    fill="none"
                    stroke="#f1f5f9"
                    strokeWidth="0.8"
                  />
                  <polygon
                    points="120,61.92 170.3,90.96 170.3,149.04 120,178.08 69.7,149.04 69.7,90.96"
                    fill="none"
                    stroke="#f1f5f9"
                    strokeWidth="0.8"
                  />
                  <polygon
                    points="120,32 196.2,76 196.2,164 120,208 43.8,164 43.8,76"
                    fill="none"
                    stroke="#f1f5f9"
                    strokeWidth="0.8"
                  />
                  <line x1="120" y1="120" x2="120" y2="32" stroke="#f1f5f9" strokeWidth="0.8" />
                  <line x1="120" y1="120" x2="196.2" y2="76" stroke="#f1f5f9" strokeWidth="0.8" />
                  <line x1="120" y1="120" x2="196.2" y2="164" stroke="#f1f5f9" strokeWidth="0.8" />
                  <line x1="120" y1="120" x2="120" y2="208" stroke="#f1f5f9" strokeWidth="0.8" />
                  <line x1="120" y1="120" x2="43.8" y2="164" stroke="#f1f5f9" strokeWidth="0.8" />
                  <line x1="120" y1="120" x2="43.8" y2="76" stroke="#f1f5f9" strokeWidth="0.8" />

                  <polygon
                    points="120,47.84 188.59,80.4 173.35,150.8 120,197.44 62.84,153 70.46,91.4"
                    fill="rgba(168,85,247,0.08)"
                    stroke="#A855F7"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <circle cx="120" cy="47.84" r="2.5" fill="white" stroke="#A855F7" strokeWidth="1.5" />
                  <circle cx="188.59" cy="80.4" r="2.5" fill="white" stroke="#A855F7" strokeWidth="1.5" />
                  <circle cx="173.35" cy="150.8" r="2.5" fill="white" stroke="#A855F7" strokeWidth="1.5" />
                  <circle cx="120" cy="197.44" r="2.5" fill="white" stroke="#A855F7" strokeWidth="1.5" />
                  <circle cx="62.84" cy="153" r="2.5" fill="white" stroke="#A855F7" strokeWidth="1.5" />
                  <circle cx="70.46" cy="91.4" r="2.5" fill="white" stroke="#A855F7" strokeWidth="1.5" />

                  <text x="120" y="17" textAnchor="middle" dominantBaseline="central" className="fill-slate-400 font-mono font-bold" style={{ fontSize: "9px" }}>Targeting</text>
                  <text x="209" y="68.5" textAnchor="middle" dominantBaseline="central" className="fill-slate-400 font-mono font-bold" style={{ fontSize: "9px" }}>Budget</text>
                  <text x="209" y="171.5" textAnchor="middle" dominantBaseline="central" className="fill-slate-400 font-mono font-bold" style={{ fontSize: "9px" }}>Bidding</text>
                  <text x="120" y="223" textAnchor="middle" dominantBaseline="central" className="fill-slate-400 font-mono font-bold" style={{ fontSize: "9px" }}>Creative</text>
                  <text x="31" y="171.5" textAnchor="middle" dominantBaseline="central" className="fill-slate-400 font-mono font-bold" style={{ fontSize: "9px" }}>Location</text>
                  <text x="31" y="68.5" textAnchor="middle" dominantBaseline="central" className="fill-slate-400 font-mono font-bold" style={{ fontSize: "9px" }}>Relevance</text>
                </svg>
              </motion.div>
            )}

            {mobileTab === "intent" && (
              <motion.div
                key="mobile-intent"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="brand-card text-left p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-purple-100 bg-white space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="brand-title flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-amber-500 text-[18px]">local_fire_department</span>
                    <span className="text-xs font-bold text-slate-800">Buying Intent</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#A855F7] bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">85/100</span>
                </div>

                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-600">Hot leads</span>
                      <span className="font-bold text-slate-800 font-mono">45%</span>
                    </div>
                    <div className="brand-progress-bar"><div className="brand-progress-fill" style={{ width: "45%" }} /></div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-600">Warm</span>
                      <span className="font-bold text-slate-800 font-mono">38%</span>
                    </div>
                    <div className="brand-progress-bar"><div className="brand-progress-fill" style={{ width: "38%" }} /></div>
                  </div>
                </div>

                {/* Lead Quality Signal Pill */}
                <div className="flex items-center gap-2.5 rounded-xl p-2.5 border border-[#A855F7]/20 bg-[#f3e8ff]/40">
                  <div className="w-6 h-6 rounded-full bg-[#A855F7] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[13px]">check_circle</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] font-bold text-slate-900 leading-snug">Lead quality &uarr; 22%</p>
                    <p className="text-[10px] text-slate-500 font-sans">WhatsApp: Pune segment &middot; 1h ago</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Indicator dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {(["suggestion", "radar", "intent"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setMobileTab(t)
                setIsPaused(true)
              }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                mobileTab === t ? "w-6 bg-[#A855F7]" : "w-1.5 bg-slate-300"
              )}
              aria-label={`Show ${t}`}
            />
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. DESKTOP EXPERIENCE (>= md): Scattered 4-card spatial floating layout   */}
      {/* ========================================================================= */}
      <div className="hidden md:block relative w-full max-w-[520px] aspect-[4/5] mx-auto">
        {/* Background Grid Pattern */}
        <div className="absolute inset-[-10%] bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Card 1: AI Suggestion */}
        <div
          className="absolute top-[80px] left-[-2%] w-[270px] animate-float-medium z-30"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="brand-card text-left p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="brand-title">
                <div className="w-7 h-7 rounded-full bg-[#f3e8ff] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[14px] text-[#a855f7]">auto_awesome</span>
                </div>
                <span className="text-sm">AI Suggestion</span>
              </div>
              <div className="flex gap-1.5">
                <span className="rounded-full transition-all duration-500 bg-[#a855f7] w-3 h-1.5" />
                <span className="rounded-full transition-all duration-500 bg-slate-200 w-1.5 h-1.5" />
                <span className="rounded-full transition-all duration-500 bg-slate-200 w-1.5 h-1.5" />
              </div>
            </div>
            <div className="mb-4" style={{ animation: "fadeSlideIn 0.5s ease" }}>
              <p className="text-[15px] font-bold text-slate-800 leading-tight">Shift 15% budget to Reels</p>
              <p className="text-[12px] text-slate-500 mt-1.5 leading-[1.6]">
                Reels placement is driving 3x higher ROAS for &apos;Summer Collection&apos; vs standard feed.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setApplied(!applied)}
              className={cn(
                "group w-full flex items-center justify-center gap-2 py-2.5 text-white rounded-xl text-[13px] font-bold shadow-[0_4px_14px_0_rgba(168,85,247,0.39)] transition-all overflow-hidden relative cursor-pointer",
                applied
                  ? "bg-emerald-600 shadow-emerald-500/30"
                  : "bg-gradient-to-r from-[#a855f7] to-[#8b5cf6] hover:from-[#9d4edd] hover:to-[#7c3aed]"
              )}
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
              <span className="material-symbols-outlined text-[16px]">
                {applied ? "task_alt" : "check_circle"}
              </span>
              <span className="relative z-10">{applied ? "Applied to Ads" : "Apply Change"}</span>
            </button>
          </div>
        </div>

        {/* Card 2: Campaign Health Radar */}
        <div className="absolute top-[12%] right-[-2%] w-[280px] animate-float-slow z-10">
          <div className="brand-card text-left p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-[17px] font-bold text-slate-800 leading-[1.1] block">
                  Campaign<br />Health
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="rounded-full transition-all duration-500 bg-[#a855f7] w-2 h-2" />
                  <span className="rounded-full transition-all duration-500 bg-[#a855f7] w-2 h-2" />
                  <span className="rounded-full transition-all duration-500 bg-slate-200 w-1.5 h-1.5" />
                </div>
              </div>
            </div>

            <svg viewBox="0 0 240 240" className="w-full max-w-[200px] mx-auto mt-2">
              <polygon
                points="120,90.96 145.15,105.48 145.15,134.52 120,149.04 94.85,134.52 94.85,105.48"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="0.8"
              />
              <polygon
                points="120,61.92 170.3,90.96 170.3,149.04 120,178.08 69.7,149.04 69.7,90.96"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="0.8"
              />
              <polygon
                points="120,32 196.2,76 196.2,164 120,208 43.8,164 43.8,76"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="0.8"
              />
              <line x1="120" y1="120" x2="120" y2="32" stroke="#f1f5f9" strokeWidth="0.8" />
              <line x1="120" y1="120" x2="196.2" y2="76" stroke="#f1f5f9" strokeWidth="0.8" />
              <line x1="120" y1="120" x2="196.2" y2="164" stroke="#f1f5f9" strokeWidth="0.8" />
              <line x1="120" y1="120" x2="120" y2="208" stroke="#f1f5f9" strokeWidth="0.8" />
              <line x1="120" y1="120" x2="43.8" y2="164" stroke="#f1f5f9" strokeWidth="0.8" />
              <line x1="120" y1="120" x2="43.8" y2="76" stroke="#f1f5f9" strokeWidth="0.8" />

              <polygon
                points="120,47.84 188.59,80.4 173.35,150.8 120,197.44 62.84,153 70.46,91.4"
                fill="rgba(168,85,247,0.08)"
                stroke="#A855F7"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle cx="120" cy="47.84" r="2.5" fill="white" stroke="#A855F7" strokeWidth="1.5" />
              <circle cx="188.59" cy="80.4" r="2.5" fill="white" stroke="#A855F7" strokeWidth="1.5" />
              <circle cx="173.35" cy="150.8" r="2.5" fill="white" stroke="#A855F7" strokeWidth="1.5" />
              <circle cx="120" cy="197.44" r="2.5" fill="white" stroke="#A855F7" strokeWidth="1.5" />
              <circle cx="62.84" cy="153" r="2.5" fill="white" stroke="#A855F7" strokeWidth="1.5" />
              <circle cx="70.46" cy="91.4" r="2.5" fill="white" stroke="#A855F7" strokeWidth="1.5" />

              <text x="120" y="17" textAnchor="middle" dominantBaseline="central" className="fill-slate-400 font-mono font-bold" style={{ fontSize: "9px" }}>Targeting</text>
              <text x="209" y="68.5" textAnchor="middle" dominantBaseline="central" className="fill-slate-400 font-mono font-bold" style={{ fontSize: "9px" }}>Budget</text>
              <text x="209" y="171.5" textAnchor="middle" dominantBaseline="central" className="fill-slate-400 font-mono font-bold" style={{ fontSize: "9px" }}>Bidding</text>
              <text x="120" y="223" textAnchor="middle" dominantBaseline="central" className="fill-slate-400 font-mono font-bold" style={{ fontSize: "9px" }}>Creative</text>
              <text x="31" y="171.5" textAnchor="middle" dominantBaseline="central" className="fill-slate-400 font-mono font-bold" style={{ fontSize: "9px" }}>Location</text>
              <text x="31" y="68.5" textAnchor="middle" dominantBaseline="central" className="fill-slate-400 font-mono font-bold" style={{ fontSize: "9px" }}>Relevance</text>
            </svg>
          </div>
        </div>

        {/* Card 3: Alert (Growcin Lead Quality card) */}
        <div
          className="absolute bottom-[20%] left-[-8%] w-[290px] animate-float-medium z-40"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="brand-card text-left p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="brand-title">
                <span className="material-symbols-outlined brand-icon text-base">notifications_active</span>
                <span className="text-sm">Alert</span>
              </div>
              <div className="flex gap-1.5">
                <span className="rounded-full transition-all duration-500 bg-slate-200 w-1.5 h-1.5" />
                <span className="rounded-full transition-all duration-500 bg-slate-200 w-1.5 h-1.5" />
                <span className="rounded-full transition-all duration-500 bg-[#a855f7] w-3 h-1.5" />
              </div>
            </div>
            <div
              className="flex items-center gap-3 rounded-2xl p-4 border border-[#A855F7]/20 bg-[#f3e8ff]/30 shadow-[0_2px_10px_rgba(168,85,247,0.04)]"
              style={{ animation: "fadeSlideIn 0.4s ease" }}
            >
              <div className="w-8 h-8 rounded-full bg-[#A855F7] text-white flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
              </div>
              <div className="min-w-0">
                <p className="text-[14px] font-bold text-slate-900 leading-snug">Lead quality &uarr; 22%</p>
                <p className="text-[11px] text-slate-500 mt-0.5 font-sans">WhatsApp: Pune segment &middot; 1h ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Buying Intent */}
        <div
          className="absolute bottom-0 right-[2%] w-[270px] animate-float-fast z-20"
          style={{ animationDelay: "1.8s" }}
        >
          <div className="brand-card text-left p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="brand-title">
                <span className="material-symbols-outlined brand-icon text-base">local_fire_department</span>
                <span className="text-sm">Buying Intent</span>
              </div>
              <span className="brand-indicator font-mono text-xs">85/100</span>
            </div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-slate-600">Hot leads</span>
                  <span className="text-[13px] font-bold text-slate-800 font-mono">45%</span>
                </div>
                <div className="brand-progress-bar">
                  <div className="brand-progress-fill" style={{ width: "45%" }} />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-slate-600">Warm</span>
                  <span className="text-[13px] font-bold text-slate-800 font-mono">38%</span>
                </div>
                <div className="brand-progress-bar">
                  <div className="brand-progress-fill" style={{ width: "38%" }} />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-slate-600">Cold</span>
                  <span className="text-[13px] font-bold text-slate-800 font-mono">17%</span>
                </div>
                <div className="brand-progress-bar">
                  <div className="brand-progress-fill" style={{ width: "17%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating 3D Mascot Speech Bubble - Growcin */}
        <div className="absolute bottom-[24%] right-[-14%] z-30 flex items-center gap-2.5 animate-float-slow">
          <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-purple-100 shadow-[0_8px_25px_-5px_rgba(124,58,237,0.15)] text-[12px] font-semibold text-slate-800 whitespace-nowrap">
            I can help you scale
          </div>
          <MascotAvatar size={52} />
        </div>

        {/* Ambient Pulsing Glow Dots */}
        <div className="absolute top-[40%] right-[10%] w-2.5 h-2.5 rounded-full bg-[#f472b6] opacity-60 animate-pulse" />
        <div className="absolute bottom-[40%] left-[-15%] w-2 h-2 rounded-full bg-[#c084fc] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[5%] right-[20%] w-2 h-2 rounded-full bg-[#e879f9] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>
    </div>
  )
}
