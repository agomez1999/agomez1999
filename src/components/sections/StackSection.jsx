"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaVuejs, FaLaravel, FaPhp, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    items: [
      { icon: <IoLogoJavascript className="text-yellow-400" size={26} />, name: "JavaScript",  badge: "Principal" },
      { icon: <FaReact className="text-blue-400" size={26} />,            name: "React",        badge: "Principal" },
      { icon: <RiNextjsFill size={26} />,                                  name: "Next.js",      badge: "Principal" },
      { icon: <FaVuejs className="text-green-400" size={26} />,            name: "Vue 3",        badge: "Profesional" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: <FaPhp className="text-[#777BB4]" size={26} />,              name: "PHP",          badge: "Principal" },
      { icon: <FaLaravel className="text-red-500" size={26} />,             name: "Laravel",      badge: "Principal" },
      { icon: <FaLaravel className="text-orange-400" size={26} />,          name: "Lumen",        badge: "Profesional" },
      { icon: <SiMongodb className="text-green-500" size={26} />,           name: "MongoDB",      badge: "Profesional" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { icon: <RiTailwindCssFill className="text-cyan-400" size={26} />,   name: "Tailwind CSS", badge: "Principal" },
      { icon: <FaGitAlt className="text-[#F05032]" size={26} />,            name: "Git",          badge: "Principal" },
      { icon: <FaDocker className="text-blue-400" size={26} />,             name: "Docker",       badge: "Profesional" },
      { icon: <FaGithub size={26} />,                                        name: "GitHub",       badge: "Principal" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden:   { opacity: 0, scale: 0.9, y: 10 },
  visible:  { opacity: 1, scale: 1,   y: 0,  transition: { duration: 0.35, ease: "easeOut" } },
};

export default function StackSection() {
  return (
    <section id="stack" className="py-20 sm:py-28">
      <AnimatedSection>
        <SectionTitle number="03" title="Stack" />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat, ci) => (
          <AnimatedSection key={cat.title} delay={ci * 0.1}>
            <div
              className="rounded-xl p-5 h-full"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Título de categoría */}
              <p
                className="text-xs font-semibold mb-5 tracking-widest uppercase"
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-jetbrains)",
                }}
              >
                {cat.title}
              </p>

              {/* Items con stagger */}
              <motion.div
                className="flex flex-col gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {cat.items.map(({ icon, name, badge }) => (
                  <motion.div
                    key={name}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between gap-3 group cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="p-1.5 rounded-md transition-colors duration-200"
                        style={{ background: "var(--bg-tertiary)" }}
                      >
                        {icon}
                      </div>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {name}
                      </span>
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full shrink-0"
                      style={
                        badge === "Principal"
                          ? {
                              background: "var(--accent-dim)",
                              color: "var(--accent)",
                              border: "1px solid var(--border-accent)",
                            }
                          : {
                              background: "var(--bg-tertiary)",
                              color: "var(--text-muted)",
                            }
                      }
                    >
                      {badge}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
