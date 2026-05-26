"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { useLanguage } from "@/i18n/useLanguage";
import LanguageSelector from "@/components/ui/LanguageSelector";

// Los href (IDs de sección) son estructurales y no cambian con el idioma
const NAV_HREFS = ["#about", "#experiencia", "#stack", "#proyectos", "#contacto"];

export default function NavBar() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isOpen, setIsOpen]                 = useState(false);
  const [activeSection, setActiveSection]   = useState("");
  const { t } = useLanguage();

  const navLinks = [
    { href: "#about",       label: t.nav.about },
    { href: "#experiencia", label: t.nav.experience },
    { href: "#stack",       label: t.nav.stack },
    { href: "#proyectos",   label: t.nav.projects },
    { href: "#contacto",    label: t.nav.contact },
  ];

  // Cambia el fondo al hacer scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer para el link activo (usa los IDs fijos, sin traducciones)
  useEffect(() => {
    const sectionIds = NAV_HREFS.map((l) => l.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b shadow-xl" : ""
      }`}
      style={
        isScrolled
          ? {
              background: "rgba(13,15,20,0.92)",
              backdropFilter: "blur(12px)",
              borderColor: "var(--border)",
            }
          : {}
      }
    >
      <nav className="max-w-5xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-xl font-bold tracking-widest transition-opacity hover:opacity-70"
          style={{ color: "var(--accent)", fontFamily: "var(--font-jetbrains)" }}
        >
          AG
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className="text-sm relative group transition-colors duration-200"
                style={{ color: isActive ? "var(--accent)" : "var(--text-secondary)" }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                {link.label}
                {/* underline indicator */}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-200"
                  style={{
                    background: "var(--accent)",
                    width: isActive ? "100%" : "0%",
                  }}
                />
              </a>
            );
          })}

          {/* Selector de idioma */}
          <LanguageSelector />

          <a
            href="/cv.pdf"
            download="CV_Agomez.pdf"
            className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded transition-colors duration-200"
            style={{
              border: "1px solid var(--accent)",
              color: "var(--accent)",
              fontFamily: "var(--font-jetbrains)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-dim)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <IoMdDownload size={14} />
            {t.nav.cv}
          </a>
        </div>

        {/* Hamburger mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden transition-colors duration-200"
          style={{ color: "var(--text-primary)" }}
          aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(0,0,0,0.6)" }}
            />

            {/* Panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 h-full w-64 z-50 flex flex-col p-8 gap-8 md:hidden"
              style={{ background: "var(--bg-secondary)" }}
            >
              <button
                onClick={closeMenu}
                className="self-end"
                style={{ color: "var(--text-secondary)" }}
                aria-label={t.nav.closeMenu}
              >
                <FaTimes size={20} />
              </button>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-lg transition-colors duration-200"
                    style={{ color: "var(--text-primary)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="/cv.pdf"
                  download="CV_Agomez.pdf"
                  onClick={closeMenu}
                  className="flex items-center gap-2 px-4 py-2 rounded mt-2 transition-colors duration-200"
                  style={{
                    border: "1px solid var(--accent)",
                    color: "var(--accent)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-dim)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <IoMdDownload size={16} />
                  {t.nav.downloadCV}
                </a>

                {/* Selector de idioma en el drawer móvil */}
                <div className="pt-2">
                  <LanguageSelector />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
