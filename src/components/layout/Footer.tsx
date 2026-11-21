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
    title: "Gujarat Cities",
    links: [
      { name: "Ahmedabad", href: "/#cities" },
      { name: "Surat", href: "/#cities" },
      { name: "Vadodara", href: "/#cities" },
      { name: "Rajkot", href: "/#cities" },
      { name: "Gandhinagar", href: "/#cities" },
      { name: "Bhavnagar", href: "/#cities" },
      { name: "Jamnagar", href: "/#cities" },
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
      { name: "Security & Trust", href: "/security/" },
      { name: "Case Studies", href: "/case-studies/" },
      { name: "Partners", href: "/partners/" },
      { name: "Philosophy", href: "/philosophy/" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help & FAQ", href: "/#faq" },
      { name: "Contact Support", href: "mailto:support@growcin.com" },
      {
        name: "Book a Demo",
        href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ13LgvF5NejuXGRDqvS4VUR584JG2eqrImNEgVHMAWh9kqyTawLvPA3wSwpXWaOq7zhgGCHWkeq",
        external: true,
      },
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-0 md:gap-y-12 gap-x-6">
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
          <p className="text-lg md:text-2xl font-serif-accent italic text-slate-800 max-w-3xl mx-auto leading-relaxed px-4">
            &ldquo;We build systems so founders don’t have to babysit ad accounts. Continuous campaign surveillance for teams who value predictable growth.&rdquo;
          </p>
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
            <span>© {new Date().getFullYear()} Growcin. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-5 z-10">
            <a
              href="https://twitter.com/growcin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Growcin on Twitter / X"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/growcin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0A66C2] transition-colors"
              aria-label="Growcin on LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2">
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
      </div>
    </footer>
  )
}
