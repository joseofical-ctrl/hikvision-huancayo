"use client";

export default function Pricing() {
  // Hemos eliminado la propiedad "popular" de todos los planes
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

  return (
    <section className="py-24 bg-white border-t border-gray-50" id="planes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Nuestros Precios
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Planes de Monitoreo
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Elige el paquete que mejor se adapte a tus necesidades de seguridad. Todos los planes incluyen instalación profesional.
          </p>
        </div>

        {/* Cuadrícula de tarjetas sin destacar ninguna en particular */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => {
            // Mensaje actualizado incluyendo la procedencia de la página web
            const waMessage = encodeURIComponent(
              `Hola Hikvision Huancayo, me gustaría cotizar el ${plan.name} de S/${plan.price}/mes.`
            );

            return (
              <div
                key={plan.name}
                className="relative flex flex-col p-8 bg-white rounded-3xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2"
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

                {/* Botón uniforme para todos los planes */}
                <a
                  href={`https://wa.me/51${phoneNumber}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center bg-slate-900 text-white hover:bg-red-600 shadow-lg shadow-slate-200 hover:shadow-red-200 active:scale-95"
                >
                  Cotizar Plan
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}