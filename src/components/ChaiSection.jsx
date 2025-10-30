import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LuSandwich } from 'react-icons/lu';
import { PiCoffeeBeanBold } from 'react-icons/pi';
import { GiCoffeeMug } from 'react-icons/gi';

const ingredients = [
    {
        name: "Sreemangal Tea Estates",
        img: "/i1.png"
    },
    {
        name: "Malnichhera Tea Estate",
        img: "/i2.png"
    },
    {
        name: "Lakkatura Tea Garden",
        img: "/i3.png"
    },
    {
        name: "Jaflong Tea Estate",
        img: "/i4.png"
    },
    {
        name: "Tarapur Tea Estate",
        img: "/i5.png"
    },
    {
        name: "Finlay Tea Estate",
        img: "/i6.png"
    },
    {
        name: "Dhamai Tea Estate",
        img: "/i7.png"
    }
];

export default function ChaiSection() {
    const scrollRef = React.useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-out-cubic',
            once: false,
            mirror: true,
            offset: 120,
            delay: 50,
        });
        AOS.refresh();

        // Intersection Observer for visibility
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.3 }
        );

        const currentRef = scrollRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    // Mouse tracking for parallax effects
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-white px-4 py-10 relative overflow-hidden">
            <h2
                className="text-center text-4xl md:text-6xl font-bold mb-6 tracking-wide text-black relative z-10"
                data-aos="fade-up"
            >
                <span className="inline-block mb-3">
                    Sylhet Tea Gardens
                </span>
            </h2>
            <style>
                {`
                  @keyframes pulseSpin {
                    0%   { transform: rotate(0deg) scale(0.8); opacity: 0.2; }
                    40%  { transform: rotate(180deg) scale(1.6); opacity: 1; }
                    70%  { transform: rotate(270deg) scale(1.2); opacity: 0.7; }
                    100% { transform: rotate(360deg) scale(0.8); opacity: 0.2; }
                  }
                  .bg-icon {
                    position: absolute;
                    color: #E8D28A !important;
                    animation: pulseSpin 25s ease-in-out infinite;
                    filter: drop-shadow(0 0 18px rgba(232, 210, 138, 0.8));
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
                `}
            </style>

            {/* 🔹 Dotted background pattern */}
            <div
                className="absolute inset-0 bg-[radial-gradient(#E8D28A_2px,transparent_2px)] [background-size:20px_20px]"
                style={{
                    WebkitMaskImage:
                        "linear-gradient(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskSize: "cover",
                    maskImage:
                        "linear-gradient(135deg, black 0%, transparent 40%, transparent 60%, black 100%)",
                    maskRepeat: "no-repeat",
                    maskSize: "cover",
                }}
            />

            {/* 🔹 Enhanced Floating Icons with pulseSpin */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <LuSandwich className="bg-icon w-24 h-24 left-[10%] top-[15%]" style={{ animationDelay: '0s' }} />
                <PiCoffeeBeanBold className="bg-icon w-20 h-20 right-[10%] top-[20%]" style={{ animationDelay: '5s' }} />
                <GiCoffeeMug className="bg-icon w-24 h-24 left-[25%] bottom-[10%]" style={{ animationDelay: '10s' }} />
                <LuSandwich className="bg-icon w-20 h-20 right-[15%] bottom-[15%]" style={{ animationDelay: '15s' }} />
            </div>

            <div className="flex flex-col xl:flex-row justify-center items-center gap-10 relative z-10">
                {/* Left Text with Enhanced Effects */}
                <div
                    className="relative max-w-md ml-5 border-3 border-black shadow-lg bg-white p-6 group transform transition-all duration-700 hover:scale-105 hover:shadow-2xl"
                    style={{
                        transform: `perspective(1000px) rotateY(${mousePosition.x * 0.1}deg) rotateX(${mousePosition.y * 0.1}deg)`
                    }}
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="1500"
                >
                    {/* Animated border glow */}
                    <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm -z-10"></div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute top-2 left-2 w-1 h-1 bg-[#12392c] rounded-full animate-ping"></div>
                        <div className="absolute top-4 right-4 w-1 h-1 bg-[#12392c] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute bottom-4 left-6 w-1 h-1 bg-green-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                    </div>

                    <div className="absolute -left-2 -top-2 w-full h-full -z-10" />
                    <p className="text-black font-medium text-base leading-relaxed relative z-10  transition-colors duration-300">
                        Sylhet  is where Bangladesh’s tea magic comes to life. Wander through endless green hills, watch skilled hands pluck the
                        freshest leaves, and soak in views that feel like a dream. Whether you love adventure, culture, or simply a great cup of
                        tea, these vibrant tea estates are packed with charm, discovery, and unforgettable moments.
                    </p>

                    {/* Animated borders */}
                    <div className="absolute top-1 -left-4 h-full w-[15px] bg-gradient-to-b from-[#12392c] to-[#12392c] group-hover:w-[20px] transition-all duration-500 animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-full h-[15px] bg-gradient-to-r from-[#12392c] to-[#12392c] group-hover:h-[20px] transition-all duration-500"></div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse transform -skew-x-12"></div>
                    </div>
                </div>

                {/* Enhanced Carousel */}
                <div
                    className="relative max-w-4xl w-full group"
                    data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-duration="1500"
                >
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar px-2 border-3 p-5 pl-5 relative transform transition-all duration-700 group-hover:scale-102 hover:shadow-2xl"
                        style={{
                            boxShadow: isVisible ? '0 25px 50px -12px rgba(34, 197, 94, 0.25)' : 'none'
                        }}
                    >
                        {/* Animated background wave */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 via-green-100/30 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                        {ingredients.map((item, idx) => (
                            <div
                                key={idx}
                                className="min-w-[200px] sm:min-w-[240px] md:min-w-[260px] flex-shrink-0 relative rounded-xl overflow-hidden shadow-md group/card transform transition-all duration-500 hover:shadow-lg"
                                data-aos="zoom-in"
                                data-aos-delay={600 + idx * 150}
                                data-aos-duration="1000"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    transform: hoveredCard === idx
                                        ? 'translateY(-10px) rotateX(5deg) rotateY(5deg) scale(1.05)'
                                        : 'translateY(0) rotateX(0) rotateY(0) scale(1)',
                                    zIndex: hoveredCard === idx ? 20 : 1,
                                    filter: hoveredCard !== null && hoveredCard !== idx ? 'blur(2px) brightness(0.7)' : 'none'
                                }}
                            >
                                {/* Glowing border effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#12392c] via-[#12392c] to-green-600 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 blur-sm"></div>

                                {/* Image with enhanced effects */}
                                <div className="relative rounded-xl overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-70 h-70 object-cover rounded-xl transition-all duration-500 ease-out transform group-hover/card:scale-110"
                                        style={{
                                            filter: hoveredCard === idx ? 'brightness(1.2) contrast(1.1) saturate(1.3)' : 'brightness(1) contrast(1) saturate(1)'
                                        }}
                                    />

                                    {/* Multiple overlay effects */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 group-hover/card:opacity-80 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#12392c]/20 via-transparent to-green-600/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                                    {/* Sparkle effects */}
                                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
                                        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                                        <div className="absolute top-8 right-6 w-1 h-1 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                        <div className="absolute bottom-12 left-6 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                                        <div className="absolute top-1/2 right-4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                                    </div>
                                </div>

                                {/* Enhanced label */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/20 text-white text-center py-3 transform transition-all duration-300 group-hover/card:from-green-900/90 group-hover/card:to-green-800/30">
                                    <h3 className="text-lg sm:text-xl font-bold transform transition-all duration-300 group-hover/card:scale-110">
                                        {item.name}
                                    </h3>

                                    {/* Animated underline */}
                                    <div className="w-0 h-0.5 bg-[#12392c] mx-auto mt-1 group-hover/card:w-16 transition-all duration-500"></div>
                                </div>

                                {/* Ripple effect on hover */}
                                <div className="absolute inset-0 rounded-xl opacity-0 group-hover/card:opacity-100 pointer-events-none">
                                    <div className="absolute inset-0 rounded-xl bg-[#12392c]/20 animate-ping"></div>
                                </div>
                            </div>
                        ))}

                        {/* Enhanced borders with animation */}
                        <div className="absolute top-0 -left-3.5 h-full w-[15px] bg-gradient-to-b from-[#12392c] via-[#12392c] to-[#12392c] animate-pulse"></div>
                        <div className="absolute -bottom-3.5 right-3.5 w-full h-[15px] bg-gradient-to-r from-[#12392c] via-[#12392c] to-[#12392c] group-hover:animate-pulse transition-all duration-500"></div>
                    </div>

                    {/* Enhanced Scroll buttons with more effects */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-600 to-green-700 p-3 rounded-full z-20 shadow-lg hover:shadow-2xl hover:shadow-[#12392c]/50 transition-all duration-300 hover:scale-110 group animate-pulse hover:animate-none"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#12392c]/50 to-[#12392c]/50 rounded-full opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-300"></div>
                        <FaChevronLeft className="text-white text-xl hover:-translate-x-2 transition-transform duration-300 transform relative z-10" />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-600 to-green-700 p-3 rounded-full z-20 shadow-lg hover:shadow-2xl hover:shadow-[#12392c]/50 transition-all duration-300 hover:scale-110 group animate-pulse hover:animate-none"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#12392c]/50 to-[#12392c]/50 rounded-full opacity-0 group-hover:opacity-100 animate-spin transition-opacity duration-300"></div>
                        <FaChevronRight className="text-white text-xl hover:translate-x-2 transition-transform duration-300 transform relative z-10" />
                    </button>

                    {/* Floating progress indicator */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {ingredients.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${hoveredCard === idx ? 'bg-[#12392c] scale-125' : 'bg-green-200'
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced Learn More Button */}
            <div
                className="mt-12 px-8 text-center"
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="1200"
            >
                <button className="relative border-3 border-black px-8 py-4 text-xl font-bold group overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                    {/* Glowing border effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#12392c] via-green-500 to-[#12392c] opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500"></div>

                    {/* Button text */}
                    <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500 font-black tracking-wider">
                        LEARN MORE
                    </span>

                    {/* Sparkle effects */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute top-2 left-4 w-1 h-1 bg-[#12392c] rounded-full animate-ping"></div>
                        <div className="absolute top-3 right-6 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-green-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                    </div>

                    {/* Ripple effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                        <div className="absolute inset-0 border-2 border-[#12392c] rounded animate-ping"></div>
                    </div>
                </button>
            </div>

            {/* Floating action indicator */}
            <div className="fixed bottom-8 right-8 z-50 opacity-0 animate-fade-in" style={{ animationDelay: '2s' }}>
                <div className="bg-[#12392c] text-white p-3 rounded-full shadow-lg animate-bounce">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}