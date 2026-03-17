"use client";

import { motion, Variants } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "PACK BÁSICO",
      price: "50",
      description: "Ideal para pequeños espacios.",
      features: [
        "01 cámara analógica 24/7",
        "Transmisión en vivo por APP",
        "Monitoreo con aviso a Policía y Serenazgo",
        "01 cámara con reconocimiento Inteligente",
        "Copia de seguridad de video 1 semana",
        "Notificación de eventos al celular",
      ],
    },
    {
      name: "PACK JUNIOR",
      price: "75",
      description: "Mayor cobertura y almacenamiento.",
      features: [
        "02 cámaras analógicas 24/7",
        "Transmisión en vivo por APP",
        "Monitoreo con aviso a Policía y Serenazgo",
        "02 cámaras con reconocimiento Inteligente",
        "Copia de seguridad de video 15 días",
        "Servicio contigo protección en el entorno",
      ],
    },
    {
      name: "PACK PRO",
      price: "100",
      description: "Seguridad avanzada para tu tranquilidad.",
      features: [
        "03 cámaras analógicas 24/7",
        "Transmisión en vivo por APP",
        "Monitoreo con aviso a Policía y Serenazgo",
        "Copia de seguridad de video 30 días",
        "Servicio contigo protección en el entorno",
        "Mascota segura protección",
      ],
    },
    {
      name: "PACK FULL",
      price: "150",
      description: "Protección total con respuesta rápida.",
      features: [
        "04 cámaras analógicas 24/7",
        "Transmisión en vivo por APP",
        "Monitoreo con aviso a Policía y Serenazgo",
        "Copia de seguridad de video 21 días",
        "Mascota segura protección",
        "Servicio Motorizado incluido",
      ],
    },
  ];

  const phoneNumber = "992221920";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
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
    <section className="py-24 bg-white border-t border-gray-50" id="planes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={itemVariants} className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Nuestros Precios
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Planes de Monitoreo
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-500">
            Elige el paquete que mejor se adapte a tus necesidades de seguridad. Todos los planes incluyen instalación profesional.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {plans.map((plan) => {
            const waMessage = encodeURIComponent(
              `Hola Hikvision Huancayo, me gustaría cotizar el ${plan.name} de S/${plan.price}/mes.`
            );

            return (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                className="relative flex flex-col p-8 bg-white rounded-3xl border border-gray-400 transition-shadow duration-300 hover:shadow-2xl hover:shadow-slate-200"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">{plan.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tighter">S/{plan.price}</span>
                  <span className="text-sm font-medium text-gray-500"> /Mes + IGV</span>
                </div>

                <ul className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="h-5 w-5 shrink-0 text-red-600 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600 leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/51${phoneNumber}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-center flex items-center justify-center bg-slate-900 text-white hover:bg-red-600 shadow-lg shadow-slate-200 transition-colors"
                >
                  Cotizar Plan
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}