"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";

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

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-8 z-20" id="estadisticas" ref={ref}>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }} // Se activa un poco antes de llegar al centro
        className="bg-[#0f172a] rounded-3xl p-8 shadow-2xl relative overflow-hidden border border-white/5"
      >
        {/* Decoración de fondo animada (Efecto "Respiración") */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.15, 0.25, 0.15] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-red-600 blur-3xl"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.15, 0.25, 0.15] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-500 blur-3xl"
        ></motion.div>
        
        <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-3 text-center">
          {stats.map((stat, index) => (
            <motion.div variants={itemVariants} key={index} className="flex flex-col items-center justify-center">
              
              <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 flex items-center">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                <span className="text-[#e60012] ml-1">{stat.suffix}</span>
              </span>
              
              <span className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}