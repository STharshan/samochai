import React from 'react'
import About from "../components/About"
import ChaiSection from "../components/ChaiSection"
import CoffeeSection from "../components/CoffeeSection"
import Contact from "../components/Contact"
import Gallery from "../components/Gallery"
import Menu from "../components/Menu"
import Mission from "../components/Mission"
import NavbarWithHero from "../components/NavbarWithHero"
import TestimonialCarousel from "../components/TestimonialCarousel"

const Home = () => {
    return (
        <div>
            <NavbarWithHero />
            <ChaiSection />
            <Menu />
            <Mission />
            <CoffeeSection />
            <About />
            <TestimonialCarousel />
            <Gallery />
            <Contact />
        </div>
    )
}

export default Home
