"use client";

import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Team() {
  const team = [
    {
      name: "Jazmin Sedano P.", 
      role: "Asesor Comercial", 
      area: "Ventas",
      whatsapp: "922221920",
      image: "/equipo/jazmin.jpg",
      hidePhone: true,
    },
    { 
      name: "Jose Castro M.",
      role: "Técnico", 
      area: "Sistemas",
      whatsapp: "905443001",
      callPhone: "905443001",
      image: "",
    },
    { 
      name: "Joshua W. Herrera R.", 
      role: "Asesor Comercial",
      area: "Administración",
      whatsapp: "933434703",
      callPhone: "933434703",
      image: "/equipo/joshua.jpg",
    },
    { 
      name: "Jhon Castro M.", 
      role: "Técnico", 
      area: "Sistemas",
      whatsapp: "905439008",
      callPhone: "905439008",
      image: "/equipo/jhon.jpg",
    },
    { 
      name: "Nilton H. Castro M.", 
      role: "Técnico", 
      area: "Sistemas",
      whatsapp: "993996443",
      callPhone: "993996443",
      image: "/equipo/nilton.jpg",
    },
    { 
      name: "Jhoan A. Leiva Landa", 
      role: "Técnico", 
      area: "Sistemas",
      whatsapp: "973251364",
      callPhone: "973251364",
      image: "",
    },
    { 
      name: "Jan Pier Miranda G.", 
      role: "Asesor Comercial", 
      area: "Administración",
      whatsapp: "960738409",
      callPhone: "960738409",
      image: "/equipo/janpier.jpg",
    },
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  };

  const waMessage = encodeURIComponent("Hola Hikvision Huancayo, me gustaría recibir más información sobre sus servicios de seguridad.");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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
    <section className="py-24 bg-white relative z-10" id="equipo">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span variants={itemVariants} className="text-base font-semibold text-red-600 uppercase tracking-[0.2em] block mb-4">
            ASESORÍA DIRECTA
          </motion.span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => {
            const phoneToCall = member.callPhone || member.whatsapp;

            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group bg-gray-50 rounded-3xl p-6 transition-colors duration-300 hover:bg-white shadow-sm hover:shadow-xl border border-transparent hover:border-red-50 flex flex-col h-full"
              >
                
                {/* AQUÍ ESTÁ EL CAMBIO: Cambiamos w-24 h-24 por w-40 h-40 */}
                <div className="relative w-40 h-40 mb-6 mx-auto shrink-0">
                  {member.image && member.image.trim() !== "" ? (
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-white border-[5px] border-slate-200 shadow-sm relative">
                      <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  ) : (
                    <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg group-hover:bg-red-600 transition-colors duration-500 relative">
                      <span className="text-4xl font-bold text-white tracking-tighter relative z-10">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="text-center mb-6 grow">
                  <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500">{member.area}</p>
                </div>

                <div className="flex gap-3 justify-center pt-6 border-t border-gray-100 shrink-0">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/51${member.whatsapp}?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-2.5 rounded-xl hover:bg-green-600 transition-colors shadow-md shadow-green-200"
                    title="Escribir por WhatsApp"
                  >
                    <MessageCircle size={18} />
                    <span className="text-sm font-bold">WhatsApp</span>
                  </motion.a>

                  {!member.hidePhone && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={`tel:${phoneToCall}`}
                      className="w-12 flex items-center justify-center bg-slate-900 text-white py-2.5 rounded-xl hover:bg-slate-800 transition-colors shadow-md shadow-slate-200"
                      title="Llamar ahora"
                    >
                      <Phone size={18} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}