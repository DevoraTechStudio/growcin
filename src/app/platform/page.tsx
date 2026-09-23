"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { AuditWalkthrough } from "@/components/marketing/AuditWalkthrough"
import { cn } from "@/lib/utils"

const PLATFORM_FAQS = [
  {
    title: "Do I need to replace Meta Ads Manager to use Growcin?",
    content:
      "No. Growcin connects to your existing ad accounts and layers intelligent surveillance on top. Your team keeps full access to Meta Ads Manager.",
  },
  {
    title: "How long does setup take?",
    content:
      "Most teams connect their account in under 2 minutes with read-only OAuth. Growcin immediately runs a 30-day lookback analysis.",
  },
  {
    title: "What guardrails and rules can I set?",
    content:
      "You can define maximum CPA thresholds, budget caps, creative fatigue sensitivity, and WhatsApp qualification criteria.",
  },
  {
    title: "Can agencies manage multiple client accounts?",
    content:
      "Yes. Growcin is built for multi-account agency operations with centralized visibility, account-level rules, and client-ready reporting.",
  },
  {
    title: "Which channels does Growcin support?",
    content:
      "Growcin actively monitors Meta (Facebook & Instagram), with automated lead qualification across WhatsApp, Instagram DMs, and website chat.",
  },
]

export default function PlatformPage() {
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
              Growcin Platform
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-6">
            This Is What{" "}
            <span className="font-serif-accent italic font-normal text-[#A855F7]">
              Happens
            </span>{" "}
            When Paid Ads Stop Being Manual
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
            Connect your accounts and replace panic with calm execution. 24/7 surveillance, instant budget leak detection, and automatic lead qualification.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/signup/"
              className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5"
            >
              Run My Free Audit
            </a>
            <a
              href="#architecture"
              className="px-6 py-4 rounded-full border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
            >
              Explore Architecture
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. AUDIT WALKTHROUGH EMBEDDED                                             */}
      {/* ========================================================================= */}
      <AuditWalkthrough />

      {/* ========================================================================= */}
      {/* 3. ARCHITECTURE DEEP DIVE                                                 */}
      {/* ========================================================================= */}
      <section id="architecture" className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#A855F7] block mb-3">
              Core Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Manual Work Is Invisible{" "}
              <span className="font-serif-accent italic font-normal text-[#A855F7]">
                Until It Breaks
              </span>
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              A missed checkbox. A wrong bid. Small human errors compound into massive losses. The system prevents this by design, making the invisible visible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1 */}
            <div className="p-6 sm:p-10 rounded-3xl bg-[#FAF8FD] border border-purple-100 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-3xl text-[#A855F7] mb-4">
                  account_tree
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  From Execution to Orchestration
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  Same campaigns. Same goals. Less effort. Instead of manual monitoring, you set high-level performance boundaries and let the autonomous triage engine monitor variance around the clock.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-purple-100/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>STATUS: ACTIVE</span>
                <span className="text-[#A855F7] font-semibold">24/7 SURVEILLANCE</span>
              </div>
            </div>

            {/* Box 2 */}
            <div className="p-6 sm:p-10 rounded-3xl bg-[#FAF8FD] border border-purple-100 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-3xl text-[#A855F7] mb-4">
                  widgets
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Campaigns Aren&apos;t Built They&apos;re Assembled
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  Stop starting from zero. Assemble your campaigns from pre-verified modules that ensure structural integrity before a single dollar is spent.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-purple-100/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>PRE-VERIFIED MODULES</span>
                <span className="text-emerald-600 font-semibold">100% SPEC COMPLIANT</span>
              </div>
            </div>

            {/* Box 3 */}
            <div className="p-6 sm:p-10 rounded-3xl bg-[#FAF8FD] border border-purple-100 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-3xl text-[#A855F7] mb-4">
                  security
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Nothing Runs Unchecked
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  The system provides constant oversight. It doesn&apos;t get tired or miss details. Every action is verified against your core objectives, protecting your budget 24/7.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-purple-100/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>CPA GUARDRAILS</span>
                <span className="text-rose-600 font-semibold">ZERO BLOWOUTS</span>
              </div>
            </div>

            {/* Box 4 */}
            <div className="p-6 sm:p-10 rounded-3xl bg-[#FAF8FD] border border-purple-100 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-3xl text-[#A855F7] mb-4">
                  pause_circle
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  AI That Knows When Not to Act
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  Restraint is our primary feature. Unnecessary adjustments create instability. The platform acts only when high-confidence statistical thresholds are met.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-purple-100/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>RESTRAINT PRINCIPLE</span>
                <span className="text-[#A855F7] font-semibold">MINIMAL VARIANCE</span>
              </div>
            </div>
          </div>

          {/* Reporting Banner */}
          <div className="mt-12 p-6 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-xl">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-2">
                Executive Clarity
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Reporting That Defends Decisions
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                Clients don&apos;t want data. They want reassurance. Give them reports that explain the &apos;Why&apos; behind the &apos;What&apos; — turning potential tension into confidence.
              </p>
              <a
                href="/signup/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#A855F7] text-white font-semibold text-sm hover:bg-purple-600 transition-colors"
              >
                <span>Preview Client Reports</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PLATFORM FAQS                                                          */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF8FD] border-t border-slate-100">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Questions About the Platform.
            </h2>
          </div>

          <div className="space-y-4">
            {PLATFORM_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {faq.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {faq.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
