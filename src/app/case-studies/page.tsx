"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const CASE_STUDIES = [
  {
    client: "Bliss International",
    sector: "Education Sector • Automated Budgeting",
    quote:
      "We shifted from evenly distributed budgets to Smart Budget Optimization. The system now autonomously reallocates spend to high-conversion hours.",
    badge: "SMART_ALLOCATION_V2",
    metrics: [
      { label: "Inquiries", value: "+39%" },
      { label: "Walk-ins", value: "+33%" },
      { label: "Calls", value: "+28%" },
      { label: "Conv. Lift", value: "30%" },
    ],
  },
  {
    client: "The Travel Saga",
    sector: "Hospitality • Intent Targeting",
    quote:
      "We moved from broad targeting to Intent-based Optimization. This allowed us to capture high-intent travelers right when they were ready to book.",
    badge: "INTENT_RADAR_ACTIVE",
    metrics: [
      { label: "Qualified Leads", value: "+41%" },
      { label: "CPL Reduced", value: "29%" },
      { label: "Booking Lift", value: "34%" },
      { label: "ROAS", value: "2.3x" },
    ],
  },
  {
    client: "BestPropDeal",
    sector: "Real Estate • Decision Mapping",
    quote:
      "We implemented Decision Density Mapping. By aligning bids with high-decision hours, we dramatically improved site visit quality.",
    badge: "HEATMAP_3D_VIEW",
    metrics: [
      { label: "Qual. Leads", value: "+35%" },
      { label: "CPL Cut", value: "27%" },
      { label: "Site Visits", value: "+30%" },
      { label: "ROAS", value: "2.5x" },
    ],
  },
]

export default function CaseStudiesPage() {
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
              Verified Outcomes
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-6">
            When{" "}
            <span className="font-serif-accent italic font-normal text-[#A855F7]">
              Structure
            </span>{" "}
            Replaces Stress.
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
            Architectural breakdowns of how deterministic campaign intelligence protects capital and drives predictable customer acquisition.
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

      {/* ========================================================================= */}
      {/* 2. PERFORMANCE TRANSFORMATIONS                                            */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
              Transformations
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Performance{" "}
              <span className="font-serif-accent italic font-normal text-[#A855F7] underline decoration-[#A855F7]/10 underline-offset-[16px]">
                Transformations
              </span>
            </h2>
            <p className="mt-6 text-slate-600 text-lg">
              Architectural breakdowns of how structural logic replaces manual chaos.
            </p>
          </div>

          <div className="space-y-12">
            {CASE_STUDIES.map((cs, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-12 rounded-3xl bg-[#FAF8FD] border border-purple-100/70 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-purple-100/60 pb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                      {cs.client}
                    </h3>
                    <p className="text-xs font-mono text-purple-700 font-semibold uppercase tracking-wider">
                      {cs.sector}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold bg-white px-3 py-1.5 rounded-full border border-purple-100 text-slate-700 self-start lg:self-auto">
                    {cs.badge}
                  </span>
                </div>

                <p className="text-base sm:text-lg text-slate-700 italic leading-relaxed mb-8">
                  &ldquo;{cs.quote}&rdquo;
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cs.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-5 rounded-2xl bg-white border border-purple-50 text-center shadow-sm"
                    >
                      <span className="text-2xl sm:text-3xl font-extrabold text-purple-900 font-mono">
                        {m.value}
                      </span>
                      <p className="text-xs font-medium text-slate-500 mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
