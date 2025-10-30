import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#12392c] text-black px-6 py-0.5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left mt-5">
        {/* Column 1 */}
        <div>
          <h2 className="flex items-center text-2xl font-bold text-[#E8D28A] mb-5 gap-2">
            <img
              className="text-5xl font-serif tracking-widest w-65"
              src="/logo.png"
              alt="logo"
            />
          </h2>
          <p className="text-md font-semibold mb-4">
            Bringing the authentic taste of sylhet street food to your table with love and tradition.
          </p>
          <div className="flex space-x-4 text-white">
            <a href="https://www.instagram.com/samochaihouse/" className="hover:text-pink-500 text-black" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Quick Links</h3>
          <ul className="space-y-2 text-md font-semibold">
            <li><a href="/" className="hover:text-gray-500">Home</a></li>
            <li><a href="#menu" className="hover:text-gray-500">Menu</a></li>
            <li><a href="#about" className="hover:text-gray-500">About</a></li>
            <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Our Menu</h3>
          <ul className="space-y-2 text-md font-semibold">
            <li><a href="#">Entrees</a></li>
            <li><a href="#">Snacks</a></li>
            <li><a href="#">Drinks</a></li>
            <li><a href="#">Desserts</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Contact Info</h3>
          <ul className="space-y-3 text-md font-semibold">
            <li className="flex items-start gap-4">
              <FiMapPin className="mt-3 text-green-800 text-2xl" />
              <a
                href="https://maps.app.goo.gl/UjXrLfUgafhjnzmQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                9a Great Central Road, Loughborough, England, LE11 1RW
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FiPhone className="text-green-800" />
              <a href="tel: +447850 053653" className="text-black hover:underline">
                07850 053653
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FiMail className="text-green-800 text-xl" />
              <a href="mailto:samochaihouse@gmail.com" className="text-black hover:underline text-lg md:text-xs lg:text-lg">
                samochaihouse@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-3 border-gray-600" />
      <div className="text-center text-black font-bold">
        <p>&copy; 2025 SAMOCHAI. All rights reserved.</p>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-black">
        {/* Left: Terms & Privacy */}
        <div className="flex gap-4 text-sm">
          <Link
            to="/terms&condition"
            className="text-black hover:text-gray-600 transition duration-300"
          >
            Terms & Conditions
          </Link>
          <span className="text-black">|</span>
          <Link
            to="/privacy-policy"
            className="text-black hover:text-gray-600 transition duration-300"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Center: Powered by Ansely (unchanged) */}
        <p className="text-center font-semibold text-black p-2">
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer >
  );
};

export default Footer;
