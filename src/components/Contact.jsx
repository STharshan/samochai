import React, { useState, useEffect } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { PiCoffeeBeanBold } from 'react-icons/pi';
import { GiCoffeeMug } from 'react-icons/gi';
import { LuSandwich } from 'react-icons/lu';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Validate form inputs
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errs.email = "Email is invalid";
    }
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const whatsappMessage = `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`;
      const phoneNumber = '+447850053653'; // Replace with your WhatsApp number
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div id="contact" className="scroll-mt-15 min-h-screen w-full bg-white text-white font-sans p-6 md:p-12 relative overflow-hidden">

      {/* Dotted Background */}
      <div
        className="absolute inset-0 bg-[radial-linear(#CCFF66_2px,transparent_2px)] [background-size:20px_20px]"
        style={{
          WebkitMaskImage: "linear-linear(135deg, white 0%, transparent 40%, transparent 60%, white 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
          maskImage: "linear-linear(135deg, white 0%, transparent 40%, transparent 60%, white 100%)",
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      />

      {/* Animated Background Icons */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes pulseSpin {
            0%   { transform: rotate(0deg) scale(0.8); opacity: 0.2; }
            40%  { transform: rotate(180deg) scale(1.6); opacity: 1; }
            70%  { transform: rotate(270deg) scale(1.2); opacity: 0.7; }
            100% { transform: rotate(360deg) scale(0.8); opacity: 0.2; }
          }
          .bg-icon {
            position: absolute;
            color: #96dd99 !important;
            animation: pulseSpin 25s ease-in-out infinite;
            filter: drop-shadow(0 0 18px rgba(150,221,153,0.8));
            z-index: 0;
            pointer-events: none;
          }
          @media (max-width: 768px) {
            .bg-icon {
              width: 2rem !important;
              height: 2rem !important;
              animation-duration: 18s;
              opacity: 0.15;
            }
          }
          `,
        }}
      />
      <PiCoffeeBeanBold className="bg-icon top-10 left-10 w-24 h-24" style={{ animationDelay: "0s" }} />
      <GiCoffeeMug className="bg-icon bottom-1/4 left-12 w-20 h-20" style={{ animationDelay: "7s" }} />
      <LuSandwich className="bg-icon top-1/3 right-16 w-24 h-24" style={{ animationDelay: "14s" }} />

      {/* Heading */}
      <div className="text-center mb-10 relative z-10" data-aos="fade-up">
        <h2 className="text-4xl md:text-6xl font-bold mb-7 text-black">Get In Touch</h2>
        <p className="text-sm md:text-lg text-gray-700 font-semibold max-w-xl mx-auto mb-13" data-aos="fade-up" data-aos-delay="200">
          Have questions or want to share feedback? We'd love to hear from you!
        </p>
      </div>

      {/* Contact Form + Info */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
        {/* Left Form */}
        <form
          className="bg-[#12392c] rounded-lg p-6 md:p-10 shadow-xl h-112 hover:shadow-[#346909] active:shadow-[#346909] transition-all duration-300"
          onSubmit={handleSubmit}
          data-aos="fade-right"
        >
          <h2 className="text-2xl font-bold mb-6">Send us a Message via WhatsApp</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black ">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={`bg-transparent border-white placeholder-white  border rounded-md p-2 w-full focus:ring-2 focus:ring-green-400 transition shadow-md hover:shadow-xl ${errors.name ? 'border-red-500' : 'border-gray-900'}`}
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={`bg-transparent border-white  placeholder-white border rounded-md p-2 w-full focus:ring-2 focus:ring-green-400 transition shadow-md hover:shadow-xl ${errors.email ? 'border-red-500' : 'border-gray-900'}`}
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-4">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className={`bg-transparent border border-white placeholder-white  rounded-md p-2 w-full focus:ring-2 focus:ring-green-400 transition shadow-md hover:shadow-xl ${errors.subject ? 'border-red-500' : 'border-gray-900'}`}
              value={form.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          <div className="mt-4">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              className={`bg-transparent border border-white placeholder-white rounded-md p-2 w-full focus:ring-2 focus:ring-green-400 transition shadow-md hover:shadow-xl ${errors.message ? 'border-red-500' : 'border-gray-900'}`}
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-green-700 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition-all shadow-md hover:shadow-2xl"
          >
            Send via WhatsApp
          </button>
        </form>

        {/* Right Info Section */}
        <div className="flex flex-col gap-7 relative z-10">
          {/* Location */}
          <div className="bg-[#12392c] rounded-lg p-4 flex gap-4 items-center shadow-md hover:shadow-[#346909] active:shadow-[#346909] transition-all duration-300" data-aos="fade-left">
            <div className="w-10 h-10 flex-shrink-0 rounded-full bg-white flex items-center justify-center text-green-900 text-xl">
              <FiMapPin />
            </div>
            <div>
              <h3 className="font-semibold">Location</h3>
              <a href="https://maps.app.goo.gl/UjXrLfUgafhjnzmQ6" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                9a Great Central Road, Loughborough, England, LE11 1RW
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-[#12392c] rounded-lg p-4 flex gap-4 items-start shadow-md hover:shadow-[#346909] active:shadow-[#346909] transition-all duration-300" data-aos="fade-left" data-aos-delay="200">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-900 text-xl">
              <FiPhone />
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <a href="tel:+447850053653" className="text-white hover:underline">07850 053653</a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#12392c] rounded-lg p-4 flex gap-4 items-start shadow-md hover:shadow-[#346909] active:shadow-[#346909] transition-all duration-300" data-aos="fade-left" data-aos-delay="400">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-900 text-xl">
              <FiMail />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:samochaihouse@gmail.com" className="text-white hover:underline">samochaihouse@gmail.com</a>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-[#12392c] rounded-lg p-4 flex gap-4 items-start shadow-md hover:shadow-[#346909] active:shadow-[#346909] transition-all duration-300" data-aos="fade-left" data-aos-delay="600">
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

        </div>
      </div>
          {/* Map */}
          <div className="rounded-lg mt-10 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300" data-aos="fade-left" data-aos-delay="800">
            <iframe
              className="w-full h-100 rounded-lg border-2 border-[#12392c]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d717.6893738819927!2d-1.2001815207987023!3d52.76809914651751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e115c27f66d1%3A0xf453b623c1af34a6!2sSamochai!5e0!3m2!1sen!2slk!4v1758995069989!5m2!1sen!2slk"
              allowFullScreen
              loading="lazy"
              title="map"
            ></iframe>
          </div>
    </div>
  );
};

export default Contact;
