import Link from "next/link";

// Icons
import { IoHome } from "react-icons/io5";

export default function Header() {
  const links = [
    { id: 1, href: '/me', label: 'Sobre mí' },
    { id: 2, href: '/studies', label: 'Formación' },
    { id: 3, href: '/professional-career', label: 'Experiencia profesional' },
    { id: 4, href: '/contacte', label: 'Contacto' },
  ];

  return (
    <header className="px-2 py-4 bg-amber-600 h-10 w-full flex items-center justify-between text-black">
      <Link href="/"><IoHome /></Link>
      <nav className="hidden sm:flex justify-end gap-6">
        {links.map(link => (
          <Link key={link.id} href={link.href}>{link.label}</Link>
        ))}
      </nav>
    </header>
  );
}