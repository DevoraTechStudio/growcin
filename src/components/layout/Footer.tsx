import * as React from "react"
import Link from "next/link"
import { Logo } from "./Logo"

const FOOTER_LINKS = [
  {
    title: "Platform",
    links: [
      { name: "How it works", href: "/platform" },
      { name: "Monitoring", href: "/platform" },
      { name: "Methodology", href: "/methodology" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "For Founders", href: "#" },
      { name: "For Agencies", href: "#" },
      { name: "E-commerce", href: "#" },
      { name: "B2B SaaS", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "System Status", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-base)] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Logo iconClassName="w-8 h-8" />
              <div className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mt-1 ml-11">
                AI-Powered Growth Platform
              </div>
            </Link>
            <p className="text-[var(--color-text-secondary)] text-sm max-w-xs mb-8">
              Turning raw performance data into ranked, explainable actions so you don&apos;t have to babysit your growth engine.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-white transition-colors">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a href="#" className="text-[var(--color-text-secondary)] hover:text-white transition-colors">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>
          
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-white mb-6">{group.title}</h4>
              <ul className="flex flex-col gap-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-[var(--color-border-subtle)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Growcin Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
