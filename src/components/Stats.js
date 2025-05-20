import { useState, useEffect } from 'react';

export default function Stats({ isVisible }) {
    const [animatedValues, setAnimatedValues] = useState({
        farms: 0,
        satisfaction: 0,
        yield: 0,
        hectares: 0
    });

    useEffect(() => {
        const animateStats = () => {
            const duration = 2000;
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);

                setAnimatedValues({
                    farms: Math.floor(progress * 200),
                    satisfaction: Math.floor(progress * 98),
                    yield: Math.floor(progress * 35),
                    hectares: Math.floor(progress * 12000)
                });

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            animate();
        };

        animateStats();
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {[
                    { value: `${animatedValues.farms}+`, label: "Partner Farms" },
                    { value: `${animatedValues.satisfaction}%`, label: "Satisfaction Rate" },
                    { value: `${animatedValues.yield}%`, label: "Yield Increase" },
                    { value: `${animatedValues.hectares.toLocaleString()}`, label: "Hectares Optimized" }
                ].map((stat, index) => (
                    <div
                        key={index}
                        className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        <div className="text-3xl md:text-4xl lg:text-5xl font-black text-yellow-400 mb-1 md:mb-2">{stat.value}</div>
                        <div className="text-green-200 uppercase tracking-wide text-xs md:text-sm font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}