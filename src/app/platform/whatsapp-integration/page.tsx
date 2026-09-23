"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function WhatsAppIntegrationPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-28 bg-[linear-gradient(180deg,#FBF9FF_0%,#FFFFFF_40%,#FBF9FE_100%)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[1100px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(168,85,247,0.14) 0%, rgba(168,85,247,0.04) 50%, rgba(168,85,247,0) 75%)",
          }}
        />

        <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-900">
              Omnichannel WhatsApp Architecture
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] mb-6">
            Connect with{" "}
            <span className="font-serif-accent italic font-normal text-[#A855F7]">
              WhatsApp AI
            </span>{" "}
            Integration
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
            AI-assisted WhatsApp messaging across devices and numbers. Automate conversations, qualify leads within seconds, and analyze performance with our autonomous assistant.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup/"
              className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 transition-all hover:-translate-y-0.5"
            >
              Get Started with Growcin →
            </Link>
          </div>

          {/* Feature Pills Marquee */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-700">
            {[
              "Smart Auto-Replies",
              "Broadcast Messaging",
              "Group Management",
              "Chat Automation",
              "Template Messages",
              "Instant Notifications",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-white border border-purple-100 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHY CHOOSE AI-POWERED WHATSAPP                                         */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6">
              Why Choose AI-Powered WhatsApp
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Enhance customer interactions with intelligent automation on the world&apos;s most popular messaging platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#FAF8FD] border border-purple-100">
              <span className="material-symbols-outlined text-3xl text-[#A855F7] mb-4">
                devices
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Multi-Device Support
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Handle WhatsApp AI Integration across devices — chat, broadcast, and reply seamlessly from a single unified business dashboard.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF8FD] border border-purple-100">
              <span className="material-symbols-outlined text-3xl text-[#A855F7] mb-4">
                analytics
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Campaign Analytics
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Track messaging performance with detailed analytics — delivery rates, read rates, engagement, and closed conversion values.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF8FD] border border-purple-100">
              <span className="material-symbols-outlined text-3xl text-[#A855F7] mb-4">
                public
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Global Scale
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engage 2+ billion users across 180+ countries with your verified, AI-assisted WhatsApp presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SMART BROADCASTING & REPUTATION GUARD                                   */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#FAF8FD] border-t border-slate-100">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A855F7] block mb-2">
              Deliverability
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Smart WhatsApp Broadcasting
            </h2>
            <p className="text-slate-600 text-base">
              Send personalized, policy-compliant messages through multi-number accounts driven by rich intent analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
              <span className="material-symbols-outlined text-purple-600 text-3xl shrink-0">
                shield_person
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Reputation Guard</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Protect your business identity with systems that track engagement, adjust volume, and preserve sender scores across broadcast campaigns.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
              <span className="material-symbols-outlined text-purple-600 text-3xl shrink-0">
                bolt
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Smart Scaling</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ramp up from 100 to thousands of daily messages across multiple numbers safely and efficiently without triggering spam flags.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
