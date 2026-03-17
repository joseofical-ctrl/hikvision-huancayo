"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Hero() {
  const [init, setInit] = useState(false);
  const [index, setIndex] = useState(0);

  const phrases = [
    "Instalación de Cámaras y Alarmas",
    "Seguridad Integral para tu Empresa",
    "Monitoreo Continuo 24/7",
    "Conectividad Satelital Starlink"
  ];

  const phoneNumber = "992221920";
  const message = encodeURIComponent("Hola Hikvision Huancayo, me gustaría cotizar un servicio de seguridad.");

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: "#ffffff" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#add8e6" },
      links: { color: "#add8e6", distance: 150, enable: true, opacity: 0.4, width: 1 },
      move: { enable: true, speed: 1.5, direction: "none" as const, outModes: { default: "bounce" as const } },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.6 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="relative pt-48 pb-32 w-full flex items-center justify-center overflow-hidden bg-white">
      {init && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 2 }} 
          className="absolute inset-0 z-0"
        >
          <Particles id="tsparticles" options={particlesOptions} />
        </motion.div>
      )}

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 w-full max-w-4xl"
      >
        <motion.h1 variants={itemVariants} className="text-sm md:text-base text-gray-500 font-bold tracking-[0.2em] uppercase mb-6">
          Hikvision Huancayo
        </motion.h1>
        
        <motion.div variants={itemVariants} className="h-24 md:h-28 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="text-5xl md:text-7xl font-extrabold text-[#0f172a] tracking-tight"
            >
              {phrases[index]}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        <motion.p variants={itemVariants} className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
          Más que un técnico, una solución. Especialistas en videovigilancia, redes y facturación electrónica.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center relative z-20">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/51${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-[#e60012] text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 flex items-center justify-center"
          >
            Cotizar Servicio
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#planes"
            className="px-8 py-3.5 bg-white text-gray-800 font-semibold rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            Ver Planes
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}