"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Process from "@/components/process"
import WhyBSE from "@/components/why-bse"
import Showcase from "@/components/showcase"
import BeforeAfter from "@/components/before-after"
import InstagramFeed from "@/components/instagram-feed"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <WhyBSE />
      <Process />
      <Showcase />
      <BeforeAfter
        beforeImage="https://images.unsplash.com/photo-1600712242805-5f78671451ed?q=80&w=2574&auto=format&fit=crop"
        afterImage="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1920&q=80"
        beforeLabel="İşlem Öncesi"
        afterLabel="BSE Farkı"
      />
      <InstagramFeed />
      <Contact />
      <Footer />
    </div>
  )
}
