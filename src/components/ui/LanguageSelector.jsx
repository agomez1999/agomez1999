"use client";

import { useLanguage } from "@/i18n/useLanguage";

const LANGS = [
  { code: "es", label: "ES" },
  { code: "ca", label: "CA" },
  { code: "en", label: "EN" },
];

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="flex items-center gap-1 rounded-md p-0.5"
      style={{
        background: "var(--bg-tertiary)",
        border: "1px solid var(--border)",
      }}
    >
      {LANGS.map(({ code, label }) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            disabled={isActive}
            aria-pressed={isActive}
            aria-label={`Idioma: ${label}`}
            className="rounded px-2 py-1 transition-all duration-200"
            style={{
              fontFamily: "var(--font-jetbrains)",
              fontSize: "0.7rem",
              fontWeight: 500,
              background: isActive ? "var(--accent-dim)" : "transparent",
              color:      isActive ? "var(--accent)"     : "var(--text-muted)",
              border:     isActive ? "1px solid var(--border-accent)" : "1px solid transparent",
              cursor:     isActive ? "default" : "pointer",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
