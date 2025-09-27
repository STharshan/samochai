import React, { useEffect } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);

  return (
    <div id="contact" className="scroll-mt-15 min-h-screen w-full bg-[#96dd99] text-black font-sans p-6 md:p-12">
      {/* Heading */}
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-4xl md:text-6xl font-bold mb-7">Get In Touch</h2>
        <p className="text-sm md:text-lg text-gray-700 font-semibold max-w-xl mx-auto mb-13" data-aos="fade-up" data-aos-delay="200">
          Have questions or want to share feedback? We'd love to hear from you!
        </p>
      </div>

      {/* Contact Form + Info Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-13">
        {/* Left Form Section */}
        <div
          className="bg-white/10 rounded-lg p-6 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
          data-aos="fade-right"
        >
          <h2 className="text-2xl font-bold mb-6">Send us a Message via WhatsApp</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border border-gray-900 rounded-md p-2 text-gray-700 placeholder-text-gray-700 focus:ring-2 focus:ring-green-400 shadow-md hover:shadow-xl transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border border-gray-900 rounded-md p-2 text-gray-700 placeholder-text-gray-700 focus:ring-2 focus:ring-green-400 shadow-md hover:shadow-xl transition-all"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="bg-transparent border border-gray-900 rounded-md p-2 text-gray-700 placeholder-text-gray-700 mt-4 w-full focus:ring-2 focus:ring-green-400 shadow-md hover:shadow-xl transition-all"
          />

          <textarea
            placeholder="Your Message"
            rows="12"
            className="bg-transparent border border-gray-900 rounded-md p-2 text-gray-700 placeholder-text-gray-700 mt-4 w-full focus:ring-2 focus:ring-green-400 shadow-md hover:shadow-xl transition-all"
          ></textarea>

          <button className="mt-6 w-full bg-green-700 hover:bg-green-600 text-black font-semibold py-2 rounded-md transition-all shadow-md hover:shadow-2xl">
            Send via WhatsApp
          </button>
        </div>

        {/* Right Info Section */}
        <div className="flex flex-col gap-7">
          {/* Location */}
          <div
            className="bg-white/10 rounded-lg p-4 flex gap-4 items-center shadow-md hover:shadow-2xl transition-all duration-300"
            data-aos="fade-left"
          >
            <div className="w-10 h-10 flex-shrink-0 rounded-full bg-white flex items-center justify-center text-green-900 text-xl">
              <FiMapPin />
            </div>
            <div>
              <h3 className="font-semibold">Location</h3>
              <a
                href="https://www.google.com/maps?q=9a+Great+Central+Road,+Loughborough,+England,+LE11+1RW"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                9a Great Central Road, Loughborough, England, LE11 1RW
              </a>
            </div>
          </div>

          {/* Phone */}
          <div
            className="bg-white/10 rounded-lg p-4 flex gap-4 items-start shadow-md hover:shadow-2xl transition-all duration-300"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-900 text-xl">
              <FiPhone />
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <a href="tel:07850 053653" className="text-black hover:underline">
                07850 053653
              </a>
            </div>
          </div>

          {/* Email */}
          <div
            className="bg-white/10 rounded-lg p-4 flex gap-4 items-start shadow-md hover:shadow-2xl transition-all duration-300"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-900 text-xl">
              <FiMail />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:samochaihouse@gmail.com" className="text-black hover:underline">
                samochaihouse@gmail.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div
            className="bg-white/10 rounded-lg p-4 flex gap-4 items-start shadow-md hover:shadow-2xl transition-all duration-300"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-900 text-xl mt-6">
              <FiClock />
            </div>
            <div>
              <h3 className="font-semibold">Hours</h3>
              <p className="text-sm">
                Monday – Thursday: 9 AM – 5:30 PM <br />
                Friday: 9 AM – 4:30 PM <br />
                Saturday – Sunday: Closed
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300" data-aos="fade-left" data-aos-delay="800">
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2414.0029190128184!2d-1.2021149240990698!3d52.768221217823445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e0a439be36ad%3A0xe71820265bdba5fe!2s9a%20Great%20Central%20Rd%2C%20Loughborough%20LE11%201RW%2C%20UK!5e0!3m2!1sen!2slk!4v1757667304293!5m2!1sen!2slk"
              allowFullScreen
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
