import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function FinalCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--color-brand-blue)]/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto rounded-[2rem] p-1 bg-[var(--color-surface)] bg-gradient-to-br from-[var(--color-border-subtle)] via-transparent to-[var(--color-border-subtle)] overflow-hidden">
          <div className="bg-[var(--color-surface)] rounded-[1.8rem] px-8 py-16 md:p-20 text-center relative overflow-hidden">
            {/* Inner glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--color-brand-cyan)]/10 blur-[64px] rounded-full" />
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Find out what&apos;s leaking <br className="hidden md:block" />
              <span className="brand-gradient-text">in your campaigns.</span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
              Get a free Meta account audit. We analyse your active campaigns, flag the CPA drift, creative fatigue signals, and lead quality gaps currently costing you — and send you a prioritised list of what to fix first.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] hover:opacity-95 text-white" asChild>
                <Link href="/signup">Audit My Campaigns</Link>
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/#demo">See how it works</Link>
              </Button>
            </div>
            
            <p className="text-sm text-[var(--color-text-muted)] mt-6">
              No credit card · No sales call required · Results within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
