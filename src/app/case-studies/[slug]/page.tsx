import * as React from "react"
import Link from "next/link"
import { StatNumber } from "@/components/ui/StatNumber"
import { Button } from "@/components/ui/Button"

export async function generateStaticParams() {
  return [
    { slug: "techcorp-tracking-disaster" },
    { slug: "agencyx-efficiency" },
    { slug: "ecommerce-fatigue" },
    { slug: "b2b-whatsapp-intent" },
  ]
}

export default function CaseStudyDetailPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 pt-32 pb-12">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-body hover:text-[var(--color-ink)] transition-colors mb-10 font-medium"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Back to case studies
        </Link>

        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-brand-blue)]">
              SaaS
            </span>
            <span className="px-3 py-1 bg-[var(--color-surface-alt)] border border-[var(--color-border-subtle)] rounded-full text-xs font-medium text-body">
              2 min read
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Stopping a $20k tracking disaster before Monday morning
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            How Growcin caught a broken event tag that caused Meta to optimize for zero-intent
            traffic over a holiday weekend — and saved the budget.
          </p>
        </div>
      </div>

      <section className="py-12 bg-white border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Time to detection", value: <>4 Hours</> },
              {
                label: "Budget saved",
                value: (
                  <span className="text-[var(--color-status-good)]">
                    $<StatNumber value={12450} duration={1500} />
                  </span>
                ),
              },
              { label: "Escalations", value: <StatNumber value={0} /> },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-base)] p-6"
              >
                <div className="text-sm text-body-muted font-medium mb-1">{stat.label}</div>
                <div className="font-display text-3xl font-extrabold text-[var(--color-ink)]">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-xs text-body-muted">
            * Numbers used are illustrative placeholders
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[var(--color-base)]">
        <div className="container mx-auto max-w-3xl space-y-10">
          {[
            {
              title: "The situation",
              body: "TechCorp launched a Black Friday push across Meta and Google. A code release broke the primary conversion pixel. Meta started optimizing for page views instead of signups — looking successful while generating zero real intent.",
            },
            {
              title: "What Growcin caught",
              body: "Growcin detected a statistical anomaly: a 400% spike in intent-to-conversion disparity. Top-of-funnel volume disconnected from historical down-funnel progression — at 2 AM on a Sunday.",
            },
            {
              title: "Action taken",
              body: "Guardrails paused the runaway ad sets via API and sent a high-priority Slack alert with the exact reason — so the team fixed the pixel before Monday.",
            },
            {
              title: "Result",
              body: "The pixel was fixed by 8 AM Sunday. Estimated $12,450 saved from zero-intent traffic. The remaining budget hit Black Friday goals with correct optimization.",
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-2xl font-extrabold text-slate-900 mb-3">
                {section.title}
              </h2>
              <p className="text-[15px] md:text-base text-slate-600 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}

          <div className="pt-6">
            <Button size="lg" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
