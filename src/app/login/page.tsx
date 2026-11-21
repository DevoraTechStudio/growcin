"use client"

import * as React from "react"
import Link from "next/link"
import { Logo } from "@/components/layout/Logo"

export default function LoginPage() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [showPassword, setShowPassword] = React.useState(false)
  const [rememberMe, setRememberMe] = React.useState(true)
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Client-side authentication handling
    setTimeout(() => {
      setLoading(false)
      window.location.href = "/"
    }, 600)
  }

  return (
    <div className="min-h-screen w-full bg-[#FAF9FD] flex flex-col justify-between selection:bg-purple-500/20">
      {/* Top Navbar */}
      <header className="w-full px-6 sm:px-10 py-5 flex items-center justify-between border-b border-slate-100 bg-white/70 backdrop-blur-md">
        <Link href="/" className="inline-flex items-center">
          <Logo iconClassName="w-8 h-8" />
        </Link>
        <div className="flex items-center gap-6 text-xs font-semibold text-slate-500">
          <div>
            New here?{" "}
            <Link href="/signup" className="text-[#A855F7] hover:underline font-bold">
              Create an account
            </Link>
          </div>
          <Link
            href="mailto:support@growcin.com"
            className="hover:text-slate-800 transition-colors hidden sm:inline-flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">help</span>
            Help
          </Link>
        </div>
      </header>

      {/* Main Split Layout */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-12">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: What's New Feature Cards */}
          <div className="hidden lg:flex lg:col-span-6 flex-col gap-6 pr-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[#A855F7] text-[11px] font-bold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-pulse" />
                What&apos;s new
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                New in Growcin
              </h2>
              <p className="text-sm text-slate-500 font-medium mt-1.5">
                A few things we shipped to keep your Meta campaigns calm and profitable.
              </p>
            </div>

            {/* Feature Card 1: Hook Lab */}
            <div className="p-5 rounded-2xl bg-white border border-purple-100/80 shadow-sm shadow-purple-500/5 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#A855F7]">
                    <span className="material-symbols-outlined text-[20px]">movie</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Hook lab for Reels</h3>
                    <p className="text-xs text-slate-500">Test opening lines for your Reels ads before you spend.</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-purple-100/70 text-[#9333EA] text-[10px] font-extrabold tracking-wider uppercase">
                  NEW
                </span>
              </div>

              {/* Hook Score Preview */}
              <div className="bg-[#FAF9FE] rounded-xl p-3 border border-purple-50 space-y-2 text-xs">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1">
                  <span>Example</span>
                  <span>Hook Score</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3 bg-white p-2 rounded-lg border border-slate-100">
                    <span className="text-slate-700 font-medium truncate">
                      &ldquo;Stop scrolling if you run a café&rdquo;
                    </span>
                    <span className="font-bold text-[#A855F7] font-mono shrink-0">86</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                    <div className="bg-[#A855F7] h-full rounded-full w-[86%]" />
                  </div>

                  <div className="flex items-center justify-between gap-3 bg-white p-2 rounded-lg border border-slate-100">
                    <span className="text-slate-700 font-medium truncate">
                      &ldquo;3 mistakes eating your ad budget&rdquo;
                    </span>
                    <span className="font-bold text-slate-700 font-mono shrink-0">72</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                    <div className="bg-purple-300 h-full rounded-full w-[72%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Card 2: Weekly Audit Report */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700">
                  <span className="material-symbols-outlined text-[20px]">description</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Weekly audit report</h3>
                  <p className="text-xs text-slate-500">A plain-words summary of what your ads did last week.</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-purple-100/70 text-[#9333EA] text-[10px] font-extrabold tracking-wider uppercase shrink-0">
                NEW
              </span>
            </div>

            {/* Feature Card 3: WhatsApp Inbound Lead Qualification */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-emerald-600">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">WhatsApp API and Lead Qualification</h3>
                  <p className="text-xs text-slate-500">Answer leads and qualify high-intent buyers instantly on WhatsApp.</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-purple-100/70 text-[#9333EA] text-[10px] font-extrabold tracking-wider uppercase shrink-0">
                NEW
              </span>
            </div>
          </div>

          {/* Right Column: Clean Login Form */}
          <div className="w-full lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl border border-purple-100/80 p-7 sm:p-9 shadow-xl shadow-purple-500/5">
              <div className="text-left mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Welcome back
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  Log in with Google, or your email and password.
                </p>
              </div>

              {/* Google OAuth Button */}
              <button
                type="button"
                onClick={() => {
                  window.location.href = "/signup"
                }}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-all hover:border-slate-300 shadow-sm cursor-pointer"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.26 21.36 7.36 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.98 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 my-5">
                <div className="h-px flex-1 bg-slate-100" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 shrink-0 select-none">
                  or with email
                </span>
                <div className="h-px flex-1 bg-slate-100" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@business.com"
                    className="w-full bg-[#FAF9FD] border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-purple-500/20 transition-all text-sm font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700">
                      Password
                    </label>
                    <Link
                      href="mailto:support@growcin.com?subject=Growcin%20Account%20Password%20Reset"
                      className="text-xs text-[#A855F7] hover:underline font-semibold"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Your password"
                      className="w-full bg-[#FAF9FD] border border-slate-200 rounded-xl px-4 py-2.5 pr-10 text-slate-900 outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-purple-500/20 transition-all text-sm font-medium"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Keep me logged in */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-[#A855F7] focus:ring-purple-500/30 cursor-pointer accent-[#A855F7]"
                  />
                  <label htmlFor="remember" className="text-xs text-slate-600 font-medium select-none cursor-pointer">
                    Keep me logged in on this device for 30 days
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-purple-500/20 transition-all hover:-translate-y-0.5 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Log in</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </>
                  )}
                </button>
              </form>

              <div className="text-center text-xs text-slate-500 border-t border-slate-100 pt-5 mt-6">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="text-[#A855F7] hover:underline font-bold"
                >
                  Start free trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Links */}
      <footer className="w-full px-6 py-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-100">
        <Link href="/legal/privacy" className="hover:text-slate-600 transition-colors">
          Privacy Policy
        </Link>
        <Link href="/legal/terms-conditions" className="hover:text-slate-600 transition-colors">
          Terms & Conditions
        </Link>
        <Link href="mailto:support@growcin.com" className="hover:text-slate-600 transition-colors">
          Help & Support
        </Link>
      </footer>
    </div>
  )
}
