import { FaReact, FaLaravel, FaPhp, FaVuejs, FaGitAlt, FaDocker } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiFramer, SiCodeigniter } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const techIcons = {
  React:          <FaReact className="text-blue-400" size={18} />,
  "React Native": <FaReact className="text-blue-400" size={18} />,
  Laravel:        <FaLaravel className="text-red-500" size={18} />,
  Lumen:          <FaLaravel className="text-orange-400" size={18} />,
  "Tailwind CSS": <RiTailwindCssFill className="text-cyan-400" size={18} />,
  Tailwind:       <RiTailwindCssFill className="text-cyan-400" size={18} />,
  MySQL:          <GrMysql className="text-[#00758F]" size={18} />,
  MySQLi:         <GrMysql className="text-[#00758F]" size={18} />,
  PHP:            <FaPhp className="text-[#777BB4]" size={18} />,
  "Next.js":      <RiNextjsFill size={18} />,
  Vue:            <FaVuejs className="text-green-500" size={18} />,
  "Vue 2":        <FaVuejs className="text-green-500" size={18} />,
  "Vue 3":        <FaVuejs className="text-green-400" size={18} />,
  JavaScript:     <IoLogoJavascript className="text-yellow-400" size={18} />,
  Git:            <FaGitAlt className="text-[#F05032]" size={18} />,
  Docker:         <FaDocker className="text-blue-400" size={18} />,
  MongoDB:        <SiMongodb className="text-green-500" size={18} />,
  CodeIgniter:    <SiCodeigniter className="text-red-600" size={18} />,
  "Framer Motion": <SiFramer className="text-purple-400" size={18} />,
};
