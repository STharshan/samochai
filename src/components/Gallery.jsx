import React from 'react';

const images = [
  '/barger.jpeg',
  '/cake.jpeg',
  '/chocolate.jpeg',
  '/fishfry.jpeg',
  '/juice.jpeg',
  '/lemon.jpeg',
  '/samocha.jpeg',
  '/tea.jpeg',
  '/barger.jpeg',
  '/cake.jpeg',
];

const Gallery = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-green-950 to-green-950 text-white py-16 -mt-15">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-7">Our Gallery</h2>
        <p className="text-sm md:text-lg text-white font-semibold">
          Take a visual journey through our delicious offerings and vibrant atmosphere
        </p>
      </div>

      {/* Scrolling gallery */}
      <div className="overflow-hidden relative">
        <div
          className="flex gap-6 w-max px-6 
          [animation:scroll-x_40s_linear_infinite] 
          hover:[animation-play-state:paused]"
          style={{
            animation: 'scroll-x 40s linear infinite',
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 h-44 rounded-xl overflow-hidden 
              transform transition-transform duration-300 
              hover:scale-105 cursor-pointer"
            >
              <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Custom keyframes in style tag */}
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
