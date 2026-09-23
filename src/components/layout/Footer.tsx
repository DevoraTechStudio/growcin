"use client"

import * as React from "react"
import Link from "next/link"

interface FooterLink {
  name: string
  href: string
  external?: boolean
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { name: "AI Campaign Manager", href: "/platform/" },
      { name: "Pricing", href: "/pricing/" },
      { name: "Website AI Chatbot", href: "/platform/website-ai-chatbot/" },
      { name: "WhatsApp Integration", href: "/platform/whatsapp-integration/" },
      { name: "Instagram Integration", href: "/platform/instagram-integration/" },
      { name: "Email Automation", href: "/platform/email-automation/" },
      { name: "AI Chat Auto Reply Assistant", href: "/ai-chat-auto-reply-assistant/" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Solopreneurs", href: "/solutions/solopreneurs/" },
      { name: "Agencies", href: "/solutions/agency/" },
    ],
  },
  {
    title: "Features",
    links: [
      { name: "Campaign Audit", href: "/signup/" },
      { name: "Budget Guardrails", href: "/platform/" },
      { name: "Fatigue Detection", href: "/platform/" },
      { name: "Live Simulator", href: "/#simulator" },
      { name: "Features Overview", href: "/features/" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Our Story", href: "/about/" },
      { name: "Methodology", href: "/methodology/" },
      { name: "Blog", href: "/blog/" },
      { name: "Security & Trust", href: "/security/" },
      { name: "Case Studies", href: "/case-studies/" },
      { name: "Partners", href: "/partners/" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help & FAQ", href: "/#faq" },
      { name: "Contact Support", href: "mailto:support@growcin.com" },
      { name: "Book a Demo", href: "/#audit" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms & Conditions", href: "/legal/terms-conditions/" },
      { name: "Privacy Policy", href: "/legal/privacy/" },
      { name: "Platform Agreement", href: "/legal/platform-agreement/" },
      { name: "Offer Terms", href: "/legal/offer-terms/" },
      { name: "Prohibited Activities", href: "/legal/prohibited-activities/" },
      { name: "Refund Policy", href: "/legal/refund-policy/" },
    ],
  },
]

export function Footer() {
  const [openAccordion, setOpenAccordion] = React.useState<string | null>(null)

  const toggleAccordion = (title: string) => {
    setOpenAccordion((prev) => (prev === title ? null : title))
  }

  return (
    <footer className="relative z-10 bg-white border-t border-slate-200 flex-shrink-0">
      {/* 6-Column Navigation */}
      <div className="bg-white border-b border-slate-100 relative px-4 md:px-0">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:calc(100%/7)_100%] max-w-[1400px] mx-auto hidden md:block" />

        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-20 relative z-10">
          {/* Brand Header Row */}
          <div className="pb-10 mb-10 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/growcin-logo.png?v=2"
                alt="Growcin"
                className="w-10 h-10 object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div>
                <span className="font-bold text-2xl tracking-tight text-slate-900 block leading-tight">
                  Grow<span className="text-[#A855F7]">cin</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">Continuous Campaign Surveillance</span>
              </div>
            </Link>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                AI Campaign Intelligence
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Meta Ads Partner Ready
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-y-0 md:gap-y-12 gap-x-6">
            {FOOTER_COLUMNS.map((col) => {
              const isOpen = openAccordion === col.title
              return (
                <div
                  key={col.title}
                  className="flex flex-col md:gap-6 border-b md:border-b-0 border-slate-50 last:border-b-0"
                >
                  <button
                    onClick={() => toggleAccordion(col.title)}
                    className="flex items-center justify-between w-full py-5 md:py-0 md:cursor-default"
                  >
                    <h3 className="text-[10px] font-extrabold tracking-[0.2em] text-slate-400 uppercase">
                      {col.title}
                    </h3>
                    <span
                      className={`material-symbols-outlined text-slate-300 transition-transform duration-300 md:hidden ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  <ul
                    className={`flex flex-col gap-3.5 overflow-hidden transition-all duration-300 md:h-auto md:opacity-100 ${
                      isOpen ? "h-auto opacity-100 pb-5" : "h-0 opacity-0 md:flex md:pb-0"
                    }`}
                  >
                    {col.links.map((link) => (
                      <li key={link.name}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[13px] font-medium text-slate-600 hover:text-primary transition-colors block"
                          >
                            {link.name}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-[13px] font-medium text-slate-600 hover:text-primary transition-colors block"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Brand Manifesto Quote & Watermark */}
      <div className="relative overflow-hidden bg-white border-b border-slate-100 px-6">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none opacity-[0.03]">
          <span className="text-[12vw] font-black tracking-tighter text-slate-900 leading-none whitespace-nowrap transform -translate-y-4">
            Growcin
          </span>
        </div>

        <div className="relative max-w-[1400px] mx-auto py-20 md:py-28 text-center">
          <p className="text-lg md:text-2xl font-serif-accent italic text-slate-800 max-w-3xl mx-auto leading-relaxed px-4 mb-8">
            &ldquo;We build systems so founders don’t have to babysit ad accounts. Continuous campaign surveillance for teams who value predictable growth.&rdquo;
          </p>

          <div className="flex items-center justify-center gap-6 mt-6">
            <a
              href="https://www.linkedin.com/company/growcin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 448 512" className="h-5 w-5" fill="currentColor">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/growcin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 448 512" className="h-5 w-5" fill="currentColor">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>

            <a
              href="https://x.com/growcin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <svg viewBox="0 0 512 512" className="h-4 w-4" fill="currentColor">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Operational Bar */}
      <div className="bg-white pt-8 pb-10 border-t border-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row relative justify-between items-center gap-6">
          <div className="flex items-center gap-6 md:gap-12 flex-wrap justify-center md:justify-start text-[11px] font-medium text-slate-500 uppercase tracking-wider z-10">
            <Link href="/" className="flex items-center gap-2 text-slate-900 font-bold tracking-normal normal-case hover:opacity-80 transition-opacity">
              <img src="/growcin-logo.png?v=2" alt="Growcin" className="w-5 h-5 object-contain" />
              <span className="text-sm font-bold tracking-tight">Grow<span className="text-[#A855F7]">cin</span></span>
            </Link>
            <span>© 2026 Growcin. All rights reserved.</span>
          </div>

          <div className="md:absolute md:inset-0 md:flex md:items-center md:justify-center pointer-events-none">
            <span className="pointer-events-auto text-[11px] text-slate-400 font-medium tracking-wide font-sans text-center">
              Built for High-Performance Growth
            </span>
          </div>

          <div className="flex items-center gap-3 z-10">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </div>
            <span className="text-emerald-600 font-bold tracking-widest text-[9px] uppercase">
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
