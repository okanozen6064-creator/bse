import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BSE GARAGE – Premium Araç Detailing & Kaplama",
  description:
    "Lüks araçlar için özel koruma, kaplama ve parlatma çözümleri. Premium detailing ve ceramic coating hizmetleri.",
  keywords: "araç detailing, ceramic coating, PPF, kaplama, car protection, luxury automotive",
  openGraph: {
    title: "BSE GARAGE – Premium Araç Detailing & Kaplama",
    description: "Lüks araçlar için özel koruma, kaplama ve parlatma çözümleri.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={`font-sans antialiased bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
