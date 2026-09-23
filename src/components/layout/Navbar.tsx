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
  { name: "Blog", href: "/blog/" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <nav className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 w-full flex justify-center px-3 sm:px-4 lg:px-6 z-50 pointer-events-none">
      <div className="nav-pill-new h-[56px] sm:h-[64px] lg:h-[72px] w-full max-w-[1100px] rounded-full flex items-center justify-between px-2 sm:px-3 bg-white/80 backdrop-blur-lg border border-black/5 shadow-xl relative pointer-events-auto">
        {/* Logo */}
        <div className="flex items-center pl-2 sm:pl-4 lg:pl-6 font-bold text-lg sm:text-xl tracking-tight shrink-0">
          <Link className="flex items-center gap-2 sm:gap-2.5 group" href="/">
            <img
              src="/growcin-logo.png?v=2"
              alt="Growcin"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900">
              Grow<span className="text-[#A855F7]">cin</span>
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-slate-500">
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
                  "transition-colors",
                  isActive ? "text-primary font-bold" : "hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-4 pr-1 sm:pr-2">
          <a href="https://app.aichatassist.com/auth/sign-in" className="hidden md:inline-flex">
            <button className="h-10 sm:h-11 px-5 sm:px-8 bg-primary hover:bg-primary-dark text-white rounded-full text-[11px] font-bold hover:scale-105 transition-all uppercase tracking-[0.2em] shadow-lg shadow-primary/20 active:scale-95 cursor-pointer">
              Login
            </button>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-slate-600 hover:text-primary transition-colors bg-white/50 rounded-full border border-black/5 shadow-sm cursor-pointer shrink-0"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[20px] sm:text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-black/5 p-6 shadow-2xl flex flex-col gap-4 text-center lg:hidden z-50"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "py-2 text-base font-semibold transition-colors",
                  pathname === link.href ? "text-primary font-bold" : "text-slate-700 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="https://app.aichatassist.com/auth/sign-in"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20 block text-center"
              >
                Login
              </a>
              <Link
                href="/signup/"
                className="w-full py-3 bg-purple-50 text-primary-dark border border-purple-200 rounded-full text-xs font-bold uppercase tracking-widest"
              >
                Run Free Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
