"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Planes", href: "/#planes" },
    { name: "Nosotros", href: "/nosotros" },
  ];

  // Variantes para la entrada secuencial del Navbar
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-between items-center h-20"
        >
          
          {/* Logo animado */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
              <div className="relative w-10 h-10 overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="Hikvision Huancayo" 
                  fill 
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">
                Hikvision <span className="text-red-600">Huancayo</span>
              </span>
            </Link>
          </motion.div>

          {/* Menú para Escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                variants={itemVariants}
                href={link.href}
                className="relative text-slate-600 hover:text-red-600 font-semibold transition-colors duration-300 group py-2"
              >
                {link.name}
                {/* Línea animada inferior al hacer hover */}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600 scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left"></span>
              </motion.a>
            ))}
            
            {/* Botón de Contacto */}
            <motion.div variants={itemVariants}>
              <Link 
                href="/contacto"
                className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded-lg hover:bg-red-600 transition-all shadow-md active:scale-95 hover:shadow-lg inline-block"
              >
                Contactar
              </Link>
            </motion.div>
          </div>

          {/* Botón Menú Móvil */}
          <motion.div variants={itemVariants} className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              <svg className="h-7 w-7 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Menú Desplegable Móvil con AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)} 
                  className="block px-3 py-4 text-base font-bold text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-md"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Link 
                  href="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-4 bg-red-600 text-white font-bold rounded-xl shadow-md active:scale-95 transition-transform"
                >
                  Ir a Contacto
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}