"use client";

import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Award, Users, CheckCircle2 } from "lucide-react";

export default function NosotrosPage() {
  const valores = [
    {
      title: "Compromiso Total",
      desc: "Nos enfocamos en brindar soluciones reales que garanticen la tranquilidad y seguridad de nuestros clientes.",
      icon: <ShieldCheck className="text-red-600" size={28} />,
    },
    {
      title: "Excelencia Técnica",
      desc: "Contamos con personal altamente calificado y certificado para instalaciones de alta complejidad.",
      icon: <Award className="text-red-600" size={28} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Minimalista */}
      <section className="pt-48 pb-20 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            Trayectoria y Confianza
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-light text-slate-900 mb-8 tracking-tighter"
          >
            Quiénes <span className="font-black">Somos</span>
          </motion.h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Especialistas en la integración de sistemas de seguridad electrónica y soluciones tecnológicas en la región Junín.
          </p>
        </div>
      </section>

      {/* Misión y Visión - Estilo Limpio */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Target size={24} className="text-red-600" />
                <h2 className="text-2xl font-bold tracking-tight uppercase">Misión</h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed border-l-2 border-red-600 pl-6">
                Proveer soluciones de seguridad electrónica e ingeniería con los más altos estándares de calidad, utilizando tecnología de última generación para resguardar el patrimonio de las familias y empresas de nuestra región.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Eye size={24} className="text-red-600" />
                <h2 className="text-2xl font-bold tracking-tight uppercase">Visión</h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed border-l-2 border-slate-900 pl-6">
                Ser la empresa referente y líder en tecnología de seguridad a nivel nacional, destacando por nuestra capacidad de respuesta, innovación constante y la confianza absoluta que generamos en cada proyecto.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Pilares - Sin fondos, solo líneas finas */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <CheckCircle2 size={32} className="text-slate-900" />
              <h3 className="text-lg font-bold">Garantía Real</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Respaldo directo de marca en todos nuestros equipos instalados.</p>
            </div>

            <div className="space-y-4">
              <Users size={32} className="text-slate-900" />
              <h3 className="text-lg font-bold">Soporte Local</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Atención rápida y presencial en Huancayo y zonas aledañas.</p>
            </div>

            <div className="space-y-4">
              <Award size={32} className="text-slate-900" />
              <h3 className="text-lg font-bold">Ética Profesional</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Manejo confidencial y serio de la seguridad de su hogar o negocio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Finales - Minimalismo Máximo */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20">
          {valores.map((val, i) => (
            <div key={i} className="group">
              <div className="mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {val.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{val.title}</h4>
              <p className="text-slate-500 leading-relaxed font-light">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}