"use client"

import * as React from "react"
import { Logo } from "@/components/layout/Logo"

const GOOGLE_FORM_URL = "https://forms.gle/36tzEAi9VzfcBD9EA"

export default function SignupPage() {
  React.useEffect(() => {
    window.location.replace(GOOGLE_FORM_URL)
  }, [])

  return (
    <div className="flex flex-col w-full min-h-[75vh] items-center justify-center pt-28 pb-16 px-4 sm:px-6 bg-[linear-gradient(180deg,#FBF9FF_0%,#FFFFFF_50%,#FAF8FD_100%)]">
      <div className="w-full max-w-md text-center space-y-5">
        <div className="inline-flex justify-center">
          <Logo iconClassName="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Opening Free Audit Form...
        </h1>
        <p className="text-sm text-slate-500">
          You are being redirected to our Google Form. If it does not open automatically, click below.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white text-sm font-semibold shadow-md shadow-purple-500/20 hover:opacity-95 transition-opacity"
        >
          <span>Open Free Audit Form</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
      </div>
    </div>
  )
}
