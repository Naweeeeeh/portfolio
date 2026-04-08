import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsGrid from './components/ProjectsGrid';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';

function App() {
    return (
        <Router>
            <Layout>
                <div className="pt-28 pb-16 min-h-[70vh]">
                    <Routes>
                        <Route path="/" element={<HeroSection />} />
                        <Route path="/skills" element={<SkillsSection />} />
                        <Route path="/projects" element={<ProjectsGrid />} />
                        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
                        <Route path="/certification" element={<CertificationsSection />} />
                        <Route path="/contact" element={<ContactSection />} />
                    </Routes>
                </div>
            </Layout>
        </Router>
    );
}

export default App;