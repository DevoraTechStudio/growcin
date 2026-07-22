"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export default function MethodologyPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-24 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--color-brand-blue)]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[var(--color-brand-cyan)]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface-alt)] border border-[var(--color-border-subtle)] text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-cyan)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-cyan)]" />
                The Architecture of Persuasion
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                How We Believe <br />
                Advertising <br />
                <span className="brand-gradient-text">Should Work.</span>
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-md">
                Advertising moves businesses forward — or quietly drains them of their potential. We design campaign structures that compound over time.
              </p>
            </motion.div>

            {/* 3D Perspective Stack Graphic */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center h-[400px]"
            >
              <div className="relative w-80 h-96 transform perspective-[1000px] rotate-y-[-20deg] rotate-x-[15deg] preserve-3d">
                <div className="absolute top-0 w-full h-24 bg-[var(--color-brand-blue)]/20 backdrop-blur-md border border-[var(--color-border-strong)] rounded-3xl translate-z-[120px] flex items-center justify-center shadow-2xl">
                  <span className="material-symbols-outlined text-4xl text-white">insights</span>
                </div>
                <div className="absolute top-16 w-full h-24 bg-[var(--color-brand-cyan)]/20 backdrop-blur-md border border-[var(--color-border-strong)] rounded-3xl translate-z-[80px] opacity-80" />
                <div className="absolute top-32 w-full h-24 bg-[var(--color-surface-alt)]/60 backdrop-blur-md border border-[var(--color-border-strong)] rounded-3xl translate-z-[40px] opacity-60" />
                <div className="absolute top-48 w-full h-24 bg-[var(--color-surface)]/90 backdrop-blur-md border border-[var(--color-border-strong)] rounded-3xl translate-z-[0px] shadow-2xl flex items-center justify-center">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-text-muted)]">Logic Core</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reactive vs Structural Section */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/30 border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-16 max-w-3xl mx-auto leading-tight">
            Most Advertising Today Runs On <br />
            <span className="brand-gradient-text font-serif italic font-normal">Reaction.</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* The Reaction Trap */}
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-[var(--color-status-bad)]/[0.02] border border-[var(--color-status-bad)]/10 flex flex-col gap-8">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-status-bad)]">
                The Reaction Trap
              </div>
              <div className="relative h-64 overflow-hidden rounded-2xl bg-[var(--color-surface)]/50 border border-[var(--color-border-subtle)] p-6 flex items-center justify-center">
                <div className="flex flex-wrap gap-3 justify-center max-w-sm">
                  {["HUNCH", "PANIC", "BIAS", "STRESS", "WASTE", "MANUAL JUMPS", "ROAS DROP"].map((tag, i) => {
                    const rotations = ["rotate-6", "-rotate-12", "rotate-[25deg]", "-rotate-6", "rotate-12", "-rotate-[15deg]", "rotate-3"];
                    return (
                      <span key={i} className={`px-4 py-2 bg-[var(--color-status-bad)]/10 text-[var(--color-status-bad)] text-xs font-black border border-[var(--color-status-bad)]/20 rounded-lg shadow-md ${rotations[i % rotations.length]}`}>
                        {tag}
                      </span>
                    )
                  })}
                </div>
              </div>
              <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                Reactive optimization is a constant cycle of chaos. It treats symptoms (bid panics, constant adjustments) while ignoring structural errors wasting your capital.
              </p>
            </div>

            {/* The Structural Advantage */}
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-[var(--color-brand-cyan)]/[0.02] border border-[var(--color-brand-cyan)]/10 flex flex-col gap-8">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-brand-cyan)]">
                The Structural Advantage
              </div>
              <div className="relative h-64 overflow-hidden rounded-2xl bg-[var(--color-surface)]/50 border border-[var(--color-border-subtle)] p-8 flex items-end justify-between gap-4">
                <div className="w-1/4 h-3/4 bg-[var(--color-brand-blue)]/20 rounded-xl relative overflow-hidden">
                  <div className="absolute bottom-0 w-full h-1/2 bg-[var(--color-brand-blue)]/40" />
                </div>
                <div className="w-1/4 h-full bg-[var(--color-brand-blue)]/30 rounded-xl relative overflow-hidden">
                  <div className="absolute bottom-0 w-full h-3/4 bg-[var(--color-brand-cyan)]/40 animate-pulse" />
                </div>
                <div className="w-1/4 h-2/3 bg-[var(--color-brand-blue)]/10 rounded-xl relative overflow-hidden">
                  <div className="absolute bottom-0 w-full h-2/3 bg-[var(--color-brand-blue)]/20" />
                </div>
                <div className="w-1/4 h-5/6 bg-[var(--color-brand-cyan)]/20 rounded-xl relative overflow-hidden">
                  <div className="absolute bottom-0 w-full h-1/2 bg-[var(--color-brand-cyan)]/50 shadow-[0_0_15px_var(--color-brand-cyan)]" />
                </div>
              </div>
              <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                Structural scale creates consistent results. By shifting capital programmatically to winning ad schemas, you replace anxiety with linear scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First Principle Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center items-center h-[350px]">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-[var(--color-brand-blue)]/10 border border-[var(--color-brand-blue)]/30 rounded-[2rem] rotate-[12deg] transform" />
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-alt)] border border-[var(--color-border-strong)] rounded-[2rem] flex items-center justify-center rotate-[4deg] hover:rotate-0 transition-transform duration-500">
                  <span className="material-symbols-outlined text-7xl text-[var(--color-brand-cyan)]">layers</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-cyan)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-cyan)]" />
                First Principle
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                Structure Comes Before <br />
                <span className="brand-gradient-text font-serif italic font-normal">Optimization.</span>
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-light">
                Most agencies optimize for the wrong metrics. They audit and tweak campaigns manually, trying to optimize chaos. We focus on stabilizing campaign infrastructure first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Decisions Are Made Section */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/20 border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">How Decisions Are Made</h2>
            <p className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest mt-3">The programmatic intelligence pipeline</p>
          </div>
          
          <div className="relative">
            {/* Center line for timeline on desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--color-brand-blue)]/20 via-[var(--color-brand-cyan)] to-[var(--color-brand-blue)]/20 -translate-x-1/2 hidden md:block" />

            <div className="space-y-24">
              {[
                { step: "Observe", desc: "Constant vigil of performance anomalies, CPA spikes, and conversion velocity across API channels 24/7.", icon: "visibility", align: "right" },
                { step: "Interpret", desc: "Programmatic filtering of temporary auction noise vs. true creative fatigue metrics.", icon: "account_tree", align: "left" },
                { step: "Act", desc: "Automated scaling bounds allocation or bid adjustments executed instantly at the programmatic tier.", icon: "bolt", align: "right" },
                { step: "Explain", desc: "Generating crystal-clear strategic log entries justifying every allocation adjustment for human signoff.", icon: "notes", align: "left" }
              ].map((item, idx) => (
                <div key={idx} className="relative grid md:grid-cols-2 gap-12 items-center group">
                  <div className={`space-y-4 ${item.align === "left" ? "md:text-right md:order-1" : "md:order-2"}`}>
                    <h3 className="text-2xl font-bold text-white">{item.step}</h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-sm mx-auto md:mx-0">{item.desc}</p>
                  </div>
                  
                  {/* Central Node Icon */}
                  <div className={`relative flex justify-center ${item.align === "left" ? "md:justify-start md:order-2" : "md:justify-end md:order-1"}`}>
                    <div className="h-20 w-20 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border-strong)] shadow-xl flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-3xl text-[var(--color-brand-cyan)]">{item.icon}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Patience Section */}
      <section className="py-24 px-6 bg-[var(--color-surface)] relative overflow-hidden border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side circular dial mockup */}
            <div className="p-8 rounded-[2.5rem] border border-[var(--color-border-strong)] bg-[var(--color-surface-alt)]/40 relative overflow-hidden flex flex-col items-center text-center">
              <div className="size-48 rounded-full border-2 border-[var(--color-brand-blue)]/20 relative flex items-center justify-center mb-6">
                <div className="absolute inset-4 border border-[var(--color-brand-cyan)]/40 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-[var(--color-brand-cyan)]">center_focus_strong</span>
                </div>
                {/* SVG circular track spinner */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="96" cy="96" r="88" fill="transparent" stroke="var(--color-brand-cyan)" strokeWidth="4" strokeDasharray="550" strokeDashoffset="100" strokeLinecap="round" className="opacity-80" />
                </svg>
              </div>
              <div className="space-y-2">
                <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider">Calibration Lens Stable</div>
                <div className="text-xl font-bold text-white">Evaluating Auction Drift</div>
                <div className="text-xs text-[var(--color-brand-cyan)] font-mono">Significance: 84.2%</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-cyan)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-cyan)]" />
                Strategic Patience
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Restraint Is Not a Limitation <br />
                <span className="brand-gradient-text font-serif italic font-normal">— It’s the Advantage.</span>
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                Sometimes the smartest optimization move is holding your ground. Growcin prevents over-optimization by confirming true statistical bounds before applying bid shifts.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Orchestration Split */}
      <section className="py-24 px-6 border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Orchestration</h2>
            <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-widest mt-2">The symbiosis of programmatic discipline and creative stance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* The System */}
            <div className="p-8 bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-3xl space-y-6 hover:border-[var(--color-brand-cyan)]/30 transition-all duration-300">
              <div className="flex items-center gap-4 border-b border-[var(--color-border-subtle)] pb-4">
                <div className="h-10 w-10 rounded-xl bg-[var(--color-surface-alt)] flex items-center justify-center text-[var(--color-brand-cyan)]">
                  <span className="material-symbols-outlined">memory</span>
                </div>
                <h4 className="text-xl font-bold text-white">The System</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Continuous data stream ingestion",
                  "programmatic CPA guardrail pacing",
                  "Real-time bid threshold safety overrides",
                  "Cross-channel parameter validation",
                  "Statistical confidence matches"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-cyan)] mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Human */}
            <div className="p-8 bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-3xl space-y-6 hover:border-[var(--color-brand-blue)]/30 transition-all duration-300">
              <div className="flex items-center gap-4 border-b border-[var(--color-border-subtle)] pb-4">
                <div className="h-10 w-10 rounded-xl bg-[var(--color-surface-alt)] flex items-center justify-center text-[var(--color-brand-blue)]">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <h4 className="text-xl font-bold text-white">The Human</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Defining long-term campaign goals",
                  "Core brand narrative & differentiation",
                  "Creative concept design & testing direction",
                  "Unit economics & pricing margins calibration",
                  "Audience motivation insights mapping"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-blue)] mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
