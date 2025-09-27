import React, { useState } from "react";
import { FaCheck, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Mission = () => {
    const [activeTab, setActiveTab] = useState("");

    const tabs = [
        { id: "mission", label: "OUR MISSION" },
        { id: "vision", label: "OUR VISION" },
    ];

    return (
        <section className="w-full py-16 px-4 md:px-12 bg-white">
                   <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-200/20 rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-20 w-24 h-24 bg-green-300/15 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-20 left-20 w-16 h-16 bg-green-400/10 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-gradient-to-br from-green-200/10 to-transparent rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                {/* Left Section - Tabs */}
                <div className="flex-1 max-w-2xl" data-aos="fade-right">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8">
                        SAVOR THE <span className="text-[#96dd99]">FLAVOR</span>,<br /> ONE SIP AT A TIME.
                    </h2>

                    <div className="space-y-4">
                        {tabs.map((tab) => (
                            <div key={tab.id} className="transition-all">
                                <button
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-md font-bold text-lg transition-colors
                    ${activeTab === tab.id
                                            ? "bg-[#96dd99] text-white shadow-lg hover:shadow-xl"
                                            : "bg-transparent text-gray-800 border-b hover:bg-gray-100 hover:shadow-md"
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <span>{tab.label}</span>
                                    <span>{activeTab === tab.id ? "–" : "+"}</span>
                                </button>

                                {/* Show Content when Active */}
                                {activeTab === tab.id && (
                                    <div className="mt-2 p-4 bg-gray-900 text-white rounded-b-md shadow-md hover:shadow-lg">
                                        <p>
                                            {tab.id === "mission"
                                                ? "We are dedicated to serving the best chai in town, brewed with care and tradition, paired with vibrant street food that delights the senses. Our mission is to create a welcoming space where people can gather, share stories, and experience the rich aromas, flavors, and culture that chai has always represented."
                                                : "To become the most loved destination for chai and street food, where every sip and every bite brings people closer to the warmth, aroma, and joy of authentic flavors."}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section - Orange Box with Image */}
                <div className="relative z-10" data-aos="fade-left">
                    <div className="bg-[#96dd99] rounded-2xl p-8 sm:p-18 text-white relative overflow-hidden min-h-[340px] pr-28 md:pr-32 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 leading-snug">
                            BREWED WITH LOVE, <br />
                            SERVED WITH A SMILE
                        </h3>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2 bg-black px-4 py-2 rounded-full text-sm w-fit shadow-md hover:shadow-lg">
                                <FaCheck className="text-[#96dd99]" />
                                Organic & fresh Coffee
                            </div>
                            <div className="flex items-center gap-2 bg-black px-4 py-2 rounded-full text-sm w-fit shadow-md hover:shadow-lg">
                                <FaCheck className="text-[#96dd99]" />
                                Premium Coffee
                            </div>
                        </div>

                        <p className="font-medium text-sm mb-2">SOCIAL MEDIA :</p>
                        <div className="flex gap-3 mb-4">
                            <a
                                href="https://www.facebook.com/ChaiGuysUk/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-black p-2 rounded-full hover:text-blue-600 hover:shadow-md transition-all duration-300"
                            >
                                <FaFacebookF size={14} />
                            </a>
                            <a
                                href="https://www.instagram.com/samochaihouse/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-black p-2 rounded-full hover:text-pink-600 hover:shadow-md transition-all duration-300"
                            >
                                <FaInstagram size={14} />
                            </a>
                            <a
                                href="https://twitter.com/samochai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-black p-2 rounded-full hover:text-blue-400 hover:shadow-md transition-all duration-300"
                            >
                                <FaTwitter size={14} />
                            </a>
                        </div>
                    </div>

                    {/* COFFEE CUP IMAGE OUTSIDE CARD */}
                    <img
                        src="/cup3.png"
                        alt="Coffee Cup"
                        className="absolute left-[200px] bottom-[-18px] w-[180px] md:w-[220px] lg:w-[260px] xl:w-[280px] z-0 hover:rotate-12 transition-all duration-300"
                    />
                </div>
            </div>
        </section>
    );
};

export default Mission;
