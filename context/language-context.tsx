"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "tr" | "en"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const translations = {
    tr: {
        "hero.title": "Aracınız İçin Kusursuz Koruma ve Estetik",
        "hero.subtitle": "BSE Garage ile aracınızın değerini koruyun. Profesyonel PPF kaplama, seramik koruma ve detaylı bakım hizmetleriyle aracınız her zaman ilk günkü gibi kalsın.",
        "hero.cta.appointment": "Randevu Al",
        "hero.cta.services": "Hizmetlerimiz",
        "hero.badge.tow": "Çekici Hizmeti",
        "hero.badge.valet": "Vale Hizmeti",
        "nav.services": "Hizmetler",
        "nav.about": "Hakkında",
        "nav.contact": "İletişim",
        "nav.appointment": "Randevu",
    },
    en: {
        "hero.title": "Ultimate Protection and Aesthetics for Your Vehicle",
        "hero.subtitle": "Protect your vehicle's value with BSE Garage. Keep your car looking brand new with professional PPF coating, ceramic protection, and detailed maintenance services.",
        "hero.cta.appointment": "Book Appointment",
        "hero.cta.services": "Our Services",
        "hero.badge.tow": "Tow Service",
        "hero.badge.valet": "Valet Service",
        "nav.services": "Services",
        "nav.about": "About",
        "nav.contact": "Contact",
        "nav.appointment": "Appointment",
    }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("tr")

    const t = (key: string) => {
        return translations[language][key as keyof typeof translations["tr"]] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
