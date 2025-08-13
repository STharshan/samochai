import React, { useState } from 'react';

const categories = [
  "All",
  "Hot & Cold Sandwiches",
  "Street Food",
  "Mishti Milkshakes",
  "Cold Drinks",
  "Ice Coffee",
  "100% FRESH JUICE",
  "Tea & Coffee",
];

const allItems = [
  {
    title: "Chicken Baguette",
    price: "£3.50",
    desc: "Fresh chicken baguette with crisp lettuce and tomatoes",
    category: "Hot & Cold Sandwiches",
    image: "/cake.jpeg",
  },
  {
    title: "Cheese Salad Baguette",
    price: "£3.50",
    desc: "Fresh cheese and salad baguette with mixed greens",
    category: "Hot & Cold Sandwiches",
    image: "/barger.jpeg",
  },
  {
    title: "Tuna Baguette",
    price: "£3.50",
    desc: "Classic tuna baguette with fresh vegetables",
    category: "Hot & Cold Sandwiches",
    image: "/fishfry.jpeg",
  },
  {
    title: "Masala Chai",
    price: "£2.00",
    desc: "Authentic Bangladeshi spiced tea",
    category: "Tea & Coffee",
    image: "/tea.jpeg",
  },
  {
    title: "Samosa Plate",
    price: "£4.00",
    desc: "Crispy golden samosas with dipping sauce",
    category: "Street Food",
    image: "/samocha.jpeg",
  },
  {
    title: "Chocolate Milkshake",
    price: "£4.00",
    desc: "Iced coffee with caramel flavor",
    category: "Ice Coffee",
    image: "/chocolate.jpeg",
  },
  {
    title: "Cold Drinks",
    price: "£4.00",
    desc: "Creamy mango yogurt drink",
    category: "Cold Drinks",
    image: "/lemon.jpeg",
  },
  {
    title: "Cold Drinks",
    price: "£4.00",
    desc: "Fresh pomegranate juice",
    category: "100% FRESH JUICE",
    image: "/juice.jpeg",
  },
];

const Menu = () => {
  const [selected, setSelected] = useState("All");

  const filtered = selected === "All"
    ? allItems
    : allItems.filter((item) => item.category === selected);

  return (
    <section id='menu' className="w-full bg-gradient-to-b from-green-950 via-green-900 to-black text-white py-16 px-6">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-5">Our Best & Delicious Menu</h2>
        <p className="text-gray-300 text-md md:text-xl font-semibold mt-2 mb-15">
          Discover the authentic taste of Dhaka’s street food scene
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-md font-medium text-sm transition duration-300 ease-in-out ${
              selected === cat
                ? "bg-[#346909] text-white"
                : "bg-white text-[#346909] hover:bg-[#346909] hover:text-white"
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
            className="bg-[#0e1b0e]/90 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-[#346909] hover:border hover:z-10 hover:shadow-2xl"
          >
            <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <span className="text-green-400 font-semibold">{item.price}</span>
              </div>
              <p className="text-sm text-gray-300 mb-4">{item.desc}</p>
              <button className="w-full bg-[#346909] hover:bg-green-950 text-white py-2 rounded-md flex items-center justify-center gap-2 font-semibold transition duration-300 ease-in-out">
                <span className="text-xl">+</span> Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Full Menu Button */}
      <div className="mt-12 flex justify-center">
        <button className="bg-[#346909] hover:bg-green-950 text-white px-6 py-2 rounded-md font-semibold text-sm md:text-base transform hover:scale-105 transition duration-300 ease-in-out">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default Menu;
