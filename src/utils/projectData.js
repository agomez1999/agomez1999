// Campos no traducibles compartidos entre todos los idiomas
export const projectMeta = [
  {
    id:        1,
    name:      "TodoApp",
    techStack: ["React Native", "MySQLi"],
    year:      2024,
    link:      "https://github.com/agomez1999/ToDo_App",
    liveUrl:   null,
    image:     "/images/projects/TaskApp/image1.jpg",
    featured:  true,
  },
  {
    id:        2,
    name:      "Portfolio Personal",
    techStack: ["Next.js", "Tailwind CSS"],
    year:      2025,
    link:      "https://github.com/agomez1999",
    liveUrl:   null,
    image:     "/images/projects/AGomez/image1.png",
    featured:  false,
  },
];

// Contenido traducible por idioma
export const projectData = {
  es: [
    {
      id:               1,
      shortDescription: "App móvil de gestión de tareas con sincronización remota.",
      description:      "Aplicación móvil para la gestión de tareas construida con React Native. Incluye sincronización con base de datos remota, autenticación de usuario y diseño adaptado para iOS y Android.",
    },
    {
      id:               2,
      shortDescription: "Este portfolio, construido con Next.js 15 y Framer Motion.",
      description:      "Portfolio personal diseñado y desarrollado desde cero. Single-page scroll con animaciones de entrada, dark mode, tipografía moderna y arquitectura App Router de Next.js 15.",
    },
  ],

  ca: [
    {
      id:               1,
      shortDescription: "App mòbil de gestió de tasques amb sincronització remota.",
      description:      "Aplicació mòbil per a la gestió de tasques construïda amb React Native. Inclou sincronització amb base de dades remota, autenticació d'usuari i disseny adaptat per a iOS i Android.",
    },
    {
      id:               2,
      shortDescription: "Aquest portfolio, construït amb Next.js 15 i Framer Motion.",
      description:      "Portfolio personal dissenyat i desenvolupat des de zero. Single-page scroll amb animacions d'entrada, dark mode, tipografia moderna i arquitectura App Router de Next.js 15.",
    },
  ],

  en: [
    {
      id:               1,
      shortDescription: "Mobile task management app with remote sync.",
      description:      "Mobile application for task management built with React Native. Includes remote database synchronization, user authentication, and design adapted for iOS and Android.",
    },
    {
      id:               2,
      shortDescription: "This portfolio, built with Next.js 15 and Framer Motion.",
      description:      "Personal portfolio designed and developed from scratch. Single-page scroll with entry animations, dark mode, modern typography and Next.js 15 App Router architecture.",
    },
  ],
};
