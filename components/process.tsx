"use client"

import { ClipboardCheck, ShieldCheck, Sparkles, Wrench } from "lucide-react"
import FadeIn from "./fade-in"

export default function Process() {
    const steps = [
        {
            icon: ClipboardCheck,
            title: "Detaylı Analiz ve Konsültasyon",
            description: "Aracınızın mevcut durumunu uzman ekibimizle inceliyor, boya kalınlığı ve yüzey kusurlarını analiz ederek ihtiyacınıza en uygun koruma paketini belirliyoruz."
        },
        {
            icon: Wrench,
            title: "Profesyonel Hazırlık",
            description: "Uygulama öncesi derinlemesine temizlik, demir tozu temizliği ve kil uygulaması ile yüzeyi kusursuzlaştırıyor, boya düzeltme işlemi ile çizikleri gideriyoruz."
        },
        {
            icon: ShieldCheck,
            title: "Hassas Uygulama",
            description: "Seçilen PPF kaplama veya seramik kaplama ürününü, tozsuz ortamda ve steril koşullarda, milimetrik hassasiyetle aracınıza uyguluyoruz."
        },
        {
            icon: Sparkles,
            title: "Son Kontrol ve Teslimat",
            description: "Kürleşme süreci tamamlandıktan sonra kalite kontrol testlerimizi gerçekleştiriyor ve aracınızı ilk günkü parlaklığından daha etkileyici bir şekilde teslim ediyoruz."
        }
    ]

    return (
        <section className="py-24 px-6 bg-card/5 border-t border-border">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <FadeIn>
                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Çalışma Sürecimiz</h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                            Mükemmelliğe giden yolda izlediğimiz profesyonel adımlar.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <FadeIn key={index} delay={index * 0.1} fullWidth>
                            <div className="relative group">
                                {/* Step Number Background */}
                                <div className="absolute -top-4 -left-4 text-9xl font-bold text-foreground/5 select-none z-0 group-hover:text-accent/10 transition-colors duration-500">
                                    {index + 1}
                                </div>

                                <div className="relative z-10 bg-card border border-border p-8 rounded-xl h-full hover:border-accent/50 transition-colors duration-300">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                        <step.icon size={24} />
                                    </div>

                                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-foreground/70 leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
