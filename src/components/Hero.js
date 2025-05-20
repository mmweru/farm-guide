import { ArrowRight } from 'lucide-react';
import farmImage from '../assets/farm.png';
import { useEffect } from 'react';

export default function Hero({ isVisible, setIsVisible, scrollToSolutions, setShowAuthModal }) {
    useEffect(() => {
        const visibilityTimer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(visibilityTimer);
    }, [setIsVisible]);

    return (
        <div className="container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-16 md:pb-24 grid lg:grid-cols-2 gap-8 md:gap-6 items-center">
            <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="absolute -top-8 -left-8 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-green-400 to-green-500 rounded-full opacity-20 animate-pulse"></div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 md:mb-6 text-white relative z-10 font-['Poppins',sans-serif]">
                    <span className="relative">
                        Harvesting
                        <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400 transform"></span>
                    </span>
                    <br />
                    <span className="text-green-200 text-3xl sm:text-4xl md:text-5xl">Tomorrow's</span>
                    <br />
                    <span className="text-green-100 text-2xl sm:text-3xl md:text-4xl">Harvests</span>
                    <br />
                    <span className="text-yellow-400">Today</span>
                </h2>

                <p className="text-green-50 mb-6 md:mb-8 max-w-lg text-base md:text-lg">
                    Where agriculture meets innovation. Our platform is dedicated to empowering farmers with cutting-edge technology and comprehensive solutions that streamline operations, enhance productivity, and ensure sustainability.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        onClick={() => setShowAuthModal(true)}
                        className="group flex items-center text-green-900 bg-gradient-to-r from-yellow-400 to-yellow-500 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg shadow-xl hover:shadow-yellow-400/20 transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
                    >
                        <span className="font-bold">Get Started</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>

                    <button
                        onClick={scrollToSolutions}
                        className="flex items-center text-white border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                    >
                        <span>Learn More</span>
                    </button>
                </div>
            </div>

            <div className={`relative transform transition-all duration-1000 flex justify-center items-center ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="absolute w-full h-full rounded-full border-2 border-dashed border-white opacity-20 animate-spin" style={{ animationDuration: '30s' }}></div>

                <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-2xl mx-auto z-10 w-full max-w-md">
                    <img
                        src={farmImage}
                        alt="Farmer with harvest"
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-60"></div>

                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/90 backdrop-blur-md rounded-lg p-2 md:p-3 shadow-lg transform rotate-2">
                        <p className="text-green-800 font-semibold text-sm md:text-base">Sustainable farming solutions</p>
                        <div className="flex items-center mt-1">
                            <div className="flex -space-x-1 md:-space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-[8px] md:text-xs text-green-800">
                                        {i}
                                    </div>
                                ))}
                            </div>
                            <span className="ml-1 md:ml-2 text-xs md:text-sm text-green-600">+240 farmers joined</span>
                        </div>
                    </div>
                </div>

                <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
        </div>
    );
}