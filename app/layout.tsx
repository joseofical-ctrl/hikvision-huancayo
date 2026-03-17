import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Tienda from "@/components/tienda";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hikvision Huancayo",
  description: "Especialistas en videovigilancia, redes y facturación electrónica.",
  icons: {
    icon: "/logo.png",
  },
  // --- NUEVA CONFIGURACIÓN PARA COMPARTIR EN REDES (OPEN GRAPH) ---
  openGraph: {
    title: "Hikvision Huancayo | Seguridad y Conectividad",
    description: "Especialistas en videovigilancia, redes y facturación electrónica para hogares y empresas en Huancayo.",
    url: "https://www.hikvisionhuancayo.com", // <-- Verifica que este sea tu dominio real
    siteName: "Hikvision Huancayo",
    images: [
      {
        url: "/logo-footer.png", // <-- Recuerda subir esta foto a tu carpeta public
        width: 1200,
        height: 630,
        alt: "Banner de Hikvision Huancayo",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  // --- CONFIGURACIÓN PARA X (TWITTER) Y OTRAS APPS ---
  twitter: {
    card: "summary_large_image",
    title: "Hikvision Huancayo | Seguridad y Conectividad",
    description: "Especialistas en videovigilancia, redes y facturación electrónica.",
    images: ["/logo-footer.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Tienda />
      </body>
    </html>
  );
}