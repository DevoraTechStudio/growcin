"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const TIMELINE = [
  {
    era: "Era 01 / Brute Force",
    title: "Manual Campaign Slog",
    desc: "Fragmented spreadsheets, manual hourly monitoring, reliance on individual media buyers, and inevitable weekend budget burn.",
  },
  {
    era: "Era 02 / The Synthesis",
    title: "The First Automation Layers",
    desc: "Development of early API scripts, custom CPA anomaly webhooks, and unified data pipelines across client ad accounts.",
  },
  {
    era: "Era 03 / Calm Scale",
    title: "Autonomous Campaign Intelligence",
    desc: "Growcin is deployed globally — an intelligent growth radar that guards ad spend, flags creative fatigue, and qualifies leads 24/7.",
  },
]

const PRINCIPLES = [
  {
    title: "Data-Driven over Guesswork",
    desc: "We rely on statistical confidence over hunches. An alert or recommendation is only surfaced when clear thresholds are triggered.",
    icon: "balance",
  },
  {
    title: "Transparent over Black-Box",
    desc: "No confusing mysteries. Every insight arrives with 3 clear facts: what changed, why it happened, and the exact recommendation.",
    icon: "visibility",
  },
  {
    title: "Protect Your Budget First",
    desc: "The primary job of growth software is stopping waste before spend compounds. Fix leaks before throwing more money at ads.",
    icon: "shield",
  },
]

export default function AboutPage() {
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
              Our Mission
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-6">
            Built for{" "}
            <span className="font-serif-accent italic font-normal text-[#A855F7]">
              Calm, Predictable
            </span>{" "}
            Growth
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
            We replace manual media-buying burnout with intelligent automated monitoring. Growcin lets founders and agencies scale spend with total peace of mind.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="/signup/"
              className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ARCHITECTURE FOR THE AMBITIOUS                                         */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
                Why Growcin
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Built for High-Growth Teams.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                We replace manual chaos with automated intelligence. When ad spend scales from $10,000 to $500,000 a month, manual media buyers burn out. Spreadsheets break. Alerts get missed.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Growcin was created to provide a calm, non-stop nervous system for performance marketing. It watches frequency drift, attribution decay, and conversion anomalies every minute of the day.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF8FD] border border-purple-100 space-y-4">
              <div className="flex items-center justify-between border-b border-purple-100/60 pb-3">
                <span className="text-xs font-mono font-semibold text-slate-500">ENGINE STATE</span>
                <span className="text-xs font-mono font-bold text-emerald-600">LOGIC CORE v.05</span>
              </div>
              <div className="flex items-center justify-between border-b border-purple-100/60 pb-3">
                <span className="text-xs font-mono font-semibold text-slate-500">SURVEILLANCE COVERAGE</span>
                <span className="text-xs font-mono font-bold text-purple-700">100% OF CONNECTED SETS</span>
              </div>
              <div className="flex items-center justify-between border-b border-purple-100/60 pb-3">
                <span className="text-xs font-mono font-semibold text-slate-500">PLATFORM UPTIME</span>
                <span className="text-xs font-mono font-bold text-slate-900">99.98%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-slate-500">REST ENFORCEMENT</span>
                <span className="text-xs font-mono font-bold text-purple-700">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SYSTEM HISTORY                                                         */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#FAF8FD] border-t border-slate-100">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
              Evolution
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              System History
            </h2>
            <p className="text-slate-600 text-base">
              Hardened through real agency spend across millions of dollars in live ad inventory.
            </p>
          </div>

          <div className="space-y-6">
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
              >
                <span className="text-xs font-mono text-purple-700 font-bold uppercase tracking-wider block mb-1">
                  {item.era}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PRINCIPLES OF OUR OPERATION                                            */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
              Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Principles of Our Operation
            </h2>
            <p className="text-slate-600 text-base">
              The core rules that govern our code, models, and product direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRINCIPLES.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FAF8FD] border border-purple-100/70"
              >
                <span className="material-symbols-outlined text-3xl text-[#A855F7] mb-4">
                  {p.icon}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
