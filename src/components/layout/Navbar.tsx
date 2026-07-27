"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Logo } from "./Logo"

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Platform", href: "/platform" },
  { name: "Methodology", href: "/methodology" },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full flex justify-center px-4 lg:px-6 z-50">
      <div className="h-[64px] lg:h-[72px] w-full max-w-[1100px] rounded-full flex items-center justify-between px-2 bg-[var(--color-surface)]/70 backdrop-blur-md border border-[var(--color-border-subtle)] shadow-2xl relative">
        {/* Logo */}
        <div className="flex items-center pl-4 lg:pl-6 shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo iconClassName="w-8 h-8" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-[13px] font-semibold">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "transition-colors",
                pathname === link.href
                  ? "text-white"
                  : "text-[var(--color-text-secondary)] hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth / CTA */}
        <div className="flex items-center gap-3 pr-2">
          <Link href="/login" className="hidden lg:block text-[13px] font-semibold text-[var(--color-text-secondary)] hover:text-white transition-colors mr-2">
            Login
          </Link>
          
          <Link href="/signup" className="hidden sm:block">
            <button className="h-11 px-6 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] text-white rounded-full text-[11px] font-bold hover:scale-105 transition-all uppercase tracking-[0.15em] shadow-lg shadow-[var(--color-brand-blue)]/20 active:scale-95 cursor-pointer">
              Audit My Campaigns
            </button>
          </Link>
          
          <Link href="/login" className="sm:hidden">
            <button className="h-10 px-5 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] text-white rounded-full text-[10px] font-bold uppercase tracking-[0.1em] hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Login
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white transition-colors bg-[var(--color-surface-alt)]/50 rounded-full border border-[var(--color-border-subtle)] shadow-sm cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-[76px] left-0 right-0 bg-[var(--color-surface)]/95 backdrop-blur-xl border border-[var(--color-border-subtle)] rounded-3xl p-6 lg:hidden flex flex-col gap-4 shadow-2xl z-50"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors px-2 py-1"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[var(--color-border-subtle)]">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full h-11 border border-[var(--color-border-strong)] text-white hover:bg-white/5 rounded-full text-xs font-bold transition-all uppercase tracking-[0.1em] cursor-pointer">
                  Login
                </button>
              </Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full h-11 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] text-white rounded-full text-xs font-bold transition-all uppercase tracking-[0.1em] cursor-pointer">
                  Audit My Campaigns
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
