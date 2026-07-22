"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/Card"

export default function AboutPage() {
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
                The Structure of Calm
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                Architects of <br />
                <span className="brand-gradient-text">Calm Systems.</span>
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-md">
                Precision engineering. We replace manual friction with automated structure. When your spending load increases, our systems scale.
              </p>
            </motion.div>

            {/* Visual core pillar graphic */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center h-[400px]"
            >
              <div className="relative w-80 h-96 p-8 bg-[var(--color-surface-alt)]/90 backdrop-blur-md rounded-2xl border border-[var(--color-border-strong)] flex flex-col justify-between shadow-2xl overflow-hidden">
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-[var(--color-brand-cyan)]/10 blur-[40px] rounded-full" />
                
                <div className="space-y-4">
                  <div className="h-1 bg-[var(--color-border-subtle)] rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)]" />
                  </div>
                  <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider">Logic System Active</div>
                </div>
                
                <div className="text-center py-6">
                  <span className="material-symbols-outlined text-7xl text-[var(--color-brand-cyan)] animate-pulse">cloud_sync</span>
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-[var(--color-text-muted)]">
                  <span>SYSTEM_UPTIME</span>
                  <span className="text-white font-bold">99.98%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/30 border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-cyan)]">
                Structural Mission
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                Architecture for the <br />
                <span className="brand-gradient-text font-serif italic font-normal">Ambitious.</span>
              </h2>
              
              <div className="mt-8 p-6 bg-[var(--color-surface)] border border-[var(--color-border-strong)] rounded-2xl max-w-xs shadow-xl">
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase block">Structural Integrity</span>
                    <span className="text-[9px] text-[var(--color-brand-cyan)] font-mono">CALIBRATED</span>
                  </div>
                  <span className="text-2xl font-bold font-mono">99.98%</span>
                </div>
                <div className="h-1 w-full bg-[var(--color-surface-alt)] rounded-full overflow-hidden">
                  <div className="h-full w-[99.98%] bg-[var(--color-brand-cyan)]" />
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:pt-12">
              <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-light leading-relaxed">
                We replace human hustle with engineering-grade infrastructure. When the ad delivery load increases, our systems don't panic—they adapt.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-[var(--color-border-subtle)]">
                <div className="space-y-2">
                  <h4 className="font-bold text-white uppercase text-xs tracking-wider">Foundational Logic</h4>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Systems built on first principles of agency performance marketing, hardened by high-budget tests.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white uppercase text-xs tracking-wider">The Outcome</h4>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Predictable metric scale that lets founders focus on product and positioning, not campaign firefighting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-cyan)] mb-2">System History</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Our Evolutionary Path</h2>
          </div>
          
          <div className="space-y-16 relative before:content-[''] before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[var(--color-border-strong)]">
            
            {[
              { year: "Era 01", subtitle: "Brute Force / Agency Chaos", desc: "Fragmented campaign workflows, heavy reliance on manual adjustments, and unsustainable performance check intervals." },
              { year: "Era 02", subtitle: "Standardizing / Blueprint Phase", desc: "Development of our first programmatic indexer models and automated threshold warning systems for CPA anomalies." },
              { year: "Era 03", subtitle: "High Fidelity / Infrastructure Scale", desc: "Launch of Growcin, integrating deep multi-channel API layers, smart asset balancing, and self-explaining audit pipelines." }
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--color-base)] bg-[var(--color-brand-cyan)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border-subtle)] shadow-xl hover:border-[var(--color-border-strong)] transition-colors">
                  <div className="text-[var(--color-brand-cyan)] font-mono font-bold text-xs uppercase tracking-wider mb-1">{item.year}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.subtitle}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/30 border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Principles of Our Operation</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: "01_INFRA_VIS", title: "Radical Transparency", desc: "Every process is logged. We don't believe in black box AI models. If a bid cap shifts, you see the complete logical justification trail." },
              { id: "02_OP_FOCUS", title: "Strategic Restraint", desc: "We don't over-engineer. We only apply automation protocols where they deliver a definitive structural scale advantage." },
              { id: "03_FAIL_SAFE", title: "Systemic Integrity", desc: "A chain is only as strong as its weakest campaign link. We harden each interface and API connection to maintain absolute uptime." }
            ].map((value, i) => (
              <Card key={i} className="bg-[var(--color-surface)] border border-[var(--color-border-subtle)] hover:border-[var(--color-brand-cyan)]/30 transition-all duration-300">
                <CardContent className="p-8 flex flex-col justify-between h-full min-h-[250px]">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{value.desc}</p>
                  </div>
                  <div className="text-[9px] font-bold font-mono text-[var(--color-text-muted)] mt-6 border-t border-[var(--color-border-subtle)] pt-4">
                    {value.id}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-white mb-16">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Marcus Vance",
                role: "Founder & CEO",
                bio: "Ex-Growth Lead at Uber. Managed $50M+ in annual ad spend.",
                initials: "MV",
                gradient: "from-blue-600 to-indigo-500"
              },
              {
                name: "Elena Rostova",
                role: "Head of Growth AI",
                bio: "Ph.D. in ML from Stanford. Expert in statistical anomaly models.",
                initials: "ER",
                gradient: "from-cyan-500 to-blue-600"
              },
              {
                name: "Aris Patel",
                role: "Chief Architect",
                bio: "Former Lead Infrastructure Engineer at Stripe. Scaling robust APIs.",
                initials: "AP",
                gradient: "from-indigo-600 to-purple-600"
              },
              {
                name: "Sarah Jenkins",
                role: "Platform Lead",
                bio: "Ex-Pinterest Ads Engineer. Specialized in campaign delivery systems.",
                initials: "SJ",
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-strong)] transition-all">
                <div className={`h-24 w-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-6 shadow-lg text-white text-xl font-bold font-mono`}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-white text-lg mb-1">{member.name}</h3>
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-cyan)] mb-3">{member.role}</div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
