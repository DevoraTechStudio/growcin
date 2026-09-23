"use client"

import * as React from "react"

export function FinalCTA() {
  return (
    <section id="audit" className="py-14 sm:py-20 bg-white text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#7C3AED] via-[#9333EA] to-[#C026D3] px-5 py-12 sm:px-12 md:px-16 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.15)_0%,_transparent_60%)] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-8 sm:w-12 h-px bg-white/40" />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.45em] text-white/70">
                FREE AUDIT
              </span>
              <span className="w-8 sm:w-12 h-px bg-white/40" />
            </div>
            <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Stop ad budget leaks before they cost you.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
              Get an instant audit of your ad accounts. Growcin spots CPA spikes, tired creatives, and lost leads — then gives you an exact, step-by-step fix.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/signup/"
                className="px-8 py-3.5 bg-white text-slate-900 text-base font-bold rounded-full shadow-lg hover:bg-white/90 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                Audit My Campaigns
              </a>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ13LgvF5NejuXGRDqvS4VUR584JG2eqrImNEgVHMAWh9kqyTawLvPA3wSwpXWaOq7zhgGCHWkeq"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-white/15 border border-white/30 text-white text-base font-semibold rounded-full hover:bg-white/25 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 w-full sm:w-auto backdrop-blur-sm"
              >
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
                Book Walkthrough
              </a>
            </div>
            <p className="text-sm text-white/60 mt-8">
              100% free · Read-only access · No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
