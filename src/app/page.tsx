import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Zap, ShieldCheck, CheckCircle2, ChevronRight, Star } from "lucide-react"
import "./landing.css"

export default function HomePage() {
  return (
    <div className="landing-body min-h-screen">
      {/* ===== NAV ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[7px] bg-gradient-to-br from-[#4F46E5] to-[#818CF8] flex items-center justify-center p-1">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 4h6a8 8 0 0 1 0 16H5V4z" fill="#fff" opacity=".95"/>
                <path d="M19 8.2A6 6 0 0 0 12 6.5a6 6 0 0 0 0 11 6 6 0 0 0 7-1.7" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <span className="font-semibold tracking-tight">DartCodeAI</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted hover:text-ink transition-colors">
            <Link href="#features" className="hover:text-ink transition-colors">Product</Link>
            <Link href="#pricing" className="hover:text-ink transition-colors">Pricing</Link>
            <Link href="/docs" className="hover:text-ink transition-colors">Docs</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-muted hover:text-ink transition-colors hidden sm:block">
              Log in
            </Link>
            <Button asChild className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white font-semibold rounded-md h-9 px-4">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* ===== HERO ===== */}
        <section className="hero py-24 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="eyebrow font-medium">Built for Flutter teams. Not retrofitted.</span>
                <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight leading-[1.1]">
                  The AI dev platform that actually understands Flutter.
                </h1>
                <p className="text-lg text-muted max-w-[540px] leading-relaxed">
                  Code review that catches BuildContext async-gap bugs.
                  Dependency upgrades that don't break your widget tree.
                  Made by Flutter developers, for Flutter developers.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button asChild size="lg" className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white font-semibold h-12 px-8">
                    <Link href="/signup">Start Free →</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-border text-ink h-12 px-8 gap-2">
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-4 text-xs font-semibold text-muted uppercase tracking-widest">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#4F46E5]" /> Open source</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#4F46E5]" /> MIT licensed</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#4F46E5]" /> Self-hostable</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/20 to-transparent blur-[80px] -z-10" />
                <div className="bg-background border border-border rounded-xl shadow-2xl overflow-hidden scale-105">
                  <div className="bg-subtle px-4 py-2 border-b border-border flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-border-2" />
                      <div className="w-2.5 h-2.5 rounded-full bg-border-2" />
                      <div className="w-2.5 h-2.5 rounded-full bg-border-2" />
                    </div>
                    <div className="mx-auto text-[11px] font-mono text-muted">lib/screens/checkout.dart</div>
                  </div>
                  <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre">
                    <div><span className="text-muted">12</span> <span className="text-[#4F46E5]">Future</span>&lt;<span className="text-[#4F46E5]">void</span>&gt; <span className="text-amber-600">submitOrder</span>(<span className="text-purple-600">BuildContext</span> context) <span className="text-[#4F46E5]">async</span> &#123;</div>
                    <div><span className="text-muted">13</span>   <span className="text-[#4F46E5]">final</span> result = <span className="text-[#4F46E5]">await</span> api.<span className="text-amber-600">charge</span>(amount);</div>
                    <div><span className="text-muted">14</span>   <span className="text-[#4F46E5]">if</span> (!result.ok) <span className="text-[#4F46E5]">return</span>;</div>
                    <div><span className="text-muted">15</span></div>
                    <div><span className="text-muted">16</span>   Navigator.<span className="text-amber-600">of</span>(context).<span className="text-amber-600">pushReplacementNamed</span>(<span className="text-emerald-600">&apos;/done&apos;</span>);</div>
                    <div><span className="text-muted">17</span>   <span className="text-muted">//                ▲</span></div>
                    <div><span className="text-muted">18</span>   <span className="text-muted">//                └─ context used after await</span></div>
                    <div><span className="text-muted">19</span> &#125;</div>
                  </div>
                  <div className="bg-subtle p-4 border-t border-border flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#818CF8] flex items-center justify-center text-white font-bold text-[10px]">DC</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">DartCodeAI</span>
                        <span className="text-[10px] text-muted font-bold uppercase tracking-widest">reviewed 4m ago</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded text-amber-600 text-[11px] font-bold">
                        <Zap className="w-3 h-3" /> BuildContext used after await
                      </div>
                      <p className="text-xs text-muted leading-relaxed max-w-[400px]">
                        Widget may be disposed by the time <code>charge()</code> resolves. Add a <code>mounted</code> guard before navigating.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section id="features" className="py-24 bg-subtle/50">
          <div className="container mx-auto px-6">
            <div className="max-w-[800px] mb-16 space-y-4">
              <span className="eyebrow font-medium">Features</span>
              <h2 className="text-3xl font-bold tracking-tight">Features that only make sense for Flutter.</h2>
              <p className="text-muted text-lg">Six capabilities a generic reviewer can&apos;t match — because they require reading Dart the way the analyzer reads it.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "BuildContext async-gap", desc: "Built on the Dart analyzer's flow-sensitive type system, not regex." },
                { icon: ShieldCheck, title: "Widget tree performance", desc: "Detects missing const, MediaQuery rebuild traps, and oversized build methods." },
                { icon: CheckCircle2, title: "pub.dev intelligence", desc: "Live signals from pub.dev — likes, age, platforms, and alternatives." },
              ].map((f, i) => (
                <div key={i} className="p-8 bg-background border border-border rounded-xl space-y-4 hover:border-brand-primary transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center text-[#4F46E5] group-hover:scale-110 transition-transform">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-[600px] mx-auto space-y-8 p-12 bg-gradient-to-b from-[#4F46E5]/5 to-transparent rounded-3xl border border-[#4F46E5]/10">
              <h2 className="text-4xl font-bold tracking-tight leading-tight">Ship Flutter code with confidence.</h2>
              <p className="text-muted text-lg">Free for solo developers and open source. 14-day trial for teams.</p>
              <Button asChild size="lg" className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white font-semibold h-12 px-10">
                <Link href="/signup">Get Started Free →</Link>
              </Button>
              <p className="text-xs text-muted font-medium uppercase tracking-widest">No credit card required. Install in 60 seconds.</p>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-muted">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-[#4F46E5] flex items-center justify-center p-1 text-white">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <path d="M5 4h6a8 8 0 0 1 0 16H5V4z" fill="currentColor"/>
                <path d="M19 8.2A6 6 0 0 0 12 6.5a6 6 0 0 0 0 11 6 6 0 0 0 7-1.7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <span className="font-semibold text-ink">DartCodeAI</span>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-ink">Terms</Link>
            <Link href="#" className="hover:text-ink">Privacy</Link>
            <Link href="#" className="hover:text-ink">Contact</Link>
          </div>
          <div>© 2026 DartCodeAI, Inc.</div>
        </div>
      </footer>
    </div>
  )
}
