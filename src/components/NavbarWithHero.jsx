import React from "react";

const NavbarWithHero = () => {

  return (
    <section id="#" className="relative text-white text-center px-4 h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/back.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/fall.png"
        onError={(e) => (e.currentTarget.style.display = "none")}
      >
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content - Centered */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        <h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#E8D28A] mb-4 sm:mb-6"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Samosa and Chai for every occasion
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4"
          data-aos="fade-in"
          data-aos-delay="600"
        >
          SAMOCHAI brings the vibrant, authentic flavors of Bangladeshi street
          food straight to you! Get ready for a delicious adventure.
        </p>

        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <a href="#menu" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto relative border-2 border-black px-6 sm:px-8 rounded-lg py-3 sm:py-3.5 
    text-lg sm:text-xl font-black tracking-wider
    bg-gradient-to-r from-[#12392c] via-green-800 to-[#12392c]
    text-white
    group overflow-hidden
    transition-all duration-500
    hover:scale-105 hover:-rotate-1">

              {/* Hover animated shine (overlay, not base) */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black 
      opacity-0 group-hover:opacity-100
      transform -translate-x-full group-hover:translate-x-0
      transition-all duration-500 ease-out">
              </div>

              {/* Glowing border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-400 
      opacity-30 blur-sm
      group-hover:opacity-70 transition-opacity duration-500">
              </div>

              {/* Button text */}
              <span className="relative z-10 transition-colors duration-500">
                See Menu
              </span>

              {/* Sparkles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-2 left-4 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
                <div
                  className="absolute top-3 right-6 w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute bottom-2 left-1/2 w-1 h-1 bg-green-300 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              {/* Ripple */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                <div className="absolute inset-0 border-2 border-green-400 rounded animate-ping"></div>
              </div>

            </button>
          </a>

          <a
            href="/#contact"
            className="w-full sm:w-auto relative border-3 bg-white text-[#4a821d] text-lg sm:text-xl hover:shadow-lg hover:shadow-[#346909] px-6 sm:px-8 rounded-lg py-3 sm:py-3.5 font-bold group overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-400 opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500"></div>

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
          </a>
        </div>
      </div>
    </section>
  );
};

export default NavbarWithHero;