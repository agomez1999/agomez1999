// Icons
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaVuejs, FaLaravel, FaPhp, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiMariadbfoundation, SiPostman } from "react-icons/si";

export default function Stack() {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Habilidades</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Frontend */}
          <div className="bg-white shadow-xl px-2 py-1 rounded flex flex-col gap-6">
            <span className="font-semibold text-lg">Frontend</span>

            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex flex-col items-center hover:scale-110 transition-all duration-400">
                <IoLogoJavascript title="JavaScript" className="text-yellow-500" size={50} />
                <span>JavaScript</span>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition-all duration-400">
                <FaReact title="React" className="text-blue-600" size={50} />
                <span>React</span>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition-all duration-400">
                <RiNextjsFill title="Next.js" size={50} />
                <span>Next.js</span>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition-all duration-400">
                <FaVuejs title="Vue" className="text-green-700" size={50} />
                <span>Vue</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white shadow-xl px-2 py-1 rounded flex flex-col gap-6">
            <span className="font-semibold text-lg">Backend</span>

            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex flex-col items-center hover:scale-110 transition-all duration-400">
                <FaPhp title="PHP" className="text-[#777BB4]" size={50} />
                <span>PHP</span>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition-all duration-400">
                <FaLaravel title="Laravel" className="text-red-700" size={50} />
                <span>Laravel</span>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition-all duration-400">
                <GrMysql title="MySQL" className="text-[#00758F]" size={50} />
                <span>MySQL</span>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition-all duration-400">
                <SiMariadbfoundation title="MariaDB" className="text-[#003545]" size={50} />
                <span>MariaDB</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white shadow-xl px-2 py-1 rounded flex flex-col gap-6">
            <span className="font-semibold text-lg">Herramientas</span>

            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex flex-col items-center hover:scale-110 transition-all duration-400">
                <RiTailwindCssFill title="Tailwind CSS" className="text-blue-500" size={50} />
                <span>Tailwind CSS</span>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition-all duration-400">
                <FaGitAlt title="Git" className="text-[#F05032]" size={50} />
                <span>Git</span>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition-all duration-400">
                <FaGithub title="Github" className="text-[#181717]" size={50} />
                <span>Github</span>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition-all duration-400">
                <SiPostman title="Postman" className="text-[#FF6C37]" size={50} />
                <span>Postman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}