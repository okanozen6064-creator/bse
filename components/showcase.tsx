"use client"

import type React from "react"

export default function Showcase() {
  return (
    <section className="py-24 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">Showcase</h2>
          <p className="text-lg text-foreground/70 mt-4">
            Lüks araç kaplaması ve detailing işlemlerimizin başyapıtları
          </p>
        </div>

        {/* Image Grid - Premium layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group relative aspect-square bg-gradient-to-br from-card to-background border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              {/* Glossy overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Placeholder with subtle pattern */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card via-card/80 to-background">
                <div className="text-center">
                  <div className="inline-flex p-4 bg-accent/10 rounded-lg mb-4">
                    <Sparkles className="text-accent" size={28} />
                  </div>
                  <p className="text-foreground/60 text-sm font-medium">Premium Detailing</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Sparkles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3v6m6-3h-6M6 9V3m6 6v6m6 0v-6m-6 6h6M6 15v6m6-6v6m6 0v-6" />
    </svg>
  )
}
