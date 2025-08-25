import React, { useState } from "react";
import { FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";

const Mission = () => {
    const [activeTab, setActiveTab] = useState("mission");

    const tabs = [
        { id: "mission", label: "OUR MISSION" },
        { id: "vision", label: "OUR VISION" },
    ];

    return (
        <section className="w-full py-16 px-4 md:px-12 bg-[#96dd99]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-10 items-center">

                {/* Right - Coffee Card (Image will be on right side now) */}
                <div className="flex-1 bg-orange-500 text-white p-6 rounded-xl flex flex-col items-center lg:items-start">
                    <div className="flex">
                        <div className="mb-4">
                            <h3 className="font-bold text-xl md:text-2xl mb-4">
                                BREWED WITH LOVE, SERVED WITH A SMILE
                            </h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="bg-orange-700 rounded-full w-5 h-5 flex items-center justify-center text-sm">✔</span>
                                    Organic & fresh Coffee
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="bg-orange-700 rounded-full w-5 h-5 flex items-center justify-center text-sm">✔</span>
                                    Premium Coffee
                                </li>
                            </ul>
                        </div>

                        <div className="w-full flex justify-center">
                            <img
                                src="/cup.png" // Replace with your coffee cup image
                                alt="Coffee Cup"
                                className="w-32 md:w-40 lg:w-48 object-contain"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <FaLinkedin size={24} />
                        <FaPinterest size={24} />
                        <FaTwitter size={24} />
                    </div>
                </div>

                {/* Left - Tabs */}
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
                        SAVOR THE <span className="text-orange-500">FLAVOR</span>, <br /> ONE SIP AT A TIME.
                    </h2>

                    <div className="space-y-2">
                        {tabs.map((tab) => (
                            <div key={tab.id}>
                                <button
                                    className={`w-full text-left px-4 py-2 rounded-md font-semibold transition-colors ${activeTab === tab.id
                                        ? "bg-gray-900 text-white"
                                        : "bg-transparent text-gray-800 hover:bg-gray-200"
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>

                                {/* Conditionally Render Content Based on Active Tab */}
                                {activeTab === tab.id && (
                                    <div className="mt-2 p-4 bg-gray-900 text-white rounded-md">
                                        <p>
                                            {tab.id === "mission"
                                                ? "We are dedicated to serving the best chai in town, brewed with care and tradition, paired with vibrant street food that delights the senses. Our mission is to create a welcoming space where people can gather, share stories, and experience the rich aromas, flavors, and culture that chai has always represented."
                                                : tab.id === "vision"
                                                    ? "To become the most loved destination for chai and street food, where every sip and every bite brings people closer to the warmth, aroma, and joy of authentic flavors."
                                                    : ""}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Mission;
