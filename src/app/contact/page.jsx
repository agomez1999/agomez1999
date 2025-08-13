// Icons
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-[calc(100vh-10rem)] flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <section className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full flex flex-col gap-6 text-center">
        
        <h1 className="text-4xl font-bold text-gray-800">Contacto</h1>

        <div>
          <p className="text-amber-600 font-semibold text-lg">
            ¿Tienes una idea en mente? Me encantaría escucharla.
          </p>
          <p className="text-gray-600 mt-1">
            Escríbeme y vemos cómo podemos trabajar juntos.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <a href="mailto:agomez99.dev@gmail.com" className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-lg shadow-md flex items-center gap-2 w-fit transition-transform hover:scale-105">
            <MdEmail size={20} />
            <span>Enviar un correo</span>
          </a>

          <span className="text-gray-400">o</span>

          <a href="https://t.me/stickman170" target="_blank" rel="noopener noreferrer" className="bg-[#26A5E4] hover:bg-[#1f94cc] text-white px-5 py-3 rounded-lg shadow-md flex items-center gap-2 w-fit transition-transform hover:scale-105">
            <FaTelegramPlane size={20} />
            <span>Escribir por Telegram</span>
          </a>
        </div>
      </section>
    </main>
  );
}
