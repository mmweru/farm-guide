import { useState } from 'react';
import { BarChart2, Droplet, Cloud, Sun, Leaf, Wind, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function Solutions({ solutionsRef, isVisible }) {
    const [hoverCard, setHoverCard] = useState(null);
    const [solutionsOpen, setSolutionsOpen] = useState(false);

    const serviceItems = [
        {
            title: "Crop Monitoring",
            description: "AI-powered crop health monitoring and predictive analytics for optimal yields",
            icon: <BarChart2 className="h-6 w-6" />,
            color: "from-green-400 to-green-600"
        },
        {
            title: "Smart Irrigation",
            description: "Precision water management systems that conserve resources and boost growth",
            icon: <Droplet className="h-6 w-6" />,
            color: "from-blue-400 to-blue-600"
        },
        {
            title: "Climate Insights",
            description: "Advanced weather forecasting tailored specifically for agricultural planning",
            icon: <Cloud className="h-6 w-6" />,
            color: "from-indigo-400 to-indigo-600"
        },
        {
            title: "Solar Farming",
            description: "Renewable energy solutions designed for modern agricultural operations",
            icon: <Sun className="h-6 w-6" />,
            color: "from-yellow-400 to-amber-600"
        },
        {
            title: "Sustainable Practices",
            description: "Eco-friendly farming techniques that improve soil health and biodiversity",
            icon: <Leaf className="h-6 w-6" />,
            color: "from-emerald-400 to-emerald-600"
        },
        {
            title: "Weather Resilience",
            description: "Strategies and tools to protect crops from extreme weather events",
            icon: <Wind className="h-6 w-6" />,
            color: "from-cyan-400 to-cyan-600"
        }
    ];

    return (
        <div className="relative container mx-auto px-4 sm:px-6 py-12 md:py-20" ref={solutionsRef}>
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl"></div>

            <div className="relative">
                <div className="text-center mb-12 md:mb-16">
                    <h3 className="inline-block text-xs md:text-sm font-bold uppercase tracking-wider bg-green-800 text-green-200 px-3 py-1 md:px-4 md:py-1 rounded-full mb-3 md:mb-4">Our Solutions</h3>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 font-['Poppins',sans-serif]">Farming Futures: Innovate, Connect, Thrive</h2>
                    <p className="max-w-2xl mx-auto text-green-100 text-sm md:text-base">
                        We're dedicated to powering the future of agriculture through innovation,
                        connectivity, and sustainable practices that benefit farmers and the environment.
                    </p>
                </div>

                <div className="lg:hidden mb-6">
                    <button
                        onClick={() => setSolutionsOpen(!solutionsOpen)}
                        className="w-full flex items-center justify-between bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 text-white"
                    >
                        <span>View Our Solutions</span>
                        {solutionsOpen ? <ChevronUp /> : <ChevronDown />}
                    </button>

                    {solutionsOpen && (
                        <div className="mt-2 bg-white/5 backdrop-blur-md rounded-lg overflow-hidden">
                            {serviceItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-4 border-b border-green-800/50 last:border-b-0"
                                >
                                    <div className="flex items-center">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-gradient-to-br ${item.color} text-white`}>
                                            {item.icon}
                                        </div>
                                        <h3 className="text-white font-medium">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceItems.map((item, index) => (
                        <div
                            key={index}
                            className={`relative bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transform transition-all duration-500 ${hoverCard === index ? 'scale-105 shadow-2xl z-10' : 'scale-100 shadow-lg'
                                } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoverCard(index)}
                            onMouseLeave={() => setHoverCard(null)}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 ${hoverCard === index ? 'opacity-20' : ''
                                }`}></div>

                            <div className="p-6">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${item.color} text-white`}>
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-green-100 mb-4">{item.description}</p>

                                <a href="#" className="inline-flex items-center text-yellow-400 font-medium group">
                                    <span>Learn more</span>
                                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}