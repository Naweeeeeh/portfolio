import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <Link
                to={`/projects/${project.id}`}
                className="group flex flex-col h-full bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.3)] focus:ring-4 focus:ring-purple-500 outline-none"
            >
                <div className="h-48 bg-gray-900 rounded-2xl mb-8 flex items-center justify-center border border-gray-700 overflow-hidden relative">

                    <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                    {project.images && project.images.length > 0 ? (
                        <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    ) : (
                        <span className="text-gray-500 font-medium tracking-wider">{project.title}</span>
                    )}
                </div>

                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-lg mb-6 line-clamp-3 flex-grow">
                    {project.shortDesc}
                </p>

                <div className="flex flex-wrap mb-8 gap-2">
                    {project.techStack.map((tag) => (
                        <span key={tag} className="bg-gray-900/80 border border-gray-700 text-gray-300 text-xs px-3 py-1.5 rounded-full font-medium">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="font-bold text-lg text-white group-hover:text-purple-400 flex items-center gap-2 transition-colors mt-auto">
                    View Project <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;