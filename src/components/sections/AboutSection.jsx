import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { value: "4+",  label: "Años de experiencia" },
  { value: "3",   label: "Empresas" },
  { value: "12+", label: "Tecnologías" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <AnimatedSection>
        <SectionTitle number="01" title="Sobre mí" />
      </AnimatedSection>

      <div className="flex flex-col gap-12">
        {/* Bio */}
        <AnimatedSection delay={0.1}>
          <div
            className="flex flex-col gap-5 text-base leading-relaxed max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>
              Empecé a programar profesionalmente en 2022 como el{" "}
              <span style={{ color: "var(--text-primary)" }} className="font-medium">
                primer desarrollador web de ApliEmporda
              </span>
              , donde pasé de mantener sitios estáticos a liderar el
              desarrollo de una aplicación Laravel con su propia app React
              Native.
            </p>
            <p>
              Actualmente en{" "}
              <span style={{ color: "var(--text-primary)" }} className="font-medium">
                Avantiam
              </span>
              , construyendo una aplicación full-stack con{" "}
              <span style={{ color: "var(--accent)" }}>arquitectura hexagonal</span>
              {" "}usando Laravel, Lumen, Vue 3, MongoDB y Docker. Me muevo
              cómodo entre frontend y backend, y disfruto especialmente del
              diseño de arquitecturas limpias y escalables.
            </p>
            <p>
              Mi stack personal:{" "}
              <span style={{ color: "var(--accent)" }}>
                Next.js, React y Tailwind.
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
