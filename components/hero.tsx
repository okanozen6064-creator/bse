"use client"

import { ArrowRight, Truck, Key } from "lucide-react"
import FadeIn from "./fade-in"
import { useLanguage } from "@/context/language-context"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1920&q=80"
          alt="Premium Car Detailing"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
        <div className="max-w-3xl space-y-8">
          {/* Overline */}
          <FadeIn delay={0.2} direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-xs font-semibold tracking-wider text-white/90 uppercase">
                BSE GARAGE
              </span>
            </div>
          </FadeIn>

          {/* Main Headline */}
          <FadeIn delay={0.4}>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-white">
              {t("hero.title")}
            </h1>
          </FadeIn>

          {/* Subheading */}
          <FadeIn delay={0.6}>
            <p className="text-xl lg:text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-accent text-accent-foreground rounded-sm font-semibold text-lg hover:bg-accent/90 transition-all flex items-center gap-3">
                {t("hero.cta.services")}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-sm font-semibold text-lg hover:bg-white/20 transition-colors">
                {t("hero.cta.appointment")}
              </button>
            </div>
          </FadeIn>

          {/* Special Services Badges */}
          <FadeIn delay={1.0}>
            <div className="flex gap-6 pt-4 border-t border-white/10 mt-8">
              <div className="flex items-center gap-3 text-white/80">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                  <Truck size={20} className="text-accent" />
                </div>
                <span className="font-medium">{t("hero.badge.tow")}</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                  <Key size={20} className="text-accent" />
                </div>
                <span className="font-medium">{t("hero.badge.valet")}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
