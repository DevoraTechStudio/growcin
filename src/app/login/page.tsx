"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { motion } from "framer-motion"

export default function LoginPage() {
  return (
    <div className="flex flex-col w-full min-h-[90vh] items-center justify-center pt-24 px-6 relative text-white">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--color-brand-cyan)]/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="bg-[var(--color-surface)]/70 backdrop-blur-xl border border-[var(--color-border-strong)] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)] rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-10 space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back</h1>
              <p className="text-sm text-[var(--color-text-secondary)]">Log in to your Growcin console.</p>
            </div>

            <form className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Work Email</label>
                <input 
                  type="email" 
                  placeholder="you@company.com" 
                  className="w-full bg-[var(--color-surface-alt)] border border-[var(--color-border-subtle)] rounded-xl px-4 py-2.5 text-white outline-none focus:border-[var(--color-brand-cyan)] focus:ring-1 focus:ring-[var(--color-brand-cyan)]/25 transition-all text-sm" 
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Password</label>
                  <Link href="#" className="text-xs text-[var(--color-brand-cyan)] hover:text-white transition-colors">Forgot?</Link>
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-[var(--color-surface-alt)] border border-[var(--color-border-subtle)] rounded-xl px-4 py-2.5 text-white outline-none focus:border-[var(--color-brand-cyan)] focus:ring-1 focus:ring-[var(--color-brand-cyan)]/25 transition-all text-sm" 
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-cyan)] text-white hover:opacity-95 mt-6 py-2.5 rounded-xl font-bold" type="button">
                Log In
              </Button>
            </form>

            <div className="text-center text-xs text-[var(--color-text-muted)] border-t border-[var(--color-border-subtle)] pt-6">
              Don't have access?{" "}
              <Link href="/signup" className="text-[var(--color-brand-cyan)] hover:text-white transition-colors font-semibold">
                Request console access
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
