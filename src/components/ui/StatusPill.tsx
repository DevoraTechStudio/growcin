import * as React from "react"
import { cn } from "@/lib/utils"

export type StatusType = "good" | "warn" | "bad"

interface StatusPillProps extends React.HTMLAttributes<HTMLDivElement> {
  status: StatusType
  label: string
}

export function StatusPill({ status, label, className, ...props }: StatusPillProps) {
  const statusStyles = {
    good: "bg-[var(--color-status-good)]/15 text-[var(--color-status-good)]",
    warn: "bg-[var(--color-status-warn)]/15 text-[var(--color-status-warn)]",
    bad: "bg-[var(--color-status-bad)]/15 text-[var(--color-status-bad)]",
  }

  const dotStyles = {
    good: "bg-[var(--color-status-good)]",
    warn: "bg-[var(--color-status-warn)]",
    bad: "bg-[var(--color-status-bad)]",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        statusStyles[status],
        className
      )}
      {...props}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dotStyles[status])} />
      {label}
    </div>
  )
}
