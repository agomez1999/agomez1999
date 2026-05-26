"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { MdEmail, MdContentCopy, MdCheck } from "react-icons/md";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/i18n/useLanguage";

const EMAIL = "agomez99.dev@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback: no-op */
    }
  };

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <AnimatedSection>
        <SectionTitle number="05" title={t.contact.title} />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div
          className="rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center gap-8"
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
          }}
        >
          {/* Headline */}
          <div className="flex flex-col gap-3 max-w-lg">
            <h3
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {t.contact.headline}
            </h3>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {t.contact.body}
            </p>
          </div>

          {/* Email copiable */}
          <motion.button
            onClick={copyEmail}
            className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-200"
            style={{
              background: "var(--accent-dim)",
              border: "1px solid var(--border-accent)",
              color: "var(--accent)",
              fontFamily: "var(--font-jetbrains)",
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label={copied ? t.contact.copied : t.contact.copyLabel}
          >
            <MdEmail size={18} />
            <span className="text-sm">{EMAIL}</span>
            <motion.span
              key={copied ? "check" : "copy"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15 }}
            >
              {copied ? (
                <MdCheck size={16} />
              ) : (
                <MdContentCopy size={14} style={{ opacity: 0.6 }} />
              )}
            </motion.span>
          </motion.button>

          {copied && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs -mt-4"
              style={{ color: "var(--accent)", fontFamily: "var(--font-jetbrains)" }}
            >
              {t.contact.copiedMsg}
            </motion.p>
          )}

          {/* Social links */}
          <div className="flex gap-6">
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
                href: "https://t.me/stickman170",
                icon: <FaTelegram size={22} />,
                label: "Telegram",
              },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-all duration-200 hover:scale-110"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
