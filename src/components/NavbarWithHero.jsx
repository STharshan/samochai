import React, { useState } from "react";
import { LuChefHat } from "react-icons/lu";
import MenuModal from "./MenuModal"; // Ensure this import path is correct

const NavbarWithHero = () => {
  const [modalOpen, setModalOpen] = useState(false); // Modal state

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="hero" className="relative text-white text-center px-4">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/back.mp4" // Place your video file in the public folder
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 py-32 md:py-48">
        <h1 className="lg:text-7xl text-5xl font-bold mb-4">
          Craving a taste of
        </h1>
        <h1 className="text-4xl md:text-7xl font-bold mb-4">
          <span className="text-[#96dd99]">Dhaka?</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
          SAMOCHAI brings the vibrant, authentic flavors of Bangladeshi street
          food straight to you! Get ready for a delicious adventure.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button
            onClick={() =>
              document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#3f8605] hover:bg-green-900 text-white font-semibold text-lg px-8 py-3 rounded w-auto min-w-[160px] flex items-center justify-center gap-2 transition transform hover:-translate-y-1 hover:shadow-lg"
          >
            <LuChefHat className="w-5 h-5" />
            See Menu
          </button>
          <button
            onClick={openModal} // Open the modal when clicked
            className="bg-white text-[#4a821d] text-lg hover:bg-[#4a821d] hover:text-white border-2 font-bold px-8 py-3 rounded-md border-[#4a821d] w-auto min-w-[160px] transition transform hover:-translate-y-1 hover:shadow-lg"
          >
            Order Now
          </button>
        </div>
      </div>

      {/* Modal */}
      <MenuModal isOpen={modalOpen} onClose={closeModal} />
    </section>
  );
};

export default NavbarWithHero;
