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
    question: "How does the auto-pause CPA guardrail work?",
    answer:
      "On Starter and Agency plans, you can optionally enable CPA guardrails. If a campaign or ad set drifts past your defined maximum allowable CPA, Growcin halts spend to prevent budget bleeding. Every action is logged and you retain full override authority in Ads Manager.",
  },
  {
    question: "Is there a limit on the number of leads qualified?",
    answer:
      "Agency plans include 3,000 AI qualified chats per month with dedicated WhatsApp numbers per account. Enterprise plans include volume custom allocations.",
  },
]

const FEATURE_SECTIONS = [
  {
    title: "Ad Account Monitoring",
    rows: [
      { label: "Ad accounts connected", values: ["1 account", "3 accounts", "15 accounts", "Unlimited"] },
      { label: "Account access level", values: ["Read-only audit", "Opt-in auto-pause", "Opt-in auto-pause", "Custom permissions"] },
      { label: "Waste & creative fatigue alerts", hint: "CPA drift & fatigue detection", values: [true, true, true, true] },
      { label: "CPA guardrail auto-pause", hint: "Halt bleeding ad sets automatically", values: [false, true, true, true] },
      { label: "Audience cannibalization alerts", hint: "Internal campaign overlap check", values: [false, true, true, true] },
      { label: "Creative scores & suggested fixes", values: [false, true, true, true] },
      { label: "Autonomous budget recommendations", hint: "Budget allocation intelligence", values: [false, false, true, true] },
    ],
  },
  {
    title: "Lead Qualification & Messaging",
    rows: [
      { label: "Dedicated WhatsApp numbers", values: ["None", "None", "1 per ad account", "Multiple / Custom"] },
      { label: "AI lead qualification chats", hint: "Automated qualification on WhatsApp & IG", values: ["None", "None", "3,000 chats / mo", "Volume custom"] },
      { label: "Shared lead inbox & CRM sync", values: [false, false, true, true] },
    ],
  },
  {
    title: "Team & Support",
    rows: [
      { label: "Team seats included", values: ["1 seat", "2 seats", "10 seats", "Custom / SSO"] },
      { label: "Google Sheets & CSV export", values: [false, true, true, true] },
      { label: "API access & webhook triggers", values: [false, false, true, true] },
      { label: "Dedicated growth manager", values: [false, false, "Priority Support", "Dedicated SLA"] },
    ],
  },
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = React.useState(true)
  const [currency, setCurrency] = React.useState<"INR" | "USD">("USD")

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
            <span className="italic font-normal text-[#A855F7]">
              The Certainty
            </span>{" "}
            of Scale.
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
            Connecting an ad account is free. Paid plans protect your spend from CPA creep, tired creatives, and dead-hour waste.
          </p>

          {/* Toggle Switches */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* Currency Toggle */}
            <div className="inline-flex items-center p-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold">
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
                  2 Months Free
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PRICING TIERS (4-COLUMNS WITH +30% HIKE)                               */}
      {/* ========================================================================= */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* 1. Entry */}
            <div className="rounded-3xl p-7 bg-[#FAF8FD] border border-purple-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-slate-900">Entry</h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-purple-100">
                    For One Brand
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">
                    {currency === "USD"
                      ? isAnnual ? "$1,290" : "$129"
                      : isAnnual ? "₹1,09,999" : "₹10,999"}
                    <span className="text-xs font-normal text-slate-500 font-sans ml-1">
                      {isAnnual ? "/year" : "/mo"}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-xs text-purple-700 font-medium mt-1">
                      Approx. {currency === "USD" ? "$107" : "₹9,166"} / month
                    </p>
                  )}
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Essential read-only audit and ad waste detection for a single brand.
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 mb-8 border-t border-purple-100/70 pt-5">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">ads_click</span>
                    <span className="font-semibold text-slate-900">1 Meta Ad Account</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">warning</span>
                    <span>Waste &amp; fatigue alerts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">query_stats</span>
                    <span>Dead-hour spend analytics</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">lock</span>
                    <span>100% Read-only diagnostics</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">person</span>
                    <span>1 Team seat</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href="https://forms.gle/36tzEAi9VzfcBD9EA" target="_blank" rel="noopener noreferrer"
                  className="w-full block text-center py-3 rounded-full border border-purple-200 text-purple-900 font-bold text-xs uppercase tracking-widest hover:bg-purple-50 transition-colors"
                >
                  Choose Entry
                </a>
                <p className="text-[10px] text-center text-slate-400 mt-2">Prices exclusive of taxes</p>
              </div>
            </div>

            {/* 2. Starter */}
            <div className="rounded-3xl p-7 bg-[#FAF8FD] border border-purple-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-slate-900">Starter</h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-purple-100">
                    For Small Teams
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">
                    {currency === "USD"
                      ? isAnnual ? "$2,330" : "$235"
                      : isAnnual ? "₹1,99,999" : "₹19,999"}
                    <span className="text-xs font-normal text-slate-500 font-sans ml-1">
                      {isAnnual ? "/year" : "/mo"}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-xs text-purple-700 font-medium mt-1">
                      Approx. {currency === "USD" ? "$194" : "₹16,666"} / month
                    </p>
                  )}
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Adds opt-in auto-pause CPA guardrails and creative fatigue scoring.
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 mb-8 border-t border-purple-100/70 pt-5">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">ads_click</span>
                    <span className="font-semibold text-slate-900">3 Meta Ad Accounts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">pause_circle</span>
                    <span className="font-semibold text-purple-900">Auto-pause on CPA guardrail</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">speed</span>
                    <span>Creative fatigue scoring &amp; fixes</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">group_work</span>
                    <span>Cannibalization overlap check</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">table_view</span>
                    <span>Google Sheets data export</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">group</span>
                    <span>2 Team seats</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href="https://forms.gle/36tzEAi9VzfcBD9EA" target="_blank" rel="noopener noreferrer"
                  className="w-full block text-center py-3 rounded-full border border-purple-200 text-purple-900 font-bold text-xs uppercase tracking-widest hover:bg-purple-50 transition-colors"
                >
                  Choose Starter
                </a>
                <p className="text-[10px] text-center text-slate-400 mt-2">Prices exclusive of taxes</p>
              </div>
            </div>

            {/* 3. Agency (Featured) */}
            <div className="rounded-3xl p-7 bg-gradient-to-b from-purple-50/90 via-white to-purple-50/50 border-2 border-[#A855F7] flex flex-col justify-between shadow-xl shadow-purple-500/15 relative transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#A855F7] text-white text-[9px] font-extrabold uppercase tracking-widest shadow-md">
                Featured For Agencies
              </div>

              <div>
                <div className="flex justify-between items-center mb-3 mt-1">
                  <h3 className="text-xl font-bold text-slate-900">Agency</h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full font-bold">
                    Multi-Client
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">
                    {currency === "USD"
                      ? isAnnual ? "$7,790" : "$779"
                      : isAnnual ? "₹6,60,000" : "₹66,000"}
                    <span className="text-xs font-normal text-slate-500 font-sans ml-1">
                      {isAnnual ? "/year" : "/mo"}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-xs text-purple-700 font-bold mt-1">
                      Approx. {currency === "USD" ? "$649" : "₹55,000"} / month
                    </p>
                  )}
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Autonomous budget moves, WhatsApp qualification, and agency reporting.
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 mb-8 border-t border-purple-200/70 pt-5">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">ads_click</span>
                    <span className="font-semibold text-slate-900">15 Meta Ad Accounts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">pause_circle</span>
                    <span className="font-semibold text-purple-900">Auto-pause CPA guardrail</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">auto_awesome</span>
                    <span className="font-semibold text-purple-900">Budget move suggestions</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">chat</span>
                    <span>1 WhatsApp number / account</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">smart_toy</span>
                    <span>3,000 AI qualified chats / mo</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">hub</span>
                    <span>10 Team seats, CRM sync &amp; API</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href="https://forms.gle/36tzEAi9VzfcBD9EA" target="_blank" rel="noopener noreferrer"
                  className="w-full block text-center py-3 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs uppercase tracking-widest shadow-md shadow-purple-500/30 transition-all hover:scale-[1.02]"
                >
                  Choose Agency
                </a>
                <p className="text-[10px] text-center text-slate-400 mt-2">Prices exclusive of taxes</p>
              </div>
            </div>

            {/* 4. Enterprise */}
            <div className="rounded-3xl p-7 bg-[#FAF8FD] border border-purple-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-slate-900">Enterprise</h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-purple-100">
                    Large Teams
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    Custom
                  </div>
                  <p className="text-xs text-purple-700 font-medium mt-1">
                    Volume pricing &amp; custom SLAs
                  </p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Custom scale for multi-brand conglomerates and performance holding groups.
                  </p>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 mb-8 border-t border-purple-100/70 pt-5">
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">all_inclusive</span>
                    <span className="font-semibold text-slate-900">Unlimited Ad Accounts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">mark_chat_read</span>
                    <span>Multiple WhatsApp numbers</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">forum</span>
                    <span>Custom volume AI lead chats</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">admin_panel_settings</span>
                    <span>SSO, SAML &amp; audit logging</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-base text-[#A855F7]">support_agent</span>
                    <span>Dedicated growth manager</span>
                  </li>
                </ul>
              </div>

              <div>
                <Link
                  href="/contact/"
                  className="w-full block text-center py-3 rounded-full border border-purple-200 text-purple-900 font-bold text-xs uppercase tracking-widest hover:bg-purple-50 transition-colors"
                >
                  Talk To Us
                </Link>
                <p className="text-[10px] text-center text-slate-400 mt-2">Tailored agreement</p>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* FREE READ-ONLY AUDIT CARD                                                 */}
          {/* ========================================================================= */}
          <div className="mt-16 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-mono text-purple-300 uppercase tracking-widest mb-4">
                  No card needed
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-3">
                  See real ROI before you spend a single rupee or dollar
                </h3>
                <p className="text-purple-200 text-base max-w-2xl leading-relaxed mb-6">
                  <span className="text-2xl font-bold text-white font-mono mr-2">
                    {currency === "USD" ? "$0" : "₹0"}
                  </span>
                  free forever. Connect your live Meta ad account in read-only mode. Receive creative fatigue scores, dead-hour analysis, and your revenue audit report in 24 hours.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-400 text-base">check_circle</span>
                    <span>1 Meta Account Read-Only</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-400 text-base">check_circle</span>
                    <span>Full Diagnostic Report</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-400 text-base">check_circle</span>
                    <span>Zero Write Permissions</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://forms.gle/36tzEAi9VzfcBD9EA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-purple-50 transition-colors shadow-lg shadow-black/30 whitespace-nowrap block text-center"
                >
                  Start free audit →
                </a>
                <p className="text-[11px] text-center text-purple-300 mt-2">Takes 4 minutes to connect</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DETAILED FEATURE MATRIX COMPARISON                                      */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF8FD] border-t border-purple-100/60">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
              Feature Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Compare All Plan Capabilities
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Every plan includes read-only audit diagnostics. Upgraded tiers add automated protection and lead qualification.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-sm border border-purple-100/80 overflow-hidden">
              <thead>
                <tr className="border-b border-purple-100/80 bg-purple-50/50">
                  <th className="py-4 px-6 text-sm font-bold text-slate-900 w-2/5">Capability</th>
                  <th className="py-4 px-4 text-xs font-bold text-slate-700 text-center">Entry</th>
                  <th className="py-4 px-4 text-xs font-bold text-slate-700 text-center">Starter</th>
                  <th className="py-4 px-4 text-xs font-bold text-purple-900 bg-purple-100/60 text-center">Agency</th>
                  <th className="py-4 px-4 text-xs font-bold text-slate-700 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {FEATURE_SECTIONS.map((section, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <tr className="bg-slate-50/70">
                      <td colSpan={5} className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-purple-900">
                        {section.title}
                      </td>
                    </tr>
                    {section.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-purple-50/30 transition-colors">
                        <td className="py-3.5 px-6 font-medium text-slate-900">
                          {row.label}
                          {row.hint && (
                            <span className="block text-[11px] text-slate-400 font-normal">
                              {row.hint}
                            </span>
                          )}
                        </td>
                        {row.values.map((val, vIdx) => (
                          <td
                            key={vIdx}
                            className={cn(
                              "py-3.5 px-4 text-center",
                              vIdx === 2 ? "bg-purple-50/40 font-semibold text-purple-950" : "text-slate-700"
                            )}
                          >
                            {typeof val === "boolean" ? (
                              val ? (
                                <span className="material-symbols-outlined text-base text-emerald-600 inline-block align-middle">
                                  check_circle
                                </span>
                              ) : (
                                <span className="text-slate-300 font-bold">—</span>
                              )
                            ) : (
                              <span>{val}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE COST OF STAYING MANUAL                                             */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
              Value Equation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              The Cost of Staying Manual
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Subscription costs are visible. The cost of friction and unmonitored bid drifts are true architectural defects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[#FAF8FD] border border-purple-100/60 shadow-sm">
              <span className="text-3xl font-extrabold text-rose-500 font-mono">-15%</span>
              <h3 className="font-bold text-slate-900 mt-2 mb-1">Bid Drift Leakage</h3>
              <p className="text-xs text-slate-500">Unmonitored ad sets drift beyond target CPA without immediate threshold halts.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#FAF8FD] border border-purple-100/60 shadow-sm">
              <span className="text-3xl font-extrabold text-rose-500 font-mono">20+ hrs</span>
              <h3 className="font-bold text-slate-900 mt-2 mb-1">Weekly Human Slog</h3>
              <p className="text-xs text-slate-500">Time spent pulling numbers and writing manual reports instead of creative strategy.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#FAF8FD] border border-purple-100/60 shadow-sm">
              <span className="text-3xl font-extrabold text-emerald-600 font-mono">3.4x</span>
              <h3 className="font-bold text-slate-900 mt-2 mb-1">Average ROI Protected</h3>
              <p className="text-xs text-slate-500">Capital recovered by pausing dead hours and auto-qualifying incoming leads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. COMMON QUESTIONS                                                       */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#FAF8FD] border-t border-slate-100">
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
                className="p-6 rounded-2xl bg-white border border-purple-100/70"
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
