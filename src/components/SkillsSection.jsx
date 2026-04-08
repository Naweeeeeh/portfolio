import { motion } from 'framer-motion';

const SkillsSection = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ['Python', 'Java', 'Kotlin', 'C#', 'C++', 'C', 'JavaScript', 'Solidity', 'SQL']
        },
        {
            title: "Frameworks",
            skills: ['React', 'Django', '.NET']
        },
        {
            title: "Databases & Cloud",
            skills: ['Supabase']
        },
        {
            title: "Tools & Ecosystems",
            skills: ['TensorFlow', 'Polkadot', 'WebRTC']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-extrabold text-white mb-16 text-center"
            >
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Arsenal</span>
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
            >
                {skillCategories.map((category) => (
                    <motion.div
                        key={category.title}
                        variants={itemVariants}
                        className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-purple-500/50 transition-colors duration-300 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-gray-900/80 text-gray-300 border border-gray-700 text-sm font-medium px-4 py-2 rounded-lg cursor-default hover:border-purple-500 hover:text-purple-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(168,85,247,0.2)]"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default SkillsSection;