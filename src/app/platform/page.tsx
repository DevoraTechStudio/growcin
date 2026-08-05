"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Accordion } from "@/components/ui/Accordion"
import { ProductDashboard } from "@/components/marketing/ProductDashboard"

const FAQS = [
  {
    title: "Do I need to replace Meta Ads Manager to use Growcin?",
    content:
      "No. Growcin connects to your existing ad accounts and layers AI marketing intelligence on top. Your team keeps full access to Ads Manager.",
  },
  {
    title: "How long does setup take?",
    content:
      "Most teams go live in under 15 minutes. Connect channels via OAuth, set your goals, and Growcin starts analyzing performance immediately.",
  },
  {
    title: "What can I automate?",
    content:
      "Content drafts, campaign monitoring, CPA guardrails, lead qualification, and recommended budget shifts — with human approval when you want it.",
  },
  {
    title: "Can agencies manage multiple clients?",
    content:
      "Yes. Growcin supports multi-workspace agency operations with a global triage view across all client accounts.",
  },
  {
    title: "Which channels are supported?",
    content:
      "Native integrations for Meta Ads, Google Ads, LinkedIn, analytics, email, WhatsApp, Slack, HubSpot, and more.",
  },
]

interface Capability {
  icon: string
  title: string
  category: "content" | "analytics" | "automation"
  tagline: string
  desc: string
  badge: string
  points: string[]
}

const CATEGORIES = [
  { id: "all", label: "All Features" },
  { id: "content", label: "Content & Creatives" },
  { id: "analytics", label: "Analytics & Safety" },
  { id: "automation", label: "Automation & Leads" },
]

const CAPABILITIES: Capability[] = [
  {
    category: "content",
    badge: "10x Faster",
    icon: "auto_awesome",
    title: "AI Content Studio",
    tagline: "Blogs, posts, ads & emails in your brand voice",
    desc: "Generate high-converting marketing content automatically across all major social networks.",
    points: [
      "Auto-writes posts for Meta, Google & LinkedIn",
      "Adapts to your brand voice & tone",
      "One-click multi-channel publishing",
    ],
  },
  {
    category: "analytics",
    badge: "24/7 Safety",
    icon: "campaign",
    title: "Campaign Intelligence",
    tagline: "Real-time monitoring to protect ad budget",
    desc: "Active monitoring that catches rising ad costs and ad burnout before budget is wasted.",
    points: [
      "Monitors ad frequency & cost anomalies",
      "Detects ad fatigue before performance drops",
      "Sends instant actionable recommendations",
    ],
  },
  {
    category: "analytics",
    badge: "Zero Budget Waste",
    icon: "shield",
    title: "Cost Safety Limits",
    tagline: "Set cost-per-lead safety caps automatically",
    desc: "Define maximum cost limits per lead. Growcin alerts you immediately when ad spend spikes.",
    points: [
      "Set custom cost ceilings per campaign",
      "Instant alerts when ad costs exceed limits",
      "Reallocates spend to top-performing ads",
    ],
  },
  {
    category: "analytics",
    badge: "Full Attribution",
    icon: "insights",
    title: "Cross-Channel Analytics",
    tagline: "All your marketing channels in one view",
    desc: "Connect SEO, paid ads, social, and email performance into one clear executive dashboard.",
    points: [
      "Combines data across Meta, Google & CRM",
      "Identifies exact channels driving revenue",
      "Clear plain-English weekly summaries",
    ],
  },
  {
    category: "automation",
    badge: "Instant Routing",
    icon: "group",
    title: "Smart Lead Qualification",
    tagline: "Qualify and route leads in real time",
    desc: "Filter inbound leads automatically and route high-intent sales opportunities instantly.",
    points: [
      "Scores lead quality instantly using AI",
      "Routes warm leads to WhatsApp, CRM or Slack",
      "Reduces lead response time to seconds",
    ],
  },
  {
    category: "automation",
    badge: "Always-On",
    icon: "bolt",
    title: "Marketing Automation",
    tagline: "Workflows that run while your team sleeps",
    desc: "Connect content creation, ad updates, and follow-ups into automated 24/7 loops.",
    points: [
      "Automated follow-up email & message series",
      "Triggers actions based on customer behavior",
      "Saves 25+ hours per week per marketer",
    ],
  },
]

export default function PlatformPage() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all")

  const filteredCapabilities = CAPABILITIES.filter(
    (cap) => activeCategory === "all" || cap.category === activeCategory
  )

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <section className="relative hero-atmosphere pt-28 sm:pt-32 pb-12 sm:pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 hero-grid-pattern pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6 text-center lg:text-left"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-blue)]">
                Platform & Features
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-ink)] leading-[1.05]">
                One AI platform for your entire marketing stack
              </h1>
              <p className="text-base md:text-lg text-body font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Growcin unifies social, ads, email, analytics, and lead management into an automated system designed for fast, predictable business growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3 pt-2">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-slate-900" asChild>
                  <Link href="/#demo">Watch Demo</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <ProductDashboard />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 md:py-28 px-4 sm:px-6 bg-white border-y border-[var(--color-border-subtle)] relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-blue)] mb-3">
              Capabilities
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-[1.1] mb-4">
              Built for teams that need predictable growth
            </h2>
            <p className="text-base md:text-lg text-body leading-relaxed mb-8">
              Explore key features designed to reduce daily busywork, protect budget, and convert more leads.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[var(--color-base)] border border-[var(--color-border-subtle)] rounded-full max-w-2xl mx-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[var(--color-brand-blue)] text-white shadow-md shadow-[var(--color-brand-blue)]/20"
                      : "text-body hover:text-[var(--color-ink)] hover:bg-white/80"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCapabilities.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-base)] p-6 md:p-7 hover:bg-white hover:border-[var(--color-brand-blue)]/40 hover:shadow-[0_20px_40px_-15px_rgba(144,48,248,0.18)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-white border border-[var(--color-border-subtle)] text-[var(--color-brand-blue)] flex items-center justify-center group-hover:bg-[var(--color-brand-blue)] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                    </div>
                    <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] group-hover:bg-[var(--color-brand-blue)] group-hover:text-white transition-colors duration-300">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-brand-blue)] transition-colors duration-200 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--color-brand-blue)] mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-sm text-body leading-relaxed mb-5">
                    {item.desc}
                  </p>

                  {/* High Impact Points */}
                  <div className="space-y-2 pt-3 border-t border-[var(--color-border-subtle)]/60">
                    {item.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2 text-xs font-medium text-[var(--color-ink)]">
                        <span className="material-symbols-outlined text-[var(--color-brand-blue)] text-[16px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center gap-1 text-xs font-bold text-[var(--color-brand-blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 sm:px-6 bg-[var(--color-base)]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-blue)] mb-3">
                How it works
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-ink)] leading-[1.1] mb-4">
                Connect once. Grow continuously.
              </h2>
              <p className="text-base text-body leading-relaxed mb-8">
                Growcin sits on top of the tools you already use — turning scattered channel data into clear actions.
              </p>
              <ul className="space-y-4">
                {[
                  "Connect ads, analytics, CRM, and social in minutes",
                  "AI drafts content and monitors campaign health 24/7",
                  "Every alert includes cause + recommended next move",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm font-semibold text-[var(--color-ink)]">
                    <span className="material-symbols-outlined text-[var(--color-brand-blue)] text-[20px] shrink-0">
                      check_circle
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/signup">Try Growcin Free</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-white p-6 md:p-8 shadow-sm">
              {[
                { step: "01", title: "Connect channels", desc: "OAuth links for ads, analytics, email, and CRM." },
                { step: "02", title: "Set goals & guardrails", desc: "Define CPA limits, brand voice, and priorities." },
                { step: "03", title: "Automate & decide", desc: "AI drafts, monitors, and recommends — you approve." },
              ].map((s) => (
                <div
                  key={s.step}
                  className="flex gap-4 py-5 border-b border-[var(--color-border-subtle)] last:border-0 last:pb-0 first:pt-0"
                >
                  <div className="h-10 w-10 rounded-full brand-gradient-bg text-white font-display text-xs font-bold flex items-center justify-center shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[var(--color-ink)] mb-1">{s.title}</h3>
                    <p className="text-sm text-body">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-blue)] mb-3">
              FAQ
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--color-ink)]">
              Platform questions
            </h2>
          </div>
          <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-base)] px-4 sm:px-6 md:px-8">
            <Accordion items={FAQS} />
          </div>
        </div>
      </section>
    </div>
  )
}
