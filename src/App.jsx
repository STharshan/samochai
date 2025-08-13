import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import NavbarWithHero from "./components/NavbarWithHero"
import TestimonialCarousel from "./components/TestimonialCarousel"

function App() {

  return (
    <>
      <Navbar/>
      <NavbarWithHero/>
      <Menu/>
      <About/>
      <TestimonialCarousel/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
