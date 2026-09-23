"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MascotAvatarProps {
  size?: number
  className?: string
}

export function MascotAvatar({ size = 64, className }: MascotAvatarProps) {
  const [isBlinking, setIsBlinking] = React.useState(false)

  React.useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 200)
    }, 3800)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <div
      className={cn(
        "relative rounded-full select-none cursor-pointer flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95",
        className
      )}
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle at 35% 30%, #FFFFFF 0%, #E0E7FF 30%, #C7D2FE 60%, #818CF8 90%, #6366F1 100%)",
        boxShadow:
          "0 12px 30px -4px rgba(99, 102, 241, 0.45), inset 0 2px 4px rgba(255, 255, 255, 0.9), inset 0 -4px 8px rgba(79, 70, 229, 0.4)",
      }}
    >
      {/* Outer ambient glow halo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400/30 via-indigo-300/20 to-pink-300/30 blur-md pointer-events-none -z-10" />

      {/* Glass reflection top highlight */}
      <div className="absolute top-1.5 left-3 w-4 h-2.5 bg-white/70 rounded-full blur-[0.6px] -rotate-45 pointer-events-none" />

      {/* Facial Features */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-1">
        {/* Eyes Row */}
        <div className="flex items-center gap-3.5">
          {/* Left Eye */}
          <div
            className={cn(
              "relative bg-[#1e1b4b] rounded-full transition-all duration-150 flex items-start justify-end",
              isBlinking ? "h-0.5 w-3.5 my-1.5 bg-[#1e1b4b]" : "w-3 h-4"
            )}
          >
            {!isBlinking && (
              <>
                <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-full" />
                <span className="absolute bottom-0.5 left-0.5 w-0.5 h-0.5 bg-white/80 rounded-full" />
              </>
            )}
          </div>

          {/* Right Eye */}
          <div
            className={cn(
              "relative bg-[#1e1b4b] rounded-full transition-all duration-150 flex items-start justify-end",
              isBlinking ? "h-0.5 w-3.5 my-1.5 bg-[#1e1b4b]" : "w-3 h-4"
            )}
          >
            {!isBlinking && (
              <>
                <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-full" />
                <span className="absolute bottom-0.5 left-0.5 w-0.5 h-0.5 bg-white/80 rounded-full" />
              </>
            )}
          </div>
        </div>

        {/* Cheeks and Smile */}
        <div className="relative flex items-center justify-center w-full mt-0.5">
          {/* Left Blush */}
          <div className="absolute left-3 w-2.5 h-1 bg-pink-400/40 rounded-full blur-[0.6px]" />

          {/* Smile */}
          <div className="w-2 h-1 border-b-[1.8px] border-[#1e1b4b] rounded-full" />

          {/* Right Blush */}
          <div className="absolute right-3 w-2.5 h-1 bg-pink-400/40 rounded-full blur-[0.6px]" />
        </div>
      </div>
    </div>
  )
}
