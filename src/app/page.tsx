"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, Variants, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { DashboardCard } from "@/components/marketing/DashboardCard"
import { LogoMarquee } from "@/components/marketing/LogoMarquee"
import { ComparisonTable } from "@/components/marketing/ComparisonTable"
import { LiveSimulator } from "@/components/marketing/LiveSimulator"
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
    title: "How does the detection actually work?",
    content: "Growcin continuously analyzes real-time API feeds from your ad accounts and chat channels, identifying statistical anomalies and intent decay patterns before they surface in standard 24-hour reporting windows."
  },
  {
    title: "What exactly is a guardrail?",
    content: "A guardrail is an automated safety mechanism. For example, if CPA spikes by 30% in a 4-hour window, the guardrail automatically pauses the campaign and alerts you, preventing budget burn while you sleep."
  },
  {
    title: "How does fatigue monitoring work?",
    content: "We track the velocity of engagement and conversion rate decay. When the system detects the early mathematical signs of creative or audience fatigue, it recommends a refresh before performance completely flatlines."
  },
  {
    title: "What does lead qualification do?",
    content: "Growcin monitors conversations on WhatsApp and your website chat, scoring leads in real-time based on their intent signals and routing high-value prospects immediately."
  },
  {
    title: "Does this replace my existing ad tools?",
    content: "No. Growcin sits on top of your existing platforms (Meta, Google, etc.) as an orchestration and intelligence layer. It tells you what to do within those platforms."
  },
  {
    title: "Why not just use native platform alerts?",
    content: "Native alerts are often delayed, platform-biased, and lack cross-channel context. Growcin provides a unified, objective view of your entire growth ecosystem."
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

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              style={{ opacity: heroOpacity, y: heroY }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface-alt)] border border-[var(--color-border-subtle)] text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-cyan)] mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-cyan)] animate-pulse" />
                Meta Campaign Intelligence
              </div>
              
              <h1 className="text-[44px] md:text-[64px] font-bold leading-[1.08] tracking-tight text-white mb-6">
                Your campaigns <br className="hidden sm:block" />
                are leaking <br />
                <span className="inline-block overflow-hidden align-bottom h-[1.2em] relative min-w-[200px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={CYCLING_WORDS[wordIndex]}
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -24, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute left-0 font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent"
                    >
                      {CYCLING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
              
              <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed max-w-xl">
                While others target by age and interest, we read real buying behaviour—so your ads reach people already in motion, not people who might be someday.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] hover:opacity-95 text-white" asChild>
                  <Link href="/signup">Audit My Campaigns</Link>
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="#simulator">See how it works</Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)] font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[var(--color-status-good)] text-base">check_circle</span>
                  Real behaviour signals
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[var(--color-status-good)] text-base">check_circle</span>
                  Not demographics
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[var(--color-status-good)] text-base">check_circle</span>
                  CPA Guardrails
                </div>
              </div>
            </motion.div>
            
            {/* Hero Visuals */}
            <div className="relative h-[400px] lg:h-[600px] w-full hidden md:block">
              <DashboardCard type="suggestion" className="top-4 left-4 lg:top-8 lg:left-8 z-20" delay={0.5} />
              <DashboardCard type="intent" className="top-8 right-4 lg:top-16 lg:right-8 z-20" delay={1.8} />
              <DashboardCard type="alert" className="bottom-16 left-8 lg:bottom-24 lg:left-16 z-30" delay={1.2} />
              <DashboardCard type="health" className="bottom-4 right-4 lg:bottom-8 lg:right-12 z-10" delay={0} />
              
              {/* Decorative Background Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-blue)]/5 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[var(--color-brand-cyan)]/10 blur-[80px] rounded-full pointer-events-none" />
            </div>
            
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <LogoMarquee />

      {/* Problem Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
              The Invisible Drain
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
              Growth doesn't break. <br className="hidden md:block" /> It slowly drifts.
            </h2>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: "trending_down", stat: "+5.2% Drift", title: "Invisible Inefficiency", desc: "Small, daily increases in CPA that go unnoticed until they've compounded into major budget waste over the month." },
              { icon: "warning", stat: "34% Missed", title: "Delayed Interventions", desc: "By the time a human checks the dashboard, the opportunity has passed or the budget has already burned." },
              { icon: "group_remove", stat: "2.5x Cost", title: "Audience Fatigue", desc: "Creative decay happens logarithmically. Continuing to spend on a burned-out audience destroys your ROAS." },
            ].map((card, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card hoverable className="h-full">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-[var(--color-surface-alt)] flex items-center justify-center border border-[var(--color-border-subtle)] mb-4 text-[var(--color-text-secondary)]">
                      <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                    </div>
                    <div className="text-sm font-bold text-[var(--color-status-bad)] mb-2">{card.stat}</div>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{card.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Proof Story Panel */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/30 border-y border-[var(--color-border-subtle)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-full bg-gradient-to-l from-[var(--color-brand-blue)]/5 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-cyan)] mb-4">
                Real-World Impact
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Caught before anyone even noticed.
              </h2>
              <div className="space-y-6 text-[var(--color-text-secondary)] text-lg leading-relaxed">
                <p>
                  <strong>Situation:</strong> An agency's client launched a Black Friday weekend push. A sudden tracking failure caused Meta to optimize for the wrong event, rapidly spending budget on zero-intent traffic.
                </p>
                <p>
                  <strong>What we caught:</strong> At 2:00 AM, Growcin detected a <span className="text-white font-medium">400% spike in intent-to-conversion disparity</span>.
                </p>
                <p>
                  <strong>Outcome:</strong> Growcin automatically engaged the guardrail, pausing the specific ad set and alerting the team. The campaign was fixed by 8:00 AM.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <Card className="bg-[var(--color-surface)] sm:col-span-2">
                <CardContent className="p-8 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-[var(--color-text-secondary)] font-medium mb-1">Time to detection</div>
                    <div className="text-3xl font-bold text-white">Day 2</div>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-[var(--color-brand-blue)]/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--color-brand-cyan)]">timer</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[var(--color-surface)]">
                <CardContent className="p-8">
                  <div className="text-sm text-[var(--color-text-secondary)] font-medium mb-1">Budget saved</div>
                  <div className="text-3xl font-bold text-[var(--color-status-good)]">
                    $<StatNumber value={12450} duration={1500} />
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-2">Illustrative example</div>
                </CardContent>
              </Card>
              <Card className="bg-[var(--color-surface)]">
                <CardContent className="p-8">
                  <div className="text-sm text-[var(--color-text-secondary)] font-medium mb-1">Escalations</div>
                  <div className="text-3xl font-bold text-white">
                    <StatNumber value={0} />
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-2">Seamless mitigation</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Anomaly Simulator Section */}
      <section id="simulator" className="py-24 px-6 relative overflow-hidden bg-[var(--color-surface-alt)]/20 border-b border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Defend your budget in real time
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Run the interactive console below to watch our live indexer scan active ad sets, flag unexpected CPA drift, and execute API guardrails instantly.
            </p>
          </div>
          <LiveSimulator />
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Manual growth work vs Growcin
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              We build the system so you don't have to babysit it. Here is what changes when you move from execution to orchestration.
            </p>
          </div>
          
          <ComparisonTable />
        </div>
      </section>

      {/* Core Feature Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { icon: "medical_services", title: "Campaign Triage", desc: "Instantly categorizes campaigns by health and urgency, showing exactly what needs attention right now." },
              { icon: "security", title: "Automated Guardrails", desc: "Set bounds on CPA, spend velocity, and ROAS. Growcin acts defensively when limits are breached." },
              { icon: "battery_charging_20", title: "Fatigue Detection", desc: "Mathematical modeling of creative decay, predicting performance cliffs before they happen." },
              { icon: "account_balance_wallet", title: "Budget Risk Analysis", desc: "Real-time reallocation suggestions to shift spend from deteriorating channels to high-momentum ones." },
            ].map((feature, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card hoverable className="h-full group">
                  <CardContent className="p-8 flex items-start gap-6">
                    <div className="h-14 w-14 shrink-0 rounded-2xl bg-[var(--color-surface-alt)] flex items-center justify-center border border-[var(--color-border-subtle)] group-hover:border-[var(--color-brand-cyan)] transition-colors">
                      <span className="material-symbols-outlined text-3xl text-[var(--color-text-secondary)] group-hover:text-[var(--color-brand-cyan)] transition-colors">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">{feature.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/30 border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Unprecedented <br /> cross-channel qualification.
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                The hardest part of growth is connecting ad spend to actual lead quality. Growcin qualifies leads across WhatsApp and web chat natively.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Captures conversational intent nuance",
                  "Scores leads instantly in real-time",
                  "Feeds quality signals back to ad platforms",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[var(--color-brand-cyan)]">check</span>
                    <span className="text-[var(--color-text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Timeline */}
              <div className="flex items-center justify-between border-t border-[var(--color-border-subtle)] pt-8">
                <div>
                  <div className="text-xs font-bold text-[var(--color-text-muted)] uppercase mb-1">Month 1</div>
                  <div className="font-semibold text-white">Detection</div>
                </div>
                <div className="flex-1 h-px bg-[var(--color-border-subtle)] mx-4" />
                <div>
                  <div className="text-xs font-bold text-[var(--color-text-muted)] uppercase mb-1">Month 3</div>
                  <div className="font-semibold text-white">Prevention</div>
                </div>
                <div className="flex-1 h-px bg-[var(--color-border-subtle)] mx-4" />
                <div>
                  <div className="text-xs font-bold text-[var(--color-brand-cyan)] uppercase mb-1">Month 6</div>
                  <div className="font-semibold text-[var(--color-brand-cyan)]">Compounding</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-2xl overflow-hidden p-6"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--color-border-subtle)]">
                <span className="material-symbols-outlined text-[var(--color-status-good)]">forum</span>
                <span className="font-semibold text-white">WhatsApp Intel</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[var(--color-surface-alt)] p-4 rounded-xl rounded-tl-sm w-4/5">
                  <div className="text-sm text-[var(--color-text-secondary)]">Hi, I need an enterprise solution for 50 seats.</div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[var(--color-brand-blue)]/20 border border-[var(--color-brand-blue)]/30 p-4 rounded-xl rounded-tr-sm w-4/5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-[var(--color-brand-cyan)]">Growcin Analysis</span>
                      <span className="text-xs bg-[var(--color-status-good)]/20 text-[var(--color-status-good)] px-2 py-0.5 rounded-full">High Intent</span>
                    </div>
                    <div className="text-sm text-white">Route to Senior AE. Feeding signal back to Meta Campaign 'B2B_Prospecting'.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-20 px-6 border-b border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <StatNumber value={99.9} decimals={1} suffix="%" />
              </div>
              <div className="text-sm text-[var(--color-text-secondary)] font-medium">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <StatNumber value={24} suffix="/7" />
              </div>
              <div className="text-sm text-[var(--color-text-secondary)] font-medium">Monitoring Cadence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <StatNumber value={3} suffix="m" />
              </div>
              <div className="text-sm text-[var(--color-text-secondary)] font-medium">Time-to-Signal</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                $<StatNumber value={2.4} decimals={1} suffix="M+" />
              </div>
              <div className="text-sm text-[var(--color-text-secondary)] font-medium">Spend Managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            See it in action
          </h2>
          
          <div className="aspect-video w-full rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border-strong)] flex flex-col items-center justify-center mb-10 shadow-2xl relative overflow-hidden group cursor-pointer">
            {/* Mock Dashboard Visual Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-base)] via-[var(--color-surface-alt)]/60 to-[var(--color-brand-blue)]/10 opacity-70 pointer-events-none" />
            
            {/* Mock Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Mock Chart Paths */}
            <svg className="absolute bottom-20 left-0 w-full h-1/2 opacity-20 pointer-events-none" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <path d="M0,150 Q150,50 300,120 T600,40 T900,100 L1000,80 L1000,200 L0,200 Z" fill="url(#grad)" />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-brand-cyan)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--color-brand-blue)" stopOpacity="0.0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glassmorphic Mock Metric Panels */}
            <div className="absolute top-8 left-8 right-8 flex justify-between pointer-events-none opacity-50 group-hover:opacity-75 transition-opacity duration-500">
              <div className="bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border-subtle)] rounded-xl p-4 flex flex-col gap-1 shadow-lg text-left">
                <span className="text-[10px] text-[var(--color-text-muted)] font-bold uppercase tracking-wider">Active Guardrails</span>
                <span className="text-sm md:text-lg font-mono font-bold text-[var(--color-status-good)]">14 Operational</span>
              </div>
              <div className="bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border-subtle)] rounded-xl p-4 flex flex-col gap-1 shadow-lg text-left hidden sm:flex">
                <span className="text-[10px] text-[var(--color-text-muted)] font-bold uppercase tracking-wider">Live CPA Velocity</span>
                <span className="text-sm md:text-lg font-mono font-bold text-[var(--color-status-warn)]">-12.4% Decay</span>
              </div>
              <div className="bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border-subtle)] rounded-xl p-4 flex flex-col gap-1 shadow-lg text-left">
                <span className="text-[10px] text-[var(--color-text-muted)] font-bold uppercase tracking-wider">Wasted Spend Blocked</span>
                <span className="text-sm md:text-lg font-mono font-bold text-white">$4,820</span>
              </div>
            </div>

            {/* Overlay Gradient on Hover */}
            <div className="absolute inset-0 bg-[var(--color-base)]/40 transition-colors group-hover:bg-[var(--color-base)]/20 z-10" />
            
            {/* Play Button Container */}
            <div className="relative z-20 flex flex-col items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] flex items-center justify-center pl-2 shadow-2xl transition-transform group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                <span className="material-symbols-outlined text-4xl text-white">play_arrow</span>
              </div>
            </div>
            
            {/* Premium Video Control Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[var(--color-base)]/90 to-transparent z-20 flex items-center justify-between border-t border-[var(--color-border-subtle)]/50 backdrop-blur-xs">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-white text-base">play_arrow</span>
                <span className="text-[11px] font-mono text-[var(--color-text-secondary)]">0:00 / 2:15</span>
              </div>
              <div className="text-[11px] font-semibold text-white tracking-wide uppercase flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-cyan)] animate-pulse" />
                Growcin Platform Demo
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[var(--color-text-secondary)] hover:text-white text-base">volume_up</span>
                <span className="material-symbols-outlined text-[var(--color-text-secondary)] hover:text-white text-base">fullscreen</span>
              </div>
            </div>
          </div>
          
          <Button size="lg" asChild>
            <Link href="/signup">Book a personalized walkthrough</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/30 border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Trusted by the best
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Growcin is like having a senior media buyer that never sleeps. It caught a massive tracking bug on a weekend that would have cost us thousands before Monday morning."
              name="Jane Doe"
              title="VP of Growth, TechCorp"
            />
            <TestimonialCard
              quote="We manage 40+ client accounts. The dashboard gives us a prioritized triage list every morning. Our team's efficiency has doubled because we aren't clicking through endless Ads Manager tabs."
              name="John Smith"
              title="Founder, AgencyX"
            />
          </div>
        </div>
      </section>

      {/* Channels Strip */}
      <section className="py-16 px-6 border-b border-[var(--color-border-subtle)] text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-widest mb-8">
            Natively Integrated
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {/* Placeholder chips for channels */}
            {["Meta Ads", "Google Ads", "LinkedIn", "TikTok Ads", "WhatsApp", "Intercom"].map((channel) => (
              <div key={channel} className="px-6 py-3 rounded-full bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] font-medium text-sm flex items-center gap-2 transition-colors hover:text-white hover:border-[var(--color-border-strong)]">
                {channel}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <Accordion items={FAQS} />
        </div>
      </section>
    </div>
  )
}
