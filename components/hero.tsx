"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden bg-gradient-to-b from-background via-background to-card/20">
      {/* Subtle glossy background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute -bottom-20 left-0 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="space-y-8">
          {/* Overline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-xs font-semibold tracking-wider text-foreground/70 uppercase">
              Premium Automotive Care
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter leading-none">
            <span className="bg-gradient-to-r from-foreground via-foreground to-accent/50 bg-clip-text text-transparent">
              BSE GARAGE
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-foreground/80 max-w-2xl font-light leading-relaxed">
            Lüks araçlar için özel koruma, kaplama ve parlatma çözümleri. Handcrafted precision detailing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button className="group px-8 py-4 bg-accent text-accent-foreground rounded-sm font-semibold text-lg hover:bg-accent/90 transition-all flex items-center gap-3">
              Hizmetleri İncele
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-card border border-border text-foreground rounded-sm font-semibold text-lg hover:bg-card/80 transition-colors">
              Hemen İletişime Geç
            </button>
          </div>
        </div>

        {/* Hero showcase area - abstract glossy surface */}
        <div className="mt-24 relative">
          <div className="aspect-video bg-gradient-to-br from-card to-background border border-border rounded-lg overflow-hidden relative group">
            <div className="absolute inset-0 bg-accent/5 mix-blend-overlay z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1920&q=80"
              alt="Premium Car Detailing"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
