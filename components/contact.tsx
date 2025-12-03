"use client"

import { Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form Area */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">İletişime Geçin</h2>
              <p className="text-lg text-foreground/70">
                Randevu oluşturmak veya sorularınız için bize ulaşın. Ekibimiz size yardımcı olmak için hazır.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Ad Soyad</label>
                <input
                  type="text"
                  placeholder="Adınızı girin"
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">E-posta</label>
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Mesaj</label>
                <textarea
                  placeholder="Mesajınızı yazın"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full px-6 py-4 bg-accent text-accent-foreground rounded-sm font-semibold hover:bg-accent/90 transition-colors">
                Randevu Oluştur
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent/10 border border-accent/20">
                    <Phone size={20} className="text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Telefon</h3>
                  <div className="space-y-2">
                    <p className="text-foreground/70">
                      <a href="tel:+905073487175" className="hover:text-accent transition-colors">
                        📞 0507 348 71 75
                      </a>
                    </p>
                    <p className="text-foreground/70">
                      <a href="tel:+905466547788" className="hover:text-accent transition-colors">
                        📞 0546 654 77 88
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent/10 border border-accent/20">
                    <MapPin size={20} className="text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Adres</h3>
                  <p className="text-foreground/70">Premium Otomotiv Detailing Studio</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent/10 border border-accent/20">
                    <Clock size={20} className="text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Çalışma Saatleri</h3>
                  <p className="text-foreground/70">Pazartesi - Cumartesi: 10:00 - 19:00</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-square bg-gradient-to-br from-background to-card border border-border rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-foreground/50">Konum Haritası</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
