import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Àlex Gómez · Full-Stack Developer",
  description:
    "Portfolio de Àlex Gómez, Full-Stack Developer con 3+ años de experiencia en JavaScript, PHP, React, Next.js, Laravel y Vue. Disponible para nuevos proyectos.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${jakarta.variable} ${jetbrains.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
