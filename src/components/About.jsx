import React from 'react';

const About = () => {
  return (
    <section id='about' className="w-full bg-gradient-to-b from-black via-green-950 to-green-950 text-white py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Why We are Best Food Maker
        </h2>
        <p className="text-md md:text-lg text-gray-300 max-w-2xl mx-auto font-semibold">
          Born in the heart of Dhaka’s bustling streets, SAMOCHAI is more than a<br />
          restaurant - it’s a celebration of our culture and food.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/resturant.png"
            alt="Dhaka food culture"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right text */}
        <div className="text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-[#346909] mb-4">
            Our Story
          </h3>
          <p className="text-sm md:text-base text-gray-100 leading-relaxed mb-4 font-semibold">
            It is a long established fact that authentic flavors come from tradition and passion.
            At SAMOCHAI, we bring the vibrant street food culture of Dhaka to your table,
            preserving the original recipes passed down through generations.
          </p>
          <p className="text-sm md:text-base text-gray-100 leading-relaxed font-semibold">
            Our journey began in the bustling streets of Old Dhaka, where every corner tells a
            story of culinary heritage. Today, we continue that legacy by serving the most
            authentic Bengali street food with the same love and dedication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
