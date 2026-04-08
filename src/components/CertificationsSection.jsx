import { motion } from 'framer-motion';

const CertificationsSection = () => {
    const certs = [
        { name: "Java Programming Certification", issuer: "Code Chum" },
        { name: "C Programming Certification", issuer: "Code Chum" },
        { name: "React Course Certification", issuer: "Udemy" },
        { name: "Data Structures Course", issuer: "Udemy" }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-extrabold text-white mb-12 text-center"
            >
                My <span className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">Certifications</span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {certs.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }} // Staggers based on index
                        className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:border-amber-400 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(251,191,36,0.3)]"
                    >
                        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-4 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{cert.name}</h3>
                        <p className="text-sm text-gray-400 font-medium tracking-wide uppercase">{cert.issuer}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CertificationsSection;