"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"

interface LogMessage {
  id: string
  time: string
  type: "info" | "warning" | "success" | "neutral"
  text: string
}

export function LiveSimulator() {
  const [step, setStep] = React.useState(0)
  const [isScanning, setIsScanning] = React.useState(true)
  const [logs, setLogs] = React.useState<LogMessage[]>([])
  const [guardrailEngaged, setGuardrailEngaged] = React.useState(false)
  const [buttonLoading, setButtonLoading] = React.useState(false)

  const initializedRef = React.useRef(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Auto scroll to bottom when logs change
  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      })
    }
  }, [logs])

  // Simulation steps timer
  React.useEffect(() => {
    if (!isScanning) return

    const addLog = (text: string, type: LogMessage["type"]) => {
      const now = new Date()
      const timeStr = now.toTimeString().split(" ")[0]
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), time: timeStr, type, text },
      ])
    }

    if (step === 0) {
      if (!initializedRef.current) {
        initializedRef.current = true
        addLog("Initializing Growcin real-time ad account radar...", "neutral")
      }
      const t = setTimeout(() => {
        addLog("Connected to Meta Ads Manager OAuth. Reading active feeds...", "info")
        setStep(1)
      }, 1500)
      return () => clearTimeout(t)
    }

    if (step === 1) {
      const t = setTimeout(() => {
        addLog("Scanning active ad sets: 'Prospecting_Lookalikes', 'Retargeting_V2', 'Brand_Search'...", "info")
        setStep(2)
      }, 2000)
      return () => clearTimeout(t)
    }

    if (step === 2) {
      const t = setTimeout(() => {
        addLog("⚠️ CPA Spike Alert: 'Prospecting_Lookalikes' CPA has surged to $48.90 (Target: $22.00, +122%) over the last 4 hours.", "warning")
        addLog("Detected creative fatigue decay: CTR dropped from 1.8% to 0.72% inside ad set 'Lookalikes_Age25-45'.", "warning")
        setIsScanning(false)
        setStep(3)
      }, 2500)
      return () => clearTimeout(t)
    }
  }, [step, isScanning])

  const handleEngage = () => {
    setButtonLoading(true)
    setTimeout(() => {
      setButtonLoading(false)
      setGuardrailEngaged(true)
      const now = new Date()
      const timeStr = now.toTimeString().split(" ")[0]
      setLogs((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          time: timeStr,
          type: "success",
          text: "🛡️ CPA Guardrail Engaged: Native Meta API call executed successfully. Ad set paused. Wasted spend stopped.",
        },
        {
          id: Math.random().toString(),
          time: timeStr,
          type: "neutral",
          text: "Budget allocation update: $350/day redirected from 'Prospecting_Lookalikes' to 'Retargeting_V2' (Current ROAS: 3.4x).",
        },
      ])
      setStep(4)
    }, 1200)
  }

  const handleReset = () => {
    setStep(0)
    setIsScanning(true)
    setLogs([])
    setGuardrailEngaged(false)
    initializedRef.current = false
  }

  return (
    <div className="w-full rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] shadow-2xl overflow-hidden flex flex-col min-h-[480px] sm:h-[520px]">
      {/* Simulator Window Header */}
      <div className="bg-[var(--color-surface-alt)] px-4 py-3 sm:px-6 sm:py-4 border-b border-[var(--color-border-subtle)] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex gap-1.5 mr-1 sm:mr-2 shrink-0">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[var(--color-status-bad)]/60" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[var(--color-status-warn)]/60" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[var(--color-status-good)]/60" />
          </div>
          <img src="/growcin-logo.png?v=2" alt="Growcin" className="w-4 h-4 object-contain shrink-0" />
          <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wide text-[var(--color-text-secondary)] uppercase truncate">Growcin Signal Simulator</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {isScanning ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] animate-pulse">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-cyan)]" />
              Scanning
            </span>
          ) : guardrailEngaged ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[var(--color-status-good)]/10 text-[var(--color-status-good)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-status-good)]" />
              Guarded
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[var(--color-status-warn)]/10 text-[var(--color-status-warn)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-status-warn)]" />
              Risk Detected
            </span>
          )}
        </div>
      </div>

      {/* Simulator Pulse/Progress Line */}
      <div className="h-1 bg-[var(--color-surface-alt)] relative overflow-hidden">
        {isScanning && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[var(--color-brand-cyan)] to-transparent"
          />
        )}
        {buttonLoading && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[var(--color-brand-blue)] to-transparent"
          />
        )}
      </div>

      {/* Terminal Log Output */}
      <div ref={containerRef} className="flex-1 p-4 sm:p-6 font-mono text-[11px] sm:text-xs overflow-y-auto space-y-3 bg-[var(--color-base)]/40 flex flex-col justify-start">
        <AnimatePresence>
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2.5 sm:gap-3"
            >
              <span className="text-[var(--color-text-muted)] shrink-0 select-none">[{log.time}]</span>
              <span
                className={
                  log.type === "warning"
                    ? "text-[var(--color-status-warn)]"
                    : log.type === "success"
                    ? "text-[var(--color-status-good)] font-semibold"
                    : log.type === "info"
                    ? "text-[var(--color-brand-cyan)]"
                    : "text-[var(--color-text-secondary)]"
                }
              >
                {log.text}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Interactive Trigger Control Bar */}
      <div className="bg-[var(--color-surface-alt)]/50 px-4 py-3 sm:px-6 sm:py-4 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div>
          {step < 3 ? (
            <p className="text-xs text-[var(--color-text-muted)] font-medium">Simulation automatically running... Wait for scanner alert.</p>
          ) : step === 3 ? (
            <p className="text-xs text-[var(--color-status-warn)] font-semibold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm shrink-0">warning</span> Action Required: Spiking CPA exposing ad budget.
            </p>
          ) : (
            <p className="text-xs text-[var(--color-status-good)] font-semibold flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm shrink-0">check_circle</span> Budget Protection Active. Spills stopped.
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 justify-end sm:justify-start">
          {step === 3 && (
            <Button
              size="sm"
              onClick={handleEngage}
              disabled={buttonLoading}
              className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] hover:opacity-90 font-semibold w-full sm:w-auto"
            >
              {buttonLoading ? "Executing API..." : "Engage Guardrail"}
            </Button>
          )}

          {step >= 3 && (
            <Button
              size="sm"
              variant="secondary"
              onClick={handleReset}
              disabled={buttonLoading}
              className="w-full sm:w-auto"
            >
              Restart Simulation
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
