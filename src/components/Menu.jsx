import React, { useState, useEffect } from 'react';

const categories = [
  "Hot & Cold Sandwiches",
  "Street Food",
  // "Mishti Milkshakes",
  "Cold Drinks",
  // "Ice Coffee",
  "100% FRESH JUICE",
  "Tea & Coffee",
];

const allItems = [
  {
    title: "Cheese & Tomato Baguette",
    price: "£3.50",
   // desc: "Fresh cheese and salad baguette with mixed greens",
    category: "Hot & Cold Sandwiches",
    image: "/g6.jpg",
  },
  {
    title: "Tuna mayo cob",
    price: "£2.00",
   // desc: "Fresh cheese and salad baguette with mixed greens",
    category: "Hot & Cold Sandwiches",
    image: "/g112.webp",
  },
  {
    title: "Chicken Baguette",
    price: "£3.50",
   // desc: "Fresh chicken baguette with crisp lettuce and tomatoes",
    category: "Hot & Cold Sandwiches",
    image: "/g16.jpg",
  },
  {
    title: "Tuna Baguette",
    price: "£3.50",
   // desc: "Classic tuna baguette with fresh vegetables",
    category: "Hot & Cold Sandwiches",
    image: "/g112.jpg",
  },
  {
    title: "Chilli Cheese Toastie",
    price: "£2.50",
   // desc: "Fresh cheese and salad baguette with mixed greens",
    category: "Hot & Cold Sandwiches",
    image: "/g18.jpg",
  },
  {
    title: "Mushroom & Cheese toastie",
    price: "£3.35",
    //desc: "Fresh cheese and salad baguette with mixed greens",
    category: "Hot & Cold Sandwiches",
    image: "/g112.webp",
  },
  {
    title: "Double Cheese Baget",
    price: "£2.00",
    //desc: "Fresh cheese and salad baguette with mixed greens",
    category: "Hot & Cold Sandwiches",
    image: "/g112.webp",
  },
  {
    title: "Cheese & Tomato Baget",
    price: "£2.25",
   // desc: "Fresh cheese and salad baguette with mixed greens",
    category: "Hot & Cold Sandwiches",
    image: "/g12.webp",
  },
  {
    title: "Samosas (veg/pot)",
    price: "£1.00",
    //desc: "Fresh cheese and salad baguette with mixed greens",
    category: "Street Food",
    image: "/g18.jpg",
  },
  {
    title: "Samosas (chicken/meat)",
    price: "£1.50",
    //desc: "Authentic Bangladeshi spiced tea",
    category: "Street Food",
    image: "/g18.jpg",
  },
  {
    title: "Jaal muri",
    price: "£2.50",
   // desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g7.jpg",
  },
  {
    title: "Mishti Phan",
    price: "£1.00",
   // desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g7.jpg",
  },
  {
    title: "Jaal muri",
    price: "£2.50",
   // desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g7.jpg",
  },
  {
    title: "Pani Puri Fruit bombs (6pcs)",
    price: "£5.00",
    //desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g7.jpg",
  },
  {
    title: "Spicy chana chatt",
    price: "£3.50",
    //desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g7.jpg",
  }, 
  {
    title: "Samosa Chatt",
    price: "£5.00",
    //desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g3.jpg",
  },
  {
    title: "Masala Omelette Parata",
    price: "£3.00",
   // desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g7.jpg",
  },
  {
    title: "Hash brown cob",
    price: "£1.50",
    //desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g7.jpg",
  },

  {
    title: "Masala Omlette",
    price: "£2.00",
    //desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g7.jpg",
  }, 
  {
    title: "Muglai Parata**",
    price: "£3.95 / £7",
    //desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g7.jpg",
  },
  {
    title: "Chicken & Spinach pasty**",
    price: "£3.50",
    //desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g7.jpg",
  },
  {
    title: "Chicken kebab bap**",
    price: "£3.50",
    //desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g7.jpg",
  },
  {
    title: "Croissant butter",
    price: "£1.50",
    //desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g7.jpg",
  },
  {
    title: "Almond Croissant",
    price: "£2.00",
    //desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g7.jpg",
  },
  {
    title: "Choc’n’nut Granola Bowl",
    price: "£3.49",
    //desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g14.png",
  },
  {
    title: "Fruit ’n’nut Granola Bowl",
    price: "£3.49",
    //desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g10.png",
  },
  {
    title: "Home baked",
    price: "£2.50",
    //desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/g18.jpg",
  },
  {
    title: "Chocolate Milkshake",
    price: "£4.00",
    desc: "Iced coffee with caramel flavor",
    category: "Cold Drinks",
    image: "/g2.jpg",
  },
  {
    title: "Cold Drinks",
    price: "£4.00",
    desc: "Creamy mango yogurt drink",
    category: "100% FRESH JUICE",
    image: "/g13.png",
  },
  {
    title: "Cold Drinks",
    price: "£4.00",
    desc: "Fresh pomegranate juice",
    category: "100% FRESH JUICE",
    image: "/g8.jpg",
  },
   {
    title: "Tea & Coffee",
    price: "£4.00",
    //desc: "Fresh pomegranate juice",
    category: "Tea & Coffee",
    image: "/g0.png",
  },
];


const Menu = () => {
  const [selected, setSelected] = useState("Hot & Cold Sandwiches");

  const filtered = selected === ""
    ? allItems
    : allItems.filter((item) => item.category === selected);

  // Initialize AOS-like animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filtered]);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes bubbleEffect {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(50px, -50px) scale(1.5);
            opacity: 1;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
        }

        [data-aos] {
          opacity: 0;
          transform: translate3d(0, 40px, 0);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        [data-aos].aos-animate {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        [data-aos="fade-up"].aos-animate {
          animation: fadeInUp 0.8s ease-out;
        }

        .glow-effect {
          animation: glow 2s ease-in-out infinite alternate;
        }

        .pulse-effect {
          animation: pulse 2s infinite;
        }

        .shimmer-effect {
          background: linear-linear(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .category-glow {
          position: relative;
          overflow: hidden;
        }

        .category-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-linear(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .category-glow:hover::before {
          left: 100%;
        }

        .menu-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 10px rgba(52, 105, 9, 0.5), 0 0 20px rgba(52, 105, 9, 0.3), 0 0 30px rgba(52, 105, 9, 0.2);
          border: 4px solid #346909;
        }

        .menu-card:hover img {
          filter: brightness(1.1) contrast(1.2);
        }

        .menu-card:hover .shimmer-effect {
          animation: shimmer 1.5s infinite;
        }

        .category-button {
          transition: all 0.3s ease;
        }

        .category-button:hover {
          background-color: #346909;
          color: white;
          transform: scale(1.05);
          box-shadow: 0 0 10px rgba(52, 105, 9, 0.3), 0 0 20px rgba(52, 105, 9, 0.2);
        }

        .category-button.active {
          background-color: #346909;
          color: white;
        }

        /* Bubble Effect */
        .bubble {
          position: absolute;
          width: 50px;
          height: 50px;
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          animation: bubbleEffect 10s infinite ease-in-out;
          pointer-events: none;
        }

        /* Animation for background bubbles */
        .bubble:nth-child(1) {
          top: 10%;
          left: 20%;
          animation-delay: 2s;
        }

        .bubble:nth-child(2) {
          top: 30%;
          left: 60%;
          animation-delay: 4s;
        }

        .bubble:nth-child(3) {
          top: 70%;
          left: 50%;
          animation-delay: 6s;
        }

        .bubble:nth-child(4) {
          top: 50%;
          left: 80%;
          animation-delay: 8s;
        }

        /* Glowing border effect */
        .glowing-border {
          border: 3px solid #346909;
          box-shadow: 0 0 10px rgba(52, 105, 9, 0.5), 0 0 20px rgba(52, 105, 9, 0.3), 0 0 30px rgba(52, 105, 9, 0.2);
        }

      `}</style>

      <section id='menu' className="relative w-full bg-[#12392c] text-black py-16 px-6 scroll-m-15">
        {/* Background Bubble Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-200/20 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-green-300/15 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 bg-green-400/10 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-linear-to-br from-green-200/10 to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Title */}
        <div className="text-center mb-8 z-10 relative">
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            className="text-4xl md:text-6xl font-bold mb-5 glow-effect"
          >
            Our Best & Delicious Menu
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-md md:text-xl font-semibold mt-2 mb-15"
          >
            Discover the authentic taste of sylhet street food scene
          </p>
        </div>

        {/* Categories */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat, index) => (
            <button
              key={cat}
              data-aos="zoom-in"
              data-aos-delay={400 + index * 50}
              onClick={() => setSelected(cat)}
              className={`category-button px-4 py-2 rounded-md font-medium text-sm transition duration-300 ease-in-out ${selected === cat
                ? "bg-[#E8D28A] text-black pulse-effect"
                : "bg-white text-[#12392c] hover:bg-[#E8D28A] hover:shadow- hover:text-white glow-effect"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filtered.map((item, i) => (
            <div
              key={i}
              data-aos={i % 3 === 0 ? "fade-right" : i % 3 === 1 ? "fade-up" : "fade-left"}
              data-aos-delay={100 + i * 100}
              className="menu-card 
  bg-[#0e1b0e]/90 
  rounded-lg 
  overflow-hidden 
  transition-all 
  duration-300 
  ease-in-out 
  shadow-lg
  transform 
  hover:scale-105 
  hover:border-4 
  hover:shadow-[0_0_15px_5px_rgba(52,105,9,0.5),0_0_25px_10px_rgba(52,105,9,0.3)] 
  hover:border-[#346909] 
  hover:z-10 
  active:border-[#346909] 
  active:glow-effect
  hover:glow-effect"
            >
              <div className="relative overflow-hidden h-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 mx-auto mt-5 rounded-md h-45 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 shimmer-effect opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-bold text-[#C8A950]">{item.title}</h3>
                  <span className="text-green-400 font-semibold">{item.price}</span>
                </div>
                <p className="text-sm text-gray-300 mb-4">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
