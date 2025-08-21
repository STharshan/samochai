import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-green-950 to-green-800 text-white px-6 py-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left mt-15">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold text-[#4a821d] mb-5">SAMOCHAI</h2>
          <p className="text-md font-semibold text-gray-400 mb-4">
            Bringing the authentic taste of Dhaka’s street food to your table with love and tradition.
          </p>
          <div className="flex space-x-4 text-white">
            <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="https://www.instagram.com/samochaihouse/" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Quick Links</h3>
          <ul className="space-y-2 text-md text-gray-400 font-semibold">
            <li><a href="#hero" className="hover:text-gray-500">Home</a></li>
            <li><a href="#menu" className="hover:text-gray-500">Menu</a></li>
            <li><a href="#about" className="hover:text-gray-500">About</a></li>
            <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Our Menu</h3>
          <ul className="space-y-2 text-md text-gray-400 font-semibold">
            <li><a href="#">Entrees</a></li>
            <li><a href="#">Snacks</a></li>
            <li><a href="#">Drinks</a></li>
            <li><a href="#">Desserts</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Contact Info</h3>
          <ul className="space-y-3 text-md text-gray-400 font-semibold">
            <li className="flex items-start gap-4">
              <FiMapPin className="mt-3 text-[#4a821d] text-2xl" />
              9a Great Central Road, Loughborough, England, LE11 1RW
            </li>
            <li className="flex items-center gap-4">
              <FiPhone className="text-[#4a821d]"/> +880 1234-567890
            </li>
            <li className="flex items-center gap-4">
              <FiMail className="text-[#4a821d]" /> hello@samochai.com
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-600" />

      {/* Bottom Bar */}
      <div className="text-center text-md text-white font-semibold">
        © 2024 SAMOCHAI. All rights reserved. Made with <span className="text-red-500">❤️</span> for authentic food lovers.
      </div>
      <div className="text-center text-md text-white font-semibold mt-2">
        Powered By <a href="https://www.ansely.co.uk/" className="hover:text-green-400 hover:underline">Ansely</a>
      </div>
    </footer>
  );
};

export default Footer;
