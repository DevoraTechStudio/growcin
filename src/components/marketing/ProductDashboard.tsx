"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { icon: "dashboard", label: "Overview", view: "dashboard" as const },
  { icon: "campaign", label: "Campaigns", view: "campaigns" as const },
  { icon: "edit_note", label: "AI Writer", view: "writer" as const },
  { icon: "insights", label: "Analytics", view: "analytics" as const },
]

const METRICS = [
  { label: "Pipeline", value: "$248k", delta: "+18%" },
  { label: "ROAS", value: "4.2x", delta: "+0.6" },
  { label: "Leads", value: "1,284", delta: "+32%" },
  { label: "CPA", value: "$11.40", delta: "-14%" },
]

type View = "dashboard" | "analytics" | "writer" | "campaigns"

interface ProductDashboardProps {
  className?: string
  activeView?: View
}

export function ProductDashboard({ className, activeView = "dashboard" }: ProductDashboardProps) {
  const [view, setView] = React.useState<View>(activeView)

  React.useEffect(() => {
    setView(activeView)
  }, [activeView])

  return (
    <div
      className={cn(
        "w-full rounded-xl sm:rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden border border-white/10 bg-[var(--color-product)] shadow-[0_24px_60px_-24px_rgba(15,23,42,0.45)] md:shadow-[0_40px_100px_-30px_rgba(15,23,42,0.55)]",
        className
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/8 bg-[#0B1220]">
        <div className="flex gap-1.5 shrink-0">
          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="ml-2 sm:ml-3 flex-1 flex justify-center min-w-0">
          <div className="h-6 px-2.5 sm:px-4 rounded-md bg-white/5 border border-white/8 text-[9px] sm:text-[10px] text-slate-400 flex items-center gap-1.5 max-w-full sm:max-w-sm w-full justify-center truncate">
            <span className="material-symbols-outlined text-[11px] sm:text-[12px] shrink-0">lock</span>
            <span className="truncate">app.growcin.com</span>
          </div>
        </div>
      </div>

      {/* Mobile view switcher */}
      <div className="sm:hidden flex gap-1 p-2 border-b border-white/8 bg-[#0B1220] overflow-x-auto">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setView(item.view)}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-[11px] font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0",
              view === item.view
                ? "bg-[var(--color-brand-blue)]/25 text-white"
                : "text-slate-400"
            )}
          >
            <span className="material-symbols-outlined text-[14px]">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex min-h-[280px] sm:min-h-[360px] md:min-h-[440px]">
        {/* Sidebar — tablet+ */}
        <aside className="hidden sm:flex w-[160px] md:w-[180px] lg:w-[200px] flex-col gap-1 border-r border-white/8 p-2.5 md:p-3 bg-[#0B1220] shrink-0">
          <div className="px-2 py-2 mb-1 md:mb-2">
            <span className="font-display text-sm font-bold text-white tracking-tight">
              grow<span className="text-[var(--color-brand-accent)]">cin</span>
            </span>
          </div>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setView(item.view)}
              className={cn(
                "flex items-center gap-2 rounded-lg px-2 py-2 text-left text-[11px] md:text-[12px] font-medium transition-colors cursor-pointer",
                view === item.view
                  ? "bg-[var(--color-brand-blue)]/20 text-white"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              )}
            >
              <span className="material-symbols-outlined text-[15px] md:text-[16px]">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </aside>

        <div className="flex-1 p-3 sm:p-4 md:p-5 overflow-hidden min-w-0">
          {view === "dashboard" && <DashboardView />}
          {view === "analytics" && <AnalyticsView />}
          {view === "writer" && <WriterView />}
          {view === "campaigns" && <CampaignsView />}
        </div>
      </div>
    </div>
  )
}

function DashboardView() {
  return (
    <motion.div
      key="dashboard"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-3 sm:space-y-4"
    >
      <div className="flex items-center justify-between gap-2 sm:gap-3">
        <div className="min-w-0">
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-body-muted">
            Today
          </p>
          <h3 className="text-white font-semibold text-sm md:text-base truncate">
            Marketing overview
          </h3>
        </div>
        <div className="hidden xs:flex items-center gap-2 text-[10px] text-[var(--color-status-good)] bg-[var(--color-status-good)]/10 border border-[var(--color-status-good)]/20 px-2 py-1 rounded-full font-semibold shrink-0 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-status-good)] animate-pulse" />
          <span className="hidden sm:inline">AI monitoring live</span>
          <span className="sm:hidden">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="rounded-lg sm:rounded-xl border border-white/8 bg-white/[0.03] p-2.5 sm:p-3"
          >
            <p className="text-[9px] sm:text-[10px] text-body-muted font-medium mb-1">{m.label}</p>
            <p className="text-white font-bold text-base sm:text-lg leading-none">{m.value}</p>
            <p className="text-[9px] sm:text-[10px] text-[var(--color-status-good)] font-semibold mt-1 sm:mt-1.5">
              {m.delta}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-2.5 sm:gap-3">
        <div className="rounded-lg sm:rounded-xl border border-white/8 bg-white/[0.03] p-3 sm:p-3.5">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <p className="text-xs font-semibold text-white">Performance</p>
            <p className="text-[10px] text-body-muted">14 days</p>
          </div>
          <svg viewBox="0 0 400 120" className="w-full h-[72px] sm:h-[100px]" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9030F8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#9030F8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,90 C40,85 60,70 100,65 C140,60 160,78 200,55 C240,32 280,40 320,28 C360,16 380,22 400,18 L400,120 L0,120 Z"
              fill="url(#chartFill)"
            />
            <path
              d="M0,90 C40,85 60,70 100,65 C140,60 160,78 200,55 C240,32 280,40 320,28 C360,16 380,22 400,18"
              fill="none"
              stroke="#C830F8"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="rounded-lg sm:rounded-xl border border-white/8 bg-white/[0.03] p-3 sm:p-3.5 space-y-2">
          <p className="text-xs font-semibold text-white mb-1">AI actions</p>
          {[
            { title: "Refresh Meta creative", meta: "CTR −28% · pause recommended" },
            { title: "Publish LinkedIn post", meta: "Draft ready · high intent topic" },
            { title: "Shift 12% to Search", meta: "ROAS 5.1x on brand terms" },
          ].map((a) => (
            <div
              key={a.title}
              className="flex items-start gap-2 rounded-lg bg-white/[0.03] border border-white/6 px-2 py-2"
            >
              <span className="material-symbols-outlined text-[var(--color-brand-accent)] text-[14px] mt-0.5 shrink-0">
                auto_awesome
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-white leading-snug truncate">{a.title}</p>
                <p className="text-[10px] text-body-muted mt-0.5 truncate">{a.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function AnalyticsView() {
  return (
    <motion.div
      key="analytics"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-3 sm:space-y-4"
    >
      <h3 className="text-white font-semibold text-sm md:text-base">Channel analytics</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
        {[
          { channel: "SEO", traffic: "42.1k", conv: "3.8%" },
          { channel: "Paid Social", traffic: "18.4k", conv: "2.1%" },
          { channel: "Email", traffic: "9.2k", conv: "6.4%" },
        ].map((c) => (
          <div key={c.channel} className="rounded-xl border border-white/8 bg-white/[0.03] p-3 sm:p-4">
            <p className="text-[10px] text-body-muted uppercase tracking-wider font-semibold">
              {c.channel}
            </p>
            <p className="text-xl sm:text-2xl font-bold text-white mt-2">{c.traffic}</p>
            <p className="text-xs text-slate-400 mt-1">Conv. {c.conv}</p>
            <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full brand-gradient-bg"
                style={{ width: c.channel === "Email" ? "78%" : c.channel === "SEO" ? "64%" : "48%" }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3 sm:p-4">
        <p className="text-xs font-semibold text-white mb-3">Attribution mix</p>
        <div className="flex h-8 rounded-lg overflow-hidden text-[8px] sm:text-[9px]">
          <div className="bg-[var(--color-brand-blue)] w-[38%] flex items-center justify-center text-white font-bold px-0.5">
            <span className="truncate">Ads 38%</span>
          </div>
          <div className="bg-[var(--color-brand-secondary)] w-[27%] flex items-center justify-center text-white font-bold px-0.5">
            <span className="truncate">Org 27%</span>
          </div>
          <div className="bg-[var(--color-brand-accent)] w-[20%] flex items-center justify-center text-[var(--color-ink)] font-bold px-0.5">
            <span className="truncate">Email</span>
          </div>
          <div className="bg-slate-600 w-[15%] flex items-center justify-center text-white font-bold px-0.5">
            <span className="truncate">+</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function WriterView() {
  return (
    <motion.div
      key="writer"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-3 sm:space-y-4"
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-white font-semibold text-sm md:text-base">AI content studio</h3>
        <span className="text-[10px] font-semibold text-[var(--color-brand-accent)] bg-[var(--color-brand-blue)]/15 border border-[var(--color-brand-blue)]/25 px-2 py-1 rounded-full shrink-0">
          Generating…
        </span>
      </div>
      <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3 sm:p-4 space-y-3">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-body-muted">
          Blog draft · SEO optimized
        </p>
        <p className="text-white font-semibold text-sm leading-snug">
          7 AI marketing workflows that cut CAC without killing reach
        </p>
        <div className="space-y-2">
          <div className="h-2 rounded bg-white/8 w-full" />
          <div className="h-2 rounded bg-white/8 w-[92%]" />
          <div className="h-2 rounded bg-white/8 w-[86%]" />
          <div className="h-2 rounded bg-[var(--color-brand-blue)]/30 w-[70%] animate-pulse-soft" />
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {["SEO score 92", "Readability A", "Brand voice"].map((t) => (
            <span
              key={t}
              className="text-[10px] font-medium text-slate-300 bg-white/5 border border-white/8 px-2 py-1 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {["LinkedIn post", "Email sequence", "Ad copy set", "WhatsApp blast"].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-white/8 bg-white/[0.03] px-2.5 sm:px-3 py-2.5 sm:py-3 flex items-center gap-2 min-w-0"
          >
            <span className="material-symbols-outlined text-[var(--color-brand-accent)] text-[16px] shrink-0">
              auto_awesome
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-white truncate">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function CampaignsView() {
  return (
    <motion.div
      key="campaigns"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-3 sm:space-y-4"
    >
      <h3 className="text-white font-semibold text-sm md:text-base">Campaign builder</h3>
      <div className="space-y-2">
        {[
          { name: "Spring launch — Meta", status: "Healthy", cpa: "$9.20", color: "good" },
          { name: "Retargeting — 7D", status: "Watch", cpa: "$12.80", color: "warn" },
          { name: "Search — Brand", status: "Scaling", cpa: "$6.40", color: "good" },
          { name: "LinkedIn — ABM", status: "Review", cpa: "$28.10", color: "bad" },
        ].map((c) => (
          <div
            key={c.name}
            className="flex items-center justify-between gap-2 sm:gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-2.5 sm:px-3 py-2.5"
          >
            <div className="min-w-0">
              <p className="text-[11px] sm:text-[12px] font-semibold text-white truncate">{c.name}</p>
              <p className="text-[10px] text-body-muted">CPA {c.cpa}</p>
            </div>
            <span
              className={cn(
                "text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded-full shrink-0",
                c.color === "good" && "bg-[var(--color-status-good)]/15 text-[var(--color-status-good)]",
                c.color === "warn" && "bg-[var(--color-status-warn)]/15 text-[var(--color-status-warn)]",
                c.color === "bad" && "bg-[var(--color-status-bad)]/15 text-[var(--color-status-bad)]"
              )}
            >
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
