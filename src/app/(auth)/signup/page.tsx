"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Mail, CheckCircle2, ShieldCheck, Zap } from "lucide-react"

export default function SignupPage() {
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
            <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-text-primary">Create an account</h1>
            <p className="text-[14px] text-text-tertiary">Join 400+ Flutter teams shipping faster with AI.</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-text-secondary uppercase tracking-widest">First name</label>
                <Input placeholder="Jane" className="bg-surface-1 border-border-subtle h-11" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-text-secondary uppercase tracking-widest">Last name</label>
                <Input placeholder="Doe" className="bg-surface-1 border-border-subtle h-11" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-text-secondary uppercase tracking-widest">Email address</label>
              <Input type="email" placeholder="name@company.com" className="bg-surface-1 border-border-subtle h-11" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-text-secondary uppercase tracking-widest">Password</label>
              <Input type="password" placeholder="••••••••" className="bg-surface-1 border-border-subtle h-11" />
            </div>
            
            <div className="py-2">
              <p className="text-[11px] text-text-tertiary leading-relaxed">
                By clicking "Create Account", you agree to our{" "}
                <Link href="#" className="text-brand-primary hover:underline">Terms of Service</Link> and{" "}
                <Link href="#" className="text-brand-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>

            <Button className="w-full h-11 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold">
              Create Account
            </Button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-subtle"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest text-text-tertiary">
                <span className="bg-background px-2">Or join with</span>
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
            Already have an account?{" "}
            <Link href="/login" className="text-brand-primary font-medium hover:underline">Log in</Link>
          </p>
        </div>

        <footer className="mt-auto flex gap-6 text-[11px] text-text-tertiary uppercase tracking-widest">
          <Link href="#" className="hover:text-text-secondary">Terms</Link>
          <Link href="#" className="hover:text-text-secondary">Privacy</Link>
          <Link href="#" className="hover:text-text-secondary">Status</Link>
        </footer>
      </div>

      {/* Right Side: Features List */}
      <div className="hidden lg:flex w-1/2 bg-[#000000] text-white flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4F46E5]/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="w-full max-w-[480px] relative z-10 space-y-12 animate-in fade-in slide-in-from-right-8 duration-1000">
          <div className="space-y-4">
            <h2 className="text-[32px] font-semibold tracking-tight leading-tight">
              Scale your Flutter development with AI guardrails.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              DartCodeAI automates the boring parts of Flutter development so your team can focus on building features.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: Zap, title: "Automated Release Pipelines", desc: "AI generates changelogs and verifies builds instantly." },
              { icon: ShieldCheck, title: "Intelligent QA Testing", desc: "Automatically detect and resolve flaky tests in your suite." },
              { icon: CheckCircle2, title: "Self-healing Documentation", desc: "Keep your docs in sync with your code automatically." },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-lg bg-[#0175C2]/20 flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-[#0175C2]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-zinc-100">{feature.title}</h3>
                  <p className="text-sm text-zinc-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 flex items-center gap-6 opacity-50 grayscale contrast-125">
            {/* Faux Logos */}
            <div className="text-xl font-bold italic tracking-tighter">FLUTTER</div>
            <div className="text-xl font-bold italic tracking-tighter">Vercel</div>
            <div className="text-xl font-bold italic tracking-tighter">Supabase</div>
            <div className="text-xl font-bold italic tracking-tighter">Stripe</div>
          </div>
        </div>
      </div>
    </div>
  )
}
