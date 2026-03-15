"use client";

import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Jazmin Sedano P.", 
      role: "Asesor Comercial", 
      area: "Ventas",
      phone: "922221920",
      image: "/equipo/jazmin.jpg",
      hidePhone: true,
    },
    { 
      name: "Jose Castro M.", 
      role: "Tecnico", 
      area: "Sistemas",
      phone: "905443001",
      image: "",
    },
    { 
      name: "Joshua W. Herrera R.", 
      role: "Asesor Comercial",
      area: "Administración",
      phone: "933434703",
      image: "/equipo/joshua.jpg",
    },
    { 
      name: "Jhon Castro M.", 
      role: "Técnico", 
      area: "Sistemas",
      phone: "905439008",
      image: "/equipo/jhon.jpg",
    },
    { 
      name: "Jherson Villa Arcibia", 
      role: "Desarrollador", 
      area: "Sistemas",
      phone: "926461654",
      image: "",
    },
    { 
      name: "Nilton H. Castro M.", 
      role: "Técnico", 
      area: "Sistemas",
      phone: "993996443",
      image: "/equipo/nilton.jpg",
    },
    { 
      name: "Jhoan A. Leiva Landa", 
      role: "Técnico", 
      area: "Sistemas",
      phone: "973251364",
      image: "",
    },
    { 
      name: "Jan Pier Miranda G.", 
      role: "Asesor Comercial", 
      area: "Administración",
      phone: "960738409",
      image: "/equipo/janpier.jpg",
    },
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  };

  // Mensaje predeterminado para WhatsApp
  const waMessage = encodeURIComponent("Hola, vengo de Hikvision Huancayo y me gustaría recibir más información sobre sus servicios de seguridad.");

  return (
    <section className="py-24 bg-white relative z-10" id="equipo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-base font-semibold text-red-600 uppercase tracking-[0.2em] block mb-4">
            ASESORÍA DIRECTA
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group bg-gray-50 rounded-3xl p-6 transition-all duration-300 hover:bg-white hover:shadow-xl border border-transparent hover:border-red-50">
              
              <div className="relative w-24 h-24 mb-6 mx-auto">
                {member.image && member.image.trim() !== "" ? (
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-200">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg group-hover:bg-red-600 transition-colors duration-500">
                    <span className="text-3xl font-bold text-white tracking-tighter">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
              </div>

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500">{member.area}</p>
              </div>

              <div className="flex gap-3 justify-center pt-6 border-t border-gray-100">
                {/* Botón WhatsApp con mensaje pre-escrito */}
                <a
                  href={`https://wa.me/51${member.phone}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-2.5 rounded-xl hover:bg-green-600 transition-colors shadow-md shadow-green-200"
                  title="Escribir por WhatsApp"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm font-bold">WhatsApp</span>
                </a>

                {/* Botón Llamar Condicional */}
                {!member.hidePhone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="w-12 flex items-center justify-center bg-slate-900 text-white py-2.5 rounded-xl hover:bg-slate-800 transition-colors shadow-md shadow-slate-200"
                    title="Llamar ahora"
                  >
                    <Phone size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}