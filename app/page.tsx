"use client"

import Image from "next/image"
import Link from "next/link"

// Icon Components (Simple SVG icons for UI elements)
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  )
}

function PaintBrushIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18.375 2.625c3.866 3.866 3.866 10.134 0 14-3.866 3.866-10.134 3.866-14 0l14-14z" /><path d="M4.375 16.625c2.485 2.485 6.515 2.485 9 0" /><path d="M2 22h20" /></svg>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M4.93 4.93l1.41 1.41" /><path d="M17.66 17.66l1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="M6.34 17.66l-1.41 1.41" /><path d="M19.07 4.93l-1.41 1.41" /></svg>
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
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/90 to-transparent border-b border-white/5 backdrop-blur-sm transition-all duration-300">
        <div className="container mx-auto px-6 h-24 flex justify-between items-center">
          {/* Logo Left */}
          <div className="w-[180px] h-[70px] relative drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
            <Image
              src="/images/rosscar-logo-gold.png"
              alt="RossCar Premium"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Nav Center */}
          <nav className="hidden lg:flex items-center gap-12">
            <Link href="#services" className="text-xs font-bold tracking-[0.25em] text-white/70 hover:text-[#D4AF37] hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all uppercase">Hizmetler</Link>
            <Link href="#partners" className="text-xs font-bold tracking-[0.25em] text-white/70 hover:text-[#D4AF37] hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all uppercase">Markalar</Link>
            <Link href="#gallery" className="text-xs font-bold tracking-[0.25em] text-white/70 hover:text-[#D4AF37] hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all uppercase">Galeri</Link>
          </nav>

          {/* CTA Right */}
          <Link href="#contact" className="hidden lg:block relative group">
            <span className="relative z-10 px-8 py-3 border border-[#D4AF37] text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] group-hover:bg-[#D4AF37] group-hover:text-black transition-all uppercase duration-500 block shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]">
              Randevu Al
            </span>
          </Link>
        </div>
      </header>

      {/* Hero Section - Car Image + Gradient + Video1 Integration */}
      <section className="relative h-screen min-h-[900px] flex items-center overflow-hidden">
        {/* Car Image + Video 1 Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Left-to-Right Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 w-full md:w-[75%]"></div>

        {/* Content on the Left - Align Left with significant padding */}
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-start">
          <div className="max-w-4xl pt-20 pl-4 md:pl-16">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-white mb-2 leading-[0.9] drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] text-left">
              ROSSCAR
            </h1>
            <h2 className="font-serif text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F9E9B8] to-[#967711] mb-8 leading-[0.9] drop-shadow-[0_0_20px_rgba(212,175,55,0.4)] text-left">
              PREMIUM
            </h2>

            <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mb-8 shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>

            <p className="text-lg md:text-2xl text-white font-light tracking-[0.2em] uppercase max-w-xl mb-12 drop-shadow-md text-left">
              Mükemmelliğin Ötesinde <br />
              <span className="font-semibold text-[#D4AF37]">Koruma Sanatı</span>
            </p>

            {/* Feature List - Align Left */}
            <div className="flex flex-col gap-4 text-left items-start">
              <span className="flex items-center gap-4 group">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37] group-hover:scale-150 transition-transform"></span>
                <span className="text-sm font-bold tracking-[0.2em] text-white/80 uppercase hover:text-white transition-colors">PPF Şeffaf Kaplama</span>
              </span>
              <span className="flex items-center gap-4 group">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37] group-hover:scale-150 transition-transform"></span>
                <span className="text-sm font-bold tracking-[0.2em] text-white/80 uppercase hover:text-white transition-colors">Renkli Kaplama</span>
              </span>
              <span className="flex items-center gap-4 group">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37] group-hover:scale-150 transition-transform"></span>
                <span className="text-sm font-bold tracking-[0.2em] text-white/80 uppercase hover:text-white transition-colors">Cam Filmi</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-20"></div>
      </section>

      {/* Brand Wall Section (Max Visibility) */}
      <section id="partners" className="py-24 bg-[#080808] relative border-t border-white/5 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-[11px] font-bold tracking-[0.4em] uppercase block mb-4 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">Yetkili Uygulama Merkezi</span>
          </div>

          {/* Text Logos Grid - MAX VISIBILITY */}
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12">
            {['FRA-BER', 'MENZERNA', 'INNOVACAR', 'UPPF', 'GYEON', 'KAMIKAZE'].map((brand) => (
              <div key={brand} className="group relative cursor-default transition-transform duration-300 hover:scale-110">
                <h3 className="text-3xl md:text-5xl font-serif text-white group-hover:text-[#D4AF37] transition-all duration-300 tracking-widest font-black drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                  {brand}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - NO VIDEOS - Pure Premium Images */}
      <section id="services" className="py-32 bg-[#050505] relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-xs font-bold tracking-[0.3em] text-[#D4AF37] mb-32 uppercase border-l-2 border-[#D4AF37] pl-4 shadow-[0_0_10px_rgba(212,175,55,0.2)]">Exclusive Hizmetler</h2>

          <div className="space-y-40">
            {/* Service 1 */}
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h3 className="text-6xl md:text-8xl font-serif text-white/10 group-hover:text-white/20 transition-colors duration-500 mb-4 select-none">01</h3>
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide uppercase drop-shadow-md">PPF Şeffaf Kaplama</h4>
                <p className="text-gray-300 font-light leading-relaxed text-lg mb-8">
                  Aracınızın boyasını taş vurukları, kuş pisliği ve güneş yanıklarına karşı %100 koruyan, kendi kendini iyileştirebilen ultra şeffaf teknoloji.
                </p>
              </div>
              {/* Image 1 - Using Unsplash Source */}
              <div className="w-full md:w-1/2 order-1 md:order-2 relative group">
                <div className="absolute inset-0 bg-[#D4AF37] opacity-10 blur-[80px] group-hover:opacity-30 transition-opacity duration-700"></div>
                <div className="aspect-[4/3] w-full relative overflow-hidden rounded-sm border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image
                    src="https://images.unsplash.com/photo-1621360841012-3f82bd642876?q=80&w=2600&auto=format&fit=crop"
                    alt="PPF Application Details"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-20 items-center">
              <div className="w-full md:w-1/2 text-right">
                <h3 className="text-6xl md:text-8xl font-serif text-white/10 group-hover:text-white/20 transition-colors duration-500 mb-4 select-none">02</h3>
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide uppercase drop-shadow-md">Renkli Kaplama</h4>
                <p className="text-gray-300 font-light leading-relaxed text-lg mb-8">
                  Aracınıza tamamen yeni bir kimlik kazandırın. Yüzlerce premium renk seçeneği ile size özel, geri dönüştürülebilir tasarım.
                </p>
              </div>
              {/* Image 2 - Using Unsplash Source */}
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-[#D4AF37] opacity-10 blur-[80px] group-hover:opacity-30 transition-opacity duration-700"></div>
                <div className="aspect-[4/3] w-full relative overflow-hidden rounded-sm border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image
                    src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2600&auto=format&fit=crop"
                    alt="Car Wrapping Process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW VIDEO GALLERY SECTION (Added above contact) */}
      <section id="gallery" className="py-32 bg-[#050505] relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-xs font-bold tracking-[0.3em] text-[#D4AF37] mb-16 uppercase text-center relative z-10 selection:bg-white selection:text-black">Uygulama Videoları</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="aspect-[9/16] relative overflow-hidden rounded-xl border border-white/10 group bg-black">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none duration-500"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              >
                <source src="/videos/video1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="aspect-[9/16] relative overflow-hidden rounded-xl border border-white/10 group bg-black">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none duration-500"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              >
                <source src="/videos/video2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="aspect-[9/16] relative overflow-hidden rounded-xl border border-white/10 group bg-black">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none duration-500"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              >
                <source src="/videos/video3.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-gradient-to-b from-[#050505] to-[#111] border-t border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">İletişim</h2>

          <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl mb-20">
            <div className="p-8 border border-white/10 hover:border-[#D4AF37] hover:bg-white/5 transition-all duration-500 rounded-xl group">
              <MapPinIcon className="w-8 h-8 text-[#D4AF37] mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold tracking-widest uppercase block mb-2 text-white/50">Adres</span>
              <span className="text-sm font-medium text-white">Kepez / Antalya</span>
            </div>
            <div className="p-8 border border-white/10 hover:border-[#D4AF37] hover:bg-white/5 transition-all duration-500 rounded-xl group">
              <PhoneIcon className="w-8 h-8 text-[#D4AF37] mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold tracking-widest uppercase block mb-2 text-white/50">Telefon</span>
              <span className="text-sm font-medium text-white">+90 555 555 55 55</span>
            </div>
            <div className="p-8 border border-white/10 hover:border-[#D4AF37] hover:bg-white/5 transition-all duration-500 rounded-xl group">
              <InstagramIcon className="w-8 h-8 text-[#D4AF37] mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold tracking-widest uppercase block mb-2 text-white/50">Instagram</span>
              <a href="https://www.instagram.com/rosscarpremium" target="_blank" className="text-sm font-medium text-white hover:text-[#D4AF37] transition-colors">@rosscarpremium</a>
            </div>
          </div>

          <div className="w-full max-w-5xl h-[400px] grayscale hover:grayscale-0 transition-all duration-700 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
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
        </div>
        <div className="w-full text-center text-white/30 text-[10px] tracking-[0.3em] uppercase mt-12">
          &copy; 2025 RossCar Premium.
        </div>
      </section>
    </div>
  )
}
