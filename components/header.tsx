"use client"

import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    if (language === "tr") setLanguage("en")
    else if (language === "en") setLanguage("ru")
    else setLanguage("tr")
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="BSE Motors Logo" className="h-12 md:h-20 w-auto object-contain transition-all duration-300" />
        </div>

        <nav className="hidden md:flex items-center gap-12">
          <a href="#services" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            {t("nav.services")}
          </a>
          <a href="#about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            {t("nav.about")}
          </a>
          <a href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            {t("nav.contact")}
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <Globe size={18} />
            <span className="uppercase">{language}</span>
          </button>
          <button className="px-6 py-2 bg-accent text-accent-foreground rounded-sm text-sm font-semibold hover:bg-accent/90 transition-colors">
            {t("nav.appointment")}
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/98">
          <nav className="flex flex-col gap-4 px-6 py-6">
            <a href="#services" className="text-sm text-foreground/70 hover:text-foreground">
              {t("nav.services")}
            </a>
            <a href="#about" className="text-sm text-foreground/70 hover:text-foreground">
              {t("nav.about")}
            </a>
            <a href="#contact" className="text-sm text-foreground/70 hover:text-foreground">
              {t("nav.contact")}
            </a>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
            >
              <Globe size={18} />
              <span className="uppercase">{language === "tr" ? "English" : language === "en" ? "Русский" : "Türkçe"}</span>
            </button>
            <button className="w-full px-4 py-2 bg-accent text-accent-foreground rounded-sm text-sm font-semibold mt-4">
              {t("nav.appointment")}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
