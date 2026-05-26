"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { experienceData } from "@/utils/experienceData";
import { useLanguage } from "@/i18n/useLanguage";

export default function ExperienceSection() {
  const { lang, t } = useLanguage();
  const experiences = experienceData[lang];

  return (
    <section id="experiencia" className="py-20 sm:py-28">
      <AnimatedSection>
        <SectionTitle number="02" title={t.experience.title} />
      </AnimatedSection>

      <div className="relative">
        {/* Línea animada del timeline */}
        <motion.div
          className="absolute left-0 top-0 w-px"
          style={{
            background: "linear-gradient(to bottom, var(--accent), transparent)",
            originY: 0,
          }}
          initial={{ scaleY: 0, height: "100%" }}
          whileInView={{ scaleY: 1, height: "100%" }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />

        <div className="flex flex-col gap-12 pl-8">
          {experiences.map((exp, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.15}
              direction="left"
              className="relative"
            >
              {/* Dot en la línea */}
              <div
                className="absolute -left-10 top-1.5 w-3 h-3 rounded-full ring-2"
                style={{
                  background: "var(--bg-primary)",
                  borderColor: "var(--accent)",
                  ringColor: "var(--bg-primary)",
                  boxShadow: "0 0 8px var(--accent)",
                  border: "2px solid var(--accent)",
                }}
              />

              {/* Fecha */}
              <p
                className="text-xs mb-1"
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  color: "var(--text-muted)",
                }}
              >
                {exp.start} — {exp.end}
              </p>

              {/* Empresa */}
              <h3
                className="text-xl font-bold mb-0.5"
                style={{ color: "var(--text-primary)" }}
              >
                {exp.company}
              </h3>

              {/* Rol */}
              <p
                className="text-sm font-medium mb-4"
                style={{ color: "var(--accent)" }}
              >
                {exp.role}
              </p>

              {/* Bullets */}
              <ul className="flex flex-col gap-2 mb-5">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="shrink-0 mt-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      ›
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "var(--accent-dim)",
                      color: "var(--accent)",
                      border: "1px solid var(--border-accent)",
                      fontFamily: "var(--font-jetbrains)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Link al CV */}
      <AnimatedSection delay={0.3} className="mt-12 pl-8">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm transition-colors duration-200 group"
          style={{ color: "var(--text-secondary)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
        >
          {t.experience.viewCV}
          <span
            className="transition-transform duration-200 group-hover:translate-x-1"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            →
          </span>
        </a>
      </AnimatedSection>
    </section>
  );
}
