"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "#servicios" },
    { name: "Planes", href: "#planes" },
    { name: "Nosotros", href: "/nosotros" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <div className="relative w-10 h-10">
              <Image 
                src="/logo.png" 
                alt="Hikvision Huancayo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              Hikvision <span className="text-red-600">Huancayo</span>
            </span>
          </Link>

          {/* Menú para Escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-red-600 font-semibold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            
            {/* NUEVO: Enlace a la página de Contacto */}
            <Link 
              href="/contacto"
              className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded-lg hover:bg-red-600 transition-all shadow-md active:scale-95"
            >
              Contactar
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} 
                className="block px-3 py-4 text-base font-bold text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              {/* NUEVO: Enlace móvil a la página de Contacto */}
              <Link 
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-4 bg-red-600 text-white font-bold rounded-xl shadow-md"
              >
                Ir a Contacto
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}