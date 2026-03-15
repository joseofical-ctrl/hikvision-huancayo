# Hikvision Huancayo - Grupo Castro

Sitio web corporativo y landing page para **Hikvision Huancayo (Grupo Castro)**. Diseñado para destacar los servicios de seguridad electrónica, conectividad y facturación electrónica en la región Junín. El proyecto cuenta con un diseño "Ultra Clean" (minimalista), animaciones fluidas y optimización para conversión (enlaces directos a WhatsApp y tienda).

## 🚀 Tecnologías Utilizadas

Este proyecto fue generado y construido con tecnologías modernas para garantizar rendimiento, SEO y una excelente experiencia de usuario (UX):

- **Framework:** [Next.js 14+ (App Router)](https://nextjs.org/)
- **Librería UI:** [React](https://react.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Partículas (Hero):** [@tsparticles/react](https://particles.js.org/)
- **Iconos:** [Lucide React](https://lucide.dev/)

## 📂 Estructura del Proyecto

El proyecto sigue la estructura estándar del App Router de Next.js, modularizando las secciones en componentes reutilizables:

```text
├── app/
│   ├── contacto/         # Página de Contacto (Info + Mapa)
│   │   └── page.tsx
│   ├── nosotros/         # Página Institucional (Misión, Visión, Valores)
│   │   └── page.tsx
│   ├── globals.css       # Estilos globales y configuración Tailwind
│   ├── layout.tsx        # RootLayout (Navbar, Footer, Botón Flotante y SEO)
│   └── page.tsx          # Página de Inicio (Landing Page principal)
├── components/
│   ├── Footer.tsx               # Pie de página (3 columnas + Libro de Reclamaciones)
│   ├── FloatingStoreButton.tsx  # Botón CTA flotante global
│   ├── Hero.tsx                 # Sección principal con partículas y texto animado
│   ├── Navbar.tsx               # Menú de navegación responsive
│   ├── Pricing.tsx              # Tarjetas de planes con links dinámicos a WhatsApp
│   ├── StoreCTA.tsx             # Banner modular de redirección a tienda
│   └── SuccessCases.tsx         # Carrusel infinito de proyectos
├── public/               # Recursos estáticos
│   ├── logo.png          # Logo principal y Favicon
│   ├── libro-reclamaciones.png
│   ├── exitos/           # Imágenes del carrusel de proyectos
│   └── equipo/           # Imágenes de la página Nosotros
```
