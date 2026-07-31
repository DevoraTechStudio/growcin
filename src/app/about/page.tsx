"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"

const PRINCIPLES = [
  {
    title: "Simple & clear design",
    desc: "Growcin is built to be clean and effortless — easy menus, zero clutter, and clear information at a glance.",
  },
  {
    title: "AI you can trust",
    desc: "Every AI suggestion comes with simple explanations: what changed, why it matters, and what step to take next.",
  },
  {
    title: "Built by experts",
    desc: "Growcin is created by Devora Tech Studio — bringing top-quality engineering to help your business scale safely.",
  },
]

const TIMELINE = [
  {
    tag: "Origin",
    title: "From marketing chaos",
    desc: "Managing marketing manually created constant headaches: rising ad costs, repetitive work, and tools scattered everywhere.",
  },
  {
    tag: "Build",
    title: "The Growcin platform",
    desc: "We combined content writing, ad management, analytics, and sales leads into one easy, automated AI system.",
  },
  {
    tag: "Today",
    title: "Growth without the busywork",
    desc: "Businesses use Growcin to run marketing automatically, avoid wasted ad budget, and grow without daily stress.",
  },
]

export default function AboutPage() {
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
              About Growcin
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--color-ink)] leading-[1.05] mb-5">
              AI marketing made simple for your business
            </h1>
            <p className="text-base md:text-lg text-body font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              Growcin is an easy-to-use AI platform that handles your social posts, ads, email, and reports automatically—so you can grow without the confusion.
            </p>
            <Button size="lg" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-blue)] mb-3">
                Mission
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-[1.1] mb-5">
                Replace confusing marketing chores with clear, automated growth
              </h2>
              <p className="text-base md:text-lg text-body leading-relaxed">
                You shouldn&apos;t have to spend hours tweaking ads, writing repetitive posts, or decoding complex reports. Growcin turns all of that work into simple, automated next steps.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 lg:pt-8">
              <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-base)] p-6">
                <h3 className="font-display font-bold text-[var(--color-ink)] mb-2">For business owners</h3>
                <p className="text-sm text-body leading-relaxed">
                  Run all your marketing in one place without needing an expensive full team.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-base)] p-6">
                <h3 className="font-display font-bold text-[var(--color-ink)] mb-2">For agencies</h3>
                <p className="text-sm text-body leading-relaxed">
                  Manage multiple clients easily while protecting ad budgets and boosting results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 sm:px-6 bg-[var(--color-base)]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-blue)] mb-3">
              Story
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-ink)]">
              How Growcin came to be
            </h2>
          </div>

          <div className="space-y-6">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-[var(--color-border-subtle)] bg-white p-6 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-8"
              >
                <div className="sm:w-28 shrink-0">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-brand-blue)]">
                    {item.tag}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[var(--color-ink)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-body leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-blue)] mb-3">
              Principles
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-ink)]">
              How we build
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-base)] p-7"
              >
                <h3 className="font-display text-xl font-bold text-[var(--color-ink)] mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
