"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const PRINCIPLES = [
  {
    number: "01",
    title: "Ingestion & Surveillance",
    desc: "24/7 monitoring of market signals, frequency drift, hook decay, and buyer intent markers across every touchpoint.",
  },
  {
    number: "02",
    title: "Synthesis & Logical Inference",
    desc: "Raw metrics are contextualized through our deterministic inference engine to separate genuine signal from daily noise.",
  },
  {
    number: "03",
    title: "Calibrated Execution",
    desc: "Precise adjustments to bid, budget allocation, and creative weighting based on statistical confidence thresholds.",
  },
]

export default function MethodologyPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-28 bg-[linear-gradient(180deg,#FBF9FF_0%,#FFFFFF_40%,#FBF9FE_100%)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[1100px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(168,85,247,0.14) 0%, rgba(168,85,247,0.04) 50%, rgba(168,85,247,0) 75%)",
          }}
        />

        <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-900">
              System Philosophy
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-6">
            How We{" "}
            <span className="font-serif-accent italic font-normal text-[#A855F7]">
              Believe
            </span>{" "}
            Advertising Should Work
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
            Advertising moves businesses forward — or quietly drains them of their potential. We replace reactive firefighting with structural discipline.
          </p>

          <a
            href="/signup/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5"
          >
            <span>Audit Your Account</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. REACTION VS DISCIPLINE                                                 */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
                The Diagnosis
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Most advertising today runs on reaction.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                Reactive management is a cycle of chaos. It treats symptoms while ignoring the structural infection wasting your capital. When CPA spikes on Tuesday, managers panic-pause campaigns on Wednesday, only to restart them on Friday when leads dry up.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                This perpetual oscillation keeps ad accounts perpetually trapped in Meta&apos;s learning phase — increasing costs and destroying predictable revenue.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-100">
              <h3 className="text-lg font-bold text-rose-950 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-rose-500">warning</span>
                The Reactive Trap
              </h3>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>Checking Ads Manager 12 times a day and making emotional mid-day budget shifts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>Ignoring dead midnight hours while blaming the creative format.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>Passing unqualified leads to sales reps who waste hours on tyre-kickers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. STRUCTURE COMES BEFORE OPTIMIZATION                                    */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#FAF8FD] border-t border-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
              The Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6">
              Structure Comes Before Optimization.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Structural order creates predictable outcomes. It replaces gut feeling with architectural certainty and linear growth. Most agencies optimize for the wrong things — they polish chaos. We build discipline first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <span className="text-3xl font-mono font-bold text-purple-700 mb-4 block">1</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pacing &amp; Windows</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Budget is locked into time slots where conversions mathematically happen. Dead hours are paused automatically.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <span className="text-3xl font-mono font-bold text-purple-700 mb-4 block">2</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fatigue Curves</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We track frequency vs CTR decay curves. The moment audience saturation occurs, creatives rotate without disturbing ad set learning.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <span className="text-3xl font-mono font-bold text-purple-700 mb-4 block">3</span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Downstream Intent</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ads don&apos;t end at the click. WhatsApp qualification filters out noise so Meta&apos;s Conversion API optimizes on closed revenue, not fake leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. HOW DECISIONS ARE MADE (THE 3-TIER FLOW)                                */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
              Decision Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How Decisions Are Made
            </h2>
            <p className="text-slate-600 text-base">
              The systemic flow of structural intelligence from raw data to decisive action.
            </p>
          </div>

          <div className="space-y-6">
            {PRINCIPLES.map((p) => (
              <div
                key={p.number}
                className="p-8 rounded-3xl bg-[#FAF8FD] border border-purple-100/70 flex flex-col md:flex-row md:items-center gap-6 justify-between"
              >
                <div className="flex items-center gap-6">
                  <span className="text-2xl font-mono font-extrabold text-[#A855F7] bg-purple-100/70 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{p.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-xl">{p.desc}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-white px-3 py-1.5 rounded-full border border-purple-100 shrink-0 self-start md:self-auto">
                  Deterministic
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. RESTRAINT IS NOT A LIMITATION                                          */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-4">
            The Golden Rule
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Restraint Is Not a Limitation — It’s the Advantage.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            The best campaign managers know when not to touch anything. Constant tweaking creates learning loop resets in Meta&apos;s delivery algorithms. Our system practices deliberate restraint: we only intervene when anomalies cross definitive statistical thresholds.
          </p>
          <a
            href="/signup/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#A855F7] text-white font-semibold text-sm hover:bg-purple-600 transition-colors"
          >
            <span>Experience Calm Execution</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>
      </section>
    </div>
  )
}
