"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function AuditWalkthrough() {
  return (
    <section id="audit-walkthrough" className="relative scroll-mt-24 bg-[#FBF9FE] lg:scroll-mt-28">
      <div className="relative overflow-hidden py-14 sm:py-20">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 right-0 h-96 w-96 translate-x-1/3 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative z-10 mx-auto h-full w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-14 sm:space-y-20 lg:space-y-24">
            {/* ========================================================================= */}
            {/* STEP 1: The gap                                                           */}
            {/* ========================================================================= */}
            <div className="grid grid-cols-1 items-center gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-14" aria-hidden="false">
              <div className="space-y-5 lg:col-span-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A855F7]">The gap</p>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Budget follows volume,{" "}
                  <span className="font-serif-accent font-normal italic text-[#A855F7]">
                    not return
                  </span>
                </h2>
                <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
                  Split the last 30 days into four windows and read two columns side by side: the share of budget each window takes, and the return it gives back. Afternoon holds 42.4% of the spend at 1.78x. Evening returns 2.11x on 26.6%. Nothing is broken here — the money is simply sitting where the volume is.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="relative flex flex-col overflow-hidden rounded-3xl border border-purple-100/60 bg-gradient-to-br from-purple-50/60 via-white to-purple-50/40 p-4 shadow-[0_10px_40px_rgba(168,85,247,0.06)] sm:p-5 md:p-6 lg:min-h-[520px]">
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_2px_8px_rgba(109,40,217,0.10)] sm:h-9 sm:w-9 text-[#A855F7]">
                        <span className="material-symbols-outlined text-lg">schedule</span>
                      </span>
                      <div>
                        <p className="text-[13px] font-bold tracking-tight text-slate-900">Budget by Time of Day</p>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">Share vs return · Last 30 days</p>
                      </div>
                    </div>
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-white px-2 py-1 text-[8px] font-bold tracking-[0.06em] text-purple-700 shadow-[0_1px_4px_rgba(109,40,217,0.08)] sm:text-[9px] sm:tracking-[0.08em]">
                      SAMPLE ACCOUNT
                    </span>
                  </div>

                  <div className="mt-4 flex min-h-0 flex-1 flex-col justify-between rounded-2xl border border-purple-50 bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                    <div className="grid grid-cols-[62px_minmax(0,1fr)_94px] gap-2 px-2 sm:grid-cols-[92px_minmax(0,1fr)_minmax(0,1fr)] sm:gap-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400 pb-2 border-b border-slate-50">
                      <span>Window</span>
                      <span>Share of budget</span>
                      <span className="pl-2 sm:pl-3">Return vs avg — 1.86x</span>
                    </div>

                    <div className="space-y-3 py-2">
                      <div className="grid grid-cols-[62px_minmax(0,1fr)_94px] items-center gap-2 rounded-xl px-2 py-2 sm:grid-cols-[92px_minmax(0,1fr)_minmax(0,1fr)] sm:gap-3 hover:bg-purple-50/40 transition-colors">
                        <div>
                          <p className="text-[12px] font-semibold text-slate-700">Night</p>
                          <p className="text-[10px] tabular-nums text-slate-400">12AM–6AM</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3.5 rounded-r-full bg-[#A78BFA]" style={{ width: "8.3%" }} />
                          <span className="text-[10px] font-medium tabular-nums text-slate-500">8.3%</span>
                        </div>
                        <div className="border-l border-slate-100 pl-2 sm:pl-3">
                          <p className="text-[12px] font-semibold tabular-nums text-slate-900">1.80x</p>
                          <p className="text-[10px] font-semibold text-rose-500">−0.06 vs avg</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[62px_minmax(0,1fr)_94px] items-center gap-2 rounded-xl px-2 py-2 sm:grid-cols-[92px_minmax(0,1fr)_minmax(0,1fr)] sm:gap-3 hover:bg-purple-50/40 transition-colors">
                        <div>
                          <p className="text-[12px] font-semibold text-slate-700">Morning</p>
                          <p className="text-[10px] tabular-nums text-slate-400">6AM–12PM</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3.5 rounded-r-full bg-[#A78BFA]" style={{ width: "22.7%" }} />
                          <span className="text-[10px] font-medium tabular-nums text-slate-500">22.7%</span>
                        </div>
                        <div className="border-l border-slate-100 pl-2 sm:pl-3">
                          <p className="text-[12px] font-semibold tabular-nums text-slate-900">1.74x</p>
                          <p className="text-[10px] font-semibold text-rose-500">−0.12 vs avg</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[62px_minmax(0,1fr)_94px] items-center gap-2 rounded-xl px-2 py-2 sm:grid-cols-[92px_minmax(0,1fr)_minmax(0,1fr)] sm:gap-3 bg-purple-50/30">
                        <div>
                          <p className="text-[12px] font-semibold text-slate-700">Afternoon</p>
                          <p className="text-[10px] tabular-nums text-slate-400">12PM–6PM</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3.5 rounded-r-full bg-[#A78BFA]" style={{ width: "42.4%" }} />
                          <span className="text-[10px] font-medium tabular-nums text-slate-500">42.4%</span>
                        </div>
                        <div className="border-l border-slate-100 pl-2 sm:pl-3">
                          <p className="text-[12px] font-semibold tabular-nums text-slate-900">1.78x</p>
                          <p className="text-[10px] font-semibold text-rose-500">−0.08 vs avg</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-[62px_minmax(0,1fr)_94px] items-center gap-2 rounded-xl px-2 py-2 sm:grid-cols-[92px_minmax(0,1fr)_minmax(0,1fr)] sm:gap-3 bg-purple-50/60 border border-purple-200/60">
                        <div>
                          <p className="text-[12px] font-bold text-purple-900">Evening</p>
                          <p className="text-[10px] tabular-nums text-purple-600 font-medium">6PM–12AM</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3.5 rounded-r-full bg-[#7C3AED]" style={{ width: "26.6%" }} />
                          <span className="text-[10px] font-bold tabular-nums text-purple-900">26.6%</span>
                        </div>
                        <div className="border-l border-purple-200 pl-2 sm:pl-3">
                          <p className="text-[12px] font-bold tabular-nums text-purple-900">2.11x</p>
                          <p className="text-[10px] font-bold text-emerald-600">+0.25 vs avg</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span>30-day window · 1,428 conversions</span>
                      <span className="font-semibold text-purple-700">Best ROAS: Evening</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* STEP 2: The dead hours                                                    */}
            {/* ========================================================================= */}
            <div className="grid grid-cols-1 items-center gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-14" aria-hidden="false">
              <div className="space-y-5 lg:col-span-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A855F7]">The dead hours</p>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Subtract waste{" "}
                  <span className="font-serif-accent font-normal italic text-[#A855F7]">
                    before you add budget
                  </span>
                </h2>
                <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
                  Today’s spend landed in seven hours out of twenty-four, and $456.71 of it fell between 12AM and 5AM — a window where almost nothing converts. That money is already yours. Taking dead hours back does not depend on any comparison being right.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="relative flex flex-col overflow-hidden rounded-3xl border border-purple-100/60 bg-gradient-to-br from-purple-50/60 via-white to-purple-50/40 p-4 shadow-[0_10px_40px_rgba(168,85,247,0.06)] sm:p-5 md:p-6 lg:min-h-[520px]">
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_2px_8px_rgba(109,40,217,0.10)] sm:h-9 sm:w-9 text-[#A855F7]">
                        <span className="material-symbols-outlined text-lg">dark_mode</span>
                      </span>
                      <div>
                        <p className="text-[13px] font-bold tracking-tight text-slate-900">Spend by Hour</p>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">Which hours carried spend · Today</p>
                      </div>
                    </div>
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-white px-2 py-1 text-[8px] font-bold tracking-[0.06em] text-purple-700 shadow-[0_1px_4px_rgba(109,40,217,0.08)] sm:text-[9px] sm:tracking-[0.08em]">
                      SAMPLE ACCOUNT
                    </span>
                  </div>

                  <div className="mt-4 flex min-h-0 flex-1 flex-col justify-between rounded-2xl border border-purple-50 bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-medium text-slate-500 pb-3 border-b border-slate-50">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-[3px] bg-rose-500" />
                          Waste <span className="text-slate-400 font-mono">5 hrs ($456.71)</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-[3px] bg-purple-600" />
                          Active <span className="text-slate-400 font-mono">2 hrs</span>
                        </span>
                      </div>
                      <span className="text-rose-600 font-semibold bg-rose-50 px-2 py-0.5 rounded-md text-[10px]">
                        0 Conversions Recorded
                      </span>
                    </div>

                    <div className="py-6 flex items-end justify-between gap-1 h-44">
                      {Array.from({ length: 24 }).map((_, h) => {
                        const isWaste = h >= 0 && h <= 4
                        const isPeak = h >= 18 && h <= 21
                        const height = isWaste ? 50 + h * 8 : isPeak ? 90 + (h % 3) * 15 : 15 + (h * 3) % 40
                        return (
                          <div key={h} className="flex-1 flex flex-col items-center gap-1">
                            <div
                              className={cn(
                                "w-full rounded-t-sm transition-all",
                                isWaste ? "bg-rose-400/90" : isPeak ? "bg-purple-600" : "bg-slate-200"
                              )}
                              style={{ height: `${height}%` }}
                            />
                            <span className="text-[8px] font-mono text-slate-400">
                              {h % 4 === 0 ? `${h}h` : ""}
                            </span>
                          </div>
                        )
                      })}
                    </div>

                    <div className="p-3 bg-rose-50/70 border border-rose-100 rounded-xl flex items-center justify-between text-xs text-rose-800">
                      <span className="flex items-center gap-1.5 font-medium">
                        <span className="material-symbols-outlined text-base text-rose-500">warning</span>
                        12 AM – 5 AM: $456.71 spent without a single qualified lead
                      </span>
                      <span className="font-bold text-rose-700">Immediate recovery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* STEP 3: The evidence                                                      */}
            {/* ========================================================================= */}
            <div className="grid grid-cols-1 items-center gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-14" aria-hidden="false">
              <div className="space-y-5 lg:col-span-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A855F7]">The evidence</p>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Count the conversions{" "}
                  <span className="font-serif-accent font-normal italic text-[#A855F7]">
                    behind the rate
                  </span>
                </h2>
                <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
                  Every comparison rests on a number of conversions, and this account has around fifty. Three sit in the night window against twenty-one in the afternoon. Men 45–54 click at 6.64% on $507 with no conversions reported at all — a hypothesis to test, not a segment to fund.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="relative flex flex-col overflow-hidden rounded-3xl border border-purple-100/60 bg-gradient-to-br from-purple-50/60 via-white to-purple-50/40 p-4 shadow-[0_10px_40px_rgba(168,85,247,0.06)] sm:p-5 md:p-6 lg:min-h-[520px]">
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_2px_8px_rgba(109,40,217,0.10)] sm:h-9 sm:w-9 text-[#A855F7]">
                        <span className="material-symbols-outlined text-lg">troubleshoot</span>
                      </span>
                      <div>
                        <p className="text-[13px] font-bold tracking-tight text-slate-900">Evidence Behind Each Split</p>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">What is converting · Last 30 days</p>
                      </div>
                    </div>
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-white px-2 py-1 text-[8px] font-bold tracking-[0.06em] text-purple-700 shadow-[0_1px_4px_rgba(109,40,217,0.08)] sm:text-[9px] sm:tracking-[0.08em]">
                      SAMPLE ACCOUNT
                    </span>
                  </div>

                  <div className="mt-4 flex min-h-0 flex-1 flex-col justify-between rounded-2xl border border-purple-50 bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                    <p className="text-[12px] font-bold text-slate-900 pb-2 border-b border-slate-50">
                      Conversions by time of day &amp; Statistical Confidence
                    </p>

                    <div className="space-y-3 py-2">
                      <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold text-slate-700">Night (12AM–6AM)</span>
                          <p className="text-[10px] text-slate-400">3 conversions · $507 spent</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                          Low Confidence (n=3)
                        </span>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold text-slate-700">Morning (6AM–12PM)</span>
                          <p className="text-[10px] text-slate-400">11 conversions · $1,380 spent</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">
                          Moderate Confidence (n=11)
                        </span>
                      </div>

                      <div className="p-3 bg-purple-50/60 rounded-xl flex items-center justify-between border border-purple-100">
                        <div>
                          <span className="text-xs font-semibold text-purple-900">Afternoon (12PM–6PM)</span>
                          <p className="text-[10px] text-purple-600">21 conversions · $2,580 spent</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-200/80 text-purple-900">
                          High Confidence (n=21)
                        </span>
                      </div>

                      <div className="p-3 bg-emerald-50/60 rounded-xl flex items-center justify-between border border-emerald-100">
                        <div>
                          <span className="text-xs font-semibold text-emerald-900">Evening (6PM–12AM)</span>
                          <p className="text-[10px] text-emerald-600">15 conversions · $1,620 spent (2.11x ROAS)</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-200/80 text-emerald-900">
                          High Confidence (n=15)
                        </span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                      Decisions based on statistical validity, preventing premature pauses on viable sets.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* STEP 4: The other axis                                                    */}
            {/* ========================================================================= */}
            <div className="grid grid-cols-1 items-center gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-14" aria-hidden="false">
              <div className="space-y-5 lg:col-span-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A855F7]">The other axis</p>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Hours are one axis,{" "}
                  <span className="font-serif-accent font-normal italic text-[#A855F7]">
                    not the only one
                  </span>
                </h2>
                <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
                  The same test — share against return — runs on who you reach, not just when. This account reaches 1M against an ideal core of 5M: too narrow to give delivery room to optimise. The widest gaps are where the next edit belongs, once this one has settled.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="relative flex flex-col overflow-hidden rounded-3xl border border-purple-100/60 bg-gradient-to-br from-purple-50/60 via-white to-purple-50/40 p-4 shadow-[0_10px_40px_rgba(168,85,247,0.06)] sm:p-5 md:p-6 lg:min-h-[520px]">
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_2px_8px_rgba(109,40,217,0.10)] sm:h-9 sm:w-9 text-[#A855F7]">
                        <span className="material-symbols-outlined text-lg">groups</span>
                      </span>
                      <div>
                        <p className="text-[13px] font-bold tracking-tight text-slate-900">Audience Health</p>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">Nine dimensions vs target · Last 30 days</p>
                      </div>
                    </div>
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-white px-2 py-1 text-[8px] font-bold tracking-[0.06em] text-purple-700 shadow-[0_1px_4px_rgba(109,40,217,0.08)] sm:text-[9px] sm:tracking-[0.08em]">
                      SAMPLE ACCOUNT
                    </span>
                  </div>

                  <div className="mt-4 flex min-h-0 flex-1 flex-col justify-between rounded-2xl border border-purple-50 bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-50">
                      <p className="text-[12px] font-bold text-slate-900">Audience Metrics vs Optimal Target</p>
                      <span className="text-[10px] font-mono text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                        Audience: 1.1M / Target: 5.0M
                      </span>
                    </div>

                    <div className="space-y-3 py-2">
                      <div>
                        <div className="flex justify-between text-xs font-medium mb-1">
                          <span className="text-slate-600">Frequency Saturation</span>
                          <span className="text-rose-600 font-bold">3.8 (High risk &gt; 2.2)</span>
                        </div>
                        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-rose-500 rounded-full" style={{ width: "85%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-medium mb-1">
                          <span className="text-slate-600">Hook Rate</span>
                          <span className="text-amber-600 font-bold">18.2% (Target: &gt; 28%)</span>
                        </div>
                        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: "55%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-medium mb-1">
                          <span className="text-slate-600">Hold Rate (ThruPlay)</span>
                          <span className="text-amber-600 font-bold">8.4% (Target: &gt; 15%)</span>
                        </div>
                        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: "42%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-medium mb-1">
                          <span className="text-slate-600">First-Time Impression Ratio</span>
                          <span className="text-rose-600 font-bold">44% (Target: &gt; 70%)</span>
                        </div>
                        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-rose-500 rounded-full" style={{ width: "44%" }} />
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 bg-purple-50 rounded-xl text-[11px] text-purple-900 font-medium">
                      Audience fatigue detected: Expanding lookback to 180 days unlocks 3.2M fresh buyers.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* STEP 5: The move                                                          */}
            {/* ========================================================================= */}
            <div className="grid grid-cols-1 items-center gap-7 sm:gap-10 lg:grid-cols-12 lg:gap-14" aria-hidden="false">
              <div className="space-y-5 lg:col-span-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A855F7]">The move</p>
                <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  One edit,{" "}
                  <span className="font-serif-accent font-normal italic text-[#A855F7]">
                    then leave it alone
                  </span>
                </h2>
                <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
                  Nothing here asks for a bigger budget. Move $403.17 out of morning and into evening — one ad set, on a lifetime budget so the hours can be scheduled at all. Then stop, and judge it on conversions once the ad set is out of learning.
                </p>

                <div className="pt-2">
                  <a
                    href="/signup/"
                    className="group inline-flex items-center gap-2 text-base font-semibold text-purple-600 transition-colors hover:text-purple-700"
                  >
                    <span>Get your free audit</span>
                    <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative flex flex-col overflow-hidden rounded-3xl border border-purple-100/60 bg-gradient-to-br from-purple-50/60 via-white to-purple-50/40 p-4 shadow-[0_10px_40px_rgba(168,85,247,0.06)] sm:p-5 md:p-6 lg:min-h-[520px]">
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_2px_8px_rgba(109,40,217,0.10)] sm:h-9 sm:w-9 text-[#A855F7]">
                        <span className="material-symbols-outlined text-lg">swap_horiz</span>
                      </span>
                      <div>
                        <p className="text-[13px] font-bold tracking-tight text-slate-900">The Move</p>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">One ad set · One edit</p>
                      </div>
                    </div>
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-white px-2 py-1 text-[8px] font-bold tracking-[0.06em] text-purple-700 shadow-[0_1px_4px_rgba(109,40,217,0.08)] sm:text-[9px] sm:tracking-[0.08em]">
                      SAMPLE ACCOUNT
                    </span>
                  </div>

                  <div className="mt-4 flex min-h-0 flex-1 flex-col justify-between rounded-2xl border border-purple-50 bg-white p-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-50">
                      <p className="text-[12px] font-bold text-slate-900">Recommended Allocation Rebalance</p>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Zero Ad Spend Added
                      </span>
                    </div>

                    <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-100 my-2">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                        <span>Current: Morning 6AM–12PM</span>
                        <span className="text-rose-600 font-mono">-$403.17 / day</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full mb-4">
                        <div className="h-full bg-rose-400 rounded-full" style={{ width: "35%" }} />
                      </div>

                      <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                        <span>Target: Evening 6PM–12AM</span>
                        <span className="text-emerald-600 font-mono">+$403.17 / day</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: "75%" }} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 py-1 text-center">
                      <div className="p-2.5 bg-slate-50 rounded-xl">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">Projected ROAS</span>
                        <p className="text-base font-bold text-emerald-600">+18.4% Lift</p>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl">
                        <span className="text-[10px] text-slate-400 uppercase font-semibold">Monthly Saved</span>
                        <p className="text-base font-bold text-purple-700">$1,612 / mo</p>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-100">
                      One change applied cleanly. No account disturbance.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
