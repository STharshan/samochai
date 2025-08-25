import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ingredients = [
    {
        name: "CINNAMON",
        img: "/cinnamon.webp"
    },
    {
        name: "CARDAMOM",
        img: "/cardamom.webp"
    },
    {
        name: "BLACK PEPPER",
        img: "/pepper.webp"
    },
    {
        name: "ASSAM BLACK TEA",
        img: "/assam.jpg"
    },
    {
        name: "FENNEL SEEDS",
        img: "/fennel.jpg"
    },
    {
        name: "CLOVES",
        img: "/clove.jpg"
    },
    {
        name: "GINGER ROOT",
        img: "/ginger.jpg"
    }
];


export default function ChaiSection() {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-[#96dd99] px-4 py-10">
            <div className="flex flex-col xl:flex-row justify-center items-center gap-10">
                {/* Left Text */}
                <div className="relative max-w-md ml-5 border-3 border-black shadow-lg bg-white p-6">
                    <div className="absolute -left-2 -top-2 w-full h-full -z-10" />
                    <p className="text-black font-medium text-base leading-relaxed">
                       The true charm of Bengali Chai lies in its soulfulness. More than just a cup of tea, 
                       it’s a ritual woven into everyday life — mornings that begin with its aroma, conversations that flow around it, 
                       and quiet evenings made warmer by its taste. Recipes differ from one household to another, some with a touch of cardamom
                       or ginger, others brewed longer for a stronger depth of flavor. Whether enjoyed sweet and creamy or light and spiced, 
                       Bengali Chai is deeply personal, carrying with it the warmth of tradition and the comfort of home.
                    </p>
                    {/* Right full border */}
                    <div className="absolute top-1 -left-4 h-full w-[15px] bg-yellow-400"></div>

                    {/* Bottom fixed half-border */}
                    <div className="absolute -bottom-4 -left-4 w-full h-[15px] bg-yellow-400"></div>
                </div>

                {/* Carousel */}
                <div className="relative max-w-4xl w-full">
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar px-2 border-3 p-5 pl-5"
                    >
                        {ingredients.map((item, idx) => (
                            <div
                                key={idx}
                                className="min-w-[200px] sm:min-w-[240px] md:min-w-[260px] flex-shrink-0 relative rounded-xl overflow-hidden shadow-md"
                            >
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-70 h-70 object-cover rounded-xl"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center py-2">
                                    <h3 className="text-lg sm:text-xl font-bold">{item.name}</h3>
                                </div>
                            </div>
                        ))}

                        {/* Right full border */}
                        <div className="absolute top-0 -left-3.5 h-full w-[15px] bg-yellow-400"></div>

                        {/* Bottom fixed half-border */}
                        <div className="absolute -bottom-3.5 right-3.5 w-full h-[15px] bg-yellow-400"></div>
                    </div>

                    {/* Scroll buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-orange-400 p-3 rounded-full z-20 shadow-md"
                    >
                        <FaChevronLeft className="text-white text-xl" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-400 p-3 rounded-full z-20 shadow-md"
                    >
                        <FaChevronRight className="text-white text-xl" />
                    </button>
                </div>
            </div>
            {/* Learn More Button */}
            <div className="mt-8 px-8 text-center">
                <button className="border-3 border-black px-6 py-3 text-xl font-bold hover:bg-black hover:text-white transition">
                    LEARN MORE
                </button>
            </div>

        </div>
    );
}