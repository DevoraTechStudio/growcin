import * as React from "react"
import { cn } from "@/lib/utils"

const COMPARISON_DATA = [
  {
    feature: "Pricing",
    without: "High retainer, plus ad spend, paid regardless of consistency",
    with: "Low flat fee, plus ad spend, with the full system included"
  },
  {
    feature: "Audience targeting",
    without: "Set manually, revisited occasionally based on gut feel",
    with: "AI audience builder refines continuously from live performance data"
  },
  {
    feature: "Balancing budget",
    without: "Fixed split, manually rebalanced when someone notices an issue",
    with: "Automatically shifts toward what's converting in real time"
  },
  {
    feature: "Timing",
    without: "Runs on a flat schedule, rarely tuned to actual audience activity",
    with: "Time-slot optimisation based on when the audience is actually active"
  },
  {
    feature: "Chat assistant",
    without: "Depends on staff availability, often hours or next business day",
    with: "AI chat assistant responds instantly, 24/7"
  },
  {
    feature: "Pacing",
    without: "Manual or bulk-blasted, high risk of spam flags and number bans",
    with: "Paced broadcasting with automatic throttling to protect the number"
  },
  {
    feature: "Creative scoring",
    without: "Reviewed periodically, often subjectively",
    with: "Continuous, data-driven creative scoring"
  },
  {
    feature: "Reports",
    without: "Monthly PDF or call, format varies by agency",
    with: "Account audit, campaign, and weekly reports as standard, every month"
  },
  {
    feature: "Custom templates",
    without: "Generic templates reused across clients",
    with: "Content adapts to each business's specific USP automatically"
  },
  {
    feature: "Consistency",
    without: "Depends on the individual manager's bandwidth and attention that week",
    with: "Same level of monitoring and optimisation applied every day, automatically"
  }
]

export function ComparisonTable() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Desktop view */}
      <div className="hidden md:block overflow-hidden rounded-[2rem] border border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-2xl">
        <div className="grid grid-cols-3">
          {/* Header */}
          <div className="p-8 border-b border-[var(--color-border-subtle)]" />
          <div className="p-8 border-b border-[var(--color-border-subtle)] border-l border-[var(--color-border-subtle)] bg-[var(--color-surface-alt)]/50">
            <h3 className="text-xl font-semibold text-[var(--color-text-secondary)]">Without Growcin</h3>
          </div>
          <div className="p-8 border-b border-[var(--color-border-subtle)] border-l border-[var(--color-border-subtle)] bg-[var(--color-brand-blue)]/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)]" />
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              With Growcin
              <span className="material-symbols-outlined text-[var(--color-brand-cyan)] text-xl">bolt</span>
            </h3>
          </div>

          {/* Rows */}
          {COMPARISON_DATA.map((row, i) => (
            <React.Fragment key={i}>
              <div className="p-6 md:p-8 border-b border-[var(--color-border-subtle)] flex items-center">
                <span className="font-medium text-white">{row.feature}</span>
              </div>
              <div className="p-6 md:p-8 border-b border-[var(--color-border-subtle)] md:border-l bg-[var(--color-surface-alt)]/30 flex items-start gap-3">
                <span className="material-symbols-outlined text-[var(--color-status-bad)] mt-0.5 shrink-0 text-xl">close</span>
                <span className="text-[var(--color-text-secondary)]">{row.without}</span>
              </div>
              <div className="p-6 md:p-8 border-b border-[var(--color-border-subtle)] md:border-l bg-[var(--color-brand-blue)]/5 flex items-start gap-3">
                <span className="material-symbols-outlined text-[var(--color-status-good)] mt-0.5 shrink-0 text-xl">check_circle</span>
                <span className="text-white font-medium">{row.with}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden space-y-6">
        {COMPARISON_DATA.map((row, i) => (
          <div key={i} className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 space-y-4 text-left">
            <h4 className="font-semibold text-white text-lg border-b border-[var(--color-border-subtle)] pb-2">{row.feature}</h4>
            <div className="space-y-3">
              <div className="bg-[var(--color-surface-alt)]/30 p-4 rounded-xl flex items-start gap-3">
                <span className="material-symbols-outlined text-[var(--color-status-bad)] mt-0.5 shrink-0 text-xl">close</span>
                <div>
                  <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase mb-1">Without Growcin</div>
                  <div className="text-[var(--color-text-secondary)] text-sm">{row.without}</div>
                </div>
              </div>
              <div className="bg-[var(--color-brand-blue)]/5 p-4 rounded-xl flex items-start gap-3 border border-[var(--color-brand-blue)]/10">
                <span className="material-symbols-outlined text-[var(--color-status-good)] mt-0.5 shrink-0 text-xl">check_circle</span>
                <div>
                  <div className="text-[10px] font-bold text-[var(--color-brand-cyan)] uppercase mb-1">With Growcin</div>
                  <div className="text-white text-sm font-medium">{row.with}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
