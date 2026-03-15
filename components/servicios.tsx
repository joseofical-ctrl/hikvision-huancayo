export default function Services() {
  const services = [
    {
      title: "Instalación de Cámaras IP y Analógicas",
      description: "Somos expertos en la instalación de cámaras de seguridad de última tecnología, adaptándonos a tus necesidades.",
      // Icono de Cámara
      icon: (
        <svg className="w-8 h-8 text-[#e60012]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Video Portero y Control de Acceso",
      description: "Soluciones modernas para el control de ingreso y comunicación segura en tu hogar o empresa.",
      // Icono de Puerta/Seguridad
      icon: (
        <svg className="w-8 h-8 text-[#e60012]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Alquiler de Internet 4G y Satelital",
      description: "Contamos con soluciones avanzadas (como Starlink) que te permiten estar conectado en cualquier lugar.",
      // Icono de Antena/Satélite
      icon: (
        <svg className="w-8 h-8 text-[#e60012]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19a3 3 0 01-3 3H5a2 2 0 01-2-2V8a2 2 0 012-2h4a3 3 0 013 3v10zM12 19a3 3 0 003 3h4a2 2 0 002-2V8a2 2 0 00-2-2h-4a3 3 0 00-3 3v10zM10 6L7.293 3.293a1 1 0 011.414-1.414L12 5.172l3.293-3.293a1 1 0 111.414 1.414L14 6" />
        </svg>
      ),
    },
    {
      title: "Cableado Estructurado",
      description: "Servicio profesional de instalación y mantenimiento de redes de datos y cableado integral.",
      // Icono de Red/Cables
      icon: (
        <svg className="w-8 h-8 text-[#e60012]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-2.003.801a4 4 0 01-1.543.313H8.603a2 2 0 01-1.879-1.312l-.68-2.04a2 2 0 011.374-2.513l2.8-.933a4 4 0 012.528 0l3.56 1.187a2 2 0 011.272 1.847V14a2 2 0 01-2 2h-1.572a1 1 0 01-.707-.293l-2.121-2.121a1 1 0 00-1.414 0l-1.414 1.414a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 00-1.414 0L1 15" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold text-red-600 uppercase tracking-widest">
            Soluciones Tecnológicas
          </span>
          <h2 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            ¿Qué Ofrecemos?
          </h2>
          <p className="mt-5 text-xl text-gray-600 leading-relaxed">
            Brindamos servicios integrales de seguridad y conectividad para empresas del rubro industrial, comercios locales y domicilios en Huancayo.
          </p>
        </div>

        {/* Cuadrícula de Servicios */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group p-8 bg-white border border-gray-100 rounded-3xl transition-all duration-300 hover:border-red-100 hover:shadow-2xl hover:shadow-red-500/5 hover:-translate-y-1"
            >
              {/* Fondo decorativo hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-red-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-8 border border-red-100 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-4">
                  {service.title}
                </h3>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}