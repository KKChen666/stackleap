import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Capabilities from './components/Capabilities'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-body">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Capabilities />
      <Contact />
      <Footer />
    </div>
  )
}
