"use client"

import * as React from "react"
import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface StatNumberProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  decimals?: number
}

export function StatNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  className,
  decimals = 0,
}: StatNumberProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  const springValue = useSpring(0, {
    bounce: 0,
    duration,
  })

  React.useEffect(() => {
    if (isInView) {
      springValue.set(value)
    }
  }, [isInView, value, springValue])

  const display = useTransform(springValue, (current) => {
    if (decimals > 0) {
      return current.toFixed(decimals)
    }
    return Math.floor(current).toLocaleString()
  })

  return (
    <span ref={ref} className={cn("tabular-nums inline-block", className)}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}
