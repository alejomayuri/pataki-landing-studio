"use client";

import React from "react";
import style from "./Prices.module.css";

const PLANS = [
  {
    title: "Esencial",
    price: "$ 100",
    description:
      "Perfecta para marcas o profesionales que necesitan una presencia online rápida y efectiva.",
    features: [
      "Landing page responsiva (Home + 1 vista personalizada)",
      "Diseño profesional y adaptado a tu marca",
      "Optimizada para móviles y SEO básico",
      "Formulario de contacto básico y redes sociales",
      "No aplica suscripción mensual",
    ],
    highlight: false,
  },
  {
    title: "Profesional",
    price: "$ 200",
    description:
      "Ideal para negocios que buscan destacar con una web más completa y personalizable.",
    features: [
      "Landing page responsiva (3-5 vistas personalizadas)",
      "Diseño exclusivo y adaptado a tu marca",
      "SEO avanzado y optimización de velocidad",
      "Formulario de contacto profesional",
      "Soporte técnico",
      "Aplica suscripción mensual",
    ],
    highlight: true,
  },
  {
    title: "Premium",
    price: "$ 280",
    description:
      "Pensada para proyectos en crecimiento que necesitan actualizaciones y soporte continuo.",
    features: [
      "Landing page responsiva y escalable (5+ vistas personalizadas)",
      "Diseño exclusivo y adaptado a tu marca",
      "SEO avanzado, formulario profesional y optimización de velocidad",
      "Actualización de contenido continua y soporte técnico",
      "Aplica suscripción mensual",
    ],
    highlight: false,
  },
];

const Prices = () => {
  return (
    <>
      <section
        id="precios"
        className="scroll-mt-16 py-12 md:py-16 bg-background-secondary text-[var(--color-foreground)]"
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display leading-tight mb-4 sm:mb-6 text-center md:text-left text-foreground">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
              Planes
            </span>{" "}
            que se{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7928CA] to-[#FF0080]">
              adaptan
            </span>{" "}
            a tu proyecto
          </h2>

          <p className="text-[var(--color-foreground-secondary)] font-sans text-base sm:text-lg max-w-2xl text-center md:text-left mb-12 sm:mb-20 mx-auto md:mx-0">
            Elige el paquete que mejor se ajuste a tu visión y empieza a construir
            una presencia digital que convierte.
          </p>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${style.planGrid}`}>
            {PLANS.map((plan) => (
              <div
                key={plan.title}
                className={`rounded-2xl p-6 sm:p-8 border ${
                  plan.highlight
                    ? "bg-gradient-to-br from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] border-none text-foreground shadow-xl md:scale-105"
                    : "border-[var(--color-galaxy-start)] bg-[var(--color-background-secondary)]"
                } transition-transform duration-300`}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 font-display text-foreground">
                  {plan.title}
                </h3>
                <p className="text-3xl sm:text-4xl font-bold mb-4 font-display text-foreground">
                  {plan.price}
                </p>
                <p className="text-sm sm:text-base mb-6">{plan.description}</p>
                <ul className="text-sm space-y-2 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <a
                  className={`px-5 py-3 flex justify-center sm:justify-start max-w-full sm:max-w-fit cursor-pointer rounded-md font-medium transition-colors duration-300 ${
                    plan.highlight
                      ? "bg-white text-black hover:bg-gray-200"
                      : `text-foreground font-display ${style.infinite_galaxy}`
                  }`}
                >
                  <p>Solicitar ahora</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA inferior */}
      <section className="bg-white text-gray-900 py-16 sm:py-20 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Transformemos tus ideas en una web lista para despegar
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8 text-base sm:text-lg">
          Creamos landing pages con propósito: diseño profesional, rendimiento
          optimizado y resultados reales para tu negocio o marca personal.
        </p>
        <button className="cursor-pointer bg-gradient-to-r from-[var(--color-galaxy-start)] to-[var(--color-galaxy-end)] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-200">
          Hablemos de tu proyecto
        </button>
      </section>
    </>
  );
};

export default Prices;
