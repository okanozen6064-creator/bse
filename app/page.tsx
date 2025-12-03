"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyBSE from "@/components/why-bse"
import Showcase from "@/components/showcase"
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
      <Showcase />
      <InstagramFeed />
      <Contact />
      <Footer />
    </div>
  )
}
