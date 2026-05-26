"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/i18n/useLanguage";

export default function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    { value: "4+",  label: t.about.stats.experience },
    { value: "3",   label: t.about.stats.companies },
    { value: "12+", label: t.about.stats.tech },
  ];

  return (
    <section id="about" className="py-20 sm:py-28">
      <AnimatedSection>
        <SectionTitle number="01" title={t.about.title} />
      </AnimatedSection>

      <div className="flex flex-col gap-12">
        {/* Bio */}
        <AnimatedSection delay={0.1}>
          <div
            className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>
              {t.about.bio1_prefix}{" "}
              <span style={{ color: "var(--text-primary)" }} className="font-medium">
                {t.about.bio1_emphasis}
              </span>
              {t.about.bio1_suffix}
            </p>
            <p>
              {t.about.bio2_prefix}{" "}
              <span style={{ color: "var(--text-primary)" }} className="font-medium">
                {t.about.bio2_company}
              </span>
              {t.about.bio2_middle}{" "}
              <span style={{ color: "var(--accent)" }}>{t.about.bio2_accent}</span>
              {t.about.bio2_suffix}
            </p>
            <p>
              {t.about.bio3_prefix}{" "}
              <span style={{ color: "var(--accent)" }}>
                {t.about.bio3_accent}
              </span>
            </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span
                  className="text-3xl font-bold"
                  style={{
                    color: "var(--accent)",
                    fontFamily: "var(--font-jetbrains)",
                  }}
                >
                  {value}
                </span>
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
