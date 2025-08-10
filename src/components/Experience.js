export default function Experience() {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Experiencia profesional</h2>

        <div className="flex flex-col gap-4">
          <div className="relative bg-white shadow-xl p-2 pt-4 rounded">
            <span className="absolute -top-3 -left-2 rotate-1 bg-yellow-400 px-2">Abr 2022 - Feb 2024</span>
            <span className="text-amber-600 font-semibold">ApliEmporda:</span><span> Programador júnior. Participación en el desarrollo y mantenimiento de aplicaciones web utilizando PHP, JavaScript puro, React Native y Laravel.</span>
          </div>
          <div className="relative bg-white shadow-xl p-2 pt-4 rounded">
            <span className="absolute -top-3 -left-2 -rotate-1 px-2 bg-yellow-400">Feb 2024 - Jul 2025</span>
            <span className="text-amber-600 font-semibold">Gesthip:</span><span> Programador júnior. Desarrollo de una aplicación web con Vue 2 y CodeIgniter como backend.</span>
          </div>
        </div>
      </div>
    </section>
  );
}