"use client"

import * as React from "react"

export default function LoginPage() {
  React.useEffect(() => {
    window.location.replace("https://app.aichatassist.com/auth/sign-in")
  }, [])

  return (
    <div className="flex flex-col w-full min-h-[85vh] items-center justify-center pt-28 pb-16 px-4 sm:px-6 relative">
      <div className="text-center">
        <p className="text-sm text-slate-500 font-medium">
          Redirecting to sign in...
        </p>
      </div>
    </div>
  )
}
