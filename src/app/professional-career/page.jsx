import { experiences } from '../../utils/experiences'

export default function ProfessionalCareer() {
  return (
    <main className="flex flex-col gap-6 min-h-[calc(100vh-10rem)] p-4 sm:p-8 sm:px-40">
      <section className="flex flex-col gap-4">
        <h1 className="font-semibold text-2xl">Mi trayectoria profesional</h1>
        <p>Desde 2022 me dedico profesionalmente a la programación. Durante este tiempo, he trabajado en varias empresas adquiriendo experiencia en diversas tecnologías y frameworks, principalmente en desarrollo frontend y backend, aunque también he desarrollado alguna aplicación móvil.</p>
      </section>
      
      <section className="flex">
        <div className="ml-4">
        {experiences.map((experience, index) => (
          <div key={index} className="relative mb-10 ml-6">
            <span className="absolute -left-5 top-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></span>
            <span className="text-sm">{experience.start} - {experience.end}</span>

            <h3 className="font-semibold text-lg">{experience.company} - {experience.role}</h3>
            <div dangerouslySetInnerHTML={{ __html: experience.description }} className="flex flex-col gap-2 text-[14px]" />
          </div>
        ))}
      </div>
      </section>
    </main>
  );
}
