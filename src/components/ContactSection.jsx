import { motion } from 'framer-motion';

const ContactSection = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-extrabold text-white mb-6"
            >
                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Me</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-400 mb-10 font-light"
            >
                I'd love to hear from you.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.4 }}
            >
                {/* Added flex-wrap here to gracefully handle 3 buttons on varying screen sizes */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 flex-wrap">

                    <a
                        href="mailto:noehboiser221@gmail.com"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-purple-500 text-purple-400 font-bold text-lg py-4 px-12 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-1 text-center"
                    >
                        Email
                    </a>

                    <a
                        href="https://www.linkedin.com/in/naweeeeeh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-purple-500 text-purple-400 font-bold text-lg py-4 px-12 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-1"
                    >
                        LinkedIn
                    </a>

                    {/* New Resume Button */}
                    <a
                        href="/images/NoehArbeeBoiser_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-purple-500 text-purple-400 font-bold text-lg py-4 px-12 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-1"
                    >
                        View Resume
                    </a>

                </div>
            </motion.div>
        </div>
    );
};

export default ContactSection;