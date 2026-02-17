import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarqueeTicker } from "@/components/marquee-ticker"
import { DestinationCards } from "@/components/destination-cards"
import { AboutSection } from "@/components/about-section"
import { Chatbot } from "@/components/chatbot"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeTicker />
      <DestinationCards />
      <AboutSection />
      <Footer />
      <Chatbot />
    </main>
  )
}
