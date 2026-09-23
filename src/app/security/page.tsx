"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SecurityPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-28 bg-[linear-gradient(180deg,#FBF9FF_0%,#FFFFFF_40%,#FBF9FE_100%)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[1100px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(168,85,247,0.14) 0%, rgba(168,85,247,0.04) 50%, rgba(168,85,247,0) 75%)",
          }}
        />

        <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-900">
              Enterprise Trust &amp; Safety
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-6">
            Read-Only By Design.{" "}
            <span className="font-serif-accent italic font-normal text-[#A855F7]">
              Safe
            </span>{" "}
            By Architecture.
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
            We never request write permissions or ad budget modification authority during audits. Your ad account remains 100% under your ownership and control.
          </p>

          <a
            href="/signup/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5"
          >
            <span>Run Safe Read-Only Audit</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#FAF8FD] border border-purple-100">
              <span className="material-symbols-outlined text-3xl text-[#A855F7] mb-4">
                lock
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Zero Write Access</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The audit runs strictly via Meta OAuth read-only scopes. Our platform cannot spend your budget, edit copy, or adjust ad settings.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF8FD] border border-purple-100">
              <span className="material-symbols-outlined text-3xl text-[#A855F7] mb-4">
                enhanced_encryption
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">SOC2 &amp; AES-256</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                All tokens and account identifiers are encrypted in transit and at rest using banking-grade AES-256 protocol.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF8FD] border border-purple-100">
              <span className="material-symbols-outlined text-3xl text-[#A855F7] mb-4">
                delete_forever
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Instant Token Revocation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Disconnect anytime with a single click directly from your Meta Business Manager Integrations panel.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
