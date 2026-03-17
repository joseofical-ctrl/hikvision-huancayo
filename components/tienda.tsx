"use client";

import { useState, useRef, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function FloatingStoreButton() {
  // 1. Estado para controlar si está abierto o cerrado
  const [isExpanded, setIsExpanded] = useState(false);
  
  // 2. Referencia para guardar el temporizador y poder cancelarlo
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cuando el mouse entra al botón
  const handleMouseEnter = () => {
    // Si había un temporizador corriendo para cerrarlo, lo cancelamos
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsExpanded(true); // Abrimos el botón
  };

  // Cuando el mouse sale del botón
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsExpanded(false); // Cerramos el botón pasado ese tiempo
    }, 1000);
  };

  // Limpieza de seguridad: si el usuario cambia de página, matamos el temporizador
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const buttonVariants: Variants = {
    rest: { padding: "1rem", backgroundColor: "#0f172a" },
    hover: { padding: "1rem 1.5rem", backgroundColor: "#2563eb" }
  };

  const textVariants: Variants = {
    rest: { width: 0, opacity: 0, marginLeft: 0 },
    hover: { width: "auto", opacity: 1, marginLeft: "0.5rem" }
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <motion.div
        initial={{ opacity: 0, x: -50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.a
          href="https://equipos.grupocastro.org/"
          target="_blank"
          rel="noopener noreferrer"
          // Eventos de React reemplazando a whileHover
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial="rest"
          // Usamos el estado isExpanded para decidir qué animación mostrar
          animate={isExpanded ? "hover" : "rest"}
          variants={buttonVariants}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group flex items-center text-white rounded-full shadow-2xl shadow-slate-900/20 hover:shadow-red-600/30 transition-shadow duration-300 active:scale-95"
        >
          <ShoppingBag size={20} className="transition-transform duration-300" />
          
          <motion.span
            variants={textVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-bold text-sm tracking-wide overflow-hidden whitespace-nowrap"
          >
            Tienda
          </motion.span>
        </motion.a>
      </motion.div>
    </div>
  );
}