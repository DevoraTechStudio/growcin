import * as React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/Card"

const CASE_STUDIES = [
  { slug: "techcorp-tracking-disaster", tag: "SaaS", title: "Stopping a $20k tracking disaster before Monday morning", result: "$12k Saved", desc: "How Growcin's automated guardrails caught a broken event tag that caused Meta to optimize for zero-intent traffic over a weekend." },
  { slug: "agencyx-efficiency", tag: "Agency", title: "Scaling from 10 to 40 client accounts without hiring", result: "300% Capacity", desc: "By replacing manual daily checks with a unified triage dashboard, AgencyX doubled their team's effective output." },
  { slug: "ecommerce-fatigue", tag: "E-commerce", title: "Predicting creative fatigue before the ROAS cliff", result: "+42% ROAS", desc: "How a D2C brand used our velocity metrics to rotate creatives exactly when audience fatigue began, maintaining a stable baseline." },
  { slug: "b2b-whatsapp-intent", tag: "B2B Lead Gen", title: "Natively qualifying WhatsApp leads to feed better signals", result: "2.5x Close Rate", desc: "Routing high-intent conversational leads directly to senior AEs while sending low-intent leads to automated nurturing." },
]

export default function CaseStudiesIndexPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-24">
      {/* Hero */}
      <section className="py-24 px-6 text-center border-b border-[var(--color-border-subtle)]">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Customer Stories
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            See how modern growth teams are using Growcin to move from manual execution to strategic orchestration.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study) => (
              <Link href={`/case-studies/${study.slug}`} key={study.slug} className="group">
                <Card hoverable className="h-full bg-[var(--color-surface)] cursor-pointer">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-cyan)]">{study.tag}</span>
                      <span className="px-3 py-1 bg-[var(--color-status-good)]/10 text-[var(--color-status-good)] rounded-full text-sm font-bold">
                        {study.result}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--color-brand-cyan)] transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      {study.desc}
                    </p>
                    <div className="flex items-center text-sm font-medium text-white gap-2">
                      Read full story
                      <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
