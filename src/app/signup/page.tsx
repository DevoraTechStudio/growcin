"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Logo } from "@/components/layout/Logo"

export default function SignupPage() {
  const [email, setEmail] = React.useState("")
  const [company, setCompany] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = "https://app.growcin.com/auth/sign-up"
  }

  return (
    <div className="flex flex-col w-full min-h-[85vh] items-center justify-center pt-28 pb-16 px-4 sm:px-6 relative bg-[linear-gradient(180deg,#FBF9FF_0%,#FFFFFF_50%,#FAF8FD_100%)]">
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex justify-center mb-4">
            <Logo iconClassName="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Run your free audit
          </h1>
          <p className="text-sm text-slate-500 font-medium mt-2">
            Read-only · No card needed · Results in 24h
          </p>
        </div>

        <div className="rounded-3xl border border-purple-100 bg-white p-6 sm:p-8 shadow-xl shadow-purple-500/5 space-y-6">
          <a
            href="https://app.growcin.com/auth/sign-up"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-purple-700 hover:to-indigo-700 text-white text-sm font-semibold shadow-md shadow-purple-500/20 transition-all hover:-translate-y-0.5"
          >
            <span>Connect via Meta OAuth</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-xs text-slate-400 font-mono uppercase tracking-wider">
              or enter work email
            </span>
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

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-full border border-purple-200 text-purple-900 hover:bg-purple-50 transition-colors font-bold text-xs uppercase tracking-widest cursor-pointer mt-2"
            >
              Get Free Audit
            </button>
          </form>

          <div className="text-center text-xs text-slate-500 border-t border-slate-100 pt-5">
            Already have an account?{" "}
            <a
              href="https://app.aichatassist.com/auth/sign-in"
              className="text-[#A855F7] hover:underline font-bold"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
