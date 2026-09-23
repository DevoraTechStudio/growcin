"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PhilosophyPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
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
              Operating Ethos
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-6">
            Subtract Waste{" "}
            <span className="font-serif-accent italic font-normal text-[#A855F7]">
              Before
            </span>{" "}
            You Add Budget
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
            Most software tries to convince you to increase spend. Our philosophy is the opposite: patch the silent leaks first, stabilize conversion velocity, and only scale what mathematically works.
          </p>

          <a
            href="/signup/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5"
          >
            <span>Run Free Account Audit</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-6 space-y-12 text-slate-700 text-base sm:text-lg leading-relaxed">
          <div className="p-8 rounded-3xl bg-[#FAF8FD] border border-purple-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Silence Is Not Success</h2>
            <p>
              When a campaign is quiet, it doesn&apos;t mean it&apos;s working. Creative fatigue and audience saturation start invisibly days before CPA officially doubles. True systems surface deterioration at the earliest warning signal.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF8FD] border border-purple-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. The 3 AM Leak Is Real</h2>
            <p>
              Thousands of ad dollars are burned between midnight and dawn in low-converting windows. Taking dead hours back doesn&apos;t require gut feel — it is simple arithmetic.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF8FD] border border-purple-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Respect the Learning Phase</h2>
            <p>
              Constant manual button pushing resets Meta&apos;s optimization models and drives up auction bid volatility. Growcin practices disciplined restraint, acting only when high-confidence statistical thresholds demand intervention.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
