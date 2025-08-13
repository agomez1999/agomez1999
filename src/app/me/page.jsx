import Image from "next/image";

export default function Me() {
  return (
    <main className="min-h-screen p-4 sm:p-8 sm:px-40 flex justify-center items-center">
      <div className="flex flex-col sm:flex-row gap-6 sm:bg-white sm:p-4 sm:rounded sm:shadow-xl">
        <div className="flex-shrink-0 items-center justify-center flex sm:items-start sm:justify-start">
          <Image alt="Àlex Gómez" src="/images/foto-carnet-completa.webp" width={220} height={350} className="rounded mix-blend-multiply" />
        </div>
        <div className="text-justify leading-relaxed space-y-3">
          <h1 className="text-2xl font-bold">Àlex Gómez Gran</h1>
          <h2 className="text-lg font-semibold text-gray-600">
            Técnico en Desarrollo de Aplicaciones Web · Programador Full-Stack
          </h2>
          <p>
            Soy desarrollador <strong>full stack</strong> con experiencia profesional en proyectos de frontend y backend, utilizando tecnologías como <strong>JavaScript</strong>, <strong>PHP</strong> y <strong>SQL</strong>.
          </p>
          <p>
            He trabajado con frameworks modernos como <strong>Laravel</strong>, <strong>CodeIgniter</strong>, <strong>Vue.js</strong>, <strong>React</strong>, <strong>Next.js</strong> y <strong>React Native</strong>.
          </p>
          <p>
            Me considero una persona <strong>adaptable</strong>, <strong>resolutiva</strong> y con ganas de seguir <strong>creciendo como desarrollador</strong>, aportando <strong>soluciones eficientes</strong> y aprendiendo de cada nuevo reto técnico. Como la programación me <strong>apasiona</strong>, siempre busco seguir <strong>aprendiendo</strong> y perfeccionando mis conocimientos, explorando nuevas tecnologías y mejores prácticas para aplicarlas en mis proyectos.
          </p>

          <p>
            Hablo <strong>catalán</strong> y <strong>español</strong> a nivel nativo, y tengo un nivel <strong>intermedio-alto de inglés</strong>, capaz de mantener conversaciones fluidas en entornos profesionales.
          </p>

          <div>
            <h3 className="text-lg font-semibold mt-4">Formación</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Grado Medio</strong> - Sistemas Microinformáticos y Redes (SMX)</li>
              <li><strong>Grado Superior</strong> - Desarrollo de Aplicaciones Web (DAW)</li>
              <li>Aprendizaje autodidacta en <strong>React</strong>, <strong>Next.js</strong>, <strong>Laravel</strong> y otras tecnologías modernas</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
