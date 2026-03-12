import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import PopularDishes from './components/PopularDishes'
import Gallery from './components/Gallery'
import Reservation from './components/Reservation'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  return (
    <main className="fixed inset-0 w-full h-full z-[9999] overflow-y-auto bg-brand-cream text-brand-green font-sans scroll-smooth">
      <Hero />
      <About />
      <Menu />
      <PopularDishes />
      <Gallery />
      <Reservation />
      <Location />
      <Footer />
    </main>
  )
}

export default App
