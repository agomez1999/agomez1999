import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-6 px-2 py-4 bg-amber-400">
      <a href="https://www.linkedin.com/in/%C3%A0lex-g%C3%B3mez-gran-265815373/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
        <FaLinkedin size={20} />
      </a>
      <a href="https://github.com/agomez1999" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
        <FaGithub size={20} />
      </a>
      <a href="mailto:agomez99.dev@gmail.com" className="hover:scale-110 transition-transform">
        <MdEmail size={20} />
      </a>
    </footer>
  );
}
