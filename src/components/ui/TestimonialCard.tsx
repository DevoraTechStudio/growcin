"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  title: string
  quote: string
  image?: string
  className?: string
  onPlay?: () => void
}

export function TestimonialCard({
  name,
  title,
  quote,
  image,
  className,
  onPlay,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-[2.5rem] bg-white p-3 sm:p-4 shadow-[0_20px_50px_-15px_rgba(168,85,247,0.08),0_10px_20px_-5px_rgba(0,0,0,0.03)] border border-slate-100/90 overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-500",
        className
      )}
    >
      {/* Video Thumbnail Area */}
      {image ? (
        <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-slate-900 mb-6">
          <img
            alt={`${name}, ${title}`}
            src={image}
            className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Frosted Glass Play Button */}
          <button
            type="button"
            onClick={onPlay}
            aria-label={`Play video walkthrough from ${name}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#A855F7] shadow-xl hover:scale-110 hover:bg-[#A855F7] hover:text-white transition-all duration-300 cursor-pointer group/btn"
          >
            <span
              className="material-symbols-outlined text-3xl ml-1 text-[#A855F7] group-hover/btn:text-white transition-colors"
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
  )
}
