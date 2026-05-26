"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { techIcons } from "@/utils/techIcons";
import { useLanguage } from "@/i18n/useLanguage";

export default function ProjectCard({ project }) {
  const { t } = useLanguage();

  return (
    <motion.div
      className="flex flex-col rounded-xl overflow-hidden h-full"
      style={{
        background: "var(--bg-secondary)",
        border: "1px solid var(--border)",
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 12px 40px rgba(100,255,218,0.08)",
        borderColor: "var(--border-accent)",
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Imagen o gradiente placeholder */}
      <div className="relative w-full h-44 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${t.projects.imageAlt} ${project.name}`}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)",
            }}
          >
            <span
              className="text-5xl font-bold opacity-20 select-none"
              style={{
                color: "var(--accent)",
                fontFamily: "var(--font-jetbrains)",
              }}
            >
              {"</>"}
            </span>
          </div>
        )}
        {/* Overlay sutil */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(13,15,20,0.6) 0%, transparent 60%)",
          }}
        />
        {/* Año badge */}
        <span
          className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full"
          style={{
            background: "rgba(13,15,20,0.8)",
            color: "var(--text-muted)",
            fontFamily: "var(--font-jetbrains)",
            border: "1px solid var(--border)",
          }}
        >
          {project.year}
        </span>
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3
          className="text-lg font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          {project.name}
        </h3>

        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
              style={{
                background: "var(--bg-tertiary)",
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              {techIcons[tech]}
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm transition-colors duration-200"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            <FaGithub size={16} />
            GitHub
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              <FaExternalLinkAlt size={13} />
              {t.projects.viewProject}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
