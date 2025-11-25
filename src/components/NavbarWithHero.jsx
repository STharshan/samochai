import React, { useState, useEffect } from "react";
import { LuChefHat } from "react-icons/lu";
import MenuModal from "./MenuModal"; // Ensure this import path is correct 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const NavbarWithHero = () => {
  const [modalOpen, setModalOpen] = useState(false); // Modal state 

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: true, // Whether elements should animate out while scrolling past them
      offset: 100, // Offset (in px) from the original trigger point
    });

    // Refresh AOS on component mount
    AOS.refresh();
  }, []);

  // Function to open the modal 
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal 
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="hero" className="relative text-white text-center px-4">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/back.mp4" // Place your video file in the public folder 
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 py-32 md:py-48">
        <h1
          className="lg:text-7xl max-w-5xl mx-auto text-5xl font-extrabold text-[#E8D28A] mb-8"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Samosa and Chai for every occasion
        </h1>
     
        <p
          className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10"
          data-aos="fade-in"
          data-aos-delay="600"
        >
          SAMOCHAI brings the vibrant, authentic flavors of Bangladeshi street
          food straight to you! Get ready for a delicious adventure.
        </p>
        <div
          className="flex flex-col md:flex-row justify-center items-center gap-4"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          {/* <button 
            onClick={() => 
              document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" }) 
            } 
            className="bg-[#3f8605] hover:bg-[#12392c] hover:shadow-[#346909] text-white font-semibold text-lg px-8 py-3 rounded w-auto min-w-[160px] flex items-center justify-center gap-2 transition transform hover:-translate-y-1 hover:shadow-xl"
          > 
            <LuChefHat className="w-5 h-5" /> 
            See Menu 
          </button>  */}
          <a href="#menu">
            <button className="relative border-3 border-black px-5 rounded-lg py-2 text-xl font-bold group overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
              {/* Animated background */}
              <div className="absolute inset-0 bg-linear-to-r from-black via-gray-800 to-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-green-400 via-green-500 to-green-400 opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500"></div>

              {/* Button text */}
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500 font-black tracking-wider">
                See Menu
              </span>

              {/* Sparkle effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-2 left-4 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute top-3 right-6 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-green-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Ripple effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                <div className="absolute inset-0 border-2 border-green-400 rounded animate-ping"></div>
              </div>
            </button>
          </a>

          <button onClick={openModal} className="relative border-3 bg-white text-[#4a821d] text-lg hover:shadow-[#346909] px-5 rounded-lg py-2 font-bold group overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
            {/* Animated background */}
            <div className="absolute inset-0 bg-linear-to-r from-black via-gray-800 to-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-linear-to-r from-green-400 via-green-500 to-green-400 opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500"></div>

            {/* Button text */}
            <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500 font-black tracking-wider">
              Order Now
            </span>

            {/* Sparkle effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute top-2 left-4 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute top-3 right-6 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-green-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Ripple effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
              <div className="absolute inset-0 border-2 border-green-400 rounded animate-ping"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Modal */}
      <MenuModal isOpen={modalOpen} onClose={closeModal} />
    </section>
  );
};

export default NavbarWithHero;
