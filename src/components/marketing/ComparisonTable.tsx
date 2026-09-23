"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const COMPARISON_DATA = [
  {
    feature: "Monthly cost",
    without: "High agency retainer, plus ad spend, paid regardless of performance consistency",
    with: "Low flat fee, plus ad spend, with the full autonomous intelligence layer included",
  },
  {
    feature: "Audience targeting",
    without: "Set manually, revisited occasionally based on gut feel and old spreadsheets",
    with: "AI audience engine refines continuously from live conversion and intent signals",
  },
  {
    feature: "Budget allocation",
    without: "Fixed split, manually rebalanced only after someone notices spend burned",
    with: "Automatically shifts budget toward what is converting in real time",
  },
  {
    feature: "Ad timing & pacing",
    without: "Runs on a flat schedule, rarely tuned to actual audience peak buying activity",
    with: "Time-slot optimization based on when your buyers are actually active",
  },
  {
    feature: "Lead response time",
    without: "Depends on staff availability, often hours or next business day",
    with: "AI qualification assistant responds instantly on WhatsApp, 24/7",
  },
  {
    feature: "WhatsApp follow-up",
    without: "Manual or bulk-blasted, high risk of spam flags and phone number bans",
    with: "Paced broadcasting with automatic throttling to protect phone reputation",
  },
  {
    feature: "Creative scoring",
    without: "Reviewed periodically in weekly meetings, often subjectively",
    with: "Continuous, data-driven creative fatigue and hook-rate decay scoring",
  },
  {
    feature: "Reporting & alerts",
    without: "Monthly PDF or call telling you what went wrong yesterday",
    with: "Account audit, campaign triage, and decision packages delivered before budget leaks",
  },
  {
    feature: "Personalisation to USP",
    without: "Generic copy templates reused across clients without differentiation",
    with: "Messaging adapts to each business's unique USP and buyer intent automatically",
  },
  {
    feature: "Consistency",
    without: "Depends on individual manager's bandwidth, mood, and attention that week",
    with: "The exact same level of 24/7 monitoring and optimization applied every day",
  },
]

export function ComparisonTable({ className }: { className?: string }) {
  return (
    <div className={cn("w-full max-w-6xl mx-auto", className)}>
      {/* Desktop view */}
      <div className="hidden md:block overflow-hidden rounded-[2rem] border border-[var(--color-border-subtle)] bg-white/80 shadow-[0_20px_60px_-30px_rgba(144,48,248,0.25)] backdrop-blur-xl">
        <div className="grid grid-cols-[1fr_1.3fr_1.3fr] border-b border-slate-100">
          {/* Headers */}
          <div className="bg-slate-50/90 px-6 py-5 flex items-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-slate-400">
              Dimension
            </span>
          </div>
          <div className="border-l border-slate-100 bg-red-50/60 px-6 py-5 flex items-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-red-600">
              Without Growcin
            </span>
          </div>
          <div className="border-l border-slate-100 bg-emerald-50/60 px-6 py-5 flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-700 flex items-center gap-2">
              With Growcin
              <span className="material-symbols-outlined text-[18px] text-emerald-600">bolt</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              Autonomous
            </span>
          </div>
        </div>

        {/* Rows */}
        {COMPARISON_DATA.map((row, i) => (
          <div
            key={row.feature}
            className={cn(
              "grid grid-cols-[1fr_1.3fr_1.3fr] border-b border-slate-100 transition-colors last:border-b-0 hover:bg-purple-500/[0.02]",
              i % 2 === 1 ? "bg-slate-50/30" : "bg-white"
            )}
          >
            <div className="flex items-start px-6 py-5">
              <span className="text-sm font-bold text-slate-900">{row.feature}</span>
            </div>
            <div className="flex items-start gap-3 border-l border-slate-100 bg-red-50/20 px-6 py-5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 1l6 6M7 1L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <p className="text-sm leading-relaxed text-slate-600">{row.without}</p>
            </div>
            <div className="flex items-start gap-3 border-l border-slate-100 bg-emerald-50/20 px-6 py-5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 4l2.5 2.5L7 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="text-sm leading-relaxed text-slate-900 font-medium">{row.with}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view */}
      <div className="md:hidden space-y-4">
        {COMPARISON_DATA.map((row) => (
          <div
            key={row.feature}
            className="rounded-2xl border border-[var(--color-border-subtle)] bg-white p-5 space-y-3.5 text-left shadow-sm"
          >
            <h4 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">
              {row.feature}
            </h4>
            <div className="space-y-2.5">
              <div className="bg-red-50/60 p-3.5 rounded-xl flex items-start gap-2.5 border border-red-100">
                <span className="material-symbols-outlined text-red-500 mt-0.5 shrink-0 text-base">
                  close
                </span>
                <div>
                  <div className="text-[10px] font-bold text-red-600 uppercase mb-0.5 tracking-wider">
                    Without Growcin
                  </div>
                  <div className="text-slate-600 text-xs leading-relaxed">{row.without}</div>
                </div>
              </div>
              <div className="bg-emerald-50/60 p-3.5 rounded-xl flex items-start gap-2.5 border border-emerald-100">
                <span className="material-symbols-outlined text-emerald-600 mt-0.5 shrink-0 text-base">
                  check_circle
                </span>
                <div>
                  <div className="text-[10px] font-bold text-emerald-700 uppercase mb-0.5 tracking-wider">
                    With Growcin
                  </div>
                  <div className="text-slate-900 text-xs font-medium leading-relaxed">{row.with}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
