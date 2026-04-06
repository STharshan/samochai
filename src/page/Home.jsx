import React from 'react'
import ChaiSection from "../components/ChaiSection"
import CoffeeSection from "../components/CoffeeSection"
import Contact from "../components/Contact"
import Gallery from "../components/Gallery"
import Mission from "../components/Mission"
import NavbarWithHero from "../components/NavbarWithHero"
import TestimonialCarousel from "../components/TestimonialCarousel"
import WhatWeOffer from '../components/WhatWe'
import SmoothCarousel from '../components/MenuScroll'
import MenuDisplay from '../components/MenuDisplay'

const Home = () => {
    return (
        <div>
            <NavbarWithHero />
            <WhatWeOffer />
            <ChaiSection />
            <SmoothCarousel />
            <MenuDisplay />
            <Mission />
            <CoffeeSection />
            <TestimonialCarousel />
            <Gallery />
            <Contact />
        </div>
    )
}

export default Home
