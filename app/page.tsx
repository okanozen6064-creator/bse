"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

// Simple Icon Components
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
  )
}

function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>
  )
}

function CarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
  )
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
  )
}


export default function Page() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 border-b border-[#222] backdrop-blur-md transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="w-32 h-16 relative">
            <Image
              src="/images/logo.jpg"
              alt="RossCar Premium"
              fill
              className="object-contain"
              priority
            />
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-gray-400">
            <Link href="#services" className="hover:text-[#D4AF37] transition-colors">Hizmetler</Link>
            <Link href="#partners" className="hover:text-[#D4AF37] transition-colors">Markalar</Link>
            <Link href="#gallery" className="hover:text-[#D4AF37] transition-colors">Galeri</Link>
          </nav>
          <Link href="#contact" className="hidden md:inline-block px-6 py-2 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold tracking-widest uppercase hover:bg-[#D4AF37] hover:text-black transition-all">
            İletişim
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="w-full h-full flex items-center justify-center scale-150 opacity-40 grayscale-[0.5]">
            <iframe
              className="w-full h-full min-h-screen min-w-full aspect-video object-cover"
              src="https://www.instagram.com/reel/DRcfa14DJZL/embed/?autoplay=1&muted=1&loop=1&controls=0"
              allow="autoplay"
              style={{ pointerEvents: 'none' }}
            ></iframe>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10"></div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white font-serif">
            ROSSCAR <span className="text-[#D4AF37]">PREMIUM</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto font-sans">
            Mükemmelliğin Ötesinde Koruma Sanatı
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm font-medium tracking-widest text-[#D4AF37] uppercase">
            <span className="border border-[#D4AF37]/30 px-4 py-2 rounded-full backdrop-blur-sm bg-black/30">PPF Şeffaf Kaplama</span>
            <span className="border border-[#D4AF37]/30 px-4 py-2 rounded-full backdrop-blur-sm bg-black/30">Renkli Kaplama</span>
            <span className="border border-[#D4AF37]/30 px-4 py-2 rounded-full backdrop-blur-sm bg-black/30">Cam Filmi</span>
          </div>
          <div className="pt-8 animate-fade-in-up">
            <Link href="#contact" className="inline-block px-10 py-4 bg-[#D4AF37] text-black font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Randevu Al
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 bg-[#050505] border-t border-[#111]">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4 font-serif relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-[#D4AF37] after:mx-auto after:mt-4">YETKİLİ UYGULAMA MERKEZİ</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-6">Dünyanın en prestijli araç koruma markalarının Antalya'daki yetkili uygulama noktası.</p>
          </div>

          <div className="relative w-full h-[150px] md:h-[200px] max-w-5xl mx-auto grayscale hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100">
            <Image
              src="/images/partners.png"
              alt="Partners"
              fill
              className="object-contain"
            />
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-600 text-sm font-medium tracking-widest uppercase">
            <span className="hover:text-[#D4AF37] transition-colors">EOSSPROTECTION</span>
            <span className="text-[#D4AF37]">•</span>
            <span className="hover:text-[#D4AF37] transition-colors">KAMIKAZE</span>
            <span className="text-[#D4AF37]">•</span>
            <span className="hover:text-[#D4AF37] transition-colors">GYEON</span>
            <span className="text-[#D4AF37]">•</span>
            <span className="hover:text-[#D4AF37] transition-colors">UPPF</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#080808] relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#222] pb-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-serif">HİZMETLERİMİZ</h2>
              <p className="text-gray-500">Aracınızın değerini koruyan profesyonel çözümler.</p>
            </div>
            <Link href="#contact" className="text-[#D4AF37] hover:text-white transition-colors mt-4 md:mt-0 font-medium tracking-widest text-sm">RANDEVU AL &rarr;</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "PPF Şeffaf Kaplama", desc: "Taş vuruklarına, çiziklere ve çevresel etkenlere karşı %100 koruma sağlayan kendi kendini yenileyen ultra şeffaf kalkan.", icon: ShieldIcon },
              { title: "Renkli Kaplama", desc: "Aracınızın rengini ve tarzını tamamen değiştirin. Yüzlerce renk seçeneği ile size özel, geri dönüştürülebilir tasarım.", icon: PaletteIcon },
              { title: "Cam Filmi & Detay", desc: "Yüksek ısı reddi sağlayan premium cam filmleri ve derinlemesine detaylı temizlik, seramik kaplama uygulamaları.", icon: CarIcon }
            ].map((item, i) => (
              <div key={i} className="group p-10 border border-[#222] hover:border-[#D4AF37] transition-all duration-500 bg-[#0a0a0a] hover:bg-[#0f0f0f] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  <item.icon className="w-32 h-32" />
                </div>
                <div className="text-4xl text-[#444] group-hover:text-[#D4AF37] mb-8 transition-colors duration-300">
                  <item.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-serif tracking-wide">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* References */}
          <div className="mt-32">
            <h3 className="text-center text-sm font-bold tracking-[0.3em] text-[#D4AF37] mb-12 uppercase opacity-80">Referanslarımız</h3>
            <div className="relative w-full h-[150px] max-w-4xl mx-auto opacity-40 hover:opacity-100 transition-opacity duration-500">
              <Image
                src="/images/references.png"
                alt="References"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Instagram Embeds */}
      <section id="gallery" className="py-24 bg-[#050505] border-t border-[#111]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center font-serif">UYGULAMA GALERİSİ</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="aspect-[9/16] w-full bg-[#111] overflow-hidden rounded-sm border border-[#222] hover:border-[#D4AF37] transition-colors">
              <iframe
                className="w-full h-full"
                src="https://www.instagram.com/reel/DQt71KdDKBf/embed"
                frameBorder="0"
              ></iframe>
            </div>
            <div className="aspect-[9/16] w-full bg-[#111] overflow-hidden rounded-sm border border-[#222] hover:border-[#D4AF37] transition-colors">
              <iframe
                className="w-full h-full"
                src="https://www.instagram.com/reel/DOqYeewDOAo/embed"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact */}
      <section id="contact" className="flex flex-col md:flex-row border-t border-[#111] min-h-[600px]">
        <div className="w-full md:w-1/2 h-[300px] md:h-auto bg-[#111] relative filter contrast-[1.1] grayscale-[0.8] hover:grayscale-[0.5] transition-all duration-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7963.665401513015!2d30.70356664417327!3d36.89143188278028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3919f88847a65%3A0xd3ec927f02ca8c04!2sRosscar%20Premium%20-%20PFF%20%C5%9Eeffaf%20Kaplama!5e0!3m2!1str!2str!4v1765368194207!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 bg-[#080808] flex flex-col justify-center px-10 py-16 md:p-24">
          <span className="text-[#D4AF37] font-bold tracking-widest text-sm mb-4">İLETİŞİM</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif">BİZE ULAŞIN</h2>

          <div className="space-y-8 text-gray-400 font-light">
            <div className="flex items-start gap-6 group">
              <div className="w-10 h-10 rounded-full border border-[#222] flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-medium mb-1 uppercase tracking-wider text-xs">Adres</p>
                <p>RossCar Premium<br />Kepez / Antalya</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="w-10 h-10 rounded-full border border-[#222] flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-medium mb-1 uppercase tracking-wider text-xs">Telefon</p>
                <p>+90 555 555 55 55</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="w-10 h-10 rounded-full border border-[#222] flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-medium mb-1 uppercase tracking-wider text-xs">Sosyal Medya</p>
                <a href="https://www.instagram.com/rosscarpremium" target="_blank" className="hover:text-white transition-colors border-b border-transparent hover:border-[#D4AF37]">@rosscarpremium</a>
              </div>
            </div>
          </div>

          <a href="tel:05555555555" className="mt-12 w-full md:w-auto inline-block text-center px-8 py-4 border border-[#D4AF37] text-[#D4AF37] font-bold tracking-widest uppercase hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
            Hemen Ara
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-[#111] text-center">
        <div className="container mx-auto px-6">
          <p className="text-[#333] text-xs tracking-[0.2em] uppercase hover:text-gray-500 transition-colors cursor-default">
            &copy; 2025 RossCar Premium. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
