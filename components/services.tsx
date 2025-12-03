"use client"

import { Zap, Shield, Droplets, Wind, Sparkles, Eye } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "PPF Kaplama",
    description: "Paint Protection Film - Araç boyasının tam korunması için profesyonel koruma filmi.",
  },
  {
    icon: Droplets,
    title: "Cam Filmi",
    description: "Yapıştırmalı cam filmi - UV koruması ve gizlilik için özel çözümler.",
  },
  {
    icon: Sparkles,
    title: "Renkli Kaplama",
    description: "Özel renkli araç kaplaması - Tamamen yenilenmiş görünüm ve koruma.",
  },
  {
    icon: Wind,
    title: "Pasta & Cila",
    description: "Profesyonel cila ve polisaj - Yüksek parlaklık ve derinlik.",
  },
  {
    icon: Eye,
    title: "Seramik Kaplama",
    description: "Nano seramik koruma - Uzun ömürlü, dayanıklı yüzey koruma.",
  },
  {
    icon: Zap,
    title: "Boya Koruma",
    description: "İleri teknoloji boya koruma sistemi - Şık ve dayanıklı.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">Hizmetlerimiz</h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Her hizmet, en yüksek kalite standartlarında sunulur. Lüks araçlar için özel tasarlanmış çözümler.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="mb-6 inline-flex p-3 bg-card border border-border rounded-sm group-hover:bg-accent/10 group-hover:border-accent/50 transition-all">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-16 p-12 bg-card border border-border rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Özel Hizmetler</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 bg-accent rounded-full"></div>
              <div>
                <h4 className="font-bold mb-2">Çekici Hizmeti</h4>
                <p className="text-foreground/70">Ücretsiz çekici ve nakliye hizmeti ile tam rahatlık.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 bg-accent rounded-full"></div>
              <div>
                <h4 className="font-bold mb-2">Vale Hizmeti</h4>
                <p className="text-foreground/70">Özel vale hizmeti ile araç teslim ve alım kolaylığı.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
