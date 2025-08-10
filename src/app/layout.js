import { Montserrat } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Àlex Gómez - Desarrollador Fullstack Web",
  description: "Portfolio profesional de Àlex Gómez, desarrollador fullstack especializado en Next.js, React, Laravel y Vue. Diseño y desarrollo de aplicaciones web modernas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
