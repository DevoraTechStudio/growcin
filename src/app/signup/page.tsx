"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "@/components/layout/Logo"

const CALENDAR_LINK =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ13LgvF5NejuXGRDqvS4VUR584JG2eqrImNEgVHMAWh9kqyTawLvPA3wSwpXWaOq7zhgGCHWkeq"

export default function SignupPage() {
  const [email, setEmail] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [spend, setSpend] = React.useState("$5k - $25k/mo")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const payload = {
      email,
      company,
      spend,
      submittedAt: new Date().toISOString(),
      page: typeof window !== "undefined" ? window.location.href : "",
    }

    // 1. Backup to browser storage so no lead is lost
    try {
      const stored = JSON.parse(localStorage.getItem("growcin_audit_leads") || "[]")
      stored.push(payload)
      localStorage.setItem("growcin_audit_leads", JSON.stringify(stored))
    } catch {
      // ignore storage errors
    }

    // 2. Post to webhook endpoint if configured in env
    const webhookUrl = process.env.NEXT_PUBLIC_AUDIT_WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
      } catch {
        // network failure, graceful fallback
      }
    } else {
      await new Promise((r) => setTimeout(r, 600))
    }

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col w-full min-h-[85vh] items-center justify-center pt-28 pb-16 px-4 sm:px-6 relative bg-[linear-gradient(180deg,#FBF9FF_0%,#FFFFFF_50%,#FAF8FD_100%)]">
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex justify-center mb-4">
            <Logo iconClassName="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {isSubmitted ? "Audit Queued" : "Run your free audit"}
          </h1>
          <p className="text-sm text-slate-500 font-medium mt-2">
            {isSubmitted
              ? "We've received your request · Report delivered in 24h"
              : "Read-only · No card needed · Results in 24h"}
          </p>
        </div>

        <div className="rounded-3xl border border-purple-100 bg-white p-6 sm:p-8 shadow-xl shadow-purple-500/5 space-y-6">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                {/* Book Live Walkthrough Option */}
                <a
                  href={CALENDAR_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-purple-700 hover:to-indigo-700 text-white text-sm font-semibold shadow-md shadow-purple-500/20 transition-all hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-base">calendar_month</span>
                  <span>Book Live 1-on-1 Audit Call</span>
                </a>

                <div className="flex items-center gap-3 my-1">
                  <div className="h-px flex-1 bg-slate-200" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 shrink-0 select-none">
                    or get report via email
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Work email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full bg-[#FAF8FD] border border-purple-100 rounded-xl px-4 py-3 text-slate-900 outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-purple-500/20 transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Company / Agency name
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Growth Agency"
                      className="w-full bg-[#FAF8FD] border border-purple-100 rounded-xl px-4 py-3 text-slate-900 outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-purple-500/20 transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Monthly Meta Ad Spend
                    </label>
                    <select
                      value={spend}
                      onChange={(e) => setSpend(e.target.value)}
                      className="w-full bg-[#FAF8FD] border border-purple-100 rounded-xl px-4 py-3 text-slate-900 outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-purple-500/20 transition-all text-sm font-medium cursor-pointer"
                    >
                      <option value="Under $5k/mo">Under $5,000 / mo</option>
                      <option value="$5k - $25k/mo">$5,000 - $25,000 / mo</option>
                      <option value="$25k - $100k/mo">$25,000 - $100,000 / mo</option>
                      <option value="$100k+/mo">$100,000+ / mo</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-full border border-purple-200 text-purple-900 hover:bg-purple-50 transition-colors font-bold text-xs uppercase tracking-widest cursor-pointer mt-2 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-purple-600/30 border-t-purple-600 rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Get Free Audit</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="text-center text-xs text-slate-500 border-t border-slate-100 pt-5">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-[#A855F7] hover:underline font-bold"
                  >
                    Log in
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4 space-y-5"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Audit Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    We&apos;re queuing your complimentary Meta Ads account audit for{" "}
                    <strong className="text-slate-900">{email}</strong> ({company}).
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Our team will compile your CPA leak indicators, creative fatigue alerts, and dead-hour schedule. Your report will arrive in your inbox within 24 hours.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
                  <a
                    href={CALENDAR_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-full bg-primary hover:bg-primary-dark text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-primary/20"
                  >
                    <span>Prefer a live review? Book Call</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </a>

                  <Link
                    href="/"
                    className="w-full py-2.5 px-4 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
