"use client"

import Link from "next/link"
import { StatCard } from "@/components/ui/stat-card"
import { StatusBadge } from "@/components/ui/status-badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Mail } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background">
      {/* Left Side: Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-12 relative">
        <div className="flex items-center gap-3 mb-auto">
          <div className="w-8 h-8 rounded-[7px] bg-gradient-to-br from-[#4F46E5] to-[#818CF8] flex items-center justify-center p-1">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 4h6a8 8 0 0 1 0 16H5V4z" fill="#fff" opacity=".95"/>
              <path d="M19 8.2A6 6 0 0 0 12 6.5a6 6 0 0 0 0 11 6 6 0 0 0 7-1.7" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <span className="font-semibold tracking-tight text-text-primary">DartCodeAI</span>
        </div>

        <div className="max-w-[400px] w-full mx-auto flex flex-col gap-8 mb-auto">
          <div className="space-y-2">
            <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-text-primary">Welcome back</h1>
            <p className="text-[14px] text-text-tertiary">Sign in to your DartCodeAI account</p>
          </div>

          {/* Placeholder for Clerk <SignIn /> */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-text-secondary uppercase tracking-widest">Email address</label>
              <Input type="email" placeholder="name@company.com" className="bg-surface-1 border-border-subtle h-11" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-text-secondary uppercase tracking-widest">Password</label>
                <Link href="/reset-password" title="Forgot password?" className="text-xs text-brand-primary hover:underline">Forgot?</Link>
              </div>
              <Input type="password" placeholder="••••••••" className="bg-surface-1 border-border-subtle h-11" />
            </div>
            <Button className="w-full h-11 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold">
              Continue
            </Button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-subtle"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest text-text-tertiary">
                <span className="bg-background px-2">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-11 border-border-subtle gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="outline" className="h-11 border-border-subtle gap-2">
                <Mail className="w-4 h-4" />
                Google
              </Button>
            </div>
          </div>

          <p className="text-sm text-center text-text-tertiary">
            New to DartCodeAI?{" "}
            <Link href="/signup" className="text-brand-primary font-medium hover:underline">Create an account</Link>
          </p>
        </div>

        <footer className="mt-auto flex gap-6 text-[11px] text-text-tertiary uppercase tracking-widest">
          <Link href="#" className="hover:text-text-secondary">Terms</Link>
          <Link href="#" className="hover:text-text-secondary">Privacy</Link>
          <Link href="#" className="hover:text-text-secondary">Status</Link>
        </footer>
      </div>

      {/* Right Side: Visual Preview */}
      <div className="hidden lg:flex w-1/2 bg-surface-1 border-l border-border-default flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="w-full max-w-[560px] relative z-10 space-y-12 animate-in fade-in zoom-in duration-1000">
          {/* Faux Dashboard Preview */}
          <div className="bg-background rounded-xl border border-border-default shadow-2xl overflow-hidden scale-110 origin-center">
            <div className="h-8 border-b border-border-subtle bg-surface-1 px-4 flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-border-emphasis" />
              <div className="w-2.5 h-2.5 rounded-full bg-border-emphasis" />
              <div className="w-2.5 h-2.5 rounded-full bg-border-emphasis" />
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 border border-border-subtle rounded-lg space-y-1">
                  <span className="text-[9px] uppercase tracking-wider text-text-tertiary font-bold">Releases</span>
                  <div className="text-xl font-semibold">128</div>
                </div>
                <div className="p-3 border border-border-subtle rounded-lg space-y-1">
                  <span className="text-[9px] uppercase tracking-wider text-text-tertiary font-bold">Tests</span>
                  <div className="text-xl font-semibold text-status-success">99%</div>
                </div>
                <div className="p-3 border border-border-subtle rounded-lg space-y-1">
                  <span className="text-[9px] uppercase tracking-wider text-text-tertiary font-bold">Docs</span>
                  <div className="text-xl font-semibold">4.2k</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">Recent Activity</span>
                  <StatusBadge status="success" className="h-4 text-[8px]">Live</StatusBadge>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-surface-1 rounded-lg border border-border-subtle">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-surface-2" />
                        <div className="w-32 h-2 bg-border-subtle rounded" />
                      </div>
                      <div className="w-12 h-2 bg-border-subtle rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-3">
            <p className="text-lg font-medium text-text-primary tracking-tight">
              &ldquo;Ship Flutter releases without the manual review tax.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              </div>
              <span className="text-xs text-text-tertiary font-semibold uppercase tracking-widest">DartCodeAI Team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
