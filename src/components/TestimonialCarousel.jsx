import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
    text: `The food was finger licking good, was drooling for seconds. I had the omelette wrap with beef rashers and extra masala. It was out of this world. I also had the sheekh egg roll, I have to admit both were absolutely delicious with the intricacy of spices and oomph to it. But the milkshake, I loved it, sends nostalgic vibes through memory lane. The first sip to the last, it was everlasting, I didn’t want it to end. Taking in to consideration, I’ve tried it for the first time. I will definitely come back again BUT I need to try the rest of the menu too.`,
    name: 'Rayyan Al-Muneem',
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="w-full bg-[#96dd99] text-black py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-5">What Our Customers Say</h2>
        <p className="text-black text-sm md:text-lg font-semibold">
          Don’t just take our word for it – hear from our satisfied customers
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="max-w-3xl mx-auto bg-[#0e1b0e]/70 backdrop-blur border-1 border-[#163002] rounded-lg p-8 relative shadow-md transition-all duration-300">
        {/* Gold stars */}
        <div className="text-center mb-4 text-yellow-500 text-xl">
          {'★'.repeat(5)}
        </div>

        {/* Testimonial Text */}
        <div className="text-center italic text-white text-lg leading-relaxed font-semibold max-w-2xl mx-auto">
          “{testimonials[index].text}”
        </div>

        {/* Name */}
        <div className="text-center mt-6 font-bold text-black text-lg">
          {testimonials[index].name}
        </div>

        {/* Left arrow button with icon */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-[#346909] rounded w-10 h-10 flex items-center justify-center text-white transition duration-300"
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>

        {/* Right arrow button with icon */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-[#346909] rounded w-10 h-10 flex items-center justify-center text-white transition duration-300"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-[#346909]' : 'bg-gray-500'
              }`}
          ></div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          onClick={() => window.open ("https://share.google/743LJO5oOTcFTMPrw", "_blank")}
          className="bg-[#346909] hover:bg-green-950 border cursor-pointer mb-10 text-white px-6 py-2 rounded-md font-semibold text-sm md:text-base transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Review
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
