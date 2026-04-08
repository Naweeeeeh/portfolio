import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col-reverse lg:flex-row items-center gap-16 overflow-hidden">

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full lg:w-3/5 text-center lg:text-left"
            >
                <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
                    Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 relative inline-block">Noeh Arbee</span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed font-light"
                >
                    A 3rd-year BS Computer Science student driven by the challenge of delivering project-based solutions.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg lg:text-xl text-gray-500 mb-10 leading-relaxed"
                >
                    Continuously staying at the forefront of emerging technologies—from modern full-stack frameworks to AI and blockchain—to actively transform academic knowledge into practical, scalable applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                    <Link to="/projects" className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-purple-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:-translate-y-1">
                        View My Work
                    </Link>
                    <Link to="/contact" className="px-8 py-4 font-bold text-white transition-all duration-200 bg-gray-800 border border-gray-700 rounded-full hover:bg-gray-700 hover:border-gray-500">
                        Let's Connect
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-64 h-64 lg:w-96 lg:h-96 relative group"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                <div className="relative w-full h-full bg-gray-800 border-2 border-gray-700 rounded-full flex items-center justify-center shadow-2xl overflow-hidden z-10">
                    <img
                        src="src/images/noeh.jpg"
                        alt="pic nako"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;