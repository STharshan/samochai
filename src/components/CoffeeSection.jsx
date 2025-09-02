import React from "react";
import { Coffee, CupSoda } from "lucide-react";

export default function CoffeeSection() {
  return (
    <section className="bg-[#96dd99] py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
            FUELING YOUR DAY<br />
            THE <span className="text-white">RIGHT</span> WAY.
          </h1>
          <p className="text-gray-800 text-base mb-8 max-w-lg mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Read More →
          </button>
        </div>

        {/* Center Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/cup2.png"
            alt="Coffee Cup"
            className="w-[300px] md:w-[360px] lg:w-[400px] xl:w-[450px] object-contain"
          />
        </div>

        {/* Right Features */}
        <div className="flex-1 space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-black text-white p-3 rounded-full shrink-0">
              <Coffee size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">PREMIUM COFFEE</h3>
              <p className="text-gray-800 text-sm mt-1 max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-black text-white p-3 rounded-full shrink-0">
              <CupSoda size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">ORIGINAL TASTE</h3>
              <p className="text-gray-800 text-sm mt-1 max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}