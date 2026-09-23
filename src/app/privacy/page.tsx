"use client"

import * as React from "react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      <section className="pt-36 pb-16 lg:pt-48 lg:pb-20 bg-[#FAF8FD] border-b border-purple-100/60">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A855F7] block mb-3">
            Data Architecture
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">Last updated: September 2026 · Growcin</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Overview</h2>
            <p>
              Growcin (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our application.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when creating an account, connecting your Meta Ads account via OAuth, or submitting a contact form. This includes your name, business email address, company name, and OAuth tokens required to read ad campaign performance metrics.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. How We Use Your Information</h2>
            <p>
              We use the information collected solely to provide, maintain, and improve our services, including calculating campaign health scores, detecting CPA spikes, flagging creative fatigue, and delivering actionable decision packages. We do not sell your personal data or your client ad metrics to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Data Security</h2>
            <p>
              We implement industry-standard encryption protocols (including AES-256 and TLS 1.3) to protect your access tokens and account data in transit and at rest. You may disconnect your ad accounts at any time, which terminates data access immediately.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at privacy@growcin.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
