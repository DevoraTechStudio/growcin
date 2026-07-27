"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader } from "@/components/ui/Card"
import { Accordion } from "@/components/ui/Accordion"
import { cn } from "@/lib/utils"

const FAQS = [
  { title: "Do I have to sign a long-term contract?", content: "No, all plans are month-to-month by default. We offer a 20% discount if you choose to pay annually." },
  { title: "What counts as 'managed spend'?", content: "Managed spend is the total ad budget running through the ad accounts you connect to Growcin within a given month." },
  { title: "Can I upgrade or downgrade anytime?", content: "Yes, you can adjust your plan at any time. Prorated charges or credits will be applied to your next billing cycle." }
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = React.useState(false)

  return (
    <div className="flex flex-col w-full overflow-hidden pt-24 text-white">
      {/* Hero */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 hero-grid-pattern pointer-events-none opacity-20" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--color-brand-blue)]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, predictable pricing.
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto font-light">
            Scale your campaign intelligence and safety guardrails as your spend scales. No hidden fees or complex usage tiers.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium", !isAnnual ? "text-white" : "text-[var(--color-text-muted)]")}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-[var(--color-surface-alt)] border border-[var(--color-border-subtle)] transition-colors cursor-pointer"
            >
              <span className={cn("inline-block h-5 w-5 transform rounded-full bg-[var(--color-brand-cyan)] transition-transform", isAnnual ? "translate-x-8" : "translate-x-1")} />
            </button>
            <span className={cn("text-sm font-medium", isAnnual ? "text-white" : "text-[var(--color-text-muted)]")}>
              Annually <span className="text-[var(--color-status-good)] text-xs ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Starter */}
            <Card className="bg-[var(--color-surface)] border-[var(--color-border-subtle)]">
              <CardHeader className="pb-8">
                <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                <p className="text-sm text-[var(--color-text-secondary)] font-light">For early-stage startups managing a single ad channel.</p>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">${isAnnual ? "79" : "99"}</span>
                  <span className="text-[var(--color-text-muted)]">/mo</span>
                </div>
                <Button variant="secondary" className="w-full mb-8" asChild>
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
                <ul className="space-y-4">
                  {[
                    "Up to $10k managed spend",
                    "1 Ad Platform connection",
                    "AI Chat Assist (Basic)",
                    "Email notifications",
                    "Standard 24h support"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] font-light">
                      <span className="material-symbols-outlined text-[var(--color-status-good)] text-lg">check</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Growth */}
            <Card className="bg-[var(--color-surface)] border-[var(--color-brand-blue)] shadow-[0_0_40px_rgba(0,82,255,0.1)] relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                Most Popular
              </div>
              <CardHeader className="pb-8">
                <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
                <p className="text-sm text-[var(--color-text-secondary)] font-light">For scale-ups orchestrating multi-channel growth.</p>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">${isAnnual ? "239" : "299"}</span>
                  <span className="text-[var(--color-text-muted)]">/mo</span>
                </div>
                <Button className="w-full mb-8 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] hover:opacity-95 text-white" asChild>
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
                <ul className="space-y-4">
                  {[
                    "Up to $100k managed spend",
                    "All Ad Platforms included",
                    "CPA Guardrails & Smart Budget Optimization",
                    "AI Chat Assist (Slack & SMS)",
                    "Priority support"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white font-medium">
                      <span className="material-symbols-outlined text-[var(--color-brand-cyan)] text-lg">check</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Agency */}
            <Card className="bg-[var(--color-surface)] border-[var(--color-border-subtle)]">
              <CardHeader className="pb-8">
                <h3 className="text-xl font-bold text-white mb-2">Agency</h3>
                <p className="text-sm text-[var(--color-text-secondary)] font-light">For marketing agencies managing multiple client accounts.</p>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">${isAnnual ? "799" : "999"}</span>
                  <span className="text-[var(--color-text-muted)]">/mo</span>
                </div>
                <Button variant="secondary" className="w-full mb-8" asChild>
                  <Link href="/signup">Contact Sales</Link>
                </Button>
                <ul className="space-y-4">
                  {[
                    "Unlimited managed spend",
                    "Unlimited client workspaces",
                    "White-labeled Decision Packages",
                    "API Access & Custom Integrations",
                    "Dedicated success manager"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] font-light">
                      <span className="material-symbols-outlined text-[var(--color-status-good)] text-lg">check</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[var(--color-surface-alt)]/30 border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Pricing FAQ</h2>
          <Accordion items={FAQS} />
        </div>
      </section>
    </div>
  )
}
