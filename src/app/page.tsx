"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, Variants, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { DashboardCard } from "@/components/marketing/DashboardCard"
import { LogoMarquee } from "@/components/marketing/LogoMarquee"
import { ComparisonTable } from "@/components/marketing/ComparisonTable"
import { StatNumber } from "@/components/ui/StatNumber"
import { TestimonialCard } from "@/components/ui/TestimonialCard"
import { Accordion } from "@/components/ui/Accordion"

// Define animation variants for staggered reveals
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const CYCLING_WORDS = ["Revenue", "Budget", "ROAS", "Profit"]

const FAQS = [
  {
    title: "How does budget risk detection work?",
    content: "AI Chat Assist monitors CPA movement, spend anomalies, creative fatigue, and lead quality signals across your Meta campaigns. When budget is exposed, the platform flags the affected campaign and explains what changed."
  },
  {
    title: "What is a CPA guardrail?",
    content: "A CPA guardrail is a maximum cost-per-lead threshold you set. When actual CPA moves beyond that threshold, AI Chat Assist surfaces the risk early so your team can review the campaign before spend compounds."
  },
  {
    title: "How does creative fatigue monitoring work?",
    content: "The platform watches signals such as CTR decline, frequency increases, hook-rate decay, and CPA movement. When a creative starts deteriorating, it shows the likely cause and recommended next action."
  },
  {
    title: "What does lead qualification do?",
    content: "Every lead passes through an AI qualification layer. The platform asks pre-set questions via chatbot, and only routes high-intent leads to your sales team."
  },
  {
    title: "Does AI Chat Assist replace my Meta Ads Manager?",
    content: "No. AI Chat Assist connects to your existing Meta Ads Manager account - it does not replace it. You keep full access to Ads Manager while adding a campaign intelligence layer on top."
  },
  {
    title: "Why not just use Meta alerts?",
    content: "Meta alerts tell you something happened. AI Chat Assist adds context by explaining why it happened, which campaigns are affected, and what action your team should consider next."
  }
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.1], [0, 50])

  const [wordIndex, setWordIndex] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // State for WhatsApp chat animation
  const [chatStep, setChatStep] = React.useState(0)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setChatStep((prev) => (prev + 1) % 5)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-36 md:pb-24 px-6">
        {/* Background Patterns & Grid */}
        <div className="absolute inset-0 hero-grid-pattern pointer-events-none opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-base)] to-[var(--color-base)] pointer-events-none" />
        
        {/* Animated Background Glowing Orbs */}
        <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-gradient-to-br from-[var(--color-brand-blue)]/5 to-[var(--color-brand-cyan)]/5 rounded-full blur-[120px] animate-orb-1 pointer-events-none" />
        <div className="absolute top-40 right-[5%] w-[350px] h-[350px] bg-gradient-to-bl from-[var(--color-brand-cyan)]/5 to-[var(--color-brand-blue)]/5 rounded-full blur-[100px] animate-orb-2 pointer-events-none" />
        <div className="absolute bottom-20 left-[30%] w-[300px] h-[300px] bg-gradient-to-tr from-[var(--color-brand-blue)]/5 to-[var(--color-brand-cyan)]/5 rounded-full blur-[90px] animate-orb-1 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[var(--color-brand-blue)]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_480px] gap-12 lg:gap-10 xl:gap-16 items-center">
            
            <motion.div
              style={{ opacity: heroOpacity, y: heroY }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl z-10 lg:text-left text-center"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border-subtle)] shadow-sm mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-cyan)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-cyan)]"></span>
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-brand-cyan)]">
                  Meta Campaign Intelligence
                </span>
              </div>
              
              <h1 className="text-[38px] md:text-[52px] lg:text-[56px] xl:text-[64px] font-bold leading-[1.08] tracking-tight text-white mb-5">
                Your campaigns <br className="hidden sm:block" />
                are leaking <br />
                <span className="inline-block overflow-hidden align-bottom h-[1.2em] relative min-w-[200px] lg:text-left text-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={CYCLING_WORDS[wordIndex]}
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -24, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute left-0 right-0 lg:left-0 lg:right-auto pr-3 pb-1 font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent"
                    >
                      {CYCLING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-300 mb-6 leading-relaxed max-w-xl lg:mx-0 mx-auto font-medium">
                While others target by age and interest, we read real buying behaviour — so your ads reach people already in motion, not people who might be someday.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 pt-2 mb-6">
                <Link 
                  href="/signup" 
                  className="group relative h-12 pl-6 pr-2 w-full sm:w-auto bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] text-white text-[14px] font-bold rounded-full shadow-lg shadow-[var(--color-brand-blue)]/25 hover:shadow-xl hover:shadow-[var(--color-brand-blue)]/35 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between sm:justify-start gap-3 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none" />
                  <span className="relative z-10">Audit My Campaigns</span>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:rotate-45 transition-all duration-300 shrink-0">
                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                  </div>
                </Link>
                
                <Link 
                  href="#demo" 
                  className="group flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors duration-300"
                >
                  <span className="w-8 h-8 rounded-full border border-[var(--color-border-subtle)] flex items-center justify-center group-hover:border-[var(--color-brand-cyan)]/30 group-hover:bg-[var(--color-brand-cyan)]/10 transition-all duration-300 shrink-0">
                    <span className="material-symbols-outlined text-[14px] text-[var(--color-brand-cyan)]">play_arrow</span>
                  </span>
                  See how it works
                </Link>
              </div>
              
              <div className="flex flex-wrap items-center lg:justify-start justify-center gap-x-4 gap-y-2 text-xs text-slate-300 font-medium mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[var(--color-status-good)] text-sm">check_circle</span>
                  Real behaviour signals
                </div>
                <div className="hidden sm:block text-[var(--color-border-subtle)]">|</div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[var(--color-status-good)] text-sm">check_circle</span>
                  Not demographics
                </div>
                <div className="hidden sm:block text-[var(--color-border-subtle)]">|</div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[var(--color-status-good)] text-sm">check_circle</span>
                  CPA Guardrails Built In
                </div>
              </div>
              
              <p className="text-[13px] text-slate-400 lg:text-left text-center font-semibold">
                Free Meta account audit · No credit card · Results in 24 hours
              </p>
            </motion.div>
            
            {/* Hero Visuals */}
            <div className="relative hidden lg:block">
              <div className="w-[350px] xl:w-[480px] h-[437px] xl:h-[600px] relative">
                <div className="absolute top-0 right-0 w-[480px] h-[600px] lg:scale-[0.73] xl:scale-100 lg:origin-top-right xl:origin-center transition-all duration-300">
                  <div className="absolute inset-[-10%] bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                  
                  <DashboardCard type="suggestion" className="top-[135px] left-[-8%] w-[270px] z-30" delay={0.5} />
                  <DashboardCard type="health" className="top-[10px] right-[-6%] w-[250px] z-10" delay={0} />
                  <DashboardCard type="alert" className="bottom-[18%] left-[-10%] w-[270px] z-40" delay={1.2} />
                  <DashboardCard type="intent" className="bottom-[0%] right-[0%] w-[250px] z-20" delay={1.8} />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. Logo Marquee */}
      <LogoMarquee />

      {/* 3. Problem Section */}
      <section className="py-24 px-6 bg-[var(--color-base)] border-y border-[var(--color-border-subtle)] relative overflow-hidden">
        {/* Subtle background glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--color-brand-blue)]/5 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--color-brand-cyan)]/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl">
              Agencies And Serious Operators <br />
              Don&apos;t Scale{" "}
              <span className="font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                Manually
              </span>
            </h2>
            <p className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[var(--color-text-muted)] uppercase max-w-3xl leading-relaxed mt-6">
              It starts with a spreadsheet. Then a script. Then a shattered team. <br className="hidden sm:block" />
              We built the destination you&apos;re trying to reach.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "The CPA Creep",
                pill: "+5.2% Drift",
                metric: "METRIC: EFFICIENCY DRIFT",
                desc: "Micro-fluctuations across high-spend sets. Undetectable by manual review until budget exhaustion.",
                visual: (
                  <div className="flex items-end gap-2.5 h-14 pt-2">
                    <div className="w-8 h-4 bg-[var(--color-surface-alt)] rounded-md" />
                    <div className="w-12 h-7 bg-[var(--color-surface-alt)] rounded-md" />
                    <div className="w-9 h-5 bg-[var(--color-surface-alt)] rounded-md" />
                    <div className="w-12 h-9 bg-[var(--color-surface-alt)] rounded-md" />
                    <div className="w-9 h-14 bg-gradient-to-t from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] rounded-md shadow-lg shadow-[var(--color-brand-cyan)]/20" />
                  </div>
                )
              },
              {
                title: "Invisible Fatigue",
                pill: "FREQ > 3.8",
                metric: "METRIC: CREATIVE HEALTH",
                desc: "Audience saturation triggers CTR decay. Spend remains constant while conversion probability drops.",
                visual: (
                  <div className="flex items-center w-full h-14 pt-2 overflow-visible">
                    <svg viewBox="0 0 300 60" className="w-full h-10 overflow-visible">
                      <path 
                        d="M 10,12 C 80,12 120,22 180,32 T 290,47" 
                        fill="none" 
                        stroke="var(--color-brand-cyan)" 
                        strokeWidth="3.5" 
                        strokeDasharray="6 8" 
                        strokeLinecap="round" 
                      />
                    </svg>
                  </div>
                )
              },
              {
                title: "The Silent Drop",
                pill: "-40% ROI",
                metric: "METRIC: ATTRIBUTION LINK",
                desc: "Backend tracking failure causes optimization towards ghost conversions. Immediate capital drain.",
                visual: (
                  <div className="flex items-center justify-between w-full h-14 pt-2 relative">
                    <div className="h-[2px] w-[60%] bg-[var(--color-surface-alt)] rounded-full" />
                    <div className="px-3.5 py-1.5 rounded-full bg-[var(--color-status-bad)]/10 border border-[var(--color-status-bad)]/25 text-[var(--color-status-bad)] text-[10px] font-extrabold shadow-sm tracking-wide shrink-0">
                      Losing money
                    </div>
                  </div>
                )
              }
            ].map((card, i) => (
              <motion.div key={i} variants={itemVariants} className="h-full">
                <div className="h-full bg-[var(--color-surface)]/80 border border-[var(--color-border-subtle)] rounded-[2rem] p-8 shadow-2xl hover:shadow-[var(--color-brand-blue)]/5 hover:border-[var(--color-border-strong)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-[17px] text-white leading-tight">
                        {card.title}
                      </h3>
                      <span className="text-[10px] font-extrabold tracking-wide uppercase px-2.5 py-1 rounded-full bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] border border-[var(--color-brand-cyan)]/25">
                        {card.pill}
                      </span>
                    </div>
                    
                    {/* Metric */}
                    <div className="text-[9px] font-extrabold tracking-wider text-[var(--color-text-muted)] uppercase">
                      {card.metric}
                    </div>
                    
                    {/* Visual Graphic */}
                    <div className="my-2 h-14 flex items-center">
                      {card.visual}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-[var(--color-text-secondary)] text-[13px] leading-relaxed font-medium mt-4">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Real Estate Case Study */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/30 border-y border-[var(--color-border-subtle)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-full bg-gradient-to-l from-[var(--color-brand-blue)]/5 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-6">
              A Real Estate Agency Running <br />
              <span className="font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                22 Meta Campaigns.
              </span>
            </h2>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-muted)] leading-relaxed">
              CPA drifted from $10 to $16 — silently, over 18 days.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-[var(--color-surface)]/80 border border-[var(--color-border-subtle)] rounded-[2rem] p-8 md:p-12 shadow-2xl backdrop-blur"
            >
              <div className="flex gap-6 items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-brand-blue)]/10 border border-[var(--color-brand-blue)]/20">
                  <span className="material-symbols-outlined text-2xl text-[var(--color-brand-cyan)]">analytics</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">The Situation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
                    <p>
                      The creative had not changed. The targeting had not changed. But frequency had moved from <span className="font-semibold text-white">1.8 to 4.3</span> and hook rate had dropped <span className="font-semibold text-white">31%</span> — signals that were visible in the data the whole time.
                    </p>
                    <p>
                      AI Chat Assist flagged the drift on day two. The campaign was paused, the creative rotated, and spend was shifted to the two performing ad sets before the client saw a single report.
                    </p>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[var(--color-brand-blue)]/10 border border-[var(--color-brand-blue)]/20 px-4 py-3">
                    <span className="material-symbols-outlined text-[var(--color-brand-cyan)] text-lg">check_circle</span>
                    <span className="text-sm font-medium text-white">Proactive intervention, not reactive damage control</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4 w-full"
            >
              {[
                { label: "Flagged before client noticed", val: "Day 2", desc: "Proactive intervention, not reactive damage control." },
                { label: "Estimated spend saved", val: "$140K", desc: "Prevented from bleeding into a failing ad set." },
                { label: "Client escalations that month", val: "0", desc: "Trust maintained through silent optimization." }
              ].map((card, idx) => (
                <div 
                  key={idx} 
                  className="group rounded-[2rem] border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 p-6 shadow-2xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-strong)] text-center flex flex-col items-center justify-center"
                >
                  <div className="bg-[var(--color-brand-blue)]/20 text-[var(--color-brand-cyan)] border border-[var(--color-brand-blue)]/30 inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-bold mb-3">
                    {card.val}
                  </div>
                  <p className="text-base font-semibold text-white mb-1">{card.label}</p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Dashboard Alerts Section */}
      <section className="py-24 px-6 bg-[var(--color-base)] relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              What Your Team Sees <br />
              <span className="font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                Before Money Leaks
              </span>
            </h2>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-text-muted)] leading-relaxed mb-4">
              Real-time signals surfaced before the client sees a single report.
            </p>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Most reporting tools tell you what happened yesterday. AI Chat Assist shows you what is starting to go wrong today — with the context to act on it before spend compounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1: Campaign Health */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border-subtle)] shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-white text-[17px]">Campaign health</h3>
                  <span className="text-[10px] font-mono font-bold bg-[var(--color-surface-alt)] border border-[var(--color-border-subtle)] px-2 py-0.5 rounded text-[var(--color-text-secondary)]">RISK RANKED</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-6">Campaigns that need a decision surface first.</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm border-b border-[var(--color-border-subtle)] pb-2">
                  <span className="text-[var(--color-text-secondary)]">Prospecting – Broad</span>
                  <span className="font-mono text-white">CPA $10</span>
                  <span className="text-xs bg-[var(--color-surface-alt)] text-[var(--color-text-secondary)] px-2 py-0.5 rounded">Watch</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-[var(--color-border-subtle)] pb-2">
                  <span className="text-[var(--color-text-secondary)]">Retargeting – 7D</span>
                  <span className="font-mono text-white">CPA $8</span>
                  <span className="text-xs bg-[var(--color-brand-blue)]/20 text-[var(--color-brand-cyan)] px-2 py-0.5 rounded border border-[var(--color-brand-blue)]/30">Healthy</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white font-semibold">Lead Form – LAL</span>
                  <span className="font-mono text-white font-semibold">CPA $15</span>
                  <span className="text-xs bg-[var(--color-status-bad)] text-white px-2 py-0.5 rounded font-semibold animate-pulse">Review now</span>
                </div>
              </div>
            </div>

            {/* Card 2: Creative Fatigue */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border-subtle)] shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-white text-[17px]">Creative fatigue alert</h3>
                  <span className="text-[10px] font-mono font-bold bg-[var(--color-status-warn)]/10 border border-[var(--color-status-warn)]/20 px-2 py-0.5 rounded text-[var(--color-status-warn)]">DECAY DETECTED</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-6">CTR down 28% over 5 days. Frequency moved from 1.9 to 4.1. Hook rate falling.</p>
              </div>
              <div className="bg-[var(--color-surface-alt)] p-4 rounded-xl border border-[var(--color-border-subtle)]">
                <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase mb-1">Recommended action</p>
                <p className="text-sm text-white font-medium">Pause Ad 3. Refresh the hook. Move spend to Ad 5.</p>
              </div>
            </div>

            {/* Card 3: CPA Spike */}
            <div className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border-subtle)] shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-white text-[17px]">CPA spike — act now</h3>
                  <span className="text-[10px] font-mono font-bold bg-[var(--color-status-bad)]/15 border border-[var(--color-status-bad)]/25 px-2 py-0.5 rounded text-[var(--color-status-bad)]">URGENT</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-6">CPA moved from $10 to $16 overnight. $500 spent since the signal appeared.</p>
              </div>
              <div className="bg-[var(--color-surface-alt)] p-4 rounded-xl border border-[var(--color-border-subtle)]">
                <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase mb-1">Cause identified</p>
                <p className="text-sm text-white font-medium">Audience overlap with Retargeting set. Budget redistribution recommended.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comparison Section */}
      <section className="py-24 px-6 relative border-t border-[var(--color-border-subtle)] bg-[var(--color-surface-alt)]/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              Every Team Has Ad Manager. <br />
              <span className="font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                Few Have Intelligence
              </span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              AI Chat Assist vs Manual Campaign Manager — side by side across the dimensions that actually affect client outcomes and retention.
            </p>
          </div>
          
          <ComparisonTable />
        </div>
      </section>

      {/* 7. Decision Package Section */}
      <section className="py-24 px-6 bg-[var(--color-base)] relative overflow-hidden border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              When Something Breaks, <br />
              <span className="font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                You Get the Next Move.
              </span>
            </h2>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-text-muted)] leading-relaxed mb-4">
              Most tools send an alert. AI Chat Assist sends a decision package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
            <div className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border-subtle)] shadow-xl">
              <div className="text-[var(--color-brand-cyan)] font-mono text-[11px] font-bold tracking-wider mb-2">01 ALERT</div>
              <h3 className="font-bold text-white text-lg mb-2">What changed</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Creative fatigue detected. CTR down 28% over 5 days while spend stayed flat.</p>
            </div>
            
            <div className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border-subtle)] shadow-xl">
              <div className="text-[var(--color-brand-cyan)] font-mono text-[11px] font-bold tracking-wider mb-2">02 CAUSE</div>
              <h3 className="font-bold text-white text-lg mb-2">Why it happened</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Frequency increased from 1.9 to 4.1 over the same period. Hook rate is falling. The audience has seen this ad too many times.</p>
            </div>

            <div className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-brand-blue)] shadow-xl shadow-[var(--color-brand-blue)]/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)]" />
              <div className="text-[var(--color-brand-cyan)] font-mono text-[11px] font-bold tracking-wider mb-2">03 RECOMMENDATION</div>
              <h3 className="font-bold text-white text-lg mb-2">What to do</h3>
              <p className="text-white text-sm font-medium leading-relaxed">Pause Ad 3. Refresh the hook. Move budget toward Ad 5, which is performing at $7 CPA with 3x lower frequency.</p>
            </div>
          </div>
          
          <p className="mt-10 text-center text-[var(--color-text-muted)] text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Your media buyer reads it, makes the call, and moves on. No dashboard archaeology. One clear signal with the context to act.
          </p>
        </div>
      </section>

      {/* 8. Campaign Intelligence Layer Does */}
      <section className="py-24 px-6 border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              What the Campaign <br />
              <span className="font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
                Intelligence Layer Does
              </span>
            </h2>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-text-muted)] leading-relaxed">
              Automate the response. Focus on the strategy.
            </p>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              { title: "Campaign triage", desc: "Every active campaign ranked by deterioration and budget exposure. The ones that need a decision today are at the top." },
              { title: "CPA guardrails", desc: "Set your maximum acceptable cost per lead. When actual CPA approaches that threshold, the system flags it with context." },
              { title: "Creative fatigue detection", desc: "Tracks CTR, frequency, hook rate, and engagement decay simultaneously. You know the cause and the recommended next action." },
              { title: "Budget risk detection", desc: "Spend anomalies flagged early, with the campaign context attached. An explanation of what moved, by how much, and what it means." },
            ].map((feature, i) => (
              <motion.div key={i} variants={itemVariants} className="h-full">
                <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-xl h-full shadow-lg hover:border-[var(--color-border-strong)] transition-all">
                  <h3 className="font-bold text-white mb-2 text-base">{feature.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Lead Qualification Block with WA Simulator */}
          <div className="bg-[var(--color-brand-blue)]/5 border border-[var(--color-brand-blue)]/20 rounded-[2rem] p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[var(--color-brand-cyan)] font-semibold text-xs uppercase tracking-widest">The Unreplicable Feature</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Lead Qualification</h3>
                <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed text-[15px]">
                  Meta sees a lead click. It cannot see what happens in the conversation that follows. AI Chat Assist routes every new lead from your Meta campaigns directly into a WhatsApp qualification flow. Before your sales team speaks to anyone, the system has already asked the right questions, scored their intent, and separated genuine buyers from tyre-kickers.
                </p>
                <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-brand-cyan)] text-lg">check_circle</span>
                    What the lead actually needs and when
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-brand-cyan)] text-lg">check_circle</span>
                    Whether they have the budget and decision authority
                  </li>
                </ul>
              </div>

              {/* WA Simulator Column */}
              <div className="relative w-full">
                <div className="relative rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-2xl overflow-hidden p-6 max-w-md mx-auto w-full">
                  {/* WA Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--color-border-subtle)]">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] flex items-center justify-center text-white text-xs font-bold shadow-md shadow-[var(--color-brand-blue)]/20 shrink-0">
                      WA
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">AI Qualification Bot</p>
                      <p className="text-xs text-[var(--color-brand-cyan)] flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-status-good)] animate-pulse" />
                        Online
                      </p>
                    </div>
                  </div>
                  
                  {/* WA Chat Messages */}
                  <div className="space-y-4 min-h-[260px] flex flex-col justify-start">
                    {chatStep >= 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[var(--color-surface-alt)] text-white p-4 rounded-xl rounded-tl-sm w-4/5 text-sm leading-relaxed self-start border border-[var(--color-border-subtle)]"
                      >
                        Hi! Thanks for your interest. May I know which service you&apos;re looking for?
                      </motion.div>
                    )}
                    
                    {chatStep >= 1 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[var(--color-brand-blue)]/25 border border-[var(--color-brand-blue)]/40 text-white p-4 rounded-xl rounded-tr-sm w-4/5 text-sm leading-relaxed self-end"
                      >
                        We need <span className="border border-[var(--color-brand-cyan)]/40 bg-[var(--color-brand-cyan)]/10 px-1 rounded font-medium text-[var(--color-brand-cyan)]">marketing</span> <span className="border border-[var(--color-brand-cyan)]/40 bg-[var(--color-brand-cyan)]/10 px-1 rounded font-medium text-[var(--color-brand-cyan)]">services</span> for our new project <span className="border border-[var(--color-brand-cyan)]/40 bg-[var(--color-brand-cyan)]/10 px-1 rounded font-medium text-[var(--color-brand-cyan)]">launch</span>.
                      </motion.div>
                    )}

                    {chatStep >= 2 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[var(--color-surface-alt)] text-white p-4 rounded-xl rounded-tl-sm w-4/5 text-sm leading-relaxed self-start border border-[var(--color-border-subtle)]"
                      >
                        Great! Are you looking for this service?
                      </motion.div>
                    )}

                    {chatStep >= 3 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[var(--color-surface-alt)] p-4 rounded-xl border border-[var(--color-brand-cyan)]/25 bg-[var(--color-brand-cyan)]/5 w-4/5 text-xs leading-relaxed self-start flex flex-col gap-2"
                      >
                        <div className="text-[10px] font-bold text-[var(--color-brand-cyan)] uppercase tracking-wider">INTENT DETECTION</div>
                        <div className="flex gap-1.5 flex-wrap">
                          <span className="px-2 py-0.5 rounded bg-[var(--color-brand-cyan)]/10 border border-[var(--color-brand-cyan)]/20 text-[var(--color-brand-cyan)] font-medium">[marketing]</span>
                          <span className="px-2 py-0.5 rounded bg-[var(--color-brand-cyan)]/10 border border-[var(--color-brand-cyan)]/20 text-[var(--color-brand-cyan)] font-medium">[services]</span>
                          <span className="px-2 py-0.5 rounded bg-[var(--color-brand-cyan)]/10 border border-[var(--color-brand-cyan)]/20 text-[var(--color-brand-cyan)] font-medium">[launch]</span>
                        </div>
                      </motion.div>
                    )}

                    {chatStep === 4 && (
                      <div className="text-[10px] text-[var(--color-text-muted)] text-center w-full mt-2 italic animate-pulse">
                        Analyzing intent and route signals...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* WA Timeline */}
            <div className="mt-16 pt-12 border-t border-[var(--color-border-subtle)]">
              <h4 className="font-bold text-white mb-6 text-lg">The timeline your customers experience:</h4>
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <span className="text-[var(--color-brand-cyan)] font-bold text-base">Month 1</span>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                    You see which campaigns are wasting budget and why — with the cause and recommended action.
                  </p>
                </div>
                <div>
                  <span className="text-[var(--color-brand-cyan)] font-bold text-base">Month 3</span>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                    You see which conversation patterns produce your best buyers. Your sales team talks to fewer leads and closes more.
                  </p>
                </div>
                <div>
                  <span className="text-[var(--color-brand-cyan)] font-bold text-base">Month 6</span>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                    You have a buyer intelligence model built entirely on your own conversations. No competitor can replicate it.
                  </p>
                </div>
              </div>
              <p className="mt-10 text-center font-semibold text-white italic text-base leading-relaxed">
                &quot;A competitor can copy software. They cannot copy the intelligence your business has built.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Spot Performance Problems stats strip */}
      <section className="py-16 bg-[var(--color-surface-alt)]/30 border-y border-[var(--color-border-subtle)] text-center">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Spot performance problems before they drain your budget</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-extrabold text-[var(--color-brand-cyan)] mb-2">24/7</div>
              <p className="text-sm font-medium text-[var(--color-text-secondary)]">Continuous signal monitoring</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[var(--color-brand-cyan)] mb-2">99.9%</div>
              <p className="text-sm font-medium text-[var(--color-text-secondary)]">Platform uptime reliability</p>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[var(--color-brand-cyan)] mb-2">&lt; 2 hrs</div>
              <p className="text-sm font-medium text-[var(--color-text-secondary)]">Average time to first signal</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Demo Video Section */}
      <section id="demo" className="py-24 px-6 bg-[var(--color-base)] border-b border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See it in 3 minutes
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto leading-relaxed text-base">
            Watch how the system flagged a creative fatigue event, identified the cause, and surfaced the recommended action — before a single rupee of additional budget was wasted.
          </p>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#030F26] border border-[var(--color-border-strong)] aspect-video group cursor-pointer">
            <iframe 
              id="hero-yt-iframe" 
              src="https://www.youtube.com/embed/i2UuGd84ZJU?autoplay=0&rel=0&modestbranding=1" 
              title="How It Works Demo" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full border-0 absolute inset-0 z-10"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button size="lg" className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] hover:opacity-95 text-white" asChild>
              <Link href="/signup">Get a Free Audit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 11. Testimonials */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/30 border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Trusted by teams that needed predictable growth.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="We were running 18 campaigns across three client accounts. AI Chat Assist flagged a CPA spike on a real estate campaign within 36 hours of it starting. We'd have caught it in the weekly review — four days later. That's the difference between a professional conversation and a difficult one."
              name="Avtar Singh"
              title="CEO, AI Soch Studio"
            />
            <TestimonialCard
              quote="Before AI Chat Assist, creative refresh decisions were gut feel and spreadsheets. Now I can see exactly when frequency is hurting performance and rotate before CTR falls. My clients see more consistent CPA and I spend less time explaining variance."
              name="Abhishek Dhakoliya"
              title="Marketing Head, Best Prop Deal"
            />
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-24 px-6 bg-[var(--color-base)]">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Questions About the System.</h2>
          </div>
          <Accordion items={FAQS} />
        </div>
      </section>
    </div>
  )
}
