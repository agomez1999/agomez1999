// Icons
import { FaLinkedin, FaGithub} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

import Image from "next/image";

// Components
import Experience from "../components/Experience";
import Stack from "../components/Stack";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-8 sm:px-40">
      <main className="flex flex-col gap-12">
        <div className="flex flex-col w-full items-center pt-8 sm:py-8 gap-8">
          <div className="flex flex-col items-center">
            <Image src="/images/foto-carnet.webp" alt="Hero foto" width={150} height={150} className="rounded-full object-cover" />
            <h1 className="text-3xl font-bold">Àlex Gómez G.</h1>
            <h2 className="text-2xl font-semibold text-amber-600">Programador Full-Stack</h2>
          </div>
          <div className="flex items-center justify-center gap-8">
            <a href="https://www.linkedin.com/in/%C3%A0lex-g%C3%B3mez-gran-265815373/" target="_blank" rel="noopener noreferrer" className="shadow-lg hover:scale-110 hover:text-[#0077B5] bg-[#E6E6E6] transition-all duration-400 flex items-center gap-1 border py-0.5 px-2 rounded-full">
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/agomez1999" target="_blank" rel="noopener noreferrer" className="shadow-lg hover:scale-110 bg-[#E6E6E6] transition-all duration-400 flex items-center gap-1 border py-0.5 px-2 rounded-full">
              <FaGithub size={20} />
              <span>Github</span>
            </a>
            <a href="mailto:agomez99.dev@gmail.com" className="shadow-lg hover:scale-110 hover:text-[#6A6262] bg-[#E6E6E6] transition-all duration-400 flex items-center gap-1 border py-0.5 px-2 rounded-full">
              <MdEmail size={20} />
              <span>Email</span>
            </a>
          </div>

          {/* Download CV */}
          <a href="/cv.pdf" download="CV_Agomez.pdf" className="shadow-lg hover:scale-110 bg-[#E6E6E6] transition-all duration-400 flex items-center gap-1 border py-0.5 px-2 rounded-full">
            <IoMdDownload />
            <span>Descargar CV</span>
          </a>
        </div>

        {/* Experience */}
        <Experience />

        {/* Stack */}
        <Stack />

        {/* Projects */}
        <Projects />
      </main>
    </div>
  );
}
