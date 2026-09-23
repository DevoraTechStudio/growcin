"use client"

import * as React from "react"
import Link from "next/link"

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      <section className="pt-36 pb-16 lg:pt-48 lg:pb-20 bg-[#FAF8FD] border-b border-purple-100/60">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A855F7] block mb-3">
            Customer Satisfaction
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Refund Policy
          </h1>
          <p className="text-sm text-slate-500">Last updated: September 2026 · Growcin</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Free Trial &amp; Audit</h2>
            <p>
              We provide a 100% free read-only Meta Ads account audit with zero financial obligation so you can experience our intelligence and report quality before purchasing any subscription.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Subscription Cancellation</h2>
            <p>
              You can cancel your recurring monthly or annual plan at any time through your billing dashboard. Upon cancellation, your access remains active until the end of your paid billing period, and no further renewals will be charged.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Refund Requests</h2>
            <p>
              If you experience verifiable technical issues preventing the core surveillance or qualification tools from functioning as described within the first 14 days of your initial paid cycle, contact support@growcin.com for review and resolution or full refund.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
