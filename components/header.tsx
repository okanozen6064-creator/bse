"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-foreground"></div>
          </div>
          <span className="font-bold text-lg tracking-tight">BSE</span>
        </div>

        <nav className="hidden md:flex items-center gap-12">
          <a href="#services" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            Hizmetler
          </a>
          <a href="#about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            Hakkında
          </a>
          <a href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            İletişim
          </a>
        </nav>

        <button className="hidden md:block px-6 py-2 bg-accent text-accent-foreground rounded-sm text-sm font-semibold hover:bg-accent/90 transition-colors">
          Randevu
        </button>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/98">
          <nav className="flex flex-col gap-4 px-6 py-6">
            <a href="#services" className="text-sm text-foreground/70 hover:text-foreground">
              Hizmetler
            </a>
            <a href="#about" className="text-sm text-foreground/70 hover:text-foreground">
              Hakkında
            </a>
            <a href="#contact" className="text-sm text-foreground/70 hover:text-foreground">
              İletişim
            </a>
            <button className="w-full px-4 py-2 bg-accent text-accent-foreground rounded-sm text-sm font-semibold mt-4">
              Randevu
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
