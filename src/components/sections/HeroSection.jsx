"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 20 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const photoVariants = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        paddingTop: "5rem",
        background: `
          radial-gradient(ellipse at 10% 20%, rgba(100,255,218,0.06) 0%, transparent 55%),
          var(--bg-primary)
        `,
      }}
    >
      {/* Dot grid decorativo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(100,255,218,0.1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 w-full py-12 sm:py-20">
        <div className="flex flex-col-reverse sm:flex-row items-center gap-12 sm:gap-16">
          {/* Texto */}
          <motion.div
            className="flex flex-col gap-6 flex-1 text-center sm:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Saludo */}
            <motion.p
              variants={itemVariants}
              className="text-sm font-mono"
              style={{ color: "var(--accent)", fontFamily: "var(--font-jetbrains)" }}
            >
              Hola, soy
            </motion.p>

            {/* Nombre */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Àlex Gómez Gran.
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
              style={{ color: "var(--text-secondary)" }}
            >
              Construyo aplicaciones web{" "}
              <span style={{ color: "var(--accent)" }}>
                que funcionan de verdad.
              </span>
            </motion.h2>

            {/* Subtítulo */}
            <motion.p
              variants={itemVariants}
              className="text-base max-w-lg leading-relaxed mx-auto sm:mx-0"
              style={{ color: "var(--text-secondary)" }}
            >
              Full-Stack Developer especializado en JavaScript y PHP. 3+ años
              construyendo productos en producción.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center sm:justify-start"
            >
              <a
                href="#proyectos"
                className="px-6 py-2.5 rounded text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  background: "var(--accent)",
                  color: "var(--bg-primary)",
                }}
              >
                Ver proyectos
              </a>
              <a
                href="/cv.pdf"
                download="CV_Agomez.pdf"
                className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  border: "1px solid var(--border-accent)",
                  color: "var(--accent)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-dim)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <IoMdDownload size={16} />
                Descargar CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-5 justify-center sm:justify-start"
            >
              {[
                {
                  href: "https://www.linkedin.com/in/%C3%A0lex-g%C3%B3mez-gran-265815373/",
                  icon: <FaLinkedin size={22} />,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/agomez1999",
                  icon: <FaGithub size={22} />,
                  label: "GitHub",
                },
                {
                  href: "mailto:agomez99.dev@gmail.com",
                  icon: <MdEmail size={22} />,
                  label: "Email",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-all duration-200 hover:scale-110"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Foto */}
          <motion.div
            variants={photoVariants}
            initial="hidden"
            animate="visible"
            className="relative shrink-0"
          >
            <div
              className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 0 40px rgba(100,255,218,0.15), 0 0 80px rgba(100,255,218,0.05)",
                border: "2px solid var(--border-accent)",
              }}
            >
              <Image
                src="/images/foto-carnet-completa.webp"
                alt="Àlex Gómez, Full-Stack Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Glow decorativo detrás de la foto */}
            <div
              className="absolute inset-0 -z-10 rounded-2xl blur-2xl opacity-20"
              style={{ background: "var(--accent)", transform: "scale(1.05)" }}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1"
          style={{ color: "var(--text-muted)" }}
        >
          <span className="text-xs" style={{ fontFamily: "var(--font-jetbrains)" }}>
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, var(--text-muted), transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
