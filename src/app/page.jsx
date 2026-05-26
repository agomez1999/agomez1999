import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import StackSection from "@/components/sections/StackSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* Secciones con container centrado */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <AboutSection />
        <ExperienceSection />
        <StackSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
