import Image from "next/image";

export default function Me() {
  return (
    <section className="min-h-[calc(100vh-5.75rem)] p-4 sm:p-8 sm:px-40 flex justify-center items-center">
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start sm:bg-white sm:p-4 sm:rounded sm:shadow-xl">
        <Image alt="Àlex Gómez" src="/images/foto-carnet-completa.webp" width={200} height={300} className="rounded mix-blend-multiply" />
        <div className="text-justify leading-relaxed space-y-3">
          <h1 className="text-2xl font-bold">Àlex Gómez Gran</h1>
          <h2 className="text-lg font-semibold text-gray-600">
            Técnico en Desarrollo de Aplicaciones Web · Programador Full-Stack
          </h2>
          <p>
            Soy desarrollador <strong>full stack</strong> con experiencia
            profesional en proyectos de frontend y backend, utilizando
            tecnologías como <strong>JavaScript</strong>, <strong>PHP</strong> y{" "}
            <strong>SQL</strong>.
          </p>
          <p>
            He trabajado con frameworks modernos como{" "}
            <strong>Laravel</strong>, <strong>CodeIgniter</strong>,{" "}
            <strong>Vue.js</strong>, <strong>React</strong>,{" "}
            <strong>Next.js</strong> y <strong>React Native</strong>.
          </p>
          <p>
            Me considero una persona <strong>adaptable</strong>,{" "}
            <strong>resolutiva</strong> y con ganas de seguir creciendo como
            desarrollador, aportando soluciones eficientes y aprendiendo de
            cada nuevo reto técnico.
          </p>

          <p>
            Hablo <strong>catalán</strong> y <strong>español</strong> a nivel nativo, y tengo un nivel <strong>intermedio-alto de inglés</strong>, capaz de mantener conversaciones fluidas en entornos profesionales.
          </p>
        </div>
      </div>
    </section>
  );
}
