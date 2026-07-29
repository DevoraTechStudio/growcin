"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { LogoMarquee } from "@/components/marketing/LogoMarquee"
import { Button } from "@/components/ui/Button"

const STORIES = [
  {
    initials: "BI",
    company: "Bliss International",
    sector: "Education · Budget automation",
    quote:
      "We shifted from evenly distributed budgets to Smart Budget Optimization. Spend now moves to high-conversion hours automatically.",
    stats: [
      { label: "Inquiries", val: "+39%" },
      { label: "Walk-ins", val: "+33%" },
      { label: "Calls", val: "+28%" },
      { label: "Conv. lift", val: "30%" },
    ],
  },
  {
    initials: "BP",
    company: "Best Prop Deal",
    sector: "Real estate · Creative refresh",
    quote:
      "Before Growcin, creative refresh was gut feel. Now we rotate before CTR falls — clients see steadier CPA.",
    stats: [
      { label: "CPA variance", val: "−41%" },
      { label: "Refresh speed", val: "3×" },
      { label: "Escalations", val: "0" },
      { label: "ROAS", val: "+22%" },
    ],
  },
  {
    initials: "AS",
    company: "AI Soch Studio",
    sector: "Agency · Multi-account triage",
    quote:
      "Growcin flagged a CPA spike within 36 hours. We'd have caught it in the weekly review — four days later.",
    stats: [
      { label: "Detection", val: "36h" },
      { label: "Accounts", val: "18" },
      { label: "Spend saved", val: "$48k" },
      { label: "Retention", val: "↑" },
    ],
  },
]

export default function CaseStudiesIndexPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <section className="relative hero-atmosphere pt-28 sm:pt-32 pb-12 sm:pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 hero-grid-pattern pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-blue)] mb-4">
              Case studies
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--color-ink)] leading-[1.05] mb-5">
              Real teams. Measurable growth.
            </h1>
            <p className="text-base md:text-lg text-body font-medium max-w-2xl mx-auto leading-relaxed">
              How founders and agencies reduced wasted spend, improved lead quality, and stopped babysitting ads with Growcin.
            </p>
          </motion.div>
        </div>
      </section>

      <LogoMarquee />

      <section id="stories" className="py-20 md:py-28 px-4 sm:px-6 bg-white border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] mb-4">
              Performance transformations
            </h2>
            <p className="text-base md:text-lg text-body max-w-xl mx-auto leading-relaxed">
              Structural wins — not vanity metrics.
            </p>
          </div>

          <div className="space-y-16">
            {STORIES.map((story, i) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-full brand-gradient-bg flex items-center justify-center font-display font-bold text-white text-sm shrink-0">
                      {story.initials}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-[var(--color-ink)]">
                        {story.company}
                      </h3>
                      <p className="text-[11px] uppercase tracking-widest text-body-muted font-semibold mt-0.5">
                        {story.sector}
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-base md:text-lg text-body leading-relaxed border-l-4 border-[var(--color-brand-blue)] pl-5 mb-8">
                    &quot;{story.quote}&quot;
                  </blockquote>

                  <div className="grid grid-cols-2 gap-3">
                    {story.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-base)] p-4"
                      >
                        <span className="text-[10px] uppercase tracking-widest text-body-muted font-bold block mb-1">
                          {stat.label}
                        </span>
                        <div className="font-display text-2xl font-extrabold text-[var(--color-ink)]">
                          {stat.val}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-product)] p-6 md:p-8 min-h-[260px] flex flex-col justify-between shadow-[0_30px_80px_-40px_rgba(15,23,42,0.5)]">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Outcome snapshot
                    </span>
                    <span className="text-[10px] font-semibold text-[var(--color-status-good)] bg-[var(--color-status-good)]/10 px-2 py-1 rounded-full">
                      Verified
                    </span>
                  </div>
                  <div className="flex items-end gap-2 h-32">
                    {[40, 55, 48, 72, 65, 88, 92].map((h, idx) => (
                      <div
                        key={idx}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-[var(--color-brand-blue)] to-[var(--color-brand-accent)] opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-4">
                    Performance trend after Growcin activation
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
