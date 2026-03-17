"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function PopupOferta() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setIsOpen(false);

  const waMessage = encodeURIComponent(
    "Hola Hikvision Huancayo, me gustaría saber más detalles sobre la promoción que vi en la página web."
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closePopup}
          className="fixed inset-0 z-[100] bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()} 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-2xl w-full relative flex flex-col"
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors duration-300"
              title="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="relative w-full aspect-[4/3] sm:aspect-video bg-gray-100">
              <Image 
                src="/promo.jpg"
                alt="Promoción Especial Hikvision" 
                fill 
                className="object-cover" 
                priority
              />
            </div>

            {/* 2. Área de Botones Inferiores (Izquierda y Derecha) */}
            <div className="p-4 sm:p-6 flex flex-row items-center justify-between bg-white border-t border-gray-50">
              
              <a
                href={`https://wa.me/51922221920?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white font-bold py-3 px-5 sm:px-6 rounded-xl hover:bg-green-600 transition-colors shadow-md shadow-green-200 active:scale-95"
              >
                <MessageCircle size={20} />
                <span className="text-sm sm:text-base">Preguntar oferta</span>
              </a>

              <button
                onClick={closePopup}
                className="font-semibold text-sm sm:text-base text-gray-400 hover:text-slate-900 px-2 py-3 transition-colors active:scale-95"
              >
                Quizás más tarde
              </button>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}