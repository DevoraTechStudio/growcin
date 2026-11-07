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
            className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-slate-900 mb-6 cursor-pointer group/thumb"
          >
            <img
              alt={`${name}, ${title}`}
              src={image}
              className="w-full h-full object-cover grayscale contrast-105 group-hover/thumb:scale-105 group-hover/thumb:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

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

            {/* Tech Emblem bottom right */}
            <div className="absolute bottom-5 right-6 text-white/70">
              <span className="material-symbols-outlined text-2xl">token</span>
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
