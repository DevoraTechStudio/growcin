"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const ARTICLES = [
  {
    category: "Lead Quality",
    title: "Stop paying for junk leads in Meta ads",
    date: "July 22, 2026",
    readTime: "5 min read",
    excerpt:
      "How growth teams use AI qualification to verify intent before leads hit the CRM.",
    id: "lead-quality-meta-ads",
  },
  {
    category: "Optimization",
    title: "Predict creative fatigue before the ROAS cliff",
    date: "July 18, 2026",
    readTime: "8 min read",
    excerpt:
      "The signals that show when your audience stops responding — and what to do next.",
    id: "creative-fatigue-curves",
  },
  {
    category: "Strategy",
    title: "Why CTR is the wrong metric to scale",
    date: "July 12, 2026",
    readTime: "6 min read",
    excerpt:
      "Why click-through rates mislead optimization loops — and what to track instead.",
    id: "ctr-vs-qualified-yield",
  },
  {
    category: "AI Marketing",
    title: "What an AI marketing platform should actually do",
    date: "July 5, 2026",
    readTime: "7 min read",
    excerpt:
      "Beyond chatbots: content, campaigns, analytics, and automation in one system.",
    id: "ai-marketing-platform",
  },
  {
    category: "SEO",
    title: "Using AI for SEO without losing brand voice",
    date: "June 28, 2026",
    readTime: "6 min read",
    excerpt:
      "How to generate briefs and drafts that rank — and still sound like your company.",
    id: "ai-seo-brand-voice",
  },
  {
    category: "Agencies",
    title: "How agencies retain clients with proactive alerts",
    date: "June 20, 2026",
    readTime: "5 min read",
    excerpt:
      "Catch CPA spikes before the weekly report — and turn fire drills into trust.",
    id: "agency-proactive-alerts",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <section className="relative hero-atmosphere pt-28 sm:pt-32 pb-12 sm:pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 hero-grid-pattern pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-blue)] mb-4">
              Blog
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Growcin Insights
            </h1>
            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mx-auto">
              Practical guides on AI marketing, campaign intelligence, and building calm growth systems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARTICLES.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex flex-col h-full rounded-2xl border border-[var(--color-border-subtle)] bg-[#FAF8FD] p-7 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#A855F7] bg-purple-50 px-2.5 py-1 rounded-md">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {article.readTime}
                  </span>
                </div>

                <h2 className="font-display text-xl font-bold text-slate-900 leading-snug mb-3">
                  {article.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed flex-grow mb-6">
                  {article.excerpt}
                </p>

                <div className="border-t border-purple-100/60 pt-4 flex items-center justify-between text-[12px] text-slate-500">
                  <span>{article.date}</span>
                  <Link
                    href={`/blog`}
                    className="text-[#A855F7] hover:text-purple-700 transition-colors font-bold inline-flex items-center gap-1"
                  >
                    Read
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
