import { projects } from '../data/projectsData';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const ProjectsGrid = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-extrabold text-white mb-16 text-center"
            >
                Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">My Works</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsGrid;