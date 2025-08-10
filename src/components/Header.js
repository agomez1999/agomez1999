"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons
import { IoHome } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, href: "/me", label: "Sobre mí" },
    { id: 2, href: "/studies", label: "Formación" },
    { id: 3, href: "/professional-career", label: "Experiencia profesional" },
    { id: 4, href: "/contacte", label: "Contacto" },
  ];

  return (
    <header className="px-2 py-4 bg-amber-600 w-full flex items-center justify-between text-black relative">
      <Link href="/" className={`flex items-center gap-2 ${pathname === "/" ? "font-semibold" : ""}`} onClick={() => setIsOpen(false)}>
        <IoHome />
        <span>Inicio</span>
      </Link>

      {/* Hamburguer button (Mobile) */}
      <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-black focus:outline-none" aria-label="Toggle menu">
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Desktop menu */}
      <nav className="hidden sm:flex justify-end gap-6">
        {links.map((link) => (
          <Link key={link.id} href={link.href} className={pathname === link.href ? "font-semibold" : ""}>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="sm:hidden absolute top-full left-0 right-0 bg-amber-600 flex flex-col gap-2 p-4 z-50 shadow-lg">
          {links.map((link) => (
            <Link key={link.id} href={link.href} className={`block ${pathname === link.href ? "font-semibold" : ""}`} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
