"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Logo } from "./Logo"

const NAV_LINKS = [
  { name: "Platform", href: "/platform" },
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About", href: "/about" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  React.useEffect(() => {
    if (!mobileMenuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileMenuOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6">
      <div
        className={cn(
          "h-14 sm:h-[60px] lg:h-[64px] w-full max-w-[1120px] rounded-full flex items-center justify-between px-1.5 sm:px-2 transition-all duration-300 relative",
          scrolled || mobileMenuOpen
            ? "bg-white/90 backdrop-blur-xl border border-[var(--color-border-subtle)] shadow-[0_8px_40px_-12px_rgba(34,36,51,0.18)]"
            : "bg-white/55 backdrop-blur-md border border-white/60 shadow-sm"
        )}
      >
        <div className="flex items-center pl-3 sm:pl-4 lg:pl-5 shrink-0 min-w-0">
          <Link href="/" className="flex items-center gap-2 group min-w-0">
            <Logo iconClassName="w-6 h-6 sm:w-7 sm:h-7" className="gap-2" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13px] font-semibold">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "transition-colors whitespace-nowrap",
                pathname === link.href
                  ? "text-[var(--color-brand-blue)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-ink)]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 pr-1 sm:pr-1.5 shrink-0">
          <a
            href="https://app.aichatassist.com/auth/sign-in"
            className="hidden lg:block text-[13px] font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-ink)] transition-colors mr-1 px-3"
          >
            Log in
          </a>

          <Link href="/signup" className="hidden md:block">
            <button className="h-9 lg:h-10 px-4 lg:px-5 brand-gradient-bg text-white rounded-full text-[11px] lg:text-[12px] font-bold hover:-translate-y-0.5 transition-all shadow-[0_8px_20px_-6px_rgba(144,48,248,0.5)] active:scale-[0.98] cursor-pointer whitespace-nowrap">
              Start Free Trial
            </button>
          </Link>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-ink)] transition-colors bg-[var(--color-surface-alt)] rounded-full border border-[var(--color-border-subtle)] cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="absolute top-[calc(100%+10px)] left-0 right-0 max-h-[min(70vh,520px)] overflow-y-auto bg-white/98 backdrop-blur-xl border border-[var(--color-border-subtle)] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:hidden flex flex-col gap-1 shadow-2xl z-50"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[15px] sm:text-base font-semibold text-body hover:text-[var(--color-ink)] hover:bg-[var(--color-base)] transition-colors px-3 py-3 rounded-xl"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2.5 mt-2 pt-4 border-t border-[var(--color-border-subtle)]">
                <a href="https://app.aichatassist.com/auth/sign-in" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full h-11 border border-slate-300 text-[var(--color-ink)] hover:bg-[var(--color-surface-alt)] rounded-full text-sm font-bold transition-all cursor-pointer">
                    Log in
                  </button>
                </a>
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full h-11 brand-gradient-bg text-white rounded-full text-sm font-bold transition-all cursor-pointer">
                    Start Free Trial
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
