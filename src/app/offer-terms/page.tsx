"use client"

import * as React from "react"
import Link from "next/link"

export default function OfferTermsPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      <section className="pt-36 pb-16 lg:pt-48 lg:pb-20 bg-[#FAF8FD] border-b border-purple-100/60">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A855F7] block mb-3">
            Promotion Terms
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Offer Terms
          </h1>
          <p className="text-sm text-slate-500">Last updated: September 2026 · Growcin</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Free Meta Ads Audit</h2>
            <p>
              The free Meta Ads audit provided by Growcin is 100% complimentary and read-only. No payment information or credit card is required to initiate the audit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Annual Subscription Discount</h2>
            <p>
              Annual plan pricing includes a 25% discount compared to standard monthly billing. Annual fees are collected as a single upfront annual payment and renew automatically unless canceled prior to the renewal date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Promotional Codes &amp; Credits</h2>
            <p>
              Promotional codes, referral discounts, or partner credits cannot be redeemed for cash and must be applied at the time of subscription checkout.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
