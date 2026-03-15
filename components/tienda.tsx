"use client";

import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingStoreButton() {
  return (
    // position fixed lo mantiene pegado a la pantalla. z-50 asegura que esté por encima de todo
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <a
        href="https://equipos.grupocastro.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-full shadow-2xl shadow-slate-900/20 hover:bg-blue-600 hover:shadow-red-600/30 transition-all duration-300 active:scale-95"
      >
        {/* El ícono da un pequeño salto al pasar el mouse */}
        <ShoppingBag size={22} className="group-hover:-translate-y-1 transition-transform duration-300" />
        <span className="font-bold text-sm tracking-wide">Tienda</span>
      </a>
    </motion.div>
  );
}