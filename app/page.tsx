import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Servicios from "@/components/servicios";
import Planes from "@/components/planes";
import Equipo from "@/components/equipo";
import Exitos from "@/components/exitos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Servicios />
      <Planes />
      <Equipo />
      <Exitos />
      <Footer />
    </main>
  );
}