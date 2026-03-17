"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Youtube, ExternalLink } from "lucide-react";

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V2a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Columna 1: Branding y Redes */}
          <div className="space-y-6">
            <div className="relative w-80 h-26">
              <Image 
                src="/logo-footer.png" 
                alt="Hikvision Huancayo Logo" 
                fill
                className="object-contain object-left" 
              />
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Especialistas en seguridad electrónica, conectividad y soluciones tecnológicas en la región Junín.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61577989558253" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] transition-all"><FacebookIcon size={20} /></a>
              <a href="https://www.youtube.com/@hikvision_huancayo" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF0000] transition-all"><Youtube size={20} /></a>
              <a href="https://www.tiktok.com/@hikvision_huancayo" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-black transition-all"><TikTokIcon size={20} /></a>
            </div>
          </div>

          {/* Columna 2: Contacto con Enlaces Clickables */}
          <div className="md:pl-10">
            <h4 className="text-sm font-bold uppercase tracking-widest text-red-500 mb-6 italic">Líneas Directas</h4>
            <ul className="space-y-5">
              <li>
                <a href="tel:064600070" className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                    <Phone size={18} className="text-[#e60012] group-hover:text-white" />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-gray-200 group-hover:text-red-500 transition-colors">Ventas: (064) 600070</p>
                    <p className="text-gray-400 italic">Click para llamar</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:ventas@hikvisionhuancayo.com" className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                    <Mail size={18} className="text-[#e60012] group-hover:text-white" />
                  </div>
                  <div className="text-sm self-center">
                    <p className="text-gray-400 group-hover:text-white transition-colors">ventas@hikvisionhuancayo.com</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Ubicaciones y Libro de Reclamaciones */}
          <div className="md:pl-10 space-y-8">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-red-500 mb-6 italic">Nuestras Sedes</h4>
              <div className="space-y-4 text-sm">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Jose+Olaya+109+Huancayo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-600/10 flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                    <MapPin size={18} className="text-[#e60012] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-200 group-hover:text-red-500 transition-colors">Huancayo:</p>
                    <p className="text-gray-400">Av. Jose Olaya Nro. 109</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 pt-2 border-t border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-transparent flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-gray-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-200">Sapallanga:</p>
                    <p className="text-gray-400">Pje. La Capitana Nro. 01</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a href="https://reclamaciones.proyectocastro.com/" target="_blank" className="inline-block group">
                <div className="relative w-40 h-16 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                  <Image 
                    src="/libro.png"
                    alt="Libro de Reclamaciones"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest">
            © {currentYear} <span className="text-gray-300 font-bold">Grupo Castro</span>.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-600">
            <a href="https://nilhardsoft.org" target="_blank" className="flex items-center gap-1.5 hover:text-white transition-colors group">
              Powered by <span className="text-gray-400 group-hover:text-red-500 transition-colors">Nilhardsoft</span> <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}