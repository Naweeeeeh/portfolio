import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsGrid from '../components/ProjectsGrid';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
    return (
        <div className="flex flex-col gap-24 pt-28 pb-16">
            <section id="about" className="scroll-mt-28">
                <HeroSection />
            </section>

            <section id="skills" className="scroll-mt-28">
                <SkillsSection />
            </section>

            <section id="projects" className="scroll-mt-28">
                <ProjectsGrid />
            </section>

            <section id="certification" className="scroll-mt-28">
                <CertificationsSection />
            </section>

            <section id="contact" className="scroll-mt-28">
                <ContactSection />
            </section>
        </div>
    );
};

export default HomePage;