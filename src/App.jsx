import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Technologies from './components/Technologies'
import Industries from './components/Industries'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Technologies />
      <Industries />
      <Contact />
      <Footer />
    </div>
  )
}
