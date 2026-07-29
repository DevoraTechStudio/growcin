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

const CAPABILITIES = [
  {
    icon: "auto_awesome",
    title: "AI content studio",
    desc: "Blogs, social posts, ads, and email sequences matched to your brand voice.",
  },
  {
    icon: "campaign",
    title: "Campaign intelligence",
    desc: "Real-time monitoring that flags CPA drift, creative fatigue, and budget risk early.",
  },
  {
    icon: "shield",
    title: "CPA guardrails",
    desc: "Set max cost-per-lead limits. Growcin surfaces breaches with clear next actions.",
  },
  {
    icon: "insights",
    title: "Cross-channel analytics",
    desc: "SEO, paid, social, and email attributed together so you know what drives revenue.",
  },
  {
    icon: "group",
    title: "Lead qualification",
    desc: "Qualify inbound leads automatically and route high-intent conversations to sales.",
  },
  {
    icon: "bolt",
    title: "Marketing automation",
    desc: "Connect content, campaigns, and follow-ups into workflows that run 24/7.",
  },
]

export default function PlatformPage() {
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
                Platform
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-ink)] leading-[1.05]">
                One AI platform for your entire marketing stack
              </h1>
              <p className="text-base md:text-lg text-body font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Growcin unifies SEO, social, ads, email, analytics, and lead management —
                so your team grows revenue instead of juggling tools.
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

      <section id="features" className="py-20 md:py-28 px-4 sm:px-6 bg-white border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-blue)] mb-3">
              Capabilities
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--color-ink)] leading-[1.1] mb-4">
              Built for teams that need predictable growth
            </h2>
            <p className="text-base md:text-lg text-body leading-relaxed">
              Every module is designed to reduce busywork and protect budget.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-base)] p-6 hover:border-[var(--color-brand-blue)]/30 hover:shadow-lg transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">{item.desc}</p>
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
