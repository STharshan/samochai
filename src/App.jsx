import About from "./components/About"
import ChaiSection from "./components/ChaiSection"
import CoffeeSection from "./components/CoffeeSection"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Menu from "./components/Menu"
import Mission from "./components/Mission"
import Navbar from "./components/Navbar"
import NavbarWithHero from "./components/NavbarWithHero"
import TestimonialCarousel from "./components/TestimonialCarousel"

function App() {

  return (
    <>
      <Navbar/>
      <NavbarWithHero/>
      <ChaiSection />
      <Menu/>
      <Mission />
      <CoffeeSection />
      <About/>
      <TestimonialCarousel/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
