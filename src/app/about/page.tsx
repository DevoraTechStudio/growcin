"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"

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

export default function AboutPage() {
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
                The Structure of Calm
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Architects of <br className="hidden sm:block" />
                <span className="font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">Calm Systems.</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-xl lg:mx-0 mx-auto font-light">
                Precision engineering. We replace friction with structure.
              </p>
            </motion.div>

            {/* Logic Core Uptime Display Graphic */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center h-[400px] lg:scale-100 scale-90"
            >
              <div className="relative w-80 h-96 p-8 bg-[var(--color-surface-alt)]/90 backdrop-blur-md rounded-3xl border border-[var(--color-border-strong)] flex flex-col justify-between shadow-2xl overflow-hidden">
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-[var(--color-brand-cyan)]/10 blur-[40px] rounded-full" />
                
                <div className="space-y-4">
                  <div className="h-1 bg-[var(--color-border-subtle)] rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] shadow-[0_0_10px_rgba(0,229,255,0.4)]" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider">Logic Core v.05</span>
                    <span className="text-[9px] font-mono text-[var(--color-brand-cyan)] bg-[var(--color-brand-cyan)]/10 border border-[var(--color-brand-cyan)]/25 px-2 py-0.5 rounded">Active</span>
                  </div>
                </div>
                
                <div className="text-center py-6 flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-7xl text-[var(--color-brand-cyan)] animate-[pulse_2s_infinite]">cloud_sync</span>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--color-text-muted)] mt-2 uppercase">Pillar Architecture</span>
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-[var(--color-text-muted)] border-t border-[var(--color-border-subtle)] pt-4">
                  <span>SYSTEM_UPTIME</span>
                  <span className="text-white font-bold">99.98%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Mission Section */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/30 border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4">
                <span className="w-12 h-px bg-[var(--color-brand-cyan)]"></span>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--color-brand-cyan)]">Strategic Direction</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Architecture for the <br />
                <span className="font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">Ambitious.</span>
              </h2>
              
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] font-light leading-relaxed max-w-xl">
                We replace human heroics with engineering-grade infrastructure. When the load increases, our systems don&apos;t sweat — they scale.
              </p>
            </div>

            <div className="space-y-10 lg:pt-16">
              <div className="grid sm:grid-cols-2 gap-8 border-t border-[var(--color-border-subtle)] pt-8">
                <div className="space-y-3">
                  <h4 className="font-bold text-white uppercase text-xs tracking-wider">Foundational Logic</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-light">
                    Infrastructure built on first principles of agency operations, hardened by a decade of trial and failure.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-white uppercase text-xs tracking-wider">The Outcome</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-light">
                    Predictable performance metrics that allow founders to focus on vision rather than firefighting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. History Timeline */}
      <section className="py-24 px-6 relative border-b border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">System History</h2>
            <p className="text-lg text-[var(--color-text-secondary)] font-light italic">The transition from managing people to managing systems.</p>
          </div>
          
          <div className="space-y-16 relative before:content-[''] before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[var(--color-border-subtle)]">
            
            {[
              { 
                tag: "Era 01 / Brute Force", 
                title: "Agency Chaos", 
                desc: "Fragmented workflows, reliance on key individuals, and unsustainable growth loops." 
              },
              { 
                tag: "Era 02 / Standardizing", 
                title: "Blueprint Phase", 
                desc: "Development of the first automated orchestration layers and unified data models." 
              },
              { 
                tag: "Current / High Fidelity", 
                title: "Infrastructure Reliability", 
                desc: "\"The transition from managing people to managing systems.\"" 
              }
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                {/* Node icon dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--color-base)] bg-[var(--color-brand-cyan)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <div className="absolute -inset-1 bg-[var(--color-brand-cyan)]/20 rounded-full blur-xs animate-pulse" />
                </div>
                {/* Timeline Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border-subtle)] shadow-xl hover:border-[var(--color-border-strong)] transition-all">
                  <div className="text-[var(--color-brand-cyan)] font-mono font-bold text-[10px] uppercase tracking-wider mb-2">{item.tag}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* 4. Operating Principles */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white tracking-tight">Principles of Our Operation</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Radical Transparency", 
                desc: "Every process is exposed. No black boxes, just clear, auditable logic trails for every decision.",
                code: "01_INFRA_VIS"
              },
              { 
                title: "Strategic Restraint", 
                desc: "We don't over-engineer. We only apply automation where it provides a definitive structural advantage.",
                code: "02_OP_FOCUS"
              },
              { 
                title: "Systemic Integrity", 
                desc: "A chain is only as strong as its weakest link. We harden every node to ensure 99.9% operational uptime.",
                code: "03_FAIL_SAFE"
              }
            ].map((value, i) => (
              <Card key={i} className="bg-[var(--color-surface)] border border-[var(--color-border-subtle)] hover:border-[var(--color-brand-cyan)]/30 transition-all duration-300">
                <CardContent className="p-8 flex flex-col justify-between h-full min-h-[250px]">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-light">{value.desc}</p>
                  </div>
                  <div className="text-[9px] font-bold font-mono text-[var(--color-text-muted)] mt-6 border-t border-[var(--color-border-subtle)] pt-4 tracking-wider">
                    {value.code}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
