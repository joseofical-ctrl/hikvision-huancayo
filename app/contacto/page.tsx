"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      <section className="pt-48 pb-16 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            Soporte y Ventas
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-light text-slate-900 mb-6 tracking-tighter"
          >
            Hablemos de tu <span className="font-black">Seguridad</span>
          </motion.h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Estamos listos para asesorarte. Llámanos o visítanos directamente en nuestras oficinas en Huancayo y Sapallanga.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8">Información de Contacto</h2>
                <div className="space-y-8">
                  
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl text-red-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Líneas Directas</h3>
                      <p className="text-slate-500 mt-1">
                        Ventas: <a href="tel:064600070" className="hover:text-red-600 font-medium transition-colors">064 600070</a>
                      </p>
                      <p className="text-slate-500">
                        Soporte y Asesoría: <a href="tel:992221920" className="hover:text-red-600 font-medium transition-colors">992 221 920</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl text-red-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Correo Electrónico</h3>
                      <a 
                        href="mailto:ventas@hikvisionhuancayo.com" 
                        className="text-slate-500 mt-1 block hover:text-red-600 font-medium transition-colors"
                      >
                        ventas@hikvisionhuancayo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl text-red-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Nuestras Oficinas</h3>
                      <p className="text-slate-500 mt-1"><span className="font-semibold text-slate-700">Sede Huancayo:</span> Av. Jose Olaya Nro. 109</p>
                      <p className="text-slate-500 mt-1"><span className="font-semibold text-slate-700">Sede Sapallanga:</span> Pje. La Capitana Nro. 01</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl text-red-600">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Horario de Atención</h3>
                      <p className="text-slate-500 mt-1">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                      <p className="text-slate-500">Sábado: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full h-full min-h-[500px] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl shadow-slate-200/50 bg-slate-50 relative group"
            >
              <iframe 
                src="https://maps.google.com/maps?q=HIKVISION%20HUANCAYO,%20Jose%20Olaya%20109,%20Huancayo&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}