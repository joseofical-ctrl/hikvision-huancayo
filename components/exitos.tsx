"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SuccessCases() {
  const projects = [
    { src: "/exitos/chira.jpg", alt: "chira" },
    { src: "/exitos/mash.jpg", alt: "mash" },
    { src: "/exitos/arcangel.jpg", alt: "arcangel" },
    { src: "/exitos/dmiel.jpg", alt: "dmiel" },
    { src: "/exitos/apunto.jpg", alt: "apunto" },
    { src: "/exitos/mayo.jpg", alt: "mayo" },
    { src: "/exitos/danifs.jpg", alt: "danifs" },
    { src: "/exitos/vegas.jpg", alt: "vegas" },
  ];

  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative z-10" id="exito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"> {/* Aumentado mb-12 a mb-16 */}
        <div className="text-center">
          <span className="text-base font-semibold text-red-600 uppercase tracking-[0.2em] block mb-4">
            NUESTRA EXPERIENCIA
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Casos de Éxito
          </h2>
        </div>
      </div>

      <div className="w-full flex overflow-hidden py-4"> {/* Agregado py-4 para dar espacio a la sombra */}
        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          // CÁLCULO PARA 8 FOTOS: (240px ancho + 24px gap) * 8 fotos = 2112
          animate={{ x: [0, -2112] }} 
          transition={{ 
            duration: 50, // Un poco más lento para que se aprecien las 8 fotos
            repeat: Infinity, 
            ease: "linear" 
          }}
          whileHover={{ transition: { duration: 0 } }} 
        >
          {duplicatedProjects.map((project, index) => (
            <div 
              key={index} 
              className="relative w-[240px] h-[160px] rounded-2xl overflow-hidden bg-white shadow-md flex-shrink-0 group border border-gray-100"
            >
              <div className="relative w-full h-full bg-slate-100 p-2 flex items-center justify-center">
                <Image 
                  src={project.src} 
                  alt={project.alt}
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700 p-1"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-20 text-center px-4"> {/* Aumentado mt-12 a mt-20 */}
        <p className="text-sm text-gray-500 font-medium tracking-wide">
          Liderando la seguridad y conectividad de <span className="text-red-600 font-bold uppercase">hogares y empresas</span> en toda la región.
        </p>
      </div>
    </section>
  );
}