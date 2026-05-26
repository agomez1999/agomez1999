"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/useLanguage";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="text-center flex flex-col items-center gap-6">
        <p
          className="text-9xl font-bold select-none pointer-events-none"
          style={{
            color: "var(--accent)",
            fontFamily: "var(--font-jetbrains)",
            opacity: 0.08,
            lineHeight: 1,
          }}
        >
          404
        </p>

        <div className="flex flex-col gap-2 -mt-8">
          <h1
            className="text-2xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            {t.notFound.title}
          </h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            {t.notFound.body}
          </p>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 text-sm px-5 py-2.5 rounded transition-all duration-200 hover:scale-105"
          style={{
            border: "1px solid var(--border-accent)",
            color: "var(--accent)",
          }}
        >
          {t.notFound.back}
        </Link>
      </div>
    </main>
  );
}
