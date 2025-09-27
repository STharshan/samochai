import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="w-full bg-white text-black py-20 px-6 scroll-m-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
          Why We are Best Food Maker
        </h2>
        <p className="text-md md:text-lg text-gray-700 max-w-2xl mx-auto font-semibold" data-aos="fade-up" data-aos-delay="200">
          Born in the heart of Dhaka’s bustling streets, SAMOCHAI is more than a<br />
          restaurant - it’s a celebration of our culture and food.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left image */}
        <div className="rounded-xl overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow duration-300 ease-in-out" data-aos="zoom-in">
          <img
            src="/resturant.png"
            alt="Dhaka food culture"
            className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:z-10"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          />
        </div>

        {/* Right text */}
        <div className="text-left" data-aos="fade-left" data-aos-delay="400">
          <h3 className="text-2xl md:text-3xl font-bold text-[#96dd99] mb-4">
            Our Story
          </h3>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 font-semibold text-shadow-md">
            It is a long established fact that authentic flavors come from tradition and passion.
            At SAMOCHAI, we bring the vibrant street food culture of Dhaka to your table,
            preserving the original recipes passed down through generations.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed font-semibold">
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
