// File: TestimonialCarousel.jsx
"use client";
import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaCar, FaMagic, FaShieldAlt } from "react-icons/fa";
import { PiCoffeeBeanBold } from "react-icons/pi";
import { GiCoffeeMug } from "react-icons/gi";
import { LuSandwich } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    text: `Lovely little spot! Straight off the bat, the gentleman behind the counter welcomed us with a big smile. Drinks are lovely, from the warming chai latte through to smooth karak coffee. Breakfast omelette was also a great choice. Briefly speaking to the owner, you can tell they care about the customer service and the best ingredients. Only downside is that I am not more local to this business, otherwise I’d certainly be back again. Cheers guys!`,
    name: 'Patrycja Flontowicz',
  },
  {
    text: `Lovely home brewed karak chai, nothing from a sachet. Samosa's handmade, full of flavour, not too spicy. Good quality, clean and great prices. What more can you ask for? Our experience was 10 out of 10, plus 10, minus nothing ! 😁`,
    name: 'Karam Kaur',
  },
  {
    text: `Perfect 👌 A very warm welcome when we arrived today. Very chatty and friendly. Food quality is outstanding and we passed on our compliments from our last order. Can recommend the mango and passionfruit twist, chicken burger, samosas, sheesh pita and white choc cookie. Will be back for more!!!!`,
    name: 'Claire Moseley',
  },
  {
    text: `Used Samochai for the first time on 'Foody Friday' for the office. Everyone agreed the food was excellent and great value. The homemade Chicken Burgers were particularly good and Naz and his team are super friendly. Highly recommended.`,
    name: 'David Newcombe',
  },
  {
    text: `The food was finger licking good, was drooling for seconds. I had the omelette wrap with beef rashers and extra masala. It was out of this world. I also had the sheekh egg roll, I have to admit both were absolutely delicious with the intricacy of spices and oomph to it. But the milkshake, I loved it, sends nostalgic vibes through memory lane. The first sip to the last, it was everlasting. Taking in to consideration, I’ve tried it for the first time. I will definitely come back again BUT I need to try the rest of the menu too.`,
    name: 'Rayyan Al-Muneem',
  },
];

export default function TestimonialCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth;
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-white dark:bg-black relative overflow-hidden">

      {/* ✅ Dotted Background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#CCFF66_2px,transparent_2px)] [background-size:20px_20px] z-0"
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

      {/* ✅ Keyframe Animation Styles */}
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
            color: #96dd99 !important;
            animation: pulseSpin 25s ease-in-out infinite;
            filter: drop-shadow(0 0 18px rgba(150,221,153,0.8));
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

      {/* ✅ Background Icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <PiCoffeeBeanBold className="bg-icon top-12 left-10 w-24 h-24" style={{ animationDelay: "0s" }} />
        <GiCoffeeMug className="bg-icon bottom-1/4 left-12 w-20 h-20" style={{ animationDelay: "7s" }} />
        <LuSandwich className="bg-icon top-15 right-16 w-24 h-24" style={{ animationDelay: "14s" }} /> 
        <PiCoffeeBeanBold className="bg-icon bottom-1/3 right-16 w-24 h-24" style={{ animationDelay: "10s" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-black dark:text-[#96dd99] font-semibold tracking-widest uppercase text-lg">
            Our Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2">
            What people say about <br /> our company
          </h2>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 mt-20 -translate-y-1/2 bg-[#96dd99] p-3 rounded-full shadow-md hover:bg-[#E8D28A] hover:text-white transition z-20 group"
        >
          <FaChevronLeft className="transition-transform duration-300 group-hover:-translate-x-1" size={18} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 mt-20 -translate-y-1/2 bg-[#96dd99] p-3 rounded-full shadow-md hover:bg-[#E8D28A] hover:text-white transition z-20 group"
        >
          <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 py-8 hide-scrollbar"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-[#96dd99] dark:hover:shadow-[#E8D28A] relative snap-start"
            >
              {/* Red Corner Triangle */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[80px] border-t-[#E8D28A] border-r-[80px] border-r-transparent"></div>

              {/* Profile Section */}
              <div className="relative pt-6 px-6 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-white p-1 bg-[#E8D28A]"></div>
                  </div>

                  <div className="flex-1 bg-gray-100 dark:bg-gray-700 py-3 px-4 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Client</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
