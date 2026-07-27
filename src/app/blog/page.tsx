"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

const ARTICLES = [
  {
    category: "Lead Quality",
    title: "Stop Paying For Junk Leads in Meta Ads Forever",
    date: "July 22, 2026",
    readTime: "5 min read",
    excerpt: "How modern growth teams use automated lead qualification filtering to verify prospect intent before client database synchronization.",
    id: "lead-quality-meta-ads"
  },
  {
    category: "Optimization",
    title: "Predicting Creative Fatigue Before the ROAS Cliff",
    date: "July 18, 2026",
    readTime: "8 min read",
    excerpt: "Understanding the mathematical exposure decay velocity curves that dictate when your target audience stops responding to winning creatives.",
    id: "creative-fatigue-curves"
  },
  {
    category: "Strategy",
    title: "Why CTR is the Wrong Metric to Scale Campaigns",
    date: "July 12, 2026",
    readTime: "6 min read",
    excerpt: "A deep dive into why raw click-through rates mislead optimization loops, and why qualified pipeline yield is the only scalable target.",
    id: "ctr-vs-qualified-yield"
  }
]

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-24 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--color-brand-cyan)]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-3xl relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface-alt)] border border-[var(--color-border-subtle)] text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-cyan)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-cyan)]" />
            Insights & Guides
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Growcin <span className="brand-gradient-text">Insights.</span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-lg mx-auto font-light">
            Deep dives into programmatic campaign auditing, creative decay analysis, and calm systems operation.
          </p>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map((article, i) => (
              <Card key={i} className="bg-[var(--color-surface)] border border-[var(--color-border-subtle)] hover:border-[var(--color-brand-cyan)]/30 transition-all duration-300 flex flex-col h-full">
                <CardContent className="p-8 flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-brand-cyan)] bg-[var(--color-brand-cyan)]/10 px-2.5 py-1 rounded-md">
                        {article.category}
                      </span>
                      <span className="text-[10px] text-[var(--color-text-muted)] font-mono">
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white leading-snug hover:text-[var(--color-brand-cyan)] transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="border-t border-[var(--color-border-subtle)] pt-4 flex items-center justify-between text-[11px] text-[var(--color-text-muted)]">
                    <span>{article.date}</span>
                    <Link href={`/blog/${article.id}`} className="text-[var(--color-brand-cyan)] hover:text-white transition-colors font-bold flex items-center gap-1">
                      Read Post <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </Link>
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
