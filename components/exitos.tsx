"use client";

import { motion, Variants } from "framer-motion";
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

  // Reglas de cohesión visual para los textos
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative z-10" id="exito">
      
      {/* Textos con nuestra animación estándar */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="text-center">
          <motion.span variants={itemVariants} className="text-base font-semibold text-red-600 uppercase tracking-[0.2em] block mb-4">
            NUESTRA EXPERIENCIA
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Casos de Éxito
          </motion.h2>
        </div>
      </motion.div>

      {/* Carrusel infinito sin los cuadros de fondo */}
      <div className="w-full flex overflow-hidden py-4">
        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          // CÁLCULO PARA 8 FOTOS: (240px ancho + 24px gap) * 8 fotos = 2112
          animate={{ x: [0, -2112] }} 
          transition={{ 
            duration: 50,
            repeat: Infinity, 
            ease: "linear" 
          }}
          whileHover={{ transition: { duration: 0 } }} 
        >
          {duplicatedProjects.map((project, index) => (
            <div 
              key={index} 
              // Aquí quitamos todos los fondos, bordes y sombras. Solo queda el contenedor con su tamaño.
              className="relative w-[240px] h-[160px] flex-shrink-0 group flex items-center justify-center"
            >
              <Image 
                src={project.src} 
                alt={project.alt}
                fill
                // Quitamos el p-1 extra para que el logo use todo su espacio transparente
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer de la sección animado */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 text-center px-4"
      >
        <p className="text-sm text-gray-500 font-medium tracking-wide">
          Liderando la seguridad y conectividad de <span className="text-red-600 font-bold uppercase">hogares y empresas</span> en toda la región.
        </p>
      </motion.div>
    </section>
  );
}