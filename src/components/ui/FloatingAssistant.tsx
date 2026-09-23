"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { MascotAvatar } from "./MascotAvatar"
import { cn } from "@/lib/utils"

const MASCOT_MESSAGES = [
  "Ask me — I won't bite!",
  "Losing money on ads?",
  "I can help you scale",
  "Free Meta account audit in 24h",
]

interface Message {
  id: string
  role: "user" | "assistant"
  text: string
  time: string
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    role: "assistant",
    text: "Hello! I'm your Growcin Copilot. How can I help protect your ad budget or audit your active campaigns today?",
    time: "Just now",
  },
]

const QUICK_QUESTIONS = [
  "How does Growcin detect CPA spikes?",
  "What is the WhatsApp qualification layer?",
  "How can I audit my Meta Ads account?",
  "Does Growcin replace Ads Manager?",
]

const AI_RESPONSES: Record<string, string> = {
  "How does Growcin detect CPA spikes?":
    "Growcin runs continuous anomaly detection across your Meta campaigns. When CPA drifts beyond your custom guardrail or hook rate decays by over 20%, it alerts your team on day two — before spend compounds.",
  "What is the WhatsApp qualification layer?":
    "Instead of dumping raw form leads onto your sales team, Growcin instantly engages each lead on WhatsApp, asks pre-qualification questions (budget, timeframe, authority), and only alerts closers for high-intent buyers.",
  "How can I audit my Meta Ads account?":
    "We offer a 100% free, read-only Meta account audit. No credit card required, we never ask for write access. Simply click 'Run my free audit' to connect.",
  "Does Growcin replace Ads Manager?":
    "No. Growcin connects to your existing Meta Ads Manager as an intelligent monitoring and optimization layer. You maintain full ownership and control of your campaigns.",
}

export function FloatingAssistant() {
  const [msgIndex, setMsgIndex] = React.useState(0)
  const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  // Cycle speech bubbles every 4.5s
  React.useEffect(() => {
    if (isOpen) return
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % MASCOT_MESSAGES.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [isOpen])

  // Scroll to bottom of chat
  React.useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isOpen])

  const handleSend = (textToSend?: string) => {
    const q = textToSend || input
    if (!q.trim()) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: q,
      time: "Just now",
    }

    setMessages((prev) => [...prev, userMsg])
    if (!textToSend) setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const reply =
        AI_RESPONSES[q] ||
        `Great question regarding "${q}". Growcin analyzes your ad sets, flags creative fatigue, and routes leads through WhatsApp qualification. For detailed insight into your specific metrics, run a free read-only campaign audit!`

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: reply,
        time: "Just now",
      }
      setMessages((prev) => {
        const hasUser = prev.some((m) => m.id === userMsg.id)
        return hasUser ? [...prev, assistantMsg] : [...prev, userMsg, assistantMsg]
      })
      setIsTyping(false)
    }, 850)
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-auto select-none flex flex-col items-end">
      {/* Interactive Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 sm:mb-4 w-[calc(100vw-2rem)] max-w-[380px] h-[75vh] max-h-[520px] rounded-2xl sm:rounded-[2rem] bg-white/95 backdrop-blur-2xl border border-purple-100 shadow-[0_25px_70px_-15px_rgba(124,58,237,0.25)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <MascotAvatar size={40} />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white shadow-sm border border-purple-200 flex items-center justify-center p-0.5">
                    <img src="/growcin-logo.png?v=2" alt="Growcin" className="w-full h-full object-contain" />
                  </span>
                </div>
                <div>
                  <div className="font-bold text-sm flex items-center gap-1.5">
                    Growcin Copilot
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <p className="text-[11px] text-purple-200">Active · 24/7 Campaign Intelligence</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer text-white"
                aria-label="Close copilot"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "flex flex-col max-w-[85%] leading-relaxed",
                    m.role === "user" ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div
                    className={cn(
                      "p-3.5 rounded-2xl",
                      m.role === "user"
                        ? "bg-[#A855F7] text-white rounded-br-xs font-medium"
                        : "bg-slate-100 text-slate-800 rounded-bl-xs border border-slate-200/60"
                    )}
                  >
                    {m.text}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1">{m.time}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1 p-3 bg-slate-100 rounded-2xl rounded-bl-xs w-16 text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            <div className="px-4 py-2 border-t border-slate-100 flex gap-2 overflow-x-auto no-scrollbar">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => handleSend(q)}
                  className="whitespace-nowrap px-3 py-1.5 rounded-full bg-purple-50 text-[#A855F7] hover:bg-purple-100 text-[11px] font-semibold border border-purple-100 transition-colors shrink-0 cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input & Action */}
            <div className="p-3 bg-slate-50/80 border-t border-slate-100 flex flex-col gap-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about CPA, fatigue, or audits..."
                  className="flex-1 bg-white border border-slate-200 rounded-full px-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#A855F7]"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-8 h-8 rounded-full bg-[#A855F7] text-white flex items-center justify-center hover:bg-[#9333EA] disabled:opacity-40 transition-opacity cursor-pointer shrink-0"
                >
                  <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                </button>
              </form>

              <Link
                href="#audit"
                onClick={() => setIsOpen(false)}
                className="text-center text-[11px] font-bold text-[#A855F7] hover:underline"
              >
                Or request a free 24-hour Meta Campaign Audit &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger (Mascot + Speech Bubble) */}
      <div className="flex items-center gap-3">
        {/* Animated Speech Bubble - Desktop only to preserve mobile screen real estate */}
        <AnimatePresence mode="wait">
          {!isOpen && (
            <motion.div
              key={msgIndex}
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer px-4 py-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.12)] border border-slate-100/90 text-xs font-semibold text-slate-800 hover:text-[#A855F7] transition-colors relative group whitespace-nowrap hidden sm:block"
            >
              {MASCOT_MESSAGES[msgIndex]}
              {/* Little speech tail pointing to mascot */}
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-r border-t border-slate-100/90" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Mascot Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative focus:outline-none cursor-pointer group"
          aria-label="Open AI Copilot"
        >
          <div className="sm:hidden">
            <MascotAvatar size={48} className="animate-float-slow" />
          </div>
          <div className="hidden sm:block">
            <MascotAvatar size={58} className="animate-float-slow" />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white shadow-lg border border-purple-200 flex items-center justify-center p-0.5 transition-transform duration-200 group-hover:scale-110">
            <img src="/growcin-logo.png?v=2" alt="Growcin" className="w-full h-full object-contain" />
          </span>
        </button>
      </div>
    </div>
  )
}
