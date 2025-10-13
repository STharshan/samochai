import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import the AOS styles

const images = [
  '/g1.jpg',
  '/g2.jpg',
  '/g3.jpg',
  '/g4.jpg',
  '/g5.jpg',
  '/g6.jpg',
  '/g7.jpg',
  '/g8.jpg',
  '/g9.jpg',
  '/samocha.jpeg',
  '/tea.jpeg',
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <section className="w-full bg-[#96dd99] text-black py-16 -mt-15">
      {/* Heading */}
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-4xl md:text-6xl font-bold mb-7">Our Gallery</h2>
        <p className="text-sm md:text-lg text-gray-700 font-semibold" data-aos="fade-up" data-aos-delay="200">
          Take a visual journey through our delicious offerings and vibrant atmosphere
        </p>
      </div>

      {/* Scrolling gallery */}
      <div className="overflow-hidden relative">
        <div
          className="flex gap-6 w-max px-6 py-15 
          [animation:scroll-x_40s_linear_infinite] 
          hover:[animation-play-state:paused]"
          style={{
            animation: 'scroll-x 40s linear infinite',
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 h-60 rounded-xl 
              transform 
              hover:scale-105 cursor-pointer shadow-lg hover:shadow-[#346909] border-2 border-transparent hover:border-[#346909] transition-all duration-300 ease-in-out"
              data-aos="zoom-in"
            >
              <img
                src={src}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover transform rounded-xl hover:rounded-xl transition-all duration-300 ease-in-out hover:brightness-90"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom keyframes for scroll animation */}
      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0%) }
          100% { transform: translateX(-50%) }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
