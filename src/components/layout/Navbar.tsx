"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Platform", href: "/platform/" },
  { name: "Methodology", href: "/methodology/" },
  { name: "About Us", href: "/about/" },
  { name: "Case Studies", href: "/case-studies/" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 w-full z-50 transition-all duration-200",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
          : "bg-white/70 backdrop-blur-sm border-b border-slate-100"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[70px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <img
            src="/growcin-logo.png?v=2"
            alt="Growcin"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900">
            Grow<span className="text-[#A855F7]">cin</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href && (pathname === link.href || pathname?.startsWith(link.href))

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors duration-150 relative py-1",
                  isActive
                    ? "text-[#A855F7] font-bold"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A855F7] rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Actions & Mobile Trigger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 transition-colors"
          >
            Log in
          </Link>

          <Link
            href="/signup/"
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-sm shadow-primary/20 active:scale-95"
          >
            <span>Get Free Audit</span>
            <span className="material-symbols-outlined text-[15px] leading-none -mr-0.5">
              arrow_forward
            </span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : link.href && (pathname === link.href || pathname?.startsWith(link.href))

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors",
                      isActive
                        ? "bg-purple-50 text-[#A855F7] font-bold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
                    )}
                  </Link>
                )
              })}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
                <Link
                  href="/signup/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 px-4 flex items-center justify-center gap-1.5 bg-primary hover:bg-primary-dark text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-sm shadow-primary/25 active:scale-98 transition-all"
                >
                  <span>Get Free Audit</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </Link>

                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-4 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-center text-xs font-bold uppercase tracking-wider transition-colors block"
                >
                  Log in
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
