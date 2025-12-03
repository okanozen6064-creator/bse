"use client"

import { Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center">
                <div className="w-3.5 h-3.5 border-2 border-foreground"></div>
              </div>
              <span className="font-bold text-lg">BSE GARAGE</span>
            </div>
            <p className="text-foreground/60 text-sm">Premium automotive detailing ve kaplama çözümleri.</p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider">Hizmetler</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  PPF Kaplama
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Seramik Kaplama
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Cam Filmi
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider">Şirket</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Hakkında
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  İletişim
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                  Gizlilik
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider">Takip Edin</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 border border-border rounded-sm hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 border border-border rounded-sm hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 border border-border rounded-sm hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>© 2025 BSE GARAGE. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Hizmet Şartları
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
