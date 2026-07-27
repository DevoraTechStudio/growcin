"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { LogoMarquee } from "@/components/marketing/LogoMarquee"

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

export default function CaseStudiesIndexPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 px-6 text-center">
        {/* Background Patterns & Grid */}
        <div className="absolute inset-0 hero-grid-pattern pointer-events-none opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-base)] to-[var(--color-base)] pointer-events-none" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-20 left-[15%] w-[350px] h-[350px] bg-gradient-to-br from-[var(--color-brand-blue)]/5 to-[var(--color-brand-cyan)]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 right-[15%] w-[300px] h-[300px] bg-gradient-to-bl from-[var(--color-brand-cyan)]/5 to-[var(--color-brand-blue)]/5 rounded-full blur-[90px] pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border-subtle)] shadow-sm mb-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-brand-cyan)]">
              Case Study: Architecture of Success
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] text-white tracking-tight mb-6">
            When Structure <br className="hidden sm:block" />
            Replaces <span className="font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">Stress.</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed font-medium mb-4">
            How a founder-led brand reduced wasted spend, improved lead quality, and stopped babysitting their ads.
          </p>
        </div>
      </section>

      {/* 2. Brand Logos Marquee */}
      <LogoMarquee />

      {/* 3. Performance Transformations */}
      <section id="stories" className="py-24 px-6 border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Performance <span className="font-serif italic font-normal bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">Transformations</span>
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
              Architectural breakdowns of how structural logic replaces manual chaos.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-28"
          >
            {/* Story 1: Bliss International */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border-subtle)] flex items-center justify-center font-bold text-white shadow-sm shrink-0">
                    BI
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">Bliss International</h3>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] mt-0.5">Education Sector • Automated Budgeting</p>
                  </div>
                </div>
                
                <blockquote className="mt-6 text-lg text-[var(--color-text-secondary)] italic leading-relaxed border-l-4 border-[var(--color-brand-blue)]/50 pl-6">
                  &quot;We shifted from evenly distributed budgets to <span className="text-[var(--color-brand-cyan)] font-semibold not-italic">Smart Budget Optimization</span>. The system now autonomously reallocates spend to high-conversion hours.&quot;
                </blockquote>

                <div className="grid grid-cols-2 gap-3 mt-8">
                  {[
                    { label: "Inquiries", val: "+39%" },
                    { label: "Walk-ins", val: "+33%" },
                    { label: "Calls", val: "+28%" },
                    { label: "Conv. Lift", val: "30%", highlight: true }
                  ].map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[var(--color-surface)] rounded-2xl p-5 shadow-md border border-[var(--color-border-subtle)]"
                    >
                      <span className="font-mono text-[9px] uppercase tracking-widest block mb-2 text-[var(--color-text-muted)]">{stat.label}</span>
                      <div className={`font-bold text-2xl mb-1 ${stat.highlight ? "text-[var(--color-brand-cyan)]" : "text-white"}`}>
                        {stat.val}
                      </div>
                      <div className={`h-0.5 w-12 rounded-full ${stat.highlight ? "bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)]" : "bg-[var(--color-border-subtle)]"}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart Visual Graphic */}
              <div className="bg-[var(--color-surface)] rounded-3xl p-6 shadow-2xl border border-[var(--color-border-strong)] relative h-72 flex flex-col justify-end">
                <span className="font-mono text-[9px] text-[var(--color-text-muted)] uppercase tracking-widest absolute top-5 right-5">SMART_ALLOCATION_V2</span>
                <div className="flex-1 flex items-end justify-center gap-4 pb-2">
                  <div className="flex flex-col items-center gap-1 relative w-12">
                    <div className="w-full rounded-t-md bg-[var(--color-surface-alt)]" style={{ height: "40px" }} />
                    <span className="text-[9px] font-mono text-[var(--color-text-muted)]">Mon</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 relative w-12">
                    <div className="w-full rounded-t-md bg-[var(--color-surface-alt)]" style={{ height: "65px" }} />
                    <span className="text-[9px] font-mono text-[var(--color-text-muted)]">Tue</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 relative w-12">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[var(--color-surface)] shadow-lg border border-[var(--color-border-subtle)] px-2 py-0.5 rounded-full text-[9px] font-semibold text-[var(--color-text-secondary)] whitespace-nowrap">Audit</div>
                    <div className="w-full rounded-t-md bg-[var(--color-brand-blue)]/40" style={{ height: "100px" }} />
                    <span className="text-[9px] font-mono text-[var(--color-text-muted)]">Wed</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 relative w-12">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[var(--color-surface)] shadow-lg border border-[var(--color-border-subtle)] px-2 py-0.5 rounded-full text-[9px] font-semibold text-[var(--color-brand-cyan)] whitespace-nowrap">Peak</div>
                    <div className="w-full rounded-t-md bg-[var(--color-brand-blue)]/60" style={{ height: "135px" }} />
                    <span className="text-[9px] font-mono text-[var(--color-text-muted)]">Thu</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 relative w-12">
                    <div className="w-full rounded-t-md bg-gradient-to-t from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] shadow-[0_0_20px_rgba(0,229,255,0.2)]" style={{ height: "160px" }} />
                    <span className="text-[9px] font-mono text-[var(--color-brand-cyan)] font-bold">Fri</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Story 2: The Travel Saga */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Radar Graphic (Desktop) */}
              <div className="hidden lg:block bg-[var(--color-surface)] rounded-3xl p-6 shadow-2xl border border-[var(--color-border-strong)] relative h-72 flex items-center justify-center">
                <span className="font-mono text-[9px] text-[var(--color-text-muted)] uppercase tracking-widest absolute top-5 right-5">INTENT_RADAR_ACTIVE</span>
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="absolute rounded-full border border-[var(--color-border-subtle)] w-12 h-12" />
                  <div className="absolute rounded-full border border-[var(--color-border-subtle)] w-24 h-24" />
                  <div className="absolute rounded-full border border-[var(--color-border-subtle)] w-36 h-36" />
                  <div className="absolute rounded-full border border-[var(--color-border-strong)] w-48 h-48" />
                  
                  {/* Rotating Sweeper */}
                  <div className="absolute w-[96px] h-[1.5px] origin-left left-1/2 top-1/2 overflow-hidden animate-[spin_6s_linear_infinite]" style={{ transformOrigin: "left center" }}>
                    <div className="w-full h-full bg-gradient-to-r from-transparent to-[var(--color-brand-cyan)]" />
                  </div>
                  
                  {/* Target Dots */}
                  <div className="absolute w-2 h-2 rounded-full bg-[var(--color-brand-cyan)] shadow-[0_0_10px_rgba(0,229,255,0.8)] animate-ping" style={{ top: "40px", right: "60px" }} />
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-[var(--color-brand-cyan)]" style={{ top: "40px", right: "60px" }} />
                  
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-[var(--color-brand-blue)]" style={{ bottom: "50px", left: "40px" }} />
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-slate-500" style={{ top: "70px", left: "60px" }} />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border-subtle)] flex items-center justify-center font-bold text-white shadow-sm shrink-0">
                    TS
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">The Travel Saga</h3>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] mt-0.5">Hospitality • Intent Targeting</p>
                  </div>
                </div>
                
                <blockquote className="mt-6 text-lg text-[var(--color-text-secondary)] italic leading-relaxed border-l-4 border-[var(--color-brand-blue)]/50 pl-6">
                  &quot;We moved from broad targeting to <span className="text-[var(--color-brand-cyan)] font-semibold not-italic">Intent-based Optimization</span>. This allowed us to capture high-intent travelers right when they were ready to book.&quot;
                </blockquote>

                <div className="grid grid-cols-2 gap-3 mt-8">
                  {[
                    { label: "Qualified Leads", val: "+41%" },
                    { label: "CPL Reduced", val: "29%" },
                    { label: "Booking Lift", val: "+34%" },
                    { label: "ROAS", val: "2.3x", highlight: true }
                  ].map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[var(--color-surface)] rounded-2xl p-5 shadow-md border border-[var(--color-border-subtle)]"
                    >
                      <span className="font-mono text-[9px] uppercase tracking-widest block mb-2 text-[var(--color-text-muted)]">{stat.label}</span>
                      <div className={`font-bold text-2xl mb-1 ${stat.highlight ? "text-[var(--color-brand-cyan)]" : "text-white"}`}>
                        {stat.val}
                      </div>
                      <div className={`h-0.5 w-12 rounded-full ${stat.highlight ? "bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)]" : "bg-[var(--color-border-subtle)]"}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Radar Graphic (Mobile) */}
              <div className="lg:hidden bg-[var(--color-surface)] rounded-3xl p-6 shadow-2xl border border-[var(--color-border-strong)] relative h-72 flex items-center justify-center">
                <span className="font-mono text-[9px] text-[var(--color-text-muted)] uppercase tracking-widest absolute top-5 right-5">INTENT_RADAR_ACTIVE</span>
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="absolute rounded-full border border-[var(--color-border-subtle)] w-12 h-12" />
                  <div className="absolute rounded-full border border-[var(--color-border-subtle)] w-24 h-24" />
                  <div className="absolute rounded-full border border-[var(--color-border-subtle)] w-36 h-36" />
                  <div className="absolute rounded-full border border-[var(--color-border-strong)] w-48 h-48" />
                  
                  <div className="absolute w-[96px] h-[1.5px] origin-left left-1/2 top-1/2 overflow-hidden animate-[spin_6s_linear_infinite]" style={{ transformOrigin: "left center" }}>
                    <div className="w-full h-full bg-gradient-to-r from-transparent to-[var(--color-brand-cyan)]" />
                  </div>
                  
                  <div className="absolute w-2 h-2 rounded-full bg-[var(--color-brand-cyan)] shadow-[0_0_10px_rgba(0,229,255,0.8)] animate-ping" style={{ top: "40px", right: "60px" }} />
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-[var(--color-brand-cyan)]" style={{ top: "40px", right: "60px" }} />
                </div>
              </div>
            </motion.div>

            {/* Story 3: BestPropDeal */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border-subtle)] flex items-center justify-center font-bold text-white shadow-sm shrink-0">
                    BP
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">BestPropDeal</h3>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] mt-0.5">Real Estate • Decision Mapping</p>
                  </div>
                </div>
                
                <blockquote className="mt-6 text-lg text-[var(--color-text-secondary)] italic leading-relaxed border-l-4 border-[var(--color-brand-blue)]/50 pl-6">
                  &quot;We implemented <span className="text-[var(--color-brand-cyan)] font-semibold not-italic">Decision Density Mapping</span>. By aligning bids with high-decision hours, we dramatically improved site visit quality.&quot;
                </blockquote>

                <div className="grid grid-cols-2 gap-3 mt-8">
                  {[
                    { label: "Qual. Leads", val: "+35%" },
                    { label: "CPL Cut", val: "27%" },
                    { label: "Site Visits", val: "+30%" },
                    { label: "ROAS", val: "2.5x", highlight: true }
                  ].map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[var(--color-surface)] rounded-2xl p-5 shadow-md border border-[var(--color-border-subtle)]"
                    >
                      <span className="font-mono text-[9px] uppercase tracking-widest block mb-2 text-[var(--color-text-muted)]">{stat.label}</span>
                      <div className={`font-bold text-2xl mb-1 ${stat.highlight ? "text-[var(--color-brand-cyan)]" : "text-white"}`}>
                        {stat.val}
                      </div>
                      <div className={`h-0.5 w-12 rounded-full ${stat.highlight ? "bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)]" : "bg-[var(--color-border-subtle)]"}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Heatmap Graphic Grid */}
              <div className="bg-[var(--color-surface)] rounded-3xl p-6 shadow-2xl border border-[var(--color-border-strong)] relative h-72 flex flex-col justify-center items-center">
                <span className="font-mono text-[9px] text-[var(--color-text-muted)] uppercase tracking-widest absolute top-5 right-5">HEATMAP_3D_VIEW</span>
                <div className="grid gap-2 grid-cols-4">
                  <div className="w-12 h-11 rounded bg-transparent border border-dashed border-[var(--color-border-subtle)]" />
                  <div className="w-12 h-11 rounded bg-[var(--color-brand-blue)]/10 border border-[var(--color-brand-blue)]/20" />
                  <div className="w-12 h-11 rounded bg-[var(--color-brand-blue)]/20 border border-[var(--color-brand-blue)]/30" />
                  <div className="w-12 h-11 rounded bg-transparent border border-dashed border-[var(--color-border-subtle)]" />
                  
                  <div className="w-12 h-11 rounded bg-[var(--color-brand-blue)]/20 border border-[var(--color-brand-blue)]/30" />
                  <div className="w-12 h-11 rounded bg-gradient-to-tr from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] shadow-[0_0_15px_rgba(0,229,255,0.4)] animate-pulse" />
                  <div className="w-12 h-11 rounded bg-[var(--color-brand-cyan)]/20 border border-[var(--color-brand-cyan)]/30" />
                  <div className="w-12 h-11 rounded bg-transparent border border-dashed border-[var(--color-border-subtle)]" />
                  
                  <div className="w-12 h-11 rounded bg-[var(--color-brand-blue)]/30 border border-[var(--color-brand-blue)]/40" />
                  <div className="w-12 h-11 rounded bg-[var(--color-brand-blue)]/15 border border-[var(--color-brand-blue)]/25" />
                  <div className="w-12 h-11 rounded bg-[var(--color-brand-cyan)]/30 border border-[var(--color-brand-cyan)]/40" />
                  <div className="w-12 h-11 rounded bg-transparent border border-dashed border-[var(--color-border-subtle)]" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
