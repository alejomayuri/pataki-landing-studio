import React from "react";
import DesigneIcon from "../Icons/Designe";
import DevelopIcon from "../Icons/Develop";
import SeoIcon from "../Icons/Seo";
import OptimizationIcon from "../Icons/Optimization";
import Item from "./Item";

const DATA = [
  {
    icon: <DesigneIcon />,
    title: "Diseño Profesional",
    description:
      "Creamos diseños profesionales, atractivos y funcionales centrados en la experiencia del usuario, la retención y la conversión de visitantes en clientes.",
  },
  {
    icon: <DevelopIcon />,
    title: "Desarrollo Web",
    description:
      "Creamos webs rápidas y seguras para todos los dispositivos usando las últimas tecnologías para asegurar rendimiento y escalabilidad.",
  },
  {
    icon: <SeoIcon />,
    title: "SEO",
    description:
      "Optimizamos cada detalle para que tu web destaque en los resultados de búsqueda. Desde la estructura y velocidad hasta el contenido.",
  },
  {
    icon: <OptimizationIcon />,
    title: "Optimización",
    description:
      "Analizamos métricas, comportamiento y rendimiento para mejorar tu landing con el tiempo y mantener tu presencia digital al máximo.",
  },
];

const Services = () => {
  return (
    <section className="flex flex-col bg-background-secondary py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display leading-tight mb-4 text-foreground">
            Creamos landing pages que{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
              convierten
            </span>
          </h2>
          <p className="text-foreground-secondary font-sans text-base sm:text-lg max-w-3xl mx-auto md:mx-0">
            Diseñamos, desarrollamos y optimizamos experiencias que impulsan tu negocio. Landings pensadas para atraer, convertir, posicionar y crecer contigo.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DATA.map((item) => (
            <Item key={item.title} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
