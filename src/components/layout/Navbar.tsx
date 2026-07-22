"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Platform", href: "/platform" },
  { name: "Methodology", href: "/methodology" },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-[var(--color-base)]/80 backdrop-blur-md border-[var(--color-border-subtle)] py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center">
            {/* Simple logo representation since we don't have the SVG */}
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">grow</span>
              <span className="brand-gradient-text">cin</span>
            </span>
          </div>
          <span className="hidden lg:block text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mt-1">
            AI-Powered Growth Platform
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === link.href
                  ? "text-white"
                  : "text-[var(--color-text-secondary)]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Auth / CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] hover:opacity-95 text-white">
            <Link href="/signup">Audit My Campaigns</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[var(--color-base)] border-b border-[var(--color-border-subtle)] p-6 md:hidden flex flex-col gap-4 shadow-xl"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-[var(--color-text-secondary)] hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[var(--color-border-subtle)]">
            <Button variant="secondary" asChild className="w-full">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
            </Button>
            <Button asChild className="w-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] text-white">
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>Audit My Campaigns</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
