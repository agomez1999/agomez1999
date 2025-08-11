import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 px-4 py-4 bg-amber-600 text-[#E6E6E6]">
      <span className="text-sm">Àlex Gómez · Full-Stack Developer</span>
      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/%C3%A0lex-g%C3%B3mez-gran-265815373/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/agomez1999" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <FaGithub size={20} />
        </a>
        <a href="mailto:agomez99.dev@gmail.com" className="hover:scale-110 transition-transform">
          <MdEmail size={20} />
        </a>
      </div>
      <span className="text-xs opacity-80">Construyendo experiencias digitales con pasión</span>
    </footer>
  );
}
