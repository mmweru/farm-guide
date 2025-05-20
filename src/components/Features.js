// components/Features.jsx
import { motion } from 'framer-motion';
import { SunIcon, CurrencyDollarIcon, BookOpenIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const FeatureCard = ({ icon, title, description, delay }) => (
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay, duration: 0.6 }}
        className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-emerald-400/30 transition-all"
    >
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-emerald-500/10 mb-6">
            {icon}
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-emerald-100/80 leading-relaxed">{description}</p>
    </motion.div>
);

const Features = () => {
    const features = [
        {
            icon: <SunIcon className="w-8 h-8 text-emerald-400" />,
            title: 'Smart Weather Tracking',
            description: 'AI-powered forecasts and microclimate analysis for optimal planting decisions',
            delay: 0.2
        },
        {
            icon: <CurrencyDollarIcon className="w-8 h-8 text-emerald-400" />,
            title: 'Market Intelligence',
            description: 'Real-time commodity pricing and global market trend predictions',
            delay: 0.4
        },
        {
            icon: <BookOpenIcon className="w-8 h-8 text-emerald-400" />,
            title: 'Regenerative Education',
            description: 'Expert-led courses on soil health and sustainable practices',
            delay: 0.6
        },
        {
            icon: <ChartBarIcon className="w-8 h-8 text-emerald-400" />,
            title: 'Crop Analytics',
            description: 'Advanced monitoring systems for yield optimization',
            delay: 0.8
        }
    ];

    return (
        <section className="py-24 bg-emerald-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center text-white mb-16"
                >
                    Farming Futures: Innovate, Connect, Thrive
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <FeatureCard key={idx} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
