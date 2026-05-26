"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/utils/projects";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 sm:py-28">
      <AnimatedSection>
        <SectionTitle number="04" title="Proyectos" />
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
          Más proyectos próximamente ·{" "}
          <a
            href="https://github.com/agomez1999"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            ver GitHub
          </a>
        </p>
      </AnimatedSection>
    </section>
  );
}
