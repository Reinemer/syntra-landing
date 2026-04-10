import Navbar from './Navbar'
import Hero from './Hero'
import Stats from './Stats'
import Modules from './Modules'
import Features from './Features'
import Documentation from './Documentation'
import Footer from './Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Modules />
      <Features />
      <Documentation />
      <Footer />
    </div>
  )
}
