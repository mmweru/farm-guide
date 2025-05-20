import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Leaf } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ navRef, mobileMenuOpen, setMobileMenuOpen, setShowAuthModal }) {
    const [solutionsOpen, setSolutionsOpen] = useState(false);

    return (
        <nav ref={navRef} className="fixed top-0 w-full z-50 backdrop-blur-md bg-green-900/90 px-4 py-3 md:px-6 md:py-4 flex justify-between items-center shadow-lg transition-all duration-300 border-b border-green-800/30">
            <div className="flex items-center">
                <div className="relative">
                    <Leaf className="text-white mr-2 h-5 w-5 md:h-6 md:w-6 animate-pulse" />
                    <div className="absolute -top-1 -left-1 w-6 h-6 md:w-8 md:h-8 bg-green-400 rounded-full opacity-30 animate-ping"></div>
                </div>
                <h1 className="text-xl md:text-2xl font-black tracking-wider text-white">
                    ARDHI<span className="text-yellow-400">GRO</span>
                </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
                {["Platform", "About", "Solutions", "Services", "Stories"].map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className="text-white/90 hover:text-white hover:opacity-100 relative group transition-all duration-300 text-sm xl:text-base"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
                <button
                    onClick={() => setShowAuthModal(true)}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 px-4 py-1.5 xl:px-6 xl:py-2 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-400/20 transform hover:-translate-y-0.5 transition-all duration-300 text-sm xl:text-base ml-4"
                >
                    Contact Us
                </button>
            </div>

            {/* Mobile menu button */}
            <button
                className="lg:hidden text-white p-1 rounded-md hover:bg-green-800/50 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? (
                    <X size={28} className="text-yellow-400" />
                ) : (
                    <Menu size={28} />
                )}
            </button>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-green-900/95 backdrop-blur-md pt-24 px-6 pb-8 flex flex-col">
                    <div className="flex-1 flex flex-col space-y-4">
                        {["Platform", "About", "Solutions", "Services", "Stories"].map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="text-white/90 hover:text-white text-lg py-3 border-b border-green-800/50 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <button
                        onClick={() => {
                            setShowAuthModal(true);
                            setMobileMenuOpen(false);
                        }}
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 mt-6 text-base"
                    >
                        Contact Us
                    </button>
                </div>
            )}
        </nav>
    );
}