"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { LogoMarquee } from "@/components/marketing/LogoMarquee"
import { ProductDashboard } from "@/components/marketing/ProductDashboard"
import { HeroIntelligenceShowcase } from "@/components/marketing/DashboardCard"
import { ComparisonTable } from "@/components/marketing/ComparisonTable"
import { LiveSimulator } from "@/components/marketing/LiveSimulator"
import { TestimonialCard } from "@/components/ui/TestimonialCard"
import { Accordion } from "@/components/ui/Accordion"
import { cn } from "@/lib/utils"

const CYCLING_WORDS = ["Revenue", "Profit", "Budget", "Pipeline", "Leads"]

const FAQS = [
  {
    title: "How does budget risk detection work?",
    content:
      "Growcin monitors CPA movement, spend anomalies, creative fatigue, and lead quality signals across your Meta & Google campaigns. When budget is exposed to deteriorating sets, the platform flags the affected campaign early and explains what changed.",
  },
  {
    title: "What is a CPA guardrail?",
    content:
      "A CPA guardrail is a maximum cost-per-lead threshold you set. When actual CPA moves beyond that threshold, Growcin surfaces the risk early so your team can review the campaign before spend compounds.",
  },
  {
    title: "How does creative fatigue monitoring work?",
    content:
      "The platform watches signals such as CTR decline, frequency increases, hook-rate decay, and CPA movement. When a creative starts deteriorating, it shows the likely cause and recommended next action.",
  },
  {
    title: "What does lead qualification do?",
    content:
      "Every lead passes through an AI qualification layer. The platform asks pre-set questions via chatbot, and only routes high-intent leads to your sales team.",
  },
  {
    title: "Does Growcin replace my Meta Ads Manager?",
    content:
      "No. Growcin connects to your existing Meta Ads Manager account — it does not replace it. You keep full access to Ads Manager while adding a campaign intelligence layer on top.",
  },
  {
    title: "Why not just use Meta alerts?",
    content:
      "Meta alerts tell you something happened. Growcin adds context by explaining why it happened, which campaigns are affected, and what action your team should consider next.",
  },
]

const STATS_DATA = [
  { value: "24/7", label: "Continuous signal monitoring" },
  { value: "99.9%", label: "Platform uptime reliability" },
  { value: "< 2 hrs", label: "Average time to first signal" },
  { value: "$18M+", label: "Ad spend monitored monthly" },
]

const PLATFORMS = [
  { name: "Meta", icon: "campaign" },
  { name: "Instagram", icon: "photo_camera" },
  { name: "WhatsApp", icon: "chat" },
  { name: "Google Ads", icon: "ads_click" },
  { name: "LinkedIn", icon: "work" },
  { name: "TikTok", icon: "play_circle" },
  { name: "Snapchat", icon: "filter_drama" },
  { name: "Pinterest", icon: "push_pin" },
]

export default function Home() {
  const [wordIndex, setWordIndex] = React.useState(0)
  const [dashView, setDashView] = React.useState<"dashboard" | "analytics" | "writer" | "campaigns">(
    "dashboard"
  )
  const [demoPlaying, setDemoPlaying] = React.useState(false)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length)
    }, 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH EXACT BACKGROUND ORBS & TYPOGRAPHY                   */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-24 sm:pt-36 lg:pt-44 pb-12 sm:pb-16 lg:pb-24">
        {/* Background Grid & Ambient Orbs identical to aichatassist.com */}
        <div className="absolute inset-0 hero-grid-pattern pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/60 via-white to-white pointer-events-none" />
        <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-gradient-to-br from-purple-200/30 to-violet-300/20 rounded-full blur-[100px] animate-orb-1 pointer-events-none" />
        <div className="absolute top-40 right-[5%] w-[350px] h-[350px] bg-gradient-to-bl from-fuchsia-200/25 to-purple-200/15 rounded-full blur-[90px] animate-orb-2 pointer-events-none" />
        <div className="absolute bottom-20 left-[30%] w-[300px] h-[300px] bg-gradient-to-tr from-indigo-100/20 to-purple-100/10 rounded-full blur-[80px] animate-orb-1 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="space-y-8 lg:text-left text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-purple-700">
                  Meta Campaign Intelligence
                </span>
              </div>

              {/* Exact H1 Title with Instrument Serif accent */}
              <h1 className="text-[30px] xs:text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] xl:text-[64px] font-bold leading-[1.08] tracking-tight text-slate-900">
                Your campaigns<br className="hidden sm:block" /> are leaking<br />
                <span className="inline-block overflow-hidden align-bottom" style={{ height: "1.2em", verticalAlign: "bottom" }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={CYCLING_WORDS[wordIndex]}
                      initial={{ y: 35, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -35, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="inline-block font-serif-accent italic font-normal text-[#A855F7]"
                      style={{ fontSize: "1.18em" }}
                    >
                      {CYCLING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base md:text-lg text-slate-500 max-w-xl leading-relaxed lg:mx-0 mx-auto">
                While others target by age and interest, we read real buying behaviour &mdash; so your ads reach people already in motion, not people who might be someday.
              </p>

              {/* Button CTAs */}
              <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 pt-2">
                <Link
                  href="#audit"
                  className="group relative pl-7 pr-2 py-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white text-base font-semibold rounded-full shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3 overflow-hidden cursor-pointer"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none" />
                  <span className="relative z-10">Audit My Campaigns</span>
                  <div className="relative z-10 w-9 h-9 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:rotate-45 transition-all duration-300">
                    <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                  </div>
                </Link>

                <Link
                  href="#demo"
                  className="group flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors duration-300"
                >
                  <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-purple-300 group-hover:bg-purple-50 transition-all duration-300">
                    <span className="material-symbols-outlined text-[14px] text-purple-500">play_arrow</span>
                  </span>
                  See how it works
                </Link>
              </div>

              {/* Bullets */}
              <div className="flex flex-wrap items-center lg:justify-start justify-center gap-x-4 gap-y-2 text-xs text-slate-400 font-medium pt-2">
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-sm align-middle mr-1 text-emerald-500">check_circle</span>
                  Real behaviour signals
                </div>
                <div className="hidden sm:block text-slate-200">|</div>
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-sm align-middle mr-1 text-emerald-500">check_circle</span>
                  Not demographics
                </div>
                <div className="hidden sm:block text-slate-200">|</div>
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-sm align-middle mr-1 text-emerald-500">check_circle</span>
                  CPA Guardrails Built In
                </div>
              </div>

              <p className="text-[13px] text-slate-400 pt-1 lg:text-left text-center">
                Free Meta account audit &middot; No credit card &middot; Results in 24 hours
              </p>
            </div>

            {/* Right Floating Cards Visual */}
            <div className="relative mt-6 lg:mt-0">
              <HeroIntelligenceShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DUAL-TRACK CONTINUOUS LOGO MARQUEE                                      */}
      {/* ========================================================================= */}
      <LogoMarquee />

      {/* ========================================================================= */}
      {/* 3. "AGENCIES AND SERIOUS OPERATORS DON'T SCALE MANUALLY"                   */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#FDFBFF] py-20 lg:py-28">
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 rounded-full bg-purple-500/5 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20 max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-slate-900 leading-[1.1]">
              Agencies And Serious Operators<br />
              Don&apos;t Scale{" "}
              <span className="font-serif-accent italic font-normal text-[#A855F7]">
                Manually
              </span>
            </h2>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 max-w-2xl mx-auto leading-relaxed mt-6 sm:mt-8">
              It starts with a spreadsheet. Then a script. Then a shattered team.<br />
              We built the destination you&apos;re trying to reach.
            </p>
          </div>

          <div className="relative mt-8 sm:mt-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
              {/* The CPA Creep */}
              <div className="flex flex-col gap-4 group">
                <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 hover:border-[#A855F7]/50 transition-all duration-500 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div className="flex justify-between items-start mb-10">
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-900 tracking-tight text-base">The CPA Creep</h3>
                      <p className="text-slate-400 text-[9px] font-mono uppercase tracking-[0.2em]">
                        Metric: Efficiency Drift
                      </p>
                    </div>
                    <span className="text-[10px] font-bold px-3 py-1 bg-purple-50 text-[#A855F7] rounded-full border border-purple-100 font-mono">
                      +5.2% DRIFT
                    </span>
                  </div>
                  <div className="relative h-20 mb-6 w-full flex items-end pb-1">
                    <div className="w-full flex items-end gap-2">
                      <div className="flex-[1.2] bg-slate-100 h-[18px] rounded-sm" />
                      <div className="flex-[1.8] bg-slate-100 h-[36px] rounded-sm" />
                      <div className="flex-[1.6] bg-slate-100 h-[24px] rounded-sm" />
                      <div className="flex-[2] bg-slate-100 h-[44px] rounded-sm" />
                      <div className="flex-[1.6] bg-[#A855F7]/80 h-[56px] rounded-sm" />
                    </div>
                  </div>
                  <p className="text-slate-500 text-[13px] leading-relaxed">
                    Micro-fluctuations across high-spend sets. Undetectable by manual review until budget exhaustion.
                  </p>
                </div>
              </div>

              {/* Invisible Fatigue */}
              <div className="flex flex-col gap-4 group">
                <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 hover:border-[#A855F7]/50 transition-all duration-500 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div className="flex justify-between items-start mb-10">
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-900 tracking-tight text-base">Invisible Fatigue</h3>
                      <p className="text-slate-400 text-[9px] font-mono uppercase tracking-[0.2em]">
                        Metric: Creative Health
                      </p>
                    </div>
                    <span className="text-[10px] font-bold px-3 py-1 bg-purple-50 text-[#A855F7] rounded-full border border-purple-100 font-mono">
                      FREQ &gt; 3.8
                    </span>
                  </div>
                  <div className="h-12 mb-8 flex items-center justify-center">
                    <svg className="w-full h-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path
                        d="M0 5 Q 25 5, 50 10 T 100 18"
                        fill="none"
                        stroke="#A855F7"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="1 6"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-500 text-[13px] leading-relaxed">
                    Audience saturation triggers CTR decay. Spend remains constant while conversion probability drops.
                  </p>
                </div>
              </div>

              {/* The Silent Drop */}
              <div className="flex flex-col gap-4 group">
                <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 hover:border-[#A855F7]/50 transition-all duration-500 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div className="flex justify-between items-start mb-10">
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-900 tracking-tight text-base">The Silent Drop</h3>
                      <p className="text-slate-400 text-[9px] font-mono uppercase tracking-[0.2em]">
                        Metric: Attribution Link
                      </p>
                    </div>
                    <span className="text-[10px] font-bold px-3 py-1 bg-purple-50 text-[#A855F7] rounded-full border border-purple-100 font-mono">
                      -40% ROI
                    </span>
                  </div>
                  <div className="h-12 mb-8 flex flex-col justify-end pb-2 gap-2">
                    <div className="w-full h-[2px] bg-slate-200 rounded-full" />
                    <div className="w-full h-[2px] bg-purple-100 rounded-full" />
                  </div>
                  <p className="text-slate-500 text-[13px] leading-relaxed">
                    Backend tracking failure causes optimization towards ghost conversions. Immediate capital drain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. REAL ESTATE AGENCY RUNNING 22 META CAMPAIGNS                            */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#FDFBFF] py-20 lg:py-32">
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mx-auto mb-16 sm:mb-20 max-w-5xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-4 sm:mb-6">
              A Real Estate Agency Running{" "}
              <span className="font-serif-accent italic font-normal text-[#A855F7]">
                22 Meta Campaigns.
              </span>
            </h2>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 max-w-2xl mx-auto leading-relaxed">
              CPA drifted from $10 to $16 &mdash; silently, over 18 days.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="rounded-[2rem] border border-slate-100 bg-white/80 p-5 sm:p-8 md:p-12 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.35)] backdrop-blur mb-6">
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-50">
                  <span className="material-symbols-outlined text-2xl text-[#A855F7]">analytics</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-950 mb-4">The Situation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <p className="text-base leading-relaxed text-slate-600">
                      The creative had not changed. The targeting had not changed. But frequency had moved from{" "}
                      <span className="font-semibold text-slate-900">1.8 to 4.3</span> and hook rate had dropped{" "}
                      <span className="font-semibold text-slate-900">31%</span> &mdash; signals that were visible in the data the whole time.
                    </p>
                    <p className="text-base leading-relaxed text-slate-600">
                      Growcin flagged the drift on day two. The campaign was paused, the creative rotated, and spend was shifted to the two performing ad sets before the client saw a single report.
                    </p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-purple-50/80 border border-purple-100 px-4 py-3">
                    <span className="material-symbols-outlined text-[#A855F7] text-lg">check_circle</span>
                    <span className="text-sm font-medium text-slate-700">
                      Proactive intervention, not reactive damage control
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="group rounded-[2rem] border border-slate-100 bg-white/80 p-6 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.35)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-30px_rgba(124,58,237,0.15)] text-center">
                <div className="bg-purple-100 text-[#A855F7] inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-bold mb-4 font-mono">
                  Day 2
                </div>
                <p className="text-base font-semibold text-slate-900 mb-1">Flagged before client noticed</p>
                <p className="text-sm text-slate-500 leading-relaxed">Proactive intervention, not reactive damage control.</p>
              </div>

              <div className="group rounded-[2rem] border border-slate-100 bg-white/80 p-6 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.35)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-30px_rgba(124,58,237,0.15)] text-center">
                <div className="bg-purple-100 text-[#A855F7] inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-bold mb-4 font-mono">
                  $140K
                </div>
                <p className="text-base font-semibold text-slate-900 mb-1">Estimated spend saved</p>
                <p className="text-sm text-slate-500 leading-relaxed">Prevented from bleeding into a failing ad set.</p>
              </div>

              <div className="group rounded-[2rem] border border-slate-100 bg-white/80 p-6 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.35)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-30px_rgba(124,58,237,0.15)] text-center">
                <div className="bg-purple-100 text-[#A855F7] inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-bold mb-4 font-mono">
                  0
                </div>
                <p className="text-base font-semibold text-slate-900 mb-1">Client escalations that month</p>
                <p className="text-sm text-slate-500 leading-relaxed">Trust maintained through silent optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHAT YOUR TEAM SEES BEFORE MONEY LEAKS                                  */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-4">
              What Your Team Sees{" "}
              <span className="font-serif-accent italic font-normal text-[#A855F7]">
                Before Money Leaks
              </span>
            </h2>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 max-w-2xl mx-auto leading-relaxed mb-4">
              Real-time signals surfaced before the client sees a single report.
            </p>
            <p className="text-lg text-slate-600">
              Most reporting tools tell you what happened yesterday. Growcin shows you what is starting to go wrong today &mdash; with the context to act on it before spend compounds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-slate-900">Campaign health</h3>
                <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">
                  RISK RANKED
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-4">Campaigns that need a decision surface first.</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                  <span className="text-gray-700">Prospecting &ndash; Broad</span>
                  <span className="font-mono text-slate-900">CPA $10</span>
                  <span className="text-xs bg-slate-100 text-slate-800 px-2 py-0.5 rounded">Watch</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-2">
                  <span className="text-gray-700">Retargeting &ndash; 7D</span>
                  <span className="font-mono text-slate-900">CPA $8</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">Healthy</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-700 font-semibold">Lead Form &ndash; LAL</span>
                  <span className="font-mono text-slate-900 font-semibold">CPA $15</span>
                  <span className="text-xs bg-slate-900 text-white px-2 py-0.5 rounded font-semibold">Review now</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-slate-900">Creative fatigue alert</h3>
                <span className="text-xs font-mono bg-purple-50 text-[#A855F7] px-2 py-1 rounded">
                  DECAY DETECTED
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                CTR down 28% over 5 days. Frequency moved from 1.9 to 4.1. Hook rate falling.
              </p>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Recommended action</p>
                <p className="text-sm text-slate-800 font-medium">Pause Ad 3. Refresh the hook. Move spend to Ad 5.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-slate-900">CPA spike &mdash; act now</h3>
                <span className="text-xs font-mono bg-slate-900 text-white px-2 py-1 rounded">
                  URGENT
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                CPA moved from $10 to $16 overnight. $500 spent since the signal appeared.
              </p>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Cause identified</p>
                <p className="text-sm text-slate-800 font-medium">Audience overlap with Retargeting set. Budget redistribution recommended.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. LIVE ANOMALY SIMULATOR TERMINAL                                         */}
      {/* ========================================================================= */}
      <section id="simulator" className="py-24 bg-[#FBFBFF] border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="mb-4 inline-flex items-center gap-4">
              <span className="h-px w-12 bg-[#A855F7]/40" />
              <span className="text-xs font-extrabold uppercase tracking-[0.4em] text-[#A855F7]">
                Autonomous Defense
              </span>
              <span className="h-px w-12 bg-[#A855F7]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4 leading-[1.1]">
              See The System <span className="font-serif-accent italic font-normal text-[#A855F7]">Intervene</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Experience the autonomous campaign intelligence layer detecting anomalies and protecting budget in real time.
            </p>
          </div>

          <LiveSimulator />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. STRATEGIC POSITIONING: COMPARISON TABLE                                 */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#FBFBFF] px-4 py-16 sm:px-8 md:px-12 lg:px-24 sm:py-24">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <div className="mb-6 flex items-center justify-center gap-6">
              <span className="h-px w-16 bg-[#A855F7]/40" />
              <span className="text-xs font-extrabold uppercase tracking-[0.4em] text-[#A855F7]">
                Strategic Positioning
              </span>
              <span className="h-px w-16 bg-[#A855F7]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold leading-[1.1] tracking-tight text-slate-900">
              Every Team Has Ad Manager. <br />
              <span className="font-serif-accent italic font-normal text-[#A855F7] underline decoration-[#A855F7]/10 underline-offset-[16px]">
                Few Have Intelligence
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-500">
              Growcin vs Manual Campaign Manager &mdash; side by side across the dimensions that actually affect client outcomes and retention.
            </p>
          </div>

          <ComparisonTable />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. DECISION PACKAGE: WHEN SOMETHING BREAKS, YOU GET THE NEXT MOVE          */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-4">
            When Something Breaks,{" "}
            <span className="font-serif-accent italic font-normal text-[#A855F7]">
              You Get the Next Move.
            </span>
          </h2>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 max-w-xl mx-auto leading-relaxed mb-12">
            Most tools send an alert. Growcin sends a decision package.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="text-[#A855F7] font-mono text-sm mb-2 font-bold">01 &middot; ALERT</div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">What changed</h3>
              <p className="text-slate-600 text-sm">
                Creative fatigue detected. CTR down 28% over 5 days while spend stayed flat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="text-[#A855F7] font-mono text-sm mb-2 font-bold">02 &middot; CAUSE</div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Why it happened</h3>
              <p className="text-slate-600 text-sm">
                Frequency increased from 1.9 to 4.1 over the same period. Hook rate is falling. The audience has seen this ad too many times.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#A855F7] shadow-lg shadow-purple-500/10">
              <div className="text-[#A855F7] font-mono text-sm mb-2 font-bold">03 &middot; RECOMMENDATION</div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">What to do</h3>
              <p className="text-slate-800 text-sm font-semibold">
                Pause Ad 3. Refresh the hook. Move budget toward Ad 5, which is performing at $7 CPA with 3x lower frequency.
              </p>
            </div>
          </div>

          <p className="mt-10 text-slate-500 text-sm">
            Your media buyer reads it, makes the call, and moves on. No dashboard archaeology. One clear signal with the context to act.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CAMPAIGN INTELLIGENCE & THE UNREPLICABLE FEATURE (WHATSAPP QUALIFICATION)*/}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-4">
              What the Campaign{" "}
              <span className="font-serif-accent italic font-normal text-[#A855F7]">
                Intelligence Layer Does
              </span>
            </h2>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 max-w-xl mx-auto leading-relaxed">
              Automate the response. Focus on the strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-2">Campaign triage</h3>
              <p className="text-sm text-slate-600">Every active campaign ranked by deterioration and budget exposure. The ones that need a decision today are at the top.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-2">CPA guardrails</h3>
              <p className="text-sm text-slate-600">Set your maximum acceptable cost per lead. When actual CPA approaches that threshold, the system flags it with context.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-2">Creative fatigue detection</h3>
              <p className="text-sm text-slate-600">Tracks CTR, frequency, hook rate, and engagement decay simultaneously. You know the cause and the recommended next action.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-2">Budget risk detection</h3>
              <p className="text-sm text-slate-600">Spend anomalies flagged early, with the campaign context attached. An explanation of what moved, by how much, and what it means.</p>
            </div>
          </div>

          {/* Lead Qualification Feature Box */}
          <div className="bg-purple-50/50 border border-purple-100 rounded-3xl p-5 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#A855F7] font-semibold text-sm uppercase tracking-wide">
                  The Unreplicable Feature
                </span>
                <h3 className="text-3xl font-bold text-slate-900 mt-2 mb-4">
                  Lead Qualification
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Meta sees a lead click. It cannot see what happens in the conversation that follows. Growcin routes every new lead from your Meta campaigns directly into a WhatsApp qualification flow. Before your sales team speaks to anyone, the system has already asked the right questions, scored their intent, and separated genuine buyers from tyre-kickers.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#A855F7]">check_circle</span>
                    What the lead actually needs and when
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#A855F7]">check_circle</span>
                    Whether they have the budget and decision authority
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#A855F7]">check_circle</span>
                    Which objections came up before they agreed to talk
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    WA
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">AI Qualification Assistant</p>
                    <p className="text-xs text-[#A855F7]">Online 24/7</p>
                  </div>
                </div>
                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3 bg-slate-100 rounded-2xl rounded-tl-sm text-slate-800">
                    Hello! What is your current monthly ad spend across Meta and Google?
                  </div>
                  <div className="p-3 bg-purple-100 text-slate-900 rounded-2xl rounded-tr-sm ml-auto max-w-[85%] font-medium">
                    We spend about $20,000/month, but our CPA recently doubled on prospecting.
                  </div>
                  <div className="p-3 bg-slate-100 rounded-2xl rounded-tl-sm text-slate-800">
                    Understood. I have categorized this as <strong className="text-emerald-700">High Intent (Score 92/100)</strong> and connected our Growth Director for an audit.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-purple-100">
              <h4 className="font-bold text-slate-900 mb-4">The timeline your business experiences:</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <span className="text-[#A855F7] font-bold text-sm">Month 1</span>
                  <p className="text-sm text-slate-600 mt-1">You see which campaigns are wasting budget and why &mdash; with the cause and recommended action.</p>
                </div>
                <div>
                  <span className="text-[#A855F7] font-bold text-sm">Month 3</span>
                  <p className="text-sm text-slate-600 mt-1">You see which conversation patterns produce your best buyers. Your sales team talks to fewer leads and closes more.</p>
                </div>
                <div>
                  <span className="text-[#A855F7] font-bold text-sm">Month 6</span>
                  <p className="text-sm text-slate-600 mt-1">You have a buyer intelligence model built entirely on your own conversations. No competitor can replicate it.</p>
                </div>
              </div>
              <p className="mt-6 text-center font-semibold text-slate-900 italic">
                &ldquo;A competitor can copy software. They cannot copy the intelligence your business has built.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. PRODUCT DASHBOARD WORKSPACE SHOWCASE                                   */}
      {/* ========================================================================= */}
      <section id="product" className="py-20 sm:py-24 bg-[#FAF8FD] border-y border-slate-100">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">
              Explore the Workspace
            </h2>
            <p className="text-slate-500 text-sm md:text-base">
              Autonomous campaign monitor, creative studio, and attribution analytics.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {(
              [
                ["dashboard", "Overview Dashboard"],
                ["analytics", "Attribution Analytics"],
                ["writer", "AI Content Studio"],
                ["campaigns", "Active Campaigns"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setDashView(key)}
                className={cn(
                  "text-xs font-semibold px-4 py-2 rounded-full transition-all cursor-pointer",
                  dashView === key
                    ? "bg-[#A855F7] text-white shadow-md shadow-purple-500/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-purple-300"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <ProductDashboard activeView={dashView} />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. VIDEO WALKTHROUGH (#demo)                                             */}
      {/* ========================================================================= */}
      <section id="demo" className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">See it in 3 minutes</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Watch how the system flagged a creative fatigue event, identified the cause, and surfaced the recommended action &mdash; before a single rupee of additional budget was wasted.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#1a1d2e] aspect-video">
            {demoPlaying ? (
              <iframe
                src="https://www.youtube.com/embed/i2UuGd84ZJU?autoplay=1&rel=0&modestbranding=1"
                title="How It Works Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setDemoPlaying(true)}
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#1a1d2e]/70 transition-opacity hover:bg-[#1a1d2e]/50 cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-full bg-[#A855F7] flex items-center justify-center shadow-lg shadow-purple-500/40 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="#audit"
              className="px-8 py-3.5 border-2 border-[#A855F7] text-[#A855F7] font-semibold rounded-full hover:bg-purple-50 hover:-translate-y-0.5 transition-all text-base"
            >
              Get a Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. SOCIAL PROOF & VIDEO TESTIMONIALS                                      */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#fafafa] py-20 sm:py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-28">
            <div className="mb-6 inline-flex items-center gap-4">
              <span className="h-px w-10 bg-[#A855F7]" />
              <span className="text-[11px] font-black uppercase tracking-[0.45em] text-[#A855F7]">Client Stories</span>
              <span className="h-px w-10 bg-[#A855F7]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-6">
              Trusted by teams that needed<br />
              <span className="font-serif-accent italic font-normal text-[#A855F7] underline decoration-purple-200 underline-offset-[16px]">
                predictable growth.
              </span>
            </h2>
          </div>

          {/* Video Testimonial Cards - 2 Column Layout identical to aichatassist.com */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            <TestimonialCard
              image="/partners/aisochstudio.jpg"
              quote="We were running 18 campaigns across three client accounts. Growcin flagged a CPA spike on a real estate campaign within 36 hours of it starting. We'd have caught it in the weekly review — four days later. That's the difference between a professional conversation and a difficult one."
              name="Avtar Singh"
              title="CEO, AI Soch Studio"
              onPlay={() => setDemoPlaying(true)}
            />
            <TestimonialCard
              image="/partners/abhishek.jpg"
              quote="Before Growcin, creative refresh decisions were gut feel and spreadsheets. Now I can see exactly when frequency is hurting performance and rotate before CTR falls. My clients see more consistent CPA and I spend less time explaining variance."
              name="Abhishek Dhakoliya"
              title="Marketing Head, Best Prop Deal"
              onPlay={() => setDemoPlaying(true)}
            />
          </div>

          {/* 4 Proof Stat Badges */}
          <div className="bg-white rounded-[2rem] py-6 px-4 sm:py-10 sm:px-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] border border-slate-100 mb-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A855F7] via-[#8B5CF6] to-[#6D28D9]" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x md:divide-slate-100">
              <div className="flex flex-col gap-2">
                <span className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 font-mono">200+</span>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-400">Campaigns managed</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl md:text-4xl font-black tracking-tight text-[#A855F7] font-mono">$1M+</span>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-400">Ad spend monitored</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl md:text-4xl font-black tracking-tight text-[#A855F7] font-mono">99.4%</span>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-400">Client retention</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 font-mono">&lt; 36hrs</span>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-400">Avg. time to first insight</span>
              </div>
            </div>
          </div>

          {/* Platforms Row */}
          <div className="border-t border-slate-100 pt-12 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">
              Monitoring campaigns across every major ad platform
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
              {PLATFORMS.map((platform) => (
                <div
                  key={platform.name}
                  className="flex flex-col items-center gap-2 text-slate-400 hover:text-[#A855F7] transition-colors duration-300 group cursor-default"
                >
                  <span className="material-symbols-outlined text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
                    {platform.icon}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em]">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. FAQ SECTION WITH SCHEMA-ALIGNED ARCHITECTURE                           */}
      {/* ========================================================================= */}
      <section id="faq" className="relative py-20 lg:py-28 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-14 sm:mb-16 lg:mb-20">
            <div className="mb-6 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-purple-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-purple-600">
                SYSTEM INTELLIGENCE
              </span>
            </div>
            <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-slate-950">
              Questions About<br />
              <span className="font-serif-accent italic font-normal text-[#A855F7]">
                the System.
              </span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed">
              Clear architectural answers on how Growcin protects and optimizes your operation.
            </p>
          </div>

          <div className="rounded-[2.5rem] bg-white/90 backdrop-blur-xl border border-slate-100 p-5 sm:p-8 md:p-12 shadow-[0_20px_50px_-20px_rgba(168,85,247,0.06)]">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="border-l-2 border-purple-300/80 pl-5 py-2 hover:border-[#A855F7] transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {faq.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {faq.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
