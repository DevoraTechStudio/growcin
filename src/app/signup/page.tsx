"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { Logo } from "@/components/layout/Logo"

export default function SignupPage() {
  return (
    <div className="flex flex-col w-full min-h-[85vh] items-center justify-center pt-28 pb-16 px-4 sm:px-6 relative">
      <div className="absolute inset-0 hero-atmosphere pointer-events-none" />
      <div className="absolute inset-0 hero-grid-pattern pointer-events-none opacity-60" />

      <motion.div
        initial={false}
            animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <div className="inline-flex justify-center mb-4">
            <Logo iconClassName="w-9 h-9" />
          </div>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-[var(--color-ink)]">
            Start your free trial
          </h1>
          <p className="text-sm text-body font-medium mt-2">
            14 days free · No credit card required
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-white p-8 shadow-[0_20px_50px_-24px_rgba(34,36,51,0.2)] space-y-5">
          <form className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-body-muted">
                Work email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full bg-[var(--color-base)] border border-[var(--color-border-subtle)] rounded-xl px-4 py-3 text-[var(--color-ink)] outline-none focus:border-[var(--color-brand-blue)] focus:ring-2 focus:ring-[var(--color-brand-blue)]/20 transition-all text-sm font-medium"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-body-muted">
                Company name
              </label>
              <input
                type="text"
                placeholder="Acme Growth"
                className="w-full bg-[var(--color-base)] border border-[var(--color-border-subtle)] rounded-xl px-4 py-3 text-[var(--color-ink)] outline-none focus:border-[var(--color-brand-blue)] focus:ring-2 focus:ring-[var(--color-brand-blue)]/20 transition-all text-sm font-medium"
              />
            </div>

            <Button className="w-full mt-2" size="lg" type="button">
              Create account
            </Button>
          </form>

          <div className="text-center text-xs text-body-muted border-t border-[var(--color-border-subtle)] pt-5">
            Already have an account?{" "}
            <a
              href="https://app.aichatassist.com/auth/sign-in"
              className="text-[var(--color-brand-blue)] hover:text-[var(--color-ink)] transition-colors font-bold"
            >
              Log in
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
