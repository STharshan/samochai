import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PiCoffeeBeanBold } from 'react-icons/pi';
import { GiCoffeeMug } from 'react-icons/gi';
import { LuSandwich } from 'react-icons/lu';

const About = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section
      id="about"
      className="relative w-full bg-white text-black py-20 px-6 overflow-hidden scroll-m-10"
    >
      {/* 🔹 Enhanced Keyframes for Pulse Spin */}
      <style>
        {`
          @keyframes pulseSpin {
            0%   { transform: rotate(0deg) scale(0.8); opacity: 0.2; }
            40%  { transform: rotate(180deg) scale(1.6); opacity: 1; }
            70%  { transform: rotate(270deg) scale(1.2); opacity: 0.7; }
            100% { transform: rotate(360deg) scale(0.8); opacity: 0.2; }
          }
          .bg-icon {
            position: absolute;
            color: #12392c !important;
            animation: pulseSpin 25s ease-in-out infinite;
            filter: drop-shadow(0 0 18px rgba(232, 210, 138, 0.8));
            z-index: 0;
            pointer-events: none;
          }
          @media (max-width: 768px) {
            .bg-icon {
              width: 2rem !important;
              height: 2rem !important;
              animation-duration: 18s;
              opacity: 0.15;
            }
          }
        `}
      </style>

      {/* 🔹 Dotted background pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#E8D28A_2px,transparent_2px)] [background-size:20px_20px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage:
            "linear-gradient(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      />

      {/* 🔹 Floating Icons with Enhanced Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <LuSandwich className="bg-icon w-24 h-24 left-[10%] top-[27%] text-[#12392c]" style={{ animationDelay: '0s' }} />
        <PiCoffeeBeanBold className="bg-icon w-20 h-20 right-[10%] top-[30%] text-[#12392c]" style={{ animationDelay: '5s' }} />
        <GiCoffeeMug className="bg-icon w-24 h-24 left-[25%] bottom-[10%] text-[#12392c]" style={{ animationDelay: '10s' }} />
        <LuSandwich className="bg-icon w-20 h-20 right-[15%] bottom-[15%] text-[#12392c]" style={{ animationDelay: '15s' }} />
      </div>

      {/* 🔹 Main Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-6xl font-bold mb-4"
            data-aos="fade-up"
          >
            Why We're the Best in Street Food & Chai
          </h2>
          <p
            className="text-md md:text-lg text-gray-700 max-w-2xl mx-auto font-semibold"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Born in the heart of sylhet lively streets, SAMOCHAI isn't just a restaurant — it's a true reflection of the city's street food and chai culture.
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div
            className="rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_8px_24px_rgba(232,210,138,0.4)] 
                       transition-all duration-300 ease-in-out hover:scale-105 hover:ring-1 hover:ring-[#E8D28A]/40"
            data-aos="zoom-in"
          >
            <img
              src="/resturant.png"
              alt="Dhaka food culture"
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            />
          </div>

          {/* Right Text */}
          <div
            className="text-left"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#12392c] mb-4">
              Our Story
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-2 font-semibold text-shadow-md">
              Authenticity lives in the aroma of chai and the flavour of freshly cooked street bites. At SAMOCHAI, we bring the soul of Sylhet’s street-food scene straight to your table — from sizzling snacks to perfectly brewed chai, made with passion and tradition.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-semibold mb-2">
              Born from the bustling tea stalls where friends gather and flavours come alive, we now serve that same warmth and spirit here — one cup at a time.
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-semibold">
              Sylhet grows most of Bangladesh’s tea, so our chai is rooted in the lands that define its flavour. Every region has its own style of chai, yet Sylhet stands out for its rich body and aromatic depth shaped by its hills and climate. That is the taste we pour into every cup — heritage you can feel with every sip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;