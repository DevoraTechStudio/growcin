"use client"

import * as React from "react"
import Link from "next/link"

export default function PlatformAgreementPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      <section className="pt-36 pb-16 lg:pt-48 lg:pb-20 bg-[#FAF8FD] border-b border-purple-100/60">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A855F7] block mb-3">
            Service Level Agreement
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Platform Agreement
          </h1>
          <p className="text-sm text-slate-500">Last updated: September 2026 · Growcin</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Scope of Platform Agreement</h2>
            <p>
              This Platform Agreement sets forth the terms under which subscribers and authorized enterprise users access the Growcin performance intelligence software, campaign surveillance infrastructure, and conversational automation tools.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Service Availability &amp; Uptime</h2>
            <p>
              Growcin strives to maintain a 99.9% platform availability target for continuous campaign monitoring and webhook ingestion, excluding planned maintenance windows communicated in advance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. API &amp; Third-Party Ad Networks</h2>
            <p>
              Our software operates via standard public and partner APIs provided by Meta, WhatsApp Cloud API, and other integrated networks. While we engineer robust retry mechanisms, we are not liable for transient network disruptions originating on third-party infrastructure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Support Services</h2>
            <p>
              Paid tiers include dedicated technical email support and onboarding assistance. Enterprise accounts receive designated solutions engineering access.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
