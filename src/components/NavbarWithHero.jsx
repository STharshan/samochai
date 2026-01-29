import React from "react";
import Menu from "./Menu";
import Contact from "./Contact";
import HeroContact from "./HeroContact";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br  from-[#0e1b0e] via-[#12392c] to-[#0e1b0e] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-1 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E8D28A] mb-6 leading-tight">
            Samosa and Chai <br className="hidden sm:block" />
            for every occasion
          </h1>

          <p className="text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 text-base sm:text-lg">
            Samochai brings the vibrant, authentic flavors of Bangladeshi street
            food straight to you. Freshly made, perfectly spiced, unforgettable taste.
          </p>

          <a href="#menu">
            <button className="
              relative px-8 py-4 rounded-lg font-bold text-lg
              bg-gradient-to-r from-[#E8D28A] to-[#c8a950]
              text-black
              overflow-hidden group
              transition-all duration-500
              hover:scale-105 hover:shadow-[0_0_25px_rgba(232,210,138,0.6)]
            ">
              <span className="relative z-10">See Menu</span>

              {/* Shine */}
              <div className="absolute inset-0 bg-white/30 
                -translate-x-full group-hover:translate-x-0
                transition-transform duration-500">
              </div>
            </button>
          </a>
        </div>

        {/* RIGHT MENU PREVIEW */}
        <HeroContact />

      </div>
    </section>
  );
};

export default HeroSection;
