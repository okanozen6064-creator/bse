"use client"

export default function WhyBSE() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-background to-card/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
              Neden <span className="text-accent">BSE GARAGE</span>?
            </h2>

            <p className="text-lg text-foreground/70 leading-relaxed">
              BSE Garage, otomotiv endüstrisinde el işçiliği mükemmelliği ve kişiye özel hizmetin sembolüdür.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 border border-accent">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Üstün İşçilik</h3>
                  <p className="text-foreground/70">Her detay, en yüksek kalite standartlarında uygulanır.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 border border-accent">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Boya Koruma Uzmanlığı</h3>
                  <p className="text-foreground/70">Boya koruma teknolojisinde yılların deneyimi ve uzmanlık.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 border border-accent">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Ayrıcalıklı Hizmet</h3>
                  <p className="text-foreground/70">Supercar sahipleri için özel ve eksklusif hizmet deneyimi.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 border border-accent">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Lüks Detay Hassasiyeti</h3>
                  <p className="text-foreground/70">Lüks otomotif dünyasının standartlarında hassas dikkat.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-card to-background border border-border rounded-lg p-12 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent"></div>

              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-40 h-40 border border-accent/20 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-primary/10 rounded-full"></div>

              <div className="relative z-10 h-full flex items-center justify-center text-center">
                <div className="space-y-4">
                  <p className="text-foreground/50 text-sm">Premium Quality</p>
                  <p className="text-4xl font-bold text-accent">BSE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
