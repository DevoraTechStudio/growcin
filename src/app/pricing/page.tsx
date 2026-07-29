"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Accordion } from "@/components/ui/Accordion"
import { cn } from "@/lib/utils"

const FAQS = [
  {
    title: "Do I have to sign a long-term contract?",
    content:
      "No — all plans are month-to-month by default. Choose annual billing to save 20%.",
  },
  {
    title: "Is there a free trial?",
    content:
      "Yes. Every plan includes a 14-day free trial with no credit card required.",
  },
  {
    title: "Can I upgrade or downgrade anytime?",
    content:
      "Yes. Adjust your plan whenever you need. Prorated charges or credits apply to your next invoice.",
  },
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = React.useState(true)

  return (
    <div className="flex flex-col w-full overflow-hidden pt-24">
      <section className="py-20 px-4 sm:px-6 text-center relative overflow-hidden hero-atmosphere">
        <div className="container mx-auto max-w-4xl relative z-10">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-brand-blue)] mb-3">
            Pricing
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-[var(--color-ink)] mb-5 tracking-tight">
            Simple, predictable pricing
          </h1>
          <p className="text-lg text-body font-medium mb-10 max-w-2xl mx-auto">
            Start free. Scale when growth compounds. No hidden fees.
          </p>

          <div className="inline-flex items-center gap-3 rounded-full bg-white border border-[var(--color-border-subtle)] p-1.5">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={cn(
                "h-9 px-4 rounded-full text-sm font-semibold transition-all cursor-pointer",
                !isAnnual ? "bg-[var(--color-ink)] text-white" : "text-body"
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={cn(
                "h-9 px-4 rounded-full text-sm font-semibold transition-all cursor-pointer",
                isAnnual ? "bg-[var(--color-ink)] text-white" : "text-body"
              )}
            >
              Annual <span className="text-[var(--color-status-good)] text-xs ml-1">−20%</span>
            </button>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: isAnnual ? 79 : 99,
                blurb: "For early-stage teams validating AI-led growth.",
                cta: "Start Free Trial",
                featured: false,
                features: [
                  "Up to $10k managed spend",
                  "1 ad platform connection",
                  "AI content studio",
                  "Email notifications",
                  "Standard support",
                ],
              },
              {
                name: "Growth",
                price: isAnnual ? 239 : 299,
                blurb: "For teams orchestrating multi-channel growth.",
                cta: "Start Free Trial",
                featured: true,
                features: [
                  "Up to $100k managed spend",
                  "All ad platforms",
                  "CPA guardrails & alerts",
                  "Lead qualification",
                  "Priority support",
                ],
              },
              {
                name: "Agency",
                price: isAnnual ? 799 : 999,
                blurb: "For agencies managing multiple client accounts.",
                cta: "Contact Sales",
                featured: false,
                features: [
                  "Unlimited managed spend",
                  "Unlimited workspaces",
                  "White-labeled reports",
                  "API & custom integrations",
                  "Dedicated success manager",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative rounded-2xl p-8 flex flex-col border bg-white",
                  plan.featured
                    ? "border-[var(--color-brand-blue)] shadow-[0_24px_60px_-28px_rgba(37,99,235,0.45)]"
                    : "border-[var(--color-border-subtle)]"
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 brand-gradient-bg text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                    Most popular
                  </div>
                )}
                <h3 className="font-display text-xl font-bold text-[var(--color-ink)] mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-body mb-6">{plan.blurb}</p>
                <div className="mb-8">
                  <span className="font-display text-5xl font-extrabold text-[var(--color-ink)]">
                    ${plan.price}
                  </span>
                  <span className="text-[var(--color-text-muted)]">/mo</span>
                </div>
                <Button
                  variant={plan.featured ? "default" : "secondary"}
                  className="w-full mb-8"
                  asChild
                >
                  <Link href="/signup">{plan.cta}</Link>
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-body"
                    >
                      <span className="material-symbols-outlined text-[var(--color-brand-blue)] text-lg">
                        check
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-white border-t border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold text-[var(--color-ink)] mb-10 text-center">
            Pricing FAQ
          </h2>
          <div className="rounded-2xl border border-[var(--color-border-subtle)] px-4 sm:px-6 md:px-8">
            <Accordion items={FAQS} />
          </div>
        </div>
      </section>
    </div>
  )
}
