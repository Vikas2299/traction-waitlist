import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Rewards from '@/components/Rewards'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Rewards />
      <Stats />
      <Footer />
    </main>
  )
} 