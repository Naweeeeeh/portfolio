import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="bg-gray-900 min-h-screen font-sans selection:bg-purple-500 selection:text-white">
            <Header />
            <main>{children}</main>
            <footer className="py-8 text-center text-gray-500 border-t border-gray-800 mt-20">
                <p>© {new Date().getFullYear()} Noeh. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;