import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function FinalCTA() {
  return (
    <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(144,48,248,0.06)_50%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(720px,100%)] h-[320px] sm:h-[420px] bg-[var(--color-brand-blue)]/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-5xl">
        <div className="rounded-2xl sm:rounded-[2rem] overflow-hidden relative bg-[var(--color-ink)] px-5 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 text-center">
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 20% 0%, rgba(144,48,248,0.55), transparent 55%), radial-gradient(ellipse 60% 70% at 90% 100%, rgba(200,48,248,0.35), transparent 50%)",
            }}
          />
          <div className="relative z-10">
            <p className="font-display text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-brand-accent)] mb-4 sm:mb-5">
              Growcin
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-5 leading-[1.1]">
              Ready to grow with AI?
            </h2>
            <p className="text-[15px] sm:text-base md:text-lg text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Start your free trial and automate SEO, social, ads, email, and analytics —
              all from one AI marketing platform built by Devora.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/15"
                asChild
              >
                <Link href="/#demo">Book a Demo</Link>
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 mt-5 sm:mt-6">
              14-day free trial · No credit card · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
