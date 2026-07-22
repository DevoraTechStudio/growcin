"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"
import { Accordion } from "@/components/ui/Accordion"
import { StatusPill } from "@/components/ui/StatusPill"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

const FAQS = [
  { 
    title: "Do I need to replace Meta Ads Manager to use the platform?", 
    content: "No. Growcin connects to your existing ad accounts and layers campaign intelligence and automation on top. Your team keeps full access to Meta Ads Manager." 
  },
  { 
    title: "How long does platform setup usually take?", 
    content: "Most teams go live in under 15 minutes. Connect your ad accounts via OAuth, configure your baseline CPA guardrails, and our indexer immediately begins analyzing your historical trends." 
  },
  { 
    title: "What automation controls can I define?", 
    content: "You keep complete control. You can define budget limits, maximum CPA guardrails, scaling thresholds, and decide whether actions run on Autopilot or require one-click human approval." 
  },
  { 
    title: "Can agencies manage multiple client accounts from one place?", 
    content: "Yes. Growcin is built for multi-account agency operations. You get a global triage dashboard showing performance status across all workspaces, with custom permission tiers for team members." 
  },
  { 
    title: "What channels are currently supported?", 
    content: "We offer native API integrations for Meta Ads, Google Ads, LinkedIn Ads, TikTok Ads, WhatsApp Business API, and Intercom." 
  }
]

export default function PlatformPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-24 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 px-6 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--color-brand-blue)]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[var(--color-brand-cyan)]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface-alt)] border border-[var(--color-border-subtle)] text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-cyan)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-cyan)] animate-pulse" />
                Growth Orchestration Layer
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                This is what happens <br />
                when paid ads <br />
                <span className="brand-gradient-text">stop being manual.</span>
              </h1>
              
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-lg">
                Most growth teams still run campaigns by sheer human effort. Growcin runs them by programmatic design.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] hover:opacity-95 text-white" asChild>
                  <Link href="/signup">Audit My Campaigns</Link>
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="#features">Explore Features</Link>
                </Button>
              </div>
            </motion.div>
            
            {/* Hero Visual Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[450px] lg:h-[550px] w-full hidden md:block"
            >
              {/* Floating Suggestions Widget */}
              <div className="absolute top-10 left-10 w-64 p-5 bg-[var(--color-surface)]/90 backdrop-blur-md rounded-2xl shadow-2xl border border-[var(--color-border-strong)] z-20 animate-float-medium">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-[var(--color-brand-cyan)] text-lg">auto_awesome</span>
                  <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider">AI Suggestion</span>
                </div>
                <div className="h-2 w-full bg-[var(--color-surface-alt)] rounded-full overflow-hidden mb-2">
                  <div className="h-full w-[70%] bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] rounded-full animate-pulse" />
                </div>
                <div className="text-xs font-semibold text-white">Reallocate 15% budget to Reels</div>
              </div>

              {/* Floating Core Dial Widget */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 p-8 bg-[var(--color-surface-alt)]/90 backdrop-blur-md rounded-[2rem] shadow-2xl border border-[var(--color-border-strong)] z-10 text-center">
                <div className="size-16 rounded-2xl bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] flex items-center justify-center text-white shadow-lg mx-auto mb-6">
                  <span className="material-symbols-outlined text-3xl">tune</span>
                </div>
                <h3 className="font-bold text-white text-lg mb-1">Engine Core v2.4</h3>
                <div className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-text-muted)] mb-4">Nominal Operations</div>
                <div className="h-1.5 w-full bg-[var(--color-base)] rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] rounded-full" />
                </div>
              </div>

              {/* Floating Live Signal Graph */}
              <div className="absolute bottom-10 right-4 w-72 p-5 bg-[var(--color-surface)]/90 backdrop-blur-md rounded-2xl shadow-2xl border border-[var(--color-border-strong)] z-20 animate-float-slow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-white">CPA Stability</span>
                  <span className="text-[10px] bg-[var(--color-status-good)]/10 text-[var(--color-status-good)] px-2 py-0.5 rounded-full font-semibold">Active</span>
                </div>
                <svg className="w-full h-12 text-[var(--color-brand-cyan)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 20">
                  <path d="M0 15 Q 25 18 50 12 T 100 6" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Operators Grid Section */}
      <section id="features" className="py-24 px-6 bg-[var(--color-surface-alt)]/30 border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
              Designed for Scale
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
              Agencies And Serious Operators <br /> Don't Scale Manually
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card hoverable className="p-8 bg-[var(--color-surface)] border border-[var(--color-border-subtle)]">
              <CardContent className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-[var(--color-surface-alt)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-brand-cyan)]">
                  <span className="material-symbols-outlined text-2xl">hub</span>
                </div>
                <h3 className="text-xl font-bold text-white">Unified Command Hierarchy</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Establish an immutable hierarchy for enterprise accounts, ensuring data integrity remains absolute across every layer of your global operation.
                </p>
              </CardContent>
            </Card>

            <Card hoverable className="p-8 bg-[var(--color-surface)] border border-[var(--color-border-subtle)]">
              <CardContent className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-[var(--color-surface-alt)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-brand-cyan)]">
                  <span className="material-symbols-outlined text-2xl">balance</span>
                </div>
                <h3 className="text-xl font-bold text-white">Smart Balancing</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Autonomous allocation protocols that shift capital to high-yield segments in real-time, maintaining equilibrium across entire portfolios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-cyan)]">
                The Leakage Risk
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Manual Work Is Invisible <br />
                <span className="brand-gradient-text font-serif italic font-normal">Until It Breaks</span>
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                A missed checkbox, a delayed bid adjustment, or a silent tracking drop. Small human errors compound into massive ad budget waste. Growcin acts as your programmatic shield.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Eliminate budget drift automatically",
                  "Enforce strict spending protocols 24/7",
                  "Instantly recover leaking conversion margins"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-white">
                    <span className="h-6 w-6 rounded-full bg-[var(--color-brand-blue)]/20 border border-[var(--color-brand-blue)]/40 flex items-center justify-center text-[var(--color-brand-cyan)] shrink-0">
                      <span className="material-symbols-outlined text-sm">check</span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual Problem Graphic */}
            <div className="relative p-8 rounded-[2.5rem] bg-[var(--color-surface-alt)]/40 border border-[var(--color-border-subtle)] overflow-hidden shadow-2xl">
              <div className="flex items-center gap-6 mb-10">
                <div className="flex-1 p-5 rounded-2xl bg-[var(--color-surface)]/50 border border-[var(--color-border-subtle)]">
                  <div className="h-2 w-16 bg-[var(--color-brand-blue)]/20 rounded-full mb-3" />
                  <div className="h-2 w-full bg-[var(--color-border-strong)] rounded-full" />
                </div>
                <div className="text-[var(--color-text-muted)]">
                  <span className="material-symbols-outlined text-3xl">arrow_right_alt</span>
                </div>
                <div className="flex-1 p-5 rounded-2xl bg-[var(--color-brand-blue)]/5 border border-[var(--color-brand-blue)]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[var(--color-brand-cyan)] text-3xl opacity-60">widgets</span>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 h-32 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border-subtle)]" />
                <div className="col-span-1 h-32 bg-[var(--color-brand-blue)]/10 rounded-2xl border border-[var(--color-brand-blue)]/20" />
                <div className="col-span-1 h-32 bg-gradient-to-b from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] rounded-2xl shadow-xl -translate-y-4 transition-transform duration-500" />
                <div className="col-span-1 h-32 bg-[var(--color-brand-cyan)]/20 rounded-2xl border border-[var(--color-brand-cyan)]/30" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Assembly & Oversight Sections */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/20 border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative bg-[var(--color-surface)]/70 backdrop-blur-xl p-8 rounded-[2.5rem] border border-[var(--color-border-strong)] shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="col-span-1 h-24 md:h-32 bg-[var(--color-brand-blue)]/5 rounded-2xl border border-[var(--color-border-subtle)]" />
                <div className="col-span-1 h-24 md:h-32 bg-[var(--color-brand-cyan)]/15 rounded-2xl border border-[var(--color-border-subtle)]" />
                <div className="col-span-1 h-24 md:h-32 bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] shadow-xl shadow-[var(--color-brand-blue)]/20 -translate-y-4 rounded-2xl" />
                <div className="col-span-1 h-24 md:h-32 bg-[var(--color-brand-cyan)]/5 rounded-2xl border border-[var(--color-border-subtle)]" />
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[var(--color-surface-alt)]/50 rounded-xl border border-[var(--color-border-subtle)] flex items-center gap-3">
                  <span className="material-symbols-outlined text-[var(--color-status-good)] text-sm">verified</span>
                  <span className="text-xs font-bold text-white">Ad Schema Checked</span>
                </div>
                <div className="p-4 bg-[var(--color-surface-alt)]/50 rounded-xl border border-[var(--color-border-subtle)] flex items-center gap-3">
                  <span className="material-symbols-outlined text-[var(--color-status-good)] text-sm">inventory_2</span>
                  <span className="text-xs font-bold text-white">Structure Validated</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-cyan)]">
                Component Verification
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Campaigns Aren't Built, <br />
                <span className="font-serif italic text-white font-normal">They're Assembled</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Stop setting up ad ad-sets from zero every time. Assemble your growth assets using pre-verified structural blocks, ensuring complete schema consistency before budget is allocated.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Nothing Runs Unchecked */}
      <section className="py-24 px-6 border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-cyan)]">
                Constant Calibration
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Nothing Runs Unchecked
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Our platform provides constant runtime oversight. It doesn't log off or get tired. Every campaign parameter is continuous calibrated against your real business goals, keeping spend aligned.
              </p>
              <div className="flex gap-8 pt-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-status-good)]" />
                  Live indexing 24/7
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-status-good)]" />
                  Continuous calibration
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-[var(--color-surface-alt)]/30 border border-[var(--color-border-subtle)] relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-[10px] uppercase font-bold text-[var(--color-text-muted)] tracking-widest mb-1">Infrastructure Calibration Velocity</div>
                  <div className="text-2xl font-bold text-white">1.2x <span className="text-xs font-semibold text-[var(--color-brand-cyan)] uppercase ml-2 tracking-tighter">Accelerated</span></div>
                </div>
                <div className="h-10 w-10 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border-strong)] flex items-center justify-center text-[var(--color-brand-cyan)]">
                  <span className="material-symbols-outlined text-xl">speed</span>
                </div>
              </div>
              <div className="h-20 bg-[var(--color-surface)]/50 backdrop-blur rounded-xl border border-[var(--color-border-subtle)] p-4 mb-8 flex items-end justify-between gap-1 overflow-hidden">
                {[40, 60, 90, 75, 45, 80, 95, 70, 50, 65, 85, 45].map((height, idx) => (
                  <div key={idx} className="flex-1 bg-[var(--color-brand-blue)]/10 rounded-t-sm relative group h-full">
                    <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-brand-cyan)]" style={{ height: `${height}%` }} />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-4 text-center text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">
                <span>Night</span>
                <span>Morn</span>
                <span className="text-[var(--color-brand-cyan)]">Peak</span>
                <span>Eve</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AI Knows When Not to Act */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/25 border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-cyan)] mb-4">
            AI Signoff Protocol
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">
            AI That Knows <br className="hidden sm:block" /> <span className="font-serif italic text-[var(--color-brand-cyan)] font-normal">When Not to Act</span>
          </h2>
          
          <div className="max-w-2xl mx-auto rounded-[2rem] p-[1px] bg-gradient-to-br from-[var(--color-border-strong)] via-transparent to-[var(--color-border-strong)] overflow-hidden shadow-2xl">
            <div className="bg-[var(--color-surface)] rounded-[1.9rem] p-8 md:p-10 text-left relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--color-brand-blue)]/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="flex justify-between items-center border-b border-[var(--color-border-subtle)] pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] flex items-center justify-center text-white shadow-md">
                    <span className="material-symbols-outlined text-lg">auto_awesome</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">AI Decision Core</h3>
                    <div className="text-[10px] text-[var(--color-text-muted)] font-semibold uppercase tracking-wider">Logic System #5922</div>
                  </div>
                </div>
                <div className="bg-[var(--color-brand-cyan)]/15 text-[var(--color-brand-cyan)] px-3 py-1 rounded-full text-xs font-bold">
                  98% Stability
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">Strategy Hold Recommendation</div>
                  <div className="text-lg text-white font-medium leading-relaxed">
                    "Maintain current bid ceilings. <span className="text-[var(--color-brand-cyan)] font-bold">Action: Hold.</span> CPC inflation volatility remains outside statistical safety parameters."
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[var(--color-surface-alt)] p-4 rounded-xl border border-[var(--color-border-subtle)]">
                    <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mb-1">State</div>
                    <div className="text-lg font-bold text-[var(--color-status-good)]">PROTECTED</div>
                  </div>
                  <div className="bg-[var(--color-surface-alt)] p-4 rounded-xl border border-[var(--color-border-subtle)]">
                    <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Confidence Score</div>
                    <div className="text-lg font-bold text-white">98%</div>
                  </div>
                </div>
                
                <div className="bg-[var(--color-surface-alt)]/50 p-4 rounded-xl border border-[var(--color-border-subtle)] flex items-start gap-3">
                  <span className="material-symbols-outlined text-[var(--color-brand-cyan)] text-sm mt-0.5 animate-pulse">info</span>
                  <div className="text-xs text-[var(--color-text-secondary)] leading-relaxed font-mono">
                    System scanned CPC spikes on Meta node 'B2B_Prospects'. High variance identified. Hold rules applied to preserve margin allocation.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Reporting Section (Waterfall & Curves) */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-cyan)] mb-4">
              Decisions Explained
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Reporting That <br /> <span className="font-serif italic text-white font-normal">Defends Decisions</span>
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] mt-4">
              Your clients and teams don't want spreadsheets of raw numbers. They want clean, transparent context behind every optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Waterfall Chart */}
            <div className="bg-[var(--color-surface)] p-8 rounded-[2.5rem] border border-[var(--color-border-subtle)] shadow-xl relative overflow-hidden">
              <div className="mb-8">
                <div className="text-[10px] uppercase font-bold text-[var(--color-text-muted)] tracking-widest mb-1">Waste & Delta Analysis</div>
                <div className="text-xs text-white font-medium">Optimization Delta Metrics</div>
              </div>
              <div className="flex items-end justify-between h-48 gap-4 mb-8 text-[9px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider">
                <div className="flex flex-col items-center justify-end h-full gap-3 flex-1">
                  <div className="w-full bg-[var(--color-border-strong)] h-full rounded-lg opacity-40" />
                  <span>Budget</span>
                </div>
                <div className="flex flex-col items-center justify-end h-full gap-3 flex-1">
                  <div className="w-full bg-[var(--color-status-warn)]/20 h-[65%] rounded-lg border border-[var(--color-status-warn)]/30" />
                  <span>Yield</span>
                </div>
                <div className="flex flex-col items-center justify-end h-full gap-3 flex-1">
                  <div className="w-full bg-[var(--color-status-bad)]/20 h-[30%] rounded-lg border border-[var(--color-status-bad)]/30" />
                  <span>Waste</span>
                </div>
                <div className="flex flex-col items-center justify-end h-full gap-3 flex-1">
                  <div className="w-full bg-[var(--color-status-good)]/20 h-[50%] rounded-lg border border-[var(--color-status-good)]/30" />
                  <span>Saved</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest border-t border-[var(--color-border-subtle)] pt-4">
                <span>Managed: $100k</span>
                <span className="text-[var(--color-status-good)]">Recovered: $24k</span>
              </div>
            </div>

            {/* Saturation Curve Chart */}
            <div className="bg-[var(--color-surface)] p-8 rounded-[2.5rem] border border-[var(--color-border-subtle)] shadow-xl relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-[10px] uppercase font-bold text-[var(--color-text-muted)] tracking-widest mb-1">Exposure Saturation Decay Curves</div>
                  <div className="text-xs text-white font-medium">Projected Creative Fatigue</div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] text-[var(--color-text-muted)] uppercase font-bold tracking-widest">Decay Rate</div>
                  <div className="text-2xl font-bold text-[var(--color-status-bad)] font-mono">-14.2%</div>
                </div>
              </div>
              <div className="relative h-48 w-full flex items-center justify-center mb-4">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  
                  {/* Curve path */}
                  <path d="M0,5 Q50,12 100,42" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" strokeDasharray="3 1" />
                  <path d="M0,5 Q50,12 100,42" fill="none" stroke="url(#decayGrad)" strokeWidth="2.5" strokeLinecap="round" />
                  
                  <defs>
                    <linearGradient id="decayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--color-brand-blue)" />
                      <stop offset="100%" stopColor="var(--color-status-bad)" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="42" r="3" fill="var(--color-status-bad)" />
                </svg>
              </div>
              <div className="border-t border-[var(--color-border-subtle)] pt-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-status-bad)] animate-ping" />
                <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider">Critical threshold reached at: <span className="text-white font-bold">18.4 Hours</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/30 border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Platform FAQ</h2>
          <Accordion items={FAQS} />
        </div>
      </section>
    </div>
  )
}
