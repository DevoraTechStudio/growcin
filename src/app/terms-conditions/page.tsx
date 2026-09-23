"use client"

import * as React from "react"
import Link from "next/link"

export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      <section className="pt-36 pb-16 lg:pt-48 lg:pb-20 bg-[#FAF8FD] border-b border-purple-100/60">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A855F7] block mb-3">
            Legal Architecture
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-slate-500">Last updated: September 2026 · Growcin</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Growcin platform, website, or services (&quot;Service&quot;), you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Description of Service</h2>
            <p>
              Growcin provides an autonomous campaign intelligence layer, read-only ad account audit tools, CPA guardrails, and conversational lead qualification systems for performance marketers, agencies, and businesses.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Account Permissions &amp; Data Access</h2>
            <p>
              For our free campaign audit, we request strictly read-only OAuth permissions from your connected Meta Ads account. We do not have write permissions to spend your ad budget, publish ads, or alter campaigns without your explicit configuration and authorization.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. User Responsibilities</h2>
            <p>
              You represent and warrant that you hold all necessary administrative permissions for any ad account, WhatsApp number, or messaging channel you connect to the Service, and that your use complies with all applicable platform policies (including Meta Advertising Policies and WhatsApp Business Policy).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. Limitation of Liability</h2>
            <p>
              In no event shall Growcin, its directors, employees, or partners, be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service or third-party ad network algorithm adjustments.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">6. Contact Information</h2>
            <p>
              For legal inquiries or notices regarding these terms, please contact legal@growcin.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
