import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // <-- This is usually the missing piece!

const ProjectDetailsPage = () => {
    const { projectId } = useParams();
    const project = projects.find((p) => p.id === projectId);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Project not found.</h2>
                <Link to="/projects" className="text-purple-500 hover:text-white transition-colors">
                    ← Return to Projects
                </Link>
            </div>
        );
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
        );
    };

    const hasImages = project.images && project.images.length > 0;

    return (
        <div className="pb-16 bg-gray-900 min-h-screen text-gray-300">
            <div className="max-w-7xl mx-auto px-6">

                <Link to="/projects" className="inline-block mb-12 text-lg font-medium text-purple-500 hover:text-white transition-colors">
                    <span className="text-2xl mr-2">←</span> Back to Projects
                </Link>

                <div className="mb-16 text-center">
                    <span className="text-xl font-bold text-purple-500 mb-4 block">{project.category}</span>
                    <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-8">{project.title}</h1>
                    <p className="text-2xl lg:text-3xl text-gray-100 max-w-4xl mx-auto font-light leading-relaxed">
                        {project.shortDesc}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    <div className="lg:col-span-2 aspect-w-16 aspect-h-10 bg-gray-800 rounded-3xl flex items-center justify-center border border-gray-700 shadow-2xl relative overflow-hidden group">

                        {hasImages ? (
                            <>
                                <motion.img
                                    key={currentImageIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    src={project.images[currentImageIndex]}
                                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                    className="w-full h-full object-cover"
                                />

                                {project.images.length > 1 && (
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    >
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                )}

                                {project.images.length > 1 && (
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    >
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                )}

                                {project.images.length > 1 && (
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {project.images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`w-3 h-3 rounded-full transition-colors ${
                                                    currentImageIndex === index ? 'bg-purple-500' : 'bg-gray-400/50 hover:bg-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="flex flex-col items-center text-gray-600">
                                <svg className="w-24 h-24 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>Screenshots coming soon</span>
                            </div>
                        )}
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Technologies Used</h3>
                            <div className="flex flex-wrap">
                                {project.techStack.map((tag) => (
                                    <span key={tag} className="inline-block bg-gray-700 text-gray-300 text-xs font-medium px-4 py-1.5 rounded-full mr-3 mb-3 border border-gray-600">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {project.keyFeatures && (
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6">Key Highlights</h3>
                                <ul className="list-disc list-outside pl-5 space-y-4 text-gray-300 text-lg leading-relaxed marker:text-purple-500">
                                    {project.keyFeatures.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-20 max-w-5xl mx-auto bg-gray-800 rounded-3xl p-8 lg:p-12 border border-gray-700 shadow-2xl">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-8 text-center">Project Overview</h2>
                    <p className="text-lg lg:text-xl text-gray-300 font-light leading-relaxed whitespace-pre-line">
                        {project.longDesc}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetailsPage;