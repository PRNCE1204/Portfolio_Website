import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-quad',
      mirror: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className="bg-black min-h-screen text-white relative">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
