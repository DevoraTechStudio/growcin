"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  title: string
  quote: string
  image?: string
  videoSrc?: string
  className?: string
  onPlay?: () => void
}

export function TestimonialCard({
  name,
  title,
  quote,
  image,
  videoSrc,
  className,
  onPlay,
}: TestimonialCardProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Lock body scroll and close on Escape when modal is active
  React.useEffect(() => {
    if (!isPlaying) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPlaying(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isPlaying])

  const handlePlayClick = () => {
    if (onPlay) {
      onPlay()
    } else if (videoSrc) {
      setIsPlaying(true)
    }
  }

  return (
    <>
      <div
        className={cn(
          "group relative rounded-[2.5rem] bg-white p-3 sm:p-4 shadow-[0_20px_50px_-15px_rgba(168,85,247,0.08),0_10px_20px_-5px_rgba(0,0,0,0.03)] border border-slate-100/90 overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-500",
          className
        )}
      >
        {/* Video Thumbnail Area */}
        {image ? (
          <div
            onClick={handlePlayClick}
            className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-slate-900 mb-6 cursor-pointer group/thumb shadow-lg"
          >
            <img
              alt={`${name}, ${title}`}
              src={image}
              className="w-full h-full object-cover object-center contrast-105 group-hover/thumb:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none" />

            {/* Meta Business Partner top left badge */}
            <div className="absolute top-4 left-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-white shadow-lg pointer-events-none">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                <path
                  fill="#0668E1"
                  d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
                />
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                Meta Business Partner
              </span>
            </div>

            {/* Frosted Glass Play Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handlePlayClick()
              }}
              aria-label={`Play video walkthrough from ${name}`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#A855F7] shadow-xl hover:scale-110 hover:bg-[#A855F7] hover:text-white group-hover/thumb:scale-110 group-hover/thumb:bg-[#A855F7] group-hover/thumb:text-white transition-all duration-300 cursor-pointer group/btn"
            >
              <span
                className="material-symbols-outlined text-3xl ml-1 text-[#A855F7] group-hover/thumb:text-white group-hover/btn:text-white transition-colors"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_arrow
              </span>
            </button>

            {/* Founder Name & Title bottom left */}
            <div className="absolute bottom-5 left-6 text-left">
              <h3 className="text-white font-bold text-lg sm:text-xl tracking-tight leading-tight">{name}</h3>
              <p className="text-white/80 text-xs sm:text-sm font-medium mt-0.5">{title}</p>
            </div>

            {/* Meta Ads Verified bottom right */}
            <div className="absolute bottom-4 right-5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-white shadow-lg pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-200">
                Meta Ads Verified
              </span>
            </div>
          </div>
        ) : null}

        {/* Quote & Stars */}
        <div className="px-3 sm:px-4 pb-4 flex-1 flex flex-col justify-between text-left">
          <div>
            {/* 5 Purple Stars */}
            <div className="flex gap-1 text-[#A855F7] mb-4">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-lg text-[#A855F7]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>

            <p
              className="text-slate-800 text-sm sm:text-base leading-relaxed font-normal"
              style={{ color: "#1e293b" }}
            >
              &ldquo;{quote}&rdquo;
            </p>
          </div>

          {!image && (
            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="font-bold text-slate-900 text-base">{name}</div>
              <div className="text-xs text-slate-400 font-medium">{title}</div>
            </div>
          )}
        </div>
      </div>

      {/* Video Modal Player */}
      {mounted && isPlaying && videoSrc && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md"
          onClick={() => setIsPlaying(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Video testimonial from ${name}`}
        >
          <div
            className="relative w-full max-w-sm sm:max-w-md bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-slate-900/95">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A855F7] animate-pulse shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-white font-bold text-sm tracking-tight truncate">{name}</h4>
                  <p className="text-slate-400 text-xs truncate">{title}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsPlaying(false)}
                aria-label="Close video"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Responsive Video Container */}
            <div className="relative w-full aspect-[9/16] max-h-[72vh] bg-black flex items-center justify-center overflow-hidden">
              <video
                src={videoSrc}
                poster={image}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Bottom Quote Snippet */}
            <div className="px-5 py-3 border-t border-white/10 bg-slate-900/95 text-left">
              <p className="text-xs text-slate-300 line-clamp-2 italic">
                &ldquo;{quote}&rdquo;
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
