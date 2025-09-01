import React from "react";
import { Coffee, CupSoda } from "lucide-react";

export default function CoffeeSection() {
    return (
        <section className="bg-[#96dd99] py-4 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 ">
            {/* Left Content */}
            <div className="flex-1 lg:text-left z-10 max-w-sm mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-6">
                    FUELING YOUR DAY
                    THE <span className="text-white">RIGHT</span> WAY.
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto lg:mx-0 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                    tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto lg:mx-0 hover:bg-gray-300 transition">
                    Read More →
                </button>
            </div>

            {/* Right Content */}
            <div className="flex-1 relative justify-center mt-12 lg:mt-0">
                <img
                    src="/cup2.png"
                    alt="Coffee Cup"
                    className="relative w-64 md:w-80 lg:w-[420px]"
                />

                {/* Features */}
                <div className="absolute top-1/2 right-0 lg:right-[-50px] transform -translate-y-1/2 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-black text-white p-3 rounded-full">
                            <Coffee size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">PREMIUM COFFEE</h3>
                            <p className="text-gray-600 text-sm max-w-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                tellus luctus.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-black text-white p-3 rounded-full">
                            <CupSoda size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">ORIGINAL TASTE</h3>
                            <p className="text-gray-600 text-sm max-w-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                tellus luctus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
