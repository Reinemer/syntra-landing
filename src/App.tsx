import Navbar from './Navbar'
import Hero from './Hero'
import Modules from './Modules'
import Documentation from './Documentation'
import Footer from './Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Modules />
      <Documentation />
      <Footer />
    </div>
  )
}
