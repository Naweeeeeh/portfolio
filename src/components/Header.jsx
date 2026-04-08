import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
    const navLinks = [
        { name: 'About', path: '/' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Certification', path: '/certification' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800 shadow-lg">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <Link to="/" className="text-3xl font-bold text-white flex items-center gap-2 group">
                    <span className="text-purple-500 group-hover:rotate-12 transition-transform duration-300"></span>
                    Home
                </Link>

                <div className="flex items-center gap-2">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className="relative px-5 py-2 rounded-full outline-none"
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavIndicator"
                                            className="absolute inset-0 bg-gray-800 border border-gray-700 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30
                                            }}
                                        />
                                    )}

                                    <span className={`relative z-10 text-lg font-medium transition-colors duration-200 ${
                                        isActive ? 'text-purple-400' : 'text-gray-400 hover:text-white'
                                    }`}>
                                        {link.name}
                                    </span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;