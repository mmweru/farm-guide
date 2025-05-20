import { useEffect, useState } from 'react';

export default function AnimatedBackground({ scrollY }) {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const rotationInterval = setInterval(() => {
            setRotation(prev => (prev + 0.2) % 360);
        }, 50);

        return () => clearInterval(rotationInterval);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div
                className="absolute top-1/4 -left-32 w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-dashed border-white opacity-10"
                style={{ transform: `rotate(${rotation}deg)` }}
            ></div>
            <div className="absolute top-20 right-20 w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-green-400 opacity-10"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
            <div className="absolute bottom-40 left-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full bg-yellow-400 opacity-5"
                style={{ transform: `translateY(${scrollY * -0.05}px) translateX(${Math.sin(scrollY * 0.01) * 20}px)` }}></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 md:w-24 md:h-24 rounded-full bg-green-300 opacity-10"
                style={{ transform: `translateY(${Math.cos(scrollY * 0.02) * 30}px)` }}></div>
        </div>
    );
}