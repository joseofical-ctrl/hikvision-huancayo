"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: "Clientes beneficiados", value: 1450, suffix: "+" },
    { label: "Total proyectos", value: 1356, suffix: "+" },
    { label: "Años de experiencia", value: 6, suffix: "" },
  ];

  return (
    // CAMBIO 1: max-w-7xl a max-w-5xl para que no sea tan ancho
    // CAMBIO 2: py-12 a py-8 para reducir el espacio vertical exterior
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-8" id="estadisticas" ref={ref}>
      
      {/* CAMBIO 3: p-14 a p-8 (menos relleno interno para hacerlo más delgado) */}
      <div className="bg-[#0f172a] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-red-600 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        
        {/* CAMBIO 4: gap-10 a gap-6 (menos espacio entre las 3 columnas) */}
        <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-3 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              
              {/* CAMBIO 5: text-6xl a text-4xl/5xl (números un poco más pequeños) */}
              <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                <span className="text-[#e60012]">{stat.suffix}</span>
              </span>
              
              {/* CAMBIO 6: text-base a text-xs/sm (letras un poco más pequeñas) */}
              <span className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}