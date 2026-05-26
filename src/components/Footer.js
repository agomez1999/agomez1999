"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useLanguage } from "@/i18n/useLanguage";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="flex flex-col items-center gap-4 px-6 py-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/%C3%A0lex-g%C3%B3mez-gran-265815373/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.footer.ariaLinkedIn}
          className="transition-all duration-200 hover:scale-110"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/agomez1999"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.footer.ariaGitHub}
          className="transition-all duration-200 hover:scale-110"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <FaGithub size={20} />
        </a>
        <a
          href="mailto:agomez99.dev@gmail.com"
          aria-label={t.footer.ariaEmail}
          className="transition-all duration-200 hover:scale-110"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <MdEmail size={20} />
        </a>
      </div>

      <p
        className="text-xs"
        style={{ fontFamily: "var(--font-jetbrains)", color: "var(--text-muted)" }}
      >
        Àlex Gómez · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
