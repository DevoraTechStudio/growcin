import * as React from "react"
import Link from "next/link"
import { Logo } from "./Logo"

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { name: "Platform", href: "/platform" },
      { name: "Features", href: "/#features" },
      { name: "Pricing", href: "/#pricing" },
      { name: "Integrations", href: "/#integrations" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "For Founders", href: "/#features" },
      { name: "For Agencies", href: "/#features" },
      { name: "E-commerce", href: "/#features" },
      { name: "B2B SaaS", href: "/#features" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Methodology", href: "/methodology" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Contact", href: "/signup" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-white pt-12 sm:pt-16 pb-8 sm:pb-10">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 mb-10 sm:mb-14">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 sm:mb-5">
              <Logo iconClassName="w-7 h-7 sm:w-8 sm:h-8" showTagline />
            </Link>
            <p className="text-body text-sm max-w-xs leading-relaxed">
              AI marketing platform that automates growth across SEO, social, ads, email, and analytics.
            </p>
            <p className="text-xs text-body-muted mt-3 sm:mt-4 font-medium">
              A product by Devora Tech Studio
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-[var(--color-ink)] mb-3 sm:mb-5 text-sm">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-body hover:text-[var(--color-brand-blue)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--color-border-subtle)] pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-sm text-body-muted">
            © {new Date().getFullYear()} Growcin. Built by Devora.
          </p>
          <div className="flex gap-6 text-sm text-body-muted">
            <Link href="#" className="hover:text-[var(--color-ink)] transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-[var(--color-ink)] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
