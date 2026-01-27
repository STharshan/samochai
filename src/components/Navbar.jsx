import React, { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import MenuModal from './MenuModal'; // Make sure this path matches your structure

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    setMenuOpen(false); // close mobile menu when modal opens
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-linear-to-b from-black to-[#12392c] text-white px-4">
        <div className="max-w-7xl mx-auto flex items-center py-3.5 justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              className="w-60"
              loading="lazy"
              src="/logo.png"
              alt="logo"
            />
            <span className="text-xl font-bold mt-3">Chai House</span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 font-semibold">
            <a href="#" className="hover:text-[#E8D28A]">Home</a>
            <a href="#about" className="hover:text-[#E8D28A]">About</a>
            <a href="#menu" className="hover:text-[#E8D28A]">Menu</a>
            <a href="#contact" className="hover:text-[#E8D28A]">Contact</a>
          </div>

          {/* Order Button (Desktop) */}
          <div className="hidden lg:flex mr-18 sm:mr-10">
            <button
              onClick={openModal}
              className="flex items-center space-x-2 bg-white text-green-900 font-semibold px-4 py-2 rounded-md shadow hover:bg-[#E8D28A] hover:text-black"
            >
              <FiShoppingCart />
              <span>Order Now</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden sm:mr-15 mr-5">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-linear-to-b from-black to-green-900 text-white px-6 py-4 space-y-4 text-left z-40">
            <a href="#" className="block py-1 hover:text-[#E8D28A]">Home</a>
            <a href="#about" className="block py-1 hover:text-[#E8D28A]">About</a>
            <a href="#menu" className="block py-1 hover:text-[#E8D28A]">Menu</a>
            <a href="#contact" className="block py-1 hover:text-[#E8D28A]">Contact</a>
            <button
              onClick={openModal}
              className="flex items-center gap-2 bg-white text-green-800 px-4 py-2 rounded-md shadow hover:bg-green-50"
            >
              <FiShoppingCart />
              <span>Order Now</span>
            </button>
          </div>
        )}
      </nav>

      {/* Modal */}
      <MenuModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;
