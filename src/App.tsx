import Navbar from './Navbar'
import Modules from './Modules'
import Footer from './Footer'

export default function App() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Modules />
      </main>
      <Footer />
    </div>
  )
}
