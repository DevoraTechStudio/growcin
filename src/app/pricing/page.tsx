"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const PRICING_FAQS = [
  {
    question: "Can I cancel or switch plans at any time?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your subscription directly from your account settings. When upgrading, billing is prorated automatically.",
  },
  {
    question: "What happens when I connect my Meta Ads account?",
    answer:
      "Growcin requests read-only permissions via official Meta OAuth. We immediately analyze your 30-day lookback window to surface CPA spikes, creative fatigue, and dead-hour waste.",
  },
  {
    question: "Do you require credit card details for the free audit?",
    answer:
      "No credit card is required. The free audit is 100% free and read-only. We never get write access to spend your budget or make changes without your consent.",
  },
  {
    question: "Is there a limit on the number of leads qualified?",
    answer:
      "All active plans include unthrottled WhatsApp qualification for your connected campaigns, with safety rate-limiting to protect your phone number reputation.",
  },
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = React.useState(true)
  const [currency, setCurrency] = React.useState<"INR" | "USD">("INR")

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-36 pb-16 lg:pt-48 lg:pb-20 bg-[linear-gradient(180deg,#FBF9FF_0%,#FFFFFF_40%,#FBF9FE_100%)]">
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
              Clear &amp; Predictable
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-6">
            Simple Pricing.{" "}
            <span className="font-serif-accent italic font-normal text-[#A855F7]">
              The Certainty
            </span>{" "}
            of Scale.
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
            Transparent investment. No surprise fees. Connect your account and let autonomous intelligence guard your ad spend.
          </p>

          {/* Toggle Switches */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Currency Toggle */}
            <div className="inline-flex items-center p-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={cn(
                  "px-4 py-1.5 rounded-full transition-all cursor-pointer",
                  currency === "INR" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                )}
              >
                INR (₹)
              </button>
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={cn(
                  "px-4 py-1.5 rounded-full transition-all cursor-pointer",
                  currency === "USD" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                )}
              >
                USD ($)
              </button>
            </div>

            {/* Annual / Monthly Toggle */}
            <div className="inline-flex items-center p-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={cn(
                  "px-4 py-1.5 rounded-full transition-all cursor-pointer",
                  !isAnnual ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                )}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={cn(
                  "px-4 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5",
                  isAnnual ? "bg-purple-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-900"
                )}
              >
                <span>Yearly</span>
                <span className={cn(
                  "text-[9px] px-1.5 py-0.5 rounded-full uppercase font-bold",
                  isAnnual ? "bg-white/25 text-white" : "bg-purple-100 text-purple-700"
                )}>
                  Save 25%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PRICING TIERS                                                          */}
      {/* ========================================================================= */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* 1. Starter */}
            <div className="rounded-3xl p-8 bg-[#FAF8FD] border border-purple-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900">Starter</h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-purple-100">
                    Solopreneur Baseline
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">
                    {currency === "INR"
                      ? isAnnual ? "₹42,000" : "₹4,200"
                      : isAnnual ? "$490" : "$49"}
                    <span className="text-sm font-normal text-slate-500 font-sans">
                      {isAnnual ? " / yearly" : " / month"}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-xs text-purple-700 font-medium mt-1">
                      Approx. {currency === "INR" ? "₹3,500" : "$40"} / month
                    </p>
                  )}
                </div>

                <ul className="space-y-3.5 text-sm text-slate-700 mb-8">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">rocket_launch</span>
                    <span>Upto 3 High-Performance Campaigns</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">ads_click</span>
                    <span>Instagram &amp; Facebook Ads Management</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">summarize</span>
                    <span>Daily Updates</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">share</span>
                    <span>Website, WhatsApp &amp; Instagram Integration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">person_search</span>
                    <span>Lead Qualification</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">support_agent</span>
                    <span>Dedicated Support &amp; Free Training</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href="/signup/"
                  className="w-full block text-center py-3.5 rounded-full border border-purple-200 text-purple-900 font-bold text-xs uppercase tracking-widest hover:bg-purple-50 transition-colors"
                >
                  Initialize Plan
                </a>
                <p className="text-[10px] text-center text-slate-400 mt-2">Prices exclusive of taxes</p>
              </div>
            </div>

            {/* 2. Professional (Recommended) */}
            <div className="rounded-3xl p-8 bg-gradient-to-b from-purple-50/80 via-white to-purple-50/40 border-2 border-[#A855F7] flex flex-col justify-between shadow-xl shadow-purple-500/15 relative transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#A855F7] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                Recommended for Agencies
              </div>

              <div>
                <div className="flex justify-between items-center mb-4 mt-2">
                  <h3 className="text-xl font-bold text-slate-900">Professional</h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full font-bold">
                    Agency-Grade Leverage
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">
                    {currency === "INR"
                      ? isAnnual ? "₹66,000" : "₹6,600"
                      : isAnnual ? "$790" : "$79"}
                    <span className="text-sm font-normal text-slate-500 font-sans">
                      {isAnnual ? " / yearly" : " / month"}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-xs text-purple-700 font-bold mt-1">
                      Approx. {currency === "INR" ? "₹5,500" : "$65"} / month
                    </p>
                  )}
                </div>

                <ul className="space-y-3.5 text-sm text-slate-700 mb-8">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">rocket_launch</span>
                    <span className="font-semibold text-slate-900">Upto 5 High-Performance Campaigns</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">ads_click</span>
                    <span>Instagram &amp; Facebook Ads Management</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">summarize</span>
                    <span>Daily Updates</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">share</span>
                    <span>Website, WhatsApp &amp; Instagram Integration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">analytics</span>
                    <span className="font-semibold text-slate-900">Weekly / Monthly Reports</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">person_search</span>
                    <span>Lead Qualification</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">support_agent</span>
                    <span>Dedicated Support &amp; Free Training</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href="/signup/"
                  className="w-full block text-center py-3.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs uppercase tracking-widest shadow-md shadow-purple-500/30 transition-all hover:scale-[1.02]"
                >
                  Initialize Plan
                </a>
                <p className="text-[10px] text-center text-slate-400 mt-2">Prices exclusive of taxes</p>
              </div>
            </div>

            {/* 3. Enterprise */}
            <div className="rounded-3xl p-8 bg-[#FAF8FD] border border-purple-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900">Enterprise</h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-purple-100">
                    Infrastructure Unlimited
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">
                    {currency === "INR"
                      ? isAnnual ? "₹126,000" : "₹12,600"
                      : isAnnual ? "$1,490" : "$149"}
                    <span className="text-sm font-normal text-slate-500 font-sans">
                      {isAnnual ? " / yearly" : " / month"}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-xs text-purple-700 font-medium mt-1">
                      Billed annually
                    </p>
                  )}
                </div>

                <ul className="space-y-3.5 text-sm text-slate-700 mb-8">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">rocket_launch</span>
                    <span className="font-semibold text-slate-900">Upto 10 High-Performance Campaigns</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">ads_click</span>
                    <span>Instagram &amp; Facebook Ads Management</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">summarize</span>
                    <span>Daily Updates</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">share</span>
                    <span>Website, WhatsApp &amp; Instagram Integration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">analytics</span>
                    <span>Weekly / Monthly Reports</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">person_search</span>
                    <span>Lead Qualification</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">wb_incandescent</span>
                    <span className="font-bold text-purple-700">AI Suggestions &amp; Custom Rules</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">support_agent</span>
                    <span>Dedicated Support &amp; Free Training</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href="/signup/"
                  className="w-full block text-center py-3.5 rounded-full border border-purple-200 text-purple-900 font-bold text-xs uppercase tracking-widest hover:bg-purple-50 transition-colors"
                >
                  Initialize Plan
                </a>
                <p className="text-[10px] text-center text-slate-400 mt-2">Prices exclusive of taxes</p>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* FREE FOREVER READ-ONLY AUDIT CARD                                         */}
          {/* ========================================================================= */}
          <div className="mt-16 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4">
                  No card needed
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-3">
                  See real ROI before you spend a rupee
                </h3>
                <p className="text-purple-200 text-base max-w-2xl leading-relaxed mb-6">
                  <span className="text-2xl font-bold text-white font-mono mr-2">
                    {currency === "INR" ? "₹0" : "$0"}
                  </span>
                  forever free. Connect your live Meta ad account in read-only mode. Receive creative fatigue scores, dead-hour analysis, and your revenue audit report in 24 hours.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-400 text-base">check_circle</span>
                    <span>1 Campaign Connected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-400 text-base">check_circle</span>
                    <span>Full Intelligence Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-400 text-base">check_circle</span>
                    <span>1 Revenue Audit Report</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="/signup/"
                  className="px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-purple-50 transition-colors shadow-lg shadow-black/30 whitespace-nowrap block text-center"
                >
                  Get started free →
                </a>
                <p className="text-[11px] text-center text-purple-300 mt-2">Takes 4 minutes to connect</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE COST OF STAYING MANUAL                                             */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF8FD] border-t border-slate-100">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
              Value Equation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              The Cost of Staying Manual
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Subscription costs are visible. The cost of friction and missed opportunities are true architectural defects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <span className="text-3xl font-extrabold text-rose-500 font-mono">-15%</span>
              <h3 className="font-bold text-slate-900 mt-2 mb-1">Bid Drift Leakage</h3>
              <p className="text-xs text-slate-500">Unmonitored sets drift beyond target CPA without immediate threshold halts.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <span className="text-3xl font-extrabold text-rose-500 font-mono">20+ hrs</span>
              <h3 className="font-bold text-slate-900 mt-2 mb-1">Weekly Human Slog</h3>
              <p className="text-xs text-slate-500">Time spent pulling numbers and writing manual reports instead of strategy.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <span className="text-3xl font-extrabold text-emerald-600 font-mono">3.4x</span>
              <h3 className="font-bold text-slate-900 mt-2 mb-1">Average ROI Protected</h3>
              <p className="text-xs text-slate-500">Capital recovered by pausing dead hours and auto-qualifying incoming leads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COMMON QUESTIONS                                                       */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Pricing FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {PRICING_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF8FD] border border-purple-100/60"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
