import { projects } from '../utils/projects'
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Proyectos</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}