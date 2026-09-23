"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AgencySolutionsPage() {
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
              Agency Scale Architecture
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-6">
            The Agency Model Is{" "}
            <span className="font-serif-accent italic font-normal text-[#A855F7]">
              Quietly
            </span>{" "}
            Changing
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
            For years, agencies scaled by adding people. That model is breaking. Autonomous campaign intelligence lets you handle 40+ ad accounts with zero additional headcount.
          </p>

          <a
            href="/signup/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5"
          >
            <span>Run Free Agency Audit</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. IF YOU'RE GROWING, YOU'RE FEELING THIS                                  */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
              The Reality
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6">
              If You’re Growing, You’re Already Feeling This
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The friction isn&apos;t lack of talent. It&apos;s exhaustion of managing thousands of manual micro-decisions. Every new client should represent leverage, not more weight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-100">
              <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider block mb-3">
                Most Agencies (Effort)
              </span>
              <h3 className="text-xl font-bold text-rose-950 mb-2">Chaos of Effort</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Weekly panic calls. Media buyers staring at 20 Ads Manager tabs. Client escalation whenever weekend CPA spikes.
              </p>
              <div className="p-3 bg-white/80 rounded-xl text-xs font-mono text-rose-700">
                Systemic Instability · High Churn Risk
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-purple-50/50 border border-purple-100">
              <span className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider block mb-3">
                Partner Agencies (Reliability)
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Engineered Calm</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Automated 24/7 guardrails. Instant decision packages delivered before money leaks. Multi-client triage view.
              </p>
              <div className="p-3 bg-white/80 rounded-xl text-xs font-mono text-purple-900 font-semibold">
                Structural Certainty · 99.4% Client Retention
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT CHANGES WHEN YOU PARTNER WITH US                                   */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#FAF8FD] border-t border-slate-100">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
              Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Changes When You Partner With Us
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Execution is decentralized from leadership into autonomous guardrails",
              "Client reporting moves from storytelling to objective algorithmic auditing",
              "Hiring is for creative strategy, not for repetitive button clicking",
              "Capacity limits are architectural, not bound by human working hours",
              "The agency becomes a sellable asset with standardized systems, not a stressful job",
            ].map((text, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-4"
              >
                <span className="material-symbols-outlined text-emerald-600 text-2xl shrink-0">
                  check_circle
                </span>
                <p className="text-base text-slate-800 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MARGIN DECISION & UNDERPINNING INFRASTRUCTURE                           */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
              Unit Economics
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6">
              Partnership Is a Margin Decision
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Most agencies lose 20-30% of their net margin to delivery inefficiencies. Our systemic delivery model recoups that gap, turning overhead back into profit.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
                  Invisible Foundation
                </span>
                <h3 className="text-3xl font-bold mb-4">
                  We Don’t Sit on Top of Your Agency — We Sit Under It
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  A true foundation remains invisible while supporting everything above it. Your agency retains 100% of client relationships, branding, and creative strategy while Growcin executes non-stop campaign surveillance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-white/10 text-white font-bold flex justify-between">
                  <span>Client Layer</span>
                  <span className="text-purple-300">Direct Relationships</span>
                </div>
                <div className="p-3 rounded-lg bg-white/10 text-white font-bold flex justify-between">
                  <span>Agency Brand Layer</span>
                  <span className="text-purple-300">Creative &amp; Strategic Direction</span>
                </div>
                <div className="p-3 rounded-lg bg-purple-600 text-white font-bold flex justify-between shadow-lg">
                  <span>Growcin Engine</span>
                  <span>Autonomous Surveillance &amp; Triage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
