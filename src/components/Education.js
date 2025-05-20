// components/Education.jsx
import { motion } from 'framer-motion';

const ArticleCard = ({ title, excerpt, tag }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-emerald-400/30 transition-all"
    >
        <span className="inline-block bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-sm mb-4">
            {tag}
        </span>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-emerald-100/80">{excerpt}</p>
    </motion.div>
);

const Education = () => {
    return (
        <section className="py-24 bg-emerald-950">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center text-white mb-16"
                >
                    Regenerative Agriculture Hub
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <ArticleCard
                        tag="Soil Health"
                        title="Biochar Integration Techniques"
                        excerpt="Revolutionize your soil structure with carbon-rich amendments"
                    />
                    <ArticleCard
                        tag="Water Management"
                        title="Drought-Resilient Farming"
                        excerpt="Advanced water conservation strategies for arid climates"
                    />
                    <ArticleCard
                        tag="Crop Rotation"
                        title="Polyculture Systems"
                        excerpt="Maximize yield through intelligent planting patterns"
                    />
                </div>
            </div>
        </section>
    );
};

export default Education;