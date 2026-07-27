import * as React from "react"
import Link from "next/link"
import { StatNumber } from "@/components/ui/StatNumber"
import { Card, CardContent } from "@/components/ui/Card"

export async function generateStaticParams() {
  return [
    { slug: "techcorp-tracking-disaster" },
    { slug: "agencyx-efficiency" },
    { slug: "ecommerce-fatigue" },
    { slug: "b2b-whatsapp-intent" },
  ];
}

// In a real app, this would be fetched from a CMS based on params.slug
export default function CaseStudyDetailPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-24">
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors mb-12">
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Back to all case studies
        </Link>
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-cyan)]">SaaS</span>
            <span className="px-3 py-1 bg-[var(--color-surface-alt)] border border-[var(--color-border-subtle)] rounded-full text-xs font-medium text-[var(--color-text-secondary)]">2 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Stopping a $20k tracking disaster before Monday morning
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
            How Growcin&apos;s AI Chat Assist and automated guardrails caught a broken event tag that caused Meta to optimize for zero-intent traffic over a holiday weekend.
          </p>
        </div>
      </div>

      {/* Stats Callouts */}
      <section className="py-12 bg-[var(--color-surface-alt)]/30 border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="bg-[var(--color-surface)]">
              <CardContent className="p-6">
                <div className="text-sm text-[var(--color-text-secondary)] font-medium mb-1">Time to detection</div>
                <div className="text-3xl font-bold text-white">4 Hours</div>
              </CardContent>
            </Card>
            <Card className="bg-[var(--color-surface)]">
              <CardContent className="p-6">
                <div className="text-sm text-[var(--color-text-secondary)] font-medium mb-1">Budget saved</div>
                <div className="text-3xl font-bold text-[var(--color-status-good)]">
                  $<StatNumber value={12450} duration={1500} />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[var(--color-surface)]">
              <CardContent className="p-6">
                <div className="text-sm text-[var(--color-text-secondary)] font-medium mb-1">Escalations</div>
                <div className="text-3xl font-bold text-white">
                  <StatNumber value={0} />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-4 text-xs text-[var(--color-text-muted)]">* Numbers used are illustrative placeholders</div>
        </div>
      </section>

      {/* Body */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl prose prose-invert prose-lg prose-p:text-[var(--color-text-secondary)] prose-headings:text-white prose-a:text-[var(--color-brand-cyan)]">
          <h2 className="text-2xl font-bold text-white mt-0 mb-6">The Situation</h2>
          <p className="mb-10 text-[var(--color-text-secondary)] leading-relaxed">
            TechCorp launched a massive Black Friday weekend push across Meta and Google. On Saturday morning, a seemingly innocuous code release on their main marketing site inadvertently broke the primary conversion pixel. Meta&apos;s algorithm, desperate to find conversions, started optimizing for a soft event (page views) instead of actual signups. The algorithm perceived this as highly successful because it was generating thousands of &quot;conversions&quot; for pennies, but none of them were real intent.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-6">What AI Chat Assist Caught</h2>
          <p className="mb-10 text-[var(--color-text-secondary)] leading-relaxed">
            Because human media buyers don&apos;t typically refresh dashboards at 2:00 AM on a Sunday, this would normally run until Monday morning, burning through tens of thousands of dollars. However, Growcin&apos;s continuous calibration node detected a massive statistical anomaly: a 400% spike in intent-to-conversion disparity. The volume of top-of-funnel activity was entirely disconnected from the historical baseline of down-funnel progression.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-6">Action Taken</h2>
          <p className="mb-10 text-[var(--color-text-secondary)] leading-relaxed">
            Growcin&apos;s automated guardrails triggered automatically. It didn&apos;t just send an email that would be ignored until Monday; it utilized its API access to gracefully pause the runaway ad sets in Meta, capping the damage. It then sent a high-priority Slack alert to the growth lead with the exact reason for the pause.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-6">Result</h2>
          <p className="mb-10 text-[var(--color-text-secondary)] leading-relaxed">
            The client fixed the pixel by 8:00 AM Sunday and reactivated the campaigns. The Growcin system prevented what would have been a catastrophic budget drain, saving an estimated $12,450 that would have otherwise been spent on zero-intent traffic. The client hit their Black Friday goals with their remaining, correctly-optimizing budget.
          </p>
        </div>
      </section>
    </div>
  )
}
