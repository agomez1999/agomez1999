// Icons
import { FaGithub} from "react-icons/fa";
import { techIcons } from "../utils/techIcons";

import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col shadow-xl bg-white p-2 rounded gap-4">
      <div className="flex items-center justify-center">
        <Image src="/images/projects/TaskApp/image1.webp" alt="Portada" width={200} height={300} />
      </div>
      <span className="text-lg font-semibold">{project.name}</span>
      <p>{project.description}</p>

      <div className="flex flex-wrap items-center gap-2">
        {project.techStack.map((stack, index) => (
          <div key={index} className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 shadow-sm">
            {techIcons[stack]}
            <span className="text-sm">{stack}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="shadow-lg hover:scale-110 bg-[#E6E6E6] transition-all duration-400 flex items-center gap-1 border py-0.5 px-2 rounded-full">
          <FaGithub size={20} />
          <span>Ver en Github</span>
        </a>
      </div>
    </div>
  );
}