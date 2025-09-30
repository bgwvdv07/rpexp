import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { Reviews } from "@/components/reviews"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PortfolioGrid />
      <Reviews />
      <CallToAction />
      <Footer />
    </main>
  )
}
