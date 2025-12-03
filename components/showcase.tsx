"use client"

import type React from "react"
import FadeIn from "./fade-in"

export default function Showcase() {
  const showcaseImages = [
    "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80", // Polishing/Detailing process
    "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80", // Luxury car interior/detail
    "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=800&q=80", // Water beading/PPF effect
    "https://images.unsplash.com/photo-1605218427368-35b0f9940501?auto=format&fit=crop&w=800&q=80", // Ceramic coating application
    "https://images.unsplash.com/photo-1552975084-6e027cd345c2?auto=format&fit=crop&w=800&q=80", // Clean luxury car
    "https://images.unsplash.com/photo-1632823471565-1ecf9856d788?auto=format&fit=crop&w=800&q=80"  // Wheel detailing
  ]

  return (
    <section className="py-24 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <FadeIn>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">Showcase</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-foreground/70 mt-4">
              Lüks araç kaplaması ve detailing işlemlerimizin başyapıtları
            </p>
          </FadeIn>
        </div>

        {/* Image Grid - Premium layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseImages.map((image, index) => (
            <FadeIn key={index} delay={0.1 * index} direction="up">
              <div
                className="group relative aspect-square bg-gradient-to-br from-card to-background border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Showcase ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Glossy overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay with icon on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-flex p-3 bg-accent/20 rounded-full backdrop-blur-sm border border-accent/50">
                      <Sparkles className="text-accent" width={24} height={24} />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
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
