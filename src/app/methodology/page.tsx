"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"

const PILLARS = [
  {
    step: "01",
    title: "Signal over noise",
    desc: "We prioritize the metrics that protect budget and pipeline — CPA, lead quality, creative health — not vanity clicks.",
  },
  {
    step: "02",
    title: "Context with every alert",
    desc: "An alert without a next move is just anxiety. Growcin explains what changed, why, and what to do.",
  },
  {
    step: "03",
    title: "Automation with control",
    desc: "AI drafts and monitors continuously. You keep approval gates, brand voice, and spend limits.",
  },
  {
    step: "04",
    title: "Compounding intelligence",
    desc: "Your conversations, creatives, and campaigns teach the system — making results harder for competitors to copy.",
  },
]

const BELIEFS = [
  {
    title: "Marketing should be a system",
    desc: "Not a pile of tools, tabs, and late-night spreadsheet reviews.",
  },
  {
    title: "AI should reduce risk",
    desc: "Not invent more busywork. Every feature should save time or save spend.",
  },
  {
    title: "Growth should feel calm",
    desc: "Predictable operations beat heroic firefighting — every time.",
  },
]

export default function MethodologyPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <section className="relative hero-atmosphere pt-28 sm:pt-32 pb-14 sm:pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 hero-grid-pattern pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-blue)] mb-4">
              Methodology
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-[var(--color-ink)] leading-[1.05] mb-5">
              How we believe AI marketing should work
            </h1>
            <p className="text-base md:text-lg text-body font-medium leading-relaxed max-w-2xl mx-auto">
              Advertising and content either move a business forward — or quietly drain it.
              Growcin is built around a simple idea: structure beats stress.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-blue)] mb-3">
              Four pillars
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-[1.1]">
              The Growcin operating model
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-base)] p-7 md:p-8"
              >
                <div className="font-display text-sm font-bold text-[var(--color-brand-blue)] mb-3">
                  {p.step}
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--color-ink)] mb-2">
                  {p.title}
                </h3>
                <p className="text-[15px] text-body leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 sm:px-6 bg-[var(--color-base)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-blue)] mb-3">
              Beliefs
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-ink)]">
              What we optimize for
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {BELIEFS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-[var(--color-border-subtle)] bg-white p-7"
              >
                <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-white border-t border-[var(--color-border-subtle)] text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-ink)] mb-4">
            See the methodology in action
          </h2>
          <p className="text-body mb-8 leading-relaxed">
            Start a free trial and watch Growcin turn your channels into a clear growth system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button variant="secondary" size="lg" className="text-slate-900" asChild>
              <Link href="/platform">Explore Platform</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
