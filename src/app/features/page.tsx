"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const ALL_FEATURES = [
  {
    icon: "analytics",
    title: "Continuous Account Audit",
    desc: "Read-only surveillance that scores every hour, audience, and ad set against 30-day return benchmarks.",
  },
  {
    icon: "shield",
    title: "Deterministic CPA Guardrails",
    desc: "Pre-set maximum acceptable cost per lead to prevent compounding budget spend on deteriorating sets.",
  },
  {
    icon: "history_toggle_off",
    title: "Dead-Hour Detection",
    desc: "Pinpoints exactly which hours of the night consume spend without producing conversions, allowing budget reallocation.",
  },
  {
    icon: "auto_mode",
    title: "Creative Fatigue Tracking",
    desc: "Monitors hook-rate decay, frequency curves, and CTR decline to signal creative rotations before ad fatigue burns budget.",
  },
  {
    icon: "chat",
    title: "WhatsApp Qualification Layer",
    desc: "Automatically engages leads within 3 seconds, scores buyer intent, and filters out tyre-kickers before your sales team speaks.",
  },
  {
    icon: "swap_horiz",
    title: "3-Part Decision Packages",
    desc: "Replaces vague notifications with clear diagnostics: what changed, why it happened, and the exact move to make next.",
  },
]

export default function FeaturesPage() {
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
              Complete Toolset
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-6">
            Engineered for{" "}
            <span className="font-serif-accent italic font-normal text-[#A855F7]">
              Certainty
            </span>{" "}
            in Paid Ads
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
            Every feature in Growcin is designed to eliminate manual guesswork, protect capital, and scale client outcomes predictably.
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
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_FEATURES.map((f, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FAF8FD] border border-purple-100/70 shadow-sm"
              >
                <span className="material-symbols-outlined text-3xl text-[#A855F7] mb-4">
                  {f.icon}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
