"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { projectData, projectMeta } from "@/utils/projectData";
import { useLanguage } from "@/i18n/useLanguage";

export default function ProjectsSection() {
  const { lang, t } = useLanguage();

  // Merge los datos traducibles con los metadatos invariantes
  const projects = projectData[lang].map((p) => ({
    ...projectMeta.find((m) => m.id === p.id),
    ...p,
  }));

  return (
    <section id="proyectos" className="py-20 sm:py-28">
      <AnimatedSection>
        <SectionTitle number="04" title={t.projects.title} />
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 0.1}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.2} className="mt-10 text-center">
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          {t.projects.comingSoon} ·{" "}
          <a
            href="https://github.com/agomez1999"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            {t.projects.viewGitHub}
          </a>
        </p>
      </AnimatedSection>
    </section>
  );
}
