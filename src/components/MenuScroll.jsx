import React from "react";

const topImages = [
  "/g2.jpg",
  "/g3.jpg",
  "/g4.jpg",
  "/g5.jpg",
  "/g6.jpg",
  "/g8.jpg",
];

const bottomImages = [
  "/g9.jpg",
  "/g10.png",
  "/g11.png",
  "/g12.webp",
  "/g13.png",
  "/g14.png",
  "/g18.jpg",
  "/g20.png",
];

const SmoothCarousel = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-10 relative">
      {/* Center button */}
      <div className="absolute inset-0 flex mt-10 items-center justify-center z-20">
        <button className="bg-yellow-500 text-xl text-black font-semibold px-7 py-4 rounded-md hover:bg-yellow-400 transition">
          Explore Menu
        </button>
      </div>

      {/* Top row: scroll right to left */}
      <div className="relative w-full overflow-hidden mt-10">
        <div className="flex animate-scroll-left gap-6">
          {[...topImages, ...topImages].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`top-${index}`}
              className="w-80 h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[280px] object-cover rounded-xl"
            />
          ))}
        </div>
      </div>

      {/* Bottom row: scroll left to right */}
      <div className="relative w-full overflow-hidden mt-4">
        <div className="flex animate-scroll-right gap-6">
          {[...bottomImages, ...bottomImages].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`bottom-${index}`}
              className="w-80 h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[280px] object-cover rounded-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmoothCarousel;
