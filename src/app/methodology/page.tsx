"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function MethodologyPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-24 text-white">
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 px-6 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--color-brand-blue)]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[var(--color-brand-cyan)]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:text-left text-center"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border-subtle)] text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-cyan)] lg:mx-0 mx-auto">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-cyan)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-cyan)]"></span>
                </span>
                The Architecture of Persuasion
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                How We Believe <br className="hidden sm:block" />
                Advertising <br />
                <span className="font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">Should Work.</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-xl lg:mx-0 mx-auto font-light">
                Advertising moves businesses forward <span className="text-white font-medium">— or quietly drains them of their potential.</span> We build structural order to ensure linear scalability.
              </p>
            </motion.div>

            {/* Rebuilt 3D Stack Graphic with Sleek animations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center h-[400px] lg:scale-100 scale-90"
            >
              <div className="relative w-80 h-96 transform perspective-[1000px] -rotate-y-[15deg] rotate-x-[10deg] preserve-3d">
                
                {/* Layer 3 (Bottom) */}
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                  className="absolute top-40 w-full h-28 bg-[var(--color-surface-alt)]/40 backdrop-blur-sm border border-[var(--color-border-subtle)] rounded-3xl translate-z-[0px] shadow-2xl flex flex-col justify-end p-5"
                >
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[var(--color-text-muted)] uppercase">LAYER 01</span>
                  <h4 className="text-sm font-bold text-slate-400 mt-1">Logic Core Engine</h4>
                </motion.div>

                {/* Layer 2 (Middle) */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-20 w-full h-28 bg-[var(--color-brand-blue)]/10 backdrop-blur-md border border-[var(--color-border-subtle)] rounded-3xl translate-z-[50px] shadow-2xl flex flex-col justify-end p-5"
                >
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[var(--color-brand-cyan)] uppercase">LAYER 02</span>
                  <h4 className="text-sm font-bold text-white mt-1">Velocity Guardrails</h4>
                </motion.div>

                {/* Layer 1 (Top) */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  whileHover={{ translateZ: 100, rotateY: 5 }}
                  className="absolute top-0 w-full h-28 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-alt)] border border-[var(--color-border-strong)] rounded-3xl translate-z-[100px] shadow-2xl flex items-center justify-between p-6 cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[var(--color-brand-cyan)] uppercase">ACTIVE SYSTEM</span>
                    <h4 className="text-base font-bold text-white mt-1">Programmatic Auditing</h4>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-[var(--color-brand-blue)]/20 border border-[var(--color-brand-blue)]/40 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl text-[var(--color-brand-cyan)]">insights</span>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Reactive vs Structural Section */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/30 border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-20 max-w-3xl mx-auto leading-[1.15]">
            Most Advertising Today Runs On <br />
            <span className="font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">reaction.</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
            
            {/* The Reaction Trap */}
            <div className="p-10 rounded-[3rem] bg-[var(--color-status-bad)]/[0.01] border border-[var(--color-status-bad)]/15 flex flex-col justify-between gap-8">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-status-bad)] mb-2">
                  The Reaction Trap
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                  Reactive management is a cycle of chaos. It treats symptoms (panic shifts, constant budget overrides) while ignoring the structural errors wasting your capital.
                </p>
              </div>

              {/* Tag Cloud with floating micro-animations */}
              <div className="relative h-64 overflow-hidden rounded-2xl bg-[var(--color-surface)]/60 border border-[var(--color-border-subtle)] p-6 flex items-center justify-center">
                <div className="flex flex-wrap gap-3 justify-center max-w-sm relative">
                  {[
                    { text: "HUNCH", rot: 10, del: 0 },
                    { text: "PANIC", rot: -8, del: 0.4 },
                    { text: "BIAS", rot: 30, del: 0.8 },
                    { text: "STRESS", rot: -15, del: 1.2 },
                    { text: "WASTE", rot: 15, del: 1.6 },
                    { text: "MANUAL JUMPS", rot: -6, del: 2 },
                    { text: "ROAS DROP", rot: 5, del: 2.4 }
                  ].map((tag, i) => (
                    <motion.span 
                      key={i}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: tag.del }}
                      style={{ rotate: `${tag.rot}deg` }}
                      className="px-3.5 py-1.5 bg-[var(--color-status-bad)]/10 text-[var(--color-status-bad)] text-xs font-bold border border-[var(--color-status-bad)]/20 rounded-lg shadow-lg cursor-default"
                    >
                      {tag.text}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* The Structural Advantage */}
            <div className="p-10 rounded-[3rem] bg-[var(--color-brand-cyan)]/[0.01] border border-[var(--color-brand-cyan)]/15 flex flex-col justify-between gap-8">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-brand-cyan)] mb-2">
                  The Structural Advantage
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                  Structural scale creates consistent outcomes. By programmatically distributing spend based on intent trends and efficiency drift, you replace worry with scalability.
                </p>
              </div>

              {/* Animated Vertical Bars */}
              <div className="relative h-64 overflow-hidden rounded-2xl bg-[var(--color-surface)]/60 border border-[var(--color-border-subtle)] p-8 flex items-end justify-between gap-4">
                {[
                  { h: "50%", color: "bg-[var(--color-brand-blue)]/20", fill: "bg-[var(--color-brand-blue)]/40", del: 0.2 },
                  { h: "85%", color: "bg-[var(--color-brand-blue)]/30", fill: "bg-[var(--color-brand-cyan)]/40 animate-pulse", del: 0 },
                  { h: "40%", color: "bg-[var(--color-brand-blue)]/10", fill: "bg-[var(--color-brand-blue)]/20", del: 0.6 },
                  { h: "95%", color: "bg-[var(--color-brand-cyan)]/25", fill: "bg-gradient-to-t from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] shadow-[0_0_15px_rgba(0,229,255,0.4)]", del: 0.4 }
                ].map((bar, i) => (
                  <div key={i} className="flex-1 rounded-xl relative overflow-hidden bg-slate-900" style={{ height: bar.h }}>
                    <motion.div 
                      initial={{ height: "0%" }}
                      whileInView={{ height: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: bar.del }}
                      className={`absolute bottom-0 w-full ${bar.fill}`} 
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. First Principle Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative flex justify-center items-center h-[350px]" data-animate="right">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-[var(--color-brand-blue)]/10 border border-[var(--color-brand-blue)]/20 rounded-[2.5rem] rotate-[15deg] transform scale-95" />
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-alt)] border border-[var(--color-border-strong)] rounded-[2.5rem] flex items-center justify-center rotate-[5deg] hover:rotate-0 transition-transform duration-700 shadow-2xl cursor-pointer">
                  <div className="relative size-32 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[var(--color-brand-blue)]/10 blur-xl rounded-full animate-pulse" />
                    <span className="material-symbols-outlined text-8xl text-[var(--color-brand-cyan)] select-none">layers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:text-left text-center">
              <div className="inline-flex items-center gap-4">
                <span className="w-12 h-px bg-[var(--color-brand-cyan)]"></span>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-brand-cyan)]">Our First Principle</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Structure Comes Before <br />
                <span className="font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">Optimization.</span>
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-light max-w-xl lg:mx-0 mx-auto">
                Most agencies optimize for the wrong things. They polish manual dashboards and tweak bids on feel — essentially polishing chaos. We build structural discipline first, programmatically aligning campaign logic before scaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How Decisions Are Made Section */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/20 border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">How Decisions Are Made</h2>
            <p className="text-lg text-[var(--color-text-secondary)] font-light italic">The systemic flow of structural intelligence.</p>
          </div>
          
          <div className="relative">
            {/* Center line for timeline on desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--color-brand-blue)]/10 via-[var(--color-brand-cyan)] to-[var(--color-brand-blue)]/10 -translate-x-1/2 hidden md:block" />

            <div className="space-y-24">
              {[
                { step: "Observe", desc: "24/7 monitoring of market signals and user intent markers across every touchpoint.", icon: "visibility", align: "right" },
                { step: "Interpret", desc: "Raw data is filtered through our logical inference engine to separate true intent signals from auction noise.", icon: "account_tree", align: "left" },
                { step: "Act", desc: "Precise automated shifts to bid levels, pacing velocity, and campaign weights based on predictability.", icon: "bolt", align: "right" },
                { step: "Explain", desc: "Every auto-adjustment is mapped with logical justifications, ensuring complete transparency.", icon: "notes", align: "left" }
              ].map((item, idx) => (
                <div key={idx} className="relative grid md:grid-cols-2 gap-12 items-center group">
                  <div className={`space-y-4 ${item.align === "left" ? "md:text-right md:order-1" : "md:order-2"}`}>
                    <h3 className="text-2xl font-bold text-white">{item.step}</h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm max-w-sm mx-auto md:mx-0 font-light">{item.desc}</p>
                  </div>
                  
                  {/* Central Node Icon */}
                  <div className={`relative flex justify-center ${item.align === "left" ? "md:justify-start md:order-2" : "md:justify-end md:order-1"}`}>
                    <div className="size-20 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border-strong)] shadow-xl flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-3xl text-[var(--color-brand-cyan)]">{item.icon}</span>
                      <div className="absolute -inset-2 bg-[var(--color-brand-cyan)]/5 rounded-full blur-md group-hover:bg-[var(--color-brand-cyan)]/15 transition-all" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Strategic Patience Section */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/40 relative overflow-hidden border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side circular dial mockup */}
            <div className="p-12 rounded-[3.5rem] border border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,229,255,0.03)_0%,_transparent_70%)]" />
              
              <div className="size-48 rounded-full border border-white/10 relative flex items-center justify-center mb-6">
                <div className="absolute inset-0 border-2 border-[var(--color-brand-cyan)]/10 rounded-full animate-[ping_3s_ease-in-out_infinite]" />
                <div className="absolute inset-4 border border-[var(--color-border-subtle)] rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-[var(--color-brand-cyan)]">center_focus_strong</span>
                </div>
                
                {/* SVG circular track spinner */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="96" cy="96" r="88" fill="transparent" stroke="var(--color-brand-cyan)" strokeWidth="3" strokeDasharray="550" strokeDashoffset="140" strokeLinecap="round" className="opacity-60" />
                </svg>
              </div>
              
              <div className="space-y-2 relative z-10">
                <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Calibration Lens Stable</div>
                <div className="text-xl font-bold text-white">Evaluating Auction Drift</div>
                <div className="text-xs text-[var(--color-brand-cyan)] font-mono">Significance: 84.2%</div>
              </div>
            </div>

            <div className="space-y-6 lg:text-left text-center">
              <div className="inline-flex items-center gap-4">
                <span className="w-12 h-px bg-[var(--color-brand-cyan)]"></span>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-brand-cyan)]">Strategic Patience</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Restraint Is Not a Limitation <br />
                <span className="font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">— It’s the Advantage.</span>
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-light max-w-xl lg:mx-0 mx-auto">
                Often, the smartest move is holding your ground. Growcin prevents over-optimization by validating data significance thresholds before adjusting bids. This checks automated volatility spikes, letting performance compound cleanly.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Orchestration */}
      <section className="py-24 px-6 border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Orchestration</h2>
            <p className="text-lg text-[var(--color-text-secondary)] font-light italic">The perfect symbiosis of system and judgment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* The System */}
            <div className="p-10 bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-[2.5rem] relative flex flex-col justify-between hover:border-[var(--color-brand-cyan)]/30 transition-all duration-300">
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-b border-[var(--color-border-subtle)] pb-4">
                  <div className="h-12 w-12 rounded-xl bg-[var(--color-brand-blue)]/20 border border-[var(--color-brand-blue)]/30 flex items-center justify-center text-[var(--color-brand-cyan)] shadow-md shadow-[var(--color-brand-blue)]/10">
                    <span className="material-symbols-outlined text-2xl">memory</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">The System</h4>
                </div>
                
                <ul className="space-y-8">
                  {[
                    { title: "Monitoring", desc: "24/7 vigil over every bid and budget node with nanosecond response." },
                    { title: "Pacing", desc: "Algorithmic spending distributed across periods for maximum efficiency." },
                    { title: "Anomalies", desc: "Instant detection and suppression of platform-level errors." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="h-2 w-2 rounded-full bg-[var(--color-brand-cyan)] mt-2 shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                      <div>
                        <h5 className="font-bold text-white text-base leading-none mb-1">{item.title}</h5>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mt-1 font-light">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* The Human */}
            <div className="p-10 bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-[2.5rem] relative flex flex-col justify-between hover:border-[var(--color-brand-blue)]/30 transition-all duration-300">
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-b border-[var(--color-border-subtle)] pb-4">
                  <div className="h-12 w-12 rounded-xl bg-[var(--color-brand-cyan)]/25 border border-[var(--color-brand-cyan)]/30 flex items-center justify-center text-[var(--color-brand-blue)] shadow-md">
                    <span className="material-symbols-outlined text-2xl">psychology</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">The Human</h4>
                </div>
                
                <ul className="space-y-8">
                  {[
                    { title: "Goals", desc: "Defining ultimate business destination and strategic horizon." },
                    { title: "Positioning", desc: "Crafting core narrative, brand differentiation, and market stance." },
                    { title: "Creative", desc: "Resonating emotionally with the specific needs of target audience." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="h-2 w-2 rounded-full bg-[var(--color-brand-blue)] mt-2" />
                      <div>
                        <h5 className="font-bold text-white text-base leading-none mb-1">{item.title}</h5>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mt-1 font-light">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
