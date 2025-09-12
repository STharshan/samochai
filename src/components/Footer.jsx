import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black px-6 py-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left mt-15">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold text-[#4a821d] mb-5">SAMOCHAI</h2>
          <p className="text-md font-semibold mb-4">
            Bringing the authentic taste of Dhaka’s street food to your table with love and tradition.
          </p>
          <div className="flex space-x-4 text-white">
            <a href="https://www.facebook.com/samochai" className="hover:text-blue-600 text-black" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/samochaihouse/" className="hover:text-pink-500 text-black" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/samochai" className="hover:text-blue-400 text-black" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Quick Links</h3>
          <ul className="space-y-2 text-md font-semibold">
            <li><a href="#hero" className="hover:text-gray-500">Home</a></li>
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
            <li>
              <Link to="/terms&condition" className="hover:text-gray-500 transition">
                Term & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-gray-500 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Contact Info</h3>
          <ul className="space-y-3 text-md font-semibold">
            <li className="flex items-start gap-4">
              <FiMapPin className="mt-3 text-green-800 text-2xl" />
              <a 
                href="https://www.google.com/maps?q=9a+Great+Central+Road,+Loughborough,+England,+LE11+1RW" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                9a Great Central Road, Loughborough, England, LE11 1RW
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FiPhone className="text-green-800" />
              <a href="tel:+8801234567890" className="text-black hover:underline">
                +880 1234 567890
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FiMail className="text-green-800" />
              <a href="mailto:hello@samochai.com" className="text-black hover:underline">
                hello@samochai.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-600" />

      {/* Bottom Bar */}
      <div className="text-center text-md font-semibold">
        © 2025 SAMOCHAI. All rights reserved. Made with <span className="text-red-500">❤️</span> for authentic food lovers.
      </div>
      <div className="text-center text-md font-semibold mt-2">
        Powered By <a href="https://www.ansely.co.uk/" className="hover:text-green-800 hover:underline" target="_blank" rel="noopener noreferrer">Ansely</a>
      </div>
    </footer>
  );
};

export default Footer;
