import type React from "react"
import type { Metadata } from "next"
import { Outfit, Cinzel } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
})

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: '--font-cinzel',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "RossCar Premium | Araç Kaplama & Koruma",
  description: "RossCar Premium: Şeffaf (PPF) & Renkli Kaplama, Cam Filmi. EossProtection, Kamikaze, Gyeon Yetkili Merkezi.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <body className={`${outfit.variable} ${cinzel.variable} font-sans bg-black text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
