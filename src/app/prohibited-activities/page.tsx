"use client"

import * as React from "react"
import Link from "next/link"

export default function ProhibitedActivitiesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      <section className="pt-36 pb-16 lg:pt-48 lg:pb-20 bg-[#FAF8FD] border-b border-purple-100/60">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A855F7] block mb-3">
            Compliance Policy
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Prohibited Activities
          </h1>
          <p className="text-sm text-slate-500">Last updated: September 2026 · Growcin</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Unlawful and Deceptive Content</h2>
            <p>
              Users may not use Growcin to advertise or qualify leads for fraudulent schemes, illegal gambling, counterfeit goods, pyramid programs, or predatory financial practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Messaging Spam &amp; Harassment</h2>
            <p>
              Automated WhatsApp and Instagram messaging must strictly comply with official platform messaging policies, including obtaining proper prior consent and providing unambiguous opt-out mechanisms (e.g. &quot;Reply STOP to unsubscribe&quot;).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Platform Abuse &amp; Reverse Engineering</h2>
            <p>
              You may not probe, scan, or test the vulnerability of the Growcin platform, reverse engineer our models, or systematically scrape user metrics without express authorization.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
