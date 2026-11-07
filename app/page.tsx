import Nav from './components/Nav'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'
import Results from './components/Results'
import WhyChoose from './components/WhyChoose'
import About from './components/About'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Results />
        <WhyChoose />
        <About />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
